import { BLOCKS, BlockId } from "../blocks.js";
import { createIconMap } from "./icons.js";

function slotItemOrEmpty(item) {
  return item && item.id !== undefined ? item : { id: BlockId.AIR, count: 0 };
}

function setSlotVisual(node, item, icons, options = {}) {
  const { hotbarIndexLabel = null } = options;
  const isEmpty = !item || item.id === BlockId.AIR || item.count <= 0;

  node.icon.style.display = isEmpty ? "none" : "block";
  if (!isEmpty) {
    node.icon.style.backgroundImage = `url(${icons.get(item.id)})`;
  }

  node.name.textContent = isEmpty ? "Empty" : BLOCKS[item.id].name;
  node.count.textContent = isEmpty ? "" : `x${item.count}`;
  if (hotbarIndexLabel !== null) {
    node.index.textContent = String(hotbarIndexLabel);
  }
}

export class UI {
  constructor(initialInventory) {
    this.overlay = document.getElementById("overlay");
    this.modeEl = document.getElementById("mode");
    this.coordsEl = document.getElementById("coords");
    this.fpsEl = document.getElementById("fps");
    this.coinsEl = document.getElementById("coins");
    this.hintEl = document.getElementById("hint");

    this.healthWrapEl = document.getElementById("health-wrap");
    this.healthFillEl = document.getElementById("health-bar-fill");

    this.hotbarEl = document.getElementById("hotbar");
    this.inventoryEl = document.getElementById("inventory");
    this.inventoryGridEl = document.getElementById("inventory-grid");

    this.dialogueEl = document.getElementById("dialogue");
    this.dialogueTitleEl = document.getElementById("dialogue-title");
    this.dialogueTextEl = document.getElementById("dialogue-text");
    this.dialogueOptionsEl = document.getElementById("dialogue-options");

    this.debugPaneEl = document.getElementById("debug-pane");
    this.debugWalkEl = document.getElementById("dbg-walk");
    this.debugWalkValueEl = document.getElementById("dbg-walk-value");
    this.debugFlyEl = document.getElementById("dbg-fly");
    this.debugFlyValueEl = document.getElementById("dbg-fly-value");
    this.debugMapWidthEl = document.getElementById("dbg-map-width");
    this.debugMapWidthValueEl = document.getElementById("dbg-map-width-value");
    this.debugMapHeightEl = document.getElementById("dbg-map-height");
    this.debugMapHeightValueEl = document.getElementById("dbg-map-height-value");
    this.debugHealthEl = document.getElementById("dbg-health");
    this.debugAgroEl = document.getElementById("dbg-agro");

    this.hotbarSize = 8;
    this.inventory = initialInventory.map(slotItemOrEmpty);
    this.hotbarIndex = 0;
    this.coins = 0;
    this.icons = createIconMap();

    this.hotbarEls = [];
    this.inventoryEls = [];

    this.buildHotbar();
    this.buildInventory();
    this.setHotbarSelection(0);
    this.updateCoins(0);
    this.setHint("");
    this.updateHealth(100, 100, true);
  }

  buildHotbar() {
    this.hotbarEl.innerHTML = "";
    this.hotbarEls = [];

    for (let i = 0; i < this.hotbarSize; i++) {
      const root = document.createElement("div");
      root.className = "hotbar-slot";

      const index = document.createElement("div");
      index.className = "slot-index";
      const icon = document.createElement("div");
      icon.className = "slot-icon";
      const name = document.createElement("div");
      name.className = "slot-name";
      const count = document.createElement("div");
      count.className = "slot-count";

      root.appendChild(index);
      root.appendChild(icon);
      root.appendChild(name);
      root.appendChild(count);

      this.hotbarEl.appendChild(root);
      this.hotbarEls.push({ root, index, icon, name, count });
    }

    this.refreshHotbarLabels();
  }

  buildInventory() {
    this.inventoryGridEl.innerHTML = "";
    this.inventoryEls = [];

    for (let i = 0; i < this.inventory.length; i++) {
      const root = document.createElement("button");
      root.type = "button";
      root.className = "inv-slot";
      root.dataset.index = String(i);

      const icon = document.createElement("div");
      icon.className = "slot-icon";
      const name = document.createElement("div");
      name.className = "slot-name";
      const count = document.createElement("div");
      count.className = "slot-count";

      root.appendChild(icon);
      root.appendChild(name);
      root.appendChild(count);

      root.addEventListener("click", () => {
        const item = this.inventory[i];
        if (!item || item.id === BlockId.AIR || item.count <= 0) return;
        this.inventory[this.hotbarIndex] = { ...item };
        this.refreshHotbarLabels();
      });

      this.inventoryGridEl.appendChild(root);
      this.inventoryEls.push({ root, icon, name, count });
    }

    this.refreshInventoryLabels();
  }

