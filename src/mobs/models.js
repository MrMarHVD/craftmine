import * as THREE from "three";

export function addPart(parent, size, pos, color) {
  const g = new THREE.BoxGeometry(size[0], size[1], size[2]);
  const m = new THREE.MeshLambertMaterial({ color });
  const mesh = new THREE.Mesh(g, m);
  mesh.position.set(pos[0], pos[1], pos[2]);
  parent.add(mesh);
  return mesh;
}

export function addEyes(parent, y, z, color = 0x1b1b1b, spacing = 0.12) {
  addPart(parent, [0.06, 0.06, 0.02], [-spacing, y, z], color);
  addPart(parent, [0.06, 0.06, 0.02], [spacing, y, z], color);
}

export function createRig(type) {
  return { type, legs: [], arms: [], wings: [], tail: null, head: null };
}

export function buildQuestGiver(root) {
  const rig = createRig("humanoid");
  addPart(root, [0.6, 0.92, 0.34], [0, 0.46, 0], 0x3c6fa1);
  rig.head = addPart(root, [0.52, 0.5, 0.36], [0, 1.17, 0], 0xdfc2a1);
  rig.legs.push(addPart(root, [0.18, 0.56, 0.2], [-0.2, 0.24, 0], 0x2d3b53));
  rig.legs.push(addPart(root, [0.18, 0.56, 0.2], [0.2, 0.24, 0], 0x2d3b53));
  rig.arms.push(addPart(root, [0.1, 0.4, 0.1], [-0.36, 0.62, 0], 0xdfc2a1));
  rig.arms.push(addPart(root, [0.1, 0.4, 0.1], [0.36, 0.62, 0], 0xdfc2a1));
  addPart(root, [0.58, 0.1, 0.38], [0, 1.48, 0], 0x3a2b22);
  addEyes(root, 1.2, 0.19, 0x1a1a1a, 0.11);
  addPart(root, [0.1, 0.03, 0.02], [0, 1.09, 0.19], 0x7a4f3a);
  return rig;
}

export function buildDeer(root) {
  const rig = createRig("quadruped");
  addPart(root, [0.75, 0.44, 0.34], [0, 0.58, 0], 0xa0764f);
  rig.head = addPart(root, [0.32, 0.32, 0.28], [0.42, 0.76, 0], 0x9a6e46);
  addPart(root, [0.2, 0.14, 0.2], [0.53, 0.62, 0], 0x8e5e39);
  rig.tail = addPart(root, [0.08, 0.12, 0.08], [-0.42, 0.64, 0], 0x825733);
  addEyes(root, 0.8, 0.14, 0x171717, 0.05);
  for (const x of [-0.24, 0.24]) {
    rig.legs.push(addPart(root, [0.14, 0.38, 0.14], [x, 0.2, 0.12], 0x7b5436));
    rig.legs.push(addPart(root, [0.14, 0.38, 0.14], [x, 0.2, -0.12], 0x7b5436));
  }
  addPart(root, [0.04, 0.28, 0.04], [0.5, 1.02, 0.09], 0xd3c4ab);
  addPart(root, [0.04, 0.28, 0.04], [0.5, 1.02, -0.09], 0xd3c4ab);
  return rig;
}

export function buildLizard(root) {
  const rig = createRig("crawler");
  addPart(root, [0.8, 0.22, 0.32], [0, 0.38, 0], 0xb9b06d);
  rig.head = addPart(root, [0.3, 0.18, 0.24], [0.49, 0.41, 0], 0x9c9459);
  rig.tail = addPart(root, [0.46, 0.1, 0.1], [-0.62, 0.32, 0], 0x8c8451);
  addEyes(root, 0.45, 0.13, 0x222222, 0.05);
  for (const z of [-0.13, 0.13]) {
    rig.legs.push(addPart(root, [0.14, 0.1, 0.14], [-0.15, 0.2, z], 0x998f59));
    rig.legs.push(addPart(root, [0.14, 0.1, 0.14], [0.2, 0.2, z], 0x998f59));
  }
  return rig;
}

