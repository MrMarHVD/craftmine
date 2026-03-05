import { isSolid } from "./blocks.js";
import { WORLD_HEIGHT } from "./constants.js";

export class MiniMap3D {
  constructor(canvas, world) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.world = world;
    this.visible = true;

    this.gridSize = 17;
    this.radiusBlocks = 64;
    this.cached = [];
    this.refreshTimer = 0;
  }

  setVisible(visible) {
    this.visible = visible;
    this.canvas.parentElement.style.display = visible ? "block" : "none";
  }

  setRadiusBlocks(radius) {
    this.radiusBlocks = Math.max(24, Math.min(220, radius));
  }

  getTopSolidY(x, z) {
    for (let y = WORLD_HEIGHT - 1; y >= 1; y--) {
      if (isSolid(this.world.getBlock(x, y, z))) return y;
    }
    return 0;
  }

  sample(playerPos) {
    const half = Math.floor(this.gridSize / 2);
    const step = (this.radiusBlocks * 2) / (this.gridSize - 1);
    this.cached.length = 0;

    for (let gz = -half; gz <= half; gz++) {
      const row = [];
      for (let gx = -half; gx <= half; gx++) {
        const wx = Math.floor(playerPos.x + gx * step);
        const wz = Math.floor(playerPos.z + gz * step);
        row.push(this.getTopSolidY(wx, wz));
      }
      this.cached.push(row);
    }
  }

  project(ix, iz, h, hMin, hMax) {
    const cx = this.canvas.width * 0.5;
    const cy = this.canvas.height * 0.18;
    const sx = (ix - iz) * 6 + cx;
    const normalized = hMax > hMin ? (h - hMin) / (hMax - hMin) : 0;
    const sy = (ix + iz) * 3.3 - normalized * 26 + cy;
    return [sx, sy];
  }

  draw(playerPos) {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    ctx.fillStyle = "rgba(8,14,20,0.92)";
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    if (this.cached.length === 0) return;

    let hMin = Infinity;
    let hMax = -Infinity;
    for (const row of this.cached) {
      for (const h of row) {
        hMin = Math.min(hMin, h);
        hMax = Math.max(hMax, h);
      }
    }

    const n = this.gridSize;
    ctx.strokeStyle = "rgba(124, 188, 236, 0.62)";
    ctx.lineWidth = 1;

    for (let z = 0; z < n; z++) {
      ctx.beginPath();
      for (let x = 0; x < n; x++) {
        const h = this.cached[z][x];
        const [sx, sy] = this.project(x - n / 2, z - n / 2, h, hMin, hMax);
        if (x === 0) ctx.moveTo(sx, sy);
        else ctx.lineTo(sx, sy);
      }
      ctx.stroke();
    }

    for (let x = 0; x < n; x++) {
      ctx.beginPath();
      for (let z = 0; z < n; z++) {
        const h = this.cached[z][x];
        const [sx, sy] = this.project(x - n / 2, z - n / 2, h, hMin, hMax);
        if (z === 0) ctx.moveTo(sx, sy);
        else ctx.lineTo(sx, sy);
      }
      ctx.stroke();
    }

    ctx.fillStyle = "#ffe28a";
    ctx.beginPath();
    ctx.arc(this.canvas.width * 0.5, this.canvas.height * 0.72, 3, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "rgba(214,230,247,0.92)";
    ctx.font = "11px Trebuchet MS";
    ctx.fillText(`Range: ${this.radiusBlocks} blocks`, 8, this.canvas.height - 10);
  }

  update(playerPos, dt) {
    if (!this.visible) return;

    this.refreshTimer -= dt;
    if (this.refreshTimer <= 0) {
      this.sample(playerPos);
      this.refreshTimer = 0.25;
    }

    this.draw(playerPos);
  }
}
