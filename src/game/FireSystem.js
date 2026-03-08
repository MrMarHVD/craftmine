import * as THREE from "three";
import { BlockId, isBurnable } from "../blocks.js";

const NEIGHBOR_DIRS = [
  [1, 0, 0],
  [-1, 0, 0],
  [0, 1, 0],
  [0, -1, 0],
  [0, 0, 1],
  [0, 0, -1],
];

function fireKey(x, y, z) {
  return `${x},${y},${z}`;
}

function makeFireTexture() {
  const c = document.createElement("canvas");
  c.width = 64;
  c.height = 64;
  const ctx = c.getContext("2d");
  const grad = ctx.createLinearGradient(0, 64, 0, 0);
  grad.addColorStop(0, "rgba(255,120,18,0)");
  grad.addColorStop(0.18, "rgba(255,138,26,0.75)");
  grad.addColorStop(0.52, "rgba(255,196,64,0.92)");
  grad.addColorStop(0.86, "rgba(255,238,160,0.7)");
  grad.addColorStop(1, "rgba(255,255,220,0)");
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.moveTo(32, 2);
  ctx.bezierCurveTo(46, 12, 56, 26, 52, 40);
  ctx.bezierCurveTo(49, 53, 40, 61, 32, 62);
  ctx.bezierCurveTo(24, 60, 13, 52, 12, 39);
  ctx.bezierCurveTo(11, 26, 19, 13, 32, 2);
  ctx.fill();
  ctx.fillStyle = "rgba(255,110,10,0.55)";
  ctx.beginPath();
  ctx.moveTo(31, 10);
  ctx.bezierCurveTo(40, 18, 44, 28, 42, 38);
  ctx.bezierCurveTo(40, 46, 36, 52, 32, 54);
  ctx.bezierCurveTo(27, 52, 23, 46, 22, 38);
  ctx.bezierCurveTo(21, 29, 24, 19, 31, 10);
  ctx.fill();
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  return tex;
}

function createFireMesh(texture) {
  const root = new THREE.Group();
  const mat = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    toneMapped: false,
  });
  const geo = new THREE.PlaneGeometry(0.9, 1.2);
  for (const rotY of [0, Math.PI * 0.5]) {
    const plane = new THREE.Mesh(geo, mat.clone());
    plane.position.set(0, 0.55, 0);
    plane.rotation.y = rotY;
    root.add(plane);
  }
  const light = new THREE.PointLight(0xff8a2d, 0.75, 4.5, 2);
  light.position.set(0, 0.7, 0);
  root.add(light);
  root.userData.dispose = () => {
    root.traverse((node) => {
      if (node.isMesh) {
        node.geometry?.dispose?.();
        node.material?.dispose?.();
      }
    });
  };
  return root;
}

function getBurnDuration(blockId) {
  switch (blockId) {
    case BlockId.LEAVES:
    case BlockId.VINE:
    case BlockId.FLOWER_RED:
    case BlockId.FLOWER_YELLOW:
    case BlockId.APPLE:
      return 1.4;
    case BlockId.BRAMBLE:
    case BlockId.MOSS:
      return 1.9;
    case BlockId.CACTUS:
      return 2.4;
    case BlockId.LOG:
    case BlockId.PLANK:
      return 3.2;
    default:
      return 2;
  }
}

export class FireSystem {
  constructor(scene, world) {
    this.scene = scene;
    this.world = world;
    this.fireTexture = makeFireTexture();
    this.fires = new Map();
  }

  igniteBlock(x, y, z, chance = 1) {
    if (Math.random() > chance) return false;
    const blockId = this.world.getBlock(x, y, z);
    if (!isBurnable(blockId)) return false;
    const key = fireKey(x, y, z);
    if (this.fires.has(key)) return true;

    const mesh = createFireMesh(this.fireTexture);
    mesh.position.set(x + 0.5, y, z + 0.5);
    this.scene.add(mesh);
    this.fires.set(key, {
      key,
      x,
      y,
      z,
      mesh,
      blockId,
      life: getBurnDuration(blockId) * (0.85 + Math.random() * 0.45),
      spreadTimer: 0.08 + Math.random() * 0.12,
      animSeed: Math.random() * Math.PI * 2,
    });
    return true;
  }

  extinguishAt(x, y, z) {
    const key = fireKey(x, y, z);
    const fire = this.fires.get(key);
    if (!fire) return;
    this.scene.remove(fire.mesh);
    fire.mesh.userData.dispose?.();
    this.fires.delete(key);
  }

  igniteAround(position, radius, chance = 0.8) {
    const ceilRadius = Math.ceil(radius);
    for (let oy = -ceilRadius; oy <= ceilRadius; oy++) {
      for (let oz = -ceilRadius; oz <= ceilRadius; oz++) {
        for (let ox = -ceilRadius; ox <= ceilRadius; ox++) {
          if (Math.hypot(ox, oy, oz) > radius) continue;
          this.igniteBlock(Math.floor(position.x + ox), Math.floor(position.y + oy), Math.floor(position.z + oz), chance);
        }
      }
    }
  }

  spreadFrom(fire) {
    for (const [dx, dy, dz] of NEIGHBOR_DIRS) {
      const nx = fire.x + dx;
      const ny = fire.y + dy;
      const nz = fire.z + dz;
      const blockId = this.world.getBlock(nx, ny, nz);
      if (!isBurnable(blockId)) continue;
      const baseChance = dy > 0 ? 0.82 : dy < 0 ? 0.32 : 0.58;
      this.igniteBlock(nx, ny, nz, baseChance);
    }
  }

  update(dt) {
    const now = performance.now() * 0.001;
    for (const fire of [...this.fires.values()]) {
      const currentId = this.world.getBlock(fire.x, fire.y, fire.z);
      if (!isBurnable(currentId)) {
        this.extinguishAt(fire.x, fire.y, fire.z);
        continue;
      }

      fire.life -= dt;
      fire.spreadTimer -= dt;
      if (fire.spreadTimer <= 0) {
        this.spreadFrom(fire);
        fire.spreadTimer = 0.1 + Math.random() * 0.14;
      }

      const flicker = 0.92 + Math.sin(now * 13 + fire.animSeed) * 0.08;
      fire.mesh.scale.setScalar(flicker);
      fire.mesh.position.y = fire.y + Math.sin(now * 9 + fire.animSeed) * 0.03;

      if (fire.life <= 0) {
        this.world.setBlock(fire.x, fire.y, fire.z, BlockId.AIR);
        this.extinguishAt(fire.x, fire.y, fire.z);
      }
    }
  }
}
