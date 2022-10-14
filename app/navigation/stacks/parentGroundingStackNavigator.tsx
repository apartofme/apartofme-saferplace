import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { GroundingInstructionScreen, GroundingStartScreen } from '../../screens';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type ParentGroundingStackParams = {
  GroundingInstruction: undefined;
  GroundingStart: undefined;
};

const Stack = createNativeStackNavigator<ParentGroundingStackParams>();

export const ParentGroundingStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen name="GroundingStart" component={GroundingStartScreen} />
    <Stack.Screen
      name="GroundingInstruction"
      component={GroundingInstructionScreen}
    />
  </Stack.Navigator>
);
