/**
 * @module mobs/models
 * @description Procedural Three.js model builders for every creature and NPC
 * in the game. Each `build*` function creates a `THREE.Group` (the model root)
 * by attaching coloured `BoxGeometry` parts via `addPart`, then returns a `rig`
 * object containing references to animatable bones (legs, arms, wings, tail,
 * head). `createMobModel` is the public dispatch function that selects the
 * correct builder based on a mob definition key and an optional questgiver flag.
 */

import * as THREE from "three";

/**
 * Creates a single box-shaped body part, adds it to `parent`, and returns the
 * mesh. Used as the fundamental building block for all creature models.
 * @param {THREE.Group} parent - The group to attach the part to.
 * @param {[number, number, number]} size - Width, height, and depth in world units.
 * @param {[number, number, number]} pos - Local position `[x, y, z]` relative to `parent`.
 * @param {number} color - Hexadecimal RGB colour.
 * @returns {THREE.Mesh} The created part mesh.
 */
export function addPart(parent, size, pos, color) {
  const g = new THREE.BoxGeometry(size[0], size[1], size[2]);
  const m = new THREE.MeshLambertMaterial({ color });
  const mesh = new THREE.Mesh(g, m);
  mesh.position.set(pos[0], pos[1], pos[2]);
  parent.add(mesh);
  return mesh;
}

/**
 * Adds a symmetric pair of eye dots to a creature model at the given Y height
 * and Z depth. The two dots are offset left and right by `spacing` from the
 * centre of the head.
 * @param {THREE.Group} parent - Head group or root group to attach eyes to.
 * @param {number} y - Local Y position of the eyes.
 * @param {number} z - Local Z position (positive = front face).
 * @param {number} [color=0x1b1b1b] - Eye colour.
 * @param {number} [spacing=0.12] - Half the horizontal distance between the two eyes.
 */
export function addEyes(parent, y, z, color = 0x1b1b1b, spacing = 0.12) {
  addPart(parent, [0.06, 0.06, 0.02], [-spacing, y, z], color);
  addPart(parent, [0.06, 0.06, 0.02], [spacing, y, z], color);
}

/**
 * Creates an empty rig object with typed arrays for animatable bone references.
 * The rig is populated by each builder function and consumed by
 * `MobSystem.animateEntity` to drive leg-swing, wing-flap, and tail-sway
 * animations each frame.
 * @param {string} type - Descriptive type string (e.g. `"quadruped"`, `"humanoid"`).
 * @returns {{type: string, legs: THREE.Mesh[], arms: THREE.Mesh[], wings: THREE.Mesh[], tail: THREE.Mesh|null, head: THREE.Mesh|null}}
 *   An empty rig ready to be populated by a builder.
 */
export function createRig(type) {
  return { type, legs: [], arms: [], wings: [], tail: null, head: null };
}

/**
 * Builds the quest-giver NPC model — a robed humanoid with a hat, skin-toned
 * head and arms, and dark trousers. The model has legs and arms in the rig so
 * it could be animated, but in practice quest givers are stationary and only
 * bob vertically.
 * @param {THREE.Group} root - The group to build the model into.
 * @returns {{type: string, legs: THREE.Mesh[], arms: THREE.Mesh[], wings: THREE.Mesh[], tail: null, head: THREE.Mesh}}
 *   Populated rig for the quest-giver.
 */
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

/**
 * Builds a four-legged deer model with antlers, a small nose, and a tail.
 * @param {THREE.Group} root - The group to build the model into.
 * @returns {{type: string, legs: THREE.Mesh[], arms: THREE.Mesh[], wings: THREE.Mesh[], tail: THREE.Mesh, head: THREE.Mesh}}
 *   Populated quadruped rig.
 */
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

/**
 * Builds a low-slung lizard model with a long tail and four splayed legs.
 * @param {THREE.Group} root - The group to build the model into.
 * @returns {{type: string, legs: THREE.Mesh[], arms: THREE.Mesh[], wings: THREE.Mesh[], tail: THREE.Mesh, head: THREE.Mesh}}
 *   Populated crawler rig.
 */
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

/**
 * Builds a colourful parrot model with two wings for flap animation and a beak.
 * @param {THREE.Group} root - The group to build the model into.
 * @returns {{type: string, legs: THREE.Mesh[], arms: THREE.Mesh[], wings: THREE.Mesh[], tail: THREE.Mesh, head: THREE.Mesh}}
 *   Populated flying rig.
 */
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

/**
 * Builds a mountain goat model with two curved horns and four legs.
 * @param {THREE.Group} root - The group to build the model into.
 * @returns {{type: string, legs: THREE.Mesh[], arms: THREE.Mesh[], wings: THREE.Mesh[], tail: null, head: THREE.Mesh}}
 *   Populated quadruped rig.
 */
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

