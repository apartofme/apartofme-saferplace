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

import { IEmotionCarouselItemProps } from './EmotionCarouselItem.types';
import { styles } from './EmotionCarouselItem.styles';
import { ExtendedText } from '../../../ExtendedText';
import { generalStyles } from '../../../../utils/styles';
import { CAROUSEL_COLORS } from './EmotionCarouselItem.colors';

export const EmotionCarouselItem: React.FC<IEmotionCarouselItemProps> = ({
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
      [CAROUSEL_COLORS.INACTIVE, CAROUSEL_COLORS.ACTIVE],
    );
    return {
      backgroundColor,
    };
  });

  return (
    <GestureHandlerRootView style={generalStyles.flex}>
      <View style={styles.container}>
        <Animated.View style={[styles.contentContainer, backgroundColorStyles]}>
          <ExtendedText style={styles.title}>{t(data.titleKey)}</ExtendedText>
        </Animated.View>
      </View>
    </GestureHandlerRootView>
  );
};
