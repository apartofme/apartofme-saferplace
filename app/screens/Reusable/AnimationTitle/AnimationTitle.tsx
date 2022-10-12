import React from 'react';
import { ImageBackground, SafeAreaView, View } from 'react-native';

import { ExtendedText, Timer } from '../../../components';
import { IAnimationTitleScreenProps } from './AnimationTitle.types';
import { styles } from './AnimationTitle.styles';
import { generalStyles } from '../../../utils/styles';
import { IMAGES } from '../../../assets';
import { useNavigateNextQuest, useRenderQuestHeader } from '../../../hooks';

export const AnimationTitleScreen: React.FC<IAnimationTitleScreenProps> = ({
  route,
}) => {
  const {
    crossHeader,
    backgroundImage,
    duration,
    title,
    escapeMenuAlternativeNavigateTo,
  } = route.params.data;
  const onSubmit = useNavigateNextQuest();

  // TODO: remove
  const Header = useRenderQuestHeader({
    crossHeader: crossHeader ?? false,
    escapeMenuAlternativeNavigateTo,
  });

  return (
    <ImageBackground
      // TODO: change to real default image
      source={
        (backgroundImage && IMAGES[backgroundImage]) ?? {
          uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
        }
      }
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        {/* // TODO: remove */}
        <Header />
        {/* // TODO: change to real animation */}
        <View style={styles.container}>
          <Timer
            duration={duration ?? 5}
            isStart={true}
            onAnimationComplete={onSubmit}
          />
          <ExtendedText preset="large-title" style={styles.title}>
            {title}
          </ExtendedText>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
