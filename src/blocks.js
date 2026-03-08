/**
 * @module blocks
 * @description Defines every block type in the game: numeric IDs, per-face
 * texture mappings, physical properties (solid, transparent), and gameplay
 * helpers such as break duration. This is the authoritative source of truth
 * that the world generator, mesher, UI icons, and interaction system all
 * reference.
 */

/**
 * Enum of all block type identifiers used throughout the game.
 * Values are stable integers that are stored directly in chunk Uint8Arrays.
 * @enum {number}
 */
export const BlockId = {
  /** Empty space — never rendered, never collided with. */
  AIR: 0,
  /** Grass surface block with a colored top face and dirt sides. */
  GRASS: 1,
  /** Generic dirt, used as subsurface fill under grass. */
  DIRT: 2,
  /** Stone, the predominant underground fill block. */
  STONE: 3,
  /** Sand, surface and subsurface block of the desert biome. */
  SAND: 4,
  /** Tree trunk with ring-patterned top and bark side textures. */
  LOG: 5,
  /** Semi-transparent leaf cluster that caps trees. */
  LEAVES: 6,
  /** Non-solid water fill placed below sea level. */
  WATER: 7,
  /** Indestructible bottom-of-world barrier. */
  BEDROCK: 8,
  /** Snow surface block used in the tundra biome and on high mountain peaks. */
  SNOW: 9,
  /** Multi-segment cactus column placed in desert biomes. */
  CACTUS: 10,
  /** Decorative red flower, non-solid and transparent. */
  FLOWER_RED: 11,
  /** Decorative yellow flower, non-solid and transparent. */
  FLOWER_YELLOW: 12,
  /** Hanging vine placed on the edges of jungle tree canopies. */
  VINE: 13,
  /** Gravel scattered on mountain and desert terrain. */
  GRAVEL: 14,
  /** Moss ground cover found in the jungle biome. */
  MOSS: 15,
  /** Brick block used to construct procedural castles. */
  CASTLE_BRICK: 16,
  /** Collectible apple that grows on apple tree canopies; eating restores health. */
  APPLE: 17,
  /** Weapon dropped by Bandit enemies when defeated. */
  WEAPON_BANDIT_BLADE: 18,
  /** Weapon dropped by Raider enemies when defeated. */
  WEAPON_RAIDER_SABER: 19,
  /** Weapon dropped by Sandstalker enemies when defeated. */
  WEAPON_SCORP_BOW: 20,
  /** Weapon dropped by Jaguar enemies when defeated. */
  WEAPON_JAGUAR_CLAWS: 21,
  /** Weapon dropped by Rock Wraith enemies when defeated. */
  WEAPON_WRAITH_HAMMER: 22,
  /** Weapon dropped by Yeti enemies when defeated. */
  WEAPON_YETI_AXE: 23,
  /** Crafted wood plank block derived from logs. */
  PLANK: 24,
  /** Crafted stick item used in tool recipes. */
  STICK: 25,
  /** Crafted wooden sword. */
  WOOD_SWORD: 26,
  /** Crafted wooden axe. */
  WOOD_AXE: 27,
  /** Crafted wooden pickaxe. */
  WOOD_PICKAXE: 28,
  /** Crafted wooden spade. */
  WOOD_SPADE: 29,
  /** Crafted stone sword. */
  STONE_SWORD: 30,
  /** Crafted stone axe. */
  STONE_AXE: 31,
  /** Crafted stone pickaxe. */
  STONE_PICKAXE: 32,
  /** Crafted stone spade. */
  STONE_SPADE: 33,
  /** Thorny bramble patch that appears occasionally in grassy biomes. */
  BRAMBLE: 34,
  /** Placeable test block that spawns skeleton mobs nearby. */
  SKELETON_SPAWNER: 35,
  /** Basic player-usable bow. */
  BOW: 36,
  /** Basic arrow ammunition for bows. */
  ARROW: 37,
  /** Placeable test block that spawns one wizard-led oreum group. */
  WIZARD_GROUP_SPAWNER: 38,
  /** Strong non-craftable iron sword used by guards. */
  IRON_SWORD: 39,
};

/**
 * Enum of the six axis-aligned cube face directions used by the mesher.
 * Each entry corresponds to one of the six `FACE_DEFS` entries in chunkMesher.js.
 * @enum {number}
 */
export const FACE = {
  /** Positive X face (east). */
  PX: 0,
  /** Negative X face (west). */
  NX: 1,
  /** Positive Y face (top). */
  PY: 2,
  /** Negative Y face (bottom). */
  NY: 3,
  /** Positive Z face (south). */
  PZ: 4,
  /** Negative Z face (north). */
  NZ: 5,
};

