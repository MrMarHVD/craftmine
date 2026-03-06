import * as THREE from "three";
import { BlockId, isSolid } from "./blocks.js";
import { CHUNK_SIZE, REACH_DISTANCE } from "./constants.js";
import { MobSystem } from "./mobs/MobSystem.js";
import { Player } from "./player/Player.js";
import { QuestSystem } from "./quests/QuestSystem.js";
import { voxelRaycast } from "./utils/raycast.js";
import { createAtlas } from "./rendering/textureAtlas.js";
import { TerrainMapRenderer } from "./ui/TerrainMapRenderer.js";
import { UI } from "./ui/UI.js";
import { World } from "./world.js";
import { createRenderer, createScene, createCamera, createMaterials, createTargetBox } from "./rendering/renderer.js";
import {
  MELEE_REACH,
  MELEE_CONE_ANGLE,
  ATTACK_COOLDOWN,
  PLACE_BLOCK_BLACKLIST,
  getAttackDamage,
  canPlaceAt,
} from "./game/combat.js";
import {
  createCrackTextures,
  createCrackOverlay,
  clearBreakState,
  startOrContinueBreakTarget,
  updateBreakMining,
} from "./game/blockInteraction.js";

const MAX_HEALTH = 100;

const canvas = document.getElementById("app");
const renderer = createRenderer(canvas);
const scene = createScene();
const camera = createCamera();
const atlas = createAtlas();

const { matOpaque, matTransparent } = createMaterials(atlas);

const worldSeed = 20260304;
const world = new World(scene, atlas, worldSeed);
world.setupMaterials(matOpaque, matTransparent);

const player = new Player(camera, canvas);
const inventory = Array.from({ length: 30 }, () => ({ id: BlockId.AIR, count: 0 }));

const ui = new UI(inventory);
const terrainMapCanvas = document.getElementById("terrain-map");
const terrainMap = new TerrainMapRenderer(terrainMapCanvas);
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
  mapWidthBlocks: 96,
  mapHeightBlocks: 96,
  healthEnabled: true,
  agroEnabled: true,
};

let health = MAX_HEALTH;
let incomingDamageCooldown = 0;
let attackCooldown = 0;

player.setMovementSpeeds(debugSettings.walkSpeed, debugSettings.flySpeed);
terrainMap.setBlockSpan(debugSettings.mapWidthBlocks, debugSettings.mapHeightBlocks);
ui.setupDebugPane(debugSettings, (patch) => {
  if (patch.walkSpeed !== undefined) debugSettings.walkSpeed = patch.walkSpeed;
  if (patch.flySpeed !== undefined) debugSettings.flySpeed = Math.min(300, patch.flySpeed);
  if (patch.mapWidthBlocks !== undefined) debugSettings.mapWidthBlocks = Math.max(24, Math.min(192, patch.mapWidthBlocks));
  if (patch.mapHeightBlocks !== undefined) debugSettings.mapHeightBlocks = Math.max(24, Math.min(192, patch.mapHeightBlocks));
  if (patch.healthEnabled !== undefined) {
    debugSettings.healthEnabled = patch.healthEnabled;
    if (!debugSettings.healthEnabled) health = MAX_HEALTH;
  }
  if (patch.agroEnabled !== undefined) debugSettings.agroEnabled = patch.agroEnabled;

  player.setMovementSpeeds(debugSettings.walkSpeed, debugSettings.flySpeed);
  terrainMap.setBlockSpan(debugSettings.mapWidthBlocks, debugSettings.mapHeightBlocks);
});

ui.setHotbarSelection(0);

const dir = new THREE.Vector3();
const targetBox = createTargetBox(scene);

const crackTextures = createCrackTextures();
const { crackOverlay, crackOverlayMat } = createCrackOverlay(scene, crackTextures);

const breakState = { breakState: null, leftMouseDown: false, suppressBreakUntilMouseUp: false };

let selectedIndex = 0;
let currentTarget = null;
let nearestQuestGiver = null;
let spawnPoint = new THREE.Vector3(0, 40, 0);

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
    breakState.leftMouseDown = false;
    breakState.suppressBreakUntilMouseUp = false;
    clearBreakState(breakState, crackOverlay);
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

window.addEventListener("mousedown", (e) => {
  if (document.pointerLockElement !== canvas || isMenuOpen()) return;

  if (e.button === 0) {
    breakState.leftMouseDown = true;

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
        breakState.suppressBreakUntilMouseUp = true;
        clearBreakState(breakState, crackOverlay);
        return;
      }
    }

    breakState.suppressBreakUntilMouseUp = false;
    startOrContinueBreakTarget(currentTarget, breakState, crackOverlay, crackOverlayMat, crackTextures);
  }

  if (e.button === 2) {
    if (!currentTarget) return;
    const placeX = currentTarget.previous.x;
    const placeY = currentTarget.previous.y;
    const placeZ = currentTarget.previous.z;

    if (world.getBlock(placeX, placeY, placeZ) !== BlockId.AIR) return;
    if (!canPlaceAt(player, placeX, placeY, placeZ)) return;

    const placeId = ui.getSelectedBlock();
    if (PLACE_BLOCK_BLACKLIST.has(placeId)) return;
    if (!ui.consumeSelectedBlock()) return;
    world.setBlock(placeX, placeY, placeZ, placeId);
  }
});

window.addEventListener("mouseup", (e) => {
  if (e.button !== 0) return;
  breakState.leftMouseDown = false;
  breakState.suppressBreakUntilMouseUp = false;
  clearBreakState(breakState, crackOverlay);
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
  updateBreakMining(dt, breakState, canvas, currentTarget, world, ui, crackOverlay, crackOverlayMat, crackTextures, isMenuOpen);
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

  terrainMap.render(world, player.position, timeSec);
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}

world.loadChunksAround(player.position.x, player.position.z);
refreshOverlayVisibility();
requestAnimationFrame(tick);
