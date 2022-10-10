import { EmotionButtonType } from '../../components';
import { Nullable } from '../../utils';
import { IPlant } from '../../models/IPlant';
import { PlantAreaType } from '../../screens/Garden/components';

export interface ISignUpData {
  email?: string;
  password?: string;
  nickname?: string;
  avatar?: string;
  createdAt?: string;
}

export interface IShortSignUpData {
  nickname?: string;
  age?: string;
  avatar?: string;
}

export interface ITrySomethingItem {
  title: string;
  subtitle: string;
}

export interface INicknames {
  firstPlayer: string;
  secondPlayer: string;
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

export interface ITrySomethingItemPayload {
  payload: ITrySomethingItem;
}

export interface INicknamesPayload {
  payload: INicknames;
}

export interface IEmotionPayload {
  payload: Nullable<EmotionButtonType>;
}

export type IPlantArea = Record<PlantAreaType, Nullable<IPlant>>;
