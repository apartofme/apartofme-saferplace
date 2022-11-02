import { EmotionButtonType, ITrySomethingItem } from '../../components';
import { Nullable } from '../../utils';
import { AvatarsKeys } from '../../utils/types';

export interface ISignUpData {
  email: string;
  password: string;
  nickname: string;
  avatar: AvatarsKeys;
}

export interface IShortSignUpData {
  nickname: string;
  age: number;
  avatar: AvatarsKeys;
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

export type ITranslations = Record<
  string,
  {
    translations: Record<string, string>;
  }
>;
