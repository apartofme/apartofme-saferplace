import React, { useEffect, useMemo } from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { values } from 'lodash';

import { IElixirAnimationScreenProps } from './ElixirAnimation.types';
import { styles } from './ElixirAnimation.styles';
import { ExtendedText } from '../../../components';
import { BACKGROUND_IMAGES } from '../../../assets';
import { MixingElixirPhaseType } from '../../../utils/types';
import { generalStyles } from '../../../utils/styles';
import { ElixirThreeIcon } from '../../../assets/svg/garden';
import { AudioPlayerHelper } from '../../../services/helpers/AudioPlayerHelper';
import { AUDIO } from '../../../constants/audio';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import {
  DAY_13_CLOSING_DIALOGUE_ID,
  THE_CHARM_OF_BEFRIENDING_ID,
} from '../../../constants/quest';
import { questSlice } from '../../../redux/slices';

export const ElixirAnimationScreen: React.FC<IElixirAnimationScreenProps> = ({
  navigation,
  route,
}) => {
  const { phase, selectedPlantArea, isFirstTimeGarden } = route.params;
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const currentQuestLine = useAppSelector(
    state => state.quest.currentQuestLine,
  );
  const currentLanguage = useAppSelector(
    state => state.settings.settings.language ?? 'en',
  );
  const allQuests = useAppSelector(
    state => state.quest.allQuests?.[currentLanguage],
  );

  const title = useMemo(() => {
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
  }, [phase]);

  const animation = useMemo(() => {
    switch (phase) {
      case MixingElixirPhaseType.Mix:
        return <ElixirThreeIcon />;
      case MixingElixirPhaseType.Open:
        return <ElixirThreeIcon />;
      default:
        return <ElixirThreeIcon />;
    }
  }, [phase]);

  useEffect(() => {
    setTimeout(() => {
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
        const newQuests = values(allQuests?.[newQuestLineId].quests);

        dispatch(
          questSlice.actions.saveCurrentQuestLine({
            id: newQuests[0].questLineId,
            quests: newQuests,
          }),
        );

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
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  return (
    <ImageBackground
      source={BACKGROUND_IMAGES.ALTERNATIVE_GARDEN_BACKGROUND}
      style={generalStyles.flex}>
      <SafeAreaView style={styles.container}>
        {animation}
        <ExtendedText
          preset="title"
          style={[generalStyles.brilliantWhiteCenter, styles.title]}>
          {t(title)}
        </ExtendedText>
      </SafeAreaView>
    </ImageBackground>
  );
};
