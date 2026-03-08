/**
 * @module mobs/MobSystem
 * @description Manages the full lifecycle of all living entities in the world:
 * natural wildlife, hostile enemy groups, and quest-giver NPCs. `MobSystem`
 * spawns mobs as chunks load, drives their AI (wander, flee, aggro), animates
 * their rigs each frame, handles melee hit detection, applies damage, and
 * cleans up dead or out-of-range entities. It is the primary combat and
 * creature interaction layer between the player and the world.
 */

import * as THREE from "three";
import { BlockId } from "../blocks.js";
import { CHUNK_SIZE, RENDER_DISTANCE, WORLD_HEIGHT } from "../constants.js";
import { floorDiv, hash2D } from "../utils/random.js";
import { BIOME, BIOME_NAME } from "../world.js";
import { WORLD_SPAWN_CONFIG } from "../world/spawnConfig.js";
import { updateHeldItemAnchor } from "../rendering/heldItems.js";
import { solveBallisticVelocity, SKELETON_ARROW_SPEED } from "../game/projectiles.js";
import { createMobModel } from "./models.js";
import { createHealthBarSprite, createDamageHalo, updateHealthBarSprite } from "./healthBar.js";

/**
 * Size of each hostile site placement cell in world blocks.
 * @type {number}
 */
const HOSTILE_SITE_CELL = 384;

/**
 * Probability (0–1) that a given cell contains a hostile site.
 * @type {number}
 */
/**
 * Maximum distance from the player in world blocks within which hostile sites
 * are spawned and kept active.
 * @type {number}
 */
const HOSTILE_SPAWN_RANGE = (RENDER_DISTANCE + 5) * CHUNK_SIZE;

/**
 * Per-biome definitions for the single natural (passive) mob that spawns in
 * each chunk of that biome.
 * @type {Object.<number, {key: string, name: string, color: number, speed: number, flying?: boolean}>}
 */
const NATURAL_BY_BIOME = {
  [BIOME.FOREST]: { key: "deer", name: "Deer", color: 0xa0764f, speed: 1.6 },
  [BIOME.DESERT]: { key: "lizard", name: "Lizard", color: 0xb9b06d, speed: 1.4 },
  [BIOME.JUNGLE]: { key: "parrot", name: "Parrot", color: 0x2ec66b, speed: 2.2, flying: true },
  [BIOME.MOUNTAIN]: { key: "goat", name: "Goat", color: 0xd7d8dd, speed: 1.5 },
  [BIOME.PLAINS]: { key: "sheep", name: "Sheep", color: 0xf0f0ef, speed: 1.3 },
  [BIOME.TUNDRA]: { key: "reindeer", name: "Reindeer", color: 0x9f8569, speed: 1.5 },
};

/**
 * Per-biome definitions for hostile enemies that spawn at hostile sites.
 * Each entry includes combat stats and the weapon item dropped on death.
 * @type {Object.<number, {key: string, name: string, color: number, speed: number, health: number, drop: number}>}
 */
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

/**
 * Set of mob keys that are considered "intelligent" hostiles. Intelligent
 * hostiles spawn in larger groups (3–5) and maintain a tighter patrol
 * formation around their home point.
 * @type {Set<string>}
 */
const INTELLIGENT_HOSTILES = new Set(["bandit", "raider"]);
const SKELETON_DEF = {
  key: "skeleton",
  name: "Skeleton",
  color: 0xe5e2d6,
  speed: 1.95,
  health: 54,
  drop: null,
};

function getModelYawOffset(entityKey, rigType, isQuestGiver = false) {
  if (isQuestGiver) return Math.PI * 0.5;
  if (rigType === "humanoid" || rigType === "wraith") return Math.PI * 0.5;
  if (entityKey === "bandit" || entityKey === "raider" || entityKey === "yeti" || entityKey === "rockwraith") {
    return Math.PI * 0.5;
  }
  return 0;
}

