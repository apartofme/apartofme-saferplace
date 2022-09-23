import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'CharmCompleted'>;
type RouteProps = StackScreenProps<MergedStackParams, 'CharmCompleted'>;

export interface ICharmCompletedScreenProps
  extends NavigationProps,
    RouteProps {}
