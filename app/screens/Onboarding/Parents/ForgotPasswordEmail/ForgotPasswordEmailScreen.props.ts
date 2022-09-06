import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'ForgotPasswordEmail'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'ForgotPasswordEmail'>;

export interface IForgotPasswordEmailScreenProps
  extends NavigationProps,
    RouteProps {}
