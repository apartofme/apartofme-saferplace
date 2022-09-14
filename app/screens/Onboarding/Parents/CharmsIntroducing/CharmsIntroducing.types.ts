import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'CharmsIntroducing'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'CharmsIntroducing'>;

export interface ICharmsIntroducingScreenProps
  extends NavigationProps,
    RouteProps {}
