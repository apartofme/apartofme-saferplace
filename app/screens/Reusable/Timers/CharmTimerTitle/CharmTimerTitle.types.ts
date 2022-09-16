import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'CharmTimerTitle'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'CharmTimerTitle'>;

export interface ICharmTimerTitleScreenProps
  extends NavigationProps,
    RouteProps {}

export interface ICharmTimerTitleRoute {
  duration: number;
  title: string;
  description: string;
}
