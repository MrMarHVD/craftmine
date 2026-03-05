import * as THREE from "three";
import { BIOME, BIOME_NAME } from "./world.js";
import { CHUNK_SIZE, RENDER_DISTANCE } from "./constants.js";
import { floorDiv, hash2D } from "./random.js";

const HOSTILE_SITE_CELL = 384;
const HOSTILE_SITE_CHANCE = 0.56;
const HOSTILE_SPAWN_RANGE = (RENDER_DISTANCE + 5) * CHUNK_SIZE;

const NATURAL_BY_BIOME = {
  [BIOME.FOREST]: { key: "deer", name: "Deer", color: 0xa0764f, speed: 1.6 },
  [BIOME.DESERT]: { key: "lizard", name: "Lizard", color: 0xb9b06d, speed: 1.4 },
  [BIOME.JUNGLE]: { key: "parrot", name: "Parrot", color: 0x2ec66b, speed: 2.2, flying: true },
  [BIOME.MOUNTAIN]: { key: "goat", name: "Goat", color: 0xd7d8dd, speed: 1.5 },
  [BIOME.PLAINS]: { key: "sheep", name: "Sheep", color: 0xf0f0ef, speed: 1.3 },
  [BIOME.TUNDRA]: { key: "reindeer", name: "Reindeer", color: 0x9f8569, speed: 1.5 },
};

const HOSTILE_BY_BIOME = {
  [BIOME.FOREST]: { key: "bandit", name: "Bandit", color: 0x6e4d36, speed: 2.1 },
  [BIOME.DESERT]: { key: "sandstalker", name: "Sandstalker", color: 0x978447, speed: 2.0 },
  [BIOME.JUNGLE]: { key: "jaguar", name: "Jungle Stalker", color: 0xc2813d, speed: 2.3 },
  [BIOME.MOUNTAIN]: { key: "rockwraith", name: "Rock Wraith", color: 0x798086, speed: 1.9 },
  [BIOME.PLAINS]: { key: "raider", name: "Raider", color: 0x704838, speed: 2.0 },
  [BIOME.TUNDRA]: { key: "yeti", name: "Yeti", color: 0xc8d9e5, speed: 1.8 },
};

const INTELLIGENT_HOSTILES = new Set(["bandit", "raider"]);

function addPart(parent, size, pos, color) {
  const g = new THREE.BoxGeometry(size[0], size[1], size[2]);
  const m = new THREE.MeshLambertMaterial({ color });
  const mesh = new THREE.Mesh(g, m);
  mesh.position.set(pos[0], pos[1], pos[2]);
  parent.add(mesh);
  return mesh;
}

function addEyes(parent, y, z, color = 0x1b1b1b, spacing = 0.12) {
  addPart(parent, [0.06, 0.06, 0.02], [-spacing, y, z], color);
  addPart(parent, [0.06, 0.06, 0.02], [spacing, y, z], color);
}

function createRig(type) {
  return {
    type,
    legs: [],
    arms: [],
    wings: [],
    tail: null,
    head: null,
  };
}

function buildQuestGiver(root) {
  const rig = createRig("humanoid");
  addPart(root, [0.6, 0.92, 0.34], [0, 0.46, 0], 0x3c6fa1);
  rig.head = addPart(root, [0.52, 0.5, 0.36], [0, 1.17, 0], 0xdfc2a1);
  rig.legs.push(addPart(root, [0.18, 0.56, 0.2], [-0.2, 0.24, 0], 0x2d3b53));
  rig.legs.push(addPart(root, [0.18, 0.56, 0.2], [0.2, 0.24, 0], 0x2d3b53));
  rig.arms.push(addPart(root, [0.1, 0.4, 0.1], [-0.36, 0.62, 0], 0xdfc2a1));
  rig.arms.push(addPart(root, [0.1, 0.4, 0.1], [0.36, 0.62, 0], 0xdfc2a1));
  addPart(root, [0.58, 0.1, 0.38], [0, 1.48, 0], 0x3a2b22);
  addEyes(root, 1.2, 0.19, 0x1a1a1a, 0.11);
  addPart(root, [0.1, 0.03, 0.02], [0, 1.09, 0.19], 0x7a4f3a);
  return rig;
}

