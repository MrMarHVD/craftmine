/**
 * @module world/grid
 * @description Shared chunk addressing helpers used by every subsystem that
 * reads or writes chunk data. Centralising these calculations avoids subtle
 * bugs from inconsistent index arithmetic scattered across the codebase.
 */

import { CHUNK_SIZE } from "../constants.js";

/**
 * Produces a unique string key for a chunk at grid coordinates `(cx, cz)`.
 * The key format is `"cx,cz"` and is used as the Map key in `World.loaded`,
 * `World.generated`, `World.modified`, and the spawn-tracking maps of
 * `MobSystem`.
 * @param {number} cx - Chunk X grid coordinate.
 * @param {number} cz - Chunk Z grid coordinate.
 * @returns {string} Unique string identifier for the chunk.
 */
export function chunkKey(cx, cz) {
  return `${cx},${cz}`;
}

/**
 * Converts a 3-D local block coordinate `(x, y, z)` within a chunk into a
 * flat array index for the chunk's `Uint8Array` block storage.
 * Layout is Y-major (each Y-slice is a contiguous `CHUNK_SIZE × CHUNK_SIZE`
 * plane), so vertical iteration over a column is cache-friendly.
 * @param {number} x - Local X coordinate in [0, CHUNK_SIZE).
 * @param {number} y - Local Y coordinate in [0, WORLD_HEIGHT).
 * @param {number} z - Local Z coordinate in [0, CHUNK_SIZE).
 * @returns {number} Flat array index into the chunk's block data.
 */
export function index3D(x, y, z) {
  return y * CHUNK_SIZE * CHUNK_SIZE + z * CHUNK_SIZE + x;
}
