import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import {
  IRecognitionAcknowledgementRoute,
  RecognitionAcknowledgementScreen,
} from '../../screens';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type RecognitionStackParams = {
  RecognitionAcknowledgement: { data: IRecognitionAcknowledgementRoute };
};

const Stack = createNativeStackNavigator<RecognitionStackParams>();

export const RecognitionStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen
      name="RecognitionAcknowledgement"
      component={RecognitionAcknowledgementScreen}
    />
  </Stack.Navigator>
);
