import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import {
  GroundingAcknowledgementScreen,
  IGroundingAcknowledgementRoute,
  GroundingStartScreen,
  IGroundingStartRoute,
  GroundingStartScreen,
  GroundingInputScreen,
  GroundingInstructionScreen,
  GroundingTimerScreen,
  GroundingAcknowledgementTitleScreen,
  IGroundingAcknowledgementTitleRoute,
} from '../../screens';

import { DEFAULT_STACK_OPTIONS } from '../options';

export type ParentGroundingStackParams = {
  GroundingAcknowledgement: { data: IGroundingAcknowledgementRoute };
  GroundingStart: undefined;

  GroundingInstruction: undefined;
  GroundingAcknowledgementTitle: { data: IGroundingAcknowledgementTitleRoute };
  GroundingTimer: undefined;
  GroundingInput: undefined;
};

const Stack = createNativeStackNavigator<ParentGroundingStackParams>();

export const ParentGroundingStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen name="GroundingStart" component={GroundingStartScreen} />
    <Stack.Screen
      name="GroundingAcknowledgement"
      component={GroundingAcknowledgementScreen}
    />
    <Stack.Screen name="GroundingInput" component={GroundingInputScreen} />

    <Stack.Screen
      name="GroundingInstruction"
      component={GroundingInstructionScreen}
    />
    <Stack.Screen
      name="GroundingAcknowledgementTitle"
      component={GroundingAcknowledgementTitleScreen}
    />
    <Stack.Screen name="GroundingTimer" component={GroundingTimerScreen} />
  </Stack.Navigator>
);
