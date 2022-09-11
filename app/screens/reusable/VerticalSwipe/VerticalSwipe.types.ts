import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import { ImageSourcePropType } from 'react-native';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'VerticalSwipe'>;
type RouteProps = StackScreenProps<MergedStackParams, 'VerticalSwipe'>;

export interface IVerticalSwipeScreenProps
  extends NavigationProps,
    RouteProps {}

export interface IVerticalSwipeRoute {
  titleKey: string;
  subtitleKey: string;
  onSubmit: () => void;
  tellMoreTitleKey: string;
  tellMoreSubtitleKey: string;
  backgroundImage: ImageSourcePropType;
  tellMoreBackgroundImage: ImageSourcePropType;
}
