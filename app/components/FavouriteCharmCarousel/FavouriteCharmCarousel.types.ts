import { ViewProps } from 'react-native';
import { IMAGES } from '../../assets';

export interface IFavouriteCharmCarouselProps extends ViewProps {
  data: ReadonlyArray<IFavouriteCharmCarouselItem>;
  setImage?: (item: string) => void;
}

export interface IFavouriteCharmCarouselItem {
  id: string;
  image: keyof typeof IMAGES;
  title: string;
}
