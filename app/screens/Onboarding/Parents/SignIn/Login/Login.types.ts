import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'Login'>;
type RouteProps = StackScreenProps<MergedStackParams, 'Login'>;

export interface ILoginScreenProps extends NavigationProps, RouteProps {}
