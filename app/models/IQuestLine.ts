import { IQuest } from './IQuest';

export interface IQuestLine {
  title: string;
  quests: Record<string, IQuest>;
}

export interface IQuestLineDatoCms {
  id: string;
  sort: string;
  title: string;
}
