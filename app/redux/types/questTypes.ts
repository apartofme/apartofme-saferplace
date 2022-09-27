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
