import * as THREE from "three";

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

export function createDamageHalo(entity) {
  const g = new THREE.RingGeometry(0.65, 0.95, 24);
  const m = new THREE.MeshBasicMaterial({ color: 0xff3b3b, transparent: true, opacity: 0, side: THREE.DoubleSide, depthTest: false });
  const halo = new THREE.Mesh(g, m);
  halo.position.set(0, 1.05, 0);
  halo.rotation.x = Math.PI / 2;
  entity.mesh.add(halo);
  entity.damageHalo = halo;
}
