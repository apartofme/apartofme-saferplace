import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useMemo } from 'react';
import { ImageBackground, SafeAreaView, View } from 'react-native';

import { ExtendedText, Timer } from '../../../components';
import { IAnimationTitleScreenProps } from './AnimationTitle.types';
import { styles } from './AnimationTitle.styles';
import { generalStyles } from '../../../utils/styles';
import { BACKGROUND_IMAGES } from '../../../assets';
import {
  useAppSelector,
  useAppState,
  useMount,
  useNavigateNextQuest,
} from '../../../hooks';
import { ElixirThreeIcon } from '../../../assets/svg/garden';
import { AudioPlayerHelper } from '../../../services/helpers/AudioPlayerHelper';
import { AUDIO } from '../../../constants/audio';
import { ELIXIR_ANIMATION_TYPE } from '../../../constants/elixir';
import { useTranslation } from 'react-i18next';

export const AnimationTitleScreen: React.FC<IAnimationTitleScreenProps> = ({
  route,
}) => {
  const { description, duration, title } = route.params.data;

  const isFocused = useIsFocused();
  const { t } = useTranslation();
  const onSubmit = useNavigateNextQuest();

  const isSoundFXEnabled = useAppSelector(
    state => state.settings.settings.audioSettings?.isSoundFXEnabled,
  );

  useEffect(() => {
    if (!isFocused) {
      AudioPlayerHelper.stop();
    }
  }, [isFocused]);

  const audio = useMemo(() => {
    if (description) {
      switch (description) {
        case ELIXIR_ANIMATION_TYPE.Mix:
          return AUDIO.MIXING_ELIXIR_ANIMATION;

        case ELIXIR_ANIMATION_TYPE.Open:
          return AUDIO.OPENING_ELIXIR_ANIMATION;

        default:
          return AUDIO.POURING_ELIXIR_ANIMATION;
      }
    }
  }, [description]);

  useMount(() => {
    if (description) {
      setTimeout(() => onSubmit(), 3000);
    }

    if (audio && isSoundFXEnabled) {
      AudioPlayerHelper.play(audio);
    }
  });

  const appStatus = useAppState();

  useEffect(() => {
    if (appStatus !== 'active') {
      AudioPlayerHelper.stop();
    }
  }, [appStatus]);

  const animation = useMemo(() => {
    if (description) {
      switch (description) {
        case ELIXIR_ANIMATION_TYPE.Mix:
          return <ElixirThreeIcon />;
        case ELIXIR_ANIMATION_TYPE.Open:
          return <ElixirThreeIcon />;
        default:
          return <ElixirThreeIcon />;
      }
    }

    return (
      <Timer
        duration={duration ?? 5}
        isStart={true}
        onAnimationComplete={onSubmit}
      />
    );
  }, [description, duration, onSubmit]);

  return (
    <ImageBackground
      source={BACKGROUND_IMAGES.ALTERNATIVE_GARDEN}
      style={generalStyles.flex}>
      {description === ELIXIR_ANIMATION_TYPE.Pour ? (
        <View style={styles.elixirContainer}>
          {animation}
          <ExtendedText style={styles.title}>
            {t('labels.wait').toUpperCase()}
          </ExtendedText>
        </View>
      ) : (
        <SafeAreaView style={generalStyles.flex}>
          <View
            style={[styles.container, !!description && styles.elixirContainer]}>
            {animation}
            <ExtendedText preset="large-title" style={styles.title}>
              {title}
            </ExtendedText>
          </View>
        </SafeAreaView>
      )}
    </ImageBackground>
  );
};
