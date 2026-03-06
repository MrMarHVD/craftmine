/**
 * @module world/biomes
 * @description Defines the six biomes of the world, their climate properties,
 * surface block types, and procedural height functions. `getColumnData` is the
 * primary entry point called during chunk generation: it samples a continuous
 * climate field, computes a weighted blend of all nearby biome heights, and
 * returns the surface block and integer column height for a given (x, z) world
 * coordinate — allowing smooth transitions between biomes without hard borders.
 */

import { BlockId } from "../blocks.js";
import { WORLD_HEIGHT } from "../constants.js";
import { fbm2D } from "../utils/noise.js";

/**
 * Enum of biome type identifiers used throughout world generation and mob spawning.
 * @enum {number}
 */
export const BIOME = {
  /** Hot, dry sandy landscape with dunes and sparse cacti. */
  DESERT: 0,
  /** Temperate green forest with tall trees and flowers. */
  FOREST: 1,
  /** Hot, humid jungle with dense tree canopies and vines. */
  JUNGLE: 2,
  /** High-altitude rocky terrain with sharp peaks and snow caps. */
  MOUNTAIN: 3,
  /** Flat to gently rolling grassland with scattered trees and flowers. */
  PLAINS: 4,
  /** Cold, snowy landscape with reindeer and sparse pine-like trees. */
  TUNDRA: 5,
};

/**
 * Human-readable display names for each biome, keyed by {@link BIOME} value.
 * Shown in the debug HUD and quest-giver dialogue.
 * @type {Object.<number, string>}
 */
export const BIOME_NAME = {
  [BIOME.DESERT]: "Desert",
  [BIOME.FOREST]: "Forest",
  [BIOME.JUNGLE]: "Jungle",
  [BIOME.MOUNTAIN]: "Mountain",
  [BIOME.PLAINS]: "Plains",
  [BIOME.TUNDRA]: "Tundra",
};

/**
 * Per-biome properties used for climate matching and terrain generation.
 * Each entry contains:
 * - `temp` — ideal temperature value in [0, 1] for Voronoi-style blending.
 * - `moisture` — ideal moisture value in [0, 1] for Voronoi-style blending.
 * - `surface` — the {@link BlockId} placed on the very top of solid columns.
 * - `subsurface` — the {@link BlockId} placed in the 3 layers below the surface.
 * - `height(x, z, seed)` — function returning the raw float column height at (x, z).
 * @type {Object.<number, {temp: number, moisture: number, surface: number, subsurface: number, height: function(number, number, number): number}>}
 */
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

/**
 * Array of all biome IDs, used for iterating over every biome during blending.
 * @type {number[]}
 */
export const BIOME_IDS = Object.values(BIOME);

/**
 * Squares a value. Used internally to compute squared Euclidean distance in
 * the 2-D climate space for biome weight calculations.
 * @param {number} v - Input value.
 * @returns {number} The squared value.
 */
function sqr(v) {
  return v * v;
}

/**
 * Samples the continuous 2-D climate field at world position `(x, z)`,
 * returning independent `temperature` and `moisture` values in approximately
 * [0, 1]. Both fields are large-scale fBm noise with different seeds so they
 * are uncorrelated, producing all climate combinations across the world.
 * @param {Object} world - The `World` instance (provides `world.seed`).
 * @param {number} x - World X coordinate.
 * @param {number} z - World Z coordinate.
 * @returns {{temperature: number, moisture: number}} Climate values at the given position.
 */
export function getClimate(world, x, z) {
  const temperature = fbm2D(x * 0.0017, z * 0.0017, world.seed + 501, 4, 2, 0.5);
  const moisture = fbm2D(x * 0.0018, z * 0.0018, world.seed + 601, 4, 2, 0.5);
  return { temperature, moisture };
}

/**
 * Computes a Gaussian-weighted blend of all biomes at world position `(x, z)`.
 * Each biome's weight is `exp(-d² × 12.5)` where `d²` is the squared distance
 * in climate space from the sampled climate to the biome's ideal climate point.
 * Higher values of 12.5 produce sharper biome boundaries; the dominant biome
 * is the one with the greatest individual weight.
 * @param {Object} world - The `World` instance (provides `world.seed`).
 * @param {number} x - World X coordinate.
 * @param {number} z - World Z coordinate.
 * @returns {{dominant: number, weights: Array.<[number, number]>, total: number}}
 *   The dominant biome ID, an array of `[biomeId, rawWeight]` pairs, and the
 *   sum of all raw weights (used for normalization in `getColumnData`).
 */
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

/**
 * Returns the complete column data for a given `(x, z)` world coordinate,
 * including the terrain height, dominant biome, and the surface/subsurface
 * block IDs to use during chunk generation.
 *
 * Height is computed as a weighted average of all biome height functions,
 * clamped to [3, WORLD_HEIGHT − 2], which ensures smooth transitions at biome
 * borders. Mountain columns above Y 80 additionally override the surface block
 * to Snow.
 *
 * @param {Object} world - The `World` instance (provides `world.seed`).
 * @param {number} x - World X coordinate.
 * @param {number} z - World Z coordinate.
 * @returns {{height: number, dominantBiome: number, surface: number, subsurface: number}}
 *   Terrain height in blocks, dominant biome ID, and the block IDs for the
 *   top surface and the three subsurface layers.
 */
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
