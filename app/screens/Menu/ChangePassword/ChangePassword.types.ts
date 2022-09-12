import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'ChangePassword'>;
type RouteProps = StackScreenProps<MergedStackParams, 'ChangePassword'>;

export interface IChangePasswordScreenProps
  extends NavigationProps,
    RouteProps {}