/**
 * Registry of block definitions keyed by {@link BlockId}.
 * Each entry describes how a block looks and behaves.
 * The `textures` object may use `all`, `top`/`side`/`bottom`, or any
 * combination; the mesher reads it via `getFaceUVs` in textureAtlas.js.
 * @type {Object.<number, {name: string, solid: boolean, transparent: boolean, textures?: Object}>}
 */
export const BLOCKS = {
  [BlockId.AIR]: { name: "Air", solid: false, transparent: true },
  [BlockId.GRASS]: {
    name: "Grass",
    solid: true,
    transparent: false,
    textures: { top: "grass_top", side: "grass_side", bottom: "dirt" },
  },
  [BlockId.DIRT]: { name: "Dirt", solid: true, transparent: false, textures: { all: "dirt" } },
  [BlockId.STONE]: { name: "Stone", solid: true, transparent: false, textures: { all: "stone" } },
  [BlockId.SAND]: { name: "Sand", solid: true, transparent: false, textures: { all: "sand" } },
  [BlockId.LOG]: {
    name: "Log",
    solid: true,
    transparent: false,
    textures: { top: "log_top", side: "log_side", bottom: "log_top" },
  },
  [BlockId.LEAVES]: { name: "Leaves", solid: true, transparent: true, textures: { all: "leaves" } },
  [BlockId.WATER]: { name: "Water", solid: false, transparent: true, textures: { all: "water" } },
  [BlockId.BEDROCK]: { name: "Bedrock", solid: true, transparent: false, textures: { all: "bedrock" } },
  [BlockId.SNOW]: { name: "Snow", solid: true, transparent: false, textures: { all: "snow" } },
  [BlockId.CACTUS]: {
    name: "Cactus",
    solid: true,
    transparent: false,
    textures: { top: "cactus_top", side: "cactus_side", bottom: "cactus_top" },
  },
  [BlockId.FLOWER_RED]: { name: "Red Flower", solid: false, transparent: true, textures: { all: "flower_red" } },
  [BlockId.FLOWER_YELLOW]: {
    name: "Yellow Flower",
    solid: false,
    transparent: true,
    textures: { all: "flower_yellow" },
  },
  [BlockId.VINE]: { name: "Vine", solid: false, transparent: true, textures: { all: "vine" } },
  [BlockId.GRAVEL]: { name: "Gravel", solid: true, transparent: false, textures: { all: "gravel" } },
  [BlockId.MOSS]: { name: "Moss", solid: true, transparent: false, textures: { all: "moss" } },
  [BlockId.CASTLE_BRICK]: {
    name: "Castle Brick",
    solid: true,
    transparent: false,
    textures: { all: "castle_brick" },
  },
  [BlockId.APPLE]: { name: "Apple", solid: false, transparent: true, textures: { all: "apple" } },
  [BlockId.WEAPON_BANDIT_BLADE]: {
    name: "Bandit Blade",
    solid: false,
    transparent: true,
    textures: { all: "stone" },
  },
  [BlockId.WEAPON_RAIDER_SABER]: {
    name: "Raider Saber",
    solid: false,
    transparent: true,
    textures: { all: "stone" },
  },
  [BlockId.WEAPON_SCORP_BOW]: {
    name: "Scorpion Bow",
    solid: false,
    transparent: true,
    textures: { all: "stone" },
  },
  [BlockId.WEAPON_JAGUAR_CLAWS]: {
    name: "Jaguar Claws",
    solid: false,
    transparent: true,
    textures: { all: "stone" },
  },
  [BlockId.WEAPON_WRAITH_HAMMER]: {
    name: "Wraith Hammer",
    solid: false,
    transparent: true,
    textures: { all: "stone" },
  },
  [BlockId.WEAPON_YETI_AXE]: {
    name: "Yeti Axe",
    solid: false,
    transparent: true,
    textures: { all: "stone" },
  },
  [BlockId.PLANK]: {
    name: "Plank",
    solid: true,
    transparent: false,
    textures: { all: "plank" },
  },
  [BlockId.STICK]: {
    name: "Stick",
    solid: false,
    transparent: true,
    textures: { all: "plank" },
  },
  [BlockId.WOOD_SWORD]: {
    name: "Wood Sword",
    solid: false,
    transparent: true,
    textures: { all: "plank" },
  },
  [BlockId.WOOD_AXE]: {
    name: "Wood Axe",
    solid: false,
    transparent: true,
    textures: { all: "plank" },
  },
  [BlockId.WOOD_PICKAXE]: {
    name: "Wood Pickaxe",
    solid: false,
    transparent: true,
    textures: { all: "plank" },
  },
  [BlockId.WOOD_SPADE]: {
    name: "Wood Spade",
    solid: false,
    transparent: true,
    textures: { all: "plank" },
  },
  [BlockId.STONE_SWORD]: {
    name: "Stone Sword",
    solid: false,
    transparent: true,
    textures: { all: "stone" },
  },
  [BlockId.STONE_AXE]: {
    name: "Stone Axe",
    solid: false,
    transparent: true,
    textures: { all: "stone" },
  },
  [BlockId.STONE_PICKAXE]: {
    name: "Stone Pickaxe",
    solid: false,
    transparent: true,
    textures: { all: "stone" },
  },
  [BlockId.STONE_SPADE]: {
    name: "Stone Spade",
    solid: false,
    transparent: true,
    textures: { all: "stone" },
  },
  [BlockId.BRAMBLE]: {
    name: "Bramble",
    solid: false,
    transparent: true,
    textures: { all: "bramble" },
  },
  [BlockId.SKELETON_SPAWNER]: {
    name: "Skeleton Spawner",
    solid: true,
    transparent: false,
    textures: { all: "skeleton_spawner" },
  },
  [BlockId.BOW]: {
    name: "Bow",
    solid: false,
    transparent: true,
    textures: { all: "plank" },
  },
  [BlockId.ARROW]: {
    name: "Arrow",
    solid: false,
    transparent: true,
    textures: { all: "stone" },
  },
  [BlockId.WIZARD_GROUP_SPAWNER]: {
    name: "Wizard Group Spawner",
    solid: true,
    transparent: false,
    textures: { all: "wizard_group_spawner" },
  },
  [BlockId.IRON_SWORD]: {
    name: "Iron Sword",
    solid: false,
    transparent: true,
    textures: { all: "stone" },
  },
};

