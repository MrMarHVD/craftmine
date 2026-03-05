# Browser-Based Voxel World Engine

Standalone browser voxel engine implemented with custom world/chunk generation, meshing, physics, controls, and interaction logic.

## Biomes Implemented
- Forest: grass terrain, rolling hills, dense trees, wild flowers
- Desert: dunes, cactus clusters, gravel outcrops
- Jungle: humid terrain, tall jungle trees, hanging vines, moss patches, flowers
- Mountain: tall procedural mountain ranges, rocky spires, snow caps
- Plains: flatter grasslands, frequent flower fields, sparse trees
- Tundra: cold snow surface, sparse scrub/rocky patches

Biome boundaries are generated using a climate blend (temperature + moisture noise fields), so transitions are smooth and not straight-line cuts.

## Terrain Extras
- Random ravines are procedurally carved into terrain.
- Enterable caves are generated, with high-probability continuation into larger underground cave systems and branching routes.

## Mob System
- Each biome has biome-specific natural wildlife and a biome-specific hostile mob.
- Hostile mobs now spawn from rare long-interval hostile sites (roughly 200-1000+ block spacing depending on region rolls), not random per-chunk placement.
- Bandits/raiders spawn in groups at those sites and stay around their group area until the player enters aggro range.
- Hostile mobs perform attack motions near the player (no player damage yet).
- Hostile roster includes `Yeti` (Tundra) and `Bandit` (Forest), plus unique hostile variants for the other biomes.
- Natural examples include sheep, deer, lizards, goats, reindeer, and flying birds (parrot-like jungle mobs).
- Mobs now use species-specific models with different silhouettes, faces/eyes, limbs, horns/wings, and distinct body proportions.
- Mobs have walk/fly idle animations (leg/arm gait, wing flaps, tail/head motion) tied to movement.

## Rare Castle Structure
- Rarely, a large procedural castle generates in the world.
- Castle layout is assembled from modular pieces: a keep, corridors, multiple room modules, towers, and connected openings.
- Internal structure includes floors, walls, roofs/battlements, tower interiors, and room pillars.
- Castle generation is deterministic from the world seed and region coordinates.

## Quest System (Initial)
- Some human NPC questgivers spawn in selected biomes (Forest, Plains, Jungle).
- Press `F` near a questgiver to open dialogue.
- Questgivers provide randomized gather quests (flowers/vines/cactus/moss).
- Completing a quest grants gold coins shown in the HUD.
- Dialogue includes interactive options (accept/decline/turn-in/close).

## Tech Stack
- Rendering: Three.js (WebGL)
- Bundler/dev server: Vite
- Core systems implemented in-app (no voxel/physics gameplay engine):
  - voxel world/chunk management
  - procedural terrain + biome assignment + tree placement
  - custom AABB player physics and collision response
  - first-person camera + pointer-lock controls
  - block break/place + hotbar selection

## Run
1. Install dependencies:
```bash
npm install
```
2. Start development server:
```bash
npm run dev
```
3. Open the local URL printed by Vite (typically `http://localhost:5173`).

Optional production build:
```bash
npm run build
npm run preview
```

## Controls
- Click canvas: capture pointer lock
- Mouse: look around
- `W/A/S/D`: move
- `Space` (walk mode): jump
- `Shift` (walk mode): sneak / slower movement
- Double tap `Space`: toggle fly mode on/off
- `Space` (fly mode): move up
- `Shift` (fly mode): move down
- `Esc`: release pointer lock
- `E`: open/close inventory
- `F`: interact/talk with nearby questgiver
- `U`: open/close debug pane
- `R`: eat one apple (heals health when health system is enabled)
- Left click: break targeted block
- Right click: place selected block
- Mouse wheel or number keys (`1-8`): hotbar selection
- Inventory has 30 slots; clicking an inventory slot maps that item to the currently active hotbar slot
- You now start with an empty inventory and gather items by breaking corresponding world blocks
- Inventory and hotbar slots display item icons for all collectible/placeable block/item types
- Debug pane allows runtime tuning of walk/fly speed (fly capped at 300), health system toggle, and hostile agro toggle
- Debug pane also includes a mini-map on/off toggle

## Requirements Mapping
- Deterministic seeded generation: fixed seed in `src/main.js` (`worldSeed = 20260304`)
- Chunked world: `16 x 16 x 128` chunks, render distance = 4 chunks in each direction
- Layered terrain: surface -> dirt/sand sublayers -> stone -> bedrock at `y=0`
- Required block types with textures: grass, dirt, stone, sand, log, leaves, water, bedrock
- Additional textured blocks: snow, cactus, red flower, yellow flower, vine, gravel, moss
- UV atlas textures: generated locally in `src/textureAtlas.js`
- Face culling + merged chunk geometry: built in `src/chunkMesher.js`
- Physics: gravity, jumping, AABB collision, grounded detection, wall sliding in `src/player.js`
- Interaction: DDA voxel raycast, break/place with reach limit, target highlight in `src/raycast.js` + `src/main.js`
- UI: crosshair, hotbar, inventory panel (30 slots), mode indicator, coordinates, FPS, pointer-lock instruction overlay
- Mobs: biome-based natural + hostile mob spawning and simple AI behaviors
- Quests: questgiver NPC interaction with dialogue and coin rewards
- Health system: optional red health bar with hostile hit damage (toggleable in debug pane)
- Forest bonus tree: apple trees with apple blocks that drop edible apples for healing

## Project Layout
- `src/main.js`: app bootstrap, render loop, interactions
- `src/mobs.js`: biome mob spawning, behavior updates, questgiver entities
- `src/quests.js`: quest state, dialogue flows, reward handling
- `src/world.js`: public world exports (barrel)
- `src/world/World.js`: world runtime, chunk cache/load/unload, dirty rebuild scheduling
- `src/world/biomes.js`: biome definitions and climate/column calculations
- `src/world/features.js`: procedural biome feature placement (trees/plants/spires)
- `src/world/castles.js`: rare modular castle generation/stamping
- `src/world/grid.js`: shared world grid indexing/key helpers
- `src/chunkMesher.js`: chunk mesh generation and face visibility rules
- `src/player.js`: movement, camera orientation, physics/collision
- `src/raycast.js`: block targeting ray traversal
- `src/textureAtlas.js`: procedural texture atlas generation + face UV mapping
- `src/blocks.js`: block registry and properties
- `src/constants.js`: gameplay/world constants
- `src/ui.js`: HUD and hotbar rendering
