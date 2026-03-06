import * as THREE from "three";
import { fbm2D } from "../utils/noise.js";
import { floorDiv, hash2D } from "../utils/random.js";

const CLOUD_CELL = 56;
const CLOUD_SYNC_INTERVAL = 0.45;
const CLOUD_RANGE_CELLS = 9;

export class CloudSystem {
  constructor(scene, seed = 1337) {
    this.scene = scene;
    this.seed = seed | 0;
    this.windDir = new THREE.Vector2(0.93, 0.37).normalize();
    this.windSpeed = 1.9; // blocks/sec
    this.clouds = new Map();
    this.syncTimer = 0;
    this.daylight = 1;

    this.material = new THREE.MeshLambertMaterial({
      color: 0xf1f4f7,
      transparent: false,
      depthWrite: true,
    });
  }

  cloudinessAt(cellX, cellZ) {
    // Low-frequency field to create broad "clear sky" and "cloudy sky" regions.
    return fbm2D(cellX * 0.08, cellZ * 0.08, this.seed + 88421, 3, 2, 0.5);
  }

  shouldSpawnCloud(cellX, cellZ) {
    const cloudiness = this.cloudinessAt(cellX, cellZ);
    if (cloudiness < 0.44) return false;
    const roll = hash2D(cellX, cellZ, this.seed + 88439);
    const chance = 0.18 + (cloudiness - 0.44) * 1.15;
    return roll < Math.max(0, Math.min(0.86, chance));
  }

  createCloud(cellX, cellZ) {
    const key = `${cellX},${cellZ}`;
    if (this.clouds.has(key)) return;
    if (!this.shouldSpawnCloud(cellX, cellZ)) return;

    const group = new THREE.Group();
    const partCount = 3 + ((hash2D(cellX, cellZ, this.seed + 88471) * 4) | 0);
    const yBase = 96 + Math.floor(hash2D(cellX, cellZ, this.seed + 88483) * 18);
    const anchorX = cellX * CLOUD_CELL + (hash2D(cellX, cellZ, this.seed + 88491) - 0.5) * CLOUD_CELL * 0.7;
    const anchorZ = cellZ * CLOUD_CELL + (hash2D(cellX, cellZ, this.seed + 88501) - 0.5) * CLOUD_CELL * 0.7;

    for (let i = 0; i < partCount; i++) {
      const sx = 8 + hash2D(cellX * 31 + i, cellZ, this.seed + 88511) * 22;
      const sy = 3 + hash2D(cellX, cellZ * 29 + i, this.seed + 88523) * 5;
      const sz = 8 + hash2D(cellX * 17 + i, cellZ * 19 + i, this.seed + 88537) * 22;
      const px = (hash2D(cellX + i * 7, cellZ - i * 3, this.seed + 88541) - 0.5) * 18;
      const py = (hash2D(cellX - i * 5, cellZ + i * 11, this.seed + 88549) - 0.5) * 4;
      const pz = (hash2D(cellX + i * 13, cellZ + i * 2, this.seed + 88559) - 0.5) * 18;

      const part = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), this.material);
      part.position.set(px, py, pz);
      part.castShadow = false;
      part.receiveShadow = false;
      group.add(part);
    }

    group.userData.anchorX = anchorX;
    group.userData.anchorY = yBase;
    group.userData.anchorZ = anchorZ;
    group.userData.cellX = cellX;
    group.userData.cellZ = cellZ;
    this.clouds.set(key, group);
    this.scene.add(group);
  }

  setDaylight(daylight) {
    this.daylight = Math.max(0, Math.min(1, daylight));
    // Clouds stay visible at night but much dimmer.
    const tone = 0.3 + this.daylight * 0.7;
    this.material.color.setRGB(0.92 * tone, 0.95 * tone, 1.0 * tone);
  }

  updatePositions(timeSec) {
    const ox = this.windDir.x * this.windSpeed * timeSec;
    const oz = this.windDir.y * this.windSpeed * timeSec;
    for (const cloud of this.clouds.values()) {
      cloud.position.set(cloud.userData.anchorX + ox, cloud.userData.anchorY, cloud.userData.anchorZ + oz);
    }
  }

  syncCloudSet(playerPos, timeSec) {
    const ox = this.windDir.x * this.windSpeed * timeSec;
    const oz = this.windDir.y * this.windSpeed * timeSec;
    const sampleX = playerPos.x - ox;
    const sampleZ = playerPos.z - oz;
    const ccx = floorDiv(Math.floor(sampleX), CLOUD_CELL);
    const ccz = floorDiv(Math.floor(sampleZ), CLOUD_CELL);
    const keep = new Set();

    for (let dz = -CLOUD_RANGE_CELLS; dz <= CLOUD_RANGE_CELLS; dz++) {
      for (let dx = -CLOUD_RANGE_CELLS; dx <= CLOUD_RANGE_CELLS; dx++) {
        const cellX = ccx + dx;
        const cellZ = ccz + dz;
        const key = `${cellX},${cellZ}`;
        keep.add(key);
        this.createCloud(cellX, cellZ);
      }
    }

    for (const [key, cloud] of this.clouds.entries()) {
      if (keep.has(key)) continue;
      this.scene.remove(cloud);
      cloud.traverse((n) => {
        if (n.isMesh) n.geometry?.dispose?.();
      });
      this.clouds.delete(key);
    }
  }

  update(playerPos, dt, timeSec, daylight) {
    this.setDaylight(daylight);
    this.updatePositions(timeSec);
    this.syncTimer -= dt;
    if (this.syncTimer <= 0) {
      this.syncCloudSet(playerPos, timeSec);
      this.syncTimer = CLOUD_SYNC_INTERVAL;
    }
  }
}
