import * as THREE from "three";
import { BIOME, BIOME_NAME } from "./world.js";
import { CHUNK_SIZE, RENDER_DISTANCE } from "./constants.js";
import { hash2D } from "./random.js";

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

function buildQuestGiver(root) {
  addPart(root, [0.6, 0.92, 0.34], [0, 0.46, 0], 0x3c6fa1);
  addPart(root, [0.52, 0.5, 0.36], [0, 1.17, 0], 0xdfc2a1);
  addPart(root, [0.18, 0.56, 0.2], [-0.2, 0.24, 0], 0x2d3b53);
  addPart(root, [0.18, 0.56, 0.2], [0.2, 0.24, 0], 0x2d3b53);
  addPart(root, [0.1, 0.4, 0.1], [-0.36, 0.62, 0], 0xdfc2a1);
  addPart(root, [0.1, 0.4, 0.1], [0.36, 0.62, 0], 0xdfc2a1);
  addPart(root, [0.58, 0.1, 0.38], [0, 1.48, 0], 0x3a2b22);
  addEyes(root, 1.2, 0.19, 0x1a1a1a, 0.11);
  addPart(root, [0.1, 0.03, 0.02], [0, 1.09, 0.19], 0x7a4f3a);
}

function buildDeer(root) {
  addPart(root, [0.75, 0.44, 0.34], [0, 0.58, 0], 0xa0764f);
  addPart(root, [0.32, 0.32, 0.28], [0.42, 0.76, 0], 0x9a6e46);
  addPart(root, [0.2, 0.14, 0.2], [0.53, 0.62, 0], 0x8e5e39);
  addEyes(root, 0.8, 0.14, 0x171717, 0.05);
  for (const x of [-0.24, 0.24]) {
    addPart(root, [0.14, 0.38, 0.14], [x, 0.2, 0.12], 0x7b5436);
    addPart(root, [0.14, 0.38, 0.14], [x, 0.2, -0.12], 0x7b5436);
  }
  addPart(root, [0.04, 0.28, 0.04], [0.5, 1.02, 0.09], 0xd3c4ab);
  addPart(root, [0.04, 0.28, 0.04], [0.5, 1.02, -0.09], 0xd3c4ab);
}

function buildLizard(root) {
  addPart(root, [0.8, 0.22, 0.32], [0, 0.38, 0], 0xb9b06d);
  addPart(root, [0.3, 0.18, 0.24], [0.49, 0.41, 0], 0x9c9459);
  addPart(root, [0.46, 0.1, 0.1], [-0.62, 0.32, 0], 0x8c8451);
  addEyes(root, 0.45, 0.13, 0x222222, 0.05);
  for (const z of [-0.13, 0.13]) {
    addPart(root, [0.14, 0.1, 0.14], [-0.15, 0.2, z], 0x998f59);
    addPart(root, [0.14, 0.1, 0.14], [0.2, 0.2, z], 0x998f59);
  }
}

function buildParrot(root) {
  addPart(root, [0.32, 0.42, 0.28], [0, 0.64, 0], 0x2ec66b);
  addPart(root, [0.28, 0.24, 0.24], [0.14, 0.9, 0], 0x23b45f);
  addPart(root, [0.1, 0.08, 0.08], [0.3, 0.88, 0], 0xe4aa35);
  addEyes(root, 0.93, 0.12, 0x101010, 0.045);
  addPart(root, [0.48, 0.06, 0.2], [0, 0.66, 0.19], 0x4fd6ff);
  addPart(root, [0.48, 0.06, 0.2], [0, 0.66, -0.19], 0x3eb7e0);
  addPart(root, [0.14, 0.16, 0.12], [-0.2, 0.4, 0], 0x2ba95a);
}

function buildGoat(root) {
  addPart(root, [0.68, 0.4, 0.3], [0, 0.58, 0], 0xdbdcdf);
  addPart(root, [0.3, 0.28, 0.24], [0.38, 0.76, 0], 0xc8c9ce);
  addEyes(root, 0.79, 0.12, 0x161616, 0.05);
  addPart(root, [0.06, 0.24, 0.06], [0.43, 0.98, 0.09], 0xc9b486);
  addPart(root, [0.06, 0.24, 0.06], [0.43, 0.98, -0.09], 0xc9b486);
  for (const x of [-0.2, 0.2]) {
    addPart(root, [0.13, 0.36, 0.13], [x, 0.2, 0.11], 0x96979d);
    addPart(root, [0.13, 0.36, 0.13], [x, 0.2, -0.11], 0x96979d);
  }
}

