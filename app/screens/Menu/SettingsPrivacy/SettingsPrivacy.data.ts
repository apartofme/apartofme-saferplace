import { NavigationRouteNames } from '../../../navigation/stacks/mergedParams';
import { ConditionsScreenData } from '../Conditions/Conditions.types';

export interface ISettingsPrivacyMenuItem {
  titleKey: string;
  route: NavigationRouteNames;
  data?: ConditionsScreenData;
}

export const SETTINGS_PRIVACY_MENU_ITEM: ReadonlyArray<ISettingsPrivacyMenuItem> =
  [
    {
      titleKey: 'screens.menu.settings_privacy_screen.first_item',
      route: 'LanguageSettings',
    },
    {
      titleKey: 'screens.menu.settings_privacy_screen.second_item',
      route: 'AudioSettings',
    },
    {
      titleKey: 'screens.menu.settings_privacy_screen.third_item',
      route: 'NotificationSettings',
    },
    {
      titleKey: 'screens.menu.settings_privacy_screen.fourth_item',
      data: {
        title: 'screens.menu.conditions.terms_conditions.title',
        subtitle: 'screens.menu.conditions.terms_conditions.subtitle',
      },
      route: 'Conditions',
    },
    {
      titleKey: 'screens.menu.settings_privacy_screen.fifth_item',
      data: {
        title: 'screens.menu.conditions.privacy_policy.title',
        subtitle: 'screens.menu.conditions.privacy_policy.subtitle',
      },
      route: 'Conditions',
    },
    {
      titleKey: 'screens.menu.settings_privacy_screen.sixth_item',
      data: {
        title: 'screens.menu.conditions.accessibility_statement.title',
        subtitle: 'screens.menu.conditions.accessibility_statement.subtitle',
      },
      route: 'Conditions',
    },
  ];
