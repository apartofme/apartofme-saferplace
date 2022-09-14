import { IButtonsMenuItem } from '../components/MenuButton/MenuButton.data';

// TODO: change to correct route
export const MANAGE_ACCOUNT_MENU_ITEM: ReadonlyArray<IButtonsMenuItem> = [
  {
    titleKey: 'screens.menu.manage_account_menu.first_item',
    route: 'ComingSoon',
  },
  {
    titleKey: 'screens.menu.manage_account_menu.second_item',
    route: 'ChangePassword',
  },
];
