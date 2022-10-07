import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'EditProfile'>;
type RouteProps = StackScreenProps<MergedStackParams, 'EditProfile'>;

export interface IEditProfileScreenProps extends NavigationProps, RouteProps {}
