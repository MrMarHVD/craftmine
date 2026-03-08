import { BlockId } from "../blocks.js";
import { CHUNK_SIZE, WORLD_HEIGHT } from "../constants.js";
import { floorDiv, hash2D } from "../utils/random.js";

const SETTLEMENT_REGION_SIZE = 1024;
const SEARCH_RADIUS = 320;

function avg(list) {
  return list.reduce((a, b) => a + b, 0) / Math.max(1, list.length);
}

function getHeightStats(world, x, z, w, d) {
  const sample = [
    world.getSurfaceYAt(x, z),
    world.getSurfaceYAt(x + w - 1, z),
    world.getSurfaceYAt(x, z + d - 1),
    world.getSurfaceYAt(x + w - 1, z + d - 1),
    world.getSurfaceYAt(x + (w >> 1), z + (d >> 1)),
  ];
  return { min: Math.min(...sample), max: Math.max(...sample), avg: avg(sample) };
}

function intersects(a, b, pad = 0) {
  return a.x - pad < b.x + b.w && a.x + a.w + pad > b.x && a.z - pad < b.z + b.d && a.z + a.d + pad > b.z;
}

function buildHouse(rng, world, centerX, centerZ, radius, existing, dense = false) {
  for (let attempt = 0; attempt < 200; attempt++) {
    const angle = rng();
    const dist = (dense ? 0.08 : 0.3) * radius + rng() * radius * (dense ? 0.72 : 0.85);
    const px = Math.floor(centerX + Math.cos(angle * Math.PI * 2) * dist);
    const pz = Math.floor(centerZ + Math.sin(angle * Math.PI * 2) * dist);
    const w = 5 + ((rng() * 5) | 0);
    const d = 5 + ((rng() * 5) | 0);
    const x = px - (w >> 1);
    const z = pz - (d >> 1);
    const stats = getHeightStats(world, x, z, w, d);
    if (stats.max - stats.min > (dense ? 3 : 2)) continue;
    if (stats.avg < 20) continue;
    const footprint = { x, z, w, d, y: Math.round(stats.avg) + 1 };
    if (existing.some((s) => intersects(footprint, s, dense ? 1 : 3))) continue;
    return {
      kind: "house",
      x,
      z,
      w,
      d,
      y: Math.round(stats.avg) + 1,
      h: 4 + ((rng() * 3) | 0),
      roofH: 2 + ((rng() * 2) | 0),
      doorSide: (rng() * 4) | 0,
      roofStyle: rng() > 0.5 ? "gableX" : "gableZ",
    };
  }
  return null;
}

function makeRng(seed) {
  let state = seed | 0;
  if (!state) state = 1;
  return () => {
    state = (Math.imul(state, 1664525) + 1013904223) | 0;
    return (state >>> 0) / 4294967295;
  };
}

function buildFortress(world, centerX, centerZ) {
  const w = 26;
  const d = 22;
  const x = centerX - (w >> 1);
  const z = centerZ - (d >> 1);
  const stats = getHeightStats(world, x, z, w, d);
  return { kind: "fortress", x, z, w, d, y: Math.round(stats.avg) + 1, h: 9, towerH: 13 };
}

function buildRoads(structures, fortress = null) {
  const houses = structures.filter((s) => s.kind === "house");
  if (houses.length === 0) return [];
  const roads = [];
  const nodes = houses.map((house) => ({ x: house.x + (house.w >> 1), z: house.z + (house.d >> 1) }));
  const network = fortress
    ? [{ x: fortress.x + (fortress.w >> 1), z: fortress.z }]
    : [nodes[0]];

  for (const node of nodes) {
    let best = network[0];
    let bestD2 = Infinity;
    for (const other of network) {
      const dx = other.x - node.x;
      const dz = other.z - node.z;
      const d2 = dx * dx + dz * dz;
      if (d2 < bestD2) {
        bestD2 = d2;
        best = other;
      }
    }
    roads.push({ x0: node.x, z0: node.z, x1: best.x, z1: best.z });
    network.push(node);
  }
  return roads;
}

