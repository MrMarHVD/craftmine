/**
 * @module world/features
 * @description Places surface decorations — trees, flowers, cacti, vines,
 * stone spires, and gravel patches — into a chunk's block data after the
 * base terrain has been generated. Each biome has its own set of feature rules
 * driven by per-column hash values and cluster noise, ensuring that decorations
 * are dense in the right areas and absent where the terrain is unstable.
 *
 * Features are stamped into the chunk with a margin that extends beyond the
 * chunk boundary so that large structures (e.g., trees with radius 3) that
 * originate outside the chunk can still write blocks inside it.
 */

import { BlockId } from "../blocks.js";
import { CHUNK_SIZE } from "../constants.js";
import { valueNoise2D } from "../utils/noise.js";
import { hash2D } from "../utils/random.js";
import { BIOME } from "./biomes.js";

/**
 * Iterates over a padded region around chunk `(cx, cz)` and stamps
 * biome-appropriate decorations into `blocks`. The padding (6 blocks on each
 * side) allows features whose anchor column lies just outside the chunk to
 * still write leaf/vine blocks inside it, preventing unnatural flat edges at
 * chunk borders.
 *
 * Feature types per biome:
 * - **Forest**: regular trees, apple trees, flowers, occasional brambles.
 * - **Jungle**: tall trees with vines, moss, yellow flowers, occasional brambles.
 * - **Desert**: cacti of varying height, gravel patches.
 * - **Mountain**: gravel patches, stone/snow spires above Y 70.
 * - **Plains**: red and yellow flowers, sparse trees, occasional brambles.
 * - **Tundra**: gravel patches, sparse trees.
 *
 * @param {Object} world - The `World` instance used to read column data and write blocks.
 * @param {Uint8Array} blocks - The chunk's flat block data array (modified in place).
 * @param {number} cx - Chunk X grid coordinate.
 * @param {number} cz - Chunk Z grid coordinate.
 * @param {number} worldX0 - World X coordinate of the chunk's west edge.
 * @param {number} worldZ0 - World Z coordinate of the chunk's north edge.
 */
