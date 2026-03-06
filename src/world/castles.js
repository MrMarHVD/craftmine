/**
 * @module world/castles
 * @description Procedurally generates castle layouts and stamps them into
 * chunk block data. The world is divided into large region cells; each cell
 * has a small chance of containing a castle. When a castle is needed, its
 * entire layout (keep, rooms, corridors, towers, doorway connections) is
 * generated from a seeded LCG RNG so the result is deterministic across any
 * number of chunk loads. `applyCastlesToChunk` is the public entry point
 * called during chunk generation; it discovers all castle regions that overlap
 * the current chunk and calls the stamping functions.
 */

import { BlockId } from "../blocks.js";
import { CHUNK_SIZE, WORLD_HEIGHT } from "../constants.js";
import { floorDiv, hash2D } from "../utils/random.js";

/**
 * Width/depth of each castle placement region in world blocks.
 * Castles spawn at most once per region.
 * @type {number}
 */
const CASTLE_REGION_CHUNKS = 14;

/** Size of each castle region in world blocks (CASTLE_REGION_CHUNKS × CHUNK_SIZE). */
const CASTLE_REGION_SIZE = CHUNK_SIZE * CASTLE_REGION_CHUNKS;

/**
 * Probability (0–1) that a given region contains a castle.
 * @type {number}
 */
const CASTLE_SPAWN_CHANCE = 0.045;

/**
 * A minimal seeded linear-congruential generator (LCG) used exclusively for
 * castle layout generation. Using a separate deterministic RNG keeps castle
 * layouts independent of global hash seeds and ensures they can be
 * regenerated in any order.
 */
class CastleRng {
  /**
   * @param {number} seed - Integer seed; automatically adjusted if zero.
   */
  constructor(seed) {
    this.state = seed | 0;
    if (this.state === 0) this.state = 1;
  }

  /**
   * Advances the LCG and returns the next pseudo-random float in [0, 1).
   * @returns {number} Next pseudo-random value.
   */
  next() {
    this.state = (Math.imul(this.state, 1664525) + 1013904223) | 0;
    return (this.state >>> 0) / 4294967295;
  }

  /**
   * Returns a random integer in [`min`, `maxExclusive`).
   * @param {number} min - Inclusive lower bound.
   * @param {number} maxExclusive - Exclusive upper bound.
   * @returns {number} Integer in the given range.
   */
  range(min, maxExclusive) {
    return min + Math.floor(this.next() * (maxExclusive - min));
  }
}

/**
 * Returns the castle descriptor for region `(regionX, regionZ)`, generating
 * and caching it on first access. A hash roll against `CASTLE_SPAWN_CHANCE`
 * determines whether a castle exists; if it does, a seeded `CastleRng` is
 * used to produce the full layout:
 * - A central **keep** (large rectangular hall).
 * - Up to 14 additional **rooms** or **corridors** attached to existing pieces.
 * - Four **corner towers** anchored at the keep corners.
 * - **Connections** (doorway openings) between each piece and its parent.
 * Piece placement uses an overlap check to avoid intersecting footprints.
 * The castle's world-space bounding box (`minX`/`maxX`/`minZ`/`maxZ`) is
 * computed so `applyCastlesToChunk` can quickly skip non-overlapping castles.
 * @param {Object} world - The `World` instance (provides `world.seed` and `world.castleCache`).
 * @param {number} regionX - Castle region X grid index.
 * @param {number} regionZ - Castle region Z grid index.
 * @returns {Object|null} Castle layout descriptor or `null` if the region has no castle.
 */
