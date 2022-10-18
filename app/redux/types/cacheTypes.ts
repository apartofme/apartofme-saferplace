import { EmotionButtonType } from '../../components';
import { Nullable } from '../../utils';
import { AvatarsNameType, ImagesKeys } from '../../utils/types';

export interface ISignUpData {
  email?: string;
  password?: string;
  nickname?: string;
  avatar?: AvatarsNameType;
  createdAt?: string;
}

export interface IShortSignUpData {
  nickname?: string;
  age?: string;
  avatar?: AvatarsNameType;
}

export interface INicknames {
  firstPlayer: string;
  secondPlayer: string;
}

export interface IEmotions {
  selected: Nullable<EmotionButtonType>;
  completed: Nullable<EmotionButtonType>[];
}

export interface IFavouriteCharmItem {
  id: string;
  image: ImagesKeys;
  title: string;
}

export interface ITrySomethingItem {
  title: string;
  description: string;
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

export interface INicknamesPayload {
  payload: INicknames;
}

export interface IEmotionPayload {
  payload: Nullable<EmotionButtonType>;
}

export interface IFavouriteCharmItemPayload {
  payload: IFavouriteCharmItem;
}

export interface ITrySomethingItemPayload {
  payload: ITrySomethingItem;
}
