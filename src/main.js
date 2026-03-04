import * as THREE from "three";
import { BlockId, isBreakable, isSolid } from "./blocks.js";
import { CHUNK_SIZE, REACH_DISTANCE } from "./constants.js";
import { Player } from "./player.js";
import { createAtlas } from "./textureAtlas.js";
import { UI } from "./ui.js";
import { voxelRaycast } from "./raycast.js";
import { World } from "./world.js";

const canvas = document.getElementById("app");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x89cfff);
scene.fog = new THREE.Fog(0x89cfff, CHUNK_SIZE * 4.2, CHUNK_SIZE * 7.5);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 600);
const atlas = createAtlas();

const matOpaque = new THREE.MeshLambertMaterial({ map: atlas.texture });
const matTransparent = new THREE.MeshLambertMaterial({
  map: atlas.texture,
  transparent: true,
  depthWrite: false,
  side: THREE.DoubleSide,
  alphaTest: 0.15,
});

scene.add(new THREE.AmbientLight(0xffffff, 0.7));
const sun = new THREE.DirectionalLight(0xffffff, 0.8);
sun.position.set(120, 200, 50);
scene.add(sun);

const worldSeed = 20260304;
const world = new World(scene, atlas, worldSeed);
world.setupMaterials(matOpaque, matTransparent);

const player = new Player(camera, canvas);

const inventory = [
  { id: BlockId.GRASS, count: 64 },
  { id: BlockId.DIRT, count: 64 },
  { id: BlockId.STONE, count: 64 },
  { id: BlockId.SAND, count: 64 },
  { id: BlockId.LOG, count: 64 },
  { id: BlockId.LEAVES, count: 64 },
  { id: BlockId.CACTUS, count: 32 },
  { id: BlockId.SNOW, count: 64 },
  { id: BlockId.MOSS, count: 48 },
  { id: BlockId.GRAVEL, count: 64 },
  { id: BlockId.FLOWER_RED, count: 32 },
  { id: BlockId.FLOWER_YELLOW, count: 32 },
  { id: BlockId.VINE, count: 48 },
  { id: BlockId.WATER, count: 32 },
  { id: BlockId.AIR, count: 0 },
  { id: BlockId.AIR, count: 0 },
  { id: BlockId.AIR, count: 0 },
  { id: BlockId.AIR, count: 0 },
  { id: BlockId.AIR, count: 0 },
  { id: BlockId.AIR, count: 0 },
  { id: BlockId.AIR, count: 0 },
  { id: BlockId.AIR, count: 0 },
  { id: BlockId.AIR, count: 0 },
  { id: BlockId.AIR, count: 0 },
  { id: BlockId.AIR, count: 0 },
  { id: BlockId.AIR, count: 0 },
  { id: BlockId.AIR, count: 0 },
  { id: BlockId.AIR, count: 0 },
  { id: BlockId.AIR, count: 0 },
  { id: BlockId.AIR, count: 0 },
];

const ui = new UI(inventory);
ui.setHotbarSelection(0);

const dir = new THREE.Vector3();
const targetBox = new THREE.LineSegments(
  new THREE.EdgesGeometry(new THREE.BoxGeometry(1.01, 1.01, 1.01)),
  new THREE.LineBasicMaterial({ color: 0xffff66 })
);
targetBox.visible = false;
scene.add(targetBox);

let selectedIndex = 0;
let currentTarget = null;

function isInventoryOpen() {
  return ui.isInventoryOpen();
}

function refreshOverlayVisibility() {
  const locked = document.pointerLockElement === canvas;
  ui.setOverlayVisible(!locked && !isInventoryOpen());
}

function getGroundY(x, z) {
  for (let y = 127; y >= 1; y--) {
    if (isSolid(world.getBlock(x, y, z)) && !isSolid(world.getBlock(x, y + 1, z))) {
      return y + 1;
    }
  }
  return 45;
}

player.position.set(0.5, getGroundY(0, 0) + 2, 0.5);
player.syncCamera();

function resize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", resize);
window.addEventListener("contextmenu", (e) => e.preventDefault());

