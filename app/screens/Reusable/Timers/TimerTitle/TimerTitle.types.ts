import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'TimerTitle'>;
type RouteProps = StackScreenProps<MergedStackParams, 'TimerTitle'>;

export interface ITimerTitleScreenProps extends NavigationProps, RouteProps {}

export interface ITimerTitleRoute {
  duration: number;
  title: string;
}
