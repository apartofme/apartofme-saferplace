import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'SignUpAvatar'>;
type RouteProps = StackScreenProps<MergedStackParams, 'SignUpAvatar'>;

export interface ISignUpAvatarScreenProps extends NavigationProps, RouteProps {}
