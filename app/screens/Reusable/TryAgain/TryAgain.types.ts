import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'TryAgain'>;
type RouteProps = StackScreenProps<MergedStackParams, 'TryAgain'>;

export interface ITryAgainScreenProps extends NavigationProps, RouteProps {}
