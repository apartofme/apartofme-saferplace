import React, { useCallback, useEffect, useMemo } from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import Lottie from 'lottie-react-native';
import { values } from 'lodash';

import { IElixirAnimationScreenProps } from './ElixirAnimation.types';
import { styles } from './ElixirAnimation.styles';
import { ExtendedText } from '../../../components';
import { BACKGROUND_IMAGES } from '../../../assets';
import { MixingElixirPhaseType, PlantsType } from '../../../utils/types';
import { generalStyles } from '../../../utils/styles';
import { AudioPlayerHelper } from '../../../services/helpers/AudioPlayerHelper';
import { AUDIO } from '../../../constants/audio';
import { useAppDispatch, useAppSelector, useAppState } from '../../../hooks';
import {
  DAY_13_CLOSING_DIALOGUE_ID,
  THE_CHARM_OF_BEFRIENDING_ID,
} from '../../../constants/quest';
import { questSlice } from '../../../redux/slices';
import { ANIMATIONS } from '../../../assets/animations';
import { LottieAbsoluteStyles } from '../../../utils';

export const ElixirAnimationScreen: React.FC<IElixirAnimationScreenProps> = ({
  navigation,
  route,
}) => {
  const { phase, selectedPlantArea, isFirstTimeGarden } = route.params;
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const { currentQuestLine, allQuests } = useAppSelector(state => state.quest);
  const settings = useAppSelector(state => state.settings.settings);
  const currentLanguage = settings.language ?? 'en';
  const quests = allQuests?.[currentLanguage];
  const currentPlant = useAppSelector(
    state => state.plant.plantsStack?.[state.plant.plantsStack.length - 1],
  );

  const isSoundFXEnabled = settings.audioSettings?.isSoundFXEnabled;

  const onAnimationFinish = useCallback(() => {
    if (phase < MixingElixirPhaseType.Pour) {
      navigation.push('ElixirInstruction', {
        phase: phase + 1,
        selectedPlantArea,
        isFirstTimeGarden,
      });
      return;
    }

    // *** Flow for static navigation day 13 closing dialog ***
    if (currentQuestLine?.id === THE_CHARM_OF_BEFRIENDING_ID) {
      const newQuestLineId = DAY_13_CLOSING_DIALOGUE_ID;
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

    navigation.push('MixingElixirSuccess', {
      selectedPlantArea,
      isFirstTimeGarden,
    });
  }, [
    currentQuestLine?.id,
    dispatch,
    isFirstTimeGarden,
    navigation,
    phase,
    quests,
    selectedPlantArea,
  ]);

  const title = useMemo(() => {
    if (isSoundFXEnabled) {
      switch (phase) {
        case MixingElixirPhaseType.Mix:
          AudioPlayerHelper.play(AUDIO.MIXING_ELIXIR_ANIMATION);
          return 'screens.mixing_exixir.elixir_animaion.mix';
        case MixingElixirPhaseType.Open:
          AudioPlayerHelper.play(AUDIO.OPENING_ELIXIR_ANIMATION);
          return 'screens.mixing_exixir.elixir_animaion.open';
        default:
          AudioPlayerHelper.play(AUDIO.POURING_ELIXIR_ANIMATION);
          return 'screens.mixing_exixir.elixir_animaion.pour';
      }
    }
  }, [isSoundFXEnabled, phase]);

  const pourAnimation = useMemo(() => {
    if (currentQuestLine?.id === THE_CHARM_OF_BEFRIENDING_ID) {
      return ANIMATIONS.TROUBLE_SOME_SPIRIT_ENDING;
    }
    switch (currentPlant) {
      case PlantsType.Compassion:
        return ANIMATIONS.POTION_POUR_COMPASSION;
      case PlantsType.Calm:
        return ANIMATIONS.POTION_POUR_CALM;
      default:
        return ANIMATIONS.POTION_POUR_COURAGE;
    }
  }, [currentPlant, currentQuestLine?.id]);

  const animation = useMemo(() => {
    switch (phase) {
      case MixingElixirPhaseType.Mix:
        return (
          <Lottie
            onAnimationFinish={onAnimationFinish}
            source={ANIMATIONS.POTION_MIX}
            autoPlay
            loop={false}
            style={LottieAbsoluteStyles(-15)}
          />
        );
      case MixingElixirPhaseType.Open:
        return (
          <Lottie
            onAnimationFinish={onAnimationFinish}
            source={ANIMATIONS.POTION_OPEN_BOTTLE}
            autoPlay
            loop={false}
            style={LottieAbsoluteStyles(-15)}
          />
        );
      default:
        return (
          <Lottie
            onAnimationFinish={onAnimationFinish}
            source={pourAnimation}
            autoPlay
            loop={false}
            style={LottieAbsoluteStyles(-15)}
          />
        );
    }
  }, [onAnimationFinish, phase, pourAnimation]);

  const appStatus = useAppState();

  useEffect(() => {
    if (appStatus !== 'active') {
      AudioPlayerHelper.stop();
    }
  }, [appStatus]);

  return (
    <ImageBackground
      source={BACKGROUND_IMAGES.ALTERNATIVE_GARDEN}
      style={generalStyles.flex}>
      <SafeAreaView style={styles.container}>
        {animation}
        <ExtendedText preset="title" style={styles.title}>
          {title && t(title)}
        </ExtendedText>
      </SafeAreaView>
    </ImageBackground>
  );
};
