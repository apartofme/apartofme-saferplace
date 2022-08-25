import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { HomeScreen, ReanimatedScreen } from '../../screens';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type HomeStackParams = {
  Home: undefined;
  Reanimated: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParams>();

export const HomeStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Reanimated" component={ReanimatedScreen} />
  </Stack.Navigator>
);
