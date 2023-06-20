import React, { useEffect } from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import {
  CharmBookMenuScreen,
  CharmBookMenuType,
  GardenScreen,
  GardenTutorialDialogScreen,
  SelectCharmCarouselScreen,
  CompletedCharmEndScreen,
  SkipCharmEmojiSelectionScreen,
  SkipCharmAlertScreen,
  SkipCharmAcknowledgementScreen,
  SkipCharmJournalScreen,
} from '../../screens';
import { DEFAULT_STACK_OPTIONS } from '../options';
import {
  SaveMainStackName,
  SaveRecognitionStackScreenName,
} from '../navigationAsyncStorage';

export type GardenStackParams = {
  Garden: {
    isPlanting: boolean;
    isFirstTime: boolean;
    isFirstTimeGarden: boolean;
  };
  GardenTutorialDialog: { isStart: boolean };
  CharmBookMenu: { type: CharmBookMenuType };
  SelectCharmCarousel: undefined;
  CompletedCharmEnd: undefined;
  SkipCharmAlert: undefined;
  SkipCharmAcknowledgement: { isFirst: boolean };
  SkipCharmEmojiSelection: { isChild: boolean };
  SkipCharmJournal: undefined;
};

const Stack = createNativeStackNavigator<GardenStackParams>();

export const GardenStackNavigator = () => {
  useEffect(() => {
    const saveStack = async () => {
      await SaveMainStackName('');
      await SaveRecognitionStackScreenName('');
    };
    saveStack();
  }, []);

  return (
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
      <Stack.Screen
        name="SelectCharmCarousel"
        component={SelectCharmCarouselScreen}
      />
      <Stack.Screen
        name="CompletedCharmEnd"
        component={CompletedCharmEndScreen}
      />

      <Stack.Screen name="SkipCharmAlert" component={SkipCharmAlertScreen} />
      <Stack.Screen
        name="SkipCharmAcknowledgement"
        component={SkipCharmAcknowledgementScreen}
      />
      <Stack.Screen
        name="SkipCharmEmojiSelection"
        component={SkipCharmEmojiSelectionScreen}
      />
      <Stack.Screen
        name="SkipCharmJournal"
        component={SkipCharmJournalScreen}
      />
    </Stack.Navigator>
  );
};
