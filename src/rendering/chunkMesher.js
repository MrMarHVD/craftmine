import * as THREE from "three";
import { BLOCKS, FACE } from "../blocks.js";
import { CHUNK_SIZE, WORLD_HEIGHT } from "../constants.js";

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

function createBuilder() {
  return {
    positions: [],
    normals: [],
    uvs: [],
    indices: [],
    count: 0,
  };
}

function appendFace(builder, x, y, z, def, uvRect) {
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
  }

  const b = builder.count;
  builder.indices.push(b, b + 1, b + 2, b, b + 2, b + 3);
  builder.count += 4;
}

function finishGeometry(builder) {
  if (builder.indices.length === 0) return null;

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(builder.positions, 3));
  geometry.setAttribute("normal", new THREE.Float32BufferAttribute(builder.normals, 3));
  geometry.setAttribute("uv", new THREE.Float32BufferAttribute(builder.uvs, 2));
  geometry.setIndex(builder.indices);
  geometry.computeBoundingSphere();
  return geometry;
}

export function buildChunkGeometry(world, cx, cz, getFaceUVs) {
  const opaque = createBuilder();
  const transparent = createBuilder();
  const baseX = cx * CHUNK_SIZE;
  const baseZ = cz * CHUNK_SIZE;

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
          appendFace(builder, x, y, z, def, getFaceUVs(blockId, def.face));
        }
      }
    }
  }

  return {
    opaque: finishGeometry(opaque),
    transparent: finishGeometry(transparent),
  };
}
