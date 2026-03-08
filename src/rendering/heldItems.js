import * as THREE from "three";
import { BlockId } from "../blocks.js";

const BLOCK_COLOR_BY_ID = {
  [BlockId.GRASS]: 0x58a34d,
  [BlockId.DIRT]: 0x7c5639,
  [BlockId.STONE]: 0x8d9098,
  [BlockId.SAND]: 0xdac27d,
  [BlockId.LOG]: 0x7f5938,
  [BlockId.LEAVES]: 0x4c934d,
  [BlockId.WATER]: 0x4a82d6,
  [BlockId.BEDROCK]: 0x464646,
  [BlockId.SNOW]: 0xe6eef7,
  [BlockId.CACTUS]: 0x499249,
  [BlockId.FLOWER_RED]: 0xcb3641,
  [BlockId.FLOWER_YELLOW]: 0xebc53a,
  [BlockId.VINE]: 0x478548,
  [BlockId.GRAVEL]: 0x918c84,
  [BlockId.MOSS]: 0x6b8a4f,
  [BlockId.CASTLE_BRICK]: 0x8d8f97,
  [BlockId.PLANK]: 0xb18055,
  [BlockId.BRAMBLE]: 0x5e7d42,
};

function makeMaterial(color, emissive = 0x000000) {
  return new THREE.MeshLambertMaterial({ color, emissive });
}

function makePose(position, rotation, scale = 1) {
  return { position, rotation, scale };
}

function addMesh(root, geo, mat, pos, rot = null) {
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.copy(pos);
  if (rot) mesh.rotation.set(rot.x, rot.y, rot.z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  root.add(mesh);
  return mesh;
}

function addBox(root, materials, size, pos, color, rot = null, emissive = 0x000000) {
  const geo = new THREE.BoxGeometry(size.x, size.y, size.z);
  const mat = makeMaterial(color, emissive);
  materials.push(mat);
  return addMesh(root, geo, mat, pos, rot);
}

function addCylinder(root, materials, radiusTop, radiusBottom, height, pos, color, rot = null, emissive = 0x000000) {
  const geo = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, 8);
  const mat = makeMaterial(color, emissive);
  materials.push(mat);
  return addMesh(root, geo, mat, pos, rot);
}

function buildGenericBlock(root, materials, itemId) {
  const color = BLOCK_COLOR_BY_ID[itemId] ?? 0x8b8b8b;
  addBox(root, materials, new THREE.Vector3(0.34, 0.34, 0.34), new THREE.Vector3(0, 0, 0), color);
  addBox(root, materials, new THREE.Vector3(0.26, 0.02, 0.26), new THREE.Vector3(0, 0.16, 0), 0xffffff, null, 0x080808);
}

function buildApple(root, materials) {
  addBox(root, materials, new THREE.Vector3(0.24, 0.24, 0.24), new THREE.Vector3(0, 0, 0), 0xc92d2d);
  addBox(root, materials, new THREE.Vector3(0.04, 0.08, 0.04), new THREE.Vector3(0.02, 0.16, 0), 0x6f4726);
  addBox(root, materials, new THREE.Vector3(0.1, 0.03, 0.07), new THREE.Vector3(0.08, 0.18, 0), 0x5f9d42);
}

function buildBanditBlade(root, materials) {
  addBox(root, materials, new THREE.Vector3(0.06, 0.36, 0.04), new THREE.Vector3(0, -0.02, 0), 0xb9bfc8);
  addBox(root, materials, new THREE.Vector3(0.09, 0.05, 0.08), new THREE.Vector3(0, -0.24, 0), 0x5b3b24);
  addBox(root, materials, new THREE.Vector3(0.14, 0.03, 0.06), new THREE.Vector3(0, -0.18, 0), 0x3a2d23);
}

function buildRaiderSaber(root, materials) {
  addBox(
    root,
    materials,
    new THREE.Vector3(0.05, 0.34, 0.04),
    new THREE.Vector3(0.05, 0.02, 0),
    0xd7d9e2,
    new THREE.Euler(0, 0, -0.42)
  );
  addBox(root, materials, new THREE.Vector3(0.16, 0.03, 0.06), new THREE.Vector3(-0.04, -0.16, 0), 0x9d834a);
  addBox(root, materials, new THREE.Vector3(0.05, 0.12, 0.05), new THREE.Vector3(-0.1, -0.24, 0), 0x6f4c2e);
}

