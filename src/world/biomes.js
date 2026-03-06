import { BlockId } from "../blocks.js";
import { WORLD_HEIGHT } from "../constants.js";
import { fbm2D } from "../utils/noise.js";

export const BIOME = {
  DESERT: 0,
  FOREST: 1,
  JUNGLE: 2,
  MOUNTAIN: 3,
  PLAINS: 4,
  TUNDRA: 5,
};

export const BIOME_NAME = {
  [BIOME.DESERT]: "Desert",
  [BIOME.FOREST]: "Forest",
  [BIOME.JUNGLE]: "Jungle",
  [BIOME.MOUNTAIN]: "Mountain",
  [BIOME.PLAINS]: "Plains",
  [BIOME.TUNDRA]: "Tundra",
};

export const BIOME_PROPS = {
  [BIOME.DESERT]: {
    temp: 0.92,
    moisture: 0.14,
    surface: BlockId.SAND,
    subsurface: BlockId.SAND,
    height: (x, z, seed) => {
      const broad = fbm2D(x * 0.0044, z * 0.0044, seed + 101, 3, 2, 0.5);
      const dunes = fbm2D(x * 0.017, z * 0.017, seed + 102, 4, 2, 0.52);
      return 19 + broad * 7 + dunes * 8;
    },
  },
  [BIOME.FOREST]: {
    temp: 0.56,
    moisture: 0.62,
    surface: BlockId.GRASS,
    subsurface: BlockId.DIRT,
    height: (x, z, seed) => {
      const broad = fbm2D(x * 0.007, z * 0.007, seed + 111, 4, 2, 0.52);
      const detail = fbm2D(x * 0.022, z * 0.022, seed + 112, 3, 2, 0.5);
      return 28 + broad * 13 + detail * 5;
    },
  },
  [BIOME.JUNGLE]: {
    temp: 0.82,
    moisture: 0.9,
    surface: BlockId.GRASS,
    subsurface: BlockId.DIRT,
    height: (x, z, seed) => {
      const broad = fbm2D(x * 0.0062, z * 0.0062, seed + 121, 4, 2, 0.54);
      const humps = fbm2D(x * 0.014, z * 0.014, seed + 122, 4, 2, 0.5);
      return 26 + broad * 10 + humps * 8;
    },
  },
  [BIOME.MOUNTAIN]: {
    temp: 0.31,
    moisture: 0.33,
    surface: BlockId.STONE,
    subsurface: BlockId.STONE,
    height: (x, z, seed) => {
      const ridges = fbm2D(x * 0.0042, z * 0.0042, seed + 131, 5, 2, 0.55);
      const peaks = fbm2D(x * 0.0026, z * 0.0026, seed + 132, 4, 2, 0.5);
      const cliffs = fbm2D(x * 0.016, z * 0.016, seed + 133, 3, 2, 0.5);
      return 34 + peaks * peaks * 70 + ridges * 24 + cliffs * 6;
    },
  },
  [BIOME.PLAINS]: {
    temp: 0.6,
    moisture: 0.46,
    surface: BlockId.GRASS,
    subsurface: BlockId.DIRT,
    height: (x, z, seed) => {
      const broad = fbm2D(x * 0.0052, z * 0.0052, seed + 141, 3, 2, 0.5);
      const detail = fbm2D(x * 0.019, z * 0.019, seed + 142, 3, 2, 0.5);
      return 24 + broad * 6 + detail * 3;
    },
  },
  [BIOME.TUNDRA]: {
    temp: 0.17,
    moisture: 0.56,
    surface: BlockId.SNOW,
    subsurface: BlockId.DIRT,
    height: (x, z, seed) => {
      const broad = fbm2D(x * 0.0047, z * 0.0047, seed + 151, 4, 2, 0.52);
      const roll = fbm2D(x * 0.013, z * 0.013, seed + 152, 3, 2, 0.5);
      return 30 + broad * 11 + roll * 4;
    },
  },
};

export const BIOME_IDS = Object.values(BIOME);

function sqr(v) {
  return v * v;
}

export function getClimate(world, x, z) {
  const temperature = fbm2D(x * 0.0017, z * 0.0017, world.seed + 501, 4, 2, 0.5);
  const moisture = fbm2D(x * 0.0018, z * 0.0018, world.seed + 601, 4, 2, 0.5);
  return { temperature, moisture };
}

export function getBiomeBlend(world, x, z) {
  const climate = getClimate(world, x, z);
  let total = 0;
  let dominant = BIOME.FOREST;
  let dominantWeight = -1;
  const weights = [];

  for (const id of BIOME_IDS) {
    const b = BIOME_PROPS[id];
    const d2 = sqr(climate.temperature - b.temp) + sqr(climate.moisture - b.moisture);
    const w = Math.exp(-d2 * 12.5);
    weights.push([id, w]);
    total += w;
    if (w > dominantWeight) {
      dominantWeight = w;
      dominant = id;
    }
  }

  return { dominant, weights, total };
}

export function getColumnData(world, x, z) {
  const blend = getBiomeBlend(world, x, z);
  let height = 0;

  for (const [id, rawWeight] of blend.weights) {
    const w = rawWeight / blend.total;
    height += BIOME_PROPS[id].height(x, z, world.seed) * w;
  }

  const h = Math.max(3, Math.min(WORLD_HEIGHT - 2, Math.floor(height)));
  const dominantBiome = blend.dominant;
  let surface = BIOME_PROPS[dominantBiome].surface;
  const subsurface = BIOME_PROPS[dominantBiome].subsurface;

  if (dominantBiome === BIOME.MOUNTAIN && h > 80) surface = BlockId.SNOW;

  return {
    height: h,
    dominantBiome,
    surface,
    subsurface,
  };
}
