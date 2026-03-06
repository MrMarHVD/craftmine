/**
 * @module main
 * @description Entry point and game loop for the browser-based voxel game.
 * This module wires all subsystems together: it constructs the Three.js
 * renderer, scene, and camera; instantiates the World, Player, UI,
 * QuestSystem, and MobSystem; registers all DOM event listeners for input
 * and window resize; and drives the `requestAnimationFrame`-based `tick` loop
 * that updates physics, chunk loading, mob AI, combat, and rendering each frame.
 *
 * No game logic lives here beyond the top-level coordination needed to connect
 * the subsystems — detailed behaviour is delegated to `game/combat.js` and
 * `game/blockInteraction.js`.
 */

import * as THREE from "three";
import { BlockId, isSolid } from "./blocks.js";
import { CHUNK_SIZE, DAY_NIGHT_CYCLE_SECONDS, REACH_DISTANCE } from "./constants.js";
import { MobSystem } from "./mobs/MobSystem.js";
import { Player } from "./player/Player.js";
import { QuestSystem } from "./quests/QuestSystem.js";
import { voxelRaycast } from "./utils/raycast.js";
import { createAtlas } from "./rendering/textureAtlas.js";
import { CloudSystem } from "./rendering/CloudSystem.js";
import bgmDefaultTrack from "./audio/bgm/bgm_default.mp3";
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

/** Maximum player health points. */
const MAX_HEALTH = 100;

const canvas = document.getElementById("app");
const renderer = createRenderer(canvas);
const { scene, sunLight, ambientLight, sunVisual } = createScene();
const camera = createCamera();
const atlas = createAtlas();

const { matOpaque, matTransparent } = createMaterials(atlas);

/** Fixed world seed used for deterministic terrain, castles, mobs, and quests. */
const worldSeed = 20260304;
const world = new World(scene, atlas, worldSeed);
world.setupMaterials(matOpaque, matTransparent);
const clouds = new CloudSystem(scene, worldSeed + 55123);
const bgmAudio = new Audio(bgmDefaultTrack);
bgmAudio.loop = true;
bgmAudio.preload = "auto";

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

/**
 * Runtime configuration object that mirrors the values shown in the debug pane.
 * Mutated by `ui.setupDebugPane`'s `onChange` callback when the player adjusts
 * sliders or toggles in the debug panel.
 * @type {{walkSpeed: number, flySpeed: number, mapWidthBlocks: number, mapHeightBlocks: number, bgmVolume: number, healthEnabled: boolean, agroEnabled: boolean}}
 */
const debugSettings = {
  walkSpeed: 5.2,
  flySpeed: 11.5,
  mapWidthBlocks: 96,
  mapHeightBlocks: 96,
  bgmVolume: 0.1,
  healthEnabled: true,
  agroEnabled: true,
};

/** Current player health in [0, MAX_HEALTH]. */
let health = MAX_HEALTH;

/** Remaining cooldown in seconds before the player can take contact damage again. */
let incomingDamageCooldown = 0;

/** Remaining cooldown in seconds before the player can attack again. */
let attackCooldown = 0;

function setBgmVolume(v) {
  bgmAudio.volume = Math.max(0, Math.min(1, v));
}

function tryStartBgm() {
  if (!bgmAudio.paused) return;
  bgmAudio.play().catch(() => {});
}