function buildScorpionBow(root, materials) {
  addCylinder(
    root,
    materials,
    0.02,
    0.02,
    0.42,
    new THREE.Vector3(0, 0, 0),
    0xa06d39,
    new THREE.Euler(0, 0, Math.PI * 0.5)
  );
  addBox(
    root,
    materials,
    new THREE.Vector3(0.05, 0.28, 0.04),
    new THREE.Vector3(-0.14, 0.11, 0),
    0x8d5c2f,
    new THREE.Euler(0, 0, -0.55)
  );
  addBox(
    root,
    materials,
    new THREE.Vector3(0.05, 0.28, 0.04),
    new THREE.Vector3(-0.14, -0.11, 0),
    0x8d5c2f,
    new THREE.Euler(0, 0, 0.55)
  );
  addBox(root, materials, new THREE.Vector3(0.01, 0.44, 0.01), new THREE.Vector3(-0.26, 0, 0), 0xd7dde3);
}

function buildJaguarClaws(root, materials) {
  addBox(root, materials, new THREE.Vector3(0.18, 0.08, 0.14), new THREE.Vector3(0, -0.12, 0), 0x5b412d);
  for (const x of [-0.06, 0, 0.06]) {
    addBox(
      root,
      materials,
      new THREE.Vector3(0.025, 0.26, 0.03),
      new THREE.Vector3(x, 0.08, 0),
      0xe0e3ea,
      new THREE.Euler(0, 0, -0.12)
    );
  }
}

function buildWraithHammer(root, materials) {
  addBox(root, materials, new THREE.Vector3(0.08, 0.42, 0.08), new THREE.Vector3(0, -0.06, 0), 0x7c5639);
  addBox(root, materials, new THREE.Vector3(0.24, 0.12, 0.14), new THREE.Vector3(0, 0.22, 0), 0x7d838d);
  addBox(root, materials, new THREE.Vector3(0.05, 0.16, 0.05), new THREE.Vector3(0.12, 0.22, 0), 0xb48c3e, null, 0x2a1700);
  addBox(root, materials, new THREE.Vector3(0.05, 0.16, 0.05), new THREE.Vector3(-0.12, 0.22, 0), 0xb48c3e, null, 0x2a1700);
}

function buildYetiAxe(root, materials) {
  addBox(root, materials, new THREE.Vector3(0.07, 0.44, 0.07), new THREE.Vector3(0, -0.08, 0), 0x7d5737);
  addBox(
    root,
    materials,
    new THREE.Vector3(0.21, 0.15, 0.05),
    new THREE.Vector3(0.09, 0.16, 0),
    0x9fd6f2,
    new THREE.Euler(0, 0, -0.2),
    0x163243
  );
  addBox(
    root,
    materials,
    new THREE.Vector3(0.08, 0.11, 0.04),
    new THREE.Vector3(-0.07, 0.12, 0),
    0xcbeefd,
    new THREE.Euler(0, 0, 0.35),
    0x18303c
  );
}

function buildStick(root, materials) {
  addBox(root, materials, new THREE.Vector3(0.04, 0.38, 0.04), new THREE.Vector3(0, 0, 0), 0x8b603b);
}

function buildAxe(root, materials, headColor, handleColor) {
  addBox(root, materials, new THREE.Vector3(0.05, 0.4, 0.05), new THREE.Vector3(0, -0.05, 0), handleColor);
  addBox(root, materials, new THREE.Vector3(0.18, 0.12, 0.05), new THREE.Vector3(0.08, 0.13, 0), headColor, new THREE.Euler(0, 0, -0.14));
}

function buildPickaxe(root, materials, headColor, handleColor) {
  addBox(root, materials, new THREE.Vector3(0.05, 0.4, 0.05), new THREE.Vector3(0, -0.05, 0), handleColor);
  addBox(root, materials, new THREE.Vector3(0.24, 0.06, 0.05), new THREE.Vector3(0, 0.14, 0), headColor);
}