function buildSheep(root) {
  addPart(root, [0.74, 0.46, 0.42], [0, 0.58, 0], 0xf0f0ef);
  addPart(root, [0.34, 0.3, 0.28], [0.43, 0.72, 0], 0x463c34);
  addEyes(root, 0.74, 0.14, 0x131313, 0.06);
  for (const x of [-0.22, 0.22]) {
    addPart(root, [0.13, 0.34, 0.13], [x, 0.2, 0.14], 0x5e544a);
    addPart(root, [0.13, 0.34, 0.13], [x, 0.2, -0.14], 0x5e544a);
  }
}

function buildReindeer(root) {
  buildDeer(root);
  addPart(root, [0.04, 0.24, 0.04], [0.52, 1.14, 0.14], 0xd8d2bf);
  addPart(root, [0.04, 0.16, 0.04], [0.57, 1.2, 0.18], 0xd8d2bf);
  addPart(root, [0.04, 0.24, 0.04], [0.52, 1.14, -0.14], 0xd8d2bf);
  addPart(root, [0.04, 0.16, 0.04], [0.57, 1.2, -0.18], 0xd8d2bf);
}

function buildHumanoid(root, bodyColor, skinColor, hostileStyle = false) {
  addPart(root, [0.56, 0.88, 0.32], [0, 0.46, 0], bodyColor);
  addPart(root, [0.44, 0.48, 0.32], [0, 1.14, 0], skinColor);
  addPart(root, [0.16, 0.56, 0.16], [-0.18, 0.22, 0], 0x30261f);
  addPart(root, [0.16, 0.56, 0.16], [0.18, 0.22, 0], 0x30261f);
  addPart(root, [0.12, 0.42, 0.12], [-0.34, 0.62, 0], skinColor);
  addPart(root, [0.12, 0.42, 0.12], [0.34, 0.62, 0], skinColor);
  addEyes(root, 1.16, 0.17, hostileStyle ? 0xbf1d1d : 0x141414, 0.08);
  addPart(root, [0.12, 0.04, 0.02], [0, 1.04, 0.17], hostileStyle ? 0x4f1010 : 0x774f38);
  if (hostileStyle) {
    addPart(root, [0.46, 0.08, 0.36], [0, 1.42, 0], 0x1f1f1f);
  }
}

function buildSandStalker(root) {
  addPart(root, [0.66, 0.3, 0.32], [0, 0.48, 0], 0x978447);
  addPart(root, [0.32, 0.2, 0.24], [0.42, 0.54, 0], 0x7d6a37);
  addEyes(root, 0.58, 0.12, 0xce2f1e, 0.05);
  addPart(root, [0.5, 0.08, 0.08], [-0.58, 0.42, 0], 0x6d5a30);
  for (const z of [-0.13, 0.13]) {
    addPart(root, [0.12, 0.2, 0.12], [-0.16, 0.2, z], 0x7f703e);
    addPart(root, [0.12, 0.2, 0.12], [0.16, 0.2, z], 0x7f703e);
  }
}

function buildJaguar(root) {
  addPart(root, [0.74, 0.34, 0.32], [0, 0.54, 0], 0xc2813d);
  addPart(root, [0.32, 0.24, 0.24], [0.45, 0.62, 0], 0xac6f31);
  addEyes(root, 0.65, 0.12, 0xbd1e1e, 0.05);
  for (const x of [-0.22, 0.22]) {
    addPart(root, [0.12, 0.28, 0.12], [x, 0.2, 0.13], 0x8e5a27);
    addPart(root, [0.12, 0.28, 0.12], [x, 0.2, -0.13], 0x8e5a27);
  }
  addPart(root, [0.44, 0.08, 0.08], [-0.58, 0.5, 0], 0x8a5825);
}

