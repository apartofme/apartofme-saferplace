import React, { useEffect, useState } from 'react';
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
import {
  GetRecognitionStackScreenName,
  SaveMainStackName,
} from '../navigationAsyncStorage';

export type RecognitionStackParams = {
  RecognitionDialog: { data: IRecognitionDialogRoute };
  RecognitionAcknowledgement: { data: IRecognitionAcknowledgementRoute };
  ElixirCarousel: undefined;
  ChooseReason: undefined;
  RecognitionDoubleInteraction: undefined;
  RecognitionDoubleInteractionSuccess: undefined;
};

const Stack = createNativeStackNavigator<RecognitionStackParams>();

export const RecognitionStackNavigator = () => {
  const [currentRouteName, setCurrentRouteName] = useState<
    keyof RecognitionStackParams | undefined
  >();

  useEffect(() => {
    const saveStack = async () => {
      await SaveMainStackName('RecognitionStack');
    };
    saveStack();
  }, []);

  useEffect(() => {
    const getStackScreen = async () => {
      const route = await GetRecognitionStackScreenName();
      if (route) {
        setCurrentRouteName(route as keyof RecognitionStackParams);
      } else {
        setCurrentRouteName('RecognitionDialog');
      }
    };
    getStackScreen();
  }, []);

  return (
    <>
      {currentRouteName ? (
        <Stack.Navigator
          screenOptions={DEFAULT_STACK_OPTIONS}
          initialRouteName={currentRouteName}>
          <Stack.Screen
            name="RecognitionDialog"
            component={RecognitionDialogScreen}
          />
          <Stack.Screen name="ChooseReason" component={ChooseReasonScreen} />
          <Stack.Screen
            name="RecognitionAcknowledgement"
            component={RecognitionAcknowledgementScreen}
          />
          <Stack.Screen
            name="ElixirCarousel"
            component={ElixirCarouselScreen}
          />
          <Stack.Screen
            name="RecognitionDoubleInteraction"
            component={RecognitionDoubleInteractionScreen}
          />
          <Stack.Screen
            name="RecognitionDoubleInteractionSuccess"
            component={RecognitionDoubleInteractionSuccessScreen}
          />
        </Stack.Navigator>
      ) : null}
    </>
  );
};
