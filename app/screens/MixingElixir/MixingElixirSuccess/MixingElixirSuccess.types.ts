import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'MixingElixirSuccess'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'MixingElixirSuccess'>;

export interface IMixingElixirSuccessScreenProps
  extends NavigationProps,
    RouteProps {}
