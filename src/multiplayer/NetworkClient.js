import { PROTO } from "./protocol.js";

const SEND_INTERVAL = 1 / 15;

function makeWsUrl(pathname = "/ws/main") {
  if (import.meta.env.VITE_MP_WS_URL) return import.meta.env.VITE_MP_WS_URL;
  const proto = window.location.protocol === "https:" ? "wss:" : "ws:";
  return `${proto}//${window.location.host}${pathname}`;
}

export class NetworkClient {
  constructor(options = {}) {
    this.playerName = options.playerName ?? "Player";
    this.onWelcome = options.onWelcome ?? (() => {});
    this.onPlayerJoin = options.onPlayerJoin ?? (() => {});
    this.onPlayerLeave = options.onPlayerLeave ?? (() => {});
    this.onPlayersSnapshot = options.onPlayersSnapshot ?? (() => {});
    this.onBlockSet = options.onBlockSet ?? (() => {});
    this.onStatus = options.onStatus ?? (() => {});

    this.connected = false;
    this.playerId = null;
    this.ws = null;

    this.outState = null;
    this.sendAccum = 0;
    this.reconnectTimer = 0;
    this.reconnectDelay = 1.5;
    this.explicitlyClosed = false;
  }

  connect() {
    this.explicitlyClosed = false;
    const qs = new URLSearchParams({ name: this.playerName });
    const url = `${makeWsUrl()}?${qs.toString()}`;
    this.ws = new WebSocket(url);

    this.ws.addEventListener("open", () => {
      this.connected = true;
      this.onStatus("connected");
      this.reconnectDelay = 1.5;
      this.send({ type: PROTO.HELLO, name: this.playerName });
    });

    this.ws.addEventListener("message", (ev) => {
      let msg;
      try {
        msg = JSON.parse(ev.data);
      } catch {
        return;
      }
      this.handleMessage(msg);
    });

    this.ws.addEventListener("close", () => {
      this.connected = false;
      this.playerId = null;
      this.ws = null;
      this.onStatus("disconnected");
      if (!this.explicitlyClosed) {
        this.reconnectTimer = this.reconnectDelay;
        this.reconnectDelay = Math.min(8, this.reconnectDelay * 1.4);
      }
    });
  }

  close() {
    this.explicitlyClosed = true;
    if (this.ws) this.ws.close();
    this.ws = null;
    this.connected = false;
  }

  tick(dt) {
    if (!this.connected && this.reconnectTimer > 0) {
      this.reconnectTimer -= dt;
      if (this.reconnectTimer <= 0) this.connect();
    }

    if (!this.connected || !this.outState) return;
    this.sendAccum += dt;
    if (this.sendAccum < SEND_INTERVAL) return;
    this.sendAccum = 0;
    this.send({
      type: PROTO.PLAYER_STATE,
      ...this.outState,
    });
  }

  setLocalState(state) {
    this.outState = state;
  }

  sendBlockSet(x, y, z, id) {
    this.send({ type: PROTO.BLOCK_SET, x, y, z, id });
  }

  send(msg) {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;
    this.ws.send(JSON.stringify(msg));
  }

  handleMessage(msg) {
    switch (msg.type) {
      case PROTO.WELCOME:
        this.playerId = msg.id;
        this.onWelcome(msg);
        break;
      case PROTO.PLAYER_JOIN:
        this.onPlayerJoin(msg.player);
        break;
      case PROTO.PLAYER_LEAVE:
        this.onPlayerLeave(msg.id);
        break;
      case PROTO.PLAYERS_SNAPSHOT:
        this.onPlayersSnapshot(msg.players ?? []);
        break;
      case PROTO.BLOCK_SET:
        this.onBlockSet(msg);
        break;
      default:
        break;
    }
  }
}
