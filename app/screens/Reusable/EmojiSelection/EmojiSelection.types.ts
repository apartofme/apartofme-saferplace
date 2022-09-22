import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'EmojiSelection'>;
type RouteProps = StackScreenProps<MergedStackParams, 'EmojiSelection'>;

export interface IEmojiSelectionScreenProps
  extends NavigationProps,
    RouteProps {}
