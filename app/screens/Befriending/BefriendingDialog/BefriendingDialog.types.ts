import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'BefriendingDialog'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'BefriendingDialog'>;

export interface IBefriendingDialogScreenProps
  extends NavigationProps,
    RouteProps {}
