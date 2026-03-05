export class MiniMap3D {
  constructor(canvas, world) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.world = world;
    this.visible = true;
    this.sampleStep = 4;
    this.gridSize = 19;
    this.cachedHeights = [];
    this.refreshTimer = 0;
  }

  setVisible(visible) {
    this.visible = visible;
    this.canvas.parentElement.style.display = visible ? "block" : "none";
  }

  sample(playerPos) {
    const half = Math.floor(this.gridSize / 2);
    this.cachedHeights = [];
    for (let gz = -half; gz <= half; gz++) {
      const row = [];
      for (let gx = -half; gx <= half; gx++) {
        const wx = Math.floor(playerPos.x + gx * this.sampleStep);
        const wz = Math.floor(playerPos.z + gz * this.sampleStep);
        row.push(this.world.getSurfaceYAt(wx, wz));
      }
      this.cachedHeights.push(row);
    }
  }

  project(ix, iz, h) {
    const cx = this.canvas.width * 0.5;
    const cy = 42;
    const sx = (ix - iz) * 5 + cx;
    const sy = (ix + iz) * 2.5 - h * 0.25 + cy;
    return [sx, sy];
  }

  draw(playerPos) {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    ctx.fillStyle = "rgba(8,14,20,0.9)";
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    if (this.cachedHeights.length === 0) return;

    const n = this.gridSize;
    ctx.strokeStyle = "rgba(123, 184, 232, 0.55)";
    ctx.lineWidth = 1;

    for (let z = 0; z < n; z++) {
      ctx.beginPath();
      for (let x = 0; x < n; x++) {
        const h = this.cachedHeights[z][x];
        const [sx, sy] = this.project(x - n / 2, z - n / 2, h);
        if (x === 0) ctx.moveTo(sx, sy);
        else ctx.lineTo(sx, sy);
      }
      ctx.stroke();
    }

    for (let x = 0; x < n; x++) {
      ctx.beginPath();
      for (let z = 0; z < n; z++) {
        const h = this.cachedHeights[z][x];
        const [sx, sy] = this.project(x - n / 2, z - n / 2, h);
        if (z === 0) ctx.moveTo(sx, sy);
        else ctx.lineTo(sx, sy);
      }
      ctx.stroke();
    }

    ctx.fillStyle = "#ffe28a";
    ctx.beginPath();
    ctx.arc(this.canvas.width * 0.5, this.canvas.height * 0.7, 3, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "rgba(214,230,247,0.9)";
    ctx.font = "11px Trebuchet MS";
    ctx.fillText(`Map X:${playerPos.x.toFixed(0)} Z:${playerPos.z.toFixed(0)}`, 8, this.canvas.height - 10);
  }

  update(playerPos, dt) {
    if (!this.visible) return;
    this.refreshTimer -= dt;
    if (this.refreshTimer <= 0) {
      this.sample(playerPos);
      this.refreshTimer = 0.2;
    }
    this.draw(playerPos);
  }
}