function buildSpade(root, materials, headColor, handleColor) {
  addBox(root, materials, new THREE.Vector3(0.05, 0.38, 0.05), new THREE.Vector3(0, -0.04, 0), handleColor);
  addBox(root, materials, new THREE.Vector3(0.11, 0.16, 0.05), new THREE.Vector3(0, 0.13, 0), headColor);
}

function applyPose(model, pose) {
  if (!model || !pose) return;
  model.position.copy(pose.position);
  model.rotation.set(pose.rotation.x, pose.rotation.y, pose.rotation.z);
  model.scale.setScalar(pose.scale ?? 1);
}

function getHeldItemPose(itemId, isFirstPerson = false) {
  switch (itemId) {
    case BlockId.WOOD_AXE:
    case BlockId.STONE_AXE:
    case BlockId.WEAPON_YETI_AXE:
      return isFirstPerson
        ? makePose(new THREE.Vector3(0.08, -0.04, 0.02), new THREE.Euler(-0.18, 0.18, 0.86), 1)
        : makePose(new THREE.Vector3(0.03, -0.04, 0.02), new THREE.Euler(0.2, 0.12, 1.12), 0.82);
    case BlockId.WOOD_PICKAXE:
    case BlockId.STONE_PICKAXE:
      return isFirstPerson
        ? makePose(new THREE.Vector3(0.06, -0.05, 0.01), new THREE.Euler(-0.14, 0.1, 0.94), 1)
        : makePose(new THREE.Vector3(0.03, -0.04, 0.01), new THREE.Euler(0.16, 0.08, 1.16), 0.82);
    case BlockId.WOOD_SPADE:
    case BlockId.STONE_SPADE:
      return isFirstPerson
        ? makePose(new THREE.Vector3(0.05, -0.06, 0.02), new THREE.Euler(-0.12, 0.12, 0.52), 1)
        : makePose(new THREE.Vector3(0.02, -0.05, 0.01), new THREE.Euler(0.14, 0.1, 0.7), 0.82);
    case BlockId.WOOD_SWORD:
    case BlockId.STONE_SWORD:
    case BlockId.WEAPON_BANDIT_BLADE:
    case BlockId.WEAPON_RAIDER_SABER:
      return isFirstPerson
        ? makePose(new THREE.Vector3(0.04, -0.08, 0.02), new THREE.Euler(-0.05, 0.1, 0.22), 1)
        : makePose(new THREE.Vector3(0.01, -0.05, 0.01), new THREE.Euler(0.12, 0.08, 0.4), 0.82);
    case BlockId.WEAPON_WRAITH_HAMMER:
      return isFirstPerson
        ? makePose(new THREE.Vector3(0.07, -0.08, 0.01), new THREE.Euler(-0.12, 0.18, 0.68), 1)
        : makePose(new THREE.Vector3(0.03, -0.06, 0.01), new THREE.Euler(0.14, 0.1, 0.92), 0.8);
    case BlockId.WEAPON_SCORP_BOW:
      return isFirstPerson
        ? makePose(new THREE.Vector3(0.01, -0.06, 0.02), new THREE.Euler(0.02, 0.18, 1.36), 1)
        : makePose(new THREE.Vector3(0.02, -0.05, 0.02), new THREE.Euler(0.12, 0.12, 1.54), 0.85);
    case BlockId.WEAPON_JAGUAR_CLAWS:
      return isFirstPerson
        ? makePose(new THREE.Vector3(0.02, -0.03, 0.03), new THREE.Euler(0.18, 0.2, 0.16), 1)
        : makePose(new THREE.Vector3(0.01, -0.02, 0.03), new THREE.Euler(0.22, 0.16, 0.22), 0.82);
    default:
      return isFirstPerson
        ? makePose(new THREE.Vector3(0, 0, 0), new THREE.Euler(0, 0, 0), 0.9)
        : makePose(new THREE.Vector3(0, 0, 0), new THREE.Euler(0, 0, 0), 0.75);
  }
}

export function isDisplayableHeldItem(itemId) {
  return Number.isFinite(itemId) && itemId > BlockId.AIR;
}

