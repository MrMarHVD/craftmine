/**
 * @module rendering/renderer
 * @description Factory functions that create and configure the core Three.js
 * rendering objects used by the game. Each function is called once during
 * startup in `main.js` and returns the object for the caller to store. Keeping
 * setup logic here rather than in `main.js` makes each concern independently
 * testable and easy to change without touching game logic.
 */

import * as THREE from "three";
import { CHUNK_SIZE } from "../constants.js";

/**
 * Creates and configures the Three.js `WebGLRenderer` attached to the given
 * canvas element. Anti-aliasing is disabled for performance; pixel ratio is
 * capped at 2 to limit GPU load on high-DPI displays; output color space is
 * set to sRGB for correct texture reproduction.
 * @param {HTMLCanvasElement} canvas - The `<canvas>` element to render into.
 * @returns {THREE.WebGLRenderer} The configured renderer.
 */
export function createRenderer(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  return renderer;
}

/**
 * Creates the Three.js `Scene` with a sky-blue background and matching
 * distance fog that fades chunks out over the render distance. Also adds an
 * ambient light and a directional "sun" light to provide basic Lambertian
 * shading across the voxel terrain.
 * @returns {THREE.Scene} The configured scene.
 */
export function createScene() {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x89cfff);
  scene.fog = new THREE.Fog(0x89cfff, CHUNK_SIZE * 4.2, CHUNK_SIZE * 7.5);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
  scene.add(ambientLight);

  const sun = new THREE.DirectionalLight(0xffffff, 0.8);
  sun.position.set(120, 200, 50);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1536, 1536);
  sun.shadow.bias = -0.0004;
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 520;
  sun.shadow.camera.left = -110;
  sun.shadow.camera.right = 110;
  sun.shadow.camera.top = 110;
  sun.shadow.camera.bottom = -110;
  scene.add(sun.target);
  scene.add(sun);

  const sunVisual = new THREE.Group();
  const sunCore = new THREE.Mesh(
    new THREE.SphereGeometry(2.6, 24, 16),
    new THREE.MeshBasicMaterial({
      color: 0xfff3a6,
      fog: false,
      toneMapped: false,
      depthWrite: false,
    })
  );
  const sunGlow = new THREE.Mesh(
    new THREE.SphereGeometry(4.8, 24, 16),
    new THREE.MeshBasicMaterial({
      color: 0xffd66b,
      transparent: true,
      opacity: 0.42,
      fog: false,
      toneMapped: false,
      depthWrite: false,
      side: THREE.DoubleSide,
    })
  );
  sunVisual.add(sunGlow);
  sunVisual.add(sunCore);
  scene.add(sunVisual);

  return { scene, sunLight: sun, ambientLight, sunVisual };
}

/**
 * Creates the player's perspective camera with a 75° horizontal FOV and a
 * far clipping plane of 600 units, which comfortably exceeds the fog
 * far distance so chunks are never clipped before they fade out.
 * @returns {THREE.PerspectiveCamera} The configured camera.
 */
export function createCamera() {
  return new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 600);
}

/**
 * Creates the two `MeshLambertMaterial` instances — one for opaque blocks and
 * one for transparent blocks — both sampling the provided texture atlas.
 * The transparent material uses `DoubleSide` rendering, alpha test at 0.15,
 * and disabled depth writing so that overlapping transparent faces (e.g.,
 * leaves in front of water) are handled correctly.
 * @param {Object} atlas - Texture atlas from `createAtlas()`, providing `atlas.texture`.
 * @returns {{matOpaque: THREE.MeshLambertMaterial, matTransparent: THREE.MeshLambertMaterial}}
 *   The opaque and transparent materials.
 */
export function createMaterials(atlas) {
  const matOpaque = new THREE.MeshLambertMaterial({ map: atlas.texture, vertexColors: true });
  const matTransparent = new THREE.MeshLambertMaterial({
    map: atlas.texture,
    vertexColors: true,
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    alphaTest: 0.15,
  });
  return { matOpaque, matTransparent };
}

/**
 * Creates and adds to the scene a yellow wireframe box used to highlight the
 * block the player is currently targeting. The box is slightly oversized
 * (1.01³) to sit just outside the block face and avoid z-fighting. It starts
 * invisible; `main.js` shows and positions it each frame when `currentTarget`
 * is non-null.
 * @param {THREE.Scene} scene - The scene to add the target box to.
 * @returns {THREE.LineSegments} The target highlight box.
 */
export function createTargetBox(scene) {
  const targetBox = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.BoxGeometry(1.01, 1.01, 1.01)),
    new THREE.LineBasicMaterial({ color: 0xffff66 })
  );
  targetBox.visible = false;
  scene.add(targetBox);
  return targetBox;
}
