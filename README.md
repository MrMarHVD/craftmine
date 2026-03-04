# Browser-Based Voxel World Engine

Standalone browser voxel engine implemented with custom world/chunk generation, meshing, physics, controls, and interaction logic.

## Biomes Implemented
- Forest (required): grass terrain, moderate hills, procedural trees (log + leaves)
- Desert (candidate choice): sand terrain, lower vegetation density, dune-like elevations

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
- Left click: break targeted block
- Right click: place selected block
- Mouse wheel or number keys (`1-8`): hotbar selection

## Requirements Mapping
- Deterministic seeded generation: fixed seed in `src/main.js` (`worldSeed = 20260304`)
- Chunked world: `16 x 16 x 128` chunks, render distance = 4 chunks in each direction
- Layered terrain: surface -> dirt/sand sublayers -> stone -> bedrock at `y=0`
- Required block types with textures: grass, dirt, stone, sand, log, leaves, water, bedrock
- UV atlas textures: generated locally in `src/textureAtlas.js`
- Face culling + merged chunk geometry: built in `src/chunkMesher.js`
- Physics: gravity, jumping, AABB collision, grounded detection, wall sliding in `src/player.js`
- Interaction: DDA voxel raycast, break/place with reach limit, target highlight in `src/raycast.js` + `src/main.js`
- UI: crosshair, hotbar, mode indicator, coordinates, FPS, pointer-lock instruction overlay

## Project Layout
- `src/main.js`: app bootstrap, render loop, interactions
- `src/world.js`: generation, chunk cache/load/unload, dirty rebuild scheduling
- `src/chunkMesher.js`: chunk mesh generation and face visibility rules
- `src/player.js`: movement, camera orientation, physics/collision
- `src/raycast.js`: block targeting ray traversal
- `src/textureAtlas.js`: procedural texture atlas generation + face UV mapping
- `src/blocks.js`: block registry and properties
- `src/constants.js`: gameplay/world constants
- `src/ui.js`: HUD and hotbar rendering
