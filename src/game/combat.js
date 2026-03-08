/**
 * @module game/combat
 * @description Combat constants and utility functions extracted from `main.js`.
 * This module defines the parameters that govern melee attacks (reach, cone
 * angle, cooldown), the set of items that cannot be placed as world blocks,
 * and the per-weapon damage lookup. Centralising these values makes it easy to
 * balance combat without touching interaction or mob logic.
 */

import { BlockId } from "../blocks.js";

/**
 * Maximum distance in world units at which the player can hit a mob with a
 * melee attack.
 * @type {number}
 */
export const MELEE_REACH = 6;

/**
 * Half-angle of the melee attack cone in radians (~51°). Only mobs within this
 * angular deviation from the camera's forward direction are eligible to be hit.
 * @type {number}
 */
export const MELEE_CONE_ANGLE = 0.9;

/**
 * Base melee damage dealt when the player attacks without a weapon item.
 * @type {number}
 */
export const BASE_ATTACK_DAMAGE = 12;

/**
 * Minimum time in seconds that must elapse between successive player attacks.
 * Prevents the player from dealing damage every frame by holding the mouse
 * button down.
 * @type {number}
 */
export const ATTACK_COOLDOWN = 0.2;
export const BOW_FIRE_COOLDOWN = 0.42;

/**
 * Set of block IDs that the player is not allowed to place into the world.
 * Includes conceptual non-blocks (Air, Bedrock) and item-only objects (Apples,
 * all weapons) that would break game logic if placed as solid world geometry.
 * @type {Set<number>}
 */
export const PLACE_BLOCK_BLACKLIST = new Set([
  BlockId.AIR,
  BlockId.BEDROCK,
  BlockId.APPLE,
  BlockId.WEAPON_BANDIT_BLADE,
  BlockId.WEAPON_RAIDER_SABER,
  BlockId.WEAPON_SCORP_BOW,
  BlockId.WEAPON_JAGUAR_CLAWS,
  BlockId.WEAPON_WRAITH_HAMMER,
  BlockId.WEAPON_YETI_AXE,
  BlockId.STICK,
  BlockId.WOOD_SWORD,
  BlockId.WOOD_AXE,
  BlockId.WOOD_PICKAXE,
  BlockId.WOOD_SPADE,
  BlockId.STONE_SWORD,
  BlockId.STONE_AXE,
  BlockId.STONE_PICKAXE,
  BlockId.STONE_SPADE,
  BlockId.BOW,
  BlockId.ARROW,
  BlockId.IRON_SWORD,
  BlockId.IRON_AXE,
  BlockId.IRON_PICKAXE,
  BlockId.IRON_SPADE,
  BlockId.IRON,
  BlockId.COAL,
  BlockId.GOLD,
  BlockId.FORGED_IRON,
  BlockId.IRON_HELMET,
  BlockId.IRON_CHESTPLATE,
  BlockId.IRON_LEGGINGS,
  BlockId.IRON_BOOTS,
]);

export function isRangedWeapon(itemId) {
  return itemId === BlockId.BOW || itemId === BlockId.WEAPON_SCORP_BOW;
}

/**
 * Returns the damage dealt by a melee attack using the given item as a weapon.
 * Looted enemy weapons deal significantly more damage than bare fists, which
 * gives the player an incentive to fight and collect drops. Falls back to
 * `BASE_ATTACK_DAMAGE` for any item not in the weapon list.
 * @param {number} itemId - The {@link BlockId} of the item currently held in the hotbar.
 * @returns {number} Damage to deal on a successful hit.
 */
export function getAttackDamage(itemId) {
  switch (itemId) {
    case BlockId.WEAPON_BANDIT_BLADE:
      return 24;
    case BlockId.WEAPON_RAIDER_SABER:
      return 27;
    case BlockId.WEAPON_SCORP_BOW:
      return 22;
    case BlockId.BOW:
      return 20;
    case BlockId.IRON_SWORD:
      return 30;
    case BlockId.IRON_AXE:
      return 26;
    case BlockId.IRON_PICKAXE:
      return 23;
    case BlockId.IRON_SPADE:
      return 17;
    case BlockId.WEAPON_JAGUAR_CLAWS:
      return 20;
    case BlockId.WEAPON_WRAITH_HAMMER:
      return 32;
    case BlockId.WEAPON_YETI_AXE:
      return 36;
    case BlockId.WOOD_SWORD:
      return 18;
    case BlockId.WOOD_AXE:
      return 16;
    case BlockId.WOOD_PICKAXE:
      return 15;
    case BlockId.WOOD_SPADE:
      return 13;
    case BlockId.STONE_SWORD:
      return 22;
    case BlockId.STONE_AXE:
      return 19;
    case BlockId.STONE_PICKAXE:
      return 18;
    case BlockId.STONE_SPADE:
      return 15;
    default:
      return BASE_ATTACK_DAMAGE;
  }
}

/**
 * Checks whether a block can be placed at `(x, y, z)` without overlapping the
 * player's AABB. Used before every right-click block placement to prevent the
 * player from walling themselves inside a block, which would cause the physics
 * engine to eject them unpredictably.
 * @param {Object} player - The `Player` instance (must expose `getAABB()`).
 * @param {number} x - World X of the block to be placed.
 * @param {number} y - World Y of the block to be placed.
 * @param {number} z - World Z of the block to be placed.
 * @returns {boolean} `true` if the target voxel does not intersect the player's AABB.
 */
export function canPlaceAt(player, x, y, z) {
  const blockMinX = x;
  const blockMaxX = x + 1;
  const blockMinY = y;
  const blockMaxY = y + 1;
  const blockMinZ = z;
  const blockMaxZ = z + 1;
  const aabb = player.getAABB();

  return !(
    aabb.maxX > blockMinX &&
    aabb.minX < blockMaxX &&
    aabb.maxY > blockMinY &&
    aabb.minY < blockMaxY &&
    aabb.maxZ > blockMinZ &&
    aabb.minZ < blockMaxZ
  );
}