/**
 * Returns whether a block ID represents a solid (collidable) block.
 * Used by the physics engine and the mesher's face-culling logic.
 * Returns `false` for unknown IDs.
 * @param {number} id - A {@link BlockId} value.
 * @returns {boolean} `true` if the block is solid.
 */
export function isSolid(id) {
  return BLOCKS[id]?.solid ?? false;
}

/**
 * Returns whether a block ID represents a transparent block.
 * Transparent blocks are rendered in a separate pass with alpha blending
 * and can have faces rendered against each other.
 * Defaults to `true` for unknown IDs (treat unknown as invisible).
 * @param {number} id - A {@link BlockId} value.
 * @returns {boolean} `true` if the block is transparent.
 */
export function isTransparent(id) {
  return BLOCKS[id]?.transparent ?? true;
}

/**
 * Returns whether a block can be broken by the player.
 * Air and Bedrock are the only indestructible blocks; everything else is breakable.
 * @param {number} id - A {@link BlockId} value.
 * @returns {boolean} `true` if the player can mine this block.
 */
export function isBreakable(id) {
  return id !== BlockId.AIR && id !== BlockId.BEDROCK;
}

/**
 * Returns the time in seconds the player must hold the mouse button to break a block.
 * Drives the crack-overlay animation stages in `blockInteraction.js`.
 * Non-solid decorative blocks break almost instantly while dense blocks like
 * Castle Brick take the longest.
 * @param {number} id - A {@link BlockId} value.
 * @returns {number} Break duration in seconds.
 */
export function getBreakDuration(id) {
  switch (id) {
    case BlockId.FLOWER_RED:
    case BlockId.FLOWER_YELLOW:
    case BlockId.VINE:
    case BlockId.BRAMBLE:
      return 0.12;
    case BlockId.LEAVES:
    case BlockId.APPLE:
      return 0.2;
    case BlockId.WATER:
      return 0.25;
    case BlockId.DIRT:
    case BlockId.GRASS:
    case BlockId.SAND:
    case BlockId.SNOW:
    case BlockId.MOSS:
      return 0.5;
    case BlockId.LOG:
    case BlockId.PLANK:
    case BlockId.CACTUS:
      return 0.8;
    case BlockId.STONE:
    case BlockId.GRAVEL:
    case BlockId.SKELETON_SPAWNER:
    case BlockId.WIZARD_GROUP_SPAWNER:
      return 1.35;
    case BlockId.CASTLE_BRICK:
      return 1.75;
    default:
      return 0.6;
  }
}
