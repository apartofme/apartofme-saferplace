import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import {
  ElixirAnimationScreen,
  ElixirInstructionScreen,
  MixingElixirSuccessScreen,
} from '../../screens';
import { PlantAreaType } from '../../screens/Garden/components';
import { MixingElixirPhaseType, PlantsType } from '../../utils/types';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type MixingElixirStackParams = {
  ElixirAnimation: {
    phase: MixingElixirPhaseType;
    isFirstTimeGarden: boolean;
    plantImage: keyof typeof PlantsType;
    selectedPlantArea: keyof typeof PlantAreaType;
  };
  ElixirInstruction: {
    phase: MixingElixirPhaseType;
    isFirstTimeGarden: boolean;
    plantImage: keyof typeof PlantsType;
    selectedPlantArea: keyof typeof PlantAreaType;
  };
  MixingElixirSuccess: {
    plantImage: keyof typeof PlantsType;
    isFirstTimeGarden: boolean;
    selectedPlantArea: keyof typeof PlantAreaType;
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
