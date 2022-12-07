import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import {
  MergedStackParams,
  NavigationRouteNames,
} from '../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'GroundingAcknowledgementTitle'
>;
type RouteProps = StackScreenProps<
  MergedStackParams,
  'GroundingAcknowledgementTitle'
>;

export interface IGroundingAcknowledgementTitleScreenProps
  extends NavigationProps,
    RouteProps {}

export interface IGroundingAcknowledgementTitleRoute {
  titleKey: string;
  subtitleKey: string;
  nextRouteName: NavigationRouteNames;
}
