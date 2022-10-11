import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'EmotionCarouselChoice'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'EmotionCarouselChoice'>;

export interface IEmotionCarouselChoiceScreenProps
  extends NavigationProps,
    RouteProps {}
