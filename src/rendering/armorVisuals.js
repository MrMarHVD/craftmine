import * as THREE from "three";
import { BlockId } from "../blocks.js";
import { ARMOR_SLOT, ARMOR_SLOT_ORDER, armorStateFromArray, createEmptyArmorState } from "../game/equipment.js";

function addArmorBox(parent, size, pos, color = 0xd9dde4) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(size[0], size[1], size[2]), new THREE.MeshLambertMaterial({ color }));
  mesh.position.set(pos[0], pos[1], pos[2]);
  parent.add(mesh);
  return mesh;
}

function createArmorMesh(slot, itemId) {
  if (!itemId || itemId === BlockId.AIR) return null;
  const root = new THREE.Group();
  switch (slot) {
    case ARMOR_SLOT.HELMET:
      addArmorBox(root, [0.52, 0.18, 0.38], [0, 0.08, 0]);
      addArmorBox(root, [0.44, 0.18, 0.34], [0, -0.06, 0]);
      break;
    case ARMOR_SLOT.CHEST:
      addArmorBox(root, [0.66, 0.52, 0.4], [0, 0, 0]);
      addArmorBox(root, [0.1, 0.34, 0.16], [-0.38, -0.02, 0]);
      addArmorBox(root, [0.1, 0.34, 0.16], [0.38, -0.02, 0]);
      break;
    case ARMOR_SLOT.LEGS:
      addArmorBox(root, [0.42, 0.18, 0.28], [0, 0.18, 0]);
      addArmorBox(root, [0.18, 0.34, 0.2], [-0.18, -0.06, 0]);
      addArmorBox(root, [0.18, 0.34, 0.2], [0.18, -0.06, 0]);
      break;
    case ARMOR_SLOT.BOOTS:
      addArmorBox(root, [0.18, 0.18, 0.22], [-0.18, 0, 0]);
      addArmorBox(root, [0.18, 0.18, 0.22], [0.18, 0, 0]);
      break;
    default:
      return null;
  }
  return root;
}

export function attachArmorVisuals(target, armorStateOrIds) {
  const armorState = Array.isArray(armorStateOrIds) ? armorStateFromArray(armorStateOrIds) : armorStateOrIds ?? createEmptyArmorState();
  const rig = target.rig;
  if (!rig) return;
  if (!target.armorAnchors) {
    target.armorAnchors = {
      [ARMOR_SLOT.HELMET]: rig.head ?? target.mesh,
      [ARMOR_SLOT.CHEST]: rig.torso ?? target.mesh,
      [ARMOR_SLOT.LEGS]: rig.torso ?? target.mesh,
      [ARMOR_SLOT.BOOTS]: target.mesh,
    };
    target.armorMeshes = {};
  }

  for (const slot of ARMOR_SLOT_ORDER) {
    const nextId = armorState[slot] ?? BlockId.AIR;
    if (target.armorMeshes[slot]?.userData?.itemId === nextId) continue;
    if (target.armorMeshes[slot]) {
      target.armorAnchors[slot].remove(target.armorMeshes[slot]);
      target.armorMeshes[slot].traverse((node) => {
        if (node.isMesh) {
          node.geometry?.dispose?.();
          node.material?.dispose?.();
        }
      });
      target.armorMeshes[slot] = null;
    }
    const mesh = createArmorMesh(slot, nextId);
    if (!mesh) continue;
    mesh.userData.itemId = nextId;
    if (slot === ARMOR_SLOT.CHEST) mesh.position.set(0, 0.02, 0);
    if (slot === ARMOR_SLOT.LEGS) mesh.position.set(0, -0.18, 0);
    if (slot === ARMOR_SLOT.BOOTS) mesh.position.set(0, 0.08, 0);
    target.armorAnchors[slot].add(mesh);
    target.armorMeshes[slot] = mesh;
  }
}
