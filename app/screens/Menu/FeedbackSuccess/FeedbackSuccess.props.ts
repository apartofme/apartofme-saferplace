import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'FeedbackSuccess'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'FeedbackSuccess'>;

export interface IFeedbackSuccessScreenProps
  extends NavigationProps,
    RouteProps {}
