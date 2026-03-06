import * as THREE from "three";
import { buildHumanoid } from "../mobs/models.js";

function makeRemoteModel() {
  const root = new THREE.Group();
  const bodyColor = 0x3f6f9d;
  const skinColor = 0xd7b092;
  const rig = buildHumanoid(root, bodyColor, skinColor, false);
  return { root, rig };
}

export class RemotePlayers {
  constructor(scene, localPlayerIdProvider = () => null) {
    this.scene = scene;
    this.localPlayerIdProvider = localPlayerIdProvider;
    this.players = new Map();
  }

  ensurePlayer(id, initial = null) {
    if (!id || id === this.localPlayerIdProvider()) return null;
    if (this.players.has(id)) return this.players.get(id);

    const { root, rig } = makeRemoteModel();
    root.position.set(initial?.x ?? 0, initial?.y ?? 0, initial?.z ?? 0);
    this.scene.add(root);
    const p = {
      id,
      mesh: root,
      rig,
      name: initial?.name ?? "Player",
      targetX: initial?.x ?? 0,
      targetY: initial?.y ?? 0,
      targetZ: initial?.z ?? 0,
      yaw: initial?.yaw ?? 0,
      animPhase: Math.random() * Math.PI * 2,
      speed2D: 0,
    };
    this.players.set(id, p);
    return p;
  }

  removePlayer(id) {
    const p = this.players.get(id);
    if (!p) return;
    this.scene.remove(p.mesh);
    p.mesh.traverse((n) => {
      if (!n.isMesh) return;
      n.geometry?.dispose?.();
      n.material?.dispose?.();
    });
    this.players.delete(id);
  }

  applyWelcome(players) {
    for (const pl of players) this.ensurePlayer(pl.id, pl);
  }

  applySnapshot(players) {
    const keep = new Set();
    for (const pl of players) {
      if (!pl?.id || pl.id === this.localPlayerIdProvider()) continue;
      keep.add(pl.id);
      const p = this.ensurePlayer(pl.id, pl);
      if (!p) continue;
      p.targetX = pl.x;
      p.targetY = pl.y;
      p.targetZ = pl.z;
      p.yaw = pl.yaw ?? p.yaw;
    }

    for (const id of this.players.keys()) {
      if (!keep.has(id)) this.removePlayer(id);
    }
  }

  update(dt) {
    for (const p of this.players.values()) {
      const prevX = p.mesh.position.x;
      const prevZ = p.mesh.position.z;
      p.mesh.position.x += (p.targetX - p.mesh.position.x) * Math.min(1, dt * 10);
      p.mesh.position.y += (p.targetY - p.mesh.position.y) * Math.min(1, dt * 10);
      p.mesh.position.z += (p.targetZ - p.mesh.position.z) * Math.min(1, dt * 10);

      p.mesh.rotation.y = -p.yaw;

      const vx = (p.mesh.position.x - prevX) / Math.max(dt, 0.0001);
      const vz = (p.mesh.position.z - prevZ) / Math.max(dt, 0.0001);
      p.speed2D = Math.hypot(vx, vz);
      this.animateRig(p, dt);
    }
  }

  animateRig(p, dt) {
    const rig = p.rig;
    if (!rig) return;
    const moving = p.speed2D > 0.05;
    const amp = moving ? Math.min(0.55, p.speed2D * 0.1) : 0.03;
    p.animPhase += dt * (moving ? 8.8 : 2.2);

    for (let i = 0; i < rig.legs.length; i++) {
      const phase = p.animPhase + (i % 2 === 0 ? 0 : Math.PI);
      rig.legs[i].rotation.x = Math.sin(phase) * amp;
    }
    for (let i = 0; i < rig.arms.length; i++) {
      const phase = p.animPhase + (i % 2 === 0 ? Math.PI : 0);
      rig.arms[i].rotation.x = Math.sin(phase) * (amp * 0.9);
    }
    if (rig.head) rig.head.rotation.x = Math.sin(p.animPhase * 0.35) * 0.03;
  }
}
