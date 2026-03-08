/**
 * @module game/blockInteraction
 * @description Implements the block-breaking state machine and the crack-overlay
 * visual feedback system. When the player holds the left mouse button over a
 * breakable block, `updateBreakMining` advances a progress counter each frame
 * and updates the `crackOverlay` mesh to display the correct crack stage. When
 * progress reaches 1.0, the block is removed from the world and added to the
 * player's inventory. The crack textures are pre-generated as a series of canvas
 * bitmaps with progressively more crack lines, avoiding any per-frame canvas
 * draw calls during mining.
 */

import * as THREE from "three";
import { BlockId, getBlockDrop, getBreakDuration, isBreakable } from "../blocks.js";
import { canMineBlockWithItem, getToolBreakMultiplier } from "./crafting.js";

/**
 * Number of distinct crack stages rendered during block breaking. A higher
 * value gives smoother visual feedback but requires more canvas textures.
 * @type {number}
 */
export const BREAK_STAGES = 8;

/**
 * Pre-generates `BREAK_STAGES` canvas-backed Three.js textures, each showing
 * a progressively denser network of crack lines. The crack pattern is defined
 * as a fixed set of line segments; each stage renders a proportional fraction
 * of the segments with increasing opacity, so early stages show a few faint
 * cracks and the final stage shows a dense, dark web just before the block
 * breaks.
 * @returns {THREE.CanvasTexture[]} Array of `BREAK_STAGES` textures, indexed 0 (fewest cracks) to BREAK_STAGES-1 (most cracks).
 */
