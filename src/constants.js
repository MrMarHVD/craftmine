/**
 * @module constants
 * @description Central repository of all numeric game constants. Every system
 * that needs a tunable value — world generation, physics, rendering, player
 * movement — imports from this file so the values stay in one place.
 */

/** Number of blocks along each horizontal axis of a single chunk. */
export const CHUNK_SIZE = 16;

/** Total number of block layers in the vertical axis of the world. */
export const WORLD_HEIGHT = 128;

/** How many chunks out from the player's chunk are loaded in each direction. */
export const RENDER_DISTANCE = 4;

/** Y level at or below which columns are filled with water during generation. */
export const SEA_LEVEL = 24;

/** Maximum block-placing and block-breaking distance from the camera, in world units. */
export const REACH_DISTANCE = 6;

/** Width of the player's AABB collision box in world units. */
export const PLAYER_WIDTH = 0.6;

/** Full height of the player's AABB collision box in world units. */
export const PLAYER_HEIGHT = 1.8;

/** Y offset from the player's feet position where the camera is placed. */
export const PLAYER_EYE_HEIGHT = 1.62;

/** Horizontal movement speed while walking, in blocks per second. */
export const WALK_SPEED = 5.2;

/** Horizontal movement speed while sneaking (Shift held), in blocks per second. */
export const SNEAK_SPEED = 2.6;

/** Movement speed in all directions while in fly mode, in blocks per second. */
export const FLY_SPEED = 100;

/** Initial upward velocity applied when the player jumps, in blocks per second. */
export const JUMP_VELOCITY = 8.8;

/** Downward acceleration applied each second while the player is airborne, in blocks per second squared. */
export const GRAVITY = 26;

/** Maximum downward velocity the player can reach during free-fall, in blocks per second. */
export const TERMINAL_VELOCITY = -55;

/** Maximum interval between two Space presses that counts as a double-tap to toggle fly mode, in milliseconds. */
export const DOUBLE_TAP_MS = 280;

/** Full day-night cycle duration in seconds (10 minutes). */
export const DAY_NIGHT_CYCLE_SECONDS = 600;
