import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'SkipCharmAlert'>;
type RouteProps = StackScreenProps<MergedStackParams, 'SkipCharmAlert'>;

export interface ISkipCharmAlertScreenProps
  extends NavigationProps,
    RouteProps {}
