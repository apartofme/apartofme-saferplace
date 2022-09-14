import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'ChangePasswordSuccess'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'ChangePasswordSuccess'>;

export interface IChangePasswordSuccessScreenProps
  extends NavigationProps,
    RouteProps {}
