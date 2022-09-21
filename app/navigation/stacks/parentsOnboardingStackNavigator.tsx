import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import {
  SignUpCredentialsScreen,
  LanguageSelectionScreen,
  WelcomeParentScreen,
  SignUpNicknameScreen,
  SignUpAvatarScreen,
  CharmsIntroducingScreen,
  OnboardingCarouselScreen,
  LoginScreen,
  SelectUserScreen,
  SignUpSuccessScreen,
  ForgotPasswordEmailScreen,
  ForgotPasswordSuccessScreen,
  IVerticalSwipeRoute,
  VerticalSwipeScreen,
} from '../../screens';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type ParentsOnboardingStackParams = {
  WelcomeParent: undefined;
  LanguageSelection: undefined;
  SignUpCredentials: undefined;
  SignUpNickname: { isChild?: boolean } | undefined;
  SignUpAvatar: { isChild?: boolean } | undefined;
  SignUpSuccess: { isChild?: boolean } | undefined;
  CharmsIntroducing: undefined;
  OnboardingCarousel: undefined;
  Login: undefined;
  SelectUser: undefined;
  ForgotPasswordEmail: undefined;
  ForgotPasswordSuccess: undefined;
  VerticalSwipe: { data: IVerticalSwipeRoute };
};

const Stack = createNativeStackNavigator<ParentsOnboardingStackParams>();

export const ParentsOnboardingStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen name="WelcomeParent" component={WelcomeParentScreen} />
    <Stack.Screen
      name="LanguageSelection"
      component={LanguageSelectionScreen}
    />
    <Stack.Screen name="VerticalSwipe" component={VerticalSwipeScreen} />
    <Stack.Screen
      name="OnboardingCarousel"
      component={OnboardingCarouselScreen}
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
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="SelectUser" component={SelectUserScreen} />
    <Stack.Screen
      name="SignUpSuccess"
      component={SignUpSuccessScreen}
      initialParams={{ isChild: false }}
    />
    <Stack.Screen
      name="CharmsIntroducing"
      component={CharmsIntroducingScreen}
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
