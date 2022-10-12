import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { IQuest } from '../../models/IQuest';
import {
  AcknowledgementAlongEdgesDoubleButtonScreen,
  AcknowledgementAlongEdgesScreen,
  AcknowledgementDoubleImageDoubleButtonScreen,
  AcknowledgementDoubleImageScreen,
  AcknowledgementLargeTitleScreen,
  AcknowledgementNicknamesScreen,
  AcknowledgementSuccessivelyDoubleButtonScreen,
  AcknowledgementSuccessivelyScreen,
  AcknowledgementSupportScreen,
  AcknowledgementTitleScreen,
  AlertScreen,
  CharmCompletedScreen,
  CharmTimerButtonScreen,
  CharmTimerTitleScreen,
  DancingTimerScreen,
  DialogScreen,
  DummyQuestsScreen,
  ElixirDoubleInteractionScreen,
  ElixirTitleButtonScreen,
  EmojiSelectionScreen,
  EmotionSelectionScreen,
  InstructionScreen,
  IEscapeMenuRoute,
  JournelScreen,
  JournelSupportScreen,
  NadiyaEmotionCarouselScreen,
  EscapeMenuScreen,
  RadioButtonScreen,
  ReadOutLoudScreen,
  SelectDrawBuildScreen,
  SelectPlayerScreen,
  SelectPlayerSupportScreen,
  SelectSoundScreen,
  TimerTitleButtonScreen,
  AnimationTitleScreen,
  TrySomethingNewCarouselScreen,
  VerticalSwipeScreen,
} from '../../screens';
import {
  DEFAULT_STACK_OPTIONS,
  TRANSPARENT_MODAL_WITH_FADE_ANIM_OPTIONS,
} from '../options';

export type QuestStackParams = {
  DummyQuests: undefined;
  AcknowledgementAlongEdges: { data: IQuest };
  AcknowledgementAlongEdgesDoubleButton: { data: IQuest };
  AcknowledgementDoubleImage: { data: IQuest };
  AcknowledgementDoubleImageDoubleButton: { data: IQuest };
  AcknowledgementLargeTitle: { data: IQuest };
  AcknowledgementNicknames: { data: IQuest };
  AcknowledgementSuccessively: { data: IQuest };
  AcknowledgementSuccessivelyDoubleButton: { data: IQuest };
  AcknowledgementSupport: { data: IQuest };
  AcknowledgementTitle: { data: IQuest };
  Alert: undefined;
  AnimationTitle: { data: IQuest };
  CharmCompleted: { data: IQuest };
  CharmTimerButton: { data: IQuest };
  CharmTimerTitle: { data: IQuest };
  DancingTimer: { data: IQuest };
  Dialog: { data: IQuest };
  ElixirDoubleInteraction: { data: IQuest };
  ElixirTitleButton: undefined;
  EmojiSelection: { data: IQuest };
  EmotionSelection: { data: IQuest };
  Journel: { data: IQuest };
  JournelSupport: { data: IQuest };
  NadiyaEmotionCarousel: { data: IQuest };
  RadioButton: { data: IQuest };
  SelectDrawBuild: { data: IQuest };
  SelectPlayer: { data: IQuest };
  SelectPlayerSupport: { data: IQuest };
  SelectSound: { data: IQuest };
  TimerTitleButton: { data: IQuest };
  VerticalSwipe: { data: IQuest };
  Instruction: { data: IQuest };
  ReadOutLoud: { data: IQuest };
  EscapeMenu: { data: IEscapeMenuRoute };
  TrySomethingNewCarousel: { data: IQuest };
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
      name="AcknowledgementAlongEdgesDoubleButton"
      component={AcknowledgementAlongEdgesDoubleButtonScreen}
    />
    <Stack.Screen
      name="AcknowledgementDoubleImage"
      component={AcknowledgementDoubleImageScreen}
    />
    <Stack.Screen
      name="AcknowledgementDoubleImageDoubleButton"
      component={AcknowledgementDoubleImageDoubleButtonScreen}
    />
    <Stack.Screen
      name="AcknowledgementLargeTitle"
      component={AcknowledgementLargeTitleScreen}
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
    <Stack.Screen name="AnimationTitle" component={AnimationTitleScreen} />
    <Stack.Screen name="CharmCompleted" component={CharmCompletedScreen} />
    <Stack.Screen name="CharmTimerButton" component={CharmTimerButtonScreen} />
    <Stack.Screen name="CharmTimerTitle" component={CharmTimerTitleScreen} />
    <Stack.Screen name="DancingTimer" component={DancingTimerScreen} />
    <Stack.Screen name="Dialog" component={DialogScreen} />
    <Stack.Screen
      name="ElixirDoubleInteraction"
      component={ElixirDoubleInteractionScreen}
    />
    <Stack.Screen
      name="ElixirTitleButton"
      component={ElixirTitleButtonScreen}
    />
    <Stack.Screen name="EmojiSelection" component={EmojiSelectionScreen} />
    <Stack.Screen name="EmotionSelection" component={EmotionSelectionScreen} />
    <Stack.Screen name="Journel" component={JournelScreen} />
    <Stack.Screen name="JournelSupport" component={JournelSupportScreen} />
    <Stack.Screen
      name="NadiyaEmotionCarousel"
      component={NadiyaEmotionCarouselScreen}
    />
    <Stack.Screen name="RadioButton" component={RadioButtonScreen} />
    <Stack.Screen name="SelectDrawBuild" component={SelectDrawBuildScreen} />
    <Stack.Screen name="SelectPlayer" component={SelectPlayerScreen} />
    <Stack.Screen
      name="SelectPlayerSupport"
      component={SelectPlayerSupportScreen}
    />
    <Stack.Screen name="SelectSound" component={SelectSoundScreen} />
    <Stack.Screen name="TimerTitleButton" component={TimerTitleButtonScreen} />
    <Stack.Screen name="VerticalSwipe" component={VerticalSwipeScreen} />
    <Stack.Screen name="Instruction" component={InstructionScreen} />
    <Stack.Screen name="ReadOutLoud" component={ReadOutLoudScreen} />
    <Stack.Screen
      options={TRANSPARENT_MODAL_WITH_FADE_ANIM_OPTIONS}
      name="EscapeMenu"
      component={EscapeMenuScreen}
    />
    <Stack.Screen
      name="TrySomethingNewCarousel"
      component={TrySomethingNewCarouselScreen}
    />
  </Stack.Navigator>
);
