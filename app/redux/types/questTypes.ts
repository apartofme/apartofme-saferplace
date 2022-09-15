import { IQuestLine } from '../../models/IQuestLine';

export interface ISaveAllQuestsPayload {
  payload: Record<string, Record<string, IQuestLine>>;
}
