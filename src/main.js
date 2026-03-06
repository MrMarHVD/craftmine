import * as THREE from "three";
import { BlockId, getBreakDuration, isBreakable, isSolid } from "./blocks.js";
import { CHUNK_SIZE, REACH_DISTANCE } from "./constants.js";
import { MobSystem } from "./mobs.js";
import { Player } from "./player.js";
import { QuestSystem } from "./quests.js";
import { voxelRaycast } from "./raycast.js";
import { createAtlas } from "./textureAtlas.js";
import { UI } from "./ui.js";
import { World } from "./world.js";

const MAX_HEALTH = 100;
const MELEE_REACH = 6;
const MELEE_CONE_ANGLE = 0.9;
const BASE_ATTACK_DAMAGE = 12;
const ATTACK_COOLDOWN = 0.2;
const BREAK_STAGES = 8;
const PLACE_BLOCK_BLACKLIST = new Set([
  BlockId.AIR,
  BlockId.BEDROCK,
  BlockId.APPLE,
  BlockId.WEAPON_BANDIT_BLADE,
  BlockId.WEAPON_RAIDER_SABER,
  BlockId.WEAPON_SCORP_BOW,
  BlockId.WEAPON_JAGUAR_CLAWS,
  BlockId.WEAPON_WRAITH_HAMMER,
  BlockId.WEAPON_YETI_AXE,
]);

const canvas = document.getElementById("app");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x89cfff);
scene.fog = new THREE.Fog(0x89cfff, CHUNK_SIZE * 4.2, CHUNK_SIZE * 7.5);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 600);
const atlas = createAtlas();

const matOpaque = new THREE.MeshLambertMaterial({ map: atlas.texture });
const matTransparent = new THREE.MeshLambertMaterial({
  map: atlas.texture,
  transparent: true,
  depthWrite: false,
  side: THREE.DoubleSide,
  alphaTest: 0.15,
});

scene.add(new THREE.AmbientLight(0xffffff, 0.7));
const sun = new THREE.DirectionalLight(0xffffff, 0.8);
sun.position.set(120, 200, 50);
scene.add(sun);

const worldSeed = 20260304;
const world = new World(scene, atlas, worldSeed);
world.setupMaterials(matOpaque, matTransparent);

const player = new Player(camera, canvas);
const inventory = Array.from({ length: 30 }, () => ({ id: BlockId.AIR, count: 0 }));

const ui = new UI(inventory);
const quests = new QuestSystem(ui, worldSeed + 191);
const mobs = new MobSystem(scene, world, {
  onEnemyKilled: (payload) => {
    if (!payload?.dropItem) return;
    ui.addItem(payload.dropItem, 1);
  },
});

const debugSettings = {
  walkSpeed: 5.2,
  flySpeed: 11.5,
  healthEnabled: true,
  agroEnabled: true,
};

let health = MAX_HEALTH;
let incomingDamageCooldown = 0;
let attackCooldown = 0;

player.setMovementSpeeds(debugSettings.walkSpeed, debugSettings.flySpeed);
ui.setupDebugPane(debugSettings, (patch) => {
  if (patch.walkSpeed !== undefined) debugSettings.walkSpeed = patch.walkSpeed;
  if (patch.flySpeed !== undefined) debugSettings.flySpeed = Math.min(300, patch.flySpeed);
  if (patch.healthEnabled !== undefined) {
    debugSettings.healthEnabled = patch.healthEnabled;
    if (!debugSettings.healthEnabled) health = MAX_HEALTH;
  }
  if (patch.agroEnabled !== undefined) debugSettings.agroEnabled = patch.agroEnabled;

  player.setMovementSpeeds(debugSettings.walkSpeed, debugSettings.flySpeed);
});

ui.setHotbarSelection(0);

const dir = new THREE.Vector3();
const targetBox = new THREE.LineSegments(
  new THREE.EdgesGeometry(new THREE.BoxGeometry(1.01, 1.01, 1.01)),
  new THREE.LineBasicMaterial({ color: 0xffff66 })
);
targetBox.visible = false;
scene.add(targetBox);

