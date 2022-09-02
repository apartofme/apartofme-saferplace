import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'Loading'>;
type RouteProps = StackScreenProps<MergedStackParams, 'Loading'>;

export interface ILoadingScreenProps extends NavigationProps, RouteProps {}
