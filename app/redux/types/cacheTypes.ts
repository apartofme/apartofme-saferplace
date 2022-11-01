import { EmotionButtonType } from '../../components';
import { Nullable } from '../../utils';
import {
  AvatarsKeys,
  CharmsSvgKeys,
  EmotionsCarouselSvgKeys,
  FavoriteCharmSvgKeys,
} from '../../utils/types';

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

export type ITranslations = Record<
  string,
  {
    translations: Record<string, string>;
  }
>;
