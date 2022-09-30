import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'ElixirCarousel'>;
type RouteProps = StackScreenProps<MergedStackParams, 'ElixirCarousel'>;

export interface IElixirCarouselScreenProps
  extends NavigationProps,
    RouteProps {}
