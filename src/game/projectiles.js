import * as THREE from "three";
import { isSolid } from "../blocks.js";

export const ARROW_GRAVITY = 20;
export const PLAYER_ARROW_SPEED = 28;
export const SKELETON_ARROW_SPEED = 30;
const ARROW_LIFETIME = 5;
const PLAYER_ARROW_DAMAGE = 18;
const SKELETON_ARROW_DAMAGE = 12;

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

function makeArrowMesh(color = 0xcfd4db, featherColor = 0xc94a4a) {
  const root = new THREE.Group();

  const shaft = new THREE.Mesh(
    new THREE.CylinderGeometry(0.018, 0.018, 0.72, 8),
    new THREE.MeshLambertMaterial({ color: 0x8b603b })
  );
  shaft.rotation.z = Math.PI * 0.5;
  root.add(shaft);

  const head = new THREE.Mesh(
    new THREE.ConeGeometry(0.05, 0.15, 4),
    new THREE.MeshLambertMaterial({ color })
  );
  head.rotation.z = -Math.PI * 0.5;
  head.position.x = 0.38;
  root.add(head);

  for (const z of [-0.03, 0.03]) {
    const feather = new THREE.Mesh(
      new THREE.BoxGeometry(0.12, 0.05, 0.01),
      new THREE.MeshLambertMaterial({ color: featherColor })
    );
    feather.position.set(-0.28, 0, z);
    root.add(feather);
  }

  root.traverse((node) => {
    if (!node.isMesh) return;
    node.castShadow = true;
    node.receiveShadow = true;
  });
  root.userData.dispose = () => {
    root.traverse((node) => {
      if (!node.isMesh) return;
      node.geometry?.dispose?.();
      node.material?.dispose?.();
    });
  };
  return root;
}

export function solveBallisticVelocity(origin, target, speed, gravity = ARROW_GRAVITY) {
  const dx = target.x - origin.x;
  const dz = target.z - origin.z;
  const dy = target.y - origin.y;
  const distXZ = Math.hypot(dx, dz);
  if (distXZ < 0.001) return null;

  const speed2 = speed * speed;
  const discriminant = speed2 * speed2 - gravity * (gravity * distXZ * distXZ + 2 * dy * speed2);
  if (discriminant < 0) return null;

  const sqrtDisc = Math.sqrt(discriminant);
  const tanTheta = (speed2 - sqrtDisc) / (gravity * distXZ);
  const cosTheta = 1 / Math.sqrt(1 + tanTheta * tanTheta);
  const sinTheta = tanTheta * cosTheta;

  return new THREE.Vector3((dx / distXZ) * speed * cosTheta, speed * sinTheta, (dz / distXZ) * speed * cosTheta);
}

export class ProjectileSystem {
  constructor(scene, world, mobs, options = {}) {
    this.scene = scene;
    this.world = world;
    this.mobs = mobs;
    this.onPlayerHit = options.onPlayerHit ?? (() => {});
    this.projectiles = new Map();
    this.nextId = 1;
    this.tmpDir = new THREE.Vector3();
    this.tmpFrom = new THREE.Vector3();
    this.tmpTo = new THREE.Vector3();
    this.tmpMin = new THREE.Vector3();
    this.tmpMax = new THREE.Vector3();
  }

  spawnArrow({ origin, velocity, ownerType, ownerEntityId = null, hitMobs = false, hitPlayer = false, damage = PLAYER_ARROW_DAMAGE }) {
    const id = this.nextId++;
    const mesh = makeArrowMesh(ownerType === "mob" ? 0xe8ebf0 : 0xd5dae2, ownerType === "mob" ? 0x6f8ccf : 0xc94a4a);
    mesh.position.copy(origin);
    this.scene.add(mesh);
    const projectile = {
      id,
      mesh,
      position: origin.clone(),
      velocity: velocity.clone(),
      ownerType,
      ownerEntityId,
      hitMobs,
      hitPlayer,
      damage,
      life: ARROW_LIFETIME,
    };
    this.alignArrow(projectile);
    this.projectiles.set(id, projectile);
    return projectile;
  }

  firePlayerArrow(origin, direction, itemDamage) {
    const velocity = direction.clone().multiplyScalar(PLAYER_ARROW_SPEED);
    return this.spawnArrow({
      origin,
      velocity,
      ownerType: "player",
      hitMobs: true,
      hitPlayer: false,
      damage: itemDamage ?? PLAYER_ARROW_DAMAGE,
    });
  }

  fireSkeletonArrow(origin, velocity, ownerEntityId) {
    return this.spawnArrow({
      origin,
      velocity,
      ownerType: "mob",
      ownerEntityId,
      hitMobs: false,
      hitPlayer: true,
      damage: SKELETON_ARROW_DAMAGE,
    });
  }

  alignArrow(projectile) {
    this.tmpDir.copy(projectile.velocity).normalize();
    projectile.mesh.quaternion.setFromUnitVectors(new THREE.Vector3(1, 0, 0), this.tmpDir);
  }

  removeProjectile(id) {
    const projectile = this.projectiles.get(id);
    if (!projectile) return;
    this.scene.remove(projectile.mesh);
    projectile.mesh.userData.dispose?.();
    this.projectiles.delete(id);
  }

  hitSolidOnSegment(from, to) {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const dz = to.z - from.z;
    const dist = Math.hypot(dx, dy, dz);
    const steps = Math.max(1, Math.ceil(dist / 0.14));

    for (let i = 1; i <= steps; i++) {
      const t = i / steps;
      const x = Math.floor(from.x + dx * t);
      const y = Math.floor(from.y + dy * t);
      const z = Math.floor(from.z + dz * t);
      if (isSolid(this.world.getBlock(x, y, z))) return true;
    }
    return false;
  }

  hitPlayerOnSegment(from, to, player) {
    const aabb = player.getAABB();
    this.tmpMin.set(aabb.minX, aabb.minY, aabb.minZ);
    this.tmpMax.set(aabb.maxX, aabb.maxY, aabb.maxZ);
    this.tmpDir.subVectors(to, from);
    const dist = this.tmpDir.length();
    if (dist < 1e-6) return false;
    this.tmpDir.divideScalar(dist);
    const t = intersectRayAabb(from, this.tmpDir, this.tmpMin, this.tmpMax);
    return t !== null && t <= dist;
  }

  update(dt, player) {
    for (const [id, projectile] of this.projectiles) {
      this.tmpFrom.copy(projectile.position);
      projectile.velocity.y -= ARROW_GRAVITY * dt;
      projectile.position.addScaledVector(projectile.velocity, dt);
      this.tmpTo.copy(projectile.position);

      if (this.hitSolidOnSegment(this.tmpFrom, this.tmpTo)) {
        this.removeProjectile(id);
        continue;
      }

      if (projectile.hitMobs) {
        const hit = this.mobs.hitEntityOnSegment(this.tmpFrom, this.tmpTo, projectile.ownerEntityId);
        if (hit) {
          this.mobs.damageEntity(hit, projectile.damage);
          this.removeProjectile(id);
          continue;
        }
      }

      if (projectile.hitPlayer && this.hitPlayerOnSegment(this.tmpFrom, this.tmpTo, player)) {
        this.onPlayerHit(projectile.damage, projectile);
        this.removeProjectile(id);
        continue;
      }

      projectile.mesh.position.copy(projectile.position);
      this.alignArrow(projectile);
      projectile.life -= dt;
      if (projectile.life <= 0) this.removeProjectile(id);
    }
  }
}
