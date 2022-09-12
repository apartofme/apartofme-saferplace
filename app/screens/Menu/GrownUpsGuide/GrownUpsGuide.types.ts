import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'GrownUpsGuide'>;
type RouteProps = StackScreenProps<MergedStackParams, 'GrownUpsGuide'>;

export interface IGrownUpsGuideScreenProps
  extends NavigationProps,
    RouteProps {}
