import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import {
  CharmBookMenuScreen,
  CharmBookMenuType,
  GardenScreen,
  GardenTutorialDialogScreen,
} from '../../screens';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type GardenStackParams = {
  Garden: {
    isPlanting: boolean;
    isFirstTime: boolean;
    isFirstTimeGarden: boolean;
  };
  GardenTutorialDialog: { isStart: boolean };
  CharmBookMenu: { type: CharmBookMenuType };
};

const Stack = createNativeStackNavigator<GardenStackParams>();

export const GardenStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen
      name="Garden"
      component={GardenScreen}
      initialParams={{
        isPlanting: false,
        isFirstTime: false,
        isFirstTimeGarden: false,
      }}
    />
    <Stack.Screen
      name="GardenTutorialDialog"
      component={GardenTutorialDialogScreen}
      initialParams={{ isStart: true }}
    />
    <Stack.Screen name="CharmBookMenu" component={CharmBookMenuScreen} />
  </Stack.Navigator>
);
