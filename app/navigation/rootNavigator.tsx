import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import {
  JointOnboardingStackNavigator,
  ParentsOnboardingStackNavigator,
  MenuStackNavigator,
} from './stacks';
import { InitialScreen } from '../screens';
import { navigationRef } from '../services/navigator';
import { GLOBAL_NAVIGATION_STACK_OPTIONS } from './options';
// TODO: remove when the screens are ready
import { ComingSoonScreen } from '../screens/ComingSoon';

export type RootParams = {
  Initial: undefined;
  ParentsOnboardingStack: undefined;
  JointOnboardingStack: undefined;
  MenuStack: undefined;
  // TODO: remove when the screens are ready
  ComingSoon: undefined;
};

const Stack = createNativeStackNavigator<RootParams>();

const RootNavigator = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator screenOptions={GLOBAL_NAVIGATION_STACK_OPTIONS}>
      <Stack.Screen name="Initial" component={InitialScreen} />
      <Stack.Screen
        name="ParentsOnboardingStack"
        component={ParentsOnboardingStackNavigator}
      />
      <Stack.Screen
        name="JointOnboardingStack"
        component={JointOnboardingStackNavigator}
      />
      <Stack.Screen name="MenuStack" component={MenuStackNavigator} />
      {/* // TODO: remove when the screens are ready */}
      <Stack.Screen name="ComingSoon" component={ComingSoonScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
