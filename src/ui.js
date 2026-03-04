import { BLOCKS, BlockId } from "./blocks.js";

function formatSlot(slot) {
  if (!slot || slot.id === BlockId.AIR || !slot.count) return "Empty";
  return `${BLOCKS[slot.id].name}\nx${slot.count}`;
}

export class UI {
  constructor(initialInventory) {
    this.overlay = document.getElementById("overlay");
    this.modeEl = document.getElementById("mode");
    this.coordsEl = document.getElementById("coords");
    this.fpsEl = document.getElementById("fps");
    this.hotbarEl = document.getElementById("hotbar");
    this.inventoryEl = document.getElementById("inventory");
    this.inventoryGridEl = document.getElementById("inventory-grid");

    this.hotbarSize = 8;
    this.inventory = initialInventory;
    this.hotbarIndex = 0;

    this.hotbarEls = [];
    this.inventoryEls = [];

    this.buildHotbar();
    this.buildInventory();
    this.setHotbarSelection(0);
  }

  buildHotbar() {
    this.hotbarEl.innerHTML = "";
    this.hotbarEls = [];
    for (let i = 0; i < this.hotbarSize; i++) {
      const slot = document.createElement("div");
      slot.className = "hotbar-slot";
      this.hotbarEl.appendChild(slot);
      this.hotbarEls.push(slot);
    }
    this.refreshHotbarLabels();
  }

  buildInventory() {
    this.inventoryGridEl.innerHTML = "";
    this.inventoryEls = [];

    for (let i = 0; i < this.inventory.length; i++) {
      const slot = document.createElement("button");
      slot.type = "button";
      slot.className = "inv-slot";
      slot.dataset.index = String(i);
      slot.addEventListener("click", () => {
        const item = this.inventory[i];
        if (!item || item.id === BlockId.AIR || !item.count) return;
        this.inventory[this.hotbarIndex] = { ...item };
        this.refreshHotbarLabels();
      });

      this.inventoryGridEl.appendChild(slot);
      this.inventoryEls.push(slot);
    }

    this.refreshInventoryLabels();
  }

  refreshHotbarLabels() {
    for (let i = 0; i < this.hotbarEls.length; i++) {
      const item = this.inventory[i] ?? { id: BlockId.AIR, count: 0 };
      const name = item.id === BlockId.AIR ? "Empty" : BLOCKS[item.id].name;
      this.hotbarEls[i].textContent = `${i + 1} ${name}`;
    }
  }

  refreshInventoryLabels() {
    for (let i = 0; i < this.inventoryEls.length; i++) {
      this.inventoryEls[i].textContent = formatSlot(this.inventory[i]);
    }
  }

  isInventoryOpen() {
    return this.inventoryEl.classList.contains("visible");
  }

  setInventoryVisible(visible) {
    this.inventoryEl.classList.toggle("visible", visible);
    this.refreshInventoryLabels();
  }

  getSelectedBlock() {
    return this.inventory[this.hotbarIndex]?.id ?? BlockId.DIRT;
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
    this.hotbarIndex = index;
    this.hotbarEls.forEach((el, i) => el.classList.toggle("active", i === index));
    this.inventoryEls.forEach((el, i) => el.classList.toggle("active", i === index));
  }
}
