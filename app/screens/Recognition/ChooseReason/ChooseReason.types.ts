import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'ChooseReason'>;
type RouteProps = StackScreenProps<MergedStackParams, 'ChooseReason'>;

export interface IChooseReasonScreenProps extends NavigationProps, RouteProps {}
