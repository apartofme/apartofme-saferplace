import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'EarthStress'>;
type RouteProps = StackScreenProps<MergedStackParams, 'EarthStress'>;

export interface IEarthStressScreenProps extends NavigationProps, RouteProps {}
