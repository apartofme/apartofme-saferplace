import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import {
  EndSequenceNarrativeScreen,
  EndSequenceDualElixirScreen,
  EndSequenceShakeScreen,
  EndSequenceFinalScreen,
} from '../../screens';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type EndSequenceStackParams = {
  EndSequenceDualElixir: undefined;
  EndSequenceNarrative: { isStart: boolean };
  EndSequenceShake: undefined;
  EndSequenceFinal: undefined;
};

const Stack = createNativeStackNavigator<EndSequenceStackParams>();

export const EndSequenceStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen
      name="EndSequenceDualElixir"
      component={EndSequenceDualElixirScreen}
    />
    <Stack.Screen
      name="EndSequenceNarrative"
      component={EndSequenceNarrativeScreen}
    />
    <Stack.Screen name="EndSequenceShake" component={EndSequenceShakeScreen} />
    <Stack.Screen name="EndSequenceFinal" component={EndSequenceFinalScreen} />
  </Stack.Navigator>
);
