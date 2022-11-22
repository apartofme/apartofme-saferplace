import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'SpiritGarden'>;
type RouteProps = StackScreenProps<MergedStackParams, 'SpiritGarden'>;

export interface ISpiritGardenScreenProps extends NavigationProps, RouteProps {}
