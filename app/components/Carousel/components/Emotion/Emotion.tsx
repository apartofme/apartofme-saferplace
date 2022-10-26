import React from 'react';
import { View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { styles } from './Emotion.styles';
import { ExtendedText } from '../../../ExtendedText';
import { generalStyles } from '../../../../utils/styles';
import { ICarouselItemProps } from '../../Carousel.types';
import { EmotionsCarouselSvgKeys } from '../../../../utils/types';
import { EMOTIONS_CAROUSEL_SVG } from '../../../../assets/svg';

export const Emotion: React.FC<ICarouselItemProps> = ({
  data,
  isActive,
  style,
}) => {
  const progressValue = useDerivedValue(() => {
    return isActive
      ? withTiming(1, { duration: 250 })
      : withTiming(0, { duration: 500 });
  }, [isActive]);

  const itemStyles = useAnimatedStyle(() => {
    const borderWidth = interpolate(progressValue.value, [0, 1], [1, 2]);

    const opacity = interpolate(progressValue.value, [0, 1], [0.5, 1]);

    return {
      borderWidth,
      opacity,
    };
  });

  const Icon = EMOTIONS_CAROUSEL_SVG[data.image as EmotionsCarouselSvgKeys];

  return (
    <GestureHandlerRootView style={generalStyles.flex}>
      <View style={[styles.container, style]}>
        <Animated.View style={[styles.contentContainer, itemStyles]}>
          {data.image && <Icon width={96} height={96} />}
          <ExtendedText style={styles.title}>{data.titleKey}</ExtendedText>
        </Animated.View>
      </View>
    </GestureHandlerRootView>
  );
};
