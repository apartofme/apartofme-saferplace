import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { GroundingInstructionScreen } from '../../screens';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type ParentGroundingStackParams = {
  Instruction: undefined;
};

const Stack = createNativeStackNavigator<ParentGroundingStackParams>();

export const ParentGroundingStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen name="Instruction" component={GroundingInstructionScreen} />
  </Stack.Navigator>
);