export function getSettlementForRegion(world, regionX, regionZ) {
  const key = `${regionX},${regionZ}`;
  if (world.settlementCache.has(key)) return world.settlementCache.get(key);

  const forcedSpawnTown = regionX === 0 && regionZ === 0;
  const roll = hash2D(regionX, regionZ, world.seed + 55101);
  if (!forcedSpawnTown && roll > 0.88) {
    world.settlementCache.set(key, null);
    return null;
  }

  const rng = makeRng(((regionX * 92837111) ^ (regionZ * 689287499) ^ (world.seed * 3343) ^ 0x51f15e5) | 0);
  const type = forcedSpawnTown || rng() > 0.84 ? "town" : "village";
  const centerX = forcedSpawnTown
    ? 96
    : regionX * SETTLEMENT_REGION_SIZE + 140 + Math.floor(rng() * (SETTLEMENT_REGION_SIZE - 280));
  const centerZ = forcedSpawnTown
    ? 96
    : regionZ * SETTLEMENT_REGION_SIZE + 140 + Math.floor(rng() * (SETTLEMENT_REGION_SIZE - 280));

  const structures = [];
  const npcs = [];
  const radius = type === "town" ? 180 : 82;
  const houseCount = type === "town" ? 120 + ((rng() * 81) | 0) : 6 + ((rng() * 15) | 0);
  let fortress = null;

  if (type === "town") {
    fortress = buildFortress(world, centerX, centerZ);
    structures.push(fortress);
  }

  for (let i = 0; i < houseCount; i++) {
    const house = buildHouse(rng, world, centerX, centerZ, radius, structures, type === "town");
    if (!house) continue;
    structures.push(house);
  }

  let villagerIndex = 0;
  let guardIndex = 0;
  for (const structure of structures) {
    if (structure.kind !== "house") continue;
    if (villagerIndex % 2 === 0) {
      npcs.push({
        x: structure.x + (structure.w >> 1) + 0.5,
        z: structure.z + structure.d + 1.5,
        y: structure.y,
        key: "villager",
        name: `Villager ${villagerIndex + 1}`,
      });
    }
    villagerIndex++;
    const guardRate = type === "town" ? 4 : 8;
    if (guardIndex % guardRate === 0) {
      npcs.push({
        x: structure.x + 1.5,
        z: structure.z - 1.5,
        y: structure.y,
        key: "guard",
        name: `Guard ${guardIndex + 1}`,
      });
    }
    guardIndex++;
  }

  const roads = type === "town" ? buildRoads(structures, fortress) : [];
  const roadMinX = roads.length > 0 ? Math.min(...roads.map((r) => Math.min(r.x0, r.x1))) : Infinity;
  const roadMaxX = roads.length > 0 ? Math.max(...roads.map((r) => Math.max(r.x0, r.x1))) : -Infinity;
  const roadMinZ = roads.length > 0 ? Math.min(...roads.map((r) => Math.min(r.z0, r.z1))) : Infinity;
  const roadMaxZ = roads.length > 0 ? Math.max(...roads.map((r) => Math.max(r.z0, r.z1))) : -Infinity;
  const minX = Math.min(...structures.map((s) => s.x), roadMinX) - 6;
  const maxX = Math.max(...structures.map((s) => s.x + s.w), roadMaxX) + 6;
  const minZ = Math.min(...structures.map((s) => s.z), roadMinZ) - 6;
  const maxZ = Math.max(...structures.map((s) => s.z + s.d), roadMaxZ) + 6;

  const settlement = { key, type, centerX, centerZ, structures, roads, npcs, minX, maxX, minZ, maxZ };
  world.settlementCache.set(key, settlement);
  return settlement;
}

function setBlock(world, blocks, cx, cz, x, y, z, id) {
  world.setGeneratedBlockIfInChunk(blocks, cx, cz, x, y, z, id);
}

function clearBlock(world, blocks, cx, cz, x, y, z) {
  world.setGeneratedAirIfInChunk(blocks, cx, cz, x, y, z);
}

