import { IMAGES } from '../../../assets';
import { IButtonsMenuItem } from '../components/MenuButton/MenuButton.data';

// TODO: change icons and route
export const MAIN_MENU_ITEMS: ReadonlyArray<IButtonsMenuItem> = [
  {
    titleKey: 'screens.menu.main_menu.guide',
    icon: IMAGES.CIRCLE_EXCLAMATION_MARK,
    route: 'GrownUpsGuide',
  },
  {
    titleKey: 'screens.menu.main_menu.support',
    icon: IMAGES.CIRCLE_QUESTION_MARK,
    route: 'HelpSupport',
  },
  {
    titleKey: 'screens.menu.main_menu.account_manage',
    icon: IMAGES.GEAR_MAN,
    route: 'ManageAccountMenu',
  },
  {
    titleKey: 'screens.menu.main_menu.settings',
    icon: IMAGES.WHITE_GEAR,
    route: 'SettingsPrivacy',
  },
];
