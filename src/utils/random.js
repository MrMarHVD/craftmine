/**
 * @module utils/random
 * @description Low-level deterministic math utilities used throughout world
 * generation. The hash functions produce pseudo-random floats in [0, 1) from
 * integer coordinates and a seed without any persistent state, making them
 * safe to call in any order and from any module. The interpolation helpers
 * support the noise functions in `noise.js`.
 */

/**
 * Hashes a 2-D integer coordinate pair and a seed into a pseudo-random float
 * in [0, 1). Uses a sequence of multiply-xor-shift operations to achieve good
 * avalanche behaviour. Called extensively by world generation, feature
 * placement, and mob spawning whenever a single deterministic random value is
 * needed per (x, z) location.
 * @param {number} x - Integer X coordinate.
 * @param {number} z - Integer Z coordinate.
 * @param {number} seed - World or per-system seed that makes results unique per world.
 * @returns {number} A pseudo-random value in the range [0, 1).
 */
export function hash2D(x, z, seed) {
  let h = (x | 0) * 374761393 + (z | 0) * 668265263 + ((seed | 0) * 1442695041);
  h = (h ^ (h >>> 13)) | 0;
  h = Math.imul(h, 1274126177);
  h = (h ^ (h >>> 16)) | 0;
  return (h >>> 0) / 4294967295;
}

/**
 * Hashes a 3-D integer coordinate triple and a seed into a pseudo-random float
 * in [0, 1). Extends {@link hash2D} with an additional Y dimension, used
 * by 3-D noise sampling for cave generation.
 * @param {number} x - Integer X coordinate.
 * @param {number} y - Integer Y coordinate.
 * @param {number} z - Integer Z coordinate.
 * @param {number} seed - World or per-system seed.
 * @returns {number} A pseudo-random value in the range [0, 1).
 */
export function hash3D(x, y, z, seed) {
  let h =
    (x | 0) * 374761393 +
    (y | 0) * 668265263 +
    (z | 0) * 2246822519 +
    ((seed | 0) * 1442695041);
  h = (h ^ (h >>> 13)) | 0;
  h = Math.imul(h, 1274126177);
  h = (h ^ (h >>> 16)) | 0;
  return (h >>> 0) / 4294967295;
}

/**
 * Applies the smoothstep curve (3t² − 2t³) to `t`, producing an S-shaped
 * ease-in-out that removes visible grid artifacts from value noise interpolation.
 * @param {number} t - Input value, typically in [0, 1].
 * @returns {number} Smoothed value in [0, 1].
 */
export function smoothstep(t) {
  return t * t * (3 - 2 * t);
}

/**
 * Linearly interpolates between `a` and `b` by factor `t`.
 * @param {number} a - Start value (returned when `t` is 0).
 * @param {number} b - End value (returned when `t` is 1).
 * @param {number} t - Interpolation factor, typically in [0, 1].
 * @returns {number} The interpolated value.
 */
export function lerp(a, b, t) {
  return a + (b - a) * t;
}

/**
 * Computes the floor-division of `n` by `d`, always rounding toward negative
 * infinity. Unlike `Math.trunc`-based division, this gives consistent results
 * for negative coordinates, which is critical for chunk key calculations.
 * @param {number} n - Dividend.
 * @param {number} d - Divisor.
 * @returns {number} The integer quotient rounded toward negative infinity.
 */
export function floorDiv(n, d) {
  return Math.floor(n / d);
}

/**
 * Computes the positive modulo of `n` modulo `d`, ensuring the result is
 * always in [0, d) even when `n` is negative. Used to convert a world-space
 * coordinate into a chunk-local coordinate reliably across chunk boundaries.
 * @param {number} n - Dividend.
 * @param {number} d - Modulus.
 * @returns {number} The non-negative remainder.
 */
export function mod(n, d) {
  return ((n % d) + d) % d;
}
