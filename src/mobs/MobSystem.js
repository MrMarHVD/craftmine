import * as THREE from "three";
import { BlockId } from "../blocks.js";
import { CHUNK_SIZE, RENDER_DISTANCE, WORLD_HEIGHT } from "../constants.js";
import { floorDiv, hash2D } from "../utils/random.js";
import { BIOME, BIOME_NAME } from "../world.js";
import { createMobModel } from "./models.js";
import { createHealthBarSprite, createDamageHalo, updateHealthBarSprite } from "./healthBar.js";

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
  [BIOME.FOREST]: {
    key: "bandit",
    name: "Bandit",
    color: 0x6e4d36,
    speed: 2.1,
    health: 65,
    drop: BlockId.WEAPON_BANDIT_BLADE,
  },
  [BIOME.DESERT]: {
    key: "sandstalker",
    name: "Sandstalker",
    color: 0x978447,
    speed: 2.0,
    health: 58,
    drop: BlockId.WEAPON_SCORP_BOW,
  },
  [BIOME.JUNGLE]: {
    key: "jaguar",
    name: "Jungle Stalker",
    color: 0xc2813d,
    speed: 2.3,
    health: 60,
    drop: BlockId.WEAPON_JAGUAR_CLAWS,
  },
  [BIOME.MOUNTAIN]: {
    key: "rockwraith",
    name: "Rock Wraith",
    color: 0x798086,
    speed: 1.9,
    health: 72,
    drop: BlockId.WEAPON_WRAITH_HAMMER,
  },
  [BIOME.PLAINS]: {
    key: "raider",
    name: "Raider",
    color: 0x704838,
    speed: 2.0,
    health: 68,
    drop: BlockId.WEAPON_RAIDER_SABER,
  },
  [BIOME.TUNDRA]: {
    key: "yeti",
    name: "Yeti",
    color: 0xc8d9e5,
    speed: 1.8,
    health: 85,
    drop: BlockId.WEAPON_YETI_AXE,
  },
};

const INTELLIGENT_HOSTILES = new Set(["bandit", "raider"]);

function findTopSolidY(world, x, z) {
  const ix = Math.floor(x);
  const iz = Math.floor(z);
  for (let y = WORLD_HEIGHT - 1; y >= 1; y--) {
    const id = world.getBlock(ix, y, iz);
    const above = world.getBlock(ix, y + 1, iz);
    if (id !== BlockId.AIR && id !== BlockId.WATER && above === BlockId.AIR) return y;
  }
  return 1;
}

export class MobSystem {
  constructor(scene, world, options = {}) {
    this.scene = scene;
    this.world = world;
    this.onEnemyKilled = options.onEnemyKilled ?? (() => {});

    this.entities = new Map();
    this.chunkSpawns = new Map();
    this.hostileSites = new Map();
    this.hostileSiteSpawns = new Map();
    this.nextId = 1;
    this.spawnTick = 0;

    this.tmpDir = new THREE.Vector3();
    this.raycaster = new THREE.Raycaster();
  }

  attachEntityMesh(entity) {
    entity.mesh.userData.entityId = entity.id;
    entity.mesh.traverse((n) => {
      if (n.isMesh) n.userData.entityId = entity.id;
    });
    this.scene.add(entity.mesh);
  }

  spawnForChunk(chunk) {
    const key = chunk.key;
    if (this.chunkSpawns.has(key)) return;

    const centerX = chunk.cx * CHUNK_SIZE + CHUNK_SIZE * 0.5;
    const centerZ = chunk.cz * CHUNK_SIZE + CHUNK_SIZE * 0.5;
    const biome = this.world.getBiomeAt(centerX, centerZ);

    const created = [];
    created.push(this.spawnMob(chunk, biome, NATURAL_BY_BIOME[biome], false));

    const questRoll = hash2D(chunk.cx, chunk.cz, 45019);
    const canQuestgiver = biome === BIOME.FOREST || biome === BIOME.PLAINS || biome === BIOME.JUNGLE;
    if (canQuestgiver && questRoll > 0.93) created.push(this.spawnQuestGiver(chunk, biome));

    this.chunkSpawns.set(key, created.filter(Boolean));
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
    if (intelligent) groupSize = 3 + ((hash2D(cellX, cellZ, 88931) * 3) | 0);
    else if (hash2D(cellX, cellZ, 88941) > 0.8) groupSize = 2;

    const site = { key, x, z, biome, def, intelligent, groupSize };
    this.hostileSites.set(key, site);
    return site;
  }

