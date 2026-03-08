/**
 * @module ui/icons
 * @description Procedurally draws 24×24 pixel canvas icons for every block and
 * weapon type in the game and returns them as data URLs. `createIconMap` is the
 * primary export; the resulting `Map<BlockId, string>` is used by `UI` to
 * render item images in hotbar slots and inventory slots without any external
 * image assets.
 */

import { BLOCKS, BlockId } from "../blocks.js";

/** Side length in pixels of each generated icon canvas. */
export const ICON_SIZE = 24;

/**
 * Fills the current canvas context with per-pixel colour noise centred on the
 * given RGB values. Used as the base texture layer for solid block icons to
 * give them visual variety similar to the atlas tiles.
 * @param {CanvasRenderingContext2D} ctx - 2-D context to draw into.
 * @param {number} r - Red channel base value in [0, 255].
 * @param {number} g - Green channel base value in [0, 255].
 * @param {number} b - Blue channel base value in [0, 255].
 * @param {number} [variance=12] - Maximum per-pixel deviation in each colour channel.
 * @param {number} [alpha=255] - Alpha value for all pixels in [0, 255].
 */
export function drawNoise(ctx, r, g, b, variance = 12, alpha = 255) {
  const img = ctx.createImageData(ICON_SIZE, ICON_SIZE);
  for (let i = 0; i < img.data.length; i += 4) {
    const n = (Math.random() * variance - variance * 0.5) | 0;
    img.data[i] = Math.max(0, Math.min(255, r + n));
    img.data[i + 1] = Math.max(0, Math.min(255, g + n));
    img.data[i + 2] = Math.max(0, Math.min(255, b + n));
    img.data[i + 3] = alpha;
  }
  ctx.putImageData(img, 0, 0);
}

/**
 * Creates a 24×24 canvas icon for the given `blockId` using Canvas 2D drawing
 * commands and returns it as a PNG data URL. Each block type has a bespoke set
 * of draw calls that approximate the block's in-world appearance at icon scale.
 * Weapon items are drawn as simple silhouettes matching their shape (blade,
 * saber, bow, claws, hammer, axe).
 * @param {number} blockId - A {@link BlockId} value (must not be `BlockId.AIR`).
 * @returns {string} PNG data URL for the icon image.
 */
