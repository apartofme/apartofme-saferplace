import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'ElixirDoubleInteractionSubtitle'
>;
type RouteProps = StackScreenProps<
  MergedStackParams,
  'ElixirDoubleInteractionSubtitle'
>;

export interface IElixirDoubleInteractionSubtitleScreenProps
  extends NavigationProps,
    RouteProps {}
