import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'BefriendingGarden'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'BefriendingGarden'>;

export interface IBefriendingGardenScreenProps
  extends NavigationProps,
    RouteProps {}
