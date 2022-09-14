import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'Initial'>;
type RouteProps = StackScreenProps<MergedStackParams, 'Initial'>;

export interface IInitialScreenProps extends NavigationProps, RouteProps {}