function getEntityHitbox(entity) {
  switch (entity.key) {
    case "bandit":
    case "raider":
    case "skeleton":
    case "questgiver":
      return { centerY: 0.96, halfX: 0.28, halfY: 0.96, halfZ: 0.22 };
    case "yeti":
      return { centerY: 1.02, halfX: 0.38, halfY: 1.02, halfZ: 0.28 };
    case "rockwraith":
      return { centerY: 0.92, halfX: 0.34, halfY: 0.92, halfZ: 0.26 };
    case "deer":
    case "reindeer":
      return { centerY: 0.6, halfX: 0.52, halfY: 0.5, halfZ: 0.22 };
    case "goat":
    case "sheep":
      return { centerY: 0.58, halfX: 0.46, halfY: 0.46, halfZ: 0.24 };
    case "jaguar":
      return { centerY: 0.56, halfX: 0.48, halfY: 0.34, halfZ: 0.2 };
    case "lizard":
    case "sandstalker":
      return { centerY: 0.4, halfX: 0.5, halfY: 0.2, halfZ: 0.18 };
    case "parrot":
      return { centerY: 0.7, halfX: 0.2, halfY: 0.24, halfZ: 0.18 };
    default:
      return { centerY: 0.7, halfX: 0.35, halfY: 0.5, halfZ: 0.24 };
  }
}

function intersectRayAabb(origin, direction, min, max) {
  let tmin = -Infinity;
  let tmax = Infinity;

  for (const axis of ["x", "y", "z"]) {
    const o = origin[axis];
    const d = direction[axis];
    const mn = min[axis];
    const mx = max[axis];

    if (Math.abs(d) < 1e-8) {
      if (o < mn || o > mx) return null;
      continue;
    }

    let t1 = (mn - o) / d;
    let t2 = (mx - o) / d;
    if (t1 > t2) [t1, t2] = [t2, t1];
    tmin = Math.max(tmin, t1);
    tmax = Math.min(tmax, t2);
    if (tmin > tmax) return null;
  }

  if (tmax < 0) return null;
  return tmin >= 0 ? tmin : tmax;
}

/**
 * Scans downward from the world ceiling to find the highest solid, non-water
 * block with air immediately above it. Used when placing mobs on the terrain
 * surface before the chunk mesh is available.
 * @param {Object} world - The `World` instance.
 * @param {number} x - World X coordinate.
 * @param {number} z - World Z coordinate.
 * @returns {number} The Y coordinate of the topmost solid surface, or 1 if none found.
 */
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

function hasLineOfSight(world, from, to) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const dz = to.z - from.z;
  const dist = Math.hypot(dx, dy, dz);
  const steps = Math.max(1, Math.ceil(dist / 0.35));
  for (let i = 1; i < steps; i++) {
    const t = i / steps;
    const x = Math.floor(from.x + dx * t);
    const y = Math.floor(from.y + dy * t);
    const z = Math.floor(from.z + dz * t);
    const id = world.getBlock(x, y, z);
    if (id !== BlockId.AIR && id !== BlockId.WATER && id !== BlockId.LEAVES && id !== BlockId.VINE) return false;
  }
  return true;
}

/**
 * Manages all living entities: natural mobs, hostile enemy groups, and
 * quest-giver NPCs.
 *
 * @property {THREE.Scene} scene - The Three.js scene entities are added to.
 * @property {Object} world - The `World` instance used for surface queries.
 * @property {function} onEnemyKilled - Callback invoked with `{name, key, dropItem}` when a hostile is killed.
 * @property {function} onQuestGiverKilled - Callback invoked with the dead quest-giver entity.
 * @property {Map<number, Object>} entities - All active entity objects keyed by unique numeric ID.
 * @property {Map<string, number[]>} chunkSpawns - Maps chunk keys to arrays of entity IDs spawned for that chunk.
 * @property {Map<string, Object|null>} hostileSites - Cached hostile site descriptors keyed by cell key.
 * @property {Map<string, number[]>} hostileSiteSpawns - Maps site keys to arrays of entity IDs at that site.
 * @property {number} nextId - Monotonically increasing counter used to assign unique entity IDs.
 */
