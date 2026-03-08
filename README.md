# Craftmine

Standalone browser voxel sandbox with procedural biomes, caves, ravines, mobs, quests, multiplayer, day/night lighting, and client-side world generation.

## Run locally

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

## Build

```bash
npm run build
```

## Multiplayer

The browser client connects to a Cloudflare Worker / Durable Object room over WebSocket.

Local worker development:

```bash
npm run mp:dev
```

Worker deploy:

```bash
npm run mp:deploy
```

## Equipment Rendering

Players now visually carry the item selected in their hotbar.

- In first-person, your currently selected item is shown as a view model in the lower-right of the screen.
- In multiplayer, other players show their selected item attached to the right hand of their humanoid model.
- Enemy-dropped weapons have unique silhouettes rather than reusing a generic block model.
- Regular blocks and apples also render as held items, so the selected slot is readable from a distance.

Current bespoke weapon designs:

- `Bandit Blade`: short iron sword with a rugged crossguard.
- `Raider Saber`: forward-leaning curved saber.
- `Scorpion Bow`: compact bow with offset limbs and string.
- `Jaguar Claws`: triple claw gauntlet.
- `Wraith Hammer`: heavy stone hammer with amber accents.
- `Yeti Axe`: icy axe head with a secondary back blade.

## Controls

- `WASD`: move
- `Mouse`: look
- `Space`: jump / fly up
- `Shift`: sneak / fly down
- `Double-tap Space`: toggle fly mode
- `Left Click`: attack mob / break block
- `Right Click`: place selected block
- `1-8` or mouse wheel: select hotbar slot
- `E`: inventory
- `F`: interact with quest giver
- `R`: eat apple
- `U`: debug pane
