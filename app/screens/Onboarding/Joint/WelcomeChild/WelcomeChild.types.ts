import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'WelcomeChild'>;
type RouteProps = StackScreenProps<MergedStackParams, 'WelcomeChild'>;

export interface IWelcomeChildScreenProps extends NavigationProps, RouteProps {}