export function buildParrot(root) {
  const rig = createRig("flying");
  addPart(root, [0.32, 0.42, 0.28], [0, 0.64, 0], 0x2ec66b);
  rig.head = addPart(root, [0.28, 0.24, 0.24], [0.14, 0.9, 0], 0x23b45f);
  addPart(root, [0.1, 0.08, 0.08], [0.3, 0.88, 0], 0xe4aa35);
  addEyes(root, 0.93, 0.12, 0x101010, 0.045);
  rig.wings.push(addPart(root, [0.48, 0.06, 0.2], [0, 0.66, 0.19], 0x4fd6ff));
  rig.wings.push(addPart(root, [0.48, 0.06, 0.2], [0, 0.66, -0.19], 0x3eb7e0));
  rig.tail = addPart(root, [0.14, 0.16, 0.12], [-0.2, 0.4, 0], 0x2ba95a);
  return rig;
}

export function buildGoat(root) {
  const rig = createRig("quadruped");
  addPart(root, [0.68, 0.4, 0.3], [0, 0.58, 0], 0xdbdcdf);
  rig.head = addPart(root, [0.3, 0.28, 0.24], [0.38, 0.76, 0], 0xc8c9ce);
  addEyes(root, 0.79, 0.12, 0x161616, 0.05);
  addPart(root, [0.06, 0.24, 0.06], [0.43, 0.98, 0.09], 0xc9b486);
  addPart(root, [0.06, 0.24, 0.06], [0.43, 0.98, -0.09], 0xc9b486);
  for (const x of [-0.2, 0.2]) {
    rig.legs.push(addPart(root, [0.13, 0.36, 0.13], [x, 0.2, 0.11], 0x96979d));
    rig.legs.push(addPart(root, [0.13, 0.36, 0.13], [x, 0.2, -0.11], 0x96979d));
  }
  return rig;
}

export function buildSheep(root) {
  const rig = createRig("quadruped");
  addPart(root, [0.74, 0.46, 0.42], [0, 0.58, 0], 0xf0f0ef);
  rig.head = addPart(root, [0.34, 0.3, 0.28], [0.43, 0.72, 0], 0x463c34);
  addEyes(root, 0.74, 0.14, 0x131313, 0.06);
  for (const x of [-0.22, 0.22]) {
    rig.legs.push(addPart(root, [0.13, 0.34, 0.13], [x, 0.2, 0.14], 0x5e544a));
    rig.legs.push(addPart(root, [0.13, 0.34, 0.13], [x, 0.2, -0.14], 0x5e544a));
  }
  return rig;
}

export function buildReindeer(root) {
  const rig = buildDeer(root);
  addPart(root, [0.04, 0.24, 0.04], [0.52, 1.14, 0.14], 0xd8d2bf);
  addPart(root, [0.04, 0.16, 0.04], [0.57, 1.2, 0.18], 0xd8d2bf);
  addPart(root, [0.04, 0.24, 0.04], [0.52, 1.14, -0.14], 0xd8d2bf);
  addPart(root, [0.04, 0.16, 0.04], [0.57, 1.2, -0.18], 0xd8d2bf);
  return rig;
}

export function buildHumanoid(root, bodyColor, skinColor, hostileStyle = false) {
  const rig = createRig("humanoid");
  addPart(root, [0.56, 0.88, 0.32], [0, 0.46, 0], bodyColor);
  rig.head = addPart(root, [0.44, 0.48, 0.32], [0, 1.14, 0], skinColor);
  rig.legs.push(addPart(root, [0.16, 0.56, 0.16], [-0.18, 0.22, 0], 0x30261f));
  rig.legs.push(addPart(root, [0.16, 0.56, 0.16], [0.18, 0.22, 0], 0x30261f));
  rig.arms.push(addPart(root, [0.12, 0.42, 0.12], [-0.34, 0.62, 0], skinColor));
  rig.arms.push(addPart(root, [0.12, 0.42, 0.12], [0.34, 0.62, 0], skinColor));
  addEyes(root, 1.16, 0.17, hostileStyle ? 0xbf1d1d : 0x141414, 0.08);
  addPart(root, [0.12, 0.04, 0.02], [0, 1.04, 0.17], hostileStyle ? 0x4f1010 : 0x774f38);
  if (hostileStyle) addPart(root, [0.46, 0.08, 0.36], [0, 1.42, 0], 0x1f1f1f);
  return rig;
}

