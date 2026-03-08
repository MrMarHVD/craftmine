/**
 * @module world/carvers
 * @description Applies terrain carvers to a chunk after the base solid terrain
 * has been filled but before features are placed. Two independent passes run:
 * 1. `carveRavines` — cuts long, trench-like ravines across the landscape.
 * 2. `carveCaves` — hollows out underground tunnels using 3-D fBm thresholds.
 * Both passes write air into the chunk's block array using
 * `world.setGeneratedAirIfInChunk`, which silently ignores positions outside
 * the target chunk. After carving, `applyTerrainCarvers` guarantees the Y=0
 * row is always Bedrock.
 */

import { BlockId } from "../blocks.js";
import { CHUNK_SIZE, WORLD_HEIGHT } from "../constants.js";
import { fbm2D, fbm3D } from "../utils/noise.js";
import { floorDiv, hash2D } from "../utils/random.js";
import { WORLD_SPAWN_CONFIG } from "./spawnConfig.js";

/**
 * Width of each ravine placement cell in world blocks.
 * At most one ravine can originate per cell.
 * @type {number}
 */
const RAVINE_CELL = 96;

/**
 * Probability (0–1) that a given cell contains a ravine.
 * @type {number}
 */
/**
 * Clamps a value to [0, 1].
 * @param {number} v - Input value.
 * @returns {number} Value clamped to [0, 1].
 */
function clamp01(v) {
  return Math.max(0, Math.min(1, v));
}

/**
 * Computes the shortest 2-D distance from point `(px, pz)` to the finite
 * line segment from `(ax, az)` to `(bx, bz)`, along with the normalized
 * parameter `t` ∈ [0, 1] of the closest point on the segment. Used by
 * `carveRavines` to determine how far each chunk column is from a ravine
 * centre-line, and therefore how deep the ravine cuts at that column.
 * @param {number} px - Query point X.
 * @param {number} pz - Query point Z.
 * @param {number} ax - Segment start X.
 * @param {number} az - Segment start Z.
 * @param {number} bx - Segment end X.
 * @param {number} bz - Segment end Z.
 * @returns {{distance: number, t: number}} Distance to the closest point and its normalized parameter.
 */
function distToSegment2D(px, pz, ax, az, bx, bz) {
  const abx = bx - ax;
  const abz = bz - az;
  const apx = px - ax;
  const apz = pz - az;
  const denom = abx * abx + abz * abz;
  if (denom <= 0.00001) {
    const dx = px - ax;
    const dz = pz - az;
    return { distance: Math.hypot(dx, dz), t: 0 };
  }
  const t = clamp01((apx * abx + apz * abz) / denom);
  const qx = ax + abx * t;
  const qz = az + abz * t;
  return { distance: Math.hypot(px - qx, pz - qz), t };
}

/**
 * Returns the ravine descriptor for the cell `(cellX, cellZ)`, generating and
 * caching it on first access. A random roll determines whether the cell
 * contains a ravine at all; if it does, all geometric parameters (endpoints,
 * width, depth, cross-section exponent, flat-bottom settings, and taper
 * factors) are derived deterministically from the world seed and cell
 * coordinates. Results are cached on `world.ravineCache` to avoid regenerating
 * them on every chunk that lies within the search radius.
 * @param {Object} world - The `World` instance (provides `world.seed` and `world.ravineCache`).
 * @param {number} cellX - Ravine cell X grid index.
 * @param {number} cellZ - Ravine cell Z grid index.
 * @returns {Object|null} Ravine descriptor or `null` if the cell has no ravine.
 */
function getRavineInCell(world, cellX, cellZ) {
  const key = `${cellX},${cellZ}`;
  if (world.ravineCache.has(key)) return world.ravineCache.get(key);

  const roll = hash2D(cellX, cellZ, world.seed + 74111);
  if (roll > WORLD_SPAWN_CONFIG.ravineChance) {
    world.ravineCache.set(key, null);
    return null;
  }

  const centerX = cellX * RAVINE_CELL + RAVINE_CELL * 0.5;
  const centerZ = cellZ * RAVINE_CELL + RAVINE_CELL * 0.5;
  const angle = hash2D(cellX, cellZ, world.seed + 74113) * Math.PI * 2;
  const length = 70 + hash2D(cellX, cellZ, world.seed + 74117) * 120;
  const half = length * 0.5;

  const cxOffset = (hash2D(cellX, cellZ, world.seed + 74119) - 0.5) * 30;
  const czOffset = (hash2D(cellX, cellZ, world.seed + 74123) - 0.5) * 30;

  const mx = centerX + cxOffset;
  const mz = centerZ + czOffset;

  const ravine = {
    ax: mx - Math.cos(angle) * half,
    az: mz - Math.sin(angle) * half,
    bx: mx + Math.cos(angle) * half,
    bz: mz + Math.sin(angle) * half,
    width: 3.5 + hash2D(cellX, cellZ, world.seed + 74129) * 6.5,
    depth: 22 + hash2D(cellX, cellZ, world.seed + 74131) * 38,
    slopePow: 0.45 + hash2D(cellX, cellZ, world.seed + 74137) * 0.25,
    hasFlatBottom: hash2D(cellX, cellZ, world.seed + 74141) > 0.22,
    flatBottomWidth: 5 + hash2D(cellX, cellZ, world.seed + 74143) * 5,
    flatDepthFactor: 0.86 + hash2D(cellX, cellZ, world.seed + 74147) * 0.11,
    topNarrowFactor: 0.35 + hash2D(cellX, cellZ, world.seed + 74153) * 0.18,
    bottomExpandFactor: 1.18 + hash2D(cellX, cellZ, world.seed + 74159) * 0.22,
  };

  world.ravineCache.set(key, ravine);
  return ravine;
}

