import * as THREE from "three";
import { BLOCKS, FACE } from "../blocks.js";

const TILE = 16;
const ATLAS_COLS = 6;
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
  "snow",
  "cactus_side",
  "cactus_top",
  "flower_red",
  "flower_yellow",
  "vine",
  "gravel",
  "moss",
  "castle_brick",
  "apple",
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
  } else if (tile === "snow") {
    withNoise(ctx, [230, 238, 244], 9);
    ctx.fillStyle = "rgba(188, 206, 220, 0.4)";
    for (let i = 0; i < TILE; i += 3) ctx.fillRect(i, (i * 5) % TILE, 1, 1);
  } else if (tile === "cactus_side") {
    withNoise(ctx, [54, 146, 66], 15);
    ctx.fillStyle = "rgba(36,98,44,0.42)";
    for (let x = 1; x < TILE; x += 3) ctx.fillRect(x, 0, 1, TILE);
  } else if (tile === "cactus_top") {
    withNoise(ctx, [70, 152, 80], 14);
    ctx.fillStyle = "rgba(35,93,42,0.6)";
    ctx.fillRect(3, 3, TILE - 6, TILE - 6);
  } else if (tile === "flower_red") {
    ctx.clearRect(0, 0, TILE, TILE);
    ctx.fillStyle = "rgba(56,144,62,0.85)";
    ctx.fillRect(7, 5, 2, 11);
    ctx.fillStyle = "rgba(196,34,44,0.92)";
    ctx.fillRect(5, 2, 6, 4);
  } else if (tile === "flower_yellow") {
    ctx.clearRect(0, 0, TILE, TILE);
    ctx.fillStyle = "rgba(56,146,64,0.85)";
    ctx.fillRect(7, 5, 2, 11);
    ctx.fillStyle = "rgba(242,199,44,0.92)";
    ctx.fillRect(5, 2, 6, 4);
  } else if (tile === "vine") {
    ctx.clearRect(0, 0, TILE, TILE);
    ctx.fillStyle = "rgba(48,128,52,0.72)";
    for (let i = 0; i < 6; i++) {
      const x = 2 + ((i * 5) % 12);
      ctx.fillRect(x, 1 + i * 2, 2, 3);
    }
  } else if (tile === "gravel") {
    withNoise(ctx, [132, 128, 121], 22);
    ctx.fillStyle = "rgba(88,84,81,0.25)";
    for (let i = 0; i < 16; i++) {
      ctx.fillRect((Math.random() * TILE) | 0, (Math.random() * TILE) | 0, 1, 1);
    }
  } else if (tile === "moss") {
    withNoise(ctx, [80, 126, 64], 18);
    ctx.fillStyle = "rgba(36,74,30,0.18)";
    for (let i = 0; i < 16; i++) {
      ctx.fillRect((Math.random() * TILE) | 0, (Math.random() * TILE) | 0, 2, 1);
    }
  } else if (tile === "castle_brick") {
    withNoise(ctx, [118, 117, 124], 12);
    ctx.fillStyle = "rgba(68,68,74,0.48)";
    for (let y = 0; y < TILE; y += 4) ctx.fillRect(0, y, TILE, 1);
    for (let x = 0; x < TILE; x += 8) {
      ctx.fillRect(x, 0, 1, 4);
      ctx.fillRect(x + 4, 4, 1, 4);
      ctx.fillRect(x, 8, 1, 4);
      ctx.fillRect(x + 4, 12, 1, 4);
    }
  } else if (tile === "apple") {
    ctx.clearRect(0, 0, TILE, TILE);
    ctx.fillStyle = "rgba(196,36,36,0.92)";
    ctx.fillRect(4, 4, 8, 8);
    ctx.fillStyle = "rgba(232,120,120,0.55)";
    ctx.fillRect(5, 5, 3, 3);
    ctx.fillStyle = "rgba(76,138,58,0.8)";
    ctx.fillRect(7, 2, 2, 2);
    ctx.fillStyle = "rgba(112,84,38,0.8)";
    ctx.fillRect(8, 1, 1, 2);
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
