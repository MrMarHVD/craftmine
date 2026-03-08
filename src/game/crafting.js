import { BLOCKS, BlockId } from "../blocks.js";

export const CRAFTING_RECIPES = [
  {
    id: "plank",
    outputId: BlockId.PLANK,
    outputCount: 5,
    ingredients: [{ id: BlockId.LOG, count: 1 }],
  },
  {
    id: "stick",
    outputId: BlockId.STICK,
    outputCount: 4,
    ingredients: [{ id: BlockId.PLANK, count: 1 }],
  },
  {
    id: "wood_sword",
    outputId: BlockId.WOOD_SWORD,
    outputCount: 1,
    ingredients: [
      { id: BlockId.PLANK, count: 2 },
      { id: BlockId.STICK, count: 1 },
    ],
  },
  {
    id: "wood_axe",
    outputId: BlockId.WOOD_AXE,
    outputCount: 1,
    ingredients: [
      { id: BlockId.PLANK, count: 3 },
      { id: BlockId.STICK, count: 2 },
    ],
  },
  {
    id: "wood_pickaxe",
    outputId: BlockId.WOOD_PICKAXE,
    outputCount: 1,
    ingredients: [
      { id: BlockId.PLANK, count: 3 },
      { id: BlockId.STICK, count: 2 },
    ],
  },
  {
    id: "wood_spade",
    outputId: BlockId.WOOD_SPADE,
    outputCount: 1,
    ingredients: [
      { id: BlockId.PLANK, count: 1 },
      { id: BlockId.STICK, count: 2 },
    ],
  },
  {
    id: "stone_sword",
    outputId: BlockId.STONE_SWORD,
    outputCount: 1,
    ingredients: [
      { id: BlockId.STONE, count: 2 },
      { id: BlockId.STICK, count: 1 },
    ],
  },
  {
    id: "stone_axe",
    outputId: BlockId.STONE_AXE,
    outputCount: 1,
    ingredients: [
      { id: BlockId.STONE, count: 3 },
      { id: BlockId.STICK, count: 2 },
    ],
  },
  {
    id: "stone_pickaxe",
    outputId: BlockId.STONE_PICKAXE,
    outputCount: 1,
    ingredients: [
      { id: BlockId.STONE, count: 3 },
      { id: BlockId.STICK, count: 2 },
    ],
  },
  {
    id: "stone_spade",
    outputId: BlockId.STONE_SPADE,
    outputCount: 1,
    ingredients: [
      { id: BlockId.STONE, count: 1 },
      { id: BlockId.STICK, count: 2 },
    ],
  },
  {
    id: "iron_sword",
    outputId: BlockId.IRON_SWORD,
    outputCount: 1,
    ingredients: [
      { id: BlockId.IRON_ORE, count: 2 },
      { id: BlockId.STICK, count: 1 },
    ],
  },
  {
    id: "iron_axe",
    outputId: BlockId.IRON_AXE,
    outputCount: 1,
    ingredients: [
      { id: BlockId.IRON_ORE, count: 3 },
      { id: BlockId.STICK, count: 2 },
    ],
  },
  {
    id: "iron_pickaxe",
    outputId: BlockId.IRON_PICKAXE,
    outputCount: 1,
    ingredients: [
      { id: BlockId.IRON_ORE, count: 3 },
      { id: BlockId.STICK, count: 2 },
    ],
  },
  {
    id: "iron_spade",
    outputId: BlockId.IRON_SPADE,
    outputCount: 1,
    ingredients: [
      { id: BlockId.IRON_ORE, count: 1 },
      { id: BlockId.STICK, count: 2 },
    ],
  },
];

const RECIPE_BY_ID = new Map(CRAFTING_RECIPES.map((recipe) => [recipe.id, recipe]));

export function getRecipeLabel(recipe) {
  return `${BLOCKS[recipe.outputId]?.name ?? recipe.id} x${recipe.outputCount}`;
}

