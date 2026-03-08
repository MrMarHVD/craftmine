import { BlockId } from "../blocks.js";

export const ARMOR_SLOT = {
  HELMET: "helmet",
  CHEST: "chest",
  LEGS: "legs",
  BOOTS: "boots",
};

export const ARMOR_SLOT_ORDER = [ARMOR_SLOT.HELMET, ARMOR_SLOT.CHEST, ARMOR_SLOT.LEGS, ARMOR_SLOT.BOOTS];

export function createEmptyArmorState() {
  return {
    [ARMOR_SLOT.HELMET]: BlockId.AIR,
    [ARMOR_SLOT.CHEST]: BlockId.AIR,
    [ARMOR_SLOT.LEGS]: BlockId.AIR,
    [ARMOR_SLOT.BOOTS]: BlockId.AIR,
  };
}

export function getArmorSlotForItem(itemId) {
  switch (itemId) {
    case BlockId.IRON_HELMET:
      return ARMOR_SLOT.HELMET;
    case BlockId.IRON_CHESTPLATE:
      return ARMOR_SLOT.CHEST;
    case BlockId.IRON_LEGGINGS:
      return ARMOR_SLOT.LEGS;
    case BlockId.IRON_BOOTS:
      return ARMOR_SLOT.BOOTS;
    default:
      return null;
  }
}

export function isArmorItem(itemId) {
  return getArmorSlotForItem(itemId) !== null;
}

export function getArmorIdsArray(armorState) {
  return ARMOR_SLOT_ORDER.map((slot) => armorState?.[slot] ?? BlockId.AIR);
}

export function armorStateFromArray(ids = []) {
  const armor = createEmptyArmorState();
  ARMOR_SLOT_ORDER.forEach((slot, index) => {
    armor[slot] = Number.isFinite(ids[index]) ? ids[index] : BlockId.AIR;
  });
  return armor;
}

export function countEquippedArmorPieces(armorState) {
  return ARMOR_SLOT_ORDER.reduce((sum, slot) => sum + (armorState?.[slot] && armorState[slot] !== BlockId.AIR ? 1 : 0), 0);
}

export function getArmorHealthMultiplier(armorState) {
  return 1 + countEquippedArmorPieces(armorState) * 0.25;
}
