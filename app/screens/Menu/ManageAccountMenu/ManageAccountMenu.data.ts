import { IButtonsMenuItem } from '../components/MenuButton/MenuButton.data';

export const MANAGE_ACCOUNT_MENU_ITEM: ReadonlyArray<IButtonsMenuItem> = [
  {
    titleKey: 'screens.menu.manage_account_menu.first_item',
    route: 'ManageProfiles',
  },
  {
    titleKey: 'screens.menu.manage_account_menu.second_item',
    route: 'ChangePassword',
  },
  {
    titleKey: 'screens.menu.manage_account_menu.third_item',
    route: 'DeleteAccountAcknowledgement',
  },
];
