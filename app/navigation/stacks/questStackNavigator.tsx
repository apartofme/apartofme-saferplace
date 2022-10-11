import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { IQuest } from '../../models/IQuest';
import {
  AcknowledgementAlongEdgesScreen,
  AcknowledgementDoubleImageScreen,
  AcknowledgementNicknamesScreen,
  AcknowledgementSuccessivelyDoubleButtonScreen,
  AcknowledgementSuccessivelyScreen,
  AcknowledgementSupportScreen,
  AcknowledgementTitleScreen,
  AlertScreen,
  CharmCompletedScreen,
  CharmTimerButtonScreen,
  CharmTimerTitleScreen,
  DialogScreen,
  DummyQuestsScreen,
  ElixirDoubleInteractionScreen,
  EmojiSelectionScreen,
  EmotionSelectionScreen,
  FavouriteCharmCarouselScreen,
  InstructionScreen,
  JournelScreen,
  JournelSupportScreen,
  RadioButtonScreen,
  ReadOutLoudScreen,
  SelectDrawBuildScreen,
  SelectPlayerScreen,
  SelectPlayerSupportScreen,
  SelectSoundScreen,
  TimerTitleButtonScreen,
  TimerTitleScreen,
  VerticalSwipeScreen,
} from '../../screens';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type QuestStackParams = {
  DummyQuests: undefined;
  AcknowledgementAlongEdges: { data: IQuest };
  AcknowledgementDoubleImage: { data: IQuest };
  AcknowledgementNicknames: { data: IQuest };
  AcknowledgementSuccessively: { data: IQuest };
  AcknowledgementSuccessivelyDoubleButton: { data: IQuest };
  AcknowledgementSupport: { data: IQuest };
  AcknowledgementTitle: { data: IQuest };
  Alert: undefined;
  CharmCompleted: { data: IQuest };
  CharmTimerButton: { data: IQuest };
  CharmTimerTitle: { data: IQuest };
  Dialog: { data: IQuest };
  ElixirDoubleInteraction: { data: IQuest };
  EmojiSelection: { data: IQuest };
  EmotionSelection: { data: IQuest };
  FavouriteCharmCarousel: { data: IQuest };
  Journel: { data: IQuest };
  JournelSupport: { data: IQuest };
  RadioButton: { data: IQuest };
  SelectDrawBuild: { data: IQuest };
  SelectPlayer: { data: IQuest };
  SelectPlayerSupport: { data: IQuest };
  SelectSound: { data: IQuest };
  TimerTitle: { data: IQuest };
  TimerTitleButton: { data: IQuest };
  VerticalSwipe: { data: IQuest };
  Instruction: { data: IQuest };
  ReadOutLoud: { data: IQuest };
};

const Stack = createNativeStackNavigator<QuestStackParams>();

export const QuestStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    {/* // TODO: remove */}
    <Stack.Screen name="DummyQuests" component={DummyQuestsScreen} />
    <Stack.Screen
      name="AcknowledgementAlongEdges"
      component={AcknowledgementAlongEdgesScreen}
    />
    <Stack.Screen
      name="AcknowledgementDoubleImage"
      component={AcknowledgementDoubleImageScreen}
    />
    <Stack.Screen
      name="AcknowledgementNicknames"
      component={AcknowledgementNicknamesScreen}
    />
    <Stack.Screen
      name="AcknowledgementSuccessively"
      component={AcknowledgementSuccessivelyScreen}
    />
    <Stack.Screen
      name="AcknowledgementSuccessivelyDoubleButton"
      component={AcknowledgementSuccessivelyDoubleButtonScreen}
    />
    <Stack.Screen
      name="AcknowledgementSupport"
      component={AcknowledgementSupportScreen}
    />
    <Stack.Screen
      name="AcknowledgementTitle"
      component={AcknowledgementTitleScreen}
    />
    <Stack.Screen name="Alert" component={AlertScreen} />
    <Stack.Screen name="CharmCompleted" component={CharmCompletedScreen} />
    <Stack.Screen name="CharmTimerButton" component={CharmTimerButtonScreen} />
    <Stack.Screen name="CharmTimerTitle" component={CharmTimerTitleScreen} />
    <Stack.Screen name="Dialog" component={DialogScreen} />
    <Stack.Screen
      name="ElixirDoubleInteraction"
      component={ElixirDoubleInteractionScreen}
    />
    <Stack.Screen name="EmojiSelection" component={EmojiSelectionScreen} />
    <Stack.Screen name="EmotionSelection" component={EmotionSelectionScreen} />
    <Stack.Screen
      name="FavouriteCharmCarousel"
      component={FavouriteCharmCarouselScreen}
    />
    <Stack.Screen name="Journel" component={JournelScreen} />
    <Stack.Screen name="JournelSupport" component={JournelSupportScreen} />
    <Stack.Screen name="RadioButton" component={RadioButtonScreen} />
    <Stack.Screen name="SelectDrawBuild" component={SelectDrawBuildScreen} />
    <Stack.Screen name="SelectPlayer" component={SelectPlayerScreen} />
    <Stack.Screen
      name="SelectPlayerSupport"
      component={SelectPlayerSupportScreen}
    />
    <Stack.Screen name="SelectSound" component={SelectSoundScreen} />
    <Stack.Screen name="TimerTitle" component={TimerTitleScreen} />
    <Stack.Screen name="TimerTitleButton" component={TimerTitleButtonScreen} />
    <Stack.Screen name="VerticalSwipe" component={VerticalSwipeScreen} />
    <Stack.Screen name="Instruction" component={InstructionScreen} />
    <Stack.Screen name="ReadOutLoud" component={ReadOutLoudScreen} />
  </Stack.Navigator>
);