function buildDeer(root) {
  const rig = createRig("quadruped");
  addPart(root, [0.75, 0.44, 0.34], [0, 0.58, 0], 0xa0764f);
  rig.head = addPart(root, [0.32, 0.32, 0.28], [0.42, 0.76, 0], 0x9a6e46);
  addPart(root, [0.2, 0.14, 0.2], [0.53, 0.62, 0], 0x8e5e39);
  rig.tail = addPart(root, [0.08, 0.12, 0.08], [-0.42, 0.64, 0], 0x825733);
  addEyes(root, 0.8, 0.14, 0x171717, 0.05);
  for (const x of [-0.24, 0.24]) {
    rig.legs.push(addPart(root, [0.14, 0.38, 0.14], [x, 0.2, 0.12], 0x7b5436));
    rig.legs.push(addPart(root, [0.14, 0.38, 0.14], [x, 0.2, -0.12], 0x7b5436));
  }
  addPart(root, [0.04, 0.28, 0.04], [0.5, 1.02, 0.09], 0xd3c4ab);
  addPart(root, [0.04, 0.28, 0.04], [0.5, 1.02, -0.09], 0xd3c4ab);
  return rig;
}

function buildLizard(root) {
  const rig = createRig("crawler");
  addPart(root, [0.8, 0.22, 0.32], [0, 0.38, 0], 0xb9b06d);
  rig.head = addPart(root, [0.3, 0.18, 0.24], [0.49, 0.41, 0], 0x9c9459);
  rig.tail = addPart(root, [0.46, 0.1, 0.1], [-0.62, 0.32, 0], 0x8c8451);
  addEyes(root, 0.45, 0.13, 0x222222, 0.05);
  for (const z of [-0.13, 0.13]) {
    rig.legs.push(addPart(root, [0.14, 0.1, 0.14], [-0.15, 0.2, z], 0x998f59));
    rig.legs.push(addPart(root, [0.14, 0.1, 0.14], [0.2, 0.2, z], 0x998f59));
  }
  return rig;
}

function buildParrot(root) {
  const rig = createRig("flying");
  addPart(root, [0.32, 0.42, 0.28], [0, 0.64, 0], 0x2ec66b);
  rig.head = addPart(root, [0.28, 0.24, 0.24], [0.14, 0.9, 0], 0x23b45f);
  addPart(root, [0.1, 0.08, 0.08], [0.3, 0.88, 0], 0xe4aa35);
  addEyes(root, 0.93, 0.12, 0x101010, 0.045);
  rig.wings.push(addPart(root, [0.48, 0.06, 0.2], [0, 0.66, 0.19], 0x4fd6ff));
  rig.wings.push(addPart(root, [0.48, 0.06, 0.2], [0, 0.66, -0.19], 0x3eb7e0));
  rig.tail = addPart(root, [0.14, 0.16, 0.12], [-0.2, 0.4, 0], 0x2ba95a);
  return rig;
}

function buildGoat(root) {
  const rig = createRig("quadruped");
  addPart(root, [0.68, 0.4, 0.3], [0, 0.58, 0], 0xdbdcdf);
  rig.head = addPart(root, [0.3, 0.28, 0.24], [0.38, 0.76, 0], 0xc8c9ce);
  addEyes(root, 0.79, 0.12, 0x161616, 0.05);
  addPart(root, [0.06, 0.24, 0.06], [0.43, 0.98, 0.09], 0xc9b486);
  addPart(root, [0.06, 0.24, 0.06], [0.43, 0.98, -0.09], 0xc9b486);
  for (const x of [-0.2, 0.2]) {
    rig.legs.push(addPart(root, [0.13, 0.36, 0.13], [x, 0.2, 0.11], 0x96979d));
    rig.legs.push(addPart(root, [0.13, 0.36, 0.13], [x, 0.2, -0.11], 0x96979d));
  }
  return rig;
}

