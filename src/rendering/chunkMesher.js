/**
 * @module rendering/chunkMesher
 * @description Converts a chunk's voxel data into renderable Three.js
 * `BufferGeometry` objects. `buildChunkGeometry` is the sole public export
 * and is called by `World.rebuildOneChunk` whenever a chunk is marked dirty.
 * The mesher performs face-culling: a face is emitted only when the
 * neighbouring voxel is transparent relative to the current block, keeping
 * the triangle count low. Opaque and transparent blocks are accumulated into
 * separate geometry builders so they can be rendered with different materials.
 */

import * as THREE from "three";
import { BLOCKS, BlockId, FACE } from "../blocks.js";
import { CHUNK_SIZE, WORLD_HEIGHT } from "../constants.js";

/**
 * Per-face geometry definitions. Each entry specifies the face direction
 * (used for UV lookup), the outward normal (used for lighting), and the four
 * vertex offsets within a 1³ unit cube. Vertices are ordered for two
 * counter-clockwise triangles when viewed from outside: the index buffer
 * emits (0,1,2) and (0,2,3).
 * @type {Array<{face: number, normal: number[], verts: Array<number[]>, n: number[]}>}
 */
const FACE_DEFS = [
  {
    face: FACE.PX,
    normal: [1, 0, 0],
    verts: [
      [1, 0, 0],
      [1, 1, 0],
      [1, 1, 1],
      [1, 0, 1],
    ],
    n: [1, 0, 0],
  },
  {
    face: FACE.NX,
    normal: [-1, 0, 0],
    verts: [
      [0, 0, 1],
      [0, 1, 1],
      [0, 1, 0],
      [0, 0, 0],
    ],
    n: [-1, 0, 0],
  },
  {
    face: FACE.PY,
    normal: [0, 1, 0],
    verts: [
      [0, 1, 1],
      [1, 1, 1],
      [1, 1, 0],
      [0, 1, 0],
    ],
    n: [0, 1, 0],
  },
  {
    face: FACE.NY,
    normal: [0, -1, 0],
    verts: [
      [0, 0, 0],
      [1, 0, 0],
      [1, 0, 1],
      [0, 0, 1],
    ],
    n: [0, -1, 0],
  },
  {
    face: FACE.PZ,
    normal: [0, 0, 1],
    verts: [
      [1, 0, 1],
      [1, 1, 1],
      [0, 1, 1],
      [0, 0, 1],
    ],
    n: [0, 0, 1],
  },
  {
    face: FACE.NZ,
    normal: [0, 0, -1],
    verts: [
      [0, 0, 0],
      [0, 1, 0],
      [1, 1, 0],
      [1, 0, 0],
    ],
    n: [0, 0, -1],
  },
];

/**
 * Determines whether a face between `blockId` and `neighborId` should be
 * emitted into the mesh. The rules are:
 * - Opaque blocks: emit the face only when the neighbour is air or transparent.
 * - Transparent blocks: emit the face when the neighbour is air, or when
 *   the neighbour is a different block type (prevents water–water or
 *   leaves–leaves internal faces while still showing the border between two
 *   different transparent materials).
 * @param {number} blockId - Block ID of the current voxel.
 * @param {number} neighborId - Block ID of the adjacent voxel.
 * @returns {boolean} `true` if the face should be rendered.
 */
function shouldRenderFace(blockId, neighborId) {
  const block = BLOCKS[blockId];
  const neighbor = BLOCKS[neighborId];

  if (block.transparent) {
    if (neighborId === 0) return true;
    if (!neighbor.transparent) return false;
    return neighborId !== blockId;
  }

  return neighborId === 0 || neighbor.transparent;
}

/**
 * Creates a fresh geometry builder — a set of flat arrays for positions,
 * normals, UVs, and indices, plus a vertex counter. Two builders are created
 * per chunk build (one opaque, one transparent).
 * @returns {{positions: number[], normals: number[], uvs: number[], indices: number[], count: number}}
 */
function createBuilder() {
  return {
    positions: [],
    normals: [],
    uvs: [],
    colors: [],
    indices: [],
    count: 0,
  };
}

function isSkyOccluder(id) {
  if (id === BlockId.AIR) return false;
  // Water and vines keep more skylight; foliage and solids cast shade.
  if (id === BlockId.WATER || id === BlockId.VINE) return false;
  return true;
}

function buildTopOccluderMap(world, baseX, baseZ) {
  const stride = CHUNK_SIZE + 2;
  const top = new Int16Array(stride * stride);
  for (let lz = -1; lz <= CHUNK_SIZE; lz++) {
    for (let lx = -1; lx <= CHUNK_SIZE; lx++) {
      const x = baseX + lx;
      const z = baseZ + lz;
      let topY = -1;
      for (let y = WORLD_HEIGHT - 1; y >= 0; y--) {
        const id = world.getBlock(x, y, z);
        if (isSkyOccluder(id)) {
          topY = y;
          break;
        }
      }
      top[(lz + 1) * stride + (lx + 1)] = topY;
    }
  }
  return { top, stride };
}

function getFaceShade(def) {
  if (def.normal[1] > 0) return 1.0;
  if (def.normal[1] < 0) return 0.62;
  if (def.normal[0] !== 0) return 0.86;
  return 0.9;
}

