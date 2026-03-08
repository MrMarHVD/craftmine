/**
 * @module world/World
 * @description The central world management class. `World` owns the chunk
 * lifecycle from generation through rendering: it runs the full generation
 * pipeline (terrain → carvers → features → castles), tracks which chunks are
 * currently loaded, queues dirty chunks for mesh rebuilds, and applies
 * player-driven block mutations while propagating dirtiness to neighbouring
 * chunks whose meshes may be affected. Re-exports `BIOME` and `BIOME_NAME` for
 * convenience so consumers only need to import from `world.js`.
 */

import * as THREE from "three";
import { BlockId, isTransparent } from "../blocks.js";
import { buildChunkGeometry } from "../rendering/chunkMesher.js";
import { CHUNK_SIZE, RENDER_DISTANCE, SEA_LEVEL, WORLD_HEIGHT } from "../constants.js";
import { floorDiv, mod } from "../utils/random.js";
import { BIOME, BIOME_NAME, getBiomeBlend, getClimate, getColumnData } from "./biomes.js";
import { applyCastlesToChunk } from "./castles.js";
import { applyTerrainCarvers } from "./carvers.js";
import { populateFeatures } from "./features.js";
import { chunkKey, index3D } from "./grid.js";
import { applyOresToChunk } from "./ores.js";
import { applySettlementsToChunk, getSettlementNpcsForChunk, isSettlementReserved } from "./settlements.js";

export { BIOME, BIOME_NAME };

/**
 * Manages the voxel world: chunk generation, loading/unloading, block
 * mutation, and mesh rebuild scheduling.
 *
 * @property {THREE.Scene} scene - The Three.js scene chunks are added to.
 * @property {Object} atlas - Texture atlas returned by `createAtlas()`.
 * @property {number} seed - Integer world seed used by all noise and hash calls.
 * @property {Map<string, Uint8Array>} generated - Cache of generated (immutable base) chunk data keyed by chunk key.
 * @property {Map<string, Map<number, number>>} modified - Per-chunk maps of index→blockId overrides from player edits.
 * @property {Map<string, Object>} loaded - Currently active chunks with their mesh references and dirty flag.
 * @property {string[]} buildQueue - Queue of chunk keys awaiting a mesh rebuild.
 * @property {Map<string, Object|null>} castleCache - Cached castle descriptors keyed by region key.
 * @property {Map<string, Object|null>} ravineCache - Cached ravine descriptors keyed by cell key.
 */
export class World {
  /**
   * Creates a new `World` and initialises all internal caches. Materials must
   * be provided separately via {@link setupMaterials} before meshes can be built.
   * @param {THREE.Scene} scene - Three.js scene to add chunk meshes to.
   * @param {Object} atlas - Texture atlas from `createAtlas()`.
   * @param {number} [seed=133742] - Integer world seed.
   */
  constructor(scene, atlas, seed = 133742) {
    this.scene = scene;
    this.atlas = atlas;
    this.seed = seed | 0;

    this.generated = new Map();
    this.modified = new Map();
    this.loaded = new Map();
    this.buildQueue = [];
    this.castleCache = new Map();
    this.ravineCache = new Map();
    this.settlementCache = new Map();

    this.materialOpaque = null;
    this.materialTransparent = null;
  }

  /**
   * Provides the Two.js materials used when creating chunk meshes.
   * Must be called once after construction, before any chunk is rendered.
   * @param {THREE.MeshLambertMaterial} materialOpaque - Material for solid, opaque blocks.
   * @param {THREE.MeshLambertMaterial} materialTransparent - Material for transparent blocks (leaves, water, etc.).
   */
  setupMaterials(materialOpaque, materialTransparent) {
    this.materialOpaque = materialOpaque;
    this.materialTransparent = materialTransparent;
  }

  /**
   * Returns the climate (temperature + moisture) at world position `(x, z)`.
   * Delegates to `biomes.getClimate`.
   * @param {number} x - World X coordinate.
   * @param {number} z - World Z coordinate.
   * @returns {{temperature: number, moisture: number}}
   */
  getClimate(x, z) {
    return getClimate(this, x, z);
  }