export class MobSystem {
  /**
   * @param {THREE.Scene} scene - Scene to add mob meshes to.
   * @param {Object} world - The `World` instance.
   * @param {Object} [options={}] - Optional configuration.
   * @param {function} [options.onEnemyKilled] - Callback fired when a hostile entity is killed.
   */
  constructor(scene, world, options = {}) {
    this.scene = scene;
    this.world = world;
    this.onEnemyKilled = options.onEnemyKilled ?? (() => {});
    this.onQuestGiverKilled = options.onQuestGiverKilled ?? (() => {});

    this.entities = new Map();
    this.chunkSpawns = new Map();
    this.hostileSites = new Map();
    this.hostileSiteSpawns = new Map();
    this.skeletonSpawnerSpawns = new Map();
    this.nextId = 1;
    this.spawnTick = 0;

    this.tmpDir = new THREE.Vector3();
    this.raycaster = new THREE.Raycaster();
  }

  /**
   * Adds the entity's root mesh to the scene and tags every sub-mesh with
   * `userData.entityId` so that `getEntityFromObject` can traverse up the
   * mesh hierarchy during raycasting to identify the owning entity.
   * @param {Object} entity - Entity object with `entity.id` and `entity.mesh`.
   */
  attachEntityMesh(entity) {
    entity.mesh.userData.entityId = entity.id;
    entity.mesh.traverse((n) => {
      if (n.isMesh) n.userData.entityId = entity.id;
    });
    this.scene.add(entity.mesh);
  }

  attachHeldItem(entity, itemId, scale = 0.72) {
    if (!itemId) return;
    const anchor = new THREE.Group();
    anchor.position.set(0.05, -0.3, 0.02);
    anchor.rotation.set(0.08, 0.04, -0.08);
    (entity.rig?.arms?.[1] ?? entity.mesh).add(anchor);
    updateHeldItemAnchor(anchor, itemId, scale);
    entity.heldAnchor = anchor;
    entity.heldItemId = itemId;
  }

  /**
   * Spawns the natural (passive) mob for a chunk and, with a biome-dependent
   * probability, a quest-giver NPC. Does nothing if the chunk has already been
   * spawned for (tracked via `chunkSpawns`).
   * @param {Object} chunk - Chunk entry from `World.loaded` with `cx`, `cz`, and `key`.
   */
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
    if (canQuestgiver && questRoll > 1 - WORLD_SPAWN_CONFIG.questgiverChance) created.push(this.spawnQuestGiver(chunk, biome));

