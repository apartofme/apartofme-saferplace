import { SVG_ICONS } from '../../../assets/svg';
import { IButtonsMenuItem } from '../components/MenuButton/MenuButton.data';

export const MAIN_MENU_ITEMS: ReadonlyArray<IButtonsMenuItem> = [
  {
    titleKey: 'screens.menu.main_menu.guide',
    icon: SVG_ICONS.circleExclamationMarkIcon,
    route: 'GrownUpsGuide',
  },
  {
    titleKey: 'screens.menu.main_menu.support',
    icon: SVG_ICONS.circleQuestionMarkIcon,
    route: 'HelpSupport',
  },
  {
    titleKey: 'screens.menu.main_menu.account_manage',
    icon: SVG_ICONS.gearManIcon,
    route: 'ManageAccountMenu',
  },
  {
    titleKey: 'screens.menu.main_menu.settings',
    icon: SVG_ICONS.whiteGearIcon,
    route: 'SettingsPrivacy',
  },
];