function buildSheep(root) {
  const rig = createRig("quadruped");
  addPart(root, [0.74, 0.46, 0.42], [0, 0.58, 0], 0xf0f0ef);
  rig.head = addPart(root, [0.34, 0.3, 0.28], [0.43, 0.72, 0], 0x463c34);
  addEyes(root, 0.74, 0.14, 0x131313, 0.06);
  for (const x of [-0.22, 0.22]) {
    rig.legs.push(addPart(root, [0.13, 0.34, 0.13], [x, 0.2, 0.14], 0x5e544a));
    rig.legs.push(addPart(root, [0.13, 0.34, 0.13], [x, 0.2, -0.14], 0x5e544a));
  }
  return rig;
}

function buildReindeer(root) {
  const rig = buildDeer(root);
  addPart(root, [0.04, 0.24, 0.04], [0.52, 1.14, 0.14], 0xd8d2bf);
  addPart(root, [0.04, 0.16, 0.04], [0.57, 1.2, 0.18], 0xd8d2bf);
  addPart(root, [0.04, 0.24, 0.04], [0.52, 1.14, -0.14], 0xd8d2bf);
  addPart(root, [0.04, 0.16, 0.04], [0.57, 1.2, -0.18], 0xd8d2bf);
  return rig;
}

function buildHumanoid(root, bodyColor, skinColor, hostileStyle = false) {
  const rig = createRig("humanoid");
  addPart(root, [0.56, 0.88, 0.32], [0, 0.46, 0], bodyColor);
  rig.head = addPart(root, [0.44, 0.48, 0.32], [0, 1.14, 0], skinColor);
  rig.legs.push(addPart(root, [0.16, 0.56, 0.16], [-0.18, 0.22, 0], 0x30261f));
  rig.legs.push(addPart(root, [0.16, 0.56, 0.16], [0.18, 0.22, 0], 0x30261f));
  rig.arms.push(addPart(root, [0.12, 0.42, 0.12], [-0.34, 0.62, 0], skinColor));
  rig.arms.push(addPart(root, [0.12, 0.42, 0.12], [0.34, 0.62, 0], skinColor));
  addEyes(root, 1.16, 0.17, hostileStyle ? 0xbf1d1d : 0x141414, 0.08);
  addPart(root, [0.12, 0.04, 0.02], [0, 1.04, 0.17], hostileStyle ? 0x4f1010 : 0x774f38);
  if (hostileStyle) addPart(root, [0.46, 0.08, 0.36], [0, 1.42, 0], 0x1f1f1f);
  return rig;
}

function buildSandStalker(root) {
  const rig = createRig("crawler");
  addPart(root, [0.66, 0.3, 0.32], [0, 0.48, 0], 0x978447);
  rig.head = addPart(root, [0.32, 0.2, 0.24], [0.42, 0.54, 0], 0x7d6a37);
  addEyes(root, 0.58, 0.12, 0xce2f1e, 0.05);
  rig.tail = addPart(root, [0.5, 0.08, 0.08], [-0.58, 0.42, 0], 0x6d5a30);
  for (const z of [-0.13, 0.13]) {
    rig.legs.push(addPart(root, [0.12, 0.2, 0.12], [-0.16, 0.2, z], 0x7f703e));
    rig.legs.push(addPart(root, [0.12, 0.2, 0.12], [0.16, 0.2, z], 0x7f703e));
  }
  return rig;
}