player.setMovementSpeeds(debugSettings.walkSpeed, debugSettings.flySpeed);
terrainMap.setBlockSpan(debugSettings.mapWidthBlocks, debugSettings.mapHeightBlocks);
setBgmVolume(debugSettings.bgmVolume);
ui.setupDebugPane(debugSettings, (patch) => {
  if (patch.walkSpeed !== undefined) debugSettings.walkSpeed = patch.walkSpeed;
  if (patch.flySpeed !== undefined) debugSettings.flySpeed = Math.min(300, patch.flySpeed);
  if (patch.mapWidthBlocks !== undefined) debugSettings.mapWidthBlocks = Math.max(24, Math.min(192, patch.mapWidthBlocks));
  if (patch.mapHeightBlocks !== undefined) debugSettings.mapHeightBlocks = Math.max(24, Math.min(192, patch.mapHeightBlocks));
  if (patch.bgmVolume !== undefined) debugSettings.bgmVolume = Math.max(0, Math.min(1, patch.bgmVolume));
  if (patch.healthEnabled !== undefined) {
    debugSettings.healthEnabled = patch.healthEnabled;
    if (!debugSettings.healthEnabled) health = MAX_HEALTH;
  }
  if (patch.agroEnabled !== undefined) debugSettings.agroEnabled = patch.agroEnabled;

  player.setMovementSpeeds(debugSettings.walkSpeed, debugSettings.flySpeed);
  terrainMap.setBlockSpan(debugSettings.mapWidthBlocks, debugSettings.mapHeightBlocks);
  setBgmVolume(debugSettings.bgmVolume);
  tryStartBgm();
});

ui.setHotbarSelection(0);

/** Reusable vector for the camera's world direction (avoids per-frame allocation). */
const dir = new THREE.Vector3();
const targetBox = createTargetBox(scene);

const crackTextures = createCrackTextures();
const { crackOverlay, crackOverlayMat } = createCrackOverlay(scene, crackTextures);
const skyDayColor = new THREE.Color(0x89cfff);
const skyNightColor = new THREE.Color(0x000000);
const skyBlendColor = new THREE.Color();

/**
 * Mutable container for the block-breaking state machine.
 * - `breakState`: current break progress data, or `null` if not breaking.
 * - `leftMouseDown`: whether the left mouse button is currently held.
 * - `suppressBreakUntilMouseUp`: set to `true` after an attack hit so the
 *   held mouse button does not also start breaking the block behind the enemy.
 * @type {{breakState: Object|null, leftMouseDown: boolean, suppressBreakUntilMouseUp: boolean}}
 */
const breakState = { breakState: null, leftMouseDown: false, suppressBreakUntilMouseUp: false };

/** Index of the currently selected hotbar slot (0-based). */
let selectedIndex = 0;

/** Raycast result for the block the player is looking at, or `null`. */
let currentTarget = null;

/** The nearest quest-giver entity within interaction range, or `null`. */
let nearestQuestGiver = null;

/** World-space position where the player respawns after death. */
let spawnPoint = new THREE.Vector3(0, 40, 0);

/**
 * Returns `true` when any menu (inventory, dialogue, or debug pane) is open.
 * Used to suppress game input when the player is interacting with UI.
 * @returns {boolean}
 */
function isMenuOpen() {
  return ui.isInventoryOpen() || ui.isDialogueOpen() || ui.isDebugOpen();
}

/**
 * Shows or hides the "click to play" overlay based on pointer-lock state and
 * whether any menu is open. Called after any event that may change these states.
 */
function refreshOverlayVisibility() {
  const locked = document.pointerLockElement === canvas;
  ui.setOverlayVisible(!locked && !isMenuOpen());
}

/**
 * Scans downward from Y=127 to find the first solid block with air above it
 * at the given `(x, z)` world column. Returns Y+1 (the air block just above the
 * surface) so callers receive the correct foot placement Y. Falls back to 45
 * if no solid surface is found, which keeps the player from spawning underground.
 * @param {number} x - World X coordinate.
 * @param {number} z - World Z coordinate.
 * @returns {number} World Y coordinate of the first safe standing position.
 */
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

/**
 * Updates the camera's aspect ratio and the renderer size when the browser
 * window is resized.
 */
