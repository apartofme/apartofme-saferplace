import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'ReusableElixirInstruction'
>;
type RouteProps = StackScreenProps<
  MergedStackParams,
  'ReusableElixirInstruction'
>;

export interface IReusableElixirInstructionScreenProps
  extends NavigationProps,
    RouteProps {}
