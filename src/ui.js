import { BLOCKS } from "./blocks.js";

export class UI {
  constructor(hotbarBlocks) {
    this.overlay = document.getElementById("overlay");
    this.modeEl = document.getElementById("mode");
    this.coordsEl = document.getElementById("coords");
    this.fpsEl = document.getElementById("fps");
    this.hotbarEl = document.getElementById("hotbar");
    this.hotbarBlocks = hotbarBlocks;
    this.slotEls = [];

    this.buildHotbar();
  }

  buildHotbar() {
    this.hotbarEl.innerHTML = "";
    this.slotEls = [];
    this.hotbarBlocks.forEach((id, i) => {
      const slot = document.createElement("div");
      slot.className = "hotbar-slot";
      slot.textContent = `${i + 1} ${BLOCKS[id].name}`;
      this.hotbarEl.appendChild(slot);
      this.slotEls.push(slot);
    });
  }

  setOverlayVisible(visible) {
    this.overlay.classList.toggle("visible", visible);
  }

  updateMode(flyMode) {
    this.modeEl.textContent = `Mode: ${flyMode ? "Fly" : "Walk"}`;
  }

  updateCoords(pos) {
    this.coordsEl.textContent = `X: ${pos.x.toFixed(1)} Y: ${pos.y.toFixed(1)} Z: ${pos.z.toFixed(1)}`;
  }

  updateFPS(fps) {
    this.fpsEl.textContent = `FPS: ${fps.toFixed(0)}`;
  }

  setHotbarSelection(index) {
    this.slotEls.forEach((el, i) => el.classList.toggle("active", i === index));
  }
}
