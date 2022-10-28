import { EmotionButtonType } from '../../components';
import { Nullable } from '../../utils';
import {
  AvatarsKeys,
  CharmsSvgKeys,
  EmotionsCarouselSvgKeys,
  FavoriteCharmSvgKeys,
} from '../../utils/types';

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

export interface IEmotions {
  selected: Nullable<EmotionButtonType>;
  completed: Nullable<EmotionButtonType>[];
}

export interface IEmotionItem {
  image: EmotionsCarouselSvgKeys;
  title: string;
}

export interface ITroublesomeSpiritQuestionsItem {
  image: CharmsSvgKeys;
  title: string;
}

export interface IFavouriteCharmItem {
  id: string;
  iconKey: FavoriteCharmSvgKeys;
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
export interface ITroublesomeSpiritQuestionsItemPayload {
  payload: Nullable<ITroublesomeSpiritQuestionsItem>;
}

export interface IEmotionItemPayload {
  payload: IEmotionItem;
}

export interface IFavouriteCharmItemPayload {
  payload: IFavouriteCharmItem;
}

export interface ITrySomethingItemPayload {
  payload: ITrySomethingItem;
}
