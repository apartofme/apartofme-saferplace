import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'SelectCharmCarousel'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'SelectCharmCarousel'>;

export interface ISelectCharmCarouselScreenProps
  extends NavigationProps,
    RouteProps {}
