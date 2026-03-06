import { BlockId } from "../blocks.js";

export const MELEE_REACH = 6;
export const MELEE_CONE_ANGLE = 0.9;
export const BASE_ATTACK_DAMAGE = 12;
export const ATTACK_COOLDOWN = 0.2;

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
]);

export function getAttackDamage(itemId) {
  switch (itemId) {
    case BlockId.WEAPON_BANDIT_BLADE:
      return 24;
    case BlockId.WEAPON_RAIDER_SABER:
      return 27;
    case BlockId.WEAPON_SCORP_BOW:
      return 22;
    case BlockId.WEAPON_JAGUAR_CLAWS:
      return 20;
    case BlockId.WEAPON_WRAITH_HAMMER:
      return 32;
    case BlockId.WEAPON_YETI_AXE:
      return 36;
    default:
      return BASE_ATTACK_DAMAGE;
  }
}

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
