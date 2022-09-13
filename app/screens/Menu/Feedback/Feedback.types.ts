import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'Feedback'>;
type RouteProps = StackScreenProps<MergedStackParams, 'Feedback'>;

export interface IFeedbackScreenProps extends NavigationProps, RouteProps {}
