import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'NadiyaEmotionCarousel'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'NadiyaEmotionCarousel'>;

export interface INadiyaEmotionCarouselScreenProps
  extends NavigationProps,
    RouteProps {}
