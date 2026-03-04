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
