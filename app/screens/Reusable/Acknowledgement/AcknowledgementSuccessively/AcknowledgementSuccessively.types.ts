import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import { ImageSourcePropType } from 'react-native';

import { MergedStackParams } from '../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'AcknowledgementSuccessively'
>;
type RouteProps = StackScreenProps<
  MergedStackParams,
  'AcknowledgementSuccessively'
>;

export interface IAcknowledgementSuccessivelyScreenProps
  extends NavigationProps,
    RouteProps {}

export interface IAcknowledgementSuccessivelyRoute {
  titleKey: string;
  subtitleKey: string;
  image: ImageSourcePropType;
  isTitleHaveNickname: boolean;
  isCrossHeader: boolean;
  backgroundImage: ImageSourcePropType;
  onSubmit: () => void;
}
