import { SVG_ICONS } from '../../../assets/svg';
import { IButtonsMenuItem } from '../components/MenuButton/MenuButton.data';

export const MAIN_MENU_ITEMS: ReadonlyArray<IButtonsMenuItem> = [
  {
    titleKey: 'screens.menu.main_menu.guide',
    icon: SVG_ICONS.CircleExclamationMarkIcon,
    route: 'GrownUpsGuide',
  },
  {
    titleKey: 'screens.menu.main_menu.support',
    icon: SVG_ICONS.CircleQuestionMarkIcon,
    route: 'HelpSupport',
  },
  {
    titleKey: 'screens.menu.main_menu.account_manage',
    icon: SVG_ICONS.GearManIcon,
    route: 'ManageAccountMenu',
  },
  {
    titleKey: 'screens.menu.main_menu.settings',
    icon: SVG_ICONS.WhiteGearIcon,
    route: 'SettingsPrivacy',
  },
];
