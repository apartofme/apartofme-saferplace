import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import {
  MainMenuScreen,
  ParentsGuideScreen,
  LanguageSettingsScreen,
  GrownUpsGuideScreen,
} from '../../screens';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type MenuStackParams = {
  MainMenu: undefined;
  GrownUpsGuide: undefined;
  LanguageSettings: undefined;
};

const Stack = createNativeStackNavigator<MenuStackParams>();

export const MenuStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen name="MainMenu" component={MainMenuScreen} />
    <Stack.Screen name="GrownUpsGuide" component={GrownUpsGuideScreen} />
    <Stack.Screen name="LanguageSettings" component={LanguageSettingsScreen} />
  </Stack.Navigator>
);
