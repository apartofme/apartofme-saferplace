import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'AnimationTitle'>;
type RouteProps = StackScreenProps<MergedStackParams, 'AnimationTitle'>;

export interface IAnimationTitleScreenProps
  extends NavigationProps,
    RouteProps {}
