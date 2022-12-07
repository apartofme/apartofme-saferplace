import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'MinuteTimerInstruction'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'MinuteTimerInstruction'>;

export interface IMinuteTimerInstructionScreenProps
  extends NavigationProps,
    RouteProps {}
