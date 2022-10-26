import React, { useMemo } from 'react';
import { ImageBackground, SafeAreaView, View } from 'react-native';

import { ExtendedText, Timer } from '../../../components';
import { IAnimationTitleScreenProps } from './AnimationTitle.types';
import { styles } from './AnimationTitle.styles';
import { generalStyles } from '../../../utils/styles';
import { BACKGROUND_IMAGES } from '../../../assets';
import { useNavigateNextQuest } from '../../../hooks';
import { ElixirThreeIcon } from '../../../assets/svg/garden';

export const AnimationTitleScreen: React.FC<IAnimationTitleScreenProps> = ({
  route,
}) => {
  const { description, duration, title } = route.params.data;
  const onSubmit = useNavigateNextQuest();

  const animation = useMemo(() => {
    if (description) {
      // TODO: add swich for elixir animation
      return <ElixirThreeIcon />;
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
