const MAX_CLIENTS = 10;
const SNAPSHOT_HZ = 15;

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "access-control-allow-origin": "*",
    },
  });
}

function clamp(v, lo, hi) {
  return Math.max(lo, Math.min(hi, v));
}

function safeName(raw) {
  const s = String(raw ?? "Player").trim();
  return (s || "Player").slice(0, 24);
}

function keyXYZ(x, y, z) {
  return `${x},${y},${z}`;
}

export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    if (req.method === "OPTIONS") return new Response(null, { status: 204 });
    if (url.pathname === "/health") return json({ ok: true });

    if (!url.pathname.startsWith("/ws/")) {
      return json({ ok: true, service: "voxel-mp-worker" });
    }

    if (req.headers.get("upgrade") !== "websocket") {
      return new Response("Expected WebSocket upgrade", { status: 426 });
    }

    const roomName = url.pathname.slice("/ws/".length) || "main";
    const id = env.WORLD_ROOM.idFromName(roomName);
    return env.WORLD_ROOM.get(id).fetch(req);
  },
};

export class WorldRoom {
  constructor(state, env) {
    this.state = state;
    this.env = env;
    this.players = new Map(); // playerId -> state
    this.sockets = new Map(); // socket -> playerId
    this.blocks = new Map(); // "x,y,z" -> id

    this.snapshotTimer = setInterval(() => this.broadcastSnapshot(), Math.floor(1000 / SNAPSHOT_HZ));
  }

  async fetch(req) {
    const url = new URL(req.url);
    if (req.headers.get("upgrade") !== "websocket") {
      return new Response("Expected WebSocket", { status: 426 });
    }

    if (this.players.size >= MAX_CLIENTS) {
      return new Response("Room full", { status: 503 });
    }

    const pair = new WebSocketPair();
    const client = pair[0];
    const server = pair[1];
    server.accept();

    const playerId = crypto.randomUUID();
    const name = safeName(url.searchParams.get("name"));
    const spawnX = (Math.random() - 0.5) * 8;
    const spawnZ = (Math.random() - 0.5) * 8;
    const player = {
      id: playerId,
      name,
      x: spawnX,
      y: 50,
      z: spawnZ,
      yaw: 0,
      pitch: 0,
      flyMode: false,
      heldItemId: 0,
      armorIds: [0, 0, 0, 0],
      t: Date.now(),
    };

    this.players.set(playerId, player);
    this.sockets.set(server, playerId);

    this.send(server, {
      type: "welcome",
      id: playerId,
      serverNowMs: Date.now(),
      players: [...this.players.values()],
      blocks: [...this.blocks.entries()].map(([k, id]) => {
        const [x, y, z] = k.split(",").map((n) => Number(n));
        return { x, y, z, id };
      }),
    });

    this.broadcast({ type: "player_join", player }, server);

    server.addEventListener("message", (ev) => {
      this.onMessage(server, ev.data);
    });
    server.addEventListener("close", () => this.onDisconnect(server));
    server.addEventListener("error", () => this.onDisconnect(server));

    return new Response(null, { status: 101, webSocket: client });
  }

  onMessage(server, raw) {
    let msg;
    try {
      msg = JSON.parse(raw);
    } catch {
      return;
    }
    const id = this.sockets.get(server);
    if (!id) return;
    const player = this.players.get(id);
    if (!player) return;

    if (msg.type === "hello") {
      player.name = safeName(msg.name ?? player.name);
      return;
    }

    if (msg.type === "player_state") {
      player.x = Number.isFinite(msg.x) ? clamp(msg.x, -100000, 100000) : player.x;
      player.y = Number.isFinite(msg.y) ? clamp(msg.y, 0, 127) : player.y;
      player.z = Number.isFinite(msg.z) ? clamp(msg.z, -100000, 100000) : player.z;
      player.yaw = Number.isFinite(msg.yaw) ? msg.yaw : player.yaw;
      player.pitch = Number.isFinite(msg.pitch) ? clamp(msg.pitch, -1.56, 1.56) : player.pitch;
      player.flyMode = !!msg.flyMode;
      player.heldItemId = Number.isFinite(msg.heldItemId) ? clamp(Math.floor(msg.heldItemId), 0, 255) : player.heldItemId;
      if (Array.isArray(msg.armorIds)) {
        player.armorIds = msg.armorIds.slice(0, 4).map((id) => (Number.isFinite(id) ? clamp(Math.floor(id), 0, 255) : 0));
        while (player.armorIds.length < 4) player.armorIds.push(0);
      }
      player.t = Date.now();
      return;
    }

    if (msg.type === "block_set") {
      const x = Math.floor(msg.x);
      const y = Math.floor(msg.y);
      const z = Math.floor(msg.z);
      const idValue = Math.floor(msg.id);
      if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(z) || !Number.isFinite(idValue)) return;
      if (y <= 0 || y >= 127) return;

      // Lightweight anti-cheat: block edits must be reasonably close.
      const dx = x + 0.5 - player.x;
      const dy = y + 0.5 - player.y;
      const dz = z + 0.5 - player.z;
      if (dx * dx + dy * dy + dz * dz > 10 * 10) return;

      const k = keyXYZ(x, y, z);
      if (idValue === 0) this.blocks.set(k, 0);
      else this.blocks.set(k, clamp(idValue, 0, 255));

      this.broadcast({
        type: "block_set",
        x,
        y,
        z,
        id: idValue,
        by: player.id,
      });
    }
  }

  onDisconnect(server) {
    const id = this.sockets.get(server);
    if (!id) return;
    this.sockets.delete(server);
    if (this.players.delete(id)) {
      this.broadcast({ type: "player_leave", id });
    }
  }

  broadcastSnapshot() {
    if (this.players.size === 0) return;
    const players = [...this.players.values()];
    this.broadcast({ type: "players_snapshot", players, serverNowMs: Date.now() });
  }

  send(socket, msg) {
    try {
      socket.send(JSON.stringify(msg));
    } catch {}
  }

  broadcast(msg, except = null) {
    const raw = JSON.stringify(msg);
    for (const socket of this.sockets.keys()) {
      if (socket === except) continue;
      try {
        socket.send(raw);
      } catch {}
    }
  }
}
