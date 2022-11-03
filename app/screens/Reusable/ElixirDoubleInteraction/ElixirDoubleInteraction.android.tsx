import { values } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import { ImageBackground, SafeAreaView, View } from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';

import { CHARMS_BACKGROUNDS } from '../../../assets';
import { AVATARS_SVG } from '../../../assets/svg';
import { ElixirThreeIcon } from '../../../assets/svg/garden';
import { ExtendedText } from '../../../components';
import { AUDIO } from '../../../constants/audio';
import {
  DAY_14_CLOSING_DIALOGUE_ID,
  THE_CHARM_OF_BEFRIENDING_ID,
  THE_CHARM_OF_WEAVING_ID,
} from '../../../constants/quest';
import { useAppDispatch, useAppSelector, useAppState } from '../../../hooks';
import { elixirSlice, questSlice } from '../../../redux/slices';
import { AudioPlayerHelper } from '../../../services/helpers/AudioPlayerHelper';
import { generalStyles } from '../../../utils/styles';
import { styles } from './ElixirDoubleInteraction.styles';
import { IElixirDoubleInteractionScreenProps } from './ElixirDoubleInteraction.types';

export const ElixirDoubleInteractionScreen: React.FC<IElixirDoubleInteractionScreenProps> =
  ({ navigation, route }) => {
    const { title, elixirReward, backgroundImage } = route.params.data;
    const dispatch = useAppDispatch();

    const { currentQuestLine, isCurrentQuestCompleted, allQuests } =
      useAppSelector(state => state.quest);
    const fullnessElixir = useAppSelector(state => state.elixir.fullnessElixir);
    const { settings } = useAppSelector(state => state.settings);
    const currentLanguage = settings.language ?? 'en';
    const isSoundFXEnabled = settings.audioSettings?.isSoundFXEnabled;
    const quests = allQuests?.[currentLanguage];
    const { parent, child } = useAppSelector(state => state.user);

    const [isChildPress, setIsChildPress] = useState(false);
    const [isAdultPress, setIsAdultPress] = useState(false);

    const [isSoundStart, setIsSoundStart] = useState(false);

    const ParentAvatarIcon = AVATARS_SVG[parent?.avatar ?? 'CircleRabbitIcon'];
    const ChildAvatarIcon = AVATARS_SVG[child?.avatar ?? 'CircleBearIcon'];

    const setChildPress = useCallback(() => {
      setIsChildPress(!isChildPress);
    }, [isChildPress]);

    const setAdultPress = useCallback(() => {
      setIsAdultPress(!isAdultPress);
    }, [isAdultPress]);

    useEffect(() => {
      if (isChildPress && isAdultPress && !isSoundStart && isSoundFXEnabled) {
        AudioPlayerHelper.play(AUDIO.BOTTLE_FILLING);
        setIsSoundStart(true);
        return;
      }
      if (isChildPress && isAdultPress && isSoundFXEnabled) {
        AudioPlayerHelper.start();
        return;
      }
      AudioPlayerHelper.pause();
    }, [isAdultPress, isChildPress, isSoundFXEnabled, isSoundStart]);

    const appStatus = useAppState();

    useEffect(() => {
      if (appStatus !== 'active') {
        AudioPlayerHelper.stop();
      }
    }, [appStatus]);

    useEffect(() => {
      if (isChildPress && isAdultPress) {
        // *** Flow for complited charms ***
        if (isCurrentQuestCompleted) {
          dispatch(questSlice.actions.setIsCurrentQuestCompleted(false));
          navigation.push('GardenStack', {
            screen: 'CompletedCharmEnd',
          });
          return;
        }

        dispatch(
          elixirSlice.actions.updateFullnessElixir(
            fullnessElixir + (elixirReward ?? 1),
          ),
        );

        // *** Flow for static navigation charm og befriending ***
        if (
          currentQuestLine &&
          currentQuestLine.id === THE_CHARM_OF_BEFRIENDING_ID
        ) {
          navigation.push('BefriendingStack');
          return;
        }

        // *** Flow for static navigation day 14 closing dialog ***
        if (
          currentQuestLine &&
          currentQuestLine.id === THE_CHARM_OF_WEAVING_ID
        ) {
          const newQuestLineId = DAY_14_CLOSING_DIALOGUE_ID;
          const newQuests = values(quests?.[newQuestLineId].quests);

          dispatch(
            questSlice.actions.saveCurrentQuestLine({
              id: newQuests[0].questLineId,
              quests: newQuests,
            }),
          );

          dispatch(questSlice.actions.updateCurrentDayQuestsStack());
          dispatch(questSlice.actions.saveCurrentQuestIdx(0));

          navigation.push('QuestStack', {
            screen: newQuests[0].type,
            params: {
              data: { ...newQuests[0] },
            },
          });
          return;
        }
        navigation.navigate('ElixirTitleButton');
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isChildPress, isAdultPress]);

    return (
      <ImageBackground
        source={
          CHARMS_BACKGROUNDS[backgroundImage ?? 'ALTERNATIVE_GARDEN_BACKGROUND']
        }
        style={generalStyles.flex}>
        <SafeAreaView style={styles.container}>
          <View style={generalStyles.aiCenter}>
            <ExtendedText style={styles.title}>{title}</ExtendedText>
          </View>
          {/* // TODO: change to animation */}
          <View style={generalStyles.aiCenter}>
            <ElixirThreeIcon />
          </View>

          <GestureHandlerRootView style={styles.buttonsContainer}>
            <PanGestureHandler onBegan={setChildPress} onEnded={setChildPress}>
              <View>
                <ParentAvatarIcon width={90} height={90} />
              </View>
            </PanGestureHandler>
            <PanGestureHandler onBegan={setAdultPress} onEnded={setAdultPress}>
              <View>
                <ChildAvatarIcon width={90} height={90} />
              </View>
            </PanGestureHandler>
          </GestureHandlerRootView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