/**
 * Carves ravines into chunk `(cx, cz)` by sampling nearby ravine cells and
 * computing a tapered, depth-varying cross-section for each column.
 *
 * For each (x, z) column the function:
 * 1. Searches a 5×5 neighbourhood of ravine cells for ravines whose influence
 *    radius overlaps the column.
 * 2. For each influencing ravine, computes the carve depth using a power-law
 *    radial profile that is narrower at the top (`topNarrowFactor`) and wider
 *    at the bottom (`bottomExpandFactor`), producing the characteristic
 *    V-to-U ravine shape.
 * 3. Optionally applies a flat-bottom region where the deepest part of the
 *    ravine has a constant depth rather than a pointed V profile.
 * 4. Iterates vertically from `floorY` to `ceilingY` and removes any block
 *    within the combined influence of all ravines for that column.
 *
 * @param {Object} world - The `World` instance.
 * @param {Uint8Array} blocks - Chunk block data (modified in place).
 * @param {number} cx - Chunk X grid coordinate.
 * @param {number} cz - Chunk Z grid coordinate.
 * @param {number} worldX0 - World X of the chunk's west edge.
 * @param {number} worldZ0 - World Z of the chunk's north edge.
 */
function carveRavines(world, blocks, cx, cz, worldX0, worldZ0) {
  for (let lx = 0; lx < CHUNK_SIZE; lx++) {
    for (let lz = 0; lz < CHUNK_SIZE; lz++) {
      const x = worldX0 + lx;
      const z = worldZ0 + lz;
      const top = world.getColumnData(x, z).height;

      const baseCellX = floorDiv(x, RAVINE_CELL);
      const baseCellZ = floorDiv(z, RAVINE_CELL);
      let bestFloor = WORLD_HEIGHT;
      let hit = false;
      const influences = [];

      for (let dz = -2; dz <= 2; dz++) {
        for (let dx = -2; dx <= 2; dx++) {
          const ravine = getRavineInCell(world, baseCellX + dx, baseCellZ + dz);
          if (!ravine) continue;

          const { distance, t } = distToSegment2D(x + 0.5, z + 0.5, ravine.ax, ravine.az, ravine.bx, ravine.bz);
          const widthAt = ravine.width * (0.7 + 0.3 * Math.sin(Math.PI * t));
          // Consider expanded lower cross-section too; top checks happen during y pass.
          if (distance > widthAt * ravine.bottomExpandFactor) continue;

          const r = distance / widthAt;
          const profile = 1 - r;
          let depthAt = ravine.depth * Math.pow(profile, ravine.slopePow);
          if (ravine.hasFlatBottom) {
            const flatRadius = clamp01((ravine.flatBottomWidth * 0.5) / Math.max(0.001, widthAt));
            const flatDepth = ravine.depth * ravine.flatDepthFactor;
            if (r <= flatRadius) {
              depthAt = flatDepth;
            } else {
              const blend = clamp01((r - flatRadius) / (1 - flatRadius));
              const sideDepth = flatDepth * Math.pow(1 - blend, ravine.slopePow);
              depthAt = Math.max(depthAt, sideDepth);
            }
          }
          if (depthAt <= 0.01) continue;

          hit = true;
          const floor = top - depthAt;
          if (floor < bestFloor) bestFloor = floor;
          influences.push({
            distance,
            widthAt,
            floor,
            topNarrowFactor: ravine.topNarrowFactor,
            bottomExpandFactor: ravine.bottomExpandFactor,
          });
        }
      }

      if (!hit) continue;
      const floorY = Math.max(4, Math.floor(bestFloor));
      const ceilingY = Math.min(WORLD_HEIGHT - 2, top + 2);
      for (let y = floorY; y <= ceilingY; y++) {
        let carve = false;
        for (let i = 0; i < influences.length; i++) {
          const inf = influences[i];
          if (y < inf.floor) continue;
          const span = Math.max(1, top - inf.floor);
          const depthLerp = clamp01((top - y) / span);
          const widthFactor = inf.topNarrowFactor + (inf.bottomExpandFactor - inf.topNarrowFactor) * depthLerp;
          if (inf.distance <= inf.widthAt * widthFactor) {
            carve = true;
            break;
          }
        }
        if (carve) world.setGeneratedAirIfInChunk(blocks, cx, cz, x, y, z);
      }
    }
  }
}