export function buildSandStalker(root) {
  const rig = createRig("crawler");
  addPart(root, [0.66, 0.3, 0.32], [0, 0.48, 0], 0x978447);
  rig.head = addPart(root, [0.32, 0.2, 0.24], [0.42, 0.54, 0], 0x7d6a37);
  addEyes(root, 0.58, 0.12, 0xce2f1e, 0.05);
  rig.tail = addPart(root, [0.5, 0.08, 0.08], [-0.58, 0.42, 0], 0x6d5a30);
  for (const z of [-0.13, 0.13]) {
    rig.legs.push(addPart(root, [0.12, 0.2, 0.12], [-0.16, 0.2, z], 0x7f703e));
    rig.legs.push(addPart(root, [0.12, 0.2, 0.12], [0.16, 0.2, z], 0x7f703e));
  }
  return rig;
}

export function buildJaguar(root) {
  const rig = createRig("quadruped");
  addPart(root, [0.74, 0.34, 0.32], [0, 0.54, 0], 0xc2813d);
  rig.head = addPart(root, [0.32, 0.24, 0.24], [0.45, 0.62, 0], 0xac6f31);
  addEyes(root, 0.65, 0.12, 0xbd1e1e, 0.05);
  for (const x of [-0.22, 0.22]) {
    rig.legs.push(addPart(root, [0.12, 0.28, 0.12], [x, 0.2, 0.13], 0x8e5a27));
    rig.legs.push(addPart(root, [0.12, 0.28, 0.12], [x, 0.2, -0.13], 0x8e5a27));
  }
  rig.tail = addPart(root, [0.44, 0.08, 0.08], [-0.58, 0.5, 0], 0x8a5825);
  return rig;
}

export function buildRockWraith(root) {
  const rig = createRig("wraith");
  addPart(root, [0.64, 0.86, 0.42], [0, 0.56, 0], 0x798086);
  rig.head = addPart(root, [0.48, 0.36, 0.34], [0, 1.18, 0], 0x6a737a);
  rig.arms.push(addPart(root, [0.26, 0.5, 0.16], [-0.45, 0.62, 0], 0x666f77));
  rig.arms.push(addPart(root, [0.26, 0.5, 0.16], [0.45, 0.62, 0], 0x666f77));
  addEyes(root, 1.2, 0.18, 0xffad33, 0.09);
  return rig;
}

export function buildYeti(root) {
  const rig = createRig("humanoid");
  addPart(root, [0.78, 0.96, 0.48], [0, 0.58, 0], 0xc8d9e5);
  rig.head = addPart(root, [0.52, 0.5, 0.4], [0, 1.23, 0], 0xd7e5ef);
  rig.arms.push(addPart(root, [0.28, 0.62, 0.2], [-0.48, 0.62, 0], 0xb8ccdb));
  rig.arms.push(addPart(root, [0.28, 0.62, 0.2], [0.48, 0.62, 0], 0xb8ccdb));
  rig.legs.push(addPart(root, [0.18, 0.5, 0.18], [-0.2, 0.25, 0], 0x9db2c2));
  rig.legs.push(addPart(root, [0.18, 0.5, 0.18], [0.2, 0.25, 0], 0x9db2c2));
  addEyes(root, 1.22, 0.2, 0x8ac0ff, 0.1);
  addPart(root, [0.16, 0.05, 0.03], [0, 1.08, 0.2], 0x517192);
  return rig;
}

export function createMobModel(def, hostile, questgiver = false) {
  const root = new THREE.Group();
  let rig;

  if (questgiver) {
    rig = buildQuestGiver(root);
    return { root, rig };
  }

  switch (def.key) {
    case "deer":
      rig = buildDeer(root);
      break;
    case "lizard":
      rig = buildLizard(root);
      break;
    case "parrot":
      rig = buildParrot(root);
      break;
    case "goat":
      rig = buildGoat(root);
      break;
    case "sheep":
      rig = buildSheep(root);
      break;
    case "reindeer":
      rig = buildReindeer(root);
      break;
    case "bandit":
      rig = buildHumanoid(root, 0x6e4d36, 0xd0a782, true);
      break;
    case "raider":
      rig = buildHumanoid(root, 0x573729, 0xc89a74, true);
      break;
    case "sandstalker":
      rig = buildSandStalker(root);
      break;
    case "jaguar":
      rig = buildJaguar(root);
      break;
    case "rockwraith":
      rig = buildRockWraith(root);
      break;
    case "yeti":
      rig = buildYeti(root);
      break;
    default:
      rig = buildSheep(root);
      break;
  }

  if (hostile) addPart(root, [0.08, 0.08, 0.08], [0.24, 0.9, 0.2], 0x8f1414);
  return { root, rig };
}