function createCrackTextures() {
  const segments = [
    [32, 0, 32, 64],
    [0, 32, 64, 32],
    [8, 8, 24, 30],
    [56, 8, 40, 30],
    [8, 56, 24, 34],
    [56, 56, 40, 34],
    [16, 0, 30, 18],
    [48, 0, 34, 18],
    [0, 16, 18, 30],
    [64, 16, 46, 30],
    [0, 48, 18, 34],
    [64, 48, 46, 34],
    [16, 64, 30, 46],
    [48, 64, 34, 46],
    [24, 24, 8, 40],
    [40, 24, 56, 40],
    [24, 40, 8, 24],
    [40, 40, 56, 24],
  ];

  const textures = [];
  for (let stage = 0; stage < BREAK_STAGES; stage++) {
    const c = document.createElement("canvas");
    c.width = 64;
    c.height = 64;
    const ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 64, 64);
    const lines = Math.floor(((stage + 1) / BREAK_STAGES) * segments.length);
    ctx.strokeStyle = `rgba(30, 30, 30, ${(0.22 + stage * 0.08).toFixed(2)})`;
    ctx.lineWidth = 3;
    for (let i = 0; i < lines; i++) {
      const s = segments[i];
      ctx.beginPath();
      ctx.moveTo(s[0], s[1]);
      ctx.lineTo(s[2], s[3]);
      ctx.stroke();
    }

    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.NearestFilter;
    tex.wrapS = THREE.ClampToEdgeWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;
    textures.push(tex);
  }
  return textures;
}

const crackTextures = createCrackTextures();
const crackOverlayMat = new THREE.MeshBasicMaterial({
  map: crackTextures[0],
  transparent: true,
  opacity: 1,
  depthWrite: false,
  polygonOffset: true,
  polygonOffsetFactor: -2,
  polygonOffsetUnits: -2,
});
const crackOverlay = new THREE.Mesh(new THREE.BoxGeometry(1.014, 1.014, 1.014), crackOverlayMat);
crackOverlay.visible = false;
scene.add(crackOverlay);

let selectedIndex = 0;
let currentTarget = null;
let nearestQuestGiver = null;
let spawnPoint = new THREE.Vector3(0, 40, 0);
let leftMouseDown = false;
let suppressBreakUntilMouseUp = false;
let breakState = null;

function isMenuOpen() {
  return ui.isInventoryOpen() || ui.isDialogueOpen() || ui.isDebugOpen();
}

function refreshOverlayVisibility() {
  const locked = document.pointerLockElement === canvas;
  ui.setOverlayVisible(!locked && !isMenuOpen());
}

function getGroundY(x, z) {
  for (let y = 127; y >= 1; y--) {
    if (isSolid(world.getBlock(x, y, z)) && !isSolid(world.getBlock(x, y + 1, z))) {
      return y + 1;
    }
  }
  return 45;
}

player.position.set(0.5, getGroundY(0, 0) + 2, 0.5);
spawnPoint.copy(player.position);
player.syncCamera();

function resize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", resize);
window.addEventListener("contextmenu", (e) => e.preventDefault());

canvas.addEventListener("click", () => {
  if (isMenuOpen()) return;
  if (document.pointerLockElement !== canvas) canvas.requestPointerLock();
});

document.addEventListener("pointerlockchange", () => {
  if (document.pointerLockElement !== canvas) {
    leftMouseDown = false;
    suppressBreakUntilMouseUp = false;
    clearBreakState();
  }
  refreshOverlayVisibility();
});

window.addEventListener("wheel", (e) => {
  if (document.pointerLockElement !== canvas || isMenuOpen()) return;
  selectedIndex += e.deltaY > 0 ? 1 : -1;
  if (selectedIndex < 0) selectedIndex = ui.hotbarSize - 1;
  if (selectedIndex >= ui.hotbarSize) selectedIndex = 0;
  ui.setHotbarSelection(selectedIndex);
});

