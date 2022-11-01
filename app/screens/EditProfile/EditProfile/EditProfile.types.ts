import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';
import { UserType } from '../../../utils/types';

type NavigationProps = StackNavigationProp<MergedStackParams, 'EditProfile'>;
type RouteProps = StackScreenProps<MergedStackParams, 'EditProfile'>;

export interface IEditProfileScreenProps extends NavigationProps, RouteProps {}

export interface IEditProfileRoute {
  type: UserType;
  userId?: string;
}
