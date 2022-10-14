import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'TroublesomeSpiritQuestion'
>;
type RouteProps = StackScreenProps<
  MergedStackParams,
  'TroublesomeSpiritQuestion'
>;

export interface ITroublesomeSpiritQuestionScreenProps
  extends NavigationProps,
    RouteProps {}
