/**
 * @module quests/QuestSystem
 * @description Manages the player's quest progression. `QuestSystem` generates
 * collection quests on demand whenever the player talks to a quest-giver NPC,
 * tracks the single active quest, drives the multi-step dialogue flow through
 * `UI.openDialogue`, and rewards the player with coins on successful turn-in.
 * Quest targets are randomly selected from a fixed pool of gatherable blocks;
 * the required amount and coin reward scale together so harder quests pay more.
 */

import { BLOCKS, BlockId } from "../blocks.js";

/**
 * The pool of block IDs that quests may ask the player to collect.
 * All entries are gatherable decorative blocks found across multiple biomes.
 * @type {number[]}
 */
const QUEST_TARGETS = [BlockId.FLOWER_RED, BlockId.FLOWER_YELLOW, BlockId.VINE, BlockId.CACTUS, BlockId.MOSS];

/**
 * Manages quest generation, dialogue flow, and reward distribution.
 *
 * @property {Object} ui - The `UI` instance used to open/close dialogue and read/consume inventory.
 * @property {number} seed - World seed used to deterministically generate quest parameters.
 * @property {number} coins - Current coin balance, updated on quest turn-in.
 * @property {Object|null} activeQuest - The currently active quest descriptor, or `null` if none is active.
 * @property {number} questCounter - Monotonically increasing counter used as a salt in quest randomisation to prevent identical quests from repeating.
 */
export class QuestSystem {
  /**
   * @param {Object} ui - The `UI` instance.
   * @param {number} [seed=1] - World seed, used to deterministically vary quest content.
   */
  constructor(ui, seed = 1) {
    this.ui = ui;
    this.seed = seed | 0;
    this.coins = 0;
    this.activeQuest = null;
    this.questCounter = 0;
    this.ui.updateCoins(this.coins);
  }

  addCoins(amount) {
    if (!Number.isFinite(amount) || amount <= 0) return;
    this.coins += amount;
    this.ui.updateCoins(this.coins);
  }

  /**
   * Returns whether the dialogue pane is currently open (delegates to the UI).
   * Used by `main.js` to prevent pointer lock from being re-acquired while a
   * dialogue is displayed.
   * @returns {boolean} `true` if a dialogue is visible.
   */
  hasOpenDialogue() {
    return this.ui.isDialogueOpen();
  }

  /**
   * Closes the active dialogue pane.
   */
  closeDialogue() {
    this.ui.closeDialogue();
  }

  /**
   * Produces a deterministic pseudo-random value in [0, 1) for a given NPC ID
   * and salt. Uses a sine-based hash that avoids any persistent state, so
   * quest content is consistent for the same NPC and questCounter combination
   * across sessions.
   * @param {number} npcId - Unique ID of the quest-giver entity.
   * @param {number} salt - Secondary seed component (varies between quest attributes).
   * @returns {number} Pseudo-random float in [0, 1).
   */
  randomFor(npcId, salt) {
    const n = Math.sin((npcId + 1) * 12.9898 + (this.seed + salt) * 78.233) * 43758.5453;
    return n - Math.floor(n);
  }

  /**
   * Generates a new quest for the given NPC. Selects a random block from
   * `QUEST_TARGETS`, a random required amount (4–8), and a coin reward that
   * scales with the amount. Increments `questCounter` so successive quests
   * from the same NPC yield different targets.
   * @param {{id: number, name: string}} npc - The quest-giver entity.
   * @returns {{id: number, giverId: number, giverName: string, target: number, amount: number, reward: number, status: string}}
   *   A new quest descriptor.
   */
  createQuestFor(npc) {
    const r = this.randomFor(npc.id, this.questCounter + 17);
    const target = QUEST_TARGETS[Math.floor(r * QUEST_TARGETS.length) % QUEST_TARGETS.length];
    const amount = 4 + (Math.floor(this.randomFor(npc.id, this.questCounter + 99) * 5) % 5);
    const reward = 8 + amount * 3;

    this.questCounter += 1;

    return {
      id: this.questCounter,
      giverId: npc.id,
      giverName: npc.name,
      target,
      amount,
      reward,
      status: "active",
    };
  }

