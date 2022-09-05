import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'EndSequenceFinal'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'EndSequenceFinal'>;

export interface IEndSequenceFinalScreenProps
  extends NavigationProps,
    RouteProps {}