/**
 * Builds a fluffy white sheep model with a dark head and legs.
 * @param {THREE.Group} root - The group to build the model into.
 * @returns {{type: string, legs: THREE.Mesh[], arms: THREE.Mesh[], wings: THREE.Mesh[], tail: null, head: THREE.Mesh}}
 *   Populated quadruped rig.
 */
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

/**
 * Builds a reindeer by reusing `buildDeer` and adding two additional pairs of
 * antler branches to differentiate the species from a standard deer.
 * @param {THREE.Group} root - The group to build the model into.
 * @returns {{type: string, legs: THREE.Mesh[], arms: THREE.Mesh[], wings: THREE.Mesh[], tail: THREE.Mesh, head: THREE.Mesh}}
 *   Populated quadruped rig (same as deer).
 */
export function buildReindeer(root) {
  const rig = buildDeer(root);
  addPart(root, [0.04, 0.24, 0.04], [0.52, 1.14, 0.14], 0xd8d2bf);
  addPart(root, [0.04, 0.16, 0.04], [0.57, 1.2, 0.18], 0xd8d2bf);
  addPart(root, [0.04, 0.24, 0.04], [0.52, 1.14, -0.14], 0xd8d2bf);
  addPart(root, [0.04, 0.16, 0.04], [0.57, 1.2, -0.18], 0xd8d2bf);
  return rig;
}

/**
 * Builds a generic humanoid model (used for Bandit and Raider enemies) with
 * configurable body/skin colours. When `hostileStyle` is `true`, the eyes are
 * red and a dark helmet is added to visually mark the entity as an enemy.
 * @param {THREE.Group} root - The group to build the model into.
 * @param {number} bodyColor - Hexadecimal RGB for the torso and leg colour.
 * @param {number} skinColor - Hexadecimal RGB for the head and arm colour.
 * @param {boolean} [hostileStyle=false] - If `true`, adds red eyes and a dark helmet.
 * @returns {{type: string, legs: THREE.Mesh[], arms: THREE.Mesh[], wings: THREE.Mesh[], tail: null, head: THREE.Mesh}}
 *   Populated humanoid rig.
 */
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

/**
 * Builds a desert Sandstalker — a sand-coloured crawler with red eyes and a
 * scorpion-like tail.
 * @param {THREE.Group} root - The group to build the model into.
 * @returns {{type: string, legs: THREE.Mesh[], arms: THREE.Mesh[], wings: THREE.Mesh[], tail: THREE.Mesh, head: THREE.Mesh}}
 *   Populated crawler rig.
 */
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

/**
 * Builds a jungle Jaguar — a tawny quadruped with red hostile eyes and a long tail.
 * @param {THREE.Group} root - The group to build the model into.
 * @returns {{type: string, legs: THREE.Mesh[], arms: THREE.Mesh[], wings: THREE.Mesh[], tail: THREE.Mesh, head: THREE.Mesh}}
 *   Populated quadruped rig.
 */
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

/**
 * Builds a mountain Rock Wraith — a hulking, stone-grey biped with glowing
 * amber eyes and massive arms but no tail.
 * @param {THREE.Group} root - The group to build the model into.
 * @returns {{type: string, legs: THREE.Mesh[], arms: THREE.Mesh[], wings: THREE.Mesh[], tail: null, head: THREE.Mesh}}
 *   Populated wraith rig.
 */
export function buildRockWraith(root) {
  const rig = createRig("wraith");
  addPart(root, [0.64, 0.86, 0.42], [0, 0.56, 0], 0x798086);
  rig.head = addPart(root, [0.48, 0.36, 0.34], [0, 1.18, 0], 0x6a737a);
  rig.arms.push(addPart(root, [0.26, 0.5, 0.16], [-0.45, 0.62, 0], 0x666f77));
  rig.arms.push(addPart(root, [0.26, 0.5, 0.16], [0.45, 0.62, 0], 0x666f77));
  addEyes(root, 1.2, 0.18, 0xffad33, 0.09);
  return rig;
}

/**
 * Builds a tundra Yeti — a massive white-furred humanoid with blue eyes and
 * a wide, imposing silhouette.
 * @param {THREE.Group} root - The group to build the model into.
 * @returns {{type: string, legs: THREE.Mesh[], arms: THREE.Mesh[], wings: THREE.Mesh[], tail: null, head: THREE.Mesh}}
 *   Populated humanoid rig.
 */
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

/**
 * Builds a skeleton enemy - a thin humanoid made of bone segments with a
 * skull face, rib cage, and long limbs.
 * @param {THREE.Group} root - The group to build the model into.
 * @returns {{type: string, legs: THREE.Mesh[], arms: THREE.Mesh[], wings: THREE.Mesh[], tail: null, head: THREE.Mesh}}
 *   Populated humanoid rig.
 */