function buildJaguar(root) {
  const rig = createRig("quadruped");
  addPart(root, [0.74, 0.34, 0.32], [0, 0.54, 0], 0xc2813d);
  rig.head = addPart(root, [0.32, 0.24, 0.24], [0.45, 0.62, 0], 0xac6f31);
  addEyes(root, 0.65, 0.12, 0xbd1e1e, 0.05);
  for (const x of [-0.22, 0.22]) {
    rig.legs.push(addPart(root, [0.12, 0.28, 0.12], [x, 0.2, 0.13], 0x8e5a27));
    rig.legs.push(addPart(root, [0.12, 0.28, 0.12], [x, 0.2, -0.13], 0x8e5a27));
  }
  rig.tail = addPart(root, [0.44, 0.08, 0.08], [-0.58, 0.5, 0], 0x8a5825);
  return rig;
}

function buildRockWraith(root) {
  const rig = createRig("wraith");
  addPart(root, [0.64, 0.86, 0.42], [0, 0.56, 0], 0x798086);
  rig.head = addPart(root, [0.48, 0.36, 0.34], [0, 1.18, 0], 0x6a737a);
  rig.arms.push(addPart(root, [0.26, 0.5, 0.16], [-0.45, 0.62, 0], 0x666f77));
  rig.arms.push(addPart(root, [0.26, 0.5, 0.16], [0.45, 0.62, 0], 0x666f77));
  addEyes(root, 1.2, 0.18, 0xffad33, 0.09);
  return rig;
}

function buildYeti(root) {
  const rig = createRig("humanoid");
  addPart(root, [0.78, 0.96, 0.48], [0, 0.58, 0], 0xc8d9e5);
  rig.head = addPart(root, [0.52, 0.5, 0.4], [0, 1.23, 0], 0xd7e5ef);
  rig.arms.push(addPart(root, [0.28, 0.62, 0.2], [-0.48, 0.62, 0], 0xb8ccdb));
  rig.arms.push(addPart(root, [0.28, 0.62, 0.2], [0.48, 0.62, 0], 0xb8ccdb));
  rig.legs.push(addPart(root, [0.18, 0.5, 0.18], [-0.2, 0.25, 0], 0x9db2c2));
  rig.legs.push(addPart(root, [0.18, 0.5, 0.18], [0.2, 0.25, 0], 0x9db2c2));
  addEyes(root, 1.22, 0.2, 0x8ac0ff, 0.1);
  addPart(root, [0.16, 0.05, 0.03], [0, 1.08, 0.2], 0x517192);
  return rig;
}

function createMobModel(def, hostile, questgiver = false) {
  const root = new THREE.Group();
  let rig;

  if (questgiver) {
    rig = buildQuestGiver(root);
    return { root, rig };
  }

  switch (def.key) {
    case "deer":
      rig = buildDeer(root);
      break;
    case "lizard":
      rig = buildLizard(root);
      break;
    case "parrot":
      rig = buildParrot(root);
      break;
    case "goat":
      rig = buildGoat(root);
      break;
    case "sheep":
      rig = buildSheep(root);
      break;
    case "reindeer":
      rig = buildReindeer(root);
      break;
    case "bandit":
      rig = buildHumanoid(root, 0x6e4d36, 0xd0a782, true);
      break;
    case "raider":
      rig = buildHumanoid(root, 0x573729, 0xc89a74, true);
      break;
    case "sandstalker":
      rig = buildSandStalker(root);
      break;
    case "jaguar":
      rig = buildJaguar(root);
      break;
    case "rockwraith":
      rig = buildRockWraith(root);
      break;
    case "yeti":
      rig = buildYeti(root);
      break;
    default:
      rig = buildSheep(root);
      break;
  }

  if (hostile) addPart(root, [0.08, 0.08, 0.08], [0.24, 0.9, 0.2], 0x8f1414);
  return { root, rig };
}

export class MobSystem {
  constructor(scene, world) {
    this.scene = scene;
    this.world = world;

    this.entities = new Map();
    this.chunkSpawns = new Map();
    this.hostileSites = new Map();
    this.hostileSiteSpawns = new Map();
    this.nextId = 1;
    this.spawnTick = 0;

    this.tmpDir = new THREE.Vector3();
  }

