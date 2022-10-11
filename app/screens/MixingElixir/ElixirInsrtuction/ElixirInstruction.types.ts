import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'ElixirInstruction'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'ElixirInstruction'>;

export interface IElixirInstructionScreenProps
  extends NavigationProps,
    RouteProps {}
