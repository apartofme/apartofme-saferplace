import { ImageSourcePropType } from 'react-native';

import { NavigationRouteNames } from '../../../../navigation/stacks/mergedParams';

export interface IButtonsMenuItem {
  titleKey: string;
  icon?: ImageSourcePropType;
  route: NavigationRouteNames;
}

export enum MenuButtonType {
  Title = 'title',
  BackArrowTitle = 'backArrowTitle',
  PlussTitle = 'plussTitle',
}