  spawnForChunk(chunk) {
    const key = chunk.key;
    if (this.chunkSpawns.has(key)) return;

    const centerX = chunk.cx * CHUNK_SIZE + CHUNK_SIZE * 0.5;
    const centerZ = chunk.cz * CHUNK_SIZE + CHUNK_SIZE * 0.5;
    const biome = this.world.getBiomeAt(centerX, centerZ);

    const created = [];
    const nDef = NATURAL_BY_BIOME[biome];
    created.push(this.spawnMob(chunk, biome, nDef, false));

    const questRoll = hash2D(chunk.cx, chunk.cz, 45019);
    const canQuestgiver = biome === BIOME.FOREST || biome === BIOME.PLAINS || biome === BIOME.JUNGLE;
    if (canQuestgiver && questRoll > 0.93) created.push(this.spawnQuestGiver(chunk, biome));

    this.chunkSpawns.set(
      key,
      created.filter(Boolean)
    );
  }

  getHostileSite(cellX, cellZ) {
    const key = `${cellX},${cellZ}`;
    if (this.hostileSites.has(key)) return this.hostileSites.get(key);

    const roll = hash2D(cellX, cellZ, 88901);
    if (roll > HOSTILE_SITE_CHANCE) {
      this.hostileSites.set(key, null);
      return null;
    }

    const margin = 64;
    const x = cellX * HOSTILE_SITE_CELL + margin + Math.floor(hash2D(cellX, cellZ, 88911) * (HOSTILE_SITE_CELL - margin * 2));
    const z = cellZ * HOSTILE_SITE_CELL + margin + Math.floor(hash2D(cellX, cellZ, 88921) * (HOSTILE_SITE_CELL - margin * 2));
    const biome = this.world.getBiomeAt(x, z);
    const def = HOSTILE_BY_BIOME[biome];
    const intelligent = INTELLIGENT_HOSTILES.has(def.key);

    let groupSize = 1;
    if (intelligent) {
      groupSize = 3 + ((hash2D(cellX, cellZ, 88931) * 3) | 0); // 3..5
    } else if (hash2D(cellX, cellZ, 88941) > 0.8) {
      groupSize = 2;
    }

    const site = {
      key,
      x,
      z,
      biome,
      def,
      intelligent,
      groupSize,
    };

    this.hostileSites.set(key, site);
    return site;
  }

  spawnHostileSite(site) {
    if (this.hostileSiteSpawns.has(site.key)) return;

    const ids = [];
    const baseY = this.world.getSurfaceYAt(site.x, site.z);

    for (let i = 0; i < site.groupSize; i++) {
      const a = hash2D(i, site.x, 7801) * Math.PI * 2;
      const r = site.intelligent ? 2.2 + hash2D(i, site.z, 7802) * 4.5 : hash2D(i, site.z, 7803) * 2.5;
      const sx = Math.floor(site.x + Math.cos(a) * r);
      const sz = Math.floor(site.z + Math.sin(a) * r);
      const sy = this.world.getSurfaceYAt(sx, sz);

      const id = this.spawnHostileAt(site, i, sx, sy, sz, baseY);
      if (id) ids.push(id);
    }

    this.hostileSiteSpawns.set(site.key, ids);
  }