function buildRockWraith(root) {
  addPart(root, [0.64, 0.86, 0.42], [0, 0.56, 0], 0x798086);
  addPart(root, [0.48, 0.36, 0.34], [0, 1.18, 0], 0x6a737a);
  addPart(root, [0.26, 0.5, 0.16], [-0.45, 0.62, 0], 0x666f77);
  addPart(root, [0.26, 0.5, 0.16], [0.45, 0.62, 0], 0x666f77);
  addEyes(root, 1.2, 0.18, 0xffad33, 0.09);
}

function buildYeti(root) {
  addPart(root, [0.78, 0.96, 0.48], [0, 0.58, 0], 0xc8d9e5);
  addPart(root, [0.52, 0.5, 0.4], [0, 1.23, 0], 0xd7e5ef);
  addPart(root, [0.28, 0.62, 0.2], [-0.48, 0.62, 0], 0xb8ccdb);
  addPart(root, [0.28, 0.62, 0.2], [0.48, 0.62, 0], 0xb8ccdb);
  addPart(root, [0.18, 0.5, 0.18], [-0.2, 0.25, 0], 0x9db2c2);
  addPart(root, [0.18, 0.5, 0.18], [0.2, 0.25, 0], 0x9db2c2);
  addEyes(root, 1.22, 0.2, 0x8ac0ff, 0.1);
  addPart(root, [0.16, 0.05, 0.03], [0, 1.08, 0.2], 0x517192);
}

function createMobModel(def, hostile, questgiver = false) {
  const root = new THREE.Group();

  if (questgiver) {
    buildQuestGiver(root);
    return root;
  }

  switch (def.key) {
    case "deer":
      buildDeer(root);
      break;
    case "lizard":
      buildLizard(root);
      break;
    case "parrot":
      buildParrot(root);
      break;
    case "goat":
      buildGoat(root);
      break;
    case "sheep":
      buildSheep(root);
      break;
    case "reindeer":
      buildReindeer(root);
      break;
    case "bandit":
      buildHumanoid(root, 0x6e4d36, 0xd0a782, true);
      break;
    case "raider":
      buildHumanoid(root, 0x573729, 0xc89a74, true);
      break;
    case "sandstalker":
      buildSandStalker(root);
      break;
    case "jaguar":
      buildJaguar(root);
      break;
    case "rockwraith":
      buildRockWraith(root);
      break;
    case "yeti":
      buildYeti(root);
      break;
    default:
      buildSheep(root);
      break;
  }

  if (hostile) {
    addPart(root, [0.08, 0.08, 0.08], [0.24, 0.9, 0.2], 0x8f1414);
  }

  return root;
}

export class MobSystem {
  constructor(scene, world) {
    this.scene = scene;
    this.world = world;

    this.entities = new Map();
    this.chunkSpawns = new Map();
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

    const hostileRoll = hash2D(chunk.cx, chunk.cz, 13003);
    if (hostileRoll > 0.62) {
      const hDef = HOSTILE_BY_BIOME[biome];
      created.push(this.spawnMob(chunk, biome, hDef, true));
    }

    const questRoll = hash2D(chunk.cx, chunk.cz, 45019);
    const canQuestgiver = biome === BIOME.FOREST || biome === BIOME.PLAINS || biome === BIOME.JUNGLE;
    if (canQuestgiver && questRoll > 0.93) {
      created.push(this.spawnQuestGiver(chunk, biome));
    }

    this.chunkSpawns.set(
      key,
      created.filter(Boolean)
    );
  }

  spawnMob(chunk, biome, def, hostile) {
    const x = chunk.cx * CHUNK_SIZE + 2 + Math.floor(hash2D(chunk.cx, chunk.cz, hostile ? 443 : 223) * 12);
    const z = chunk.cz * CHUNK_SIZE + 2 + Math.floor(hash2D(chunk.cx, chunk.cz, hostile ? 877 : 557) * 12);
    const surface = this.world.getSurfaceYAt(x, z);
    const root = createMobModel(def, hostile, false);

    const id = this.nextId++;
    const y = surface + (def.flying ? 5.3 : 1.02);
    root.position.set(x + 0.5, y, z + 0.5);
    this.scene.add(root);

    const entity = {
      id,
      chunkKey: chunk.key,
      biome,
      kind: "mob",
      name: def.name,
      hostile,
      flying: !!def.flying,
      speed: def.speed,
      mesh: root,
      vx: 0,
      vz: 0,
      wanderTimer: 0.3 + hash2D(id, x, 8111) * 2.0,
      attackTimer: 0,
      homeY: y,
    };

    this.entities.set(id, entity);
    return id;
  }