    this.chunkSpawns.set(key, created.filter(Boolean));
  }

  /**
   * Returns the hostile site descriptor for cell `(cellX, cellZ)`, generating
   * and caching it on first access. A hash roll against `HOSTILE_SITE_CHANCE`
   * determines whether a site exists; if it does, the site's world position,
   * biome, enemy definition, group size, and intelligence flag are derived
   * deterministically from the cell coordinates.
   * @param {number} cellX - Hostile site cell X grid index.
   * @param {number} cellZ - Hostile site cell Z grid index.
   * @returns {Object|null} Site descriptor or `null` if no site exists in this cell.
   */
  getHostileSite(cellX, cellZ) {
    const key = `${cellX},${cellZ}`;
    if (this.hostileSites.has(key)) return this.hostileSites.get(key);

    const roll = hash2D(cellX, cellZ, 88901);
    if (roll > WORLD_SPAWN_CONFIG.hostileSiteChance) {
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

  /**
   * Spawns all hostile entities for a given site if they have not already been
   * spawned. Each member of the group is placed at a position offset from the
   * site centre using an angular distribution, giving the group a natural
   * spread.
   * @param {Object} site - Hostile site descriptor from `getHostileSite`.
   */
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

  /**
   * Creates and registers a single hostile entity at the given world position
   * as part of a site spawn. Attaches a health bar and damage halo, assigns
   * home position and patrol radius based on whether the site is intelligent,
   * and stores the entity in `this.entities`.
   * @param {Object} site - Hostile site descriptor.
   * @param {number} index - Index of this entity within its group (used for patrol offset angle).
   * @param {number} x - World X spawn position.
   * @param {number} surfaceY - Surface Y coordinate at the spawn position.
   * @param {number} z - World Z spawn position.
   * @param {number} baseY - Surface Y at the site centre (used as `groupCenterY`).
   * @returns {number|undefined} The new entity's ID, or `undefined` if creation failed.
   */
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
      shootCooldown: 0,
      modelYawOffset: getModelYawOffset(site.def.key, rig?.type, false),
    };

    createHealthBarSprite(entity);
    createDamageHalo(entity);

    this.entities.set(id, entity);
    this.attachEntityMesh(entity);
    return id;
  }

  findSkeletonSpawnerPosition(spawnerX, spawnerY, spawnerZ) {
    const candidates = [
      [2, 0],
      [-2, 0],
      [0, 2],
      [0, -2],
      [3, 1],
      [-3, -1],
      [1, -3],
      [-1, 3],
    ];

    for (const [ox, oz] of candidates) {
      const x = spawnerX + ox;
      const z = spawnerZ + oz;
      const surface = findTopSolidY(this.world, x, z);
      if (Math.abs(surface - spawnerY) > 5) continue;
      if (this.world.getBlock(x, surface + 1, z) !== BlockId.AIR) continue;
      if (this.world.getBlock(x, surface + 2, z) !== BlockId.AIR) continue;
      return { x: x + 0.5, y: surface + 1.02, z: z + 0.5, homeY: surface + 1.02 };
    }

    if (this.world.getBlock(spawnerX, spawnerY + 1, spawnerZ) === BlockId.AIR && this.world.getBlock(spawnerX, spawnerY + 2, spawnerZ) === BlockId.AIR) {
      return { x: spawnerX + 0.5, y: spawnerY + 1.02, z: spawnerZ + 0.5, homeY: spawnerY + 1.02 };
    }
    return null;
  }

  spawnSkeletonFromSpawner(spawnerX, spawnerY, spawnerZ, spawnerKey) {
    const spawnPos = this.findSkeletonSpawnerPosition(spawnerX, spawnerY, spawnerZ);
    if (!spawnPos) return null;

    const { root, rig } = createMobModel(SKELETON_DEF, true, false);
    const weaponId = hash2D(spawnerX * 31 + spawnerY, spawnerZ * 17 + this.nextId, this.world.seed + 9123) > 0.5 ? BlockId.BOW : BlockId.STONE_SWORD;
    const id = this.nextId++;
    root.position.set(spawnPos.x, spawnPos.y, spawnPos.z);

    const entity = {
      id,
      sourceType: "spawner",
      sourceKey: spawnerKey,
      biome: this.world.getBiomeAt(spawnerX, spawnerZ),
      kind: "mob",
      key: SKELETON_DEF.key,
      name: SKELETON_DEF.name,
      hostile: true,
      flying: false,
      intelligent: false,
      speed: SKELETON_DEF.speed,
      mesh: root,
      rig,
      vx: 0,
      vz: 0,
      wanderTimer: 0.5 + hash2D(id, spawnerX, 8119) * 1.8,
      attackTimer: 0,
      homeY: spawnPos.homeY,
      homeX: spawnerX + 0.5,
      homeZ: spawnerZ + 0.5,
      patrolRadius: 6.5,
      animPhase: hash2D(id, spawnerZ, 9231) * Math.PI * 2,
      groupId: spawnerKey,
      maxHealth: SKELETON_DEF.health,
      health: SKELETON_DEF.health,
      dropItem: SKELETON_DEF.drop,
      damageFlash: 0,
      ranged: weaponId === BlockId.BOW,
      shootCooldown: 1.1 + hash2D(spawnerX, spawnerZ, 6311) * 0.8,
      modelYawOffset: getModelYawOffset(SKELETON_DEF.key, rig?.type, false),
    };

    createHealthBarSprite(entity);
    createDamageHalo(entity);
    this.attachHeldItem(entity, weaponId, 1);

    this.entities.set(id, entity);
    this.attachEntityMesh(entity);
    return id;
  }

  /**
   * Creates and registers a single natural (passive) or hostile mob spawned
   * for a specific chunk. The position within the chunk is determined
   * deterministically from the chunk coordinates. Natural mobs have no health
   * bar; hostile mobs created this way (rarely used) do.
   * @param {Object} chunk - Chunk entry from `World.loaded`.
   * @param {number} biome - Biome ID at the spawn location.
   * @param {Object} def - Mob definition (from `NATURAL_BY_BIOME` or `HOSTILE_BY_BIOME`).
   * @param {boolean} hostile - Whether this mob is hostile.
   * @returns {number} The new entity's ID.
   */
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
      provoked: false,
      shootCooldown: 0,
      modelYawOffset: getModelYawOffset(def.key, rig?.type, false),
    };

    if (hostile) {
      createHealthBarSprite(entity);
      createDamageHalo(entity);
    }

    this.entities.set(id, entity);
    this.attachEntityMesh(entity);
    return id;
  }

  /**
   * Creates and registers a quest-giver as a regular wandering mob. It keeps
   * a dedicated `questgiver` flag so interaction code can still identify it,
   * but it participates in normal movement, can be attacked, and can die.
   * @param {Object} chunk - Chunk entry from `World.loaded`.
   * @param {number} biome - Biome ID at the spawn location (shown in the NPC name).
   * @returns {number} The new entity's ID.
   */
  spawnQuestGiver(chunk, biome) {
    const x = chunk.cx * CHUNK_SIZE + 4 + Math.floor(hash2D(chunk.cx, chunk.cz, 1201) * 8);
    const z = chunk.cz * CHUNK_SIZE + 4 + Math.floor(hash2D(chunk.cx, chunk.cz, 1202) * 8);
    const surface = findTopSolidY(this.world, x, z);
    const { root, rig } = createMobModel({ color: 0x3c6fa1 }, false, true);

    const id = this.nextId++;
    root.position.set(x + 0.5, surface + 1.02, z + 0.5);

    const entity = {
      id,
      sourceType: "chunk",
      sourceKey: chunk.key,
      biome,
      kind: "mob",
      questgiver: true,
      key: "questgiver",
      name: `Quest Giver (${BIOME_NAME[biome]})`,
      hostile: false,
      flying: false,
      intelligent: false,
      speed: 1.05,
      mesh: root,
      rig,
      vx: 0,
      vz: 0,
      wanderTimer: 0.6 + hash2D(id, x, 8111) * 2.0,
      attackTimer: 0,
      homeY: surface + 1.02,
      homeX: x,
      homeZ: z,
      patrolRadius: 7,
      animPhase: 0,
      groupId: null,
      maxHealth: 34,
      health: 34,
      dropItem: null,
      damageFlash: 0,
      provoked: false,
      shootCooldown: 0,
      modelYawOffset: getModelYawOffset("questgiver", rig?.type, true),
    };

    this.entities.set(id, entity);
    this.attachEntityMesh(entity);
    return id;
  }

  /**
   * Removes an entity from the scene, disposes its geometry and materials, and
   * deletes it from `this.entities`.
   * @param {number} id - Entity ID to remove.
   */
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

  /**
   * Walks up the Three.js scene graph from `obj` to find the nearest ancestor
   * that carries a `userData.entityId` tag, then looks up the corresponding
   * entity. Used after a raycaster intersection to convert a sub-mesh hit into
   * the owning entity.
   * @param {THREE.Object3D} obj - The directly intersected object.
   * @returns {Object|null} The entity, or `null` if no entity could be found.
   */
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

  /**
   * Attempts to damage a hostile entity along a ray (left-click attack).
   * First tries a standard Three.js raycaster intersection against all
   * alive hostile meshes. If no raycast hit is found, falls back to a cone
   * proximity test (~23°) so that attacks against small or animated enemies
   * still connect reliably. Returns a result object if damage was dealt, or
   * `null` if nothing was hit.
   * @param {THREE.Vector3} origin - Ray origin (typically the camera position).
   * @param {THREE.Vector3} direction - Unit-length ray direction.
   * @param {number} maxDistance - Maximum attack range in world units.
   * @param {number} damage - Amount of health to subtract on hit.
   * @returns {{killed: boolean, name: string, key: string, dropItem?: number}|null}
   *   Hit result including whether the entity was killed, or `null` if nothing was hit.
   */
  attackFromRay(origin, direction, maxDistance, damage) {
    let best = null;
    let bestDist = maxDistance;
    const min = new THREE.Vector3();
    const max = new THREE.Vector3();

    for (const e of this.entities.values()) {
      if (e.kind !== "mob") continue;
      if (e.health <= 0) continue;
      const hitbox = getEntityHitbox(e);
      min.set(e.mesh.position.x - hitbox.halfX, e.mesh.position.y + hitbox.centerY - hitbox.halfY, e.mesh.position.z - hitbox.halfZ);
      max.set(e.mesh.position.x + hitbox.halfX, e.mesh.position.y + hitbox.centerY + hitbox.halfY, e.mesh.position.z + hitbox.halfZ);
      const hitDist = intersectRayAabb(origin, direction, min, max);
      if (hitDist === null || hitDist > maxDistance) continue;
      if (hitDist < bestDist) {
        bestDist = hitDist;
        best = e;
      }
    }

    if (!best) return null;
    return this.damageEntity(best, damage);
  }

  /**
   * Finds the nearest hostile entity within `maxDistance` that lies within
   * `maxAngle` radians of `direction` and deals `damage` to it. Used for
   * melee attacks where the player swings in a cone in front of them.
   * @param {THREE.Vector3} origin - Attack origin (typically the camera position).
   * @param {THREE.Vector3} direction - Normalised look direction.
   * @param {number} maxDistance - Maximum reach in world units.
   * @param {number} maxAngle - Maximum angular deviation in radians.
   * @param {number} damage - Damage to deal.
   * @returns {{killed: boolean, name: string, key: string}|null} Hit result, or `null` if nothing in range.
   */
  attackNearestInFront(origin, direction, maxDistance, maxAngle, damage) {
    return this.attackFromRay(origin, direction, maxDistance, damage);
  }

  hitEntityOnSegment(from, to, excludeEntityId = null) {
    const direction = new THREE.Vector3().subVectors(to, from);
    const segmentLength = direction.length();
    if (segmentLength < 1e-6) return null;
    direction.divideScalar(segmentLength);

    const min = new THREE.Vector3();
    const max = new THREE.Vector3();
    let best = null;
    let bestDist = segmentLength;

    for (const e of this.entities.values()) {
      if (e.kind !== "mob" || e.health <= 0) continue;
      if (excludeEntityId !== null && e.id === excludeEntityId) continue;
      const hitbox = getEntityHitbox(e);
      min.set(e.mesh.position.x - hitbox.halfX, e.mesh.position.y + hitbox.centerY - hitbox.halfY, e.mesh.position.z - hitbox.halfZ);
      max.set(e.mesh.position.x + hitbox.halfX, e.mesh.position.y + hitbox.centerY + hitbox.halfY, e.mesh.position.z + hitbox.halfZ);
      const hitDist = intersectRayAabb(from, direction, min, max);
      if (hitDist === null || hitDist > segmentLength) continue;
      if (hitDist < bestDist) {
        bestDist = hitDist;
        best = e;
      }
    }

    return best;
  }

  /**
   * Applies `damage` to a hostile entity, updates its health bar and damage
   * flash timer, and removes it if health reaches zero. On kill, calls
   * `onEnemyKilled` with the entity's name, key, and drop item.
   * @param {Object} entity - The entity to damage; must be hostile and of kind `"mob"`.
   * @param {number} damage - Amount of health to subtract.
   * @returns {{killed: boolean, name: string, key: string, dropItem?: number}|null}
   *   Result object, or `null` if the entity is not a valid target.
   */
  damageEntity(entity, damage) {
    if (!entity || entity.kind !== "mob") return null;
    if (!entity.hostile && !entity.provoked) {
      entity.provoked = true;
      if (!entity.healthSprite) createHealthBarSprite(entity);
      if (!entity.damageHalo) createDamageHalo(entity);
    }
    entity.health = Math.max(0, entity.health - damage);
    entity.damageFlash = 0.25;
    if (entity.healthSprite) updateHealthBarSprite(entity);

    if (entity.health <= 0) {
      const payload = { name: entity.name, key: entity.key, dropItem: entity.dropItem };
      const deadQuestGiver = !!entity.questgiver;
      this.removeEntity(entity.id);
      if (entity.hostile) this.onEnemyKilled(payload);
      if (deadQuestGiver) this.onQuestGiverKilled(entity);
      return { killed: true, ...payload };
    }

    return { killed: false, name: entity.name, key: entity.key };
  }

  /**
   * Scans all hostile site cells within `HOSTILE_SPAWN_RANGE` of the player
   * and calls `spawnHostileSite` for any site that is close enough and has not
   * yet been spawned.
   * @param {THREE.Vector3} playerPos - Current player position.
   */
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

  /**
   * Called once per second to synchronise the entity population with the
   * current world state. Spawns natural mobs for any newly loaded chunk,
   * spawns hostile sites in range, removes entities that have wandered too far
   * from the player, and cleans up stale spawn-tracking entries.
   * @param {THREE.Vector3} playerPos - Current player position.
   */
  syncSpawns(playerPos) {
    for (const chunk of this.world.loaded.values()) {
      this.spawnForChunk(chunk);
    }

    this.spawnHostilesNear(playerPos);
    this.syncSkeletonSpawnerSpawns(playerPos);

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

  syncSkeletonSpawnerSpawns(playerPos) {
    const activeSpawnerKeys = new Set();
    const maxDistSq = HOSTILE_SPAWN_RANGE * HOSTILE_SPAWN_RANGE;

    for (const [chunkKey, mods] of this.world.modified.entries()) {
      const chunk = this.world.loaded.get(chunkKey);
      if (!chunk) continue;

      for (const [idx, id] of mods.entries()) {
        if (id !== BlockId.SKELETON_SPAWNER) continue;

        const lx = idx % CHUNK_SIZE;
        const zStride = Math.floor(idx / CHUNK_SIZE);
        const lz = zStride % CHUNK_SIZE;
        const y = Math.floor(idx / (CHUNK_SIZE * CHUNK_SIZE));
        const x = chunk.cx * CHUNK_SIZE + lx;
        const z = chunk.cz * CHUNK_SIZE + lz;
        const dx = x + 0.5 - playerPos.x;
        const dz = z + 0.5 - playerPos.z;
        if (dx * dx + dz * dz > maxDistSq) continue;

        const spawnerKey = `${x},${y},${z}`;
        activeSpawnerKeys.add(spawnerKey);

        const existing = this.skeletonSpawnerSpawns.get(spawnerKey) ?? [];
        const alive = existing.filter((entityId) => this.entities.has(entityId));
        if (alive.length > 0) {
          this.skeletonSpawnerSpawns.set(spawnerKey, alive);
          continue;
        }

        const spawnedId = this.spawnSkeletonFromSpawner(x, y, z, spawnerKey);
        if (spawnedId) this.skeletonSpawnerSpawns.set(spawnerKey, [spawnedId]);
      }
    }

    for (const [spawnerKey, ids] of this.skeletonSpawnerSpawns.entries()) {
      if (activeSpawnerKeys.has(spawnerKey)) continue;
      for (const id of ids) this.removeEntity(id);
      this.skeletonSpawnerSpawns.delete(spawnerKey);
    }
  }

  /**
   * Advances the rig animation for one entity by one frame. Leg and arm
   * bones oscillate sinusoidally at a frequency and amplitude proportional to
   * the entity's current ground speed. Wings flap at a fixed high frequency.
   * Tail and head bob at slower frequencies to add life to idle entities.
   * @param {Object} e - Entity object with a populated `rig`.
   * @param {number} dt - Frame delta time in seconds.
   * @param {number} speed2D - Current horizontal speed of the entity in blocks per second.
   * @param {number} timeSec - Absolute time in seconds since game start.
   */
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

  /**
   * Updates the movement, rotation, surface tracking, damage-flash decay, and
   * animation of a single entity for one frame. Quest givers bob and spin in
   * place. Regular mobs follow one of three states: aggro (charge the player),
   * flee (passive mobs back away), or wander (change direction on a timer).
   * Hostile mobs that drift beyond their patrol radius are steered back toward
   * home. Flying mobs oscillate vertically rather than tracking the surface.
   * @param {Object} e - Entity to update.
   * @param {THREE.Vector3} playerPos - Current player position.
   * @param {number} dt - Frame delta time in seconds.
   * @param {number} timeSec - Absolute time in seconds since game start.
   * @param {boolean} agroEnabled - Whether hostile mobs should chase the player.
   */
  updateEntity(e, playerPos, dt, timeSec, agroEnabled, projectileSystem = null, playerVelocity = null) {
    const p = e.mesh.position;
    const toPlayerX = playerPos.x - p.x;
    const toPlayerZ = playerPos.z - p.z;
    const dist = Math.hypot(toPlayerX, toPlayerZ);

    if (e.hostile && e.ranged && agroEnabled && dist < 23) {
      e.shootCooldown = Math.max(0, e.shootCooldown - dt);
      const preferredMin = 9.5;
      const preferredMax = 15.5;
      if (dist > preferredMax) {
        const inv = dist > 0.001 ? 1 / dist : 0;
        e.vx = toPlayerX * inv * e.speed * 0.95;
        e.vz = toPlayerZ * inv * e.speed * 0.95;
      } else if (dist < preferredMin) {
        const inv = dist > 0.001 ? 1 / dist : 0;
        e.vx = -toPlayerX * inv * e.speed * 0.8;
        e.vz = -toPlayerZ * inv * e.speed * 0.8;
      } else {
        e.vx *= Math.max(0, 1 - dt * 5);
        e.vz *= Math.max(0, 1 - dt * 5);
      }

      const leadTarget = new THREE.Vector3(playerPos.x, playerPos.y + 0.9, playerPos.z);
      if (playerVelocity) {
        const travelEstimate = dist / SKELETON_ARROW_SPEED;
        leadTarget.x += playerVelocity.x * travelEstimate * 0.55;
        leadTarget.z += playerVelocity.z * travelEstimate * 0.55;
      }
      const bowOrigin = new THREE.Vector3(p.x, p.y + 1.12, p.z);
      const launchVelocity = solveBallisticVelocity(bowOrigin, leadTarget, SKELETON_ARROW_SPEED);
      if (projectileSystem && launchVelocity && e.shootCooldown <= 0 && hasLineOfSight(this.world, bowOrigin, leadTarget)) {
        projectileSystem.fireSkeletonArrow(bowOrigin, launchVelocity, e.id);
        e.shootCooldown = 1.15 + hash2D(e.id, (timeSec * 7) | 0, 7071) * 0.35;
      }
      p.y = e.homeY;
    } else if (e.hostile && agroEnabled && dist < 8.8) {
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

      if (!e.hostile && e.provoked && dist < 7.2) {
        const inv = dist > 0.001 ? 1 / dist : 0;
        e.vx = -toPlayerX * inv * e.speed * 1.15;
        e.vz = -toPlayerZ * inv * e.speed * 1.15;
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
    if (speed2D > 0.001) e.mesh.rotation.y = -Math.atan2(e.vz, e.vx) + (e.modelYawOffset ?? 0);
    this.animateEntity(e, dt, speed2D, timeSec);
  }

  /**
   * Main per-frame update: throttles spawn synchronisation to once per second,
   * then updates every active entity's AI and animation.
   * @param {THREE.Vector3} playerPos - Current player world position.
   * @param {number} dt - Frame delta time in seconds.
   * @param {number} timeSec - Absolute time in seconds since game start.
   * @param {boolean} [agroEnabled=true] - Whether hostile mobs should aggro the player.
   */
  update(playerPos, dt, timeSec, agroEnabled = true, projectileSystem = null, playerVelocity = null) {
    this.spawnTick += dt;
    if (this.spawnTick >= 1.0) {
      this.syncSpawns(playerPos);
      this.spawnTick = 0;
    }

    for (const e of this.entities.values()) {
      this.updateEntity(e, playerPos, dt, timeSec, agroEnabled, projectileSystem, playerVelocity);
    }
  }

  /**
   * Counts the number of hostile mobs within a 3-D spherical radius of the
   * player's position. Used by `main.js` to determine how much contact damage
   * the player should receive each frame.
   * @param {THREE.Vector3} playerPos - Player world position.
   * @param {number} radius - Sphere radius in world units.
   * @returns {number} Number of hostile mobs within the radius.
   */
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

  /**
   * Returns the nearest quest-giver entity within `maxDistance` of the player,
   * or `null` if none is close enough. Used by `main.js` to show the "Press F
   * to talk" hint and to dispatch the talk action when F is pressed.
   * @param {THREE.Vector3} playerPos - Player world position.
   * @param {number} [maxDistance=4] - Maximum interaction distance in world units.
   * @returns {Object|null} The nearest quest-giver entity, or `null`.
   */
  getNearestQuestGiver(playerPos, maxDistance = 4) {
    let best = null;
    let bestD2 = maxDistance * maxDistance;
    for (const e of this.entities.values()) {
      if (!e.questgiver) continue;
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
