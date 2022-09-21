import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'ElixirTitleButton'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'ElixirTitleButton'>;

export interface IElixirTitleButtonScreenProps
  extends NavigationProps,
    RouteProps {}

export interface IElixirTitleButtonRoute {
  title: string;
  buttonTitle: string;
}
