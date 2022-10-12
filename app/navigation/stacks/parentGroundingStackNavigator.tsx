import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { GroundingStartScreen, IGroundingStartRoute } from '../../screens';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type ParentGroundingStackParams = {
  GroundingStart: { data: IGroundingStartRoute };
};

const Stack = createNativeStackNavigator<ParentGroundingStackParams>();

export const ParentGroundingStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen name="GroundingStart" component={GroundingStartScreen} />
  </Stack.Navigator>
);
