import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'SignUpCredentials'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'SignUpCredentials'>;

export interface ISignUpCredentialsScreenProps
  extends NavigationProps,
    RouteProps {}
