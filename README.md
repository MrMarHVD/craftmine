# Voxel World (Browser + Cloudflare Multiplayer)

This project is a browser voxel game (Three.js) with:

- Procedural terrain, biomes, caves/ravines, castles
- Mobs, combat, quests, inventory/hotbar
- Day/night cycle, clouds, HUD, debug pane
- Multiplayer netcode (Cloudflare Worker + Durable Object)

The multiplayer model is a **single shared world room** (`/ws/main`) with up to **10 concurrent players**.
World state is in-memory on the Durable Object and naturally resets on deploy/restart.

## 1) Run game client locally

```bash
npm install
npm run dev
```

Open the printed Vite URL.

## 2) Run multiplayer server locally (Cloudflare worker)

Requirements:

- Node 20+
- Wrangler CLI (`npm i -g wrangler` or use `npx wrangler`)

Start worker:

```bash
npm run mp:dev
```

By default Wrangler runs at `http://127.0.0.1:8787`.

Point the game client to the worker websocket by creating `.env.local`:

```bash
VITE_MP_WS_URL=ws://127.0.0.1:8787/ws/main
```

Restart `npm run dev`.

Now multiple browser tabs/windows should join the same world.

## 3) Deploy multiplayer to Cloudflare (free tier)

1. Login:

```bash
wrangler login
```

2. Deploy the worker:

```bash
npm run mp:deploy
```

This publishes:

- Worker entry: `cloudflare/worker.js`
- Durable Object binding: `WORLD_ROOM`
- Durable Object class: `WorldRoom`

3. Host the frontend (e.g. Cloudflare Pages or any static host).

For production client build, set:

```bash
VITE_MP_WS_URL=wss://<your-worker-or-routed-domain>/ws/main
```

Then build/deploy frontend:

```bash
npm run build
```

## Multiplayer architecture (implemented)

- Authoritative room process lives in Durable Object `WorldRoom`.
- Clients send:
  - `player_state` (position/look/fly state)
  - `block_set` (place/break block event)
- Server validates and broadcasts:
  - `welcome`
  - `player_join` / `player_leave`
  - `players_snapshot` (15 Hz)
  - `block_set`
- Shared block modifications are synchronized to all clients.
- Remote players are rendered as animated humanoids.

## Notes

- Current room hard limit is 10 clients (`MAX_CLIENTS` in `cloudflare/worker.js`).
- This implementation intentionally keeps state simple and ephemeral.
- Future scaling path: multiple room IDs/world IDs and optional persistence.
