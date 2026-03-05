import { BLOCKS, BlockId } from "./blocks.js";

const ICON_SIZE = 24;

function slotItemOrEmpty(item) {
  return item && item.id !== undefined ? item : { id: BlockId.AIR, count: 0 };
}

function drawNoise(ctx, r, g, b, variance = 12, alpha = 255) {
  const img = ctx.createImageData(ICON_SIZE, ICON_SIZE);
  for (let i = 0; i < img.data.length; i += 4) {
    const n = (Math.random() * variance - variance * 0.5) | 0;
    img.data[i] = Math.max(0, Math.min(255, r + n));
    img.data[i + 1] = Math.max(0, Math.min(255, g + n));
    img.data[i + 2] = Math.max(0, Math.min(255, b + n));
    img.data[i + 3] = alpha;
  }
  ctx.putImageData(img, 0, 0);
}

function createIcon(blockId) {
  const c = document.createElement("canvas");
  c.width = ICON_SIZE;
  c.height = ICON_SIZE;
  const ctx = c.getContext("2d");

  switch (blockId) {
    case BlockId.GRASS:
      drawNoise(ctx, 118, 92, 60, 14);
      ctx.fillStyle = "rgba(67,160,72,0.95)";
      ctx.fillRect(0, 0, ICON_SIZE, 7);
      break;
    case BlockId.DIRT:
      drawNoise(ctx, 122, 84, 55, 16);
      break;
    case BlockId.STONE:
      drawNoise(ctx, 122, 124, 132, 16);
      break;
    case BlockId.SAND:
      drawNoise(ctx, 216, 199, 128, 14);
      break;
    case BlockId.LOG:
      drawNoise(ctx, 120, 90, 58, 14);
      ctx.fillStyle = "rgba(90,58,30,0.3)";
      for (let x = 2; x < ICON_SIZE; x += 5) ctx.fillRect(x, 0, 2, ICON_SIZE);
      break;
    case BlockId.LEAVES:
      drawNoise(ctx, 68, 150, 70, 28, 230);
      break;
    case BlockId.WATER:
      drawNoise(ctx, 63, 120, 210, 14, 210);
      ctx.fillStyle = "rgba(175,218,255,0.3)";
      ctx.fillRect(0, 5, ICON_SIZE, 3);
      break;
    case BlockId.BEDROCK:
      drawNoise(ctx, 58, 58, 58, 24);
      break;
    case BlockId.SNOW:
      drawNoise(ctx, 233, 239, 245, 8);
      break;
    case BlockId.CACTUS:
      drawNoise(ctx, 57, 145, 67, 12);
      ctx.fillStyle = "rgba(33,95,40,0.35)";
      for (let x = 1; x < ICON_SIZE; x += 4) ctx.fillRect(x, 0, 1, ICON_SIZE);
      break;
    case BlockId.FLOWER_RED:
      ctx.fillStyle = "rgba(57,146,65,0.95)";
      ctx.fillRect(11, 7, 2, 15);
      ctx.fillStyle = "rgba(196,36,46,0.95)";
      ctx.fillRect(8, 3, 8, 6);
      break;
    case BlockId.FLOWER_YELLOW:
      ctx.fillStyle = "rgba(57,146,65,0.95)";
      ctx.fillRect(11, 7, 2, 15);
      ctx.fillStyle = "rgba(240,197,43,0.95)";
      ctx.fillRect(8, 3, 8, 6);
      break;
    case BlockId.VINE:
      ctx.fillStyle = "rgba(49,130,52,0.8)";
      for (let i = 0; i < 7; i++) {
        const x = 3 + ((i * 3) % 16);
        ctx.fillRect(x, 2 + i * 2, 2, 3);
      }
      break;
    case BlockId.GRAVEL:
      drawNoise(ctx, 132, 128, 121, 20);
      break;
    case BlockId.MOSS:
      drawNoise(ctx, 82, 126, 66, 16);
      break;
    case BlockId.CASTLE_BRICK:
      drawNoise(ctx, 118, 117, 124, 10);
      ctx.fillStyle = "rgba(66,66,74,0.45)";
      for (let y = 0; y < ICON_SIZE; y += 6) ctx.fillRect(0, y, ICON_SIZE, 1);
      break;
    case BlockId.APPLE:
      ctx.fillStyle = "rgba(197,36,36,0.95)";
      ctx.fillRect(6, 6, 12, 12);
      ctx.fillStyle = "rgba(230,120,120,0.55)";
      ctx.fillRect(8, 8, 4, 4);
      ctx.fillStyle = "rgba(80,144,61,0.9)";
      ctx.fillRect(11, 3, 3, 3);
      break;
    default:
      drawNoise(ctx, 90, 90, 90, 10);
      break;
  }

  return c.toDataURL();
}

function createIconMap() {
  const map = new Map();
  Object.keys(BLOCKS).forEach((k) => {
    const id = Number(k);
    if (id === BlockId.AIR) return;
    map.set(id, createIcon(id));
  });
  return map;
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
    this.debugHealthEl = document.getElementById("dbg-health");
    this.debugAgroEl = document.getElementById("dbg-agro");
    this.debugMapEl = document.getElementById("dbg-map");

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
    this.debugHealthEl.checked = !!config.healthEnabled;
    this.debugAgroEl.checked = !!config.agroEnabled;
    this.debugMapEl.checked = config.mapEnabled !== false;
    this.updateDebugValues(config.walkSpeed, config.flySpeed);

    this.debugWalkEl.addEventListener("input", () => {
      const walkSpeed = Number(this.debugWalkEl.value);
      this.updateDebugValues(walkSpeed, Number(this.debugFlyEl.value));
      onChange({ walkSpeed });
    });

    this.debugFlyEl.addEventListener("input", () => {
      const flySpeed = Math.min(300, Number(this.debugFlyEl.value));
      this.updateDebugValues(Number(this.debugWalkEl.value), flySpeed);
      onChange({ flySpeed });
    });

    this.debugHealthEl.addEventListener("change", () => onChange({ healthEnabled: this.debugHealthEl.checked }));
    this.debugAgroEl.addEventListener("change", () => onChange({ agroEnabled: this.debugAgroEl.checked }));
    this.debugMapEl.addEventListener("change", () => onChange({ mapEnabled: this.debugMapEl.checked }));
  }

  updateDebugValues(walkSpeed, flySpeed) {
    this.debugWalkValueEl.textContent = `Current: ${walkSpeed.toFixed(1)}`;
    this.debugFlyValueEl.textContent = `Current: ${flySpeed.toFixed(0)} (max 300)`;
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
