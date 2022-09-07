import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import {
  FeedbackScreen,
  MainMenuScreen,
  LanguageSettingsScreen,
  ButtonsMenuScreen,
} from '../../screens';
import { IButtonsMenuItem } from '../../screens/Menu/ButtonsMenu/ButtonsMenu.data';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type MenuStackParams = {
  MainMenu: undefined;
  ButtonsMenu: {
    titleKey: string;
    subtitleKey?: string;
    data: ReadonlyArray<IButtonsMenuItem>;
  };
  Feedback: undefined;
  LanguageSettings: undefined;
};

const Stack = createNativeStackNavigator<MenuStackParams>();

export const MenuStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen name="MainMenu" component={MainMenuScreen} />
    <Stack.Screen name="ButtonsMenu" component={ButtonsMenuScreen} />
    <Stack.Screen name="Feedback" component={FeedbackScreen} />
    <Stack.Screen name="LanguageSettings" component={LanguageSettingsScreen} />
  </Stack.Navigator>
);
