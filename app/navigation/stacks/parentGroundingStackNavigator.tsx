import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import {
  GroundingStartScreen,
  GroundingInputScreen,
  GroundingInstructionScreen,
  GroundingTimerScreen,
  GroundingAcknowledgementTitleScreen,
  IGroundingAcknowledgementTitleRoute,
  CloseEyesScreen,
  StampFeetScreen,
  ImagineTreeRootScreen,
  ImagineOakScreen,
  EarthConnectionScreen,
  EarthStressScreen,
  BringingRootsScreen,
  WellDoneScreen,
  GroundingCompletedScreen,
} from '../../screens';

import { DEFAULT_STACK_OPTIONS } from '../options';
import { NavigationRouteNames } from './mergedParams';

export type ParentGroundingStackParams = {
  GroundingStart: undefined;

  GroundingInstruction: undefined;
  GroundingAcknowledgementTitle: { data: IGroundingAcknowledgementTitleRoute };
  GroundingTimer: { nextRouteName: NavigationRouteNames };
  GroundingInput: undefined;
  CloseEyes: undefined;
  StampFeet: undefined;
  ImagineTreeRoot: undefined;
  ImagineOak: undefined;
  EarthConnection: undefined;
  EarthStress: undefined;
  BringingRoots: undefined;
  WellDone: undefined;
  GroundingCompleted: undefined;
};

const Stack = createNativeStackNavigator<ParentGroundingStackParams>();

export const ParentGroundingStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen name="GroundingStart" component={GroundingStartScreen} />
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
    <Stack.Screen name="CloseEyes" component={CloseEyesScreen} />
    <Stack.Screen name="StampFeet" component={StampFeetScreen} />
    <Stack.Screen name="ImagineTreeRoot" component={ImagineTreeRootScreen} />
    <Stack.Screen name="ImagineOak" component={ImagineOakScreen} />
    <Stack.Screen name="EarthConnection" component={EarthConnectionScreen} />
    <Stack.Screen name="EarthStress" component={EarthStressScreen} />
    <Stack.Screen name="BringingRoots" component={BringingRootsScreen} />
    <Stack.Screen name="WellDone" component={WellDoneScreen} />
    <Stack.Screen
      name="GroundingCompleted"
      component={GroundingCompletedScreen}
    />
  </Stack.Navigator>
);
