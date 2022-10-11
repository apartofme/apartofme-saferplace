import { ViewProps } from 'react-native';
import { AvatarsNameType } from '../../utils/types';

import { IAvatarCarouselItem } from './AvatarCarousel.data';

export interface IAvatarCarouselProps extends ViewProps {
  data?: ReadonlyArray<IAvatarCarouselItem>;
  defaultImage?: string;
  setImage?: (item: AvatarsNameType) => void;
}
