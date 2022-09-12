import { IMAGES } from '../../../assets';
import { IButtonsMenuItem } from '../components/MenuButton/MenuButton.data';

// TODO: change icons and route
export const MAIN_MENU_ITEMS: ReadonlyArray<IButtonsMenuItem> = [
  {
    titleKey: 'screens.menu.main_menu.guide',
    icon: IMAGES.WHITE_PENCIL,
    route: 'GrownUpsGuide',
  },
  {
    titleKey: 'screens.menu.main_menu.support',
    icon: IMAGES.WHITE_PENCIL,
    route: 'Support',
  },

  {
    titleKey: 'screens.menu.main_menu.account_manage',
    icon: IMAGES.WHITE_PENCIL,
    route: 'ManageAccountMenu',
  },
  {
    titleKey: 'screens.menu.main_menu.settings',
    icon: IMAGES.WHITE_PENCIL,
    route: 'Settings',
  },
];
