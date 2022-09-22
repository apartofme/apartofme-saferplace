import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'CharmTimerButton'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'CharmTimerButton'>;

export interface ICharmTimerButtonScreenProps
  extends NavigationProps,
    RouteProps {}

export interface ICharmTimerButtonRoute {
  duration: number;
  description: string;
}
