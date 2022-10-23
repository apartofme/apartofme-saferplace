import { SVG } from '../../../assets/svg';
import { IButtonsMenuItem } from '../components/MenuButton/MenuButton.data';

export const MAIN_MENU_ITEMS: ReadonlyArray<IButtonsMenuItem> = [
  {
    titleKey: 'screens.menu.main_menu.guide',
    icon: SVG.CircleExclamationMarkIcon,
    route: 'GrownUpsGuide',
  },
  {
    titleKey: 'screens.menu.main_menu.support',
    icon: SVG.CircleQuestionMarkIcon,
    route: 'HelpSupport',
  },
  {
    titleKey: 'screens.menu.main_menu.account_manage',
    icon: SVG.GearManIcon,
    route: 'ManageAccountMenu',
  },
  {
    titleKey: 'screens.menu.main_menu.settings',
    icon: SVG.WhiteGearIcon,
    route: 'SettingsPrivacy',
  },
];
