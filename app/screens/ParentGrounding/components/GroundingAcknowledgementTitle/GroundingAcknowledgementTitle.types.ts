import { ImageSourcePropType } from 'react-native';

import { NavigationRouteNames } from '../../../../navigation/stacks/mergedParams';

export interface IGroundingAcknowledgementTitleProps {
  title: string;
  subtitle: string;
  buttonTitle: string;
  image: ImageSourcePropType;
  backgroundImage: ImageSourcePropType;
  onNextRouteName: NavigationRouteNames;
}
