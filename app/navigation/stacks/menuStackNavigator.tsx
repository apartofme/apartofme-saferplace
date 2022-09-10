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
} from '../../screens';
import { AboutCharmsMenuType } from '../../screens/Menu/AboutCharm/AboutCharm.data';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type MenuStackParams = {
  ChangePasswordSuccess: undefined;
  MainMenu: undefined;
  AboutCharm: { type: AboutCharmsMenuType };
  GrownUpsGuide: undefined;
  FeedbackSuccess: undefined;
  Feedback: undefined;
  LanguageSettings: undefined;
  FrequentlyAskedQuestions: undefined;
  ChangePassword: undefined;
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
    <Stack.Screen name="AboutCharm" component={AboutCharmScreen} />
  </Stack.Navigator>
);