function resize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function smoothstep(edge0, edge1, x) {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

function updateDayNight(timeSec) {
  const cycle = ((timeSec % DAY_NIGHT_CYCLE_SECONDS) + DAY_NIGHT_CYCLE_SECONDS) % DAY_NIGHT_CYCLE_SECONDS;
  const phase = cycle / DAY_NIGHT_CYCLE_SECONDS;
  const angle = phase * Math.PI * 2;

  const altitude = Math.sin(angle);
  const azimuth = angle - Math.PI * 0.5;

  const orbitRadius = 280;
  const sunY = player.position.y + altitude * 230;
  const sunX = player.position.x + Math.cos(azimuth) * orbitRadius;
  const sunZ = player.position.z + Math.sin(azimuth) * orbitRadius;
  sunLight.position.set(sunX, sunY, sunZ);
  sunLight.target.position.set(player.position.x, player.position.y, player.position.z);
  sunLight.target.updateMatrixWorld();

  // Steep twilight while preserving a small moonlight floor at night.
  const daylight = smoothstep(-0.03, 0.2, altitude);
  sunLight.intensity = 0.02 + daylight * 1.06;
  ambientLight.intensity = 0.05 + daylight * 0.3;
  sunLight.castShadow = daylight > 0.03;

  const skySunDistance = 92;
  const horiz = Math.sqrt(Math.max(0, 1 - altitude * altitude));
  const dirX = Math.cos(azimuth) * horiz;
  const dirY = altitude;
  const dirZ = Math.sin(azimuth) * horiz;
  sunVisual.position.set(
    player.position.x + dirX * skySunDistance,
    player.position.y + dirY * skySunDistance,
    player.position.z + dirZ * skySunDistance
  );
  const sunVisible = altitude > -0.03;
  sunVisual.visible = sunVisible;
  if (sunVisible) {
    const glow = sunVisual.children[0];
    const core = sunVisual.children[1];
    glow.material.opacity = 0.2 + daylight * 0.45;
    core.scale.setScalar(0.85 + daylight * 0.25);
  }

  skyBlendColor.lerpColors(skyNightColor, skyDayColor, daylight);
  scene.background.copy(skyBlendColor);
  if (scene.fog) scene.fog.color.copy(skyBlendColor);
  return daylight;
}

window.addEventListener("resize", resize);
window.addEventListener("contextmenu", (e) => e.preventDefault());
window.addEventListener("pointerdown", tryStartBgm);
window.addEventListener("keydown", tryStartBgm);

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

/** Timestamp of the previous frame, used to compute `dt`. */
let prevTime = performance.now();

/** Accumulated seconds used for the FPS average. */
let fpsAccum = 0;

/** Number of frames counted in the current FPS window. */
let fpsFrames = 0;

/** Accumulated seconds since the last chunk load sweep. */
let chunkTick = 0;

/**
 * The main game loop function, called each animation frame via
 * `requestAnimationFrame`. Runs in the following order:
 * 1. Compute delta time, capped at 50 ms to avoid spiral-of-death on tab un-focus.
 * 2. Tick attack cooldown.
 * 3. Update player physics (if no menu is open).
 * 4. Load/unload chunks around the player every 0.14 s.
 * 5. Rebuild two dirty chunk meshes per frame.
 * 6. Update mob AI and animations.
 * 7. Apply contact damage from nearby hostiles (with cooldown).
 * 8. Handle player death and respawn.
 * 9. Find the nearest quest giver and update raycast target.
 * 10. Advance the block-breaking state machine.
 * 11. Show/hide the target block highlight box.
 * 12. Update all HUD elements.
 * 13. Render the terrain map and the 3-D scene.
 * @param {DOMHighResTimeStamp} now - Current timestamp in milliseconds.
 */
function tick(now) {
  const dt = Math.min(0.05, (now - prevTime) / 1000);
  prevTime = now;
  const timeSec = now / 1000;
  attackCooldown = Math.max(0, attackCooldown - dt);
  const daylight = updateDayNight(timeSec);
  clouds.update(player.position, dt, timeSec, daylight);

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
