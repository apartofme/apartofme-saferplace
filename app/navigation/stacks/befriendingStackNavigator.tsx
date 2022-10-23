import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import {
  BefriendingDialogScreen,
  BefriendingGardenScreen,
} from '../../screens';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type BefriendingStackParams = {
  BefriendingDialog: undefined;
  BefriendingGarden: undefined;
};

const Stack = createNativeStackNavigator<BefriendingStackParams>();

export const BefriendingStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen
      name="BefriendingDialog"
      component={BefriendingDialogScreen}
    />
    <Stack.Screen
      name="BefriendingGarden"
      component={BefriendingGardenScreen}
    />
  </Stack.Navigator>
);
