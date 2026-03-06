/**
 * @module utils/noise
 * @description Value noise and fractal Brownian motion (fBm) functions used
 * throughout world generation. `valueNoise2D` and `valueNoise3D` produce
 * smooth, continuous random fields by bi/tri-linearly interpolating integer
 * lattice hashes. The `fbm2D` / `fbm3D` wrappers layer multiple octaves of
 * those fields to create natural-looking terrain height maps, biome climate
 * maps, cave density fields, and ravine shapes.
 */

import { hash2D, hash3D, lerp, smoothstep } from "./random.js";

/**
 * Samples smooth 2-D value noise at real-valued coordinates `(x, z)`.
 * Hashes the four integer corners of the unit cell containing `(x, z)`,
 * then bilinearly interpolates using a smoothstep curve to eliminate
 * visible grid lines. Used directly by biome height functions and fBm layers.
 * @param {number} x - Continuous X coordinate (pre-scaled by the caller).
 * @param {number} z - Continuous Z coordinate (pre-scaled by the caller).
 * @param {number} seed - Hash seed; different seeds yield independent noise fields.
 * @returns {number} Smooth noise value in approximately [0, 1].
 */
export function valueNoise2D(x, z, seed) {
  const x0 = Math.floor(x);
  const z0 = Math.floor(z);
  const xf = x - x0;
  const zf = z - z0;

  const n00 = hash2D(x0, z0, seed);
  const n10 = hash2D(x0 + 1, z0, seed);
  const n01 = hash2D(x0, z0 + 1, seed);
  const n11 = hash2D(x0 + 1, z0 + 1, seed);

  const u = smoothstep(xf);
  const v = smoothstep(zf);

  const nx0 = lerp(n00, n10, u);
  const nx1 = lerp(n01, n11, u);
  return lerp(nx0, nx1, v);
}

/**
 * Samples 2-D fractal Brownian motion (fBm) at `(x, z)` by summing
 * multiple octaves of {@link valueNoise2D}. Each octave doubles the
 * frequency (`lacunarity`) and halves the amplitude (`gain`), producing
 * the multi-scale roughness characteristic of natural terrain. The result
 * is normalized by the sum of amplitudes so the output stays near [0, 1].
 * @param {number} x - Base X coordinate (pre-scaled by the caller).
 * @param {number} z - Base Z coordinate (pre-scaled by the caller).
 * @param {number} seed - Hash seed for the first octave; subsequent octaves use `seed + i*7919`.
 * @param {number} [octaves=4] - Number of noise layers to accumulate.
 * @param {number} [lacunarity=2] - Frequency multiplier applied each octave.
 * @param {number} [gain=0.5] - Amplitude multiplier applied each octave.
 * @returns {number} Normalized fBm value in approximately [0, 1].
 */
export function fbm2D(x, z, seed, octaves = 4, lacunarity = 2, gain = 0.5) {
  let frequency = 1;
  let amplitude = 1;
  let sum = 0;
  let norm = 0;

  for (let i = 0; i < octaves; i++) {
    sum += valueNoise2D(x * frequency, z * frequency, seed + i * 7919) * amplitude;
    norm += amplitude;
    amplitude *= gain;
    frequency *= lacunarity;
  }

  return sum / norm;
}

/**
 * Samples smooth 3-D value noise at real-valued coordinates `(x, y, z)`.
 * Hashes all eight integer corners of the unit cube containing the sample
 * point and trilinearly interpolates with smoothstep curves. Used by the
 * cave carving system where density must vary in all three dimensions.
 * @param {number} x - Continuous X coordinate.
 * @param {number} y - Continuous Y coordinate.
 * @param {number} z - Continuous Z coordinate.
 * @param {number} seed - Hash seed.
 * @returns {number} Smooth 3-D noise value in approximately [0, 1].
 */
export function valueNoise3D(x, y, z, seed) {
  const x0 = Math.floor(x);
  const y0 = Math.floor(y);
  const z0 = Math.floor(z);
  const xf = x - x0;
  const yf = y - y0;
  const zf = z - z0;

  const c000 = hash3D(x0, y0, z0, seed);
  const c100 = hash3D(x0 + 1, y0, z0, seed);
  const c010 = hash3D(x0, y0 + 1, z0, seed);
  const c110 = hash3D(x0 + 1, y0 + 1, z0, seed);
  const c001 = hash3D(x0, y0, z0 + 1, seed);
  const c101 = hash3D(x0 + 1, y0, z0 + 1, seed);
  const c011 = hash3D(x0, y0 + 1, z0 + 1, seed);
  const c111 = hash3D(x0 + 1, y0 + 1, z0 + 1, seed);

  const u = smoothstep(xf);
  const v = smoothstep(yf);
  const w = smoothstep(zf);

  const x00 = lerp(c000, c100, u);
  const x10 = lerp(c010, c110, u);
  const x01 = lerp(c001, c101, u);
  const x11 = lerp(c011, c111, u);

  const y0v = lerp(x00, x10, v);
  const y1v = lerp(x01, x11, v);
  return lerp(y0v, y1v, w);
}

/**
 * Samples 3-D fractal Brownian motion (fBm) by layering multiple octaves of
 * {@link valueNoise3D}. Used by `carvers.js` to create volumetric cave tunnels
 * that vary realistically in all three spatial dimensions. The normalization
 * ensures the output remains in approximately [0, 1] regardless of octave count.
 * @param {number} x - Base X coordinate.
 * @param {number} y - Base Y coordinate.
 * @param {number} z - Base Z coordinate.
 * @param {number} seed - Hash seed for the first octave.
 * @param {number} [octaves=4] - Number of noise layers to accumulate.
 * @param {number} [lacunarity=2] - Frequency multiplier per octave.
 * @param {number} [gain=0.5] - Amplitude multiplier per octave.
 * @returns {number} Normalized 3-D fBm value in approximately [0, 1].
 */
export function fbm3D(x, y, z, seed, octaves = 4, lacunarity = 2, gain = 0.5) {
  let frequency = 1;
  let amplitude = 1;
  let sum = 0;
  let norm = 0;

  for (let i = 0; i < octaves; i++) {
    sum += valueNoise3D(x * frequency, y * frequency, z * frequency, seed + i * 7919) * amplitude;
    norm += amplitude;
    amplitude *= gain;
    frequency *= lacunarity;
  }

  return sum / norm;
}
