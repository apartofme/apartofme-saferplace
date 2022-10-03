import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { GroundingStartScreen } from '../../screens';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type ParentGroundingExerciseParams = {
  GroundingStart: undefined;
};

const Stack = createNativeStackNavigator<ParentGroundingExerciseParams>();

export const ParentGroundingExerciseStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen name="GroundingStart" component={GroundingStartScreen} />
  </Stack.Navigator>
);
