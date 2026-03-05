export function hash2D(x, z, seed) {
  let h = (x | 0) * 374761393 + (z | 0) * 668265263 + ((seed | 0) * 1442695041);
  h = (h ^ (h >>> 13)) | 0;
  h = Math.imul(h, 1274126177);
  h = (h ^ (h >>> 16)) | 0;
  return (h >>> 0) / 4294967295;
}

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

export function smoothstep(t) {
  return t * t * (3 - 2 * t);
}

export function lerp(a, b, t) {
  return a + (b - a) * t;
}

export function floorDiv(n, d) {
  return Math.floor(n / d);
}

export function mod(n, d) {
  return ((n % d) + d) % d;
}
