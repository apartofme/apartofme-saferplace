import React, { useMemo } from 'react';
import { ImageBackground, SafeAreaView, View } from 'react-native';

import { ExtendedText, Timer } from '../../../components';
import { IAnimationTitleScreenProps } from './AnimationTitle.types';
import { styles } from './AnimationTitle.styles';
import { generalStyles } from '../../../utils/styles';
import { BACKGROUND_IMAGES } from '../../../assets';
import { useMount, useNavigateNextQuest } from '../../../hooks';
import { ElixirThreeIcon } from '../../../assets/svg/garden';
import { AudioPlayerHelper } from '../../../services/helpers/AudioPlayerHelper';
import { AUDIO } from '../../../constants/audio';
import { ELIXIR_ANIMATION_TYPE } from '../../../constants/elixir';

export const AnimationTitleScreen: React.FC<IAnimationTitleScreenProps> = ({
  route,
}) => {
  const { description, duration, title } = route.params.data;

  const onSubmit = useNavigateNextQuest();

  useMount(() => {
    if (description) {
      setTimeout(() => onSubmit(), 3000);
    }
  });

  const animation = useMemo(() => {
    if (description) {
      switch (description) {
        case ELIXIR_ANIMATION_TYPE.Mix:
          AudioPlayerHelper.play(AUDIO.MIXING_ELIXIR_ANIMATION);
          return <ElixirThreeIcon />;
        case ELIXIR_ANIMATION_TYPE.Open:
          AudioPlayerHelper.play(AUDIO.OPENING_ELIXIR_ANIMATION);
          return <ElixirThreeIcon />;
        default:
          AudioPlayerHelper.play(AUDIO.POURING_ELIXIR_ANIMATION);
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
      source={BACKGROUND_IMAGES.ALTERNATIVE_GARDEN_BACKGROUND}
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <View
          style={[styles.container, !!description && styles.elixirContainer]}>
          {animation}
          <ExtendedText preset="large-title" style={styles.title}>
            {title}
          </ExtendedText>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
