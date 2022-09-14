import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'SidekickIntro'>;
type RouteProps = StackScreenProps<MergedStackParams, 'SidekickIntro'>;

export interface ISidekickIntroScreenProps
  extends NavigationProps,
    RouteProps {}
