import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import {
  AboutCharmScreen,
  MainMenuScreen,
  ParentsGuideScreen,
} from '../../screens';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type MenuStackParams = {
  MainMenu: undefined;
  AboutCharm: { titleKey: string; subTitleKey: string };
  ParentsGuide: undefined;
};

const Stack = createNativeStackNavigator<MenuStackParams>();

export const MenuStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen name="MainMenu" component={MainMenuScreen} />
    <Stack.Screen name="ParentsGuide" component={ParentsGuideScreen} />
    <Stack.Screen name="AboutCharm" component={AboutCharmScreen} />
  </Stack.Navigator>
);
