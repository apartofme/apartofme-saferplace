import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import {
  MergedStackParams,
  NavigationRouteNames,
} from '../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'GroundingTimerInstruction'
>;
type RouteProps = StackScreenProps<
  MergedStackParams,
  'GroundingTimerInstruction'
>;

export interface IGroundingTimerInstructionScreenProps
  extends NavigationProps,
    RouteProps {}

export interface IGroundingTimerInstructionItem {
  titleKey: string;
  subtitleKey: string;
  acknowledgementTitleKey: string;
  acknowledgementSubtitleKey: string;
  nextRouteName: NavigationRouteNames;
  duration?: number;
}
