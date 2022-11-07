import { RefObject } from 'react';
import { ViewProps, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import { ICarouselInstance } from 'react-native-reanimated-carousel';

import {
  AvatarsNameType,
  CharmIllustrationsSvgKeys,
  CharmsSvgKeys,
  ElixirKeys,
  EmotionsCarouselSvgKeys,
  FavoriteCharmSvgKeys,
  SvgKeys,
  TryNewSVG,
} from '../../utils/types';
import { CarouselType } from './Carousel.data';

export interface ICarouselProps extends ViewProps {
  data: ReadonlyArray<ICarouselItem>;
  preset: CarouselType;
  defaultIndex?: number;
  carouselRef?: RefObject<ICarouselInstance>;
  setIndex?: (index: number) => void;
  carouselStyle?: ViewStyle;
  carouselItemStyle?: ViewStyle;
}

type CarouselImageType =
  | AvatarsNameType
  | EmotionsCarouselSvgKeys
  | ElixirKeys
  | CharmsSvgKeys
  | FavoriteCharmSvgKeys
  | TryNewSVG
  | SvgKeys
  | CharmIllustrationsSvgKeys;

export interface ICarouselItem {
  id: string;
  iconKey: CarouselImageType;
  titleKey?: string;
  descriptionKey?: string;
}

export interface IIconDescription {
  id: string;
  iconKey: ElixirKeys;
  descriptionKey: string;
}

export interface IAvatarItem {
  id: string;
  iconKey: AvatarsNameType;
}

export interface ICharmItem {
  id: string;
  iconKey: FavoriteCharmSvgKeys;
  titleKey: string;
}

export interface ITrySomethingItem {
  id: string;
  iconKey: TryNewSVG;
  titleKey: string;
  descriptionKey: string;
}

export interface IEmotionItem {
  id: string;
  iconKey: EmotionsCarouselSvgKeys;
  titleKey: string;
}
export interface ITroublesomeItem {
  id: string;
  iconKey: CharmsSvgKeys;
  titleKey: string;
}

export interface ICarouselItemProps<DataType> extends ViewProps {
  data: DataType;
  animValue: Animated.SharedValue<number>;
  index: number;
}
