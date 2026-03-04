import * as THREE from "three";
import { CHUNK_SIZE, RENDER_DISTANCE, SEA_LEVEL, WORLD_HEIGHT } from "./constants.js";
import { BlockId, isTransparent } from "./blocks.js";
import { fbm2D, valueNoise2D } from "./noise.js";
import { floorDiv, mod, hash2D } from "./random.js";
import { buildChunkGeometry } from "./chunkMesher.js";

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

const BIOME_PROPS = {
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

const BIOME_IDS = Object.values(BIOME);

function chunkKey(cx, cz) {
  return `${cx},${cz}`;
}

function index3D(x, y, z) {
  return y * CHUNK_SIZE * CHUNK_SIZE + z * CHUNK_SIZE + x;
}

function sqr(v) {
  return v * v;
}

export class World {
  constructor(scene, atlas, seed = 133742) {
    this.scene = scene;
    this.atlas = atlas;
    this.seed = seed | 0;

    this.generated = new Map();
    this.modified = new Map();
    this.loaded = new Map();
    this.buildQueue = [];

    this.materialOpaque = null;
    this.materialTransparent = null;
  }

  setupMaterials(materialOpaque, materialTransparent) {
    this.materialOpaque = materialOpaque;
    this.materialTransparent = materialTransparent;
  }

  getClimate(x, z) {
    const temperature = fbm2D(x * 0.0017, z * 0.0017, this.seed + 501, 4, 2, 0.5);
    const moisture = fbm2D(x * 0.0018, z * 0.0018, this.seed + 601, 4, 2, 0.5);
    return { temperature, moisture };
  }

  getBiomeBlend(x, z) {
    const climate = this.getClimate(x, z);
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

  getColumnData(x, z) {
    const blend = this.getBiomeBlend(x, z);
    let height = 0;

    for (const [id, rawWeight] of blend.weights) {
      const w = rawWeight / blend.total;
      height += BIOME_PROPS[id].height(x, z, this.seed) * w;
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

  getBiomeAt(x, z) {
    return this.getColumnData(x, z).dominantBiome;
  }

  getSurfaceYAt(x, z) {
    return this.getColumnData(x, z).height;
  }

  generateChunkData(cx, cz) {
    const key = chunkKey(cx, cz);
    if (this.generated.has(key)) return this.generated.get(key);

    const blocks = new Uint8Array(CHUNK_SIZE * WORLD_HEIGHT * CHUNK_SIZE);
    const worldX0 = cx * CHUNK_SIZE;
    const worldZ0 = cz * CHUNK_SIZE;

    for (let lx = 0; lx < CHUNK_SIZE; lx++) {
      for (let lz = 0; lz < CHUNK_SIZE; lz++) {
        const x = worldX0 + lx;
        const z = worldZ0 + lz;
        const column = this.getColumnData(x, z);
        const h = column.height;

        for (let y = 0; y <= h; y++) {
          let id;
          if (y === 0) {
            id = BlockId.BEDROCK;
          } else if (y === h) {
            id = column.surface;
          } else if (y >= h - 3) {
            id = column.subsurface;
          } else {
            id = BlockId.STONE;
          }
          blocks[index3D(lx, y, lz)] = id;
        }

        if (h < SEA_LEVEL) {
          for (let y = h + 1; y <= SEA_LEVEL; y++) {
            blocks[index3D(lx, y, lz)] = BlockId.WATER;
          }
        }
      }
    }

    this.populateFeatures(blocks, cx, cz, worldX0, worldZ0);

    this.generated.set(key, blocks);
    return blocks;
  }

  populateFeatures(blocks, cx, cz, worldX0, worldZ0) {
    const margin = 6;
    for (let x = worldX0 - margin; x < worldX0 + CHUNK_SIZE + margin; x++) {
      for (let z = worldZ0 - margin; z < worldZ0 + CHUNK_SIZE + margin; z++) {
        const c = this.getColumnData(x, z);
        const y = c.height;
        const above = this.getGeneratedBlockFromChunkData(blocks, cx, cz, x, y + 1, z);
        const h = hash2D(x, z, this.seed + 9001);
        const cluster = valueNoise2D(x * 0.03, z * 0.03, this.seed + 9002);

        if (c.dominantBiome === BIOME.FOREST) {
          if (h > 0.981 && cluster > 0.42 && c.surface === BlockId.GRASS) {
            this.placeTree(blocks, cx, cz, x, y + 1, z, 4 + ((h * 4) | 0), 2, false);
          }
          if (above === BlockId.AIR && c.surface === BlockId.GRASS && h > 0.93 && h < 0.948) {
            this.setGeneratedBlockIfInChunk(blocks, cx, cz, x, y + 1, z, BlockId.FLOWER_RED);
          }
          if (above === BlockId.AIR && c.surface === BlockId.GRASS && h > 0.948 && h < 0.965) {
            this.setGeneratedBlockIfInChunk(blocks, cx, cz, x, y + 1, z, BlockId.FLOWER_YELLOW);
          }
        }

        if (c.dominantBiome === BIOME.JUNGLE) {
          if (h > 0.972 && cluster > 0.34 && c.surface === BlockId.GRASS) {
            this.placeTree(blocks, cx, cz, x, y + 1, z, 6 + ((h * 5) | 0), 3, true);
          }
          if (above === BlockId.AIR && h > 0.88 && h < 0.94 && c.surface === BlockId.GRASS) {
            this.setGeneratedBlockIfInChunk(blocks, cx, cz, x, y + 1, z, BlockId.MOSS);
          }
          if (above === BlockId.AIR && h > 0.942 && h < 0.957 && c.surface === BlockId.GRASS) {
            this.setGeneratedBlockIfInChunk(blocks, cx, cz, x, y + 1, z, BlockId.FLOWER_YELLOW);
          }
        }

        if (c.dominantBiome === BIOME.DESERT) {
          if (h > 0.972 && cluster > 0.3 && c.surface === BlockId.SAND) {
            const cactusH = 2 + ((h * 5) | 0);
            for (let i = 0; i < cactusH; i++) {
              this.setGeneratedBlockIfInChunk(blocks, cx, cz, x, y + 1 + i, z, BlockId.CACTUS);
            }
          }
          if (above === BlockId.AIR && h > 0.93 && h < 0.945 && c.surface === BlockId.SAND) {
            this.setGeneratedBlockIfInChunk(blocks, cx, cz, x, y + 1, z, BlockId.GRAVEL);
          }
        }

        if (c.dominantBiome === BIOME.MOUNTAIN) {
          if (above === BlockId.AIR && h > 0.89 && h < 0.93 && y > 68) {
            this.setGeneratedBlockIfInChunk(blocks, cx, cz, x, y + 1, z, BlockId.GRAVEL);
          }
          if (h > 0.988 && cluster > 0.5 && y > 70) {
            const spire = 2 + ((h * 4) | 0);
            for (let i = 0; i < spire; i++) {
              this.setGeneratedBlockIfInChunk(blocks, cx, cz, x, y + 1 + i, z, y + i > 84 ? BlockId.SNOW : BlockId.STONE);
            }
          }
        }

        if (c.dominantBiome === BIOME.PLAINS) {
          if (above === BlockId.AIR && c.surface === BlockId.GRASS && h > 0.86 && h < 0.915) {
            this.setGeneratedBlockIfInChunk(blocks, cx, cz, x, y + 1, z, BlockId.FLOWER_RED);
          }
          if (above === BlockId.AIR && c.surface === BlockId.GRASS && h > 0.915 && h < 0.965) {
            this.setGeneratedBlockIfInChunk(blocks, cx, cz, x, y + 1, z, BlockId.FLOWER_YELLOW);
          }
          if (h > 0.992 && cluster > 0.45 && c.surface === BlockId.GRASS) {
            this.placeTree(blocks, cx, cz, x, y + 1, z, 4 + ((h * 3) | 0), 2, false);
          }
        }

        if (c.dominantBiome === BIOME.TUNDRA) {
          if (above === BlockId.AIR && h > 0.94 && h < 0.97 && c.surface === BlockId.SNOW) {
            this.setGeneratedBlockIfInChunk(blocks, cx, cz, x, y + 1, z, BlockId.GRAVEL);
          }
          if (h > 0.991 && cluster > 0.5 && c.surface === BlockId.SNOW) {
            this.placeTree(blocks, cx, cz, x, y + 1, z, 4 + ((h * 3) | 0), 1, false);
          }
        }
      }
    }
  }

  placeTree(blocks, cx, cz, x, y, z, trunkH, radius, withVines) {
    for (let i = 0; i < trunkH; i++) {
      this.setGeneratedBlockIfInChunk(blocks, cx, cz, x, y + i, z, BlockId.LOG);
    }

    const topY = y + trunkH;
    for (let dy = -radius; dy <= radius; dy++) {
      const r = Math.max(1, radius - Math.abs(dy) + 1);
      for (let ox = -r; ox <= r; ox++) {
        for (let oz = -r; oz <= r; oz++) {
          if (Math.abs(ox) + Math.abs(oz) > r + 1) continue;
          const lx = x + ox;
          const ly = topY + dy;
          const lz = z + oz;
          this.setGeneratedLeafIfAir(blocks, cx, cz, lx, ly, lz);

          if (!withVines) continue;
          const edge = Math.abs(ox) === r || Math.abs(oz) === r;
          if (!edge) continue;

          const vhash = hash2D(lx, lz, this.seed + 11811 + dy * 17);
          if (vhash < 0.62) continue;
          const vineLen = 2 + ((vhash * 4) | 0);
          for (let vi = 1; vi <= vineLen; vi++) {
            this.setGeneratedVineIfAir(blocks, cx, cz, lx, ly - vi, lz);
          }
        }
      }
    }
  }

  getGeneratedBlockFromChunkData(blocks, cx, cz, x, y, z) {
    if (y < 0) return BlockId.BEDROCK;
    if (y >= WORLD_HEIGHT) return BlockId.AIR;

    const lx = x - cx * CHUNK_SIZE;
    const lz = z - cz * CHUNK_SIZE;
    if (lx < 0 || lz < 0 || lx >= CHUNK_SIZE || lz >= CHUNK_SIZE) return BlockId.AIR;
    return blocks[index3D(lx, y, lz)];
  }

  setGeneratedBlockIfInChunk(blocks, cx, cz, x, y, z, id) {
    if (y <= 0 || y >= WORLD_HEIGHT) return;
    const lx = x - cx * CHUNK_SIZE;
    const lz = z - cz * CHUNK_SIZE;
    if (lx < 0 || lz < 0 || lx >= CHUNK_SIZE || lz >= CHUNK_SIZE) return;
    blocks[index3D(lx, y, lz)] = id;
  }

  setGeneratedLeafIfAir(blocks, cx, cz, x, y, z) {
    if (y <= 0 || y >= WORLD_HEIGHT) return;
    const lx = x - cx * CHUNK_SIZE;
    const lz = z - cz * CHUNK_SIZE;
    if (lx < 0 || lz < 0 || lx >= CHUNK_SIZE || lz >= CHUNK_SIZE) return;

    const idx = index3D(lx, y, lz);
    const cur = blocks[idx];
    if (cur === BlockId.AIR || cur === BlockId.WATER || cur === BlockId.VINE) {
      blocks[idx] = BlockId.LEAVES;
    }
  }

  setGeneratedVineIfAir(blocks, cx, cz, x, y, z) {
    if (y <= 0 || y >= WORLD_HEIGHT) return;
    const lx = x - cx * CHUNK_SIZE;
    const lz = z - cz * CHUNK_SIZE;
    if (lx < 0 || lz < 0 || lx >= CHUNK_SIZE || lz >= CHUNK_SIZE) return;

    const idx = index3D(lx, y, lz);
    if (blocks[idx] === BlockId.AIR) {
      blocks[idx] = BlockId.VINE;
    }
  }

  getLocalBlockFromData(cx, cz, lx, y, lz) {
    if (y < 0) return BlockId.BEDROCK;
    if (y >= WORLD_HEIGHT) return BlockId.AIR;

    const key = chunkKey(cx, cz);
    const idx = index3D(lx, y, lz);
    const mods = this.modified.get(key);
    if (mods && mods.has(idx)) return mods.get(idx);

    return this.generateChunkData(cx, cz)[idx];
  }

  getBlock(x, y, z) {
    if (y < 0) return BlockId.BEDROCK;
    if (y >= WORLD_HEIGHT) return BlockId.AIR;

    const cx = floorDiv(x, CHUNK_SIZE);
    const cz = floorDiv(z, CHUNK_SIZE);
    const lx = mod(x, CHUNK_SIZE);
    const lz = mod(z, CHUNK_SIZE);
    return this.getLocalBlockFromData(cx, cz, lx, y, lz);
  }

  setBlock(x, y, z, id) {
    if (y <= 0 || y >= WORLD_HEIGHT) return false;

    const cx = floorDiv(x, CHUNK_SIZE);
    const cz = floorDiv(z, CHUNK_SIZE);
    const lx = mod(x, CHUNK_SIZE);
    const lz = mod(z, CHUNK_SIZE);
    const key = chunkKey(cx, cz);
    const idx = index3D(lx, y, lz);

    const base = this.generateChunkData(cx, cz)[idx];
    let mods = this.modified.get(key);
    if (!mods) {
      mods = new Map();
      this.modified.set(key, mods);
    }

    if (id === base) mods.delete(idx);
    else mods.set(idx, id);

    if (mods.size === 0) this.modified.delete(key);

    this.markChunkDirty(cx, cz);
    if (lx === 0) this.markChunkDirty(cx - 1, cz);
    if (lx === CHUNK_SIZE - 1) this.markChunkDirty(cx + 1, cz);
    if (lz === 0) this.markChunkDirty(cx, cz - 1);
    if (lz === CHUNK_SIZE - 1) this.markChunkDirty(cx, cz + 1);

    return true;
  }

  markChunkDirty(cx, cz) {
    const key = chunkKey(cx, cz);
    const chunk = this.loaded.get(key);
    if (!chunk) return;
    if (!chunk.dirty) {
      chunk.dirty = true;
      this.buildQueue.push(key);
    }
  }

  loadChunksAround(x, z) {
    const ccx = floorDiv(Math.floor(x), CHUNK_SIZE);
    const ccz = floorDiv(Math.floor(z), CHUNK_SIZE);
    const keep = new Set();

    for (let dz = -RENDER_DISTANCE; dz <= RENDER_DISTANCE; dz++) {
      for (let dx = -RENDER_DISTANCE; dx <= RENDER_DISTANCE; dx++) {
        const cx = ccx + dx;
        const cz = ccz + dz;
        const key = chunkKey(cx, cz);
        keep.add(key);

        if (!this.loaded.has(key)) {
          this.loaded.set(key, {
            cx,
            cz,
            key,
            dirty: true,
            opaqueMesh: null,
            transparentMesh: null,
          });
          this.buildQueue.push(key);
        }
      }
    }

    const unloadDistance = RENDER_DISTANCE + 2;
    for (const [key, chunk] of this.loaded.entries()) {
      const dcx = Math.abs(chunk.cx - ccx);
      const dcz = Math.abs(chunk.cz - ccz);
      if (!keep.has(key) && (dcx > unloadDistance || dcz > unloadDistance)) {
        this.disposeChunk(chunk);
        this.loaded.delete(key);
      }
    }
  }

  disposeChunk(chunk) {
    if (chunk.opaqueMesh) {
      chunk.opaqueMesh.geometry.dispose();
      this.scene.remove(chunk.opaqueMesh);
      chunk.opaqueMesh = null;
    }
    if (chunk.transparentMesh) {
      chunk.transparentMesh.geometry.dispose();
      this.scene.remove(chunk.transparentMesh);
      chunk.transparentMesh = null;
    }
  }

  rebuildOneChunk() {
    while (this.buildQueue.length > 0) {
      const key = this.buildQueue.shift();
      const chunk = this.loaded.get(key);
      if (!chunk || !chunk.dirty) continue;

      const geom = buildChunkGeometry(this, chunk.cx, chunk.cz, this.atlas.getFaceUVs);
      this.disposeChunk(chunk);

      if (geom.opaque) {
        chunk.opaqueMesh = new THREE.Mesh(geom.opaque, this.materialOpaque);
        chunk.opaqueMesh.frustumCulled = true;
        this.scene.add(chunk.opaqueMesh);
      }

      if (geom.transparent) {
        chunk.transparentMesh = new THREE.Mesh(geom.transparent, this.materialTransparent);
        chunk.transparentMesh.frustumCulled = true;
        this.scene.add(chunk.transparentMesh);
      }

      chunk.dirty = false;
      return;
    }
  }

  isBlockTransparent(id) {
    return isTransparent(id);
  }
}
