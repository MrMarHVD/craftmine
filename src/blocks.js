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
