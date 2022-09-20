import { ViewProps } from 'react-native';

import { IAvatarCarouselItem } from '../../AvatarCarousel.data';

export interface IOnlyImageProps extends ViewProps {
  data: IAvatarCarouselItem;
}
