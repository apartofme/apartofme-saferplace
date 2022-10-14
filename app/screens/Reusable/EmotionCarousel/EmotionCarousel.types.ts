import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'EmotionCarousel'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'EmotionCarousel'>;

export interface IEmotionCarouselScreenProps
  extends NavigationProps,
    RouteProps {}
