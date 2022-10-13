import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'Conversations'>;
type RouteProps = StackScreenProps<MergedStackParams, 'Conversations'>;

export interface IConversationsScreenProps
  extends NavigationProps,
    RouteProps {}
