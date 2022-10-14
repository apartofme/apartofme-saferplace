import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'GroundingTimer'>;
type RouteProps = StackScreenProps<MergedStackParams, 'GroundingTimer'>;

export interface IGroundingTimerScreenProps
  extends NavigationProps,
    RouteProps {}
