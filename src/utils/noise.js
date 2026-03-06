import { hash2D, hash3D, lerp, smoothstep } from "./random.js";

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
