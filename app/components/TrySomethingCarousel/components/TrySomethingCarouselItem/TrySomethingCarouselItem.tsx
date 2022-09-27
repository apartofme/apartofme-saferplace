import React from 'react';
import { View } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';

import { IOnlyImageProps } from './TrySomethingCarouselItem.types';
import { styles } from './TrySomethingCarouselItem.styles';
import { ExtendedText } from '../../../ExtendedText';
import { generalStyles } from '../../../../utils/styles';

export const TrySomethingCarouselItem: React.FC<IOnlyImageProps> = ({
  data,
  isActive,
}) => {
  const { t } = useTranslation();
  // TODO: change to correct duration
  const progressValue = useDerivedValue(() => {
    return isActive
      ? withTiming(1, { duration: 500 })
      : withTiming(0, { duration: 1000 });
  }, [isActive]);

  // TODO: change to correct styles
  const backgroundColorStyles = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progressValue.value,
      [0, 1],
      ['rgba(188, 53, 203, 0.30)', 'rgba(188, 53, 203, 0.80)'],
    );
    return {
      backgroundColor,
    };
  });

  return (
    <GestureHandlerRootView style={generalStyles.flex}>
      <View style={styles.container}>
        <Animated.View style={[styles.contentContainer, backgroundColorStyles]}>
          <ExtendedText style={styles.title}>{t(data.title)}</ExtendedText>
          <ExtendedText>{t(data.subtitle)}</ExtendedText>
        </Animated.View>
      </View>
    </GestureHandlerRootView>
  );
};
