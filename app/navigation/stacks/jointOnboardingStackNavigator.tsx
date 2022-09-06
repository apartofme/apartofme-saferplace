import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import {
  LoadingScreen,
  SignUpAvatarScreen,
  SignUpNicknameScreen,
  SidekickIntroScreen,
  WelcomeChildScreen,
  SignUpAgeScreen,
} from '../../screens';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type JointOnboardingStackParams = {
  Loading: undefined;
  WelcomeChild: undefined;
  SidekickIntro: undefined;
  SignUpNickname: { isChild?: boolean } | undefined;
  SignUpAvatar: { isChild?: boolean } | undefined;
  SignUpAge: undefined;
};

const Stack = createNativeStackNavigator<JointOnboardingStackParams>();

export const JointOnboardingStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen name="Loading" component={LoadingScreen} />
    <Stack.Screen name="WelcomeChild" component={WelcomeChildScreen} />
    <Stack.Screen name="SidekickIntro" component={SidekickIntroScreen} />
    <Stack.Screen
      name="SignUpNickname"
      component={SignUpNicknameScreen}
      initialParams={{ isChild: true }}
    />
    <Stack.Screen name="SignUpAge" component={SignUpAgeScreen} />
    <Stack.Screen
      name="SignUpAvatar"
      component={SignUpAvatarScreen}
      initialParams={{ isChild: true }}
    />
  </Stack.Navigator>
);
