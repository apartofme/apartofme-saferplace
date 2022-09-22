import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { IQuest } from '../../models/IQuest';
import {
  DialogScreen,
  DummyQuestsScreen,
  EmojiSelectionScreen,
} from '../../screens';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type QuestStackParams = {
  DummyQuests: undefined;
  Dialog: { data: IQuest };
  EmojiSelection: { data: IQuest };
};

const Stack = createNativeStackNavigator<QuestStackParams>();

export const QuestStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen name="DummyQuests" component={DummyQuestsScreen} />
    <Stack.Screen name="Dialog" component={DialogScreen} />
    <Stack.Screen name="EmojiSelection" component={EmojiSelectionScreen} />
  </Stack.Navigator>
);
