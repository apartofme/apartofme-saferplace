import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'StampFeet'>;
type RouteProps = StackScreenProps<MergedStackParams, 'StampFeet'>;

export interface IStampFeetScreenProps extends NavigationProps, RouteProps {}
