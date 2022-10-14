import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import {
  GroundingInstructionScreen,
  GroundingStartScreen,
  GroundingTimerScreen,
} from '../../screens';
import { DEFAULT_STACK_OPTIONS } from '../options';
import { NavigationRouteNames } from './mergedParams';

export type ParentGroundingStackParams = {
  GroundingInstruction: undefined;
  GroundingStart: undefined;
  GroundingTimer: { nextRouteName: NavigationRouteNames };
};

const Stack = createNativeStackNavigator<ParentGroundingStackParams>();

export const ParentGroundingStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen name="GroundingStart" component={GroundingStartScreen} />
    <Stack.Screen
      name="GroundingInstruction"
      component={GroundingInstructionScreen}
    />
    <Stack.Screen name="GroundingTimer" component={GroundingTimerScreen} />
  </Stack.Navigator>
);
