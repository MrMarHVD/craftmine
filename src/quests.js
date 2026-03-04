import { BLOCKS, BlockId } from "./blocks.js";

const QUEST_TARGETS = [BlockId.FLOWER_RED, BlockId.FLOWER_YELLOW, BlockId.VINE, BlockId.CACTUS, BlockId.MOSS];

export class QuestSystem {
  constructor(ui, seed = 1) {
    this.ui = ui;
    this.seed = seed | 0;
    this.coins = 0;
    this.activeQuest = null;
    this.questCounter = 0;
    this.ui.updateCoins(this.coins);
  }

  hasOpenDialogue() {
    return this.ui.isDialogueOpen();
  }

  closeDialogue() {
    this.ui.closeDialogue();
  }

  randomFor(npcId, salt) {
    const n = Math.sin((npcId + 1) * 12.9898 + (this.seed + salt) * 78.233) * 43758.5453;
    return n - Math.floor(n);
  }

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

  getQuestProgress(quest) {
    return this.ui.getItemCount(quest.target);
  }

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

              this.coins += q.reward;
              this.ui.updateCoins(this.coins);
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

  getActiveQuestText() {
    if (!this.activeQuest) return "";
    const q = this.activeQuest;
    const have = this.getQuestProgress(q);
    return `Quest: ${q.giverName} wants ${q.amount} ${BLOCKS[q.target].name} (${Math.min(have, q.amount)}/${q.amount})`;
  }
}
