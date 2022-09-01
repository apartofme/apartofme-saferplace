import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import {
  HomeStackNavigator,
  JointOnboardingStackNavigator,
  ParentsOnboardingStackNavigator,
} from './stacks';
import { InitialScreen } from '../screens';
import { navigationRef } from '../services/navigator';
import { GLOBAL_NAVIGATION_STACK_OPTIONS } from './options';

export type RootParams = {
  Initial: undefined;
  HomeStack: undefined;
  ParentsOnboardingStack: undefined;
  JointOnboardingStack: undefined;
};

const Stack = createNativeStackNavigator<RootParams>();

const RootNavigator = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator screenOptions={GLOBAL_NAVIGATION_STACK_OPTIONS}>
      <Stack.Screen name="Initial" component={InitialScreen} />
      <Stack.Screen name="HomeStack" component={HomeStackNavigator} />
      <Stack.Screen
        name="ParentsOnboardingStack"
        component={ParentsOnboardingStackNavigator}
      />
      <Stack.Screen
        name="JointOnboardingStack"
        component={JointOnboardingStackNavigator}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
