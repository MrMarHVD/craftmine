import { BlockId } from "../blocks.js";
import { CHUNK_SIZE } from "../constants.js";
import { valueNoise2D } from "../noise.js";
import { hash2D } from "../random.js";
import { BIOME } from "./biomes.js";

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
