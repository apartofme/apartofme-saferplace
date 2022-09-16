import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'AboutCharmMenu'>;
type RouteProps = StackScreenProps<MergedStackParams, 'AboutCharmMenu'>;

export interface IAboutCharmMenuScreenProps
  extends NavigationProps,
    RouteProps {}
