/**
 * @module mobs/healthBar
 * @description Canvas-based HUD elements attached directly to hostile entity
 * meshes in world space. `createHealthBarSprite` adds a floating bar above an
 * entity that shows its current health ratio; `updateHealthBarSprite` redraws
 * it whenever the entity takes damage. `createDamageHalo` adds a red ring at
 * floor level that flashes briefly on each hit. Both are used exclusively by
 * `MobSystem` when spawning or damaging hostile mobs.
 */

import * as THREE from "three";

/**
 * Creates a canvas-backed `THREE.Sprite` health bar and attaches it above the
 * entity's mesh. The canvas is 96×16 pixels: a dark background with a red fill
 * whose width represents the health ratio. References to the canvas, texture,
 * and sprite are stored directly on `entity` for later updates and disposal.
 * @param {Object} entity - The entity object; must have `entity.mesh` (a `THREE.Group`),
 *   `entity.health`, and `entity.maxHealth`.
 */
export function createHealthBarSprite(entity) {
  const c = document.createElement("canvas");
  c.width = 96;
  c.height = 16;
  const tex = new THREE.CanvasTexture(c);
  tex.minFilter = THREE.LinearFilter;
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false, depthWrite: false });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(1.45, 0.26, 1);
  sprite.position.set(0, 2.25, 0);
  entity.mesh.add(sprite);
  entity.healthCanvas = c;
  entity.healthTexture = tex;
  entity.healthSprite = sprite;
  updateHealthBarSprite(entity);
}

/**
 * Redraws the entity's health bar canvas to reflect its current `health` /
 * `maxHealth` ratio. Must be called after every damage event to keep the
 * displayed bar in sync. Marks `entity.healthTexture.needsUpdate` so Three.js
 * uploads the new canvas data to the GPU on the next render.
 * @param {Object} entity - Entity with `healthCanvas`, `healthTexture`, `health`, and `maxHealth` properties.
 */
export function updateHealthBarSprite(entity) {
  if (!entity.healthCanvas) return;
  const ctx = entity.healthCanvas.getContext("2d");
  ctx.clearRect(0, 0, entity.healthCanvas.width, entity.healthCanvas.height);
  ctx.fillStyle = "rgba(25,25,25,0.85)";
  ctx.fillRect(0, 0, 96, 16);
  const ratio = Math.max(0, Math.min(1, entity.health / entity.maxHealth));
  ctx.fillStyle = "rgba(192,36,36,0.95)";
  ctx.fillRect(2, 2, Math.floor(92 * ratio), 12);
  entity.healthTexture.needsUpdate = true;
}

/**
 * Creates a flat red `RingGeometry` mesh (the "damage halo") and attaches it
 * horizontally around the entity's base. The halo is normally invisible
 * (`opacity: 0`) and is made briefly opaque by `MobSystem.updateEntity`
 * whenever `entity.damageFlash` is non-zero, giving tactile feedback when the
 * player successfully hits an enemy.
 * @param {Object} entity - The entity object; must have `entity.mesh`.
 */
export function createDamageHalo(entity) {
  const g = new THREE.RingGeometry(0.65, 0.95, 24);
  const m = new THREE.MeshBasicMaterial({ color: 0xff3b3b, transparent: true, opacity: 0, side: THREE.DoubleSide, depthTest: false });
  const halo = new THREE.Mesh(g, m);
  halo.position.set(0, 1.05, 0);
  halo.rotation.x = Math.PI / 2;
  entity.mesh.add(halo);
  entity.damageHalo = halo;
}
