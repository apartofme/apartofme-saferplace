import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'Instruction'>;
type RouteProps = StackScreenProps<MergedStackParams, 'Instruction'>;

export interface IInstructionScreenProps extends NavigationProps, RouteProps {}

export interface IInstructionRoute {
  buttonTitle: string;
}
