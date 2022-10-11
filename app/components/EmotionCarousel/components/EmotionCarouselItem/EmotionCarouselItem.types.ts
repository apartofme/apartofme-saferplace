import { ViewProps } from 'react-native';

import { IEmotionCarouselItem } from '../../EmotionCarousel.types';

export interface IEmotionCarouselItemProps extends ViewProps {
  data: IEmotionCarouselItem;
  isActive: boolean;
}