/**
 * Carves caves into chunk `(cx, cz)` using two overlapping 3-D fBm noise
 * thresholds:
 * - A primary noise field (`nMain`) that carves broad cave volumes where it
 *   exceeds a threshold that lowers in high-density cave regions.
 * - A secondary branch field (`nBranch`) that, in dense cave regions, creates
 *   additional connecting tunnels.
 * A 2-D `caveRegion` noise controls where cave density is elevated, naturally
 * concentrating cave systems in certain areas.
 *
 * The function also handles surface entrances: in columns where a surface
 * entrance field and a random roll are both high, it opens a vertical shaft
 * from the surface downward, optionally extending it into a deeper funnel if
 * the nearby cave density or the entrance field is strong enough.
 *
 * @param {Object} world - The `World` instance.
 * @param {Uint8Array} blocks - Chunk block data (modified in place).
 * @param {number} cx - Chunk X grid coordinate.
 * @param {number} cz - Chunk Z grid coordinate.
 * @param {number} worldX0 - World X of the chunk's west edge.
 * @param {number} worldZ0 - World Z of the chunk's north edge.
 */
function carveCaves(world, blocks, cx, cz, worldX0, worldZ0) {
  for (let lx = 0; lx < CHUNK_SIZE; lx++) {
    for (let lz = 0; lz < CHUNK_SIZE; lz++) {
      const x = worldX0 + lx;
      const z = worldZ0 + lz;
      const top = world.getColumnData(x, z).height;
      const caveRegion = fbm2D(x * 0.008, z * 0.008, world.seed + 9501, 3, 2, 0.5);

      const maxY = Math.min(top - 2, 88);
      if (maxY <= 8) continue;

      for (let y = 6; y <= maxY; y++) {
        const nMain = fbm3D(x * 0.045, y * 0.06, z * 0.045, world.seed + 9601, 3, 2, 0.5);
        const nBranch = fbm3D(x * 0.031 + 33, y * 0.045, z * 0.031 + 91, world.seed + 9609, 2, 2, 0.5);

        const threshold = 0.71 - Math.max(0, caveRegion - 0.52) * 0.26;
        const shouldCarve = nMain > threshold || (caveRegion > 0.6 && nMain > threshold - 0.08 && nBranch > 0.72);
        if (!shouldCarve) continue;

        world.setGeneratedAirIfInChunk(blocks, cx, cz, x, y, z);
      }

      const entranceField = fbm2D(x * 0.011, z * 0.011, world.seed + 9701, 3, 2, 0.5);
      const entranceRoll = hash2D(x, z, world.seed + 9702);

      if (entranceField > 0.66 && entranceRoll > 0.93 && top > 14) {
        const openDepth = 3 + ((entranceRoll * 6) | 0);
        const endY = Math.max(5, top - openDepth);
        for (let y = top; y >= endY; y--) {
          world.setGeneratedAirIfInChunk(blocks, cx, cz, x, y, z);
        }

        const continuation = entranceField > 0.72 || caveRegion > 0.58;
        if (continuation) {
          const deepEnd = Math.max(6, top - 36);
          for (let y = endY - 1; y >= deepEnd; y--) {
            const shaftNoise = fbm3D(x * 0.06, y * 0.05, z * 0.06, world.seed + 9721, 2, 2, 0.5);
            if (shaftNoise > 0.46) {
              world.setGeneratedAirIfInChunk(blocks, cx, cz, x, y, z);
              if (hash2D(x + y, z - y, world.seed + 9731) > 0.72) {
                world.setGeneratedAirIfInChunk(blocks, cx, cz, x + 1, y, z);
              }
            }
          }
        }
      }
    }
  }
}

/**
 * Entry point called by `World.generateChunkData` after the base terrain fill.
 * Runs ravine and cave carving in sequence, then enforces that Y=0 is always
 * Bedrock (carvers may have accidentally cleared it for chunks near the world
 * bottom). This is the only function exported from this module.
 * @param {Object} world - The `World` instance.
 * @param {Uint8Array} blocks - Chunk block data (modified in place).
 * @param {number} cx - Chunk X grid coordinate.
 * @param {number} cz - Chunk Z grid coordinate.
 * @param {number} worldX0 - World X of the chunk's west edge.
 * @param {number} worldZ0 - World Z of the chunk's north edge.
 */
export function applyTerrainCarvers(world, blocks, cx, cz, worldX0, worldZ0) {
  carveRavines(world, blocks, cx, cz, worldX0, worldZ0);
  carveCaves(world, blocks, cx, cz, worldX0, worldZ0);

  for (let lx = 0; lx < CHUNK_SIZE; lx++) {
    for (let lz = 0; lz < CHUNK_SIZE; lz++) {
      if (blocks[(0 * CHUNK_SIZE + lz) * CHUNK_SIZE + lx] !== BlockId.BEDROCK) {
        blocks[(0 * CHUNK_SIZE + lz) * CHUNK_SIZE + lx] = BlockId.BEDROCK;
      }
    }
  }
}
