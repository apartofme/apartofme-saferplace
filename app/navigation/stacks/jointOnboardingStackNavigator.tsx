import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import {
  LoadingScreen,
  WelcomeScreen,
  SidekickIntroScreen,
} from '../../screens';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type JointOnboardingStackParams = {
  WelcomeChild: undefined;
  Loading: undefined;
  SidekickIntro: undefined;
};

const Stack = createNativeStackNavigator<JointOnboardingStackParams>();

export const JointOnboardingStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen name="WelcomeChild" component={WelcomeChildScreen} />
    <Stack.Screen name="Loading" component={LoadingScreen} />
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="SidekickIntro" component={SidekickIntroScreen} />
  </Stack.Navigator>
);
