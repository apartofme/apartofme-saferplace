import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'SignUpSuccess'>;
type RouteProps = StackScreenProps<MergedStackParams, 'SignUpSuccess'>;

export interface ISignUpSuccessScreenProps
  extends NavigationProps,
    RouteProps {}