export function populateFeatures(world, blocks, cx, cz, worldX0, worldZ0) {
  const margin = 6;
  for (let x = worldX0 - margin; x < worldX0 + CHUNK_SIZE + margin; x++) {
    for (let z = worldZ0 - margin; z < worldZ0 + CHUNK_SIZE + margin; z++) {
      const c = world.getColumnData(x, z);
      const y = c.height;
      const above = world.getGeneratedBlockFromChunkData(blocks, cx, cz, x, y + 1, z);
      const stableSurface = hasStableSurface(world, blocks, cx, cz, x, y, z);
      const h = hash2D(x, z, world.seed + 9001);
      const cluster = valueNoise2D(x * 0.03, z * 0.03, world.seed + 9002);

      if (c.dominantBiome === BIOME.FOREST) {
        if (stableSurface && h > 0.981 && cluster > 0.42 && c.surface === BlockId.GRASS) {
          placeTree(world, blocks, cx, cz, x, y + 1, z, 4 + ((h * 4) | 0), 2, false);
        }
        if (stableSurface && h > 0.973 && h <= 0.981 && cluster > 0.46 && c.surface === BlockId.GRASS) {
          placeAppleTree(world, blocks, cx, cz, x, y + 1, z, 5 + ((h * 3) | 0));
        }
        if (stableSurface && above === BlockId.AIR && c.surface === BlockId.GRASS && h > 0.93 && h < 0.948) {
          world.setGeneratedBlockIfInChunk(blocks, cx, cz, x, y + 1, z, BlockId.FLOWER_RED);
        }
        if (stableSurface && above === BlockId.AIR && c.surface === BlockId.GRASS && h > 0.948 && h < 0.965) {
          world.setGeneratedBlockIfInChunk(blocks, cx, cz, x, y + 1, z, BlockId.FLOWER_YELLOW);
        }
        if (stableSurface && above === BlockId.AIR && c.surface === BlockId.GRASS && h > 0.967 && h < 0.972 && cluster > 0.48) {
          world.setGeneratedBlockIfInChunk(blocks, cx, cz, x, y + 1, z, BlockId.BRAMBLE);
        }
      }

      if (c.dominantBiome === BIOME.JUNGLE) {
        if (stableSurface && h > 0.972 && cluster > 0.34 && c.surface === BlockId.GRASS) {
          placeTree(world, blocks, cx, cz, x, y + 1, z, 6 + ((h * 5) | 0), 3, true);
        }
        if (stableSurface && above === BlockId.AIR && h > 0.88 && h < 0.94 && c.surface === BlockId.GRASS) {
          world.setGeneratedBlockIfInChunk(blocks, cx, cz, x, y + 1, z, BlockId.MOSS);
        }
        if (stableSurface && above === BlockId.AIR && h > 0.942 && h < 0.957 && c.surface === BlockId.GRASS) {
          world.setGeneratedBlockIfInChunk(blocks, cx, cz, x, y + 1, z, BlockId.FLOWER_YELLOW);
        }
        if (stableSurface && above === BlockId.AIR && c.surface === BlockId.GRASS && h > 0.957 && h < 0.965 && cluster > 0.44) {
          world.setGeneratedBlockIfInChunk(blocks, cx, cz, x, y + 1, z, BlockId.BRAMBLE);
        }
      }

      if (c.dominantBiome === BIOME.DESERT) {
        if (h > 0.972 && cluster > 0.3 && c.surface === BlockId.SAND) {
          const cactusH = 2 + ((h * 5) | 0);
          for (let i = 0; i < cactusH; i++) {
            world.setGeneratedBlockIfInChunk(blocks, cx, cz, x, y + 1 + i, z, BlockId.CACTUS);
          }
        }
        if (above === BlockId.AIR && h > 0.93 && h < 0.945 && c.surface === BlockId.SAND) {
          world.setGeneratedBlockIfInChunk(blocks, cx, cz, x, y + 1, z, BlockId.GRAVEL);
        }
      }

      if (c.dominantBiome === BIOME.MOUNTAIN) {
        if (above === BlockId.AIR && h > 0.89 && h < 0.93 && y > 68) {
          world.setGeneratedBlockIfInChunk(blocks, cx, cz, x, y + 1, z, BlockId.GRAVEL);
        }
        if (h > 0.988 && cluster > 0.5 && y > 70) {
          const spire = 2 + ((h * 4) | 0);
          for (let i = 0; i < spire; i++) {
            world.setGeneratedBlockIfInChunk(
              blocks,
              cx,
              cz,
              x,
              y + 1 + i,
              z,
              y + i > 84 ? BlockId.SNOW : BlockId.STONE
            );
          }
        }
      }

      if (c.dominantBiome === BIOME.PLAINS) {
        if (stableSurface && above === BlockId.AIR && c.surface === BlockId.GRASS && h > 0.86 && h < 0.915) {
          world.setGeneratedBlockIfInChunk(blocks, cx, cz, x, y + 1, z, BlockId.FLOWER_RED);
        }
        if (stableSurface && above === BlockId.AIR && c.surface === BlockId.GRASS && h > 0.915 && h < 0.965) {
          world.setGeneratedBlockIfInChunk(blocks, cx, cz, x, y + 1, z, BlockId.FLOWER_YELLOW);
        }
        if (stableSurface && h > 0.992 && cluster > 0.45 && c.surface === BlockId.GRASS) {
          placeTree(world, blocks, cx, cz, x, y + 1, z, 4 + ((h * 3) | 0), 2, false);
        }
        if (stableSurface && above === BlockId.AIR && c.surface === BlockId.GRASS && h > 0.966 && h < 0.972 && cluster > 0.4) {
          world.setGeneratedBlockIfInChunk(blocks, cx, cz, x, y + 1, z, BlockId.BRAMBLE);
        }
      }

      if (c.dominantBiome === BIOME.TUNDRA) {
        if (above === BlockId.AIR && h > 0.94 && h < 0.97 && c.surface === BlockId.SNOW) {
          world.setGeneratedBlockIfInChunk(blocks, cx, cz, x, y + 1, z, BlockId.GRAVEL);
        }
        if (h > 0.991 && cluster > 0.5 && c.surface === BlockId.SNOW) {
          placeTree(world, blocks, cx, cz, x, y + 1, z, 4 + ((h * 3) | 0), 1, false);
        }
      }
    }
  }
}

/**
 * Checks whether column `(x, z)` has a stable, non-floating surface suitable
 * for anchoring a tree or decorative object. A surface is considered stable if:
 * 1. The surface block is not air or water.
 * 2. The column is inside the current chunk (features anchored outside are
 *    handled by the chunk that owns those columns).
 * 3. All five blocks directly below the surface are also solid non-water blocks,
 *    preventing features from floating above ravines or caves.
 * @param {Object} world - The `World` instance.
 * @param {Uint8Array} blocks - Chunk block data.
 * @param {number} cx - Chunk X grid coordinate.
 * @param {number} cz - Chunk Z grid coordinate.
 * @param {number} x - World X of the column.
 * @param {number} y - Surface Y of the column.
 * @param {number} z - World Z of the column.
 * @returns {boolean} `true` if the surface is stable and inside the chunk.
 */
