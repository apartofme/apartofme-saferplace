import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'TrySomethingNewCarousel'
>;
type RouteProps = StackScreenProps<
  MergedStackParams,
  'TrySomethingNewCarousel'
>;

export interface ITrySomethingNewCarouselScreenProps
  extends NavigationProps,
    RouteProps {}
