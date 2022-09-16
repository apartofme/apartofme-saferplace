import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'Alert'>;
type RouteProps = StackScreenProps<MergedStackParams, 'Alert'>;

export interface IAlertScreenProps extends NavigationProps, RouteProps {}

export interface IAlertRoute {
  titleKey: string;
  onSubmit: () => void;
}
