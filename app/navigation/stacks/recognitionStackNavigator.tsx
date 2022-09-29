import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { ChooseReasonScreen } from '../../screens';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type RecognitionStackParams = {
  ChooseReason: undefined;
};

const Stack = createNativeStackNavigator<RecognitionStackParams>();

export const RecognitionStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen name="ChooseReason" component={ChooseReasonScreen} />
  </Stack.Navigator>
);