export function createIcon(blockId) {
  const c = document.createElement("canvas");
  c.width = ICON_SIZE;
  c.height = ICON_SIZE;
  const ctx = c.getContext("2d");

  switch (blockId) {
    case BlockId.GRASS:
      drawNoise(ctx, 118, 92, 60, 14);
      ctx.fillStyle = "rgba(67,160,72,0.95)";
      ctx.fillRect(0, 0, ICON_SIZE, 7);
      break;
    case BlockId.DIRT:
      drawNoise(ctx, 122, 84, 55, 16);
      break;
    case BlockId.STONE:
      drawNoise(ctx, 122, 124, 132, 16);
      break;
    case BlockId.SAND:
      drawNoise(ctx, 216, 199, 128, 14);
      break;
    case BlockId.LOG:
      drawNoise(ctx, 120, 90, 58, 14);
      ctx.fillStyle = "rgba(90,58,30,0.3)";
      for (let x = 2; x < ICON_SIZE; x += 5) ctx.fillRect(x, 0, 2, ICON_SIZE);
      break;
    case BlockId.LEAVES:
      drawNoise(ctx, 68, 150, 70, 28, 230);
      break;
    case BlockId.WATER:
      drawNoise(ctx, 63, 120, 210, 14, 210);
      ctx.fillStyle = "rgba(175,218,255,0.3)";
      ctx.fillRect(0, 5, ICON_SIZE, 3);
      break;
    case BlockId.BEDROCK:
      drawNoise(ctx, 58, 58, 58, 24);
      break;
    case BlockId.SNOW:
      drawNoise(ctx, 233, 239, 245, 8);
      break;
    case BlockId.CACTUS:
      drawNoise(ctx, 57, 145, 67, 12);
      ctx.fillStyle = "rgba(33,95,40,0.35)";
      for (let x = 1; x < ICON_SIZE; x += 4) ctx.fillRect(x, 0, 1, ICON_SIZE);
      break;
    case BlockId.FLOWER_RED:
      ctx.fillStyle = "rgba(57,146,65,0.95)";
      ctx.fillRect(11, 7, 2, 15);
      ctx.fillStyle = "rgba(196,36,46,0.95)";
      ctx.fillRect(8, 3, 8, 6);
      break;
    case BlockId.FLOWER_YELLOW:
      ctx.fillStyle = "rgba(57,146,65,0.95)";
      ctx.fillRect(11, 7, 2, 15);
      ctx.fillStyle = "rgba(240,197,43,0.95)";
      ctx.fillRect(8, 3, 8, 6);
      break;
    case BlockId.VINE:
      ctx.fillStyle = "rgba(49,130,52,0.8)";
      for (let i = 0; i < 7; i++) {
        const x = 3 + ((i * 3) % 16);
        ctx.fillRect(x, 2 + i * 2, 2, 3);
      }
      break;
    case BlockId.GRAVEL:
      drawNoise(ctx, 132, 128, 121, 20);
      break;
    case BlockId.MOSS:
      drawNoise(ctx, 82, 126, 66, 16);
      break;
    case BlockId.CASTLE_BRICK:
      drawNoise(ctx, 118, 117, 124, 10);
      ctx.fillStyle = "rgba(66,66,74,0.45)";
      for (let y = 0; y < ICON_SIZE; y += 6) ctx.fillRect(0, y, ICON_SIZE, 1);
      break;
    case BlockId.APPLE:
      ctx.fillStyle = "rgba(197,36,36,0.95)";
      ctx.fillRect(6, 6, 12, 12);
      ctx.fillStyle = "rgba(230,120,120,0.55)";
      ctx.fillRect(8, 8, 4, 4);
      ctx.fillStyle = "rgba(80,144,61,0.9)";
      ctx.fillRect(11, 3, 3, 3);
      break;
    case BlockId.WEAPON_BANDIT_BLADE:
      ctx.fillStyle = "rgba(186,188,196,0.95)";
      ctx.fillRect(10, 3, 4, 14);
      ctx.fillStyle = "rgba(110,74,36,0.95)";
      ctx.fillRect(9, 17, 6, 4);
      break;
    case BlockId.WEAPON_RAIDER_SABER:
      ctx.fillStyle = "rgba(202,204,214,0.95)";
      ctx.fillRect(7, 4, 10, 3);
      ctx.fillRect(14, 6, 3, 10);
      ctx.fillStyle = "rgba(126,86,40,0.95)";
      ctx.fillRect(6, 16, 8, 4);
      break;
    case BlockId.WEAPON_SCORP_BOW:
      ctx.strokeStyle = "rgba(158,106,52,0.95)";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(12, 12, 7, Math.PI * 0.2, Math.PI * 1.8);
      ctx.stroke();
      ctx.strokeStyle = "rgba(220,220,220,0.9)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(17, 5);
      ctx.lineTo(17, 19);
      ctx.stroke();
      break;
    case BlockId.WEAPON_JAGUAR_CLAWS:
      ctx.fillStyle = "rgba(220,220,228,0.95)";
      ctx.fillRect(6, 4, 2, 14);
      ctx.fillRect(11, 4, 2, 14);
      ctx.fillRect(16, 4, 2, 14);
      break;
    case BlockId.WEAPON_WRAITH_HAMMER:
      ctx.fillStyle = "rgba(132,138,150,0.95)";
      ctx.fillRect(7, 5, 10, 6);
      ctx.fillStyle = "rgba(122,86,50,0.95)";
      ctx.fillRect(11, 11, 2, 11);
      break;
    case BlockId.WEAPON_YETI_AXE:
      ctx.fillStyle = "rgba(176,212,236,0.95)";
      ctx.fillRect(6, 6, 10, 7);
      ctx.fillStyle = "rgba(116,82,48,0.95)";
      ctx.fillRect(13, 11, 2, 10);
      break;
    case BlockId.PLANK:
      drawNoise(ctx, 171, 128, 84, 12);
      ctx.fillStyle = "rgba(102,72,42,0.35)";
      for (let y = 0; y < ICON_SIZE; y += 6) ctx.fillRect(0, y, ICON_SIZE, 1);
      break;
    case BlockId.STICK:
      ctx.fillStyle = "rgba(134,94,58,0.95)";
      ctx.fillRect(11, 3, 2, 18);
      break;
    case BlockId.WOOD_SWORD:
      ctx.fillStyle = "rgba(177,132,82,0.95)";
      ctx.fillRect(10, 3, 4, 14);
      ctx.fillStyle = "rgba(110,74,42,0.95)";
      ctx.fillRect(9, 17, 6, 4);
      break;
    case BlockId.WOOD_AXE:
      ctx.fillStyle = "rgba(124,86,50,0.95)";
      ctx.fillRect(11, 6, 2, 15);
      ctx.fillStyle = "rgba(184,142,91,0.95)";
      ctx.fillRect(7, 4, 8, 6);
      break;
    case BlockId.WOOD_PICKAXE:
      ctx.fillStyle = "rgba(124,86,50,0.95)";
      ctx.fillRect(11, 6, 2, 15);
      ctx.fillRect(6, 5, 12, 3);
      break;
    case BlockId.WOOD_SPADE:
      ctx.fillStyle = "rgba(124,86,50,0.95)";
      ctx.fillRect(11, 8, 2, 13);
      ctx.fillStyle = "rgba(185,143,95,0.95)";
      ctx.fillRect(8, 3, 8, 7);
      break;
    case BlockId.STONE_SWORD:
      ctx.fillStyle = "rgba(186,190,199,0.95)";
      ctx.fillRect(10, 3, 4, 14);
      ctx.fillStyle = "rgba(110,74,42,0.95)";
      ctx.fillRect(9, 17, 6, 4);
      break;
    case BlockId.STONE_AXE:
      ctx.fillStyle = "rgba(124,86,50,0.95)";
      ctx.fillRect(11, 6, 2, 15);
      ctx.fillStyle = "rgba(168,173,182,0.95)";
      ctx.fillRect(7, 4, 8, 6);
      break;
    case BlockId.STONE_PICKAXE:
      ctx.fillStyle = "rgba(124,86,50,0.95)";
      ctx.fillRect(11, 6, 2, 15);
      ctx.fillStyle = "rgba(168,173,182,0.95)";
      ctx.fillRect(6, 5, 12, 3);
      break;
    case BlockId.STONE_SPADE:
      ctx.fillStyle = "rgba(124,86,50,0.95)";
      ctx.fillRect(11, 8, 2, 13);
      ctx.fillStyle = "rgba(168,173,182,0.95)";
      ctx.fillRect(8, 3, 8, 7);
      break;
    case BlockId.BRAMBLE:
      ctx.fillStyle = "rgba(80,120,56,0.95)";
      for (let i = 0; i < 4; i++) ctx.fillRect(5 + i * 4, 6 - (i % 2), 2, 13);
      ctx.fillStyle = "rgba(110,74,44,0.9)";
      ctx.fillRect(6, 11, 12, 2);
      break;
    default:
      drawNoise(ctx, 90, 90, 90, 10);
      break;
  }

  return c.toDataURL();
}

/**
 * Generates icons for every non-air block in the game and returns them in a
 * Map keyed by block ID. Called once during `UI` construction and the resulting
 * map is stored on the UI instance for use in slot rendering. Air is excluded
 * because empty slots have no visible icon.
 * @returns {Map<number, string>} A map from block ID to PNG data URL.
 */
export function createIconMap() {
  const map = new Map();
  Object.keys(BLOCKS).forEach((k) => {
    const id = Number(k);
    if (id === BlockId.AIR) return;
    map.set(id, createIcon(id));
  });
  return map;
}
