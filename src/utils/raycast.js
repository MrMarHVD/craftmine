/**
 * @module utils/raycast
 * @description Implements a DDA (Digital Differential Analysis) voxel
 * raycast. The algorithm steps through exactly the sequence of integer
 * voxel cells a ray passes through, making it O(distance) with no missed
 * blocks. It is called every frame from `main.js` to determine which block
 * the player is looking at and from `MobSystem.js` for ranged hit detection.
 */

import * as THREE from "three";

/**
 * Casts a ray through the voxel world and returns the first non-air block hit.
 * Uses the DDA algorithm: for each axis, it tracks the parametric distance `t`
 * to the next voxel boundary and always advances through whichever boundary is
 * closest, guaranteeing that every intersected cell is visited in order.
 * Returns `null` if no solid block is found within `maxDist` units.
 *
 * The returned `previous` position is the last air voxel before the hit,
 * which is where a newly placed block would be inserted.
 *
 * @param {Object} world - The `World` instance exposing `getBlock(x, y, z)`.
 * @param {THREE.Vector3} origin - Ray start position in world space.
 * @param {THREE.Vector3} dir - Ray direction (should be unit-length).
 * @param {number} maxDist - Maximum ray travel distance in world units.
 * @returns {{x: number, y: number, z: number, id: number, previous: THREE.Vector3}|null}
 *   Hit information including the block coordinates, its block ID, and the
 *   adjacent air voxel, or `null` if nothing was hit within range.
 */
export function voxelRaycast(world, origin, dir, maxDist) {
  const stepX = dir.x > 0 ? 1 : -1;
  const stepY = dir.y > 0 ? 1 : -1;
  const stepZ = dir.z > 0 ? 1 : -1;

  let x = Math.floor(origin.x);
  let y = Math.floor(origin.y);
  let z = Math.floor(origin.z);

  const tDeltaX = dir.x === 0 ? Number.POSITIVE_INFINITY : Math.abs(1 / dir.x);
  const tDeltaY = dir.y === 0 ? Number.POSITIVE_INFINITY : Math.abs(1 / dir.y);
  const tDeltaZ = dir.z === 0 ? Number.POSITIVE_INFINITY : Math.abs(1 / dir.z);

  const nextBoundaryX = x + (dir.x > 0 ? 1 : 0);
  const nextBoundaryY = y + (dir.y > 0 ? 1 : 0);
  const nextBoundaryZ = z + (dir.z > 0 ? 1 : 0);

  let tMaxX = dir.x === 0 ? Number.POSITIVE_INFINITY : Math.abs((nextBoundaryX - origin.x) / dir.x);
  let tMaxY = dir.y === 0 ? Number.POSITIVE_INFINITY : Math.abs((nextBoundaryY - origin.y) / dir.y);
  let tMaxZ = dir.z === 0 ? Number.POSITIVE_INFINITY : Math.abs((nextBoundaryZ - origin.z) / dir.z);

  const prev = new THREE.Vector3(x, y, z);

  while (true) {
    const id = world.getBlock(x, y, z);
    if (id !== 0) {
      return {
        x,
        y,
        z,
        id,
        previous: prev.clone(),
      };
    }

    if (tMaxX < tMaxY) {
      if (tMaxX < tMaxZ) {
        if (tMaxX > maxDist) break;
        prev.set(x, y, z);
        x += stepX;
        tMaxX += tDeltaX;
      } else {
        if (tMaxZ > maxDist) break;
        prev.set(x, y, z);
        z += stepZ;
        tMaxZ += tDeltaZ;
      }
    } else if (tMaxY < tMaxZ) {
      if (tMaxY > maxDist) break;
      prev.set(x, y, z);
      y += stepY;
      tMaxY += tDeltaY;
    } else {
      if (tMaxZ > maxDist) break;
      prev.set(x, y, z);
      z += stepZ;
      tMaxZ += tDeltaZ;
    }
  }

  return null;
}
