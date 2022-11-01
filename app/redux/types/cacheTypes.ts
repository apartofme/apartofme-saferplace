import { EmotionButtonType, ITrySomethingItem } from '../../components';
import { Nullable } from '../../utils';
import { AvatarsKeys } from '../../utils/types';

export interface ISignUpData {
  email?: string;
  password?: string;
  nickname?: string;
  avatar?: AvatarsKeys;
  createdAt?: string;
}

export interface IShortSignUpData {
  nickname?: string;
  age?: string;
  avatar?: AvatarsKeys;
}

export interface INicknames {
  firstPlayer: string;
  secondPlayer: string;
}

export interface IPlayer {
  trySomethingFirstItem: Nullable<ITrySomethingItem>;
  trySomethingSecondItem: Nullable<ITrySomethingItem>;
  kindnessItem: Nullable<string>;
}

export interface IEmotions {
  selected: Nullable<EmotionButtonType>;
  completed: Nullable<EmotionButtonType>[];
}

export interface ISignUpDataPayload {
  payload: ISignUpData;
}

export interface IShortSignUpDataPayload {
  payload: IShortSignUpData;
}

export interface ISaveTranslationsPayload {
  payload: ITranslations;
}

export type ITranslations = Record<
  string,
  {
    translations: Record<string, string>;
  }
>;
