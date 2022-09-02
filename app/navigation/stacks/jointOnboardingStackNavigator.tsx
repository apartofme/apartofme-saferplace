import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import {
  LoadingScreen,
  SignUpAvatarScreen,
  SignUpNicknameScreen,
  WelcomeScreen,
} from '../../screens';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type JointOnboardingStackParams = {
  Welcome: undefined;
  Loading: undefined;
  SignUpNickname: { isChild: boolean };
  SignUpAvatar: { isChild: boolean };
};

const Stack = createNativeStackNavigator<JointOnboardingStackParams>();

export const JointOnboardingStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen name="SignUpNickname" component={SignUpNicknameScreen} />
    <Stack.Screen name="SignUpAvatar" component={SignUpAvatarScreen} />
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Loading" component={LoadingScreen} />
  </Stack.Navigator>
);
