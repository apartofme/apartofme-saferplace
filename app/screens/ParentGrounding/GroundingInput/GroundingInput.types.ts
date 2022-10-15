import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'GroundingInput'>;
type RouteProps = StackScreenProps<MergedStackParams, 'GroundingInput'>;

export interface IGroundingStartScreenProps
  extends NavigationProps,
    RouteProps {}
