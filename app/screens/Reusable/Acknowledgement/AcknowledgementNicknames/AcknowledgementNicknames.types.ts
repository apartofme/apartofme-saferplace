import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'AcknowledgementNicknames'
>;
type RouteProps = StackScreenProps<
  MergedStackParams,
  'AcknowledgementNicknames'
>;

export interface IAcknowledgementNicknamesScreenProps
  extends NavigationProps,
    RouteProps {}
