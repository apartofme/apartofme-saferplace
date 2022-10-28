import { ViewProps } from 'react-native';

import { SvgKeys } from '../../utils/types';

export interface IFavouriteCharmCarouselProps extends ViewProps {
  data: ReadonlyArray<IFavouriteCharmCarouselItem>;
  setIndex: (index: number) => void;
}

export interface IFavouriteCharmCarouselItem {
  id: string;
  iconKey: SvgKeys;
  title: string;
}