function computeFaceLight(lx, y, lz, def, occluders) {
  const sx = lx + (def.normal[0] > 0 ? 1 : def.normal[0] < 0 ? -1 : 0);
  const sz = lz + (def.normal[2] > 0 ? 1 : def.normal[2] < 0 ? -1 : 0);
  const topY = occluders.top[(sz + 1) * occluders.stride + (sx + 1)];
  const sampleY = y + (def.normal[1] > 0 ? 1 : 0);
  const skyDepth = Math.max(0, topY - sampleY);

  // Exponential falloff gives smooth "gets darker underground" behavior.
  let skylight = Math.exp(-skyDepth * 0.1);
  skylight = Math.max(0.12, Math.min(1, skylight));
  return skylight * getFaceShade(def);
}

/**
 * Appends the four vertices, normals, UVs, and two triangles for a single
 * block face to a geometry builder. The UV rectangle is mapped so that the
 * four tile corners align with the four face vertices in the expected order.
 * @param {Object} builder - A geometry builder from `createBuilder`.
 * @param {number} x - World X of the block.
 * @param {number} y - World Y of the block.
 * @param {number} z - World Z of the block.
 * @param {Object} def - One entry from `FACE_DEFS`.
 * @param {[number, number, number, number]} uvRect - UV coords `[u0, v0, u1, v1]` from the atlas.
 */
function appendFace(builder, x, y, z, def, uvRect, light) {
  const [u0, v0, u1, v1] = uvRect;
  const uv = [
    [u0, v0],
    [u0, v1],
    [u1, v1],
    [u1, v0],
  ];

  for (let i = 0; i < 4; i++) {
    const v = def.verts[i];
    builder.positions.push(x + v[0], y + v[1], z + v[2]);
    builder.normals.push(def.n[0], def.n[1], def.n[2]);
    builder.uvs.push(uv[i][0], uv[i][1]);
    builder.colors.push(light, light, light);
  }

  const b = builder.count;
  builder.indices.push(b, b + 1, b + 2, b, b + 2, b + 3);
  builder.count += 4;
}

/**
 * Converts a finished geometry builder into a `THREE.BufferGeometry` with
 * `position`, `normal`, and `uv` attributes and an index buffer. Returns
 * `null` if the builder has no faces, allowing the caller to skip creating
 * a mesh for completely empty geometry.
 * @param {Object} builder - A geometry builder produced by `createBuilder` and filled by `appendFace`.
 * @returns {THREE.BufferGeometry|null} The finished geometry, or `null` if empty.
 */
function finishGeometry(builder) {
  if (builder.indices.length === 0) return null;

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(builder.positions, 3));
  geometry.setAttribute("normal", new THREE.Float32BufferAttribute(builder.normals, 3));
  geometry.setAttribute("uv", new THREE.Float32BufferAttribute(builder.uvs, 2));
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(builder.colors, 3));
  geometry.setIndex(builder.indices);
  geometry.computeBoundingSphere();
  return geometry;
}

/**
 * Builds the opaque and transparent `BufferGeometry` objects for chunk
 * `(cx, cz)`. Iterates every non-air voxel in the chunk, checks each of the
 * six face directions, and emits only the faces whose neighbour passes the
 * `shouldRenderFace` test. Opaque and transparent blocks accumulate into
 * separate builders so they can be attached to separate `THREE.Mesh` instances
 * with different materials in `World.rebuildOneChunk`.
 * @param {Object} world - The `World` instance used to read block IDs (including cross-chunk neighbours).
 * @param {number} cx - Chunk X grid coordinate.
 * @param {number} cz - Chunk Z grid coordinate.
 * @param {function(number, number): number[]} getFaceUVs - UV lookup function from the texture atlas.
 * @returns {{opaque: THREE.BufferGeometry|null, transparent: THREE.BufferGeometry|null}}
 *   Separate geometry objects for opaque and transparent block faces.
 */
export function buildChunkGeometry(world, cx, cz, getFaceUVs) {
  const opaque = createBuilder();
  const transparent = createBuilder();
  const baseX = cx * CHUNK_SIZE;
  const baseZ = cz * CHUNK_SIZE;
  const occluders = buildTopOccluderMap(world, baseX, baseZ);

  for (let lx = 0; lx < CHUNK_SIZE; lx++) {
    for (let lz = 0; lz < CHUNK_SIZE; lz++) {
      const x = baseX + lx;
      const z = baseZ + lz;

      for (let y = 0; y < WORLD_HEIGHT; y++) {
        const blockId = world.getBlock(x, y, z);
        if (blockId === 0) continue;

        const builder = BLOCKS[blockId].transparent ? transparent : opaque;

        for (const def of FACE_DEFS) {
          const nx = x + def.normal[0];
          const ny = y + def.normal[1];
          const nz = z + def.normal[2];
          const neighborId = world.getBlock(nx, ny, nz);
          if (!shouldRenderFace(blockId, neighborId)) continue;
          const light = computeFaceLight(lx, y, lz, def, occluders);
          appendFace(builder, x, y, z, def, getFaceUVs(blockId, def.face), light);
        }
      }
    }
  }

  return {
    opaque: finishGeometry(opaque),
    transparent: finishGeometry(transparent),
  };
}
