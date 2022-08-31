import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { AcknowledgementScreen, WelcomeScreen } from '../../screens';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type ParentsOnboardingStackParams = {
  Welcome: undefined;
  Acknowledgement: undefined;
};

const Stack = createNativeStackNavigator<ParentsOnboardingStackParams>();

export const ParentsOnboardingStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Acknowledgement" component={AcknowledgementScreen} />
  </Stack.Navigator>
);