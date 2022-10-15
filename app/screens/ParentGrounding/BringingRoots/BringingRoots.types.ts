import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'BringingRoots'>;
type RouteProps = StackScreenProps<MergedStackParams, 'BringingRoots'>;

export interface IBringingRootsScreenProps
  extends NavigationProps,
    RouteProps {}
