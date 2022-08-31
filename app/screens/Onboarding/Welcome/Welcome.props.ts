import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'Welcome'>;
type RouteProps = StackScreenProps<MergedStackParams, 'Welcome'>;

export interface IWelcomeScreenProps extends NavigationProps, RouteProps {}
