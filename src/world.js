/**
 * @module world
 * @description Public barrel re-export for the world subsystem. Consumers
 * should import `World`, `BIOME`, and `BIOME_NAME` from this file rather than
 * from the internal `world/World.js` path, keeping the module boundary clean.
 */
export { BIOME, BIOME_NAME, World } from "./world/World.js";
