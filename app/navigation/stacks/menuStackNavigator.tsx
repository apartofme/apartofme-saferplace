import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { GrownUpsGuideScreen, MainMenuScreen } from '../../screens';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type MenuStackParams = {
  MainMenu: undefined;
  GrownUpsGuide: undefined;
};

const Stack = createNativeStackNavigator<MenuStackParams>();

export const MenuStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen name="MainMenu" component={MainMenuScreen} />
    <Stack.Screen name="GrownUpsGuide" component={GrownUpsGuideScreen} />
  </Stack.Navigator>
);