  spawnHostileSite(site) {
    if (this.hostileSiteSpawns.has(site.key)) return;

    const ids = [];
    const baseY = findTopSolidY(this.world, site.x, site.z);

    for (let i = 0; i < site.groupSize; i++) {
      const a = hash2D(i, site.x, 7801) * Math.PI * 2;
      const r = site.intelligent ? 2.2 + hash2D(i, site.z, 7802) * 4.5 : hash2D(i, site.z, 7803) * 2.5;
      const sx = Math.floor(site.x + Math.cos(a) * r);
      const sz = Math.floor(site.z + Math.sin(a) * r);
      const sy = findTopSolidY(this.world, sx, sz);
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

    const angle = (Math.PI * 2 * index) / Math.max(1, site.groupSize);
    const offsetRadius = site.intelligent ? 3.2 : 1.6;

    const entity = {
      id,
      sourceType: "site",
      sourceKey: site.key,
      biome: site.biome,
      kind: "mob",
      key: site.def.key,
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
      maxHealth: site.def.health,
      health: site.def.health,
      dropItem: site.def.drop,
      damageFlash: 0,
    };

    createHealthBarSprite(entity);
    createDamageHalo(entity);

    this.entities.set(id, entity);
    this.attachEntityMesh(entity);
    return id;
  }

  spawnMob(chunk, biome, def, hostile) {
    const x = chunk.cx * CHUNK_SIZE + 2 + Math.floor(hash2D(chunk.cx, chunk.cz, hostile ? 443 : 223) * 12);
    const z = chunk.cz * CHUNK_SIZE + 2 + Math.floor(hash2D(chunk.cx, chunk.cz, hostile ? 877 : 557) * 12);
    const surface = findTopSolidY(this.world, x, z);
    const { root, rig } = createMobModel(def, hostile, false);

    const id = this.nextId++;
    const y = surface + (def.flying ? 5.3 : 1.02);
    root.position.set(x + 0.5, y, z + 0.5);

    const entity = {
      id,
      sourceType: "chunk",
      sourceKey: chunk.key,
      biome,
      kind: "mob",
      key: def.key,
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
      maxHealth: hostile ? 50 : 30,
      health: hostile ? 50 : 30,
      dropItem: null,
      damageFlash: 0,
    };

    if (hostile) {
      createHealthBarSprite(entity);
      createDamageHalo(entity);
    }

    this.entities.set(id, entity);
    this.attachEntityMesh(entity);
    return id;
  }

  spawnQuestGiver(chunk, biome) {
    const x = chunk.cx * CHUNK_SIZE + 4 + Math.floor(hash2D(chunk.cx, chunk.cz, 1201) * 8);
    const z = chunk.cz * CHUNK_SIZE + 4 + Math.floor(hash2D(chunk.cx, chunk.cz, 1202) * 8);
    const surface = findTopSolidY(this.world, x, z);
    const { root } = createMobModel({ color: 0x3c6fa1 }, false, true);

    const id = this.nextId++;
    root.position.set(x + 0.5, surface + 1.02, z + 0.5);

    const entity = {
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
    };

    this.entities.set(id, entity);
    this.attachEntityMesh(entity);
    return id;
  }

  removeEntity(id) {
    const e = this.entities.get(id);
    if (!e) return;
    this.scene.remove(e.mesh);
    e.mesh.traverse((n) => {
      if (!n.isMesh && !n.isSprite) return;
      n.geometry?.dispose?.();
      n.material?.dispose?.();
      if (n.material?.map) n.material.map.dispose?.();
    });
    this.entities.delete(id);
  }

  getEntityFromObject(obj) {
    let n = obj;
    while (n) {
      if (n.userData && n.userData.entityId !== undefined) {
        return this.entities.get(n.userData.entityId) ?? null;
      }
      n = n.parent;
    }
    return null;
  }

  attackFromRay(origin, direction, maxDistance, damage) {
    const candidates = [];
    const aliveHostiles = [];
    for (const e of this.entities.values()) {
      if (!e.hostile || e.kind !== "mob") continue;
      if (e.health <= 0) continue;
      candidates.push(e.mesh);
      aliveHostiles.push(e);
    }
    if (candidates.length === 0) return null;

    this.raycaster.set(origin, direction);
    this.raycaster.far = maxDistance;
    const hits = this.raycaster.intersectObjects(candidates, true);
    if (hits.length > 0) {
      const entity = this.getEntityFromObject(hits[0].object);
      if (!entity) return null;
      return this.damageEntity(entity, damage);
    }

    // Fallback cone hit test so clicks still land on animated/small enemies.
    const maxAngle = 0.4; // ~23 degrees
    let best = null;
    let bestDist = Infinity;
    const toTarget = new THREE.Vector3();
    for (const e of aliveHostiles) {
      toTarget.subVectors(e.mesh.position, origin);
      const dist = toTarget.length();
      if (dist > maxDistance || dist < 0.0001) continue;
      const angle = direction.angleTo(toTarget.multiplyScalar(1 / dist));
      if (angle > maxAngle) continue;
      if (dist < bestDist) {
        bestDist = dist;
        best = e;
      }
    }
    if (!best) return null;
    return this.damageEntity(best, damage);
  }

  attackNearestInFront(origin, direction, maxDistance, maxAngle, damage) {
    let best = null;
    let bestDist = Infinity;
    const toTarget = new THREE.Vector3();

    for (const e of this.entities.values()) {
      if (!e.hostile || e.kind !== "mob") continue;
      if (e.health <= 0) continue;

      toTarget.subVectors(e.mesh.position, origin);
      const dist = toTarget.length();
      if (dist > maxDistance || dist < 0.0001) continue;

      const dirToTarget = toTarget.clone().multiplyScalar(1 / dist);
      const angle = direction.angleTo(dirToTarget);
      if (angle > maxAngle) continue;

      if (dist < bestDist) {
        bestDist = dist;
        best = e;
      }
    }

    if (!best) return null;
    return this.damageEntity(best, damage);
  }

  damageEntity(entity, damage) {
    if (!entity || !entity.hostile || entity.kind !== "mob") return null;
    entity.health = Math.max(0, entity.health - damage);
    entity.damageFlash = 0.25;
    updateHealthBarSprite(entity);

    if (entity.health <= 0) {
      const payload = { name: entity.name, key: entity.key, dropItem: entity.dropItem };
      this.removeEntity(entity.id);
      this.onEnemyKilled(payload);
      return { killed: true, ...payload };
    }

    return { killed: false, name: entity.name, key: entity.key };
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
      if (!ids.some((id) => this.entities.has(id))) this.chunkSpawns.delete(chunkKey);
    }

    for (const [siteKey, ids] of this.hostileSiteSpawns.entries()) {
      if (!ids.some((id) => this.entities.has(id))) this.hostileSiteSpawns.delete(siteKey);
    }
  }

  animateEntity(e, dt, speed2D, timeSec) {
    if (!e.rig) return;
    const rig = e.rig;
    const moving = speed2D > 0.04;
    const targetAmp = moving ? Math.min(0.55, speed2D * 0.16) : 0.05;
    e.animPhase += dt * (moving ? 8 + speed2D * 2.4 : 2.2);

    for (let i = 0; i < rig.legs.length; i++) {
      const leg = rig.legs[i];
      const phase = e.animPhase + (i % 2 === 0 ? 0 : Math.PI);
      leg.rotation.x = Math.sin(phase) * targetAmp;
    }

    for (let i = 0; i < rig.arms.length; i++) {
      const arm = rig.arms[i];
      const phase = e.animPhase + (i % 2 === 0 ? Math.PI : 0);
      arm.rotation.x = Math.sin(phase) * (targetAmp * 0.9);
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
    const dist = Math.hypot(toPlayerX, toPlayerZ);

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

    const surface = findTopSolidY(this.world, p.x, p.z);
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

    if (e.damageHalo) {
      e.damageFlash = Math.max(0, e.damageFlash - dt);
      e.damageHalo.material.opacity = e.damageFlash > 0 ? 0.7 * (e.damageFlash / 0.25) : 0;
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
