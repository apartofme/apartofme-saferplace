import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'TroublesomeSpiritQuestionsCarousel'
>;
type RouteProps = StackScreenProps<
  MergedStackParams,
  'TroublesomeSpiritQuestionsCarousel'
>;

export interface ITroublesomeSpiritQuestionsCarouselScreenProps
  extends NavigationProps,
    RouteProps {}
