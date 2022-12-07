import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import {
  MergedStackParams,
  NavigationRouteNames,
} from '../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'GroundingTimer'>;
type RouteProps = StackScreenProps<MergedStackParams, 'GroundingTimer'>;

export interface IGroundingTimerScreenProps
  extends NavigationProps,
    RouteProps {}

export interface IGroundingTimerRoute {
  acknowledgementTitleKey: string;
  acknowledgementSubtitleKey: string;
  nextRouteName: NavigationRouteNames;
  duration?: number;
}