function stampHouse(world, blocks, cx, cz, house) {
  const floorY = house.y;
  for (let z = house.z; z < house.z + house.d; z++) {
    for (let x = house.x; x < house.x + house.w; x++) {
      for (let fy = floorY - 2; fy < floorY; fy++) setBlock(world, blocks, cx, cz, x, fy, z, BlockId.DIRT);
      setBlock(world, blocks, cx, cz, x, floorY, z, BlockId.PLANK);
      for (let y = floorY + 1; y <= floorY + house.h; y++) {
        const edge = x === house.x || x === house.x + house.w - 1 || z === house.z || z === house.z + house.d - 1;
        if (!edge) {
          clearBlock(world, blocks, cx, cz, x, y, z);
          continue;
        }
        const corner = (x === house.x || x === house.x + house.w - 1) && (z === house.z || z === house.z + house.d - 1);
        setBlock(world, blocks, cx, cz, x, y, z, corner ? BlockId.LOG : BlockId.PLANK);
      }
    }
  }

  const doorX = house.x + (house.w >> 1);
  const doorZ = house.z + (house.d >> 1);
  for (let y = floorY + 1; y <= floorY + 3; y++) {
    if (house.doorSide === 0) clearBlock(world, blocks, cx, cz, doorX, y, house.z);
    if (house.doorSide === 1) clearBlock(world, blocks, cx, cz, house.x + house.w - 1, y, doorZ);
    if (house.doorSide === 2) clearBlock(world, blocks, cx, cz, doorX, y, house.z + house.d - 1);
    if (house.doorSide === 3) clearBlock(world, blocks, cx, cz, house.x, y, doorZ);
  }

  const windowY = floorY + 2;
  for (let x = house.x + 1; x < house.x + house.w - 1; x += 3) {
    clearBlock(world, blocks, cx, cz, x, windowY, house.z);
    clearBlock(world, blocks, cx, cz, x, windowY, house.z + house.d - 1);
  }
  for (let z = house.z + 1; z < house.z + house.d - 1; z += 3) {
    clearBlock(world, blocks, cx, cz, house.x, windowY, z);
    clearBlock(world, blocks, cx, cz, house.x + house.w - 1, windowY, z);
  }

  const roofBase = floorY + house.h + 1;
  if (house.roofStyle === "gableX") {
    for (let rx = 0; rx < house.w; rx++) {
      const rise = Math.min(rx, house.w - 1 - rx, house.roofH);
      for (let z = house.z - 1; z <= house.z + house.d; z++) {
        setBlock(world, blocks, cx, cz, house.x + rx, roofBase + rise, z, BlockId.LOG);
      }
    }
  } else {
    for (let rz = 0; rz < house.d; rz++) {
      const rise = Math.min(rz, house.d - 1 - rz, house.roofH);
      for (let x = house.x - 1; x <= house.x + house.w; x++) {
        setBlock(world, blocks, cx, cz, x, roofBase + rise, house.z + rz, BlockId.LOG);
      }
    }
  }
}

function stampFortress(world, blocks, cx, cz, fort) {
  const y0 = fort.y;
  for (let z = fort.z; z < fort.z + fort.d; z++) {
    for (let x = fort.x; x < fort.x + fort.w; x++) {
      for (let fy = y0 - 3; fy <= y0; fy++) setBlock(world, blocks, cx, cz, x, fy, z, BlockId.CASTLE_BRICK);
      for (let y = y0 + 1; y <= y0 + fort.h; y++) {
        const edge = x === fort.x || x === fort.x + fort.w - 1 || z === fort.z || z === fort.z + fort.d - 1;
        if (edge) setBlock(world, blocks, cx, cz, x, y, z, BlockId.CASTLE_BRICK);
        else clearBlock(world, blocks, cx, cz, x, y, z);
      }
    }
  }

  const midX = fort.x + (fort.w >> 1);
  const midZ = fort.z + (fort.d >> 1);
  for (let y = y0 + 1; y <= y0 + 4; y++) {
    clearBlock(world, blocks, cx, cz, midX, y, fort.z);
    clearBlock(world, blocks, cx, cz, midX + 1, y, fort.z);
  }

  for (let x = fort.x + 4; x < fort.x + fort.w - 4; x += 6) {
    for (let y = y0 + 1; y <= y0 + fort.h - 1; y++) {
      if (x === midX || x === midX + 1) continue;
      setBlock(world, blocks, cx, cz, x, y, midZ, BlockId.CASTLE_BRICK);
    }
    for (let y = y0 + 2; y <= y0 + 4; y++) clearBlock(world, blocks, cx, cz, x, y, midZ);
  }
  for (let z = fort.z + 4; z < fort.z + fort.d - 4; z += 6) {
    for (let y = y0 + 1; y <= y0 + fort.h - 1; y++) {
      if (z === midZ) continue;
      setBlock(world, blocks, cx, cz, midX, y, z, BlockId.CASTLE_BRICK);
    }
    for (let y = y0 + 2; y <= y0 + 4; y++) clearBlock(world, blocks, cx, cz, midX, y, z);
  }

  for (const [tx, tz] of [
    [fort.x - 1, fort.z - 1],
    [fort.x + fort.w - 2, fort.z - 1],
    [fort.x - 1, fort.z + fort.d - 2],
    [fort.x + fort.w - 2, fort.z + fort.d - 2],
  ]) {
    for (let y = y0 + 1; y <= y0 + fort.towerH; y++) {
      for (let ox = 0; ox < 3; ox++) {
        for (let oz = 0; oz < 3; oz++) setBlock(world, blocks, cx, cz, tx + ox, y, tz + oz, BlockId.CASTLE_BRICK);
      }
    }
  }
}

function stampRoad(world, blocks, cx, cz, road) {
  let x = road.x0;
  let z = road.z0;
  const dx = Math.sign(road.x1 - road.x0);
  const dz = Math.sign(road.z1 - road.z0);
  while (x !== road.x1 || z !== road.z1) {
    const y = world.getSurfaceYAt(x, z) + 1;
    for (let ox = -1; ox <= 1; ox++) {
      for (let oz = -1; oz <= 1; oz++) {
        for (let fy = y - 1; fy <= y; fy++) setBlock(world, blocks, cx, cz, x + ox, fy, z + oz, BlockId.GRAVEL);
        clearBlock(world, blocks, cx, cz, x + ox, y + 1, z + oz);
      }
    }
    if (x !== road.x1) x += dx;
    else if (z !== road.z1) z += dz;
  }
}

