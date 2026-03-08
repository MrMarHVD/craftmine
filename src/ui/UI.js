/**
 * @module ui/UI
 * @description Manages all HUD and overlay DOM elements: the hotbar, inventory
 * grid, health bar, coordinate display, FPS counter, mode indicator, hint text,
 * quest dialogue pane, and debug settings pane. `UI` is the sole class that
 * reads from and writes to DOM nodes; all other systems interact with the player
 * inventory through `UI`'s public methods (`addItem`, `consumeItem`,
 * `consumeSelectedBlock`, `getSelectedBlock`).
 */

import { BLOCKS, BlockId } from "../blocks.js";
import { createIconMap } from "./icons.js";
import { getRecipeLabel } from "../game/crafting.js";

/**
 * Returns a valid item object for a slot, normalising `null`, `undefined`, or
 * malformed items to an empty Air slot.
 * @param {Object|null|undefined} item - The raw slot value.
 * @returns {{id: number, count: number}} A valid slot item (may be empty Air).
 */
function slotItemOrEmpty(item) {
  return item && item.id !== undefined ? item : { id: BlockId.AIR, count: 0 };
}

/**
 * Updates the visual state of a single DOM slot node to reflect the given
 * item. Hides the icon element when the slot is empty and shows the block name
 * and count otherwise. Optionally stamps a numeric hotbar index label.
 * @param {{root: HTMLElement, icon: HTMLElement, name: HTMLElement, count: HTMLElement, index?: HTMLElement}} node - Slot DOM node references.
 * @param {{id: number, count: number}|null} item - Item to display, or null/empty for an empty slot.
 * @param {Map<number, string>} icons - Icon map from `createIconMap`.
 * @param {Object} [options={}] - Optional display options.
 * @param {number|null} [options.hotbarIndexLabel=null] - Numeric label shown in the slot's index element, or null to skip.
 */
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

/**
 * Manages all HUD DOM elements and the player's item inventory array.
 *
 * The inventory is a flat array of `{id, count}` slot objects. The first
 * `hotbarSize` entries are also rendered in the hotbar; `hotbarIndex` tracks
 * which slot is currently selected.
 */
export class UI {
  /**
   * Queries the DOM for all required HUD elements, initialises the inventory
   * and icon map, then builds the hotbar and inventory grids.
   * @param {Array<{id: number, count: number}>} initialInventory - Starting inventory contents.
   */
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
    this.craftingEl = document.getElementById("crafting");
    this.craftingListEl = document.getElementById("crafting-list");
    this.craftingDetailTitleEl = document.getElementById("crafting-detail-title");
    this.craftingDetailTextEl = document.getElementById("crafting-detail-text");
    this.craftingConfirmEl = document.getElementById("crafting-confirm");

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
    this.debugBgmEl = document.getElementById("dbg-bgm");
    this.debugBgmValueEl = document.getElementById("dbg-bgm-value");
    this.debugHealthEl = document.getElementById("dbg-health");
    this.debugAgroEl = document.getElementById("dbg-agro");

    /** Number of slots displayed in the hotbar (also the first N slots of `inventory`). */
    this.hotbarSize = 8;
    this.inventory = initialInventory.map(slotItemOrEmpty);
    this.hotbarIndex = 0;
    this.coins = 0;
    /** Icon map generated from all block IDs via `createIconMap`. */
    this.icons = createIconMap();

    /** Array of DOM node references for each hotbar slot. */
    this.hotbarEls = [];
    /** Array of DOM node references for each inventory slot. */
    this.inventoryEls = [];
    this.craftingSelectHandler = null;
    this.craftingConfirmHandler = null;

