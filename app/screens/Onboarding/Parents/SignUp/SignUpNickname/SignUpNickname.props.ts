import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'SignUpCredentials'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'SignUpNickname'>;

export interface ISignUpNicknameScreenProps
  extends NavigationProps,
    RouteProps {}