export function getCastleForRegion(world, regionX, regionZ) {
  const key = `${regionX},${regionZ}`;
  if (world.castleCache.has(key)) return world.castleCache.get(key);

  const spawnRoll = hash2D(regionX, regionZ, world.seed + 42031);
  if (spawnRoll > CASTLE_SPAWN_CHANCE) {
    world.castleCache.set(key, null);
    return null;
  }

  const rngSeed =
    ((regionX * 73856093) ^ (regionZ * 19349663) ^ (world.seed * 83492791) ^ 0x9e3779b9) | 0;
  const rng = new CastleRng(rngSeed);

  const margin = 34;
  const baseX = regionX * CASTLE_REGION_SIZE + rng.range(margin, CASTLE_REGION_SIZE - margin);
  const baseZ = regionZ * CASTLE_REGION_SIZE + rng.range(margin, CASTLE_REGION_SIZE - margin);
  const baseY = Math.min(
    WORLD_HEIGHT - 24,
    1 +
      Math.max(
        world.getSurfaceYAt(baseX, baseZ),
        world.getSurfaceYAt(baseX + 8, baseZ),
        world.getSurfaceYAt(baseX, baseZ + 8),
        world.getSurfaceYAt(baseX + 8, baseZ + 8)
      )
  );

  const keepW = rng.range(13, 18);
  const keepD = rng.range(13, 18);
  const keep = {
    x: baseX - Math.floor(keepW * 0.5),
    z: baseZ - Math.floor(keepD * 0.5),
    w: keepW,
    d: keepD,
    h: rng.range(7, 11),
    kind: "keep",
  };

  const pieces = [keep];
  const connections = [];

  const targetPieces = rng.range(8, 15);
  for (let i = 0; i < targetPieces; i++) {
    const parent = pieces[rng.range(0, pieces.length)];
    const side = rng.range(0, 4);
    const isCorridor = rng.next() < 0.55;

    const doorX = parent.x + 2 + rng.range(0, Math.max(1, parent.w - 4));
    const doorZ = parent.z + 2 + rng.range(0, Math.max(1, parent.d - 4));

    let w;
    let d;
    if (isCorridor) {
      const len = rng.range(6, 13);
      if (side === 0 || side === 2) {
        w = 3;
        d = len;
      } else {
        w = len;
        d = 3;
      }
    } else {
      w = rng.range(7, 13);
      d = rng.range(7, 13);
    }

    let x = 0;
    let z = 0;
    if (side === 0) {
      x = doorX - Math.floor(w * 0.5);
      z = parent.z - d;
    } else if (side === 1) {
      x = parent.x + parent.w;
      z = doorZ - Math.floor(d * 0.5);
    } else if (side === 2) {
      x = doorX - Math.floor(w * 0.5);
      z = parent.z + parent.d;
    } else {
      x = parent.x - w;
      z = doorZ - Math.floor(d * 0.5);
    }

    let overlap = false;
    for (const p of pieces) {
      const intersects = x < p.x + p.w && x + w > p.x && z < p.z + p.d && z + d > p.z;
      if (intersects) {
        overlap = true;
        break;
      }
    }
    if (overlap) continue;

    const h = isCorridor ? rng.range(5, 7) : rng.range(6, 10);
    const piece = { x, z, w, d, h, kind: isCorridor ? "corridor" : "room" };
    pieces.push(piece);

    if (side === 0) connections.push({ side, x: doorX, z: parent.z });
    if (side === 1) connections.push({ side, x: parent.x + parent.w - 1, z: doorZ });
    if (side === 2) connections.push({ side, x: doorX, z: parent.z + parent.d - 1 });
    if (side === 3) connections.push({ side, x: parent.x, z: doorZ });
  }

  const towers = [];
  const towerR = 2;
  const towerH = rng.range(9, 14);
  towers.push({ x: keep.x - towerR, z: keep.z - towerR, r: towerR, h: towerH });
  towers.push({ x: keep.x + keep.w - 1 + towerR, z: keep.z - towerR, r: towerR, h: towerH });
  towers.push({ x: keep.x - towerR, z: keep.z + keep.d - 1 + towerR, r: towerR, h: towerH });
  towers.push({
    x: keep.x + keep.w - 1 + towerR,
    z: keep.z + keep.d - 1 + towerR,
    r: towerR,
    h: towerH,
  });

  let minX = Infinity;
  let maxX = -Infinity;
  let minZ = Infinity;
  let maxZ = -Infinity;

  for (const p of pieces) {
    minX = Math.min(minX, p.x);
    maxX = Math.max(maxX, p.x + p.w - 1);
    minZ = Math.min(minZ, p.z);
    maxZ = Math.max(maxZ, p.z + p.d - 1);
  }
  for (const t of towers) {
    minX = Math.min(minX, t.x - t.r);
    maxX = Math.max(maxX, t.x + t.r);
    minZ = Math.min(minZ, t.z - t.r);
    maxZ = Math.max(maxZ, t.z + t.r);
  }

  const castle = { baseY, pieces, towers, connections, minX, maxX, minZ, maxZ };
  world.castleCache.set(key, castle);
  return castle;
}

/**
 * Iterates over all castle regions that could overlap chunk `(cx, cz)` and
 * stamps any intersecting castles into the chunk's block array. A search
 * radius of 220 blocks accounts for the largest possible castle footprint so
 * no castle is missed. For each region the function calls `getCastleForRegion`
 * (potentially generating the layout on demand) and performs an AABB
 * intersection test before committing to the more expensive stamping work.
 * @param {Object} world - The `World` instance.
 * @param {Uint8Array} blocks - Chunk block data (modified in place).
 * @param {number} cx - Chunk X grid coordinate.
 * @param {number} cz - Chunk Z grid coordinate.
 * @param {number} worldX0 - World X of the chunk's west edge.
 * @param {number} worldZ0 - World Z of the chunk's north edge.
 */
