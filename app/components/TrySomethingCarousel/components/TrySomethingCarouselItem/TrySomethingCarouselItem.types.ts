import { ViewProps } from 'react-native';

import { ITrySomethingCarouselItem } from '../../TrySomethingCarousel.data';

export interface IOnlyImageProps extends ViewProps {
  data: ITrySomethingCarouselItem;
  isActive: boolean;
}
