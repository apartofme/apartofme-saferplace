import { ViewProps } from 'react-native';

import { IFavouriteCharmCarouselItem } from '../../FavouriteCharmCarousel.types';

export interface IFavouriteCharmCarouselItemProps extends ViewProps {
  data: IFavouriteCharmCarouselItem;
  isActive: boolean;
}
