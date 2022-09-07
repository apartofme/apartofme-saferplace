import { ImageSourcePropType } from 'react-native';

import { IMAGES } from '../../../assets';

export enum MainMenuItemType {
  Guide = 'GrownUpGuide',
  Support = 'support',
  AccountManage = 'accountManage',
  Settings = 'settings',
}

export interface IMainMenuItem {
  title: string;
  icon: ImageSourcePropType;
  type: MainMenuItemType;
}

// TODO: change icons
export const MAIN_MENU_ITEMS: ReadonlyArray<IMainMenuItem> = [
  {
    title: 'screens.menu.main_menu.guide',
    icon: IMAGES.WHITE_PENCIL,
    type: MainMenuItemType.Guide,
  },
  {
    title: 'screens.menu.main_menu.support',
    icon: IMAGES.WHITE_PENCIL,
    type: MainMenuItemType.Support,
  },

  {
    title: 'screens.menu.main_menu.account_manage',
    icon: IMAGES.WHITE_PENCIL,
    type: MainMenuItemType.AccountManage,
  },
  {
    title: 'screens.menu.main_menu.settings',
    icon: IMAGES.WHITE_PENCIL,
    type: MainMenuItemType.Settings,
  },
];