window.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && ui.isDialogueOpen()) {
    quests.closeDialogue();
    refreshOverlayVisibility();
    return;
  }

  if (e.code === "KeyU") {
    const next = !ui.isDebugOpen();
    ui.setDebugVisible(next);
    if (next) document.exitPointerLock();
    else if (!ui.isInventoryOpen() && !ui.isDialogueOpen()) canvas.requestPointerLock();
    refreshOverlayVisibility();
    return;
  }

  if (e.code === "KeyE") {
    if (ui.isDialogueOpen()) return;

    if (ui.isInventoryOpen()) {
      ui.setInventoryVisible(false);
      if (!ui.isDebugOpen()) canvas.requestPointerLock();
    } else {
      ui.setInventoryVisible(true);
      document.exitPointerLock();
    }
    refreshOverlayVisibility();
    return;
  }

  if (e.code === "KeyR") {
    if (!debugSettings.healthEnabled) return;
    if (health >= MAX_HEALTH) return;
    if (ui.consumeItem(BlockId.APPLE, 1)) {
      health = Math.min(MAX_HEALTH, health + 25);
    }
    return;
  }

  if (e.code === "KeyF") {
    if (ui.isDialogueOpen()) return;
    if (nearestQuestGiver) {
      document.exitPointerLock();
      quests.onTalkToQuestGiver(nearestQuestGiver);
      refreshOverlayVisibility();
    }
    return;
  }

  if (/Digit[1-9]/.test(e.code)) {
    const i = Number(e.code.slice(-1)) - 1;
    if (i >= 0 && i < ui.hotbarSize) {
      selectedIndex = i;
      ui.setHotbarSelection(selectedIndex);
    }
  }
});

function canPlaceAt(x, y, z) {
  const blockMinX = x;
  const blockMaxX = x + 1;
  const blockMinY = y;
  const blockMaxY = y + 1;
  const blockMinZ = z;
  const blockMaxZ = z + 1;
  const aabb = player.getAABB();

  return !(
    aabb.maxX > blockMinX &&
    aabb.minX < blockMaxX &&
    aabb.maxY > blockMinY &&
    aabb.minY < blockMaxY &&
    aabb.maxZ > blockMinZ &&
    aabb.minZ < blockMaxZ
  );
}

function clearBreakState() {
  breakState = null;
  crackOverlay.visible = false;
}

function startOrContinueBreakTarget(target) {
  if (!target || !isBreakable(target.id)) {
    clearBreakState();
    return;
  }
  if (
    breakState &&
    breakState.x === target.x &&
    breakState.y === target.y &&
    breakState.z === target.z &&
    breakState.id === target.id
  ) {
    return;
  }
  breakState = {
    x: target.x,
    y: target.y,
    z: target.z,
    id: target.id,
    progress: 0,
    duration: getBreakDuration(target.id),
  };
  crackOverlay.position.set(target.x + 0.5, target.y + 0.5, target.z + 0.5);
  crackOverlayMat.map = crackTextures[0];
  crackOverlayMat.needsUpdate = true;
  crackOverlay.visible = true;
}

function updateBreakMining(dt) {
  if (suppressBreakUntilMouseUp || !leftMouseDown) {
    clearBreakState();
    return;
  }
  if (document.pointerLockElement !== canvas || isMenuOpen()) {
    clearBreakState();
    return;
  }
  if (!currentTarget || !isBreakable(currentTarget.id)) {
    clearBreakState();
    return;
  }

  startOrContinueBreakTarget(currentTarget);
  if (!breakState) return;

  breakState.progress += dt / Math.max(0.05, breakState.duration);
  const stage = Math.min(BREAK_STAGES - 1, Math.floor(breakState.progress * BREAK_STAGES));
  crackOverlay.position.set(breakState.x + 0.5, breakState.y + 0.5, breakState.z + 0.5);
  crackOverlayMat.map = crackTextures[stage];
  crackOverlayMat.needsUpdate = true;
  crackOverlay.visible = true;

  if (breakState.progress >= 1) {
    world.setBlock(breakState.x, breakState.y, breakState.z, BlockId.AIR);
    ui.addItem(breakState.id, 1);
    breakState = null;
    crackOverlay.visible = false;
  }
}

function getAttackDamage(itemId) {
  switch (itemId) {
    case BlockId.WEAPON_BANDIT_BLADE:
      return 24;
    case BlockId.WEAPON_RAIDER_SABER:
      return 27;
    case BlockId.WEAPON_SCORP_BOW:
      return 22;
    case BlockId.WEAPON_JAGUAR_CLAWS:
      return 20;
    case BlockId.WEAPON_WRAITH_HAMMER:
      return 32;
    case BlockId.WEAPON_YETI_AXE:
      return 36;
    default:
      return BASE_ATTACK_DAMAGE;
  }
}

