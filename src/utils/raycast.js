import * as THREE from "three";

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
