import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'EndSequenceDualElixir'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'EndSequenceDualElixir'>;

export interface IEndSequenceDualElixirScreenProps
  extends NavigationProps,
    RouteProps {}