  spawnQuestGiver(chunk, biome) {
    const x = chunk.cx * CHUNK_SIZE + 4 + Math.floor(hash2D(chunk.cx, chunk.cz, 1201) * 8);
    const z = chunk.cz * CHUNK_SIZE + 4 + Math.floor(hash2D(chunk.cx, chunk.cz, 1202) * 8);
    const surface = this.world.getSurfaceYAt(x, z);
    const root = createMobModel({ color: 0x3c6fa1 }, false, true);

    const id = this.nextId++;
    root.position.set(x + 0.5, surface + 1.02, z + 0.5);
    this.scene.add(root);

    const entity = {
      id,
      chunkKey: chunk.key,
      biome,
      kind: "questgiver",
      name: `Quest Giver (${BIOME_NAME[biome]})`,
      hostile: false,
      flying: false,
      speed: 0,
      mesh: root,
      homeY: surface + 1.02,
      bobOffset: hash2D(id, x, 21991) * 6.28,
    };

    this.entities.set(id, entity);
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

  syncSpawns(playerPos) {
    for (const chunk of this.world.loaded.values()) {
      this.spawnForChunk(chunk);
    }

    const maxDist = (RENDER_DISTANCE + 3) * CHUNK_SIZE;
    const maxDistSq = maxDist * maxDist;

    for (const [id, e] of this.entities) {
      const dx = e.mesh.position.x - playerPos.x;
      const dz = e.mesh.position.z - playerPos.z;
      if (dx * dx + dz * dz > maxDistSq) {
        this.removeEntity(id);
      }
    }

    for (const [chunkKey, ids] of this.chunkSpawns.entries()) {
      const stillAny = ids.some((id) => this.entities.has(id));
      if (!stillAny) this.chunkSpawns.delete(chunkKey);
    }
  }

  updateEntity(e, playerPos, dt, timeSec) {
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

    if (e.hostile && dist < 8.5) {
      const inv = dist > 0.001 ? 1 / dist : 0;
      e.vx = toPlayerX * inv * e.speed * 1.2;
      e.vz = toPlayerZ * inv * e.speed * 1.2;
      e.attackTimer += dt * 7;
      p.y = e.homeY + Math.sin(e.attackTimer) * 0.2;
    } else {
      e.wanderTimer -= dt;
      if (e.wanderTimer <= 0) {
        const a = hash2D((timeSec * 10) | 0, e.id, 7001) * Math.PI * 2;
        e.vx = Math.cos(a) * e.speed * 0.7;
        e.vz = Math.sin(a) * e.speed * 0.7;
        e.wanderTimer = 1.5 + hash2D(e.id, (timeSec * 4) | 0, 7002) * 3.0;
      }

      if (!e.hostile && dist < 4.5) {
        const inv = dist > 0.001 ? 1 / dist : 0;
        e.vx = -toPlayerX * inv * e.speed;
        e.vz = -toPlayerZ * inv * e.speed;
      }

      if (e.flying) {
        p.y = e.homeY + Math.sin(timeSec * 2.3 + e.id) * 0.7;
      }
    }

    p.x += e.vx * dt;
    p.z += e.vz * dt;

    const sx = Math.floor(p.x);
    const sz = Math.floor(p.z);
    const surface = this.world.getSurfaceYAt(sx, sz);

    if (!e.flying) {
      const targetY = surface + 1.02;
      if (Math.abs(targetY - e.homeY) < 3.5) {
        e.homeY = targetY;
        p.y = targetY;
      } else {
        e.vx *= -0.8;
        e.vz *= -0.8;
      }
    }

    this.tmpDir.set(e.vx, 0, e.vz);
    if (this.tmpDir.lengthSq() > 0.001) {
      e.mesh.rotation.y = Math.atan2(e.vx, e.vz);
    }
  }

  update(playerPos, dt, timeSec) {
    this.spawnTick += dt;
    if (this.spawnTick >= 1.0) {
      this.syncSpawns(playerPos);
      this.spawnTick = 0;
    }

    for (const e of this.entities.values()) {
      this.updateEntity(e, playerPos, dt, timeSec);
    }
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
