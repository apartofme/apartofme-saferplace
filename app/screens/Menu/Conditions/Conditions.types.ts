import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'Conditions'>;
type RouteProps = StackScreenProps<MergedStackParams, 'Conditions'>;

export interface IConditionsScreenProps extends NavigationProps, RouteProps {}

export interface ConditionsScreenData {
  title: string;
  subtitle: string;
}
