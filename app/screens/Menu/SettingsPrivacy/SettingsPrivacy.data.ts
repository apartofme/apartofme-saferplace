import { NavigationRouteNames } from '../../../navigation/stacks/mergedParams';
import { ConditionsScreenData } from '../Conditions/Conditions.types';

export enum SettingsPrivacyRouteType {
  OnConditionsScreen = 'onConditionsScreen',
  OnOtherScreens = 'onOtherScreens',
}

export interface ISettingsPrivacyMenuItem {
  titleKey: string;
  type: SettingsPrivacyRouteType;
  route: NavigationRouteNames;
  data?: ConditionsScreenData;
}

export const SETTINGS_PRIVACY_MENU: ReadonlyArray<ISettingsPrivacyMenuItem> = [
  {
    titleKey: 'screens.menu.settings_privacy_screen.first_item',
    type: SettingsPrivacyRouteType.OnOtherScreens,
    route: 'LanguageSettings',
  },
  {
    titleKey: 'screens.menu.settings_privacy_screen.second_item',
    type: SettingsPrivacyRouteType.OnOtherScreens,
    route: 'AudioSettings',
  },
  {
    titleKey: 'screens.menu.settings_privacy_screen.third_item',
    type: SettingsPrivacyRouteType.OnOtherScreens,
    route: 'NotificationSettings',
  },
  {
    titleKey: 'screens.menu.settings_privacy_screen.fourth_item',
    type: SettingsPrivacyRouteType.OnConditionsScreen,
    data: {
      title: 'screens.menu.conditions.terms_conditions.title',
      subtitle: 'screens.menu.conditions.terms_conditions.subtitle',
    },
    route: 'Conditions',
  },
  {
    titleKey: 'screens.menu.settings_privacy_screen.fifth_item',
    type: SettingsPrivacyRouteType.OnConditionsScreen,
    data: {
      title: 'screens.menu.conditions.privacy_policy.title',
      subtitle: 'screens.menu.conditions.privacy_policy.subtitle',
    },
    route: 'Conditions',
  },
  {
    titleKey: 'screens.menu.settings_privacy_screen.sixth_item',
    type: SettingsPrivacyRouteType.OnConditionsScreen,
    data: {
      title: 'screens.menu.conditions.accessibility_statement.title',
      subtitle: 'screens.menu.conditions.accessibility_statement.subtitle',
    },
    route: 'Conditions',
  },
];
