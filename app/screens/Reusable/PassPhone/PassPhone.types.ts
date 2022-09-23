import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'PassPhone'>;
type RouteProps = StackScreenProps<MergedStackParams, 'PassPhone'>;

export interface IPassPhoneScreenProps extends NavigationProps, RouteProps {}
