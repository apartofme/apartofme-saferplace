import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'OnboardingCarousel'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'OnboardingCarousel'>;

export interface IOnboardingCarouselScreenProps
  extends NavigationProps,
    RouteProps {}
