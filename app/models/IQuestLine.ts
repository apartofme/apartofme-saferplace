import { Nullable } from '../utils';
import { IQuest } from './IQuest';

export interface IQuestLine {
  title: string;
  quests: Nullable<Record<string, IQuest>>;
}

export interface IQuestLineDatoCms {
  id: string;
  sort: string;
  title: string;
}
