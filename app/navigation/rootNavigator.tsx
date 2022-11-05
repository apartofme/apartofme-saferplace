import React, { useRef } from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';

import {
  JointOnboardingStackNavigator,
  ParentsOnboardingStackNavigator,
  MenuStackNavigator,
  RecognitionStackNavigator,
  GardenStackNavigator,
  MixingElixirStackNavigator,
  GardenStackParams,
  MixingElixirStackParams,
  RecognitionStackParams,
  JointOnboardingStackParams,
  ParentsOnboardingStackParams,
  ParentGroundingStackNavigator,
  // TODO: remove
  QuestStackNavigator,
  QuestStackParams,
  ParentGroundingStackParams,
  BefriendingStackParams,
  BefriendingStackNavigator,
  EditProfileStackParams,
  EditProfileStackNavigator,
} from './stacks';
import { InitialScreen } from '../screens';
import { navigationRef } from '../services/navigator';
import { GLOBAL_NAVIGATION_STACK_OPTIONS } from './options';
import { trackScreenView } from '../services/firebase';

export type RootParams = {
  Initial: undefined;
  ParentsOnboardingStack:
    | NavigatorScreenParams<ParentsOnboardingStackParams>
    | undefined;
  JointOnboardingStack:
    | NavigatorScreenParams<JointOnboardingStackParams>
    | undefined;
  MenuStack: undefined;
  RecognitionStack: NavigatorScreenParams<RecognitionStackParams> | undefined;
  QuestStack: NavigatorScreenParams<QuestStackParams> | undefined;
  MixingElixirStack: NavigatorScreenParams<MixingElixirStackParams> | undefined;
  GardenStack: NavigatorScreenParams<GardenStackParams> | undefined;
  ParentGroundingStack:
    | NavigatorScreenParams<ParentGroundingStackParams>
    | undefined;
  BefriendingStack: NavigatorScreenParams<BefriendingStackParams> | undefined;
  EditProfileStack: NavigatorScreenParams<EditProfileStackParams> | undefined;
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
        <Stack.Screen name="MenuStack" component={MenuStackNavigator} />
        <Stack.Screen name="QuestStack" component={QuestStackNavigator} />
        <Stack.Screen
          name="MixingElixirStack"
          component={MixingElixirStackNavigator}
        />
        <Stack.Screen name="GardenStack" component={GardenStackNavigator} />
        <Stack.Screen
          name="ParentGroundingStack"
          component={ParentGroundingStackNavigator}
        />
        <Stack.Screen
          name="BefriendingStack"
          component={BefriendingStackNavigator}
        />
        <Stack.Screen
          name="EditProfileStack"
          component={EditProfileStackNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
