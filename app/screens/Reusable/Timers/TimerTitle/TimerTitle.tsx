import React from 'react';
import { ImageBackground, SafeAreaView, View } from 'react-native';

import { ExtendedText, Timer } from '../../../../components';
import { ITimerTitleScreenProps } from './TimerTitle.types';
import { styles } from './TimerTitle.styles';
import { generalStyles } from '../../../../utils/styles';
import { IMAGES } from '../../../../assets';
import { useNavigateNextQuest } from '../../../../hooks';

export const TimerTitleScreen: React.FC<ITimerTitleScreenProps> = ({
  route,
}) => {
  const onSubmit = useNavigateNextQuest();

  const { backgroundImage, duration, title } = route.params.data;

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
        <View style={styles.container}>
          <Timer
            duration={duration ?? 10}
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
