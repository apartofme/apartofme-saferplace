import React from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { IOnlyImageProps } from './OnlyImage.types';
import { styles } from './OnlyImage.styles';
import { SVG_DANCING_CHARM } from '../../../../assets/svg';
import { OPACITY_RANGE } from '../../../Carousel';

export const OnlyImage: React.FC<IOnlyImageProps> = ({
  data,
  style,
  animValue,
  index,
}) => {
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

  const Icon = SVG_DANCING_CHARM[data.iconKey];

  return (
    <Animated.View style={[styles.container, style, animationStyle]}>
      <Icon width={247} height={247} />
    </Animated.View>
  );
};
