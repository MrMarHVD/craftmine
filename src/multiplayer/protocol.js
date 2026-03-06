export const PROTO = {
  HELLO: "hello",
  WELCOME: "welcome",
  PLAYER_JOIN: "player_join",
  PLAYER_LEAVE: "player_leave",
  PLAYERS_SNAPSHOT: "players_snapshot",
  PLAYER_STATE: "player_state",
  BLOCK_SET: "block_set",
};

export function makeDefaultPlayerName() {
  const n = Math.floor(Math.random() * 9000) + 1000;
  return `Player${n}`;
}
