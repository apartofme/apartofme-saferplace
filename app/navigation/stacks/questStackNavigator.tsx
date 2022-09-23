import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { IQuest } from '../../models/IQuest';
import {
  AcknowledgementSuccessivelyScreen,
  DialogScreen,
  DummyQuestsScreen,
  EmojiSelectionScreen,
  PassPhoneScreen,
  SelectPlayerScreen,
} from '../../screens';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type QuestStackParams = {
  DummyQuests: undefined;
  Dialog: { data: IQuest };
  EmojiSelection: { data: IQuest };
  AcknowledgementSuccessively: { data: IQuest };
  SelectPlayer: { data: IQuest };
  PassPhone: { data: IQuest };
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
  </Stack.Navigator>
);
