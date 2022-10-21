import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'SkipCharmEmojiSelection'
>;
type RouteProps = StackScreenProps<
  MergedStackParams,
  'SkipCharmEmojiSelection'
>;

export interface ISkipCharmEmojiSelectionScreenProps
  extends NavigationProps,
    RouteProps {}
