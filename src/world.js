import * as THREE from "three";
import { CHUNK_SIZE, RENDER_DISTANCE, SEA_LEVEL, WORLD_HEIGHT } from "./constants.js";
import { BlockId, isTransparent } from "./blocks.js";
import { fbm2D, valueNoise2D } from "./noise.js";
import { floorDiv, mod, hash2D } from "./random.js";
import { buildChunkGeometry } from "./chunkMesher.js";

const BIOME = {
  DESERT: 0,
  FOREST: 1,
};

function chunkKey(cx, cz) {
  return `${cx},${cz}`;
}

function index3D(x, y, z) {
  return y * CHUNK_SIZE * CHUNK_SIZE + z * CHUNK_SIZE + x;
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

  getBiomeAt(x, z) {
    const n = valueNoise2D(x * 0.0025, z * 0.0025, this.seed + 7403);
    return n > 0.52 ? BIOME.FOREST : BIOME.DESERT;
  }

  getHeightAt(x, z, biome) {
    if (biome === BIOME.FOREST) {
      const h = fbm2D(x * 0.01, z * 0.01, this.seed + 11, 5, 2, 0.53);
      return Math.floor(34 + h * 18);
    }

    const dune = fbm2D(x * 0.016, z * 0.016, this.seed + 29, 4, 2, 0.5);
    const broad = fbm2D(x * 0.004, z * 0.004, this.seed + 31, 3, 2, 0.5);
    return Math.floor(24 + broad * 8 + dune * 7);
  }

  hasTreeAt(x, z) {
    if (this.getBiomeAt(x, z) !== BIOME.FOREST) return false;
    const density = hash2D(x, z, this.seed + 8821);
    const cluster = valueNoise2D(x * 0.03, z * 0.03, this.seed + 3331);
    return density > 0.972 && cluster > 0.44;
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
        const biome = this.getBiomeAt(x, z);
        const h = Math.min(WORLD_HEIGHT - 2, Math.max(3, this.getHeightAt(x, z, biome)));

        for (let y = 0; y <= h; y++) {
          let id;
          if (y === 0) {
            id = BlockId.BEDROCK;
          } else if (y === h) {
            id = biome === BIOME.FOREST ? BlockId.GRASS : BlockId.SAND;
          } else if (y >= h - 3) {
            id = biome === BIOME.FOREST ? BlockId.DIRT : BlockId.SAND;
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

    const margin = 3;
    for (let tx = worldX0 - margin; tx < worldX0 + CHUNK_SIZE + margin; tx++) {
      for (let tz = worldZ0 - margin; tz < worldZ0 + CHUNK_SIZE + margin; tz++) {
        if (!this.hasTreeAt(tx, tz)) continue;

        const surfaceBiome = this.getBiomeAt(tx, tz);
        const surfaceY = this.getHeightAt(tx, tz, surfaceBiome);
        const trunkH = 4 + ((hash2D(tx, tz, this.seed + 9191) * 3) | 0);

        for (let i = 1; i <= trunkH; i++) {
          this.setGeneratedBlockIfInChunk(blocks, cx, cz, tx, surfaceY + i, tz, BlockId.LOG);
        }

        const topY = surfaceY + trunkH;
        for (let dy = -2; dy <= 2; dy++) {
          const radius = dy === 2 ? 1 : dy === -2 ? 1 : 2;
          for (let ox = -radius; ox <= radius; ox++) {
            for (let oz = -radius; oz <= radius; oz++) {
              if (Math.abs(ox) + Math.abs(oz) > radius + 1) continue;
              const bx = tx + ox;
              const by = topY + dy;
              const bz = tz + oz;
              this.setGeneratedLeafIfAir(blocks, cx, cz, bx, by, bz);
            }
          }
        }
      }
    }

    this.generated.set(key, blocks);
    return blocks;
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
    if (cur === BlockId.AIR || cur === BlockId.WATER) {
      blocks[idx] = BlockId.LEAVES;
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
