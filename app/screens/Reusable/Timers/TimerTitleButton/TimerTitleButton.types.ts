import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'TimerTitleButton'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'TimerTitleButton'>;

export interface ITimerTitleButtonScreenProps
  extends NavigationProps,
    RouteProps {}

export interface ITimerTitleButtonRoute {
  duration: number;
  title?: string;
}
