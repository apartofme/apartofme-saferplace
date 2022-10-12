import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'GroundingInstruction'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'GroundingInstruction'>;

export interface IInstructionScreenProps extends NavigationProps, RouteProps {}

export interface IGroundingInstructionRoute {
  buttonTitle: string;
}
