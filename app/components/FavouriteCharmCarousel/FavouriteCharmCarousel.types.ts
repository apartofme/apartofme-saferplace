import { ViewProps } from 'react-native';

import { ImagesKeys } from '../../utils/types';

export interface IFavouriteCharmCarouselProps extends ViewProps {
  data: ReadonlyArray<IFavouriteCharmCarouselItem>;
  setIndex: (index: number) => void;
}

export interface IFavouriteCharmCarouselItem {
  id: string;
  image: ImagesKeys;
  title: string;
}
