import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { DEFAULT_STACK_OPTIONS } from '../options';

export type ParentGroundingStackParams = {};

const Stack = createNativeStackNavigator<ParentGroundingStackParams>();

export const ParentGroundingStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}></Stack.Navigator>
);
