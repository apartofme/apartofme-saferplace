import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import {
  ChooseReasonScreen,
  ElixirCarouselScreen,
  IRecognitionAcknowledgementRoute,
  IRecognitionDialogRoute,
  RecognitionAcknowledgementScreen,
  RecognitionDialogScreen,
  RecognitionDoubleInteractionScreen,
  RecognitionDoubleInteractionSuccessScreen,
} from '../../screens';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type RecognitionStackParams = {
  RecognitionDialog: { data: IRecognitionDialogRoute };
  RecognitionAcknowledgement: { data: IRecognitionAcknowledgementRoute };
  ElixirCarousel: undefined;
  ChooseReason: undefined;
  RecognitionDoubleInteraction: undefined;
  RecognitionDoubleInteractionSuccess: undefined;
};

const Stack = createNativeStackNavigator<RecognitionStackParams>();

export const RecognitionStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen
      name="RecognitionDialog"
      component={RecognitionDialogScreen}
    />
    <Stack.Screen name="ChooseReason" component={ChooseReasonScreen} />
    <Stack.Screen
      name="RecognitionAcknowledgement"
      component={RecognitionAcknowledgementScreen}
    />
    <Stack.Screen name="ElixirCarousel" component={ElixirCarouselScreen} />
    <Stack.Screen
      name="RecognitionDoubleInteraction"
      component={RecognitionDoubleInteractionScreen}
    />
    <Stack.Screen
      name="RecognitionDoubleInteractionSuccess"
      component={RecognitionDoubleInteractionSuccessScreen}
    />
  </Stack.Navigator>
);