export function buildSkeleton(root) {
  const rig = createRig("humanoid");
  const bone = 0xe5e2d6;
  const boneDark = 0xcac6b8;
  const shadow = 0x9f9a8a;

  addPart(root, [0.18, 0.82, 0.12], [0, 0.62, 0], boneDark);
  addPart(root, [0.46, 0.08, 0.16], [0, 0.9, 0], bone);
  addPart(root, [0.42, 0.08, 0.14], [0, 0.72, 0], bone);
  for (const y of [0.82, 0.74, 0.66, 0.58]) {
    addPart(root, [0.46, 0.03, 0.03], [0, y, 0.1], boneDark);
  }
  rig.head = addPart(root, [0.42, 0.46, 0.32], [0, 1.22, 0], bone);
  addPart(root, [0.22, 0.08, 0.06], [0, 1.03, 0.13], boneDark);
  rig.legs.push(addPart(root, [0.12, 0.62, 0.12], [-0.14, 0.31, 0], boneDark));
  rig.legs.push(addPart(root, [0.12, 0.62, 0.12], [0.14, 0.31, 0], boneDark));
  rig.arms.push(addPart(root, [0.1, 0.66, 0.1], [-0.32, 0.62, 0], boneDark));
  rig.arms.push(addPart(root, [0.1, 0.66, 0.1], [0.32, 0.62, 0], boneDark));
  addEyes(root, 1.22, 0.17, 0x1a1a1a, 0.08);
  addPart(root, [0.1, 0.04, 0.02], [0, 1.08, 0.17], shadow);
  return rig;
}

/**
 * Builds a wizard enemy - a robed caster with a hat, beard, and glowing eyes.
 * @param {THREE.Group} root - The group to build the model into.
 * @returns {{type: string, legs: THREE.Mesh[], arms: THREE.Mesh[], wings: THREE.Mesh[], tail: null, head: THREE.Mesh}}
 *   Populated humanoid rig.
 */
export function buildWizard(root) {
  const rig = createRig("humanoid");
  addPart(root, [0.62, 0.94, 0.38], [0, 0.48, 0], 0x5a3d8c);
  addPart(root, [0.42, 0.22, 0.28], [0, 0.08, 0], 0x37264f);
  rig.head = addPart(root, [0.44, 0.46, 0.34], [0, 1.18, 0], 0xd8c0a1);
  rig.legs.push(addPart(root, [0.16, 0.5, 0.16], [-0.17, 0.24, 0], 0x2c1f42));
  rig.legs.push(addPart(root, [0.16, 0.5, 0.16], [0.17, 0.24, 0], 0x2c1f42));
  rig.arms.push(addPart(root, [0.12, 0.46, 0.12], [-0.36, 0.64, 0], 0x6d50a8));
  rig.arms.push(addPart(root, [0.12, 0.46, 0.12], [0.36, 0.64, 0], 0x6d50a8));
  addPart(root, [0.18, 0.16, 0.2], [0, 0.98, 0.12], 0xc5c0d7);
  addEyes(root, 1.18, 0.18, 0xf58b24, 0.08);
  addPart(root, [0.54, 0.06, 0.42], [0, 1.42, 0], 0x2a1d42);
  addPart(root, [0.22, 0.34, 0.22], [0, 1.62, 0], 0x382356);
  addPart(root, [0.08, 0.18, 0.04], [-0.11, 1.02, 0.17], 0xd8d2c6);
  addPart(root, [0.08, 0.18, 0.04], [0.11, 1.02, 0.17], 0xd8d2c6);
  addPart(root, [0.12, 0.08, 0.03], [0, 1.06, 0.17], 0x6c4736);
  return rig;
}

/**
 * Creates a Three.js model for a mob or NPC by dispatching to the appropriate
 * builder function based on `def.key` (for regular mobs) or the `questgiver`
 * flag (for quest-giver NPCs). For hostile mobs a small red dot is added as a
 * hostile indicator. Falls back to the sheep model for unknown keys.
 * @param {{key: string}} def - Mob definition with at minimum a `key` property.
 * @param {boolean} hostile - If `true`, a red hostile marker dot is appended.
 * @param {boolean} [questgiver=false] - If `true`, bypasses `def.key` and builds the quest-giver model.
 * @returns {{root: THREE.Group, rig: Object}} The model group and its animation rig.
 */
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
    case "skeleton":
      rig = buildSkeleton(root);
      break;
    case "wizard":
      rig = buildWizard(root);
      break;
    default:
      rig = buildSheep(root);
      break;
  }

  if (hostile) addPart(root, [0.08, 0.08, 0.08], [0.24, 0.9, 0.2], 0x8f1414);
  return { root, rig };
}
