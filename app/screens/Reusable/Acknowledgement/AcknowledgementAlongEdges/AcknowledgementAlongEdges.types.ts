import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import { ImageSourcePropType } from 'react-native';

import { MergedStackParams } from '../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'AcknowledgementAlongEdges'
>;
type RouteProps = StackScreenProps<
  MergedStackParams,
  'AcknowledgementAlongEdges'
>;

export interface IAcknowledgementAlongEdgesScreenProps
  extends NavigationProps,
    RouteProps {}

export interface IAcknowledgementAlongEdgesRoute {
  titleKey: string;
  subtitleKey: string;
  image: ImageSourcePropType;
  isCrossHeader: boolean;
  isTitleHaveNickname: boolean;
  backgroundImage: ImageSourcePropType;
  onSubmit: () => void;
}
