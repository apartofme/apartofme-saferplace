import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'EndSequenceNarrative'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'EndSequenceNarrative'>;

export interface IEndSequenceNarrativeScreenProps
  extends NavigationProps,
    RouteProps {}
