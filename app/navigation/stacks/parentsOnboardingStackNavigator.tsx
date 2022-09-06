import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import {
  SignUpCredentialsScreen,
  AcknowledgementScreen,
  LanguageSelectionScreen,
  WelcomeParentScreen,
  SignUpNicknameScreen,
  SignUpAvatarScreen,
  CharmsIntroducingScreen,
  OnboardingCarouselScreen,
  ForgotPasswordEmailScreen,
  ForgotPasswordSuccessScreen,
} from '../../screens';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type ParentsOnboardingStackParams = {
  WelcomeParent: undefined;
  LanguageSelection: undefined;
  Acknowledgement: undefined;
  SignUpCredentials: undefined;
  SignUpNickname: { isChild?: boolean } | undefined;
  SignUpAvatar: { isChild?: boolean } | undefined;
  CharmsIntroducing: undefined;
  OnboardingCarousel: undefined;
  ForgotPasswordEmail: undefined;
  ForgotPasswordSuccess: undefined;
};

const Stack = createNativeStackNavigator<ParentsOnboardingStackParams>();

export const ParentsOnboardingStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen
      name="OnboardingCarousel"
      component={OnboardingCarouselScreen}
    />
    <Stack.Screen name="WelcomeParent" component={WelcomeParentScreen} />
    <Stack.Screen
      name="LanguageSelection"
      component={LanguageSelectionScreen}
    />
    <Stack.Screen name="Acknowledgement" component={AcknowledgementScreen} />
    <Stack.Screen
      name="CharmsIntroducing"
      component={CharmsIntroducingScreen}
    />
    <Stack.Screen
      name="SignUpCredentials"
      component={SignUpCredentialsScreen}
    />
    <Stack.Screen
      name="SignUpNickname"
      component={SignUpNicknameScreen}
      initialParams={{ isChild: false }}
    />
    <Stack.Screen
      name="SignUpAvatar"
      component={SignUpAvatarScreen}
      initialParams={{ isChild: false }}
    />
    <Stack.Screen
      name="ForgotPasswordEmail"
      component={ForgotPasswordEmailScreen}
    />
    <Stack.Screen
      name="ForgotPasswordSuccess"
      component={ForgotPasswordSuccessScreen}
    />
  </Stack.Navigator>
);
