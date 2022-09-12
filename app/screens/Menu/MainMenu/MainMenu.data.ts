import { IMAGES } from '../../../assets';
import { IButtonsMenuItem } from '../components/MenuButton/MenuButton.data';

// TODO: change icons and route
export const MAIN_MENU_ITEMS: ReadonlyArray<IButtonsMenuItem> = [
  {
    title: 'screens.menu.main_menu.guide',
    icon: IMAGES.WHITE_PENCIL,
    route: 'GrownUpsGuide',
  },
  {
    title: 'screens.menu.main_menu.support',
    icon: IMAGES.WHITE_PENCIL,
    route: 'Support',
  },

  {
    title: 'screens.menu.main_menu.account_manage',
    icon: IMAGES.WHITE_PENCIL,
    route: 'AccountManage',
  },
  {
    title: 'screens.menu.main_menu.settings',
    icon: IMAGES.WHITE_PENCIL,
    route: 'Settings',
  },
];