  /**
   * Returns how many of the active quest's target block the player currently
   * holds in their inventory.
   * @param {{target: number}} quest - The active quest descriptor.
   * @returns {number} Current progress count.
   */
  getQuestProgress(quest) {
    return this.ui.getItemCount(quest.target);
  }

  /**
   * Handles the player interacting with a quest-giver NPC by opening the
   * appropriate dialogue branch:
   * - If no quest is active, offers a new quest with Accept / Decline options.
   * - If a quest is active with a different NPC, tells the player to finish first.
   * - If the player's quest is complete (has enough items), offers turn-in.
   * - Otherwise, shows current progress.
   * @param {{id: number, name: string}} npc - The quest-giver entity the player is talking to.
   */
  onTalkToQuestGiver(npc) {
    const npcName = npc.name;

    if (!this.activeQuest) {
      const quest = this.createQuestFor(npc);
      const itemName = BLOCKS[quest.target].name;

      this.ui.openDialogue(
        npcName,
        `Traveler, I need ${quest.amount} ${itemName} for my camp. Bring them to me and I will pay ${quest.reward} coins.`,
        [
          {
            label: "Accept quest",
            onSelect: () => {
              this.activeQuest = quest;
              this.ui.openDialogue(
                npcName,
                `Quest accepted:\nCollect ${quest.amount} ${itemName}.`,
                [{ label: "Close", onSelect: () => this.ui.closeDialogue() }]
              );
            },
          },
          { label: "Maybe later", onSelect: () => this.ui.closeDialogue() },
        ]
      );
      return;
    }

    if (this.activeQuest.giverId !== npc.id) {
      this.ui.openDialogue(
        npcName,
        `I hear you are already helping ${this.activeQuest.giverName}. Finish that quest first.`,
        [{ label: "Close", onSelect: () => this.ui.closeDialogue() }]
      );
      return;
    }

    const q = this.activeQuest;
    const itemName = BLOCKS[q.target].name;
    const have = this.getQuestProgress(q);

    if (have >= q.amount) {
      this.ui.openDialogue(
        npcName,
        `You brought the ${itemName}! Hand over ${q.amount} and collect ${q.reward} coins?`,
        [
          {
            label: "Turn in quest",
            onSelect: () => {
              if (!this.ui.consumeItem(q.target, q.amount)) {
                this.ui.openDialogue(npcName, "Looks like you no longer have the items.", [
                  { label: "Close", onSelect: () => this.ui.closeDialogue() },
                ]);
                return;
              }

              this.addCoins(q.reward);
              this.activeQuest = null;

              this.ui.openDialogue(
                npcName,
                `Excellent work. Here are ${q.reward} coins.`,
                [{ label: "Close", onSelect: () => this.ui.closeDialogue() }]
              );
            },
          },
          { label: "Not now", onSelect: () => this.ui.closeDialogue() },
        ]
      );
      return;
    }

    this.ui.openDialogue(
      npcName,
      `Progress: ${have}/${q.amount} ${itemName}. Keep searching.`,
      [{ label: "Close", onSelect: () => this.ui.closeDialogue() }]
    );
  }

  /**
   * Returns a one-line status string for the active quest, shown in the hint
   * HUD. Returns an empty string if no quest is active.
   * @returns {string} Quest progress string, e.g. `"Quest: NPC wants 6 Vine (2/6)"`.
   */
  getActiveQuestText() {
    if (!this.activeQuest) return "";
    const q = this.activeQuest;
    const have = this.getQuestProgress(q);
    return `Quest: ${q.giverName} wants ${q.amount} ${BLOCKS[q.target].name} (${Math.min(have, q.amount)}/${q.amount})`;
  }

  /**
   * Cancels the active quest if it belongs to the specified giver. Used when a
   * quest-giver mob is killed before the player turns the quest in.
   * @param {number} giverId - Entity ID of the dead quest giver.
   */
  cancelQuestForGiver(giverId) {
    if (!this.activeQuest || this.activeQuest.giverId !== giverId) return;
    this.activeQuest = null;
    if (this.ui.isDialogueOpen()) this.ui.closeDialogue();
  }
}