canvas.addEventListener("click", () => {
  if (isInventoryOpen()) return;
  if (document.pointerLockElement !== canvas) canvas.requestPointerLock();
});

document.addEventListener("pointerlockchange", () => {
  refreshOverlayVisibility();
});

window.addEventListener("wheel", (e) => {
  if (document.pointerLockElement !== canvas || isInventoryOpen()) return;
  selectedIndex += e.deltaY > 0 ? 1 : -1;
  if (selectedIndex < 0) selectedIndex = ui.hotbarSize - 1;
  if (selectedIndex >= ui.hotbarSize) selectedIndex = 0;
  ui.setHotbarSelection(selectedIndex);
});

window.addEventListener("keydown", (e) => {
  if (e.code === "KeyE") {
    if (isInventoryOpen()) {
      ui.setInventoryVisible(false);
      canvas.requestPointerLock();
    } else {
      ui.setInventoryVisible(true);
      document.exitPointerLock();
    }
    refreshOverlayVisibility();
    return;
  }

  if (/Digit[1-9]/.test(e.code)) {
    const i = Number(e.code.slice(-1)) - 1;
    if (i >= 0 && i < ui.hotbarSize) {
      selectedIndex = i;
      ui.setHotbarSelection(selectedIndex);
    }
  }
});

function canPlaceAt(x, y, z) {
  const blockMinX = x;
  const blockMaxX = x + 1;
  const blockMinY = y;
  const blockMaxY = y + 1;
  const blockMinZ = z;
  const blockMaxZ = z + 1;
  const aabb = player.getAABB();

  return !(
    aabb.maxX > blockMinX &&
    aabb.minX < blockMaxX &&
    aabb.maxY > blockMinY &&
    aabb.minY < blockMaxY &&
    aabb.maxZ > blockMinZ &&
    aabb.minZ < blockMaxZ
  );
}

window.addEventListener("mousedown", (e) => {
  if (document.pointerLockElement !== canvas || isInventoryOpen()) return;
  if (!currentTarget) return;

  if (e.button === 0) {
    if (isBreakable(currentTarget.id)) world.setBlock(currentTarget.x, currentTarget.y, currentTarget.z, BlockId.AIR);
  }

  if (e.button === 2) {
    const placeX = currentTarget.previous.x;
    const placeY = currentTarget.previous.y;
    const placeZ = currentTarget.previous.z;

    if (world.getBlock(placeX, placeY, placeZ) !== BlockId.AIR) return;
    if (!canPlaceAt(placeX, placeY, placeZ)) return;

    const placeId = ui.getSelectedBlock();
    if (placeId === BlockId.AIR || placeId === BlockId.BEDROCK) return;
    world.setBlock(placeX, placeY, placeZ, placeId);
  }
});

let prevTime = performance.now();
let fpsAccum = 0;
let fpsFrames = 0;
let chunkTick = 0;

function tick(now) {
  const dt = Math.min(0.05, (now - prevTime) / 1000);
  prevTime = now;

  if (!isInventoryOpen()) {
    player.update(world, dt);
  }

  chunkTick += dt;
  if (chunkTick >= 0.14) {
    world.loadChunksAround(player.position.x, player.position.z);
    chunkTick = 0;
  }

  world.rebuildOneChunk();
  world.rebuildOneChunk();

  camera.getWorldDirection(dir);
  currentTarget = voxelRaycast(world, camera.position, dir, REACH_DISTANCE);
  if (currentTarget && !isInventoryOpen()) {
    targetBox.visible = true;
    targetBox.position.set(currentTarget.x + 0.5, currentTarget.y + 0.5, currentTarget.z + 0.5);
  } else {
    targetBox.visible = false;
  }

  ui.updateMode(player.flyMode);
  ui.updateCoords(player.position);

  fpsAccum += dt;
  fpsFrames++;
  if (fpsAccum >= 0.25) {
    ui.updateFPS(fpsFrames / fpsAccum);
    fpsAccum = 0;
    fpsFrames = 0;
  }

  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}

world.loadChunksAround(player.position.x, player.position.z);
refreshOverlayVisibility();
requestAnimationFrame(tick);
