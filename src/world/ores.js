import { BlockId } from "../blocks.js";
import { CHUNK_SIZE, WORLD_HEIGHT } from "../constants.js";
import { valueNoise3D } from "../utils/noise.js";
import { hash3D } from "../utils/random.js";
import { index3D } from "./grid.js";
import { ORE_SPAWN_CONFIG } from "./spawnConfig.js";

const NEIGHBOR_DIRS = [
  [1, 0, 0],
  [-1, 0, 0],
  [0, 1, 0],
  [0, -1, 0],
  [0, 0, 1],
  [0, 0, -1],
];

export function applyOresToChunk(world, blocks, cx, cz, worldX0, worldZ0) {
  for (let lx = 1; lx < CHUNK_SIZE - 1; lx++) {
    for (let lz = 1; lz < CHUNK_SIZE - 1; lz++) {
      const x = worldX0 + lx;
      const z = worldZ0 + lz;

      for (let y = 1; y < WORLD_HEIGHT - 1; y++) {
        const idx = index3D(lx, y, lz);
        if (blocks[idx] !== BlockId.STONE) continue;

        const airNeighbors = countAirNeighbors(blocks, lx, y, lz);
        const oreId = chooseOreId(world.seed, x, y, z, airNeighbors);
        if (oreId !== BlockId.AIR) blocks[idx] = oreId;
      }
    }
  }
}

function countAirNeighbors(blocks, lx, y, lz) {
  let air = 0;
  for (const [dx, dy, dz] of NEIGHBOR_DIRS) {
    if (blocks[index3D(lx + dx, y + dy, lz + dz)] === BlockId.AIR) air++;
  }
  return air;
}

function chooseOreId(seed, x, y, z, airNeighbors) {
  if (shouldPlaceOre(seed, x, y, z, airNeighbors, ORE_SPAWN_CONFIG.gold, 17031)) return BlockId.GOLD_ORE;
  if (shouldPlaceOre(seed, x, y, z, airNeighbors, ORE_SPAWN_CONFIG.coal, 17017)) return BlockId.COAL_ORE;
  if (shouldPlaceOre(seed, x, y, z, airNeighbors, ORE_SPAWN_CONFIG.iron, 17011)) return BlockId.IRON_ORE;
  return BlockId.AIR;
}

function shouldPlaceOre(seed, x, y, z, airNeighbors, cfg, salt) {
  if (y < cfg.minY || y > cfg.maxY) return false;

  const cluster = valueNoise3D(x * cfg.clusterScale, y * cfg.clusterScale, z * cfg.clusterScale, seed + salt);
  const roll = hash3D(x, y, z, seed + salt * 3);
  const score = cluster * 0.58 + roll * 0.42;
  const threshold =
    airNeighbors > 0
      ? Math.max(0, cfg.thresholdExposed - Math.min(0.05, airNeighbors * 0.015))
      : cfg.thresholdHidden;

  return score > threshold;
}
