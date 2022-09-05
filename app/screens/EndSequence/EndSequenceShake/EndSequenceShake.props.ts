import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'EndSequenceShake'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'EndSequenceShake'>;

export interface IEndSequenceShakeScreenProps
  extends NavigationProps,
    RouteProps {}
