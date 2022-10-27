import React from 'react';
import { View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { IEmotionCarouselItemProps } from './EmotionCarouselItem.types';
import { styles } from './EmotionCarouselItem.styles';
import { ExtendedText } from '../../../ExtendedText';
import { generalStyles } from '../../../../utils/styles';
import { EMOTIONS_CAROUSEL_SVG } from '../../../../assets/svg';

export const EmotionCarouselItem: React.FC<IEmotionCarouselItemProps> = ({
  data,
  isActive,
  style,
}) => {
  const progressValue = useDerivedValue(() => {
    return isActive
      ? withTiming(1, { duration: 250 })
      : withTiming(0, { duration: 500 });
  }, [isActive]);

  const opacityContainer = useAnimatedStyle(() => {
    const opacity = interpolate(progressValue.value, [0, 1], [0.5, 1]);

    return {
      opacity,
    };
  });

  const Icon = EMOTIONS_CAROUSEL_SVG[data.iconKey];

  return (
    <GestureHandlerRootView style={generalStyles.flex}>
      <View style={[styles.container, style]}>
        <Animated.View style={[styles.contentContainer, opacityContainer]}>
          <Icon />
          <ExtendedText style={styles.title} preset="title">
            {data.title}
          </ExtendedText>
        </Animated.View>
      </View>
    </GestureHandlerRootView>
  );
};
