import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'ElixirButton'>;
type RouteProps = StackScreenProps<MergedStackParams, 'ElixirButton'>;

export interface IElixirButtonScreenProps extends NavigationProps, RouteProps {}

export interface IElixirButtonRoute {
  onSubmit?: () => void;
}