export function applyCastlesToChunk(world, blocks, cx, cz, worldX0, worldZ0) {
  const chunkMinX = worldX0;
  const chunkMaxX = worldX0 + CHUNK_SIZE - 1;
  const chunkMinZ = worldZ0;
  const chunkMaxZ = worldZ0 + CHUNK_SIZE - 1;

  const searchRadius = 220;
  const minRegionX = floorDiv(chunkMinX - searchRadius, CASTLE_REGION_SIZE);
  const maxRegionX = floorDiv(chunkMaxX + searchRadius, CASTLE_REGION_SIZE);
  const minRegionZ = floorDiv(chunkMinZ - searchRadius, CASTLE_REGION_SIZE);
  const maxRegionZ = floorDiv(chunkMaxZ + searchRadius, CASTLE_REGION_SIZE);

  for (let rz = minRegionZ; rz <= maxRegionZ; rz++) {
    for (let rx = minRegionX; rx <= maxRegionX; rx++) {
      const castle = getCastleForRegion(world, rx, rz);
      if (!castle) continue;
      const intersects =
        castle.minX <= chunkMaxX &&
        castle.maxX >= chunkMinX &&
        castle.minZ <= chunkMaxZ &&
        castle.maxZ >= chunkMinZ;
      if (!intersects) continue;
      stampCastle(world, blocks, cx, cz, castle);
    }
  }
}

/**
 * Stamps all pieces, towers, and connections of a single castle into a chunk.
 * @param {Object} world - The `World` instance.
 * @param {Uint8Array} blocks - Chunk block data.
 * @param {number} cx - Chunk X grid coordinate.
 * @param {number} cz - Chunk Z grid coordinate.
 * @param {Object} castle - Castle layout descriptor from {@link getCastleForRegion}.
 */
function stampCastle(world, blocks, cx, cz, castle) {
  for (const piece of castle.pieces) {
    stampCastlePiece(world, blocks, cx, cz, castle.baseY, piece);
  }

  for (const t of castle.towers) {
    stampCastleTower(world, blocks, cx, cz, castle.baseY, t);
  }

  for (const c of castle.connections) {
    stampCastleConnection(world, blocks, cx, cz, castle.baseY, c);
  }
}

/**
 * Stamps a rectangular castle piece (keep, room, or corridor) into the chunk.
 * The floor layer is solid brick; walls are solid bricks along the perimeter
 * while the interior is cleared to air; the roof uses a checkerboard crenelation
 * pattern on non-corridor pieces. Large rooms (≥9×9) receive four interior
 * support columns to suggest vaulted architecture.
 * @param {Object} world - The `World` instance.
 * @param {Uint8Array} blocks - Chunk block data.
 * @param {number} cx - Chunk X grid coordinate.
 * @param {number} cz - Chunk Z grid coordinate.
 * @param {number} baseY - World Y of the castle's ground floor.
 * @param {Object} piece - Piece descriptor with `x`, `z`, `w`, `d`, `h`, `kind`.
 */
function stampCastlePiece(world, blocks, cx, cz, baseY, piece) {
  const topY = Math.min(WORLD_HEIGHT - 3, baseY + piece.h);
  for (let z = piece.z; z < piece.z + piece.d; z++) {
    for (let x = piece.x; x < piece.x + piece.w; x++) {
      world.setGeneratedBlockIfInChunk(blocks, cx, cz, x, baseY, z, BlockId.CASTLE_BRICK);

      for (let y = baseY + 1; y <= topY; y++) {
        const wall = x === piece.x || x === piece.x + piece.w - 1 || z === piece.z || z === piece.z + piece.d - 1;
        if (wall) world.setGeneratedBlockIfInChunk(blocks, cx, cz, x, y, z, BlockId.CASTLE_BRICK);
        else world.setGeneratedAirIfInChunk(blocks, cx, cz, x, y, z);
      }

      if (piece.kind !== "corridor") {
        const roofY = topY + 1;
        const edge = x === piece.x || x === piece.x + piece.w - 1 || z === piece.z || z === piece.z + piece.d - 1;
        if (edge || ((x + z) & 1) === 0) {
          world.setGeneratedBlockIfInChunk(blocks, cx, cz, x, roofY, z, BlockId.CASTLE_BRICK);
        } else {
          world.setGeneratedAirIfInChunk(blocks, cx, cz, x, roofY, z);
        }
      }
    }
  }

  if (piece.kind === "room" && piece.w >= 9 && piece.d >= 9) {
    const colY = Math.min(WORLD_HEIGHT - 4, baseY + piece.h - 1);
    const cols = [
      [piece.x + 2, piece.z + 2],
      [piece.x + piece.w - 3, piece.z + 2],
      [piece.x + 2, piece.z + piece.d - 3],
      [piece.x + piece.w - 3, piece.z + piece.d - 3],
    ];
    for (const [cxp, czp] of cols) {
      for (let y = baseY + 1; y <= colY; y++) {
        world.setGeneratedBlockIfInChunk(blocks, cx, cz, cxp, y, czp, BlockId.CASTLE_BRICK);
      }
    }
  }
}

