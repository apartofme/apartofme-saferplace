import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import { ImageSourcePropType } from 'react-native';

import { MergedStackParams } from '../../../../navigation/stacks/mergedParams';
import { AcknowledgementTitleSubtitleType } from './AcknowledgementTitleSubtitle.data';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'AcknowledgementTitleSubtitle'
>;
type RouteProps = StackScreenProps<
  MergedStackParams,
  'AcknowledgementTitleSubtitle'
>;

export interface IAcknowledgementTitleSubtitleScreenProps
  extends NavigationProps,
    RouteProps {}

export interface IAcknowledgementTitleSubtitleRoute {
  titleKey: string;
  subtitleKey: string;
  type: AcknowledgementTitleSubtitleType;
  image: ImageSourcePropType;
  isCrossHeader: boolean;
  isTitleHaveNickname: boolean;
  backgroundImage: ImageSourcePropType;
  onSubmit: () => void;
}
