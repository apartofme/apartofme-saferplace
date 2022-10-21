import { NavigationRouteNames } from '../../../../navigation/stacks/mergedParams';
import { ISvgProps } from '../../../../utils/types';

export interface IButtonsMenuItem {
  titleKey: string;
  icon?: (props: ISvgProps) => JSX.Element;
  route: NavigationRouteNames;
}

export enum MenuButtonType {
  Title = 'title',
  BackArrowTitle = 'backArrowTitle',
  PlussTitle = 'plussTitle',
}
