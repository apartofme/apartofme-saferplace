import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'Garden'>;
type RouteProps = StackScreenProps<MergedStackParams, 'Garden'>;

export interface IGardenScreenProps extends NavigationProps, RouteProps {}
