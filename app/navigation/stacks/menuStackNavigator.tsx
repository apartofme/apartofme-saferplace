import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import {
  AboutCharmScreen,
  FeedbackScreen,
  MainMenuScreen,
  FeedbackSuccessScreen,
  LanguageSettingsScreen,
  FrequentlyAskedQuestionsScreen,
  ChangePasswordScreen,
  ChangePasswordSuccessScreen,
  GrownUpsGuideScreen,
  NotificationSettingsScreen,
  AboutCharmMenuScreen,
} from '../../screens';
import { AboutCharmsMenuItem } from '../../screens/Menu/AboutCharm/AboutCharm.types';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type MenuStackParams = {
  ChangePasswordSuccess: undefined;
  MainMenu: undefined;
  AboutCharm: { data: AboutCharmsMenuItem };
  GrownUpsGuide: undefined;
  FeedbackSuccess: undefined;
  Feedback: undefined;
  LanguageSettings: undefined;
  FrequentlyAskedQuestions: undefined;
  ChangePassword: undefined;
  NotificationSettings: undefined;
  AboutCharmMenu: undefined;
};

const Stack = createNativeStackNavigator<MenuStackParams>();

export const MenuStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen name="MainMenu" component={MainMenuScreen} />
    <Stack.Screen
      name="FrequentlyAskedQuestions"
      component={FrequentlyAskedQuestionsScreen}
    />
    <Stack.Screen name="GrownUpsGuide" component={GrownUpsGuideScreen} />
    <Stack.Screen name="Feedback" component={FeedbackScreen} />
    <Stack.Screen name="FeedbackSuccess" component={FeedbackSuccessScreen} />
    <Stack.Screen name="LanguageSettings" component={LanguageSettingsScreen} />

    <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
    <Stack.Screen
      name="ChangePasswordSuccess"
      component={ChangePasswordSuccessScreen}
    />
    <Stack.Screen
      name="NotificationSettings"
      component={NotificationSettingsScreen}
    />
    <Stack.Screen name="AboutCharm" component={AboutCharmScreen} />
    <Stack.Screen name="AboutCharmMenu" component={AboutCharmMenuScreen} />
  </Stack.Navigator>
);