  setupDebugPane(config, onChange) {
    this.debugWalkEl.value = String(config.walkSpeed);
    this.debugFlyEl.value = String(config.flySpeed);
    this.debugMapWidthEl.value = String(config.mapWidthBlocks);
    this.debugMapHeightEl.value = String(config.mapHeightBlocks);
    this.debugHealthEl.checked = !!config.healthEnabled;
    this.debugAgroEl.checked = !!config.agroEnabled;
    this.updateDebugValues(config.walkSpeed, config.flySpeed, config.mapWidthBlocks, config.mapHeightBlocks);

    this.debugWalkEl.addEventListener("input", () => {
      const walkSpeed = Number(this.debugWalkEl.value);
      this.updateDebugValues(walkSpeed, Number(this.debugFlyEl.value));
      onChange({ walkSpeed });
    });

    this.debugFlyEl.addEventListener("input", () => {
      const flySpeed = Math.min(300, Number(this.debugFlyEl.value));
      this.updateDebugValues(
        Number(this.debugWalkEl.value),
        flySpeed,
        Number(this.debugMapWidthEl.value),
        Number(this.debugMapHeightEl.value)
      );
      onChange({ flySpeed });
    });

    this.debugMapWidthEl.addEventListener("input", () => {
      const mapWidthBlocks = Number(this.debugMapWidthEl.value);
      this.updateDebugValues(
        Number(this.debugWalkEl.value),
        Number(this.debugFlyEl.value),
        mapWidthBlocks,
        Number(this.debugMapHeightEl.value)
      );
      onChange({ mapWidthBlocks });
    });

    this.debugMapHeightEl.addEventListener("input", () => {
      const mapHeightBlocks = Number(this.debugMapHeightEl.value);
      this.updateDebugValues(
        Number(this.debugWalkEl.value),
        Number(this.debugFlyEl.value),
        Number(this.debugMapWidthEl.value),
        mapHeightBlocks
      );
      onChange({ mapHeightBlocks });
    });

    this.debugHealthEl.addEventListener("change", () => onChange({ healthEnabled: this.debugHealthEl.checked }));
    this.debugAgroEl.addEventListener("change", () => onChange({ agroEnabled: this.debugAgroEl.checked }));
  }

  updateDebugValues(walkSpeed, flySpeed, mapWidthBlocks, mapHeightBlocks) {
    this.debugWalkValueEl.textContent = `Current: ${walkSpeed.toFixed(1)}`;
    this.debugFlyValueEl.textContent = `Current: ${flySpeed.toFixed(0)} (max 300)`;
    this.debugMapWidthValueEl.textContent = `Current: ${Math.round(mapWidthBlocks)} blocks`;
    this.debugMapHeightValueEl.textContent = `Current: ${Math.round(mapHeightBlocks)} blocks`;
  }

  isDebugOpen() {
    return this.debugPaneEl.classList.contains("visible");
  }

  setDebugVisible(visible) {
    this.debugPaneEl.classList.toggle("visible", visible);
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

  updateHealth(current, max, enabled) {
    this.healthWrapEl.style.display = enabled ? "block" : "none";
    if (!enabled) return;
    const pct = max > 0 ? Math.max(0, Math.min(1, current / max)) : 0;
    this.healthFillEl.style.width = `${(pct * 100).toFixed(1)}%`;
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
    this.hotbarEls.forEach((el, i) => el.root.classList.toggle("active", i === index));
    this.inventoryEls.forEach((el, i) => el.root.classList.toggle("active", i === index));
  }

  refreshHotbarLabels() {
    for (let i = 0; i < this.hotbarEls.length; i++) {
      setSlotVisual(this.hotbarEls[i], slotItemOrEmpty(this.inventory[i]), this.icons, { hotbarIndexLabel: i + 1 });
    }
  }

  refreshInventoryLabels() {
    for (let i = 0; i < this.inventoryEls.length; i++) {
      setSlotVisual(this.inventoryEls[i], slotItemOrEmpty(this.inventory[i]), this.icons);
    }
  }
}