  spawnHostileAt(site, index, x, surfaceY, z, baseY) {
    const { root, rig } = createMobModel(site.def, true, false);
    const id = this.nextId++;
    const y = surfaceY + (site.def.flying ? 5.3 : 1.02);
    root.position.set(x + 0.5, y, z + 0.5);
    this.scene.add(root);

    const angle = (Math.PI * 2 * index) / Math.max(1, site.groupSize);
    const offsetRadius = site.intelligent ? 3.2 : 1.6;

    this.entities.set(id, {
      id,
      sourceType: "site",
      sourceKey: site.key,
      biome: site.biome,
      kind: "mob",
      name: site.def.name,
      hostile: true,
      flying: !!site.def.flying,
      intelligent: site.intelligent,
      speed: site.def.speed,
      mesh: root,
      rig,
      vx: 0,
      vz: 0,
      wanderTimer: 0.6 + hash2D(id, x, 8111) * 2.0,
      attackTimer: 0,
      homeY: y,
      homeX: site.x + Math.cos(angle) * offsetRadius,
      homeZ: site.z + Math.sin(angle) * offsetRadius,
      patrolRadius: site.intelligent ? 7.5 : 10,
      animPhase: hash2D(id, x, 9201) * Math.PI * 2,
      groupId: site.key,
      groupCenterY: baseY + 1.02,
    });

    return id;
  }

  spawnMob(chunk, biome, def, hostile) {
    const x = chunk.cx * CHUNK_SIZE + 2 + Math.floor(hash2D(chunk.cx, chunk.cz, hostile ? 443 : 223) * 12);
    const z = chunk.cz * CHUNK_SIZE + 2 + Math.floor(hash2D(chunk.cx, chunk.cz, hostile ? 877 : 557) * 12);
    const surface = this.world.getSurfaceYAt(x, z);
    const { root, rig } = createMobModel(def, hostile, false);

    const id = this.nextId++;
    const y = surface + (def.flying ? 5.3 : 1.02);
    root.position.set(x + 0.5, y, z + 0.5);
    this.scene.add(root);

    this.entities.set(id, {
      id,
      sourceType: "chunk",
      sourceKey: chunk.key,
      biome,
      kind: "mob",
      name: def.name,
      hostile,
      flying: !!def.flying,
      intelligent: false,
      speed: def.speed,
      mesh: root,
      rig,
      vx: 0,
      vz: 0,
      wanderTimer: 0.3 + hash2D(id, x, 8111) * 2.0,
      attackTimer: 0,
      homeY: y,
      homeX: x,
      homeZ: z,
      patrolRadius: 9,
      animPhase: hash2D(id, x, 9201) * Math.PI * 2,
      groupId: null,
    });

    return id;
  }

  spawnQuestGiver(chunk, biome) {
    const x = chunk.cx * CHUNK_SIZE + 4 + Math.floor(hash2D(chunk.cx, chunk.cz, 1201) * 8);
    const z = chunk.cz * CHUNK_SIZE + 4 + Math.floor(hash2D(chunk.cx, chunk.cz, 1202) * 8);
    const surface = this.world.getSurfaceYAt(x, z);
    const { root } = createMobModel({ color: 0x3c6fa1 }, false, true);

    const id = this.nextId++;
    root.position.set(x + 0.5, surface + 1.02, z + 0.5);
    this.scene.add(root);

    this.entities.set(id, {
      id,
      sourceType: "chunk",
      sourceKey: chunk.key,
      biome,
      kind: "questgiver",
      name: `Quest Giver (${BIOME_NAME[biome]})`,
      hostile: false,
      flying: false,
      intelligent: true,
      speed: 0,
      mesh: root,
      rig: null,
      homeY: surface + 1.02,
      bobOffset: hash2D(id, x, 21991) * 6.28,
      animPhase: 0,
    });

    return id;
  }

  removeEntity(id) {
    const e = this.entities.get(id);
    if (!e) return;
    this.scene.remove(e.mesh);
    e.mesh.traverse((n) => {
      if (!n.isMesh) return;
      n.geometry?.dispose?.();
      n.material?.dispose?.();
    });
    this.entities.delete(id);
  }