export function createHeldItemModel(itemId) {
  if (!isDisplayableHeldItem(itemId)) return null;

  const root = new THREE.Group();
  const materials = [];

  switch (itemId) {
    case BlockId.APPLE:
      buildApple(root, materials);
      break;
    case BlockId.WEAPON_BANDIT_BLADE:
      buildBanditBlade(root, materials);
      break;
    case BlockId.WEAPON_RAIDER_SABER:
      buildRaiderSaber(root, materials);
      break;
    case BlockId.WEAPON_SCORP_BOW:
      buildScorpionBow(root, materials);
      break;
    case BlockId.WEAPON_JAGUAR_CLAWS:
      buildJaguarClaws(root, materials);
      break;
    case BlockId.WEAPON_WRAITH_HAMMER:
      buildWraithHammer(root, materials);
      break;
    case BlockId.WEAPON_YETI_AXE:
      buildYetiAxe(root, materials);
      break;
    case BlockId.STICK:
      buildStick(root, materials);
      break;
    case BlockId.WOOD_SWORD:
      buildBanditBlade(root, materials);
      root.traverse((node) => {
        if (node.isMesh) node.material.color.setHex(node.position.y > -0.12 ? 0xba8a54 : 0x7e5635);
      });
      break;
    case BlockId.WOOD_AXE:
      buildAxe(root, materials, 0xc29562, 0x7f5737);
      break;
    case BlockId.WOOD_PICKAXE:
      buildPickaxe(root, materials, 0xc29562, 0x7f5737);
      break;
    case BlockId.WOOD_SPADE:
      buildSpade(root, materials, 0xc29562, 0x7f5737);
      break;
    case BlockId.STONE_SWORD:
      buildBanditBlade(root, materials);
      break;
    case BlockId.STONE_AXE:
      buildAxe(root, materials, 0xafb4bf, 0x7f5737);
      break;
    case BlockId.STONE_PICKAXE:
      buildPickaxe(root, materials, 0xafb4bf, 0x7f5737);
      break;
    case BlockId.STONE_SPADE:
      buildSpade(root, materials, 0xafb4bf, 0x7f5737);
      break;
    default:
      buildGenericBlock(root, materials, itemId);
      break;
  }

  root.userData.dispose = () => {
    root.traverse((node) => {
      if (node.isMesh) node.geometry?.dispose?.();
    });
    for (const mat of materials) mat.dispose?.();
  };
  return root;
}

export class LocalHeldItemView {
  constructor(camera) {
    this.camera = camera;
    this.root = new THREE.Group();
    this.root.position.set(0.42, -0.34, -0.72);
    this.root.rotation.set(-0.36, -0.2, -0.12);
    this.camera.add(this.root);
    this.currentItemId = BlockId.AIR;
    this.currentModel = null;
  }

  setItem(itemId) {
    const nextId = Number.isFinite(itemId) ? itemId : BlockId.AIR;
    if (nextId === this.currentItemId) return;
    this.currentItemId = nextId;
    if (this.currentModel) {
      this.root.remove(this.currentModel);
      this.currentModel.userData.dispose?.();
      this.currentModel = null;
    }
    const model = createHeldItemModel(nextId);
    if (!model) return;
    applyPose(model, getHeldItemPose(nextId, true));
    this.root.add(model);
    this.currentModel = model;
  }

  update(timeSec) {
    if (!this.currentModel) return;
    const bob = Math.sin(timeSec * 1.7) * 0.012;
    this.root.position.y = -0.34 + bob;
    this.root.rotation.z = -0.12 + Math.sin(timeSec * 1.35) * 0.025;
  }
}

export function updateHeldItemAnchor(anchor, itemId, scale = 1) {
  const nextId = Number.isFinite(itemId) ? itemId : BlockId.AIR;
  if (anchor.userData.itemId === nextId) return;

  if (anchor.userData.model) {
    anchor.remove(anchor.userData.model);
    anchor.userData.model.userData.dispose?.();
    anchor.userData.model = null;
  }

  anchor.userData.itemId = nextId;
  const model = createHeldItemModel(nextId);
  if (!model) return;
  applyPose(model, getHeldItemPose(nextId, false));
  model.scale.multiplyScalar(scale);
  anchor.add(model);
  anchor.userData.model = model;
}
