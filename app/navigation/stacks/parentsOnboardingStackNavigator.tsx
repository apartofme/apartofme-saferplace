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
} from '../../screens';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type ParentsOnboardingStackParams = {
  WelcomeParent: undefined;
  LanguageSelection: undefined;
  Acknowledgement: undefined;
  SignUpCredentials: undefined;
  SignUpNickname: undefined;
  SignUpAvatar: undefined;
  CharmsIntroducing: undefined;
  OnboardingCarousel: undefined;
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
      name="OnboardingCarousel"
      component={OnboardingCarouselScreen}
    />
    <Stack.Screen
      name="SignUpCredentials"
      component={SignUpCredentialsScreen}
    />
    <Stack.Screen name="SignUpNickname" component={SignUpNicknameScreen} />
    <Stack.Screen name="SignUpAvatar" component={SignUpAvatarScreen} />
    <Stack.Screen
      name="CharmsIntroducing"
      component={CharmsIntroducingScreen}
    />
  </Stack.Navigator>
);