export function getRecipeById(recipeId) {
  return RECIPE_BY_ID.get(recipeId) ?? null;
}

export function canCraftRecipe(ui, recipe) {
  if (!recipe) return false;
  return recipe.ingredients.every((ingredient) => ui.getItemCount(ingredient.id) >= ingredient.count);
}

export function getCraftableRecipes(ui) {
  return CRAFTING_RECIPES.filter((recipe) => canCraftRecipe(ui, recipe));
}

export function craftRecipe(ui, recipeId) {
  const recipe = getRecipeById(recipeId);
  if (!recipe || !canCraftRecipe(ui, recipe)) return false;
  for (const ingredient of recipe.ingredients) {
    if (!ui.consumeItem(ingredient.id, ingredient.count)) return false;
  }
  ui.addItem(recipe.outputId, recipe.outputCount);
  return true;
}

export function getToolKind(itemId) {
  switch (itemId) {
    case BlockId.WOOD_SWORD:
    case BlockId.STONE_SWORD:
    case BlockId.IRON_SWORD:
      return "sword";
    case BlockId.WOOD_AXE:
    case BlockId.STONE_AXE:
    case BlockId.IRON_AXE:
      return "axe";
    case BlockId.WOOD_PICKAXE:
    case BlockId.STONE_PICKAXE:
    case BlockId.IRON_PICKAXE:
      return "pickaxe";
    case BlockId.WOOD_SPADE:
    case BlockId.STONE_SPADE:
    case BlockId.IRON_SPADE:
      return "spade";
    default:
      return null;
  }
}

export function getToolTier(itemId) {
  switch (itemId) {
    case BlockId.WOOD_SWORD:
    case BlockId.WOOD_AXE:
    case BlockId.WOOD_PICKAXE:
    case BlockId.WOOD_SPADE:
      return 1;
    case BlockId.STONE_SWORD:
    case BlockId.STONE_AXE:
    case BlockId.STONE_PICKAXE:
    case BlockId.STONE_SPADE:
      return 2;
    case BlockId.IRON_SWORD:
    case BlockId.IRON_AXE:
    case BlockId.IRON_PICKAXE:
    case BlockId.IRON_SPADE:
      return 3;
    default:
      return 0;
  }
}

export function getToolBreakMultiplier(itemId, blockId) {
  const kind = getToolKind(itemId);
  const tier = getToolTier(itemId);
  if (!kind || tier === 0) return 1;

  const fast = tier === 1 ? 2.35 : tier === 2 ? 3.85 : 5.8;

  if (kind === "axe" && (blockId === BlockId.LOG || blockId === BlockId.PLANK || blockId === BlockId.CACTUS)) return fast;
  if (
    kind === "pickaxe" &&
    (blockId === BlockId.STONE ||
      blockId === BlockId.GRAVEL ||
      blockId === BlockId.CASTLE_BRICK ||
      blockId === BlockId.IRON_ORE ||
      blockId === BlockId.COAL_ORE ||
      blockId === BlockId.GOLD_ORE)
  ) {
    return fast;
  }
  if (
    kind === "spade" &&
    (blockId === BlockId.DIRT ||
      blockId === BlockId.GRASS ||
      blockId === BlockId.SAND ||
      blockId === BlockId.SNOW ||
      blockId === BlockId.MOSS)
  ) {
    return fast;
  }
  if (kind === "sword" && blockId === BlockId.BRAMBLE) {
    return tier === 1 ? 1.7 : tier === 2 ? 2.25 : 2.65;
  }
  return 1;
}

export function getRequiredToolKind(blockId) {
  switch (blockId) {
    case BlockId.IRON_ORE:
    case BlockId.COAL_ORE:
    case BlockId.GOLD_ORE:
      return "pickaxe";
    default:
      return null;
  }
}

export function canMineBlockWithItem(itemId, blockId) {
  const requiredKind = getRequiredToolKind(blockId);
  if (!requiredKind) return true;
  return getToolKind(itemId) === requiredKind;
}