  /**
   * Returns biome blend weights and the dominant biome at world position `(x, z)`.
   * Delegates to `biomes.getBiomeBlend`.
   * @param {number} x - World X coordinate.
   * @param {number} z - World Z coordinate.
   * @returns {{dominant: number, weights: Array, total: number}}
   */
  getBiomeBlend(x, z) {
    return getBiomeBlend(this, x, z);
  }

  /**
   * Returns terrain height, biome, and surface block data for the column at `(x, z)`.
   * Delegates to `biomes.getColumnData`.
   * @param {number} x - World X coordinate.
   * @param {number} z - World Z coordinate.
   * @returns {{height: number, dominantBiome: number, surface: number, subsurface: number}}
   */
  getColumnData(x, z) {
    return getColumnData(this, x, z);
  }

  /**
   * Returns the dominant biome ID at world position `(x, z)`.
   * @param {number} x - World X coordinate.
   * @param {number} z - World Z coordinate.
   * @returns {number} A {@link BIOME} enum value.
   */
  getBiomeAt(x, z) {
    return this.getColumnData(x, z).dominantBiome;
  }

  /**
   * Returns the terrain surface height (in blocks) at world position `(x, z)`.
   * Used by castle generation and mob spawning to place objects on the ground.
   * @param {number} x - World X coordinate.
   * @param {number} z - World Z coordinate.
   * @returns {number} Surface Y coordinate.
   */
  getSurfaceYAt(x, z) {
    return this.getColumnData(x, z).height;
  }

  isSettlementReserved(x, z) {
    return isSettlementReserved(this, x, z);
  }

  getSettlementNpcsForChunk(cx, cz) {
    return getSettlementNpcsForChunk(this, cx, cz);
  }

  /**
   * Generates and caches the base block data for chunk `(cx, cz)`.
   * If the chunk has already been generated, the cached `Uint8Array` is
   * returned immediately. Otherwise the full pipeline runs:
   * 1. Fill each column with Bedrock / stone / subsurface / surface / water.
   * 2. Carve caves and ravines.
   * 3. Stamp cave-adjacent ores into underground stone.
   * 4. Place biome features (trees, flowers, etc.).
   * 5. Stamp castle geometry.
   * @param {number} cx - Chunk X grid coordinate.
   * @param {number} cz - Chunk Z grid coordinate.
   * @returns {Uint8Array} Flat block data array for the chunk.
   */
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

    applyTerrainCarvers(this, blocks, cx, cz, worldX0, worldZ0);
    applyOresToChunk(this, blocks, cx, cz, worldX0, worldZ0);
    applySettlementsToChunk(this, blocks, cx, cz, worldX0, worldZ0);
    populateFeatures(this, blocks, cx, cz, worldX0, worldZ0);
    applyCastlesToChunk(this, blocks, cx, cz, worldX0, worldZ0);

