import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'GroundingCompleted'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'GroundingCompleted'>;

export interface IGroundingCompletedScreenProps
  extends NavigationProps,
    RouteProps {}
