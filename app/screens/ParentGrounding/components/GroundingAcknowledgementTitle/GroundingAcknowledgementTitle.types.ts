import { ImageSourcePropType } from 'react-native';

import { NavigationRouteNames } from '../../../../navigation/stacks/mergedParams';
import { SvgComponentType } from '../../../../utils/types';

export interface IGroundingAcknowledgementTitleProps {
  title: string;
  subtitle: string;
  buttonTitle: string;
  Icon?: SvgComponentType;
  backgroundImage: ImageSourcePropType;
  onNextRouteName: NavigationRouteNames;
}