    this.generated.set(key, blocks);
    return blocks;
  }

  /**
   * Reads a block from a pre-generated chunk data array without applying
   * player modifications. Coordinates outside the chunk bounds return
   * Bedrock (below world) or Air (above world or outside chunk). Used
   * during generation by feature and carver functions that need to read
   * neighbouring voxels.
   * @param {Uint8Array} blocks - The chunk data array.
   * @param {number} cx - Chunk X grid coordinate.
   * @param {number} cz - Chunk Z grid coordinate.
   * @param {number} x - World X coordinate.
   * @param {number} y - World Y coordinate.
   * @param {number} z - World Z coordinate.
   * @returns {number} Block ID at the given position.
   */
  getGeneratedBlockFromChunkData(blocks, cx, cz, x, y, z) {
    if (y < 0) return BlockId.BEDROCK;
    if (y >= WORLD_HEIGHT) return BlockId.AIR;

    const lx = x - cx * CHUNK_SIZE;
    const lz = z - cz * CHUNK_SIZE;
    if (lx < 0 || lz < 0 || lx >= CHUNK_SIZE || lz >= CHUNK_SIZE) return BlockId.AIR;
    return blocks[index3D(lx, y, lz)];
  }

  /**
   * Writes a block into a chunk data array during generation if the world
   * coordinate falls within the target chunk. Silently ignores out-of-bounds
   * writes so that feature and castle stamping code can operate in world space
   * without bounds checking at every call site.
   * @param {Uint8Array} blocks - The chunk data array.
   * @param {number} cx - Chunk X grid coordinate.
   * @param {number} cz - Chunk Z grid coordinate.
   * @param {number} x - World X coordinate.
   * @param {number} y - World Y coordinate.
   * @param {number} z - World Z coordinate.
   * @param {number} id - Block ID to write.
   */
  setGeneratedBlockIfInChunk(blocks, cx, cz, x, y, z, id) {
    if (y <= 0 || y >= WORLD_HEIGHT) return;
    const lx = x - cx * CHUNK_SIZE;
    const lz = z - cz * CHUNK_SIZE;
    if (lx < 0 || lz < 0 || lx >= CHUNK_SIZE || lz >= CHUNK_SIZE) return;
    blocks[index3D(lx, y, lz)] = id;
  }

  /**
   * Sets a block to Air during generation if the coordinate is within the
   * target chunk. Convenience wrapper used by cave and ravine carvers.
   * @param {Uint8Array} blocks - The chunk data array.
   * @param {number} cx - Chunk X grid coordinate.
   * @param {number} cz - Chunk Z grid coordinate.
   * @param {number} x - World X coordinate.
   * @param {number} y - World Y coordinate.
   * @param {number} z - World Z coordinate.
   */
  setGeneratedAirIfInChunk(blocks, cx, cz, x, y, z) {
    if (y <= 0 || y >= WORLD_HEIGHT) return;
    const lx = x - cx * CHUNK_SIZE;
    const lz = z - cz * CHUNK_SIZE;
    if (lx < 0 || lz < 0 || lx >= CHUNK_SIZE || lz >= CHUNK_SIZE) return;
    blocks[index3D(lx, y, lz)] = BlockId.AIR;
  }

  /**
   * Sets a block to Leaves during generation only if the target cell is
   * currently Air, Water, or Vine — preventing leaf blocks from overwriting
   * existing solid terrain or other tree logs. Used by the tree-placement
   * functions in `features.js`.
   * @param {Uint8Array} blocks - The chunk data array.
   * @param {number} cx - Chunk X grid coordinate.
   * @param {number} cz - Chunk Z grid coordinate.
   * @param {number} x - World X coordinate.
   * @param {number} y - World Y coordinate.
   * @param {number} z - World Z coordinate.
   */
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

  /**
   * Sets a block to Vine during generation only if the target cell is
   * currently Air. Used by the jungle tree placement function to hang vines
   * without overwriting other blocks.
   * @param {Uint8Array} blocks - The chunk data array.
   * @param {number} cx - Chunk X grid coordinate.
   * @param {number} cz - Chunk Z grid coordinate.
   * @param {number} x - World X coordinate.
   * @param {number} y - World Y coordinate.
   * @param {number} z - World Z coordinate.
   */
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

  /**
   * Reads a block at a chunk-local coordinate, applying player modifications
   * on top of the generated base data. Returns Bedrock below the world and
   * Air above it.
   * @param {number} cx - Chunk X grid coordinate.
   * @param {number} cz - Chunk Z grid coordinate.
   * @param {number} lx - Local X coordinate in [0, CHUNK_SIZE).
   * @param {number} y - World Y coordinate.
   * @param {number} lz - Local Z coordinate in [0, CHUNK_SIZE).
   * @returns {number} Block ID including any player modifications.
   */
  getLocalBlockFromData(cx, cz, lx, y, lz) {
    if (y < 0) return BlockId.BEDROCK;
    if (y >= WORLD_HEIGHT) return BlockId.AIR;

    const key = chunkKey(cx, cz);
    const idx = index3D(lx, y, lz);
    const mods = this.modified.get(key);
    if (mods && mods.has(idx)) return mods.get(idx);

    return this.generateChunkData(cx, cz)[idx];
  }

  /**
   * Reads a block at a world-space coordinate, applying player modifications.
   * Converts world coordinates to chunk + local coordinates internally.
   * This is the primary block-reading API used by the mesher, raycast, and
   * physics systems.
   * @param {number} x - World X coordinate.
   * @param {number} y - World Y coordinate.
   * @param {number} z - World Z coordinate.
   * @returns {number} Block ID at the given position.
   */
  getBlock(x, y, z) {
    if (y < 0) return BlockId.BEDROCK;
    if (y >= WORLD_HEIGHT) return BlockId.AIR;

    const cx = floorDiv(x, CHUNK_SIZE);
    const cz = floorDiv(z, CHUNK_SIZE);
    const lx = mod(x, CHUNK_SIZE);
    const lz = mod(z, CHUNK_SIZE);
    return this.getLocalBlockFromData(cx, cz, lx, y, lz);
  }

  /**
   * Sets a block at a world-space coordinate as a player modification.
   * Modifications are stored as a sparse overlay on top of the generated
   * base data, so the chunk's generated data is never mutated. If the new ID
   * matches the generated base, the modification entry is deleted to keep the
   * overlay small. Marks the affected chunk and any adjacent boundary chunks
   * as dirty for mesh rebuild.
   * @param {number} x - World X coordinate.
   * @param {number} y - World Y coordinate.
   * @param {number} z - World Z coordinate.
   * @param {number} id - Block ID to write.
   * @returns {boolean} `false` if the coordinate is outside world bounds, `true` otherwise.
   */
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

  /**
   * Adds chunk `(cx, cz)` to the mesh rebuild queue if it is currently loaded
   * and not already queued. Called by `setBlock` whenever a block change may
   * affect a chunk's visual mesh.
   * @param {number} cx - Chunk X grid coordinate.
   * @param {number} cz - Chunk Z grid coordinate.
   */
  markChunkDirty(cx, cz) {
    const key = chunkKey(cx, cz);
    const chunk = this.loaded.get(key);
    if (!chunk) return;
    if (!chunk.dirty) {
      chunk.dirty = true;
      this.buildQueue.push(key);
    }
  }

  /**
   * Loads all chunks within `RENDER_DISTANCE` of the player's chunk and
   * unloads any chunk that has moved beyond `RENDER_DISTANCE + 2`. Newly
   * created chunk entries are added to the build queue with `dirty: true`.
   * Called from the game loop on a short interval to keep the loaded set
   * centred on the player.
   * @param {number} x - Player world X position.
   * @param {number} z - Player world Z position.
   */
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

  /**
   * Removes both the opaque and transparent meshes of a chunk from the scene
   * and disposes of their GPU geometry. Called when a chunk is unloaded or
   * rebuilt.
   * @param {Object} chunk - Chunk entry from `this.loaded`.
   */
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

  /**
   * Rebuilds the mesh for exactly one dirty chunk per call, dequeuing it
   * from `buildQueue`. Building one chunk per frame prevents frame-rate spikes
   * while still making steady progress. Calls `buildChunkGeometry` from
   * `chunkMesher.js` and creates separate opaque and transparent `THREE.Mesh`
   * objects.
   */
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
        chunk.opaqueMesh.castShadow = true;
        chunk.opaqueMesh.receiveShadow = true;
        this.scene.add(chunk.opaqueMesh);
      }

      if (geom.transparent) {
        chunk.transparentMesh = new THREE.Mesh(geom.transparent, this.materialTransparent);
        chunk.transparentMesh.frustumCulled = true;
        chunk.transparentMesh.castShadow = false;
        chunk.transparentMesh.receiveShadow = true;
        this.scene.add(chunk.transparentMesh);
      }

      chunk.dirty = false;
      return;
    }
  }

  /**
   * Returns whether a block ID is transparent. Convenience wrapper used by
   * the mesher's face-culling logic to avoid a direct import of `blocks.js`.
   * @param {number} id - A {@link BlockId} value.
   * @returns {boolean} `true` if the block is transparent.
   */
  isBlockTransparent(id) {
    return isTransparent(id);
  }
}
