import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { MainMenuScreen, ParentsGuideScreen } from '../../screens';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type MenuStackParams = {
  MainMenu: undefined;
  ParentsGuide: undefined;
};

const Stack = createNativeStackNavigator<MenuStackParams>();

export const MenuStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen name="MainMenu" component={MainMenuScreen} />
    <Stack.Screen name="ParentsGuide" component={ParentsGuideScreen} />
  </Stack.Navigator>
);