    this.buildHotbar();
    this.buildInventory();
    this.setHotbarSelection(0);
    this.updateCoins(0);
    this.setHint("");
    this.updateHealth(100, 100, true);
  }

  /**
   * Creates and appends the hotbar slot DOM nodes, then populates their labels.
   * Replaces any existing hotbar children, so this is safe to call once during
   * construction.
   */
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

  /**
   * Creates and appends the inventory grid slot DOM nodes. Each slot is a
   * `<button>` with a click handler that copies the clicked item into the
   * currently selected hotbar slot.
   */
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

  /**
   * Wires up the debug pane sliders and checkboxes to the provided `onChange`
   * callback and populates their initial values from `config`. Each input fires
   * `onChange` with a partial patch object so `main.js` can apply only the
   * changed property to `debugSettings`.
   * @param {{walkSpeed: number, flySpeed: number, mapWidthBlocks: number, mapHeightBlocks: number, bgmVolume: number, healthEnabled: boolean, agroEnabled: boolean}} config - Initial values for the debug controls.
   * @param {function(Object): void} onChange - Called with a partial patch whenever any control changes.
   */
  setupDebugPane(config, onChange) {
    this.debugWalkEl.value = String(config.walkSpeed);
    this.debugFlyEl.value = String(config.flySpeed);
    this.debugMapWidthEl.value = String(config.mapWidthBlocks);
    this.debugMapHeightEl.value = String(config.mapHeightBlocks);
    this.debugBgmEl.value = String(config.bgmVolume);
    this.debugHealthEl.checked = !!config.healthEnabled;
    this.debugAgroEl.checked = !!config.agroEnabled;
    this.updateDebugValues(config.walkSpeed, config.flySpeed, config.mapWidthBlocks, config.mapHeightBlocks, config.bgmVolume);

    this.debugWalkEl.addEventListener("input", () => {
      const walkSpeed = Number(this.debugWalkEl.value);
      this.updateDebugValues(
        walkSpeed,
        Number(this.debugFlyEl.value),
        Number(this.debugMapWidthEl.value),
        Number(this.debugMapHeightEl.value),
        Number(this.debugBgmEl.value)
      );
      onChange({ walkSpeed });
    });

    this.debugFlyEl.addEventListener("input", () => {
      const flySpeed = Math.min(300, Number(this.debugFlyEl.value));
      this.updateDebugValues(
        Number(this.debugWalkEl.value),
        flySpeed,
        Number(this.debugMapWidthEl.value),
        Number(this.debugMapHeightEl.value),
        Number(this.debugBgmEl.value)
      );
      onChange({ flySpeed });
    });

    this.debugMapWidthEl.addEventListener("input", () => {
      const mapWidthBlocks = Number(this.debugMapWidthEl.value);
      this.updateDebugValues(
        Number(this.debugWalkEl.value),
        Number(this.debugFlyEl.value),
        mapWidthBlocks,
        Number(this.debugMapHeightEl.value),
        Number(this.debugBgmEl.value)
      );
      onChange({ mapWidthBlocks });
    });

    this.debugMapHeightEl.addEventListener("input", () => {
      const mapHeightBlocks = Number(this.debugMapHeightEl.value);
      this.updateDebugValues(
        Number(this.debugWalkEl.value),
        Number(this.debugFlyEl.value),
        Number(this.debugMapWidthEl.value),
        mapHeightBlocks,
        Number(this.debugBgmEl.value)
      );
      onChange({ mapHeightBlocks });
    });

    this.debugBgmEl.addEventListener("input", () => {
      const bgmVolume = Number(this.debugBgmEl.value);
      this.updateDebugValues(
        Number(this.debugWalkEl.value),
        Number(this.debugFlyEl.value),
        Number(this.debugMapWidthEl.value),
        Number(this.debugMapHeightEl.value),
        bgmVolume
      );
      onChange({ bgmVolume });
    });

    this.debugHealthEl.addEventListener("change", () => onChange({ healthEnabled: this.debugHealthEl.checked }));
    this.debugAgroEl.addEventListener("change", () => onChange({ agroEnabled: this.debugAgroEl.checked }));
  }

  /**
   * Updates the text labels next to each debug slider to show current values.
   * @param {number} walkSpeed - Current walk speed in blocks per second.
   * @param {number} flySpeed - Current fly speed in blocks per second.
   * @param {number} mapWidthBlocks - Current terrain map width in blocks.
   * @param {number} mapHeightBlocks - Current terrain map height in blocks.
   * @param {number} bgmVolume - Current background music volume in [0, 1].
   */
  updateDebugValues(walkSpeed, flySpeed, mapWidthBlocks, mapHeightBlocks, bgmVolume) {
    this.debugWalkValueEl.textContent = `Current: ${walkSpeed.toFixed(1)}`;
    this.debugFlyValueEl.textContent = `Current: ${flySpeed.toFixed(0)} (max 300)`;
    this.debugMapWidthValueEl.textContent = `Current: ${Math.round(mapWidthBlocks)} blocks`;
    this.debugMapHeightValueEl.textContent = `Current: ${Math.round(mapHeightBlocks)} blocks`;
    this.debugBgmValueEl.textContent = `Current: ${Math.round(bgmVolume * 100)}%`;
  }

  /**
   * Returns whether the debug pane is currently visible.
   * @returns {boolean} `true` if the debug pane has the `visible` CSS class.
   */
  isDebugOpen() {
    return this.debugPaneEl.classList.contains("visible");
  }

  /**
   * Shows or hides the debug settings pane.
   * @param {boolean} visible - `true` to show, `false` to hide.
   */
  setDebugVisible(visible) {
    this.debugPaneEl.classList.toggle("visible", visible);
  }

  /**
   * Returns whether the inventory overlay is currently visible.
   * @returns {boolean} `true` if the inventory has the `visible` CSS class.
   */
  isInventoryOpen() {
    return this.inventoryEl.classList.contains("visible");
  }

  /**
   * Returns whether the crafting overlay is currently visible.
   * @returns {boolean} `true` if the crafting panel has the `visible` CSS class.
   */
  isCraftingOpen() {
    return this.craftingEl.classList.contains("visible");
  }

  /**
   * Shows or hides the inventory overlay and refreshes slot labels.
   * @param {boolean} visible - `true` to show, `false` to hide.
   */
  setInventoryVisible(visible) {
    this.inventoryEl.classList.toggle("visible", visible);
    this.refreshInventoryLabels();
  }

  /**
   * Shows or hides the crafting overlay.
   * @param {boolean} visible - `true` to show, `false` to hide.
   */
  setCraftingVisible(visible) {
    this.craftingEl.classList.toggle("visible", visible);
  }

  /**
   * Renders the current craftable recipe catalogue and the selected recipe
   * detail panel.
   * @param {Array<Object>} recipes - Craftable recipe descriptors.
   * @param {string|null} selectedRecipeId - Currently selected recipe ID.
   * @param {function(string): void} onSelect - Called when the user picks a recipe.
   * @param {function(): void} onConfirm - Called when the user presses the craft button.
   */
  renderCraftingCatalogue(recipes, selectedRecipeId, onSelect, onConfirm) {
    this.craftingSelectHandler = onSelect;
    this.craftingConfirmHandler = onConfirm;
    this.craftingListEl.innerHTML = "";

    for (const recipe of recipes) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "crafting-recipe";
      if (recipe.id === selectedRecipeId) btn.classList.add("active");

      const name = document.createElement("div");
      name.className = "crafting-recipe-name";
      name.textContent = getRecipeLabel(recipe);

      const cost = document.createElement("div");
      cost.className = "crafting-recipe-cost";
      cost.textContent = recipe.ingredients.map((ingredient) => `${BLOCKS[ingredient.id].name} x${ingredient.count}`).join(" | ");

      btn.appendChild(name);
      btn.appendChild(cost);
      btn.addEventListener("click", () => this.craftingSelectHandler?.(recipe.id));
      this.craftingListEl.appendChild(btn);
    }

    const selected = recipes.find((recipe) => recipe.id === selectedRecipeId) ?? null;
    if (!selected) {
      this.craftingDetailTitleEl.textContent = recipes.length > 0 ? "Select a recipe" : "No craftable recipes";
      this.craftingDetailTextEl.textContent =
        recipes.length > 0 ? "Choose an item from the catalogue to inspect its resource cost." : "Gather logs, stone, and other materials to unlock crafting options.";
      this.craftingConfirmEl.disabled = true;
      this.craftingConfirmEl.onclick = null;
      return;
    }

    this.craftingDetailTitleEl.textContent = getRecipeLabel(selected);
    this.craftingDetailTextEl.textContent = selected.ingredients
      .map((ingredient) => `${BLOCKS[ingredient.id].name}: ${ingredient.count}`)
      .join("\n");
    this.craftingConfirmEl.disabled = false;
    this.craftingConfirmEl.onclick = () => this.craftingConfirmHandler?.();
  }

  /**
   * Returns whether the dialogue pane is currently visible.
   * @returns {boolean} `true` if the dialogue has the `visible` CSS class.
   */
  isDialogueOpen() {
    return this.dialogueEl.classList.contains("visible");
  }

  /**
   * Opens the dialogue pane with the given title, body text, and a list of
   * clickable option buttons. Each option has a `label` string and an
   * `onSelect` callback that fires when the button is clicked. Replaces any
   * previously displayed dialogue content.
   * @param {string} title - NPC name or dialogue heading.
   * @param {string} text - Body text of the dialogue message.
   * @param {Array<{label: string, onSelect: function}>} options - List of response buttons.
   */
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

  /**
   * Hides the dialogue pane and clears all option buttons.
   */
  closeDialogue() {
    this.dialogueEl.classList.remove("visible");
    this.dialogueOptionsEl.innerHTML = "";
  }

  /**
   * Sets the hint text shown below the crosshair. Pass an empty string to
   * clear the hint.
   * @param {string} text - Hint text to display.
   */
  setHint(text) {
    this.hintEl.textContent = text;
  }

  /**
   * Updates the player health bar fill width. Hides the entire health bar
   * wrapper when `enabled` is `false` (debug mode: health disabled).
   * @param {number} current - Current health value.
   * @param {number} max - Maximum health value.
   * @param {boolean} enabled - If `false`, the health bar is hidden entirely.
   */
  updateHealth(current, max, enabled) {
    this.healthWrapEl.style.display = enabled ? "block" : "none";
    if (!enabled) return;
    const pct = max > 0 ? Math.max(0, Math.min(1, current / max)) : 0;
    this.healthFillEl.style.width = `${(pct * 100).toFixed(1)}%`;
  }

  /**
   * Returns the block ID of the item in the currently selected hotbar slot.
   * Falls back to Dirt if the slot is empty, ensuring block-place operations
   * always have a valid ID.
   * @returns {number} The selected block's {@link BlockId}.
   */
  getSelectedBlock() {
    const item = this.inventory[this.hotbarIndex];
    return item?.id ?? BlockId.DIRT;
  }

  /**
   * Returns the raw item ID in the currently selected hotbar slot.
   * Unlike `getSelectedBlock`, this does not substitute a fallback block when
   * the slot is empty, which makes it suitable for equipment rendering and
   * multiplayer state sync.
   * @returns {number} Selected item ID, or `BlockId.AIR` for an empty slot.
   */
  getSelectedItemId() {
    const item = this.inventory[this.hotbarIndex];
    if (!item || item.count <= 0) return BlockId.AIR;
    return item.id ?? BlockId.AIR;
  }

  /**
   * Decrements the count of the selected hotbar slot by one and clears the
   * slot if it reaches zero. Used when the player places a block. Returns
   * `false` if the slot was already empty, preventing the player from placing
   * blocks they do not have.
   * @returns {boolean} `true` if an item was successfully consumed.
   */
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

  /**
   * Adds `amount` of `blockId` to the inventory. First tries to stack onto
   * existing slots of the same ID (up to a max of 999 per slot), then spills
   * into the first available empty slot. Silently drops any remainder that
   * cannot fit. Refreshes both the hotbar and inventory labels.
   * @param {number} blockId - Block ID to add (must not be `BlockId.AIR`).
   * @param {number} amount - Number of items to add.
   */
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

  /**
   * Returns the total count of `blockId` across all inventory slots.
   * @param {number} blockId - Block ID to count.
   * @returns {number} Total number of the given block in the inventory.
   */
  getItemCount(blockId) {
    let total = 0;
    for (const slot of this.inventory) {
      if (slot.id === blockId) total += slot.count;
    }
    return total;
  }

  /**
   * Removes exactly `amount` of `blockId` from the inventory, spreading the
   * reduction across multiple slots as needed. Returns `false` without
   * modifying anything if the inventory holds fewer than `amount` items.
   * @param {number} blockId - Block ID to consume.
   * @param {number} amount - Number of items to remove.
   * @returns {boolean} `true` if the full amount was consumed, `false` if insufficient stock.
   */
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

  /**
   * Updates the displayed coin count in the HUD.
   * @param {number} coins - New total coin balance.
   */
  updateCoins(coins) {
    this.coins = coins;
    this.coinsEl.textContent = `Coins: ${coins}`;
  }

  /**
   * Shows or hides the "click to play" overlay (displayed when the pointer is
   * not locked and no menu is open).
   * @param {boolean} visible - `true` to show the overlay.
   */
  setOverlayVisible(visible) {
    this.overlay.classList.toggle("visible", visible);
  }

  /**
   * Updates the mode indicator text in the HUD.
   * @param {boolean} flyMode - `true` if the player is in fly mode.
   */
  updateMode(flyMode) {
    this.modeEl.textContent = `Mode: ${flyMode ? "Fly" : "Walk"}`;
  }

  /**
   * Updates the coordinate display in the HUD with the player's current position.
   * @param {THREE.Vector3} pos - Player world position.
   */
  updateCoords(pos) {
    this.coordsEl.textContent = `X: ${pos.x.toFixed(1)} Y: ${pos.y.toFixed(1)} Z: ${pos.z.toFixed(1)}`;
  }

  /**
   * Updates the FPS counter in the HUD.
   * @param {number} fps - Frames per second, averaged over the last 0.25 seconds.
   */
  updateFPS(fps) {
    this.fpsEl.textContent = `FPS: ${fps.toFixed(0)}`;
  }

  /**
   * Sets the active hotbar slot, updating the `active` CSS class on both the
   * hotbar and inventory slot elements so both grids highlight the same slot.
   * @param {number} index - Zero-based slot index to select.
   */
  setHotbarSelection(index) {
    this.hotbarIndex = index;
    this.hotbarEls.forEach((el, i) => el.root.classList.toggle("active", i === index));
    this.inventoryEls.forEach((el, i) => el.root.classList.toggle("active", i === index));
  }

  /**
   * Re-renders all hotbar slot labels from the current inventory state.
   * Called after any inventory mutation or hotbar selection change.
   */
  refreshHotbarLabels() {
    for (let i = 0; i < this.hotbarEls.length; i++) {
      setSlotVisual(this.hotbarEls[i], slotItemOrEmpty(this.inventory[i]), this.icons, { hotbarIndexLabel: i + 1 });
    }
  }

  /**
   * Re-renders all inventory slot labels from the current inventory state.
   * Called after any inventory mutation or when the inventory panel is opened.
   */
  refreshInventoryLabels() {
    for (let i = 0; i < this.inventoryEls.length; i++) {
      setSlotVisual(this.inventoryEls[i], slotItemOrEmpty(this.inventory[i]), this.icons);
    }
  }
}
