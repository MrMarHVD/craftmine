import * as THREE from "three";
import { BlockId, getBreakDuration, isBreakable } from "../blocks.js";

export const BREAK_STAGES = 8;

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

export function clearBreakState(state, crackOverlay) {
  state.breakState = null;
  crackOverlay.visible = false;
}

export function startOrContinueBreakTarget(target, state, crackOverlay, crackOverlayMat, crackTextures) {
  if (!target || !isBreakable(target.id)) {
    clearBreakState(state, crackOverlay);
    return;
  }
  if (
    state.breakState &&
    state.breakState.x === target.x &&
    state.breakState.y === target.y &&
    state.breakState.z === target.z &&
    state.breakState.id === target.id
  ) {
    return;
  }
  state.breakState = {
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

export function updateBreakMining(dt, state, canvas, currentTarget, world, ui, crackOverlay, crackOverlayMat, crackTextures, isMenuOpen) {
  if (state.suppressBreakUntilMouseUp || !state.leftMouseDown) {
    clearBreakState(state, crackOverlay);
    return;
  }
  if (document.pointerLockElement !== canvas || isMenuOpen()) {
    clearBreakState(state, crackOverlay);
    return;
  }
  if (!currentTarget || !isBreakable(currentTarget.id)) {
    clearBreakState(state, crackOverlay);
    return;
  }

  startOrContinueBreakTarget(currentTarget, state, crackOverlay, crackOverlayMat, crackTextures);
  if (!state.breakState) return;

  state.breakState.progress += dt / Math.max(0.05, state.breakState.duration);
  const stage = Math.min(BREAK_STAGES - 1, Math.floor(state.breakState.progress * BREAK_STAGES));
  crackOverlay.position.set(state.breakState.x + 0.5, state.breakState.y + 0.5, state.breakState.z + 0.5);
  crackOverlayMat.map = crackTextures[stage];
  crackOverlayMat.needsUpdate = true;
  crackOverlay.visible = true;

  if (state.breakState.progress >= 1) {
    world.setBlock(state.breakState.x, state.breakState.y, state.breakState.z, BlockId.AIR);
    ui.addItem(state.breakState.id, 1);
    state.breakState = null;
    crackOverlay.visible = false;
  }
}
