import * as THREE from "three";
import { BLOCKS, FACE } from "./blocks.js";

const TILE = 16;
const ATLAS_COLS = 4;
const TILES = [
  "grass_top",
  "grass_side",
  "dirt",
  "stone",
  "sand",
  "log_side",
  "log_top",
  "leaves",
  "water",
  "bedrock",
];

function withNoise(ctx, baseColor, variance = 12, alpha = 1) {
  const [r, g, b] = baseColor;
  const img = ctx.createImageData(TILE, TILE);
  for (let i = 0; i < img.data.length; i += 4) {
    const n = (Math.random() * variance - variance * 0.5) | 0;
    img.data[i] = Math.max(0, Math.min(255, r + n));
    img.data[i + 1] = Math.max(0, Math.min(255, g + n));
    img.data[i + 2] = Math.max(0, Math.min(255, b + n));
    img.data[i + 3] = Math.floor(255 * alpha);
  }
  ctx.putImageData(img, 0, 0);
}

function drawTile(tile) {
  const c = document.createElement("canvas");
  c.width = TILE;
  c.height = TILE;
  const ctx = c.getContext("2d", { willReadFrequently: true });

  if (tile === "grass_top") {
    withNoise(ctx, [64, 164, 68], 26);
  } else if (tile === "grass_side") {
    withNoise(ctx, [126, 94, 62], 18);
    ctx.fillStyle = "rgba(72, 170, 80, 0.9)";
    ctx.fillRect(0, 0, TILE, 4);
    ctx.fillStyle = "rgba(60, 120, 42, 0.35)";
    for (let x = 0; x < TILE; x += 2) {
      ctx.fillRect(x, 3 + ((x * 7) % 3), 1, 1);
    }
  } else if (tile === "dirt") {
    withNoise(ctx, [121, 86, 55], 20);
  } else if (tile === "stone") {
    withNoise(ctx, [126, 126, 130], 20);
  } else if (tile === "sand") {
    withNoise(ctx, [214, 198, 128], 20);
  } else if (tile === "log_side") {
    withNoise(ctx, [121, 90, 58], 18);
    ctx.fillStyle = "rgba(90, 58, 30, 0.28)";
    for (let x = 0; x < TILE; x += 4) ctx.fillRect(x, 0, 2, TILE);
  } else if (tile === "log_top") {
    withNoise(ctx, [159, 122, 82], 10);
    ctx.strokeStyle = "rgba(108, 74, 43, 0.75)";
    ctx.lineWidth = 1;
    ctx.strokeRect(2.5, 2.5, TILE - 5, TILE - 5);
    ctx.strokeRect(5.5, 5.5, TILE - 11, TILE - 11);
  } else if (tile === "leaves") {
    withNoise(ctx, [63, 145, 64], 36, 0.8);
  } else if (tile === "water") {
    withNoise(ctx, [62, 119, 212], 16, 0.72);
    ctx.fillStyle = "rgba(160, 210, 255, 0.2)";
    ctx.fillRect(0, 2, TILE, 2);
    ctx.fillRect(0, 9, TILE, 1);
  } else if (tile === "bedrock") {
    withNoise(ctx, [52, 52, 52], 28);
    ctx.fillStyle = "rgba(96,96,96,0.32)";
    for (let i = 0; i < 24; i++) {
      ctx.fillRect((Math.random() * TILE) | 0, (Math.random() * TILE) | 0, 1, 1);
    }
  }

  return c;
}

export function createAtlas() {
  const rows = Math.ceil(TILES.length / ATLAS_COLS);
  const atlas = document.createElement("canvas");
  atlas.width = ATLAS_COLS * TILE;
  atlas.height = rows * TILE;
  const ctx = atlas.getContext("2d");

  const uvMap = {};
  TILES.forEach((name, i) => {
    const tx = i % ATLAS_COLS;
    const ty = Math.floor(i / ATLAS_COLS);
    uvMap[name] = { tx, ty };
    ctx.drawImage(drawTile(name), tx * TILE, ty * TILE);
  });

  const texture = new THREE.CanvasTexture(atlas);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestMipMapNearestFilter;
  texture.generateMipmaps = true;
  texture.colorSpace = THREE.SRGBColorSpace;

  const invW = 1 / atlas.width;
  const invH = 1 / atlas.height;

  function getUVRect(tileName) {
    const p = uvMap[tileName];
    const pad = 0.02;
    const u0 = (p.tx * TILE + pad) * invW;
    const v0 = 1 - ((p.ty + 1) * TILE - pad) * invH;
    const u1 = ((p.tx + 1) * TILE - pad) * invW;
    const v1 = 1 - (p.ty * TILE + pad) * invH;
    return [u0, v0, u1, v1];
  }

  function getFaceUVs(blockId, face) {
    const b = BLOCKS[blockId];
    const t = b.textures;
    const key = t.all
      ? t.all
      : face === FACE.PY
        ? t.top
        : face === FACE.NY
          ? t.bottom
          : t.side;
    return getUVRect(key);
  }

  return { texture, getFaceUVs };
}
