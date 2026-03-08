import { BLOCKS, BlockId } from "../blocks.js";
import { consumeIngredient, getIngredientCount } from "./crafting.js";

export const FURNACE_RECIPES = [
  {
    id: "forged_iron",
    name: "Forge Iron",
    inputId: BlockId.IRON,
    inputCount: 10,
    fuelId: BlockId.COAL,
    fuelCount: 1,
    outputId: BlockId.FORGED_IRON,
    outputCount: 1,
    duration: 30,
  },
  {
    id: "mint_gold",
    name: "Mint Gold Coins",
    inputId: BlockId.GOLD,
    inputCount: 5,
    fuelId: BlockId.COAL,
    fuelCount: 1,
    outputCoins: 30,
    duration: 20,
  },
];

const RECIPE_BY_ID = new Map(FURNACE_RECIPES.map((recipe) => [recipe.id, recipe]));

function furnaceKey(x, y, z) {
  return `${x},${y},${z}`;
}

export class FurnaceSystem {
  constructor(ui, options = {}) {
    this.ui = ui;
    this.onCoins = options.onCoins ?? (() => {});
    this.furnaces = new Map();
    this.openKey = null;
    this.selectedRecipeId = FURNACE_RECIPES[0]?.id ?? null;
  }

  getRecipeById(recipeId) {
    return RECIPE_BY_ID.get(recipeId) ?? null;
  }

  ensureFurnace(x, y, z) {
    const key = furnaceKey(x, y, z);
    if (!this.furnaces.has(key)) {
      this.furnaces.set(key, {
        key,
        x,
        y,
        z,
        queue: [],
        currentJob: null,
      });
    }
    return this.furnaces.get(key);
  }

  removeFurnace(x, y, z) {
    const key = furnaceKey(x, y, z);
    this.furnaces.delete(key);
    if (this.openKey === key) {
      this.openKey = null;
      this.ui.setFurnaceVisible(false);
    }
  }

  openAt(x, y, z) {
    const furnace = this.ensureFurnace(x, y, z);
    this.openKey = furnace.key;
    this.renderOpenFurnace();
    this.ui.setFurnaceVisible(true);
  }

  close() {
    this.openKey = null;
    this.ui.setFurnaceVisible(false);
  }

  getOpenFurnace() {
    if (!this.openKey) return null;
    return this.furnaces.get(this.openKey) ?? null;
  }

  canQueueRecipe(recipe, ui = this.ui) {
    if (!recipe) return false;
    return getIngredientCount(ui, recipe.inputId) >= recipe.inputCount && getIngredientCount(ui, recipe.fuelId) >= recipe.fuelCount;
  }

  queueRecipe(recipeId) {
    const furnace = this.getOpenFurnace();
    const recipe = this.getRecipeById(recipeId);
    if (!furnace || !recipe || !this.canQueueRecipe(recipe)) return false;
    if (!consumeIngredient(this.ui, recipe.inputId, recipe.inputCount)) return false;
    if (!consumeIngredient(this.ui, recipe.fuelId, recipe.fuelCount)) {
      this.ui.addItem(recipe.inputId, recipe.inputCount);
      return false;
    }
    furnace.queue.push({
      recipeId: recipe.id,
      remaining: recipe.duration,
      total: recipe.duration,
    });
    this.kickoffNextJob(furnace);
    this.renderOpenFurnace();
    return true;
  }

  kickoffNextJob(furnace) {
    if (!furnace || furnace.currentJob || furnace.queue.length === 0) return;
    furnace.currentJob = furnace.queue.shift();
  }

  completeJob(job) {
    const recipe = this.getRecipeById(job.recipeId);
    if (!recipe) return;
    if (recipe.outputCoins) {
      this.onCoins(recipe.outputCoins);
    } else if (recipe.outputId && recipe.outputCount) {
      this.ui.addItem(recipe.outputId, recipe.outputCount);
    }
  }

  update(dt) {
    for (const furnace of this.furnaces.values()) {
      this.kickoffNextJob(furnace);
      if (!furnace.currentJob) continue;
      furnace.currentJob.remaining -= dt;
      if (furnace.currentJob.remaining > 0) continue;
      this.completeJob(furnace.currentJob);
      furnace.currentJob = null;
      this.kickoffNextJob(furnace);
    }
    if (this.openKey) this.renderOpenFurnace();
  }

  renderOpenFurnace() {
    const furnace = this.getOpenFurnace();
    if (!furnace) return;
    const available = FURNACE_RECIPES.filter((recipe) => this.canQueueRecipe(recipe));
    if (!available.some((recipe) => recipe.id === this.selectedRecipeId)) {
      this.selectedRecipeId = available[0]?.id ?? FURNACE_RECIPES[0]?.id ?? null;
    }
    const activeRecipe = furnace.currentJob ? this.getRecipeById(furnace.currentJob.recipeId) : null;
    const detailLines = [];
    if (activeRecipe && furnace.currentJob) {
      detailLines.push(`Active: ${activeRecipe.name}`);
      detailLines.push(`Time left: ${Math.max(0, furnace.currentJob.remaining).toFixed(1)}s`);
    } else {
      detailLines.push("Active: Idle");
    }
    detailLines.push(`Queued jobs: ${furnace.queue.length}`);
    detailLines.push(`Iron: ${getIngredientCount(this.ui, BlockId.IRON)} | Coal: ${getIngredientCount(this.ui, BlockId.COAL)} | Gold: ${getIngredientCount(this.ui, BlockId.GOLD)}`);

    this.ui.renderFurnacePanel(
      FURNACE_RECIPES,
      this.selectedRecipeId,
      detailLines.join("\n"),
      furnace.queue.map((job, index) => {
        const recipe = this.getRecipeById(job.recipeId);
        return `${index + 1}. ${recipe?.name ?? job.recipeId}`;
      }),
      (recipeId) => {
        this.selectedRecipeId = recipeId;
        this.renderOpenFurnace();
      },
      () => {
        if (!this.selectedRecipeId) return;
        this.queueRecipe(this.selectedRecipeId);
      },
      available
    );
  }
}

export function getFurnaceRecipeLabel(recipe) {
  const outputLabel = recipe.outputCoins
    ? `${recipe.outputCoins} coins`
    : `${BLOCKS[recipe.outputId]?.name ?? recipe.outputId} x${recipe.outputCount}`;
  return `${recipe.name} -> ${outputLabel}`;
}
