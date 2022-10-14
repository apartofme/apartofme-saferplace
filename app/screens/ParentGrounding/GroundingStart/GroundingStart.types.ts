import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'GroundingStart'>;
type RouteProps = StackScreenProps<MergedStackParams, 'GroundingStart'>;

export interface IGroundingStartScreenProps
  extends NavigationProps,
    RouteProps {}
