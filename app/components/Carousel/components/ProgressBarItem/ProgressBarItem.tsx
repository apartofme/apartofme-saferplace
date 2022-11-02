import React from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { DOT_WIDTH } from './ProgressBarItem.data';
import { IProgressBarItemProps } from './ProgressBarItem.types';
import { styles } from './ProgressBarItem.styles';

export const ProgressBarItem: React.FC<IProgressBarItemProps> = ({
  animValue,
  index,
  length,
}) => {
  // This function provides transition animation of point progress across all points
  const animationStyle = useAnimatedStyle(() => {
    const inputRange = [index - 1, index, index + 1];
    const outputRange = [-DOT_WIDTH, 0, DOT_WIDTH];

    const translateX = interpolate(
      animValue.value,
      inputRange,
      outputRange,
      Extrapolate.CLAMP,
    );

    return {
      transform: [
        {
          translateX,
        },
      ],
    };
  }, [animValue, index, length]);

  const animationContainerStyle = useAnimatedStyle(() => {
    const inputRange = [index - 1, index, index + 1];
    const outputRange = [1, 0, 1];

    const borderWidth = interpolate(
      animValue.value,
      inputRange,
      outputRange,
      Extrapolate.CLAMP,
    );
    return {
      borderWidth,
    };
  });

  return (
    <Animated.View style={[styles.container, animationContainerStyle]}>
      <Animated.View style={[styles.contentContainer, animationStyle]} />
    </Animated.View>
  );
};
