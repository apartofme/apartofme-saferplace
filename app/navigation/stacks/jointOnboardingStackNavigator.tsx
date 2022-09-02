import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import {
  LoadingScreen,
  SidekickIntroScreen,
  WelcomeChildScreen,
} from '../../screens';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type JointOnboardingStackParams = {
  Loading: undefined;
  WelcomeChild: undefined;
  SidekickIntro: undefined;
};

const Stack = createNativeStackNavigator<JointOnboardingStackParams>();

export const JointOnboardingStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen name="Loading" component={LoadingScreen} />
    <Stack.Screen name="WelcomeChild" component={WelcomeChildScreen} />
    <Stack.Screen name="SidekickIntro" component={SidekickIntroScreen} />
  </Stack.Navigator>
);