function hasStableSurface(world, blocks, cx, cz, x, y, z) {
  const surfaceId = world.getGeneratedBlockFromChunkData(blocks, cx, cz, x, y, z);
  if (surfaceId === BlockId.AIR || surfaceId === BlockId.WATER) return false;

  // If the column is outside this chunk, defer anchor placement to neighboring chunk generation.
  const lx = x - cx * CHUNK_SIZE;
  const lz = z - cz * CHUNK_SIZE;
  if (lx < 0 || lz < 0 || lx >= CHUNK_SIZE || lz >= CHUNK_SIZE) return false;

  for (let d = 1; d <= 5; d++) {
    const id = world.getGeneratedBlockFromChunkData(blocks, cx, cz, x, y - d, z);
    if (id === BlockId.AIR || id === BlockId.WATER) return false;
  }
  return true;
}

/**
 * Places a tree with a straight log trunk and a spherical leaf canopy,
 * optionally adding hanging vines on the outer leaf edges (jungle variant).
 * The canopy radius shrinks toward the top and bottom of the crown, giving it
 * a natural rounded shape. Vines are placed below edge leaf blocks with a
 * probability based on a per-position hash; vine length varies from 2 to 5.
 * @param {Object} world - The `World` instance.
 * @param {Uint8Array} blocks - Chunk block data.
 * @param {number} cx - Chunk X grid coordinate.
 * @param {number} cz - Chunk Z grid coordinate.
 * @param {number} x - World X of the trunk base.
 * @param {number} y - World Y of the trunk base (one above the surface).
 * @param {number} z - World Z of the trunk base.
 * @param {number} trunkH - Height of the trunk in blocks.
 * @param {number} radius - Base radius of the leaf canopy in blocks.
 * @param {boolean} withVines - If `true`, jungle vines are added below outer canopy edges.
 */
function placeTree(world, blocks, cx, cz, x, y, z, trunkH, radius, withVines) {
  for (let i = 0; i < trunkH; i++) {
    world.setGeneratedBlockIfInChunk(blocks, cx, cz, x, y + i, z, BlockId.LOG);
  }

  const topY = y + trunkH;
  for (let dy = -radius; dy <= radius; dy++) {
    const r = Math.max(1, radius - Math.abs(dy) + 1);
    for (let ox = -r; ox <= r; ox++) {
      for (let oz = -r; oz <= r; oz++) {
        if (Math.abs(ox) + Math.abs(oz) > r + 1) continue;
        const lx = x + ox;
        const ly = topY + dy;
        const lz = z + oz;
        world.setGeneratedLeafIfAir(blocks, cx, cz, lx, ly, lz);

        if (!withVines) continue;
        const edge = Math.abs(ox) === r || Math.abs(oz) === r;
        if (!edge) continue;

        const vhash = hash2D(lx, lz, world.seed + 11811 + dy * 17);
        if (vhash < 0.62) continue;
        const vineLen = 2 + ((vhash * 4) | 0);
        for (let vi = 1; vi <= vineLen; vi++) {
          world.setGeneratedVineIfAir(blocks, cx, cz, lx, ly - vi, lz);
        }
      }
    }
  }
}

/**
 * Places an apple tree: a straight log trunk topped with a spherical leaf
 * canopy where some outer positions are replaced with apple blocks. The apple
 * probability is determined by a per-position hash so the distribution is
 * deterministic but appears random. Only positions at Manhattan distance ≥ 2
 * from the trunk axis are eligible for apples, keeping the core of the crown
 * leafy.
 * @param {Object} world - The `World` instance.
 * @param {Uint8Array} blocks - Chunk block data.
 * @param {number} cx - Chunk X grid coordinate.
 * @param {number} cz - Chunk Z grid coordinate.
 * @param {number} x - World X of the trunk base.
 * @param {number} y - World Y of the trunk base.
 * @param {number} z - World Z of the trunk base.
 * @param {number} trunkH - Height of the trunk in blocks.
 */
function placeAppleTree(world, blocks, cx, cz, x, y, z, trunkH) {
  for (let i = 0; i < trunkH; i++) {
    world.setGeneratedBlockIfInChunk(blocks, cx, cz, x, y + i, z, BlockId.LOG);
  }

  const topY = y + trunkH;
  const radius = 2;
  for (let dy = -radius; dy <= radius; dy++) {
    const r = Math.max(1, radius - Math.abs(dy) + 1);
    for (let ox = -r; ox <= r; ox++) {
      for (let oz = -r; oz <= r; oz++) {
        if (Math.abs(ox) + Math.abs(oz) > r + 1) continue;
        const lx = x + ox;
        const ly = topY + dy;
        const lz = z + oz;

        const fruitRoll = hash2D(lx * 19 + ly, lz * 23 - ly, world.seed + 29011);
        if (fruitRoll > 0.86 && Math.abs(ox) + Math.abs(oz) >= 2) {
          world.setGeneratedBlockIfInChunk(blocks, cx, cz, lx, ly, lz, BlockId.APPLE);
        } else {
          world.setGeneratedLeafIfAir(blocks, cx, cz, lx, ly, lz);
        }
      }
    }
  }
}
