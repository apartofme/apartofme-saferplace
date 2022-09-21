import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'ElixirAnimation'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'ElixirAnimation'>;

export interface IElixirAnimationScreenProps
  extends NavigationProps,
    RouteProps {}

export interface IElixirAnimationRoute {
  title: string;
}