window.addEventListener("mousedown", (e) => {
  if (document.pointerLockElement !== canvas || isMenuOpen()) return;

  if (e.button === 0) {
    leftMouseDown = true;

    if (attackCooldown <= 0) {
      camera.getWorldDirection(dir);
      const attack = mobs.attackNearestInFront(
        camera.position,
        dir,
        MELEE_REACH,
        MELEE_CONE_ANGLE,
        getAttackDamage(ui.getSelectedBlock())
      );
      attackCooldown = ATTACK_COOLDOWN;
      if (attack) {
        suppressBreakUntilMouseUp = true;
        clearBreakState();
        return;
      }
    }

    suppressBreakUntilMouseUp = false;
    startOrContinueBreakTarget(currentTarget);
  }

  if (e.button === 2) {
    if (!currentTarget) return;
    const placeX = currentTarget.previous.x;
    const placeY = currentTarget.previous.y;
    const placeZ = currentTarget.previous.z;

    if (world.getBlock(placeX, placeY, placeZ) !== BlockId.AIR) return;
    if (!canPlaceAt(placeX, placeY, placeZ)) return;

    const placeId = ui.getSelectedBlock();
    if (PLACE_BLOCK_BLACKLIST.has(placeId)) return;
    if (!ui.consumeSelectedBlock()) return;
    world.setBlock(placeX, placeY, placeZ, placeId);
  }
});

window.addEventListener("mouseup", (e) => {
  if (e.button !== 0) return;
  leftMouseDown = false;
  suppressBreakUntilMouseUp = false;
  clearBreakState();
});

let prevTime = performance.now();
let fpsAccum = 0;
let fpsFrames = 0;
let chunkTick = 0;

function tick(now) {
  const dt = Math.min(0.05, (now - prevTime) / 1000);
  prevTime = now;
  const timeSec = now / 1000;
  attackCooldown = Math.max(0, attackCooldown - dt);

  if (!isMenuOpen()) {
    player.update(world, dt);
  }

  chunkTick += dt;
  if (chunkTick >= 0.14) {
    world.loadChunksAround(player.position.x, player.position.z);
    chunkTick = 0;
  }

  world.rebuildOneChunk();
  world.rebuildOneChunk();
  mobs.update(player.position, dt, timeSec, debugSettings.agroEnabled);

  if (debugSettings.healthEnabled) {
    incomingDamageCooldown -= dt;
    if (debugSettings.agroEnabled && incomingDamageCooldown <= 0) {
      const attackers = mobs.countHostilesInRange(player.position, 1.8);
      if (attackers > 0) {
        health = Math.max(0, health - Math.min(18, attackers * 6));
        incomingDamageCooldown = 0.45;
      }
    }

    if (health <= 0) {
      health = MAX_HEALTH;
      player.position.copy(spawnPoint);
      player.velocity.set(0, 0, 0);
      player.syncCamera();
    }
  } else {
    health = MAX_HEALTH;
  }

  nearestQuestGiver = mobs.getNearestQuestGiver(player.position, 4.2);

  camera.getWorldDirection(dir);
  currentTarget = voxelRaycast(world, camera.position, dir, REACH_DISTANCE);
  updateBreakMining(dt);
  if (currentTarget && !isMenuOpen()) {
    targetBox.visible = true;
    targetBox.position.set(currentTarget.x + 0.5, currentTarget.y + 0.5, currentTarget.z + 0.5);
  } else {
    targetBox.visible = false;
  }

  let hint = quests.getActiveQuestText();
  if (nearestQuestGiver && !ui.isInventoryOpen()) {
    const talkHint = `Press F to talk to ${nearestQuestGiver.name}`;
    hint = hint ? `${hint} | ${talkHint}` : talkHint;
  }

  if (ui.getItemCount(BlockId.APPLE) > 0 && debugSettings.healthEnabled && health < MAX_HEALTH) {
    hint = hint ? `${hint} | Press R to eat Apple` : "Press R to eat Apple";
  }

  ui.setHint(hint);
  ui.updateHealth(health, MAX_HEALTH, debugSettings.healthEnabled);

  ui.updateMode(player.flyMode);
  ui.updateCoords(player.position);
  refreshOverlayVisibility();

  fpsAccum += dt;
  fpsFrames++;
  if (fpsAccum >= 0.25) {
    ui.updateFPS(fpsFrames / fpsAccum);
    fpsAccum = 0;
    fpsFrames = 0;
  }

  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}

world.loadChunksAround(player.position.x, player.position.z);
refreshOverlayVisibility();
requestAnimationFrame(tick);
