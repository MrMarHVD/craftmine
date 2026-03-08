import { BlockId } from "../blocks.js";
import { WORLD_HEIGHT } from "../constants.js";

const BLOCK_COLOR = {
  [BlockId.AIR]: [12, 20, 32],
  [BlockId.GRASS]: [73, 153, 67],
  [BlockId.DIRT]: [120, 84, 54],
  [BlockId.STONE]: [125, 127, 134],
  [BlockId.SAND]: [214, 198, 128],
  [BlockId.LOG]: [111, 78, 50],
  [BlockId.LEAVES]: [55, 129, 61],
  [BlockId.WATER]: [62, 116, 201],
  [BlockId.BEDROCK]: [52, 52, 52],
  [BlockId.SNOW]: [229, 237, 244],
  [BlockId.CACTUS]: [56, 143, 65],
  [BlockId.FLOWER_RED]: [202, 45, 56],
  [BlockId.FLOWER_YELLOW]: [238, 200, 52],
  [BlockId.VINE]: [46, 116, 45],
  [BlockId.GRAVEL]: [131, 127, 120],
  [BlockId.MOSS]: [79, 126, 64],
  [BlockId.BRAMBLE]: [92, 116, 54],
  [BlockId.CASTLE_BRICK]: [120, 120, 130],
  [BlockId.APPLE]: [193, 36, 36],
  [BlockId.IRON_ORE]: [177, 126, 82],
  [BlockId.COAL_ORE]: [42, 44, 48],
  [BlockId.GOLD_ORE]: [222, 188, 62],
};

function colorForBlock(id) {
  return BLOCK_COLOR[id] ?? [110, 110, 116];
}

function findTopBlock(world, x, z) {
  const ix = Math.floor(x);
  const iz = Math.floor(z);
  const baseY = world.getSurfaceYAt(ix, iz);
  let y = Math.min(WORLD_HEIGHT - 1, baseY + 16);
  let id = BlockId.AIR;

  for (; y >= 1; y--) {
    id = world.getBlock(ix, y, iz);
    if (id !== BlockId.AIR) return id;
  }
  return BlockId.AIR;
}

export class TerrainMapRenderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.offscreen = document.createElement("canvas");
    this.offscreenCtx = this.offscreen.getContext("2d");
    this.blockWidth = 96;
    this.blockHeight = 96;
    this.lastRenderTime = 0;
    this.renderIntervalSec = 0.2;
  }

  setBlockSpan(width, height) {
    this.blockWidth = Math.max(24, Math.min(192, width | 0));
    this.blockHeight = Math.max(24, Math.min(192, height | 0));
  }

  render(world, playerPos, nowSec) {
    if (nowSec - this.lastRenderTime < this.renderIntervalSec) return;
    this.lastRenderTime = nowSec;

    const w = this.blockWidth;
    const h = this.blockHeight;
    this.offscreen.width = w;
    this.offscreen.height = h;
    const img = this.offscreenCtx.createImageData(w, h);
    const px = Math.floor(playerPos.x);
    const pz = Math.floor(playerPos.z);
    const halfW = Math.floor(w * 0.5);
    const halfH = Math.floor(h * 0.5);

    for (let mz = 0; mz < h; mz++) {
      for (let mx = 0; mx < w; mx++) {
        const wx = px + (mx - halfW);
        const wz = pz + (mz - halfH);
        const id = findTopBlock(world, wx, wz);
        const col = colorForBlock(id);
        const i = (mz * w + mx) * 4;
        img.data[i] = col[0];
        img.data[i + 1] = col[1];
        img.data[i + 2] = col[2];
        img.data[i + 3] = 255;
      }
    }

    this.offscreenCtx.putImageData(img, 0, 0);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.imageSmoothingEnabled = false;
    this.ctx.drawImage(this.offscreen, 0, 0, this.canvas.width, this.canvas.height);

    const cx = Math.floor(this.canvas.width * 0.5);
    const cy = Math.floor(this.canvas.height * 0.5);
    this.ctx.strokeStyle = "rgba(0,0,0,0.7)";
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(cx - 5, cy);
    this.ctx.lineTo(cx + 5, cy);
    this.ctx.moveTo(cx, cy - 5);
    this.ctx.lineTo(cx, cy + 5);
    this.ctx.stroke();
    this.ctx.strokeStyle = "rgba(255, 220, 120, 0.95)";
    this.ctx.lineWidth = 1.5;
    this.ctx.beginPath();
    this.ctx.moveTo(cx - 5, cy);
    this.ctx.lineTo(cx + 5, cy);
    this.ctx.moveTo(cx, cy - 5);
    this.ctx.lineTo(cx, cy + 5);
    this.ctx.stroke();
  }
}