export function applySettlementsToChunk(world, blocks, cx, cz, worldX0, worldZ0) {
  const chunkMinX = worldX0;
  const chunkMaxX = worldX0 + CHUNK_SIZE - 1;
  const chunkMinZ = worldZ0;
  const chunkMaxZ = worldZ0 + CHUNK_SIZE - 1;
  const minRegionX = floorDiv(chunkMinX - SEARCH_RADIUS, SETTLEMENT_REGION_SIZE);
  const maxRegionX = floorDiv(chunkMaxX + SEARCH_RADIUS, SETTLEMENT_REGION_SIZE);
  const minRegionZ = floorDiv(chunkMinZ - SEARCH_RADIUS, SETTLEMENT_REGION_SIZE);
  const maxRegionZ = floorDiv(chunkMaxZ + SEARCH_RADIUS, SETTLEMENT_REGION_SIZE);

  for (let rz = minRegionZ; rz <= maxRegionZ; rz++) {
    for (let rx = minRegionX; rx <= maxRegionX; rx++) {
      const settlement = getSettlementForRegion(world, rx, rz);
      if (!settlement) continue;
      if (settlement.maxX < chunkMinX || settlement.minX > chunkMaxX || settlement.maxZ < chunkMinZ || settlement.minZ > chunkMaxZ) continue;
      if (settlement.type === "town") {
        for (const road of settlement.roads) stampRoad(world, blocks, cx, cz, road);
      }
      for (const structure of settlement.structures) {
        if (structure.x + structure.w < chunkMinX || structure.x > chunkMaxX || structure.z + structure.d < chunkMinZ || structure.z > chunkMaxZ) continue;
        if (structure.kind === "house") stampHouse(world, blocks, cx, cz, structure);
        else if (structure.kind === "fortress") stampFortress(world, blocks, cx, cz, structure);
      }
    }
  }
}

export function isSettlementReserved(world, x, z) {
  const minRegionX = floorDiv(x - SEARCH_RADIUS, SETTLEMENT_REGION_SIZE);
  const maxRegionX = floorDiv(x + SEARCH_RADIUS, SETTLEMENT_REGION_SIZE);
  const minRegionZ = floorDiv(z - SEARCH_RADIUS, SETTLEMENT_REGION_SIZE);
  const maxRegionZ = floorDiv(z + SEARCH_RADIUS, SETTLEMENT_REGION_SIZE);
  for (let rz = minRegionZ; rz <= maxRegionZ; rz++) {
    for (let rx = minRegionX; rx <= maxRegionX; rx++) {
      const settlement = getSettlementForRegion(world, rx, rz);
      if (!settlement) continue;
      if (x < settlement.minX || x > settlement.maxX || z < settlement.minZ || z > settlement.maxZ) continue;
      for (const s of settlement.structures) {
        if (x >= s.x - 1 && x <= s.x + s.w && z >= s.z - 1 && z <= s.z + s.d) return true;
      }
    }
  }
  return false;
}

export function getSettlementNpcsForChunk(world, cx, cz) {
  const chunkMinX = cx * CHUNK_SIZE;
  const chunkMaxX = chunkMinX + CHUNK_SIZE;
  const chunkMinZ = cz * CHUNK_SIZE;
  const chunkMaxZ = chunkMinZ + CHUNK_SIZE;
  const minRegionX = floorDiv(chunkMinX - SEARCH_RADIUS, SETTLEMENT_REGION_SIZE);
  const maxRegionX = floorDiv(chunkMaxX + SEARCH_RADIUS, SETTLEMENT_REGION_SIZE);
  const minRegionZ = floorDiv(chunkMinZ - SEARCH_RADIUS, SETTLEMENT_REGION_SIZE);
  const maxRegionZ = floorDiv(chunkMaxZ + SEARCH_RADIUS, SETTLEMENT_REGION_SIZE);
  const out = [];

  for (let rz = minRegionZ; rz <= maxRegionZ; rz++) {
    for (let rx = minRegionX; rx <= maxRegionX; rx++) {
      const settlement = getSettlementForRegion(world, rx, rz);
      if (!settlement) continue;
      for (const npc of settlement.npcs) {
        if (npc.x < chunkMinX || npc.x >= chunkMaxX || npc.z < chunkMinZ || npc.z >= chunkMaxZ) continue;
        out.push({ ...npc, settlementType: settlement.type, settlementKey: settlement.key });
      }
    }
  }
  return out;
}
