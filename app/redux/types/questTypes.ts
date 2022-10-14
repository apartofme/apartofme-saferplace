import { IQuest } from '../../models/IQuest';
import { IQuestLine } from '../../models/IQuestLine';

export interface ISaveAllQuestsPayload {
  payload: Record<string, Record<string, IQuestLine>>;
}

export interface ISaveCurrentQuestLineQuests {
  id: string;
  quests: IQuest[];
}

export type IDailyCheck = Record<string, string>;

export interface IInterruptedQuestLine {
  id: string;
  day: number;
  interruptedQuestInx: number;
}

export const ALL_QUESTS_STACK = [
  //* DAY 1
  [],
  //* DAY 2
  [
    55602822, // Healing Hand - The Charm of Healing
    55602820, // FTUE - Compassion Exercises
    55602818, // Day 2 - Opening Dialogue
  ],
  //* DAY 3
  [
    55602825, // The Dancing Charm
    55712796, // FTUE Calm Charms
    55602824, // Day 3 - Opening Narrative
  ],
  //* DAY 4
  [
    55602829, // The Charm of the Slow Wind
    55602827, // Day 4 - Opening Narrative
  ],
  //* DAY 5
  [
    55602834, // The Charm of Discovery Part One
    55602833, // FTUE Courage Exercises
    55602830, // Day 5 - Opening Narrative
  ],
  //* DAY 6
  [
    55602840, // The Charm of Sanctuary
    55648559, // Day 6 Opening - dialogue
    55602837, // The Charm of Discovery Part 2
  ],
  //* DAY 7
  [
    55602844, // The Charm of Kindness Part 1
    55602843, // Day 7 Opening Dialogue
  ],
  //* DAY 8
  [
    55602851, // The Charm of Acceptance
    55602849, // Day 8 - Opening dialogue
    55602848, // The Charm of Kindness Part 2
  ],
  //* DAY 9
  [
    55602854, // The Charm of the Mirror
    55602853, // Day 9 - Opening Dialogue
  ],
  //* DAY 10
  [
    55602861, // The Charm of Truth
    55602856, // Day 10 - Opening Dialogue
  ],
  //* DAY 11
  [
    55602865, // The Charm of Discovery 2 Part 1
    55602862, // Day 11 - Opening Dialogue
  ],
  //* DAY 12
  [
    55602870, // The Charm of The Open Hand
    55602865, // Day 12 - Opening dialogue
    55602867, // The Charm of Discovery 2 Part 2
  ],
  //* DAY 13
  [
    55602873, // Day 13 - Closing dialogue
    55602872, // The Charm of Befriending
    55602871, // Day 13 - Opening dialogue
  ],
  //* DAY 14
  [
    55602887, // Day 14 - Closing dialogue
    55602886, // The Charm of Weaving
    55602874, // Day 13 - Opening dialogue
  ],
];
