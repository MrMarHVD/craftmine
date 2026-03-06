export const BlockId = {
  AIR: 0,
  GRASS: 1,
  DIRT: 2,
  STONE: 3,
  SAND: 4,
  LOG: 5,
  LEAVES: 6,
  WATER: 7,
  BEDROCK: 8,
  SNOW: 9,
  CACTUS: 10,
  FLOWER_RED: 11,
  FLOWER_YELLOW: 12,
  VINE: 13,
  GRAVEL: 14,
  MOSS: 15,
  CASTLE_BRICK: 16,
  APPLE: 17,
  WEAPON_BANDIT_BLADE: 18,
  WEAPON_RAIDER_SABER: 19,
  WEAPON_SCORP_BOW: 20,
  WEAPON_JAGUAR_CLAWS: 21,
  WEAPON_WRAITH_HAMMER: 22,
  WEAPON_YETI_AXE: 23,
};

export const FACE = {
  PX: 0,
  NX: 1,
  PY: 2,
  NY: 3,
  PZ: 4,
  NZ: 5,
};

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
};

export function isSolid(id) {
  return BLOCKS[id]?.solid ?? false;
}

export function isTransparent(id) {
  return BLOCKS[id]?.transparent ?? true;
}

export function isBreakable(id) {
  return id !== BlockId.AIR && id !== BlockId.BEDROCK;
}

export function getBreakDuration(id) {
  switch (id) {
    case BlockId.FLOWER_RED:
    case BlockId.FLOWER_YELLOW:
    case BlockId.VINE:
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
    case BlockId.CACTUS:
      return 0.8;
    case BlockId.STONE:
    case BlockId.GRAVEL:
      return 1.35;
    case BlockId.CASTLE_BRICK:
      return 1.75;
    default:
      return 0.6;
  }
}
