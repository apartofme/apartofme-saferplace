import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { ElixirCarouselScreen, RecognitionDialogScreen } from '../../screens';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type RecognitionStackParams = {
  RecognitionDialog: undefined;
  ElixirCarousel: undefined;
};

const Stack = createNativeStackNavigator<RecognitionStackParams>();

export const RecognitionStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen
      name="RecognitionDialog"
      component={RecognitionDialogScreen}
    />
    <Stack.Screen name="ElixirCarousel" component={ElixirCarouselScreen} />
  </Stack.Navigator>
);
