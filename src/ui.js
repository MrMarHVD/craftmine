import { BLOCKS, BlockId } from "./blocks.js";

function itemLabel(item) {
  if (!item || item.id === BlockId.AIR || item.count <= 0) return "Empty";
  return `${BLOCKS[item.id].name} x${item.count}`;
}

function slotItemOrEmpty(item) {
  return item && item.id !== undefined ? item : { id: BlockId.AIR, count: 0 };
}

export class UI {
  constructor(initialInventory) {
    this.overlay = document.getElementById("overlay");
    this.modeEl = document.getElementById("mode");
    this.coordsEl = document.getElementById("coords");
    this.fpsEl = document.getElementById("fps");
    this.coinsEl = document.getElementById("coins");
    this.hintEl = document.getElementById("hint");

    this.hotbarEl = document.getElementById("hotbar");
    this.inventoryEl = document.getElementById("inventory");
    this.inventoryGridEl = document.getElementById("inventory-grid");

    this.dialogueEl = document.getElementById("dialogue");
    this.dialogueTitleEl = document.getElementById("dialogue-title");
    this.dialogueTextEl = document.getElementById("dialogue-text");
    this.dialogueOptionsEl = document.getElementById("dialogue-options");

    this.hotbarSize = 8;
    this.inventory = initialInventory.map(slotItemOrEmpty);
    this.hotbarIndex = 0;
    this.coins = 0;

    this.hotbarEls = [];
    this.inventoryEls = [];

    this.buildHotbar();
    this.buildInventory();
    this.setHotbarSelection(0);
    this.updateCoins(0);
    this.setHint("");
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
        if (!item || item.id === BlockId.AIR || item.count <= 0) return;
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
      const item = slotItemOrEmpty(this.inventory[i]);
      const name = item.id === BlockId.AIR ? "Empty" : BLOCKS[item.id].name;
      const count = item.id === BlockId.AIR ? "" : ` x${item.count}`;
      this.hotbarEls[i].textContent = `${i + 1} ${name}${count}`;
    }
  }

  refreshInventoryLabels() {
    for (let i = 0; i < this.inventoryEls.length; i++) {
      this.inventoryEls[i].textContent = itemLabel(this.inventory[i]);
    }
  }

  isInventoryOpen() {
    return this.inventoryEl.classList.contains("visible");
  }

  setInventoryVisible(visible) {
    this.inventoryEl.classList.toggle("visible", visible);
    this.refreshInventoryLabels();
  }

  isDialogueOpen() {
    return this.dialogueEl.classList.contains("visible");
  }

  openDialogue(title, text, options) {
    this.dialogueTitleEl.textContent = title;
    this.dialogueTextEl.textContent = text;
    this.dialogueOptionsEl.innerHTML = "";

    for (const opt of options) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "dialogue-btn";
      btn.textContent = opt.label;
      btn.addEventListener("click", () => opt.onSelect());
      this.dialogueOptionsEl.appendChild(btn);
    }

    this.dialogueEl.classList.add("visible");
  }

  closeDialogue() {
    this.dialogueEl.classList.remove("visible");
    this.dialogueOptionsEl.innerHTML = "";
  }

  setHint(text) {
    this.hintEl.textContent = text;
  }

  getSelectedBlock() {
    const item = this.inventory[this.hotbarIndex];
    return item?.id ?? BlockId.DIRT;
  }

  consumeSelectedBlock() {
    const item = this.inventory[this.hotbarIndex];
    if (!item || item.id === BlockId.AIR || item.count <= 0) return false;
    item.count -= 1;
    if (item.count <= 0) {
      item.count = 0;
      item.id = BlockId.AIR;
    }
    this.refreshHotbarLabels();
    this.refreshInventoryLabels();
    return true;
  }

  addItem(blockId, amount) {
    if (blockId === BlockId.AIR || amount <= 0) return;

    let remaining = amount;
    for (const slot of this.inventory) {
      if (slot.id === blockId && slot.count < 999) {
        const add = Math.min(999 - slot.count, remaining);
        slot.count += add;
        remaining -= add;
        if (remaining === 0) break;
      }
    }

    if (remaining > 0) {
      for (const slot of this.inventory) {
        if (slot.id === BlockId.AIR || slot.count <= 0) {
          slot.id = blockId;
          slot.count = remaining;
          break;
        }
      }
    }

    this.refreshHotbarLabels();
    this.refreshInventoryLabels();
  }

  getItemCount(blockId) {
    let total = 0;
    for (const slot of this.inventory) {
      if (slot.id === blockId) total += slot.count;
    }
    return total;
  }

  consumeItem(blockId, amount) {
    if (amount <= 0) return true;
    if (this.getItemCount(blockId) < amount) return false;

    let remaining = amount;
    for (const slot of this.inventory) {
      if (slot.id !== blockId || remaining <= 0) continue;
      const dec = Math.min(slot.count, remaining);
      slot.count -= dec;
      remaining -= dec;
      if (slot.count <= 0) {
        slot.id = BlockId.AIR;
        slot.count = 0;
      }
    }

    this.refreshHotbarLabels();
    this.refreshInventoryLabels();
    return true;
  }

  updateCoins(coins) {
    this.coins = coins;
    this.coinsEl.textContent = `Coins: ${coins}`;
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
