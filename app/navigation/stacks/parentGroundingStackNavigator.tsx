import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import {
  GroundingAcknowledgementScreen,
  IGroundingAcknowledgementRoute,
} from '../../screens';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type ParentGroundingStackParams = {
  GroundingAcknowledgement: { data: IGroundingAcknowledgementRoute };
};

const Stack = createNativeStackNavigator<ParentGroundingStackParams>();

export const ParentGroundingStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen
      name="GroundingAcknowledgement"
      component={GroundingAcknowledgementScreen}
    />
  </Stack.Navigator>
);
