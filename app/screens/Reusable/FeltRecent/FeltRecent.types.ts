import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'FeltRecent'>;
type RouteProps = StackScreenProps<MergedStackParams, 'FeltRecent'>;

export interface IFeltRecentScreenProps extends NavigationProps, RouteProps {}

export interface IFeltRecentRoute {
  titleKey: string;
  subtitleKey: string;
}
