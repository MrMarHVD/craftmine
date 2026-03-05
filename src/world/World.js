import * as THREE from "three";
import { BlockId, isTransparent } from "../blocks.js";
import { buildChunkGeometry } from "../chunkMesher.js";
import { CHUNK_SIZE, RENDER_DISTANCE, SEA_LEVEL, WORLD_HEIGHT } from "../constants.js";
import { floorDiv, mod } from "../random.js";
import { BIOME, BIOME_NAME, getBiomeBlend, getClimate, getColumnData } from "./biomes.js";
import { applyCastlesToChunk } from "./castles.js";
import { populateFeatures } from "./features.js";
import { chunkKey, index3D } from "./grid.js";

export { BIOME, BIOME_NAME };

export class World {
  constructor(scene, atlas, seed = 133742) {
    this.scene = scene;
    this.atlas = atlas;
    this.seed = seed | 0;

    this.generated = new Map();
    this.modified = new Map();
    this.loaded = new Map();
    this.buildQueue = [];
    this.castleCache = new Map();

    this.materialOpaque = null;
    this.materialTransparent = null;
  }

  setupMaterials(materialOpaque, materialTransparent) {
    this.materialOpaque = materialOpaque;
    this.materialTransparent = materialTransparent;
  }

  getClimate(x, z) {
    return getClimate(this, x, z);
  }

  getBiomeBlend(x, z) {
    return getBiomeBlend(this, x, z);
  }

  getColumnData(x, z) {
    return getColumnData(this, x, z);
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
          if (y === 0) id = BlockId.BEDROCK;
          else if (y === h) id = column.surface;
          else if (y >= h - 3) id = column.subsurface;
          else id = BlockId.STONE;
          blocks[index3D(lx, y, lz)] = id;
        }

        if (h < SEA_LEVEL) {
          for (let y = h + 1; y <= SEA_LEVEL; y++) {
            blocks[index3D(lx, y, lz)] = BlockId.WATER;
          }
        }
      }
    }

    populateFeatures(this, blocks, cx, cz, worldX0, worldZ0);
    applyCastlesToChunk(this, blocks, cx, cz, worldX0, worldZ0);

    this.generated.set(key, blocks);
    return blocks;
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

  setGeneratedAirIfInChunk(blocks, cx, cz, x, y, z) {
    if (y <= 0 || y >= WORLD_HEIGHT) return;
    const lx = x - cx * CHUNK_SIZE;
    const lz = z - cz * CHUNK_SIZE;
    if (lx < 0 || lz < 0 || lx >= CHUNK_SIZE || lz >= CHUNK_SIZE) return;
    blocks[index3D(lx, y, lz)] = BlockId.AIR;
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
