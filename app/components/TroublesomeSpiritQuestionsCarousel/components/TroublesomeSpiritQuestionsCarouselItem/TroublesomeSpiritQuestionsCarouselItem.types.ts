import { ViewProps } from 'react-native';

import { ITroublesomeSpiritQuestionsCarouselItem } from '../../TroublesomeSpiritQuestionsCarousel.types';

export interface ITroublesomeSpiritQuestionsCarouselItemProps
  extends ViewProps {
  data: ITroublesomeSpiritQuestionsCarouselItem;
  isActive: boolean;
}
