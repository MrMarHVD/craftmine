import { BIOME } from "./biomes.js";

export const WORLD_SPAWN_CONFIG = {
  ravineChance: 0.24,
  castleSpawnChance: 0.045,
  hostileSiteChance: 0.56,
  questgiverChance: 0.07,
  nightSkeletonChunkChance: 0.045,
  wizardGroupChance: 0.018,
};

export const ORE_SPAWN_CONFIG = {
  iron: {
    minY: 6,
    maxY: 72,
    thresholdExposed: 0.79,
    thresholdHidden: 0.965,
    clusterScale: 0.16,
  },
  coal: {
    minY: 8,
    maxY: 88,
    thresholdExposed: 0.855,
    thresholdHidden: 0.978,
    clusterScale: 0.14,
  },
  gold: {
    minY: 4,
    maxY: 34,
    thresholdExposed: 0.93,
    thresholdHidden: 0.992,
    clusterScale: 0.18,
  },
};

export const FEATURE_SPAWN_RULES = {
  [BIOME.FOREST]: {
    tree: { minHash: 0.981, minCluster: 0.42 },
    appleTree: { minHash: 0.973, maxHash: 0.981, minCluster: 0.46 },
    flowerRed: { minHash: 0.93, maxHash: 0.948 },
    flowerYellow: { minHash: 0.948, maxHash: 0.965 },
    bramble: { minHash: 0.9715, maxHash: 0.973, minCluster: 0.68 },
  },
  [BIOME.JUNGLE]: {
    tree: { minHash: 0.972, minCluster: 0.34 },
    moss: { minHash: 0.88, maxHash: 0.94 },
    flowerYellow: { minHash: 0.942, maxHash: 0.957 },
    bramble: { minHash: 0.966, maxHash: 0.9672, minCluster: 0.64 },
  },
  [BIOME.DESERT]: {
    cactus: { minHash: 0.972, minCluster: 0.3 },
    gravel: { minHash: 0.93, maxHash: 0.945 },
  },
  [BIOME.MOUNTAIN]: {
    gravel: { minHash: 0.89, maxHash: 0.93, minY: 68 },
    spire: { minHash: 0.988, minCluster: 0.5, minY: 70 },
  },
  [BIOME.PLAINS]: {
    flowerRed: { minHash: 0.86, maxHash: 0.915 },
    flowerYellow: { minHash: 0.915, maxHash: 0.965 },
    tree: { minHash: 0.992, minCluster: 0.45 },
    bramble: { minHash: 0.971, maxHash: 0.9722, minCluster: 0.72 },
  },
  [BIOME.TUNDRA]: {
    gravel: { minHash: 0.94, maxHash: 0.97 },
    tree: { minHash: 0.991, minCluster: 0.5 },
  },
};

export function matchesSpawnWindow(rule, h, cluster = 1, y = 0) {
  if (!rule) return false;
  if (rule.minHash !== undefined && !(h > rule.minHash)) return false;
  if (rule.maxHash !== undefined && !(h < rule.maxHash)) return false;
  if (rule.minCluster !== undefined && !(cluster > rule.minCluster)) return false;
  if (rule.minY !== undefined && !(y > rule.minY)) return false;
  return true;
}
