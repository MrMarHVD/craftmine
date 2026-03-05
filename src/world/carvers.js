import { BlockId } from "../blocks.js";
import { CHUNK_SIZE, WORLD_HEIGHT } from "../constants.js";
import { fbm2D, fbm3D } from "../noise.js";
import { floorDiv, hash2D } from "../random.js";

const RAVINE_CELL = 96;
const RAVINE_CHANCE = 0.24;

function clamp01(v) {
  return Math.max(0, Math.min(1, v));
}

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

function getRavineInCell(world, cellX, cellZ) {
  const key = `${cellX},${cellZ}`;
  if (world.ravineCache.has(key)) return world.ravineCache.get(key);

  const roll = hash2D(cellX, cellZ, world.seed + 74111);
  if (roll > RAVINE_CHANCE) {
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
    width: 4 + hash2D(cellX, cellZ, world.seed + 74129) * 8,
    depth: 14 + hash2D(cellX, cellZ, world.seed + 74131) * 34,
  };

  world.ravineCache.set(key, ravine);
  return ravine;
}

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

      for (let dz = -2; dz <= 2; dz++) {
        for (let dx = -2; dx <= 2; dx++) {
          const ravine = getRavineInCell(world, baseCellX + dx, baseCellZ + dz);
          if (!ravine) continue;

          const { distance, t } = distToSegment2D(x + 0.5, z + 0.5, ravine.ax, ravine.az, ravine.bx, ravine.bz);
          const widthAt = ravine.width * (0.7 + 0.3 * Math.sin(Math.PI * t));
          if (distance > widthAt) continue;

          hit = true;
          const profile = 1 - distance / widthAt;
          const depthAt = ravine.depth * profile * profile;
          const floor = top - depthAt;
          if (floor < bestFloor) bestFloor = floor;
        }
      }

      if (!hit) continue;
      const floorY = Math.max(4, Math.floor(bestFloor));
      const ceilingY = Math.min(WORLD_HEIGHT - 2, top + 2);
      for (let y = floorY; y <= ceilingY; y++) {
        world.setGeneratedAirIfInChunk(blocks, cx, cz, x, y, z);
      }
    }
  }
}

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
