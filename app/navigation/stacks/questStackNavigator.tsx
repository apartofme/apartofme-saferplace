import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { IQuest } from '../../models/IQuest';
import {
  AcknowledgementAlongEdgesScreen,
  AcknowledgementSuccessivelyScreen,
  DialogScreen,
  DummyQuestsScreen,
  EmojiSelectionScreen,
  JournelScreen,
  PassPhoneScreen,
  SelectPlayerScreen,
  SelectPlayerSupportScreen,
  VerticalSwipeScreen,
} from '../../screens';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type QuestStackParams = {
  DummyQuests: undefined;
  Dialog: { data: IQuest };
  EmojiSelection: { data: IQuest };
  AcknowledgementSuccessively: { data: IQuest };
  SelectPlayer: { data: IQuest };
  PassPhone: { data: IQuest };
  Journel: { data: IQuest };
  VerticalSwipe: { data: IQuest };
  AcknowledgementAlongEdges: { data: IQuest };
  SelectPlayerSupport: { data: IQuest };
};

const Stack = createNativeStackNavigator<QuestStackParams>();

export const QuestStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    {/* // TODO: remove */}
    <Stack.Screen name="DummyQuests" component={DummyQuestsScreen} />
    <Stack.Screen name="Dialog" component={DialogScreen} />
    <Stack.Screen name="EmojiSelection" component={EmojiSelectionScreen} />
    <Stack.Screen
      name="AcknowledgementSuccessively"
      component={AcknowledgementSuccessivelyScreen}
    />
    <Stack.Screen name="SelectPlayer" component={SelectPlayerScreen} />
    <Stack.Screen name="PassPhone" component={PassPhoneScreen} />
    <Stack.Screen name="Journel" component={JournelScreen} />
    <Stack.Screen name="VerticalSwipe" component={VerticalSwipeScreen} />
    <Stack.Screen
      name="AcknowledgementAlongEdges"
      component={AcknowledgementAlongEdgesScreen}
    />
    <Stack.Screen
      name="SelectPlayerSupport"
      component={SelectPlayerSupportScreen}
    />
  </Stack.Navigator>
);
