import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import {
  AboutCharmScreen,
  FeedbackScreen,
  MainMenuScreen,
  FeedbackSuccessScreen,
  LanguageSettingsScreen,
  ChangePasswordScreen,
  ChangePasswordSuccessScreen,
  ButtonsMenuScreen,
  FrequentlyAskedQuestionsScreen,
} from '../../screens';
import { IButtonsMenuItem } from '../../screens/Menu/ButtonsMenu/ButtonsMenu.data';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type MenuStackParams = {
  ChangePasswordSuccess: undefined;
  MainMenu: undefined;
  AboutCharm: { titleKey: string; subtitleKey: string };
  ButtonsMenu: {
    titleKey: string;
    subtitleKey?: string;
    data: ReadonlyArray<IButtonsMenuItem>;
  };
  FeedbackSuccess: undefined;
  Feedback: undefined;
  LanguageSettings: undefined;
  FrequentlyAskedQuestions: undefined;
  ChangePassword: undefined;
};

const Stack = createNativeStackNavigator<MenuStackParams>();

export const MenuStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen
      name="FrequentlyAskedQuestions"
      component={FrequentlyAskedQuestionsScreen}
    />
    <Stack.Screen name="MainMenu" component={MainMenuScreen} />
    <Stack.Screen name="ButtonsMenu" component={ButtonsMenuScreen} />
    <Stack.Screen name="Feedback" component={FeedbackScreen} />
    <Stack.Screen name="FeedbackSuccess" component={FeedbackSuccessScreen} />
    <Stack.Screen name="LanguageSettings" component={LanguageSettingsScreen} />
    <Stack.Screen name="AboutCharm" component={AboutCharmScreen} />
    <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
    <Stack.Screen
      name="ChangePasswordSuccess"
      component={ChangePasswordSuccessScreen}
    />
  </Stack.Navigator>
);