  spawnHostilesNear(playerPos) {
    const minCellX = floorDiv(playerPos.x - HOSTILE_SPAWN_RANGE, HOSTILE_SITE_CELL);
    const maxCellX = floorDiv(playerPos.x + HOSTILE_SPAWN_RANGE, HOSTILE_SITE_CELL);
    const minCellZ = floorDiv(playerPos.z - HOSTILE_SPAWN_RANGE, HOSTILE_SITE_CELL);
    const maxCellZ = floorDiv(playerPos.z + HOSTILE_SPAWN_RANGE, HOSTILE_SITE_CELL);

    for (let cz = minCellZ; cz <= maxCellZ; cz++) {
      for (let cx = minCellX; cx <= maxCellX; cx++) {
        const site = this.getHostileSite(cx, cz);
        if (!site) continue;

        const dx = site.x - playerPos.x;
        const dz = site.z - playerPos.z;
        if (dx * dx + dz * dz > HOSTILE_SPAWN_RANGE * HOSTILE_SPAWN_RANGE) continue;

        this.spawnHostileSite(site);
      }
    }
  }

  syncSpawns(playerPos) {
    for (const chunk of this.world.loaded.values()) {
      this.spawnForChunk(chunk);
    }

    this.spawnHostilesNear(playerPos);

    const maxDist = (RENDER_DISTANCE + 6) * CHUNK_SIZE;
    const maxDistSq = maxDist * maxDist;

    for (const [id, e] of this.entities) {
      const dx = e.mesh.position.x - playerPos.x;
      const dz = e.mesh.position.z - playerPos.z;
      if (dx * dx + dz * dz > maxDistSq) this.removeEntity(id);
    }

    for (const [chunkKey, ids] of this.chunkSpawns.entries()) {
      const stillAny = ids.some((id) => this.entities.has(id));
      if (!stillAny) this.chunkSpawns.delete(chunkKey);
    }

    for (const [siteKey, ids] of this.hostileSiteSpawns.entries()) {
      const stillAny = ids.some((id) => this.entities.has(id));
      if (!stillAny) this.hostileSiteSpawns.delete(siteKey);
    }
  }

  animateEntity(e, dt, speed2D, timeSec) {
    if (!e.rig) return;
    const rig = e.rig;
    const moving = speed2D > 0.04;
    const targetAmp = moving ? Math.min(0.55, speed2D * 0.16) : 0.05;
    e.animPhase += dt * (moving ? 8 + speed2D * 2.4 : 2.2);

    if (rig.legs.length > 0) {
      for (let i = 0; i < rig.legs.length; i++) {
        const leg = rig.legs[i];
        const phase = e.animPhase + (i % 2 === 0 ? 0 : Math.PI);
        leg.rotation.x = Math.sin(phase) * targetAmp;
      }
    }

    if (rig.arms.length > 0) {
      for (let i = 0; i < rig.arms.length; i++) {
        const arm = rig.arms[i];
        const phase = e.animPhase + (i % 2 === 0 ? Math.PI : 0);
        arm.rotation.x = Math.sin(phase) * (targetAmp * 0.9);
      }
    }

    if (rig.wings.length > 0) {
      const flap = Math.sin(timeSec * 16 + e.id) * (moving ? 0.7 : 0.3);
      rig.wings[0].rotation.z = flap;
      if (rig.wings[1]) rig.wings[1].rotation.z = -flap;
    }

    if (rig.tail) {
      rig.tail.rotation.y = Math.sin(timeSec * 5 + e.id) * 0.35;
      rig.tail.rotation.x = Math.cos(timeSec * 4 + e.id) * 0.12;
    }

    if (rig.head) {
      rig.head.rotation.x = Math.sin(timeSec * 2.7 + e.id) * 0.05;
    }
  }