export function createCrackTextures() {
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

/**
 * Creates the `THREE.Mesh` that overlays the targeted block with crack
 * textures during mining. The mesh is a box slightly larger than a voxel
 * (1.014³) with polygon offset so it renders just above the block surface
 * without z-fighting. It starts invisible and is shown/repositioned by
 * `startOrContinueBreakTarget`.
 * @param {THREE.Scene} scene - The scene to add the overlay mesh to.
 * @param {THREE.CanvasTexture[]} crackTextures - Textures from `createCrackTextures`.
 * @returns {{crackOverlay: THREE.Mesh, crackOverlayMat: THREE.MeshBasicMaterial}}
 *   The overlay mesh and its material (kept separately so `map` can be swapped per stage).
 */
export function createCrackOverlay(scene, crackTextures) {
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
  return { crackOverlay, crackOverlayMat };
}

/**
 * Resets the break state and hides the crack overlay. Called whenever the
 * player stops mining (releases the mouse, moves to a different block, opens a
 * menu, or loses pointer lock).
 * @param {{breakState: Object|null}} state - The mutable break state container.
 * @param {THREE.Mesh} crackOverlay - The crack overlay mesh.
 */
export function clearBreakState(state, crackOverlay) {
  state.breakState = null;
  crackOverlay.visible = false;
}

/**
 * Initialises or continues a break operation for the given `target`. If the
 * target is `null` or indestructible, the break state is cleared. If the
 * target matches the currently active break state, nothing changes (the caller
 * should continue advancing progress via `updateBreakMining`). Otherwise, a
 * fresh break state is created and the crack overlay is positioned and made
 * visible at the target block.
 * @param {{x: number, y: number, z: number, id: number}|null} target - The block to start/continue breaking.
 * @param {{breakState: Object|null}} state - The mutable break state container.
 * @param {THREE.Mesh} crackOverlay - The crack overlay mesh.
 * @param {THREE.MeshBasicMaterial} crackOverlayMat - The overlay material.
 * @param {THREE.CanvasTexture[]} crackTextures - Array of staged crack textures.
 */
export function startOrContinueBreakTarget(target, heldItemId, state, crackOverlay, crackOverlayMat, crackTextures) {
  if (!target || !isBreakable(target.id) || !canMineBlockWithItem(heldItemId, target.id)) {
    clearBreakState(state, crackOverlay);
    return;
  }
  if (
    state.breakState &&
    state.breakState.x === target.x &&
    state.breakState.y === target.y &&
    state.breakState.z === target.z &&
    state.breakState.id === target.id &&
    state.breakState.heldItemId === heldItemId
  ) {
    return;
  }
  const duration = getBreakDuration(target.id) / Math.max(1, getToolBreakMultiplier(heldItemId, target.id));
  state.breakState = {
    x: target.x,
    y: target.y,
    z: target.z,
    id: target.id,
    heldItemId,
    progress: 0,
    duration,
  };
  crackOverlay.position.set(target.x + 0.5, target.y + 0.5, target.z + 0.5);
  crackOverlayMat.map = crackTextures[0];
  crackOverlayMat.needsUpdate = true;
  crackOverlay.visible = true;
}

/**
 * Called every frame while the left mouse button is held. Advances the active
 * break progress by `dt / duration`, updates the crack overlay texture to
 * the appropriate stage, and removes the block from the world (adding it to
 * the inventory) once progress reaches 1. Clears break state and returns early
 * if any precondition fails: mouse released, pointer not locked, menu open, or
 * no valid breakable target.
 * @param {number} dt - Frame delta time in seconds.
 * @param {{breakState: Object|null, leftMouseDown: boolean, suppressBreakUntilMouseUp: boolean}} state - Mutable break state container.
 * @param {HTMLCanvasElement} canvas - The game canvas element (checked against `document.pointerLockElement`).
 * @param {{x: number, y: number, z: number, id: number}|null} currentTarget - The block currently targeted by the raycast.
 * @param {Object} world - The `World` instance used to remove the block.
 * @param {Object} ui - The `UI` instance used to add the broken block to inventory.
 * @param {THREE.Mesh} crackOverlay - The crack overlay mesh.
 * @param {THREE.MeshBasicMaterial} crackOverlayMat - The overlay material.
 * @param {THREE.CanvasTexture[]} crackTextures - Array of staged crack textures.
 * @param {function(): boolean} isMenuOpen - Returns `true` if any menu is currently open.
 * @param {number} heldItemId - Currently equipped item ID, used to apply tool speed bonuses.
 * @param {function(number, number, number, number): void} [onBlockBroken] - Optional callback `(x, y, z, id)` when a block is successfully broken.
 */
export function updateBreakMining(
  dt,
  state,
  canvas,
  currentTarget,
  world,
  ui,
  crackOverlay,
  crackOverlayMat,
  crackTextures,
  isMenuOpen,
  heldItemId,
  onBlockBroken = null
) {
  if (state.suppressBreakUntilMouseUp || !state.leftMouseDown) {
    clearBreakState(state, crackOverlay);
    return;
  }
  if (document.pointerLockElement !== canvas || isMenuOpen()) {
    clearBreakState(state, crackOverlay);
    return;
  }
  if (!currentTarget || !isBreakable(currentTarget.id) || !canMineBlockWithItem(heldItemId, currentTarget.id)) {
    clearBreakState(state, crackOverlay);
    return;
  }

  startOrContinueBreakTarget(currentTarget, heldItemId, state, crackOverlay, crackOverlayMat, crackTextures);
  if (!state.breakState) return;

  state.breakState.progress += dt / Math.max(0.05, state.breakState.duration);
  const stage = Math.min(BREAK_STAGES - 1, Math.floor(state.breakState.progress * BREAK_STAGES));
  crackOverlay.position.set(state.breakState.x + 0.5, state.breakState.y + 0.5, state.breakState.z + 0.5);
  crackOverlayMat.map = crackTextures[stage];
  crackOverlayMat.needsUpdate = true;
  crackOverlay.visible = true;

  if (state.breakState.progress >= 1) {
    const { x, y, z, id } = state.breakState;
    world.setBlock(x, y, z, BlockId.AIR);
    ui.addItem(getBlockDrop(id), 1);
    if (onBlockBroken) onBlockBroken(x, y, z, id);
    state.breakState = null;
    crackOverlay.visible = false;
  }
}
