import { CHUNK_SIZE } from "../constants.js";

export function chunkKey(cx, cz) {
  return `${cx},${cz}`;
}

export function index3D(x, y, z) {
  return y * CHUNK_SIZE * CHUNK_SIZE + z * CHUNK_SIZE + x;
}
