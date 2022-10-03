import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import {
  JointOnboardingStackNavigator,
  ParentsOnboardingStackNavigator,
  MenuStackNavigator,
  RecognitionStackNavigator,
  ParentGroundingExerciseStackNavigator,
  QuestStackNavigator,
} from './stacks';
import { InitialScreen } from '../screens';
import { navigationRef } from '../services/navigator';
import { GLOBAL_NAVIGATION_STACK_OPTIONS } from './options';
import { trackScreenView } from '../services/firebase';
// TODO: remove when the screens are ready
import { ComingSoonScreen } from '../screens/ComingSoon';

export type RootParams = {
  Initial: undefined;
  ParentsOnboardingStack: undefined;
  JointOnboardingStack: undefined;
  MenuStack: undefined;
  RecognitionStack: undefined;
  QuestStack: undefined;
  ParentGroundingExerciseStack: undefined;
  // TODO: remove when the screens are ready
  ComingSoon: undefined;
};

const Stack = createNativeStackNavigator<RootParams>();

const RootNavigator = () => {
  const routeNameRef = useRef<string>();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
      }}
      onStateChange={() => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current?.getCurrentRoute()
          ?.name as string;

        if (previousRouteName !== currentRouteName) {
          trackScreenView(currentRouteName, currentRouteName);
        }
      }}>
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
        <Stack.Screen
          name="RecognitionStack"
          component={RecognitionStackNavigator}
        />
        <Stack.Screen
          name="ParentGroundingExerciseStack"
          component={ParentGroundingExerciseStackNavigator}
        />
        <Stack.Screen name="MenuStack" component={MenuStackNavigator} />
        {/* // TODO: remove when the screens are ready */}
        <Stack.Screen name="ComingSoon" component={ComingSoonScreen} />
        <Stack.Screen name="QuestStack" component={QuestStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
