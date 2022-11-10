import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useMemo } from 'react';
import { ImageBackground, SafeAreaView, View } from 'react-native';
import Lottie from 'lottie-react-native';
import { useTranslation } from 'react-i18next';

import { ExtendedText } from '../../../components';
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
import { AudioPlayerHelper } from '../../../services/helpers/AudioPlayerHelper';
import { AUDIO } from '../../../constants/audio';
import { ELIXIR_ANIMATION_TYPE } from '../../../constants/elixir';
import { LottieAbsoluteStyles } from '../../../utils';
import { ANIMATIONS } from '../../../assets/animations';

export const AnimationTitleScreen: React.FC<IAnimationTitleScreenProps> = ({
  route,
}) => {
  const { description, title } = route.params.data;

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
      }
    }
    return AUDIO.OPENING_CHARMS_BOOK;
  }, [description]);

  useMount(() => {
    if (description === ELIXIR_ANIMATION_TYPE.Pour) {
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
          return (
            <Lottie
              onAnimationFinish={onSubmit}
              source={ANIMATIONS.POTION_MIX}
              autoPlay
              loop={false}
              style={LottieAbsoluteStyles(-15)}
            />
          );
        case ELIXIR_ANIMATION_TYPE.Open:
          return (
            <Lottie
              onAnimationFinish={onSubmit}
              source={ANIMATIONS.POTION_OPEN_BOTTLE}
              autoPlay
              loop={false}
              style={LottieAbsoluteStyles(-15)}
            />
          );
        default:
          return (
            <Lottie
              onAnimationFinish={onSubmit}
              source={ANIMATIONS.POTION_OPEN_BOTTLE}
              progress={1}
              loop={false}
              style={LottieAbsoluteStyles(-15)}
            />
          );
      }
    }
    return (
      <Lottie
        onAnimationFinish={onSubmit}
        source={ANIMATIONS.FINDING_RIGHT_CHARM}
        autoPlay
        loop={false}
        style={LottieAbsoluteStyles(-30)}
      />
    );
  }, [description, onSubmit]);

  return (
    <ImageBackground
      source={BACKGROUND_IMAGES.ALTERNATIVE_GARDEN}
      style={generalStyles.flex}>
      {description === ELIXIR_ANIMATION_TYPE.Pour && (
        <View style={styles.waitContainer}>
          <ExtendedText
            preset="large-title"
            style={[generalStyles.boldText, generalStyles.brilliantWhite]}>
            {t('labels.wait')}
          </ExtendedText>
        </View>
      )}
      <SafeAreaView style={styles.container}>
        {animation}
        <ExtendedText
          preset={description ? 'title' : 'large-title'}
          style={styles.title}>
          {title && t(title)}
        </ExtendedText>
      </SafeAreaView>
    </ImageBackground>
  );
};