/**
 * Stamps a square tower at a corner of the keep. The tower has solid brick
 * walls along its outer ring, air inside, and a checkerboard crenelation at
 * the top. Only cells within the Chebyshev radius `tower.r` from the tower
 * centre are written.
 * @param {Object} world - The `World` instance.
 * @param {Uint8Array} blocks - Chunk block data.
 * @param {number} cx - Chunk X grid coordinate.
 * @param {number} cz - Chunk Z grid coordinate.
 * @param {number} baseY - World Y of the castle's ground floor.
 * @param {Object} tower - Tower descriptor with `x`, `z`, `r`, `h`.
 */
function stampCastleTower(world, blocks, cx, cz, baseY, tower) {
  const topY = Math.min(WORLD_HEIGHT - 3, baseY + tower.h);
  for (let z = tower.z - tower.r; z <= tower.z + tower.r; z++) {
    for (let x = tower.x - tower.r; x <= tower.x + tower.r; x++) {
      const dx = Math.abs(x - tower.x);
      const dz = Math.abs(z - tower.z);
      if (Math.max(dx, dz) > tower.r) continue;
      world.setGeneratedBlockIfInChunk(blocks, cx, cz, x, baseY, z, BlockId.CASTLE_BRICK);
      for (let y = baseY + 1; y <= topY; y++) {
        const ring = Math.max(dx, dz) === tower.r;
        if (ring) world.setGeneratedBlockIfInChunk(blocks, cx, cz, x, y, z, BlockId.CASTLE_BRICK);
        else world.setGeneratedAirIfInChunk(blocks, cx, cz, x, y, z);
      }
      const crenelY = topY + 1;
      if (((x + z) & 1) === 0 || Math.max(dx, dz) === tower.r) {
        world.setGeneratedBlockIfInChunk(blocks, cx, cz, x, crenelY, z, BlockId.CASTLE_BRICK);
      }
    }
  }
}

/**
 * Carves a doorway opening between two adjacent castle pieces by clearing a
 * 3-block-wide, 4-block-tall air passage through the shared wall. The exact
 * positions cleared depend on `c.side` (0 = north, 1 = east, 2 = south,
 * 3 = west) so the opening always faces the correct direction.
 * @param {Object} world - The `World` instance.
 * @param {Uint8Array} blocks - Chunk block data.
 * @param {number} cx - Chunk X grid coordinate.
 * @param {number} cz - Chunk Z grid coordinate.
 * @param {number} baseY - World Y of the castle's ground floor.
 * @param {Object} c - Connection descriptor with `side`, `x`, `z`.
 */
function stampCastleConnection(world, blocks, cx, cz, baseY, c) {
  for (let y = baseY + 1; y <= baseY + 4; y++) {
    for (let o = -1; o <= 1; o++) {
      if (c.side === 0) {
        world.setGeneratedAirIfInChunk(blocks, cx, cz, c.x + o, y, c.z);
        world.setGeneratedAirIfInChunk(blocks, cx, cz, c.x + o, y, c.z - 1);
      } else if (c.side === 1) {
        world.setGeneratedAirIfInChunk(blocks, cx, cz, c.x, y, c.z + o);
        world.setGeneratedAirIfInChunk(blocks, cx, cz, c.x + 1, y, c.z + o);
      } else if (c.side === 2) {
        world.setGeneratedAirIfInChunk(blocks, cx, cz, c.x + o, y, c.z);
        world.setGeneratedAirIfInChunk(blocks, cx, cz, c.x + o, y, c.z + 1);
      } else {
        world.setGeneratedAirIfInChunk(blocks, cx, cz, c.x, y, c.z + o);
        world.setGeneratedAirIfInChunk(blocks, cx, cz, c.x - 1, y, c.z + o);
      }
    }
  }
}
