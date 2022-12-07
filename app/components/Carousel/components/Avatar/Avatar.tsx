import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { styles } from './Avatar.styles';
import { generalStyles } from '../../../../utils/styles';
import { AVATARS_SVG } from '../../../../assets/svg';
import { IAvatarItem, ICarouselItemProps } from '../../Carousel.types';
import { OPACITY_RANGE } from '../../Carousel.data';

export const Avatar: React.FC<ICarouselItemProps<IAvatarItem>> = ({
  data,
  animValue,
  index,
  style,
}) => {
  const Icon = AVATARS_SVG[data.iconKey];

  const animationStyle = useAnimatedStyle(() => {
    const inputRange = [index - 1, index, index + 1];

    const opacity = interpolate(
      animValue.value,
      inputRange,
      OPACITY_RANGE,
      Extrapolate.CLAMP,
    );

    return {
      opacity,
    };
  }, [animValue, index]);

  return (
    <GestureHandlerRootView style={[generalStyles.flex]}>
      <Animated.View style={[styles.container, style, animationStyle]}>
        {!!Icon && <Icon />}
      </Animated.View>
    </GestureHandlerRootView>
  );
};
