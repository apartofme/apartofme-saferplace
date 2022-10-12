import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import {
  ElixirAnimationScreen,
  ElixirInstructionScreen,
  MixingElixirSuccessScreen,
} from '../../screens';
import { PlantAreaType } from '../../screens/Garden/components';
import { MixingElixirPhaseType } from '../../utils/types';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type MixingElixirStackParams = {
  ElixirAnimation: {
    phase: MixingElixirPhaseType;
    isFirstTimeGarden: boolean;
    selectedPlantArea: PlantAreaType;
  };
  ElixirInstruction: {
    phase: MixingElixirPhaseType;
    isFirstTimeGarden: boolean;
    selectedPlantArea: PlantAreaType;
  };
  MixingElixirSuccess: {
    isFirstTimeGarden: boolean;
    selectedPlantArea: PlantAreaType;
  };
};

const Stack = createNativeStackNavigator<MixingElixirStackParams>();

export const MixingElixirStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen
      name="ElixirAnimation"
      component={ElixirAnimationScreen}
      initialParams={{ phase: MixingElixirPhaseType.Mix }}
    />
    <Stack.Screen
      name="ElixirInstruction"
      component={ElixirInstructionScreen}
      initialParams={{ phase: MixingElixirPhaseType.Mix }}
    />
    <Stack.Screen
      name="MixingElixirSuccess"
      component={MixingElixirSuccessScreen}
    />
  </Stack.Navigator>
);
