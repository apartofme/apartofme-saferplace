import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'SignUpAge'>;
type RouteProps = StackScreenProps<MergedStackParams, 'SignUpAge'>;

export interface ISignUpAgeScreenProps extends NavigationProps, RouteProps {}
