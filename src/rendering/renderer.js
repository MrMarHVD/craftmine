import * as THREE from "three";
import { CHUNK_SIZE } from "../constants.js";

export function createRenderer(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  return renderer;
}

export function createScene() {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x89cfff);
  scene.fog = new THREE.Fog(0x89cfff, CHUNK_SIZE * 4.2, CHUNK_SIZE * 7.5);

  scene.add(new THREE.AmbientLight(0xffffff, 0.7));
  const sun = new THREE.DirectionalLight(0xffffff, 0.8);
  sun.position.set(120, 200, 50);
  scene.add(sun);

  return scene;
}

export function createCamera() {
  return new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 600);
}

export function createMaterials(atlas) {
  const matOpaque = new THREE.MeshLambertMaterial({ map: atlas.texture });
  const matTransparent = new THREE.MeshLambertMaterial({
    map: atlas.texture,
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    alphaTest: 0.15,
  });
  return { matOpaque, matTransparent };
}

export function createTargetBox(scene) {
  const targetBox = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.BoxGeometry(1.01, 1.01, 1.01)),
    new THREE.LineBasicMaterial({ color: 0xffff66 })
  );
  targetBox.visible = false;
  scene.add(targetBox);
  return targetBox;
}
