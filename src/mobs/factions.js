export const FACTION = {
  NEUTRAL: "neutral",
  HUMAN: "human",
  OREUM: "oreum",
};

const HOSTILE_PAIRS = new Set([
  `${FACTION.HUMAN}:${FACTION.OREUM}`,
  `${FACTION.OREUM}:${FACTION.HUMAN}`,
]);

export function areFactionsHostile(a, b) {
  if (!a || !b || a === b) return false;
  return HOSTILE_PAIRS.has(`${a}:${b}`);
}
