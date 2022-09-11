import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import { ImageSourcePropType } from 'react-native';

import { MergedStackParams } from '../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'AcknowledgementTitle'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'AcknowledgementTitle'>;

export interface IAcknowledgementTitleScreenProps
  extends NavigationProps,
    RouteProps {}

export interface IAcknowledgementTitleRoute {
  title: string;
  image: ImageSourcePropType;
  backgroundImage: ImageSourcePropType;
  onSubmit: () => void;
}