  updateEntity(e, playerPos, dt, timeSec, agroEnabled) {
    if (e.kind === "questgiver") {
      e.mesh.position.y = e.homeY + Math.sin(timeSec * 1.9 + e.bobOffset) * 0.06;
      e.mesh.rotation.y += dt * 0.4;
      return;
    }

    const p = e.mesh.position;
    const toPlayerX = playerPos.x - p.x;
    const toPlayerZ = playerPos.z - p.z;
    const distSq = toPlayerX * toPlayerX + toPlayerZ * toPlayerZ;
    const dist = Math.sqrt(distSq);

    if (e.hostile && agroEnabled && dist < 8.8) {
      const inv = dist > 0.001 ? 1 / dist : 0;
      e.vx = toPlayerX * inv * e.speed * 1.25;
      e.vz = toPlayerZ * inv * e.speed * 1.25;
      e.attackTimer += dt * 7;
      p.y = e.homeY + Math.sin(e.attackTimer) * 0.2;
    } else {
      e.wanderTimer -= dt;
      if (e.wanderTimer <= 0) {
        const a = hash2D((timeSec * 10) | 0, e.id, 7001) * Math.PI * 2;
        const w = e.speed * (e.intelligent ? 0.55 : 0.75);
        e.vx = Math.cos(a) * w;
        e.vz = Math.sin(a) * w;
        e.wanderTimer = 1.8 + hash2D(e.id, (timeSec * 4) | 0, 7002) * 3.2;
      }

      if (!e.hostile && dist < 4.5) {
        const inv = dist > 0.001 ? 1 / dist : 0;
        e.vx = -toPlayerX * inv * e.speed;
        e.vz = -toPlayerZ * inv * e.speed;
      }

      if (e.hostile) {
        const hx = e.homeX - p.x;
        const hz = e.homeZ - p.z;
        const hDist = Math.hypot(hx, hz);
        if (hDist > e.patrolRadius) {
          const inv = hDist > 0.001 ? 1 / hDist : 0;
          e.vx = hx * inv * e.speed * 0.9;
          e.vz = hz * inv * e.speed * 0.9;
        }
      }

      if (e.flying) p.y = e.homeY + Math.sin(timeSec * 2.3 + e.id) * 0.7;
    }

    p.x += e.vx * dt;
    p.z += e.vz * dt;

    const sx = Math.floor(p.x);
    const sz = Math.floor(p.z);
    const surface = this.world.getSurfaceYAt(sx, sz);

    if (!e.flying) {
      const targetY = surface + 1.02;
      if (Math.abs(targetY - e.homeY) < 4) {
        e.homeY = targetY;
        p.y = targetY;
      } else {
        e.vx *= -0.8;
        e.vz *= -0.8;
      }
    }

    this.tmpDir.set(e.vx, 0, e.vz);
    const speed2D = this.tmpDir.length();
    if (speed2D > 0.001) e.mesh.rotation.y = -Math.atan2(e.vz, e.vx);
    this.animateEntity(e, dt, speed2D, timeSec);
  }

  update(playerPos, dt, timeSec, agroEnabled = true) {
    this.spawnTick += dt;
    if (this.spawnTick >= 1.0) {
      this.syncSpawns(playerPos);
      this.spawnTick = 0;
    }

    for (const e of this.entities.values()) {
      this.updateEntity(e, playerPos, dt, timeSec, agroEnabled);
    }
  }

  countHostilesInRange(playerPos, radius) {
    const r2 = radius * radius;
    let count = 0;
    for (const e of this.entities.values()) {
      if (!e.hostile || e.kind !== "mob") continue;
      const dx = e.mesh.position.x - playerPos.x;
      const dy = e.mesh.position.y - playerPos.y;
      const dz = e.mesh.position.z - playerPos.z;
      if (dx * dx + dy * dy + dz * dz <= r2) count++;
    }
    return count;
  }

  getNearestQuestGiver(playerPos, maxDistance = 4) {
    let best = null;
    let bestD2 = maxDistance * maxDistance;
    for (const e of this.entities.values()) {
      if (e.kind !== "questgiver") continue;
      const dx = e.mesh.position.x - playerPos.x;
      const dy = e.mesh.position.y - playerPos.y;
      const dz = e.mesh.position.z - playerPos.z;
      const d2 = dx * dx + dy * dy + dz * dz;
      if (d2 < bestD2) {
        bestD2 = d2;
        best = e;
      }
    }
    return best;
  }
}
