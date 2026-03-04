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

function makePart(parent, size, pos, color) {
  const g = new THREE.BoxGeometry(size[0], size[1], size[2]);
  const m = new THREE.MeshLambertMaterial({ color });
  const mesh = new THREE.Mesh(g, m);
  mesh.position.set(pos[0], pos[1], pos[2]);
  parent.add(mesh);
  return mesh;
}

function createMobModel(def, hostile, questgiver = false) {
  const root = new THREE.Group();

  if (questgiver) {
    makePart(root, [0.56, 0.9, 0.32], [0, 0.45, 0], 0x3c6fa1);
    makePart(root, [0.52, 0.52, 0.32], [0, 1.16, 0], 0xe3c5a1);
    makePart(root, [0.2, 0.55, 0.2], [-0.18, 0.24, 0], 0x2f405b);
    makePart(root, [0.2, 0.55, 0.2], [0.18, 0.24, 0], 0x2f405b);
    return root;
  }

  const bodyColor = def.color;
  const headColor = hostile ? Math.max(0x333333, bodyColor - 0x232323) : bodyColor + 0x101010;

  makePart(root, [0.66, 0.46, 0.36], [0, 0.58, 0], bodyColor);
  makePart(root, [0.34, 0.34, 0.34], [0.31, 0.75, 0], headColor);
  makePart(root, [0.18, 0.28, 0.18], [-0.2, 0.2, 0.12], bodyColor - 0x101010);
  makePart(root, [0.18, 0.28, 0.18], [0.2, 0.2, 0.12], bodyColor - 0x101010);
  makePart(root, [0.18, 0.28, 0.18], [-0.2, 0.2, -0.12], bodyColor - 0x101010);
  makePart(root, [0.18, 0.28, 0.18], [0.2, 0.2, -0.12], bodyColor - 0x101010);

  if (def.flying) {
    makePart(root, [0.5, 0.06, 0.18], [0, 0.66, 0.24], 0x52d7ff);
    makePart(root, [0.52, 0.06, 0.18], [0, 0.66, -0.24], 0x4ab9e6);
  }

  if (def.key === "yeti") {
    makePart(root, [0.26, 0.5, 0.2], [-0.42, 0.54, 0], 0xb9cfde);
    makePart(root, [0.26, 0.5, 0.2], [0.42, 0.54, 0], 0xb9cfde);
  }

  if (def.key === "bandit" || def.key === "raider") {
    makePart(root, [0.38, 0.1, 0.38], [0.31, 0.92, 0], 0x1e1e1e);
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
    if (hostileRoll > 0.56) {
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
