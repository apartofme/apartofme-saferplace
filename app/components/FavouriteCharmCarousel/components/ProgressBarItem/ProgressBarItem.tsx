import React, { useMemo } from 'react';
import { View } from 'react-native';
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
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [-DOT_WIDTH, 0, DOT_WIDTH];

    if (index === 0 && animValue > length - 1) {
      inputRange = [length - 1, length, length + 1];
      outputRange = [-DOT_WIDTH, 0, DOT_WIDTH];
    }

    return {
      transform: [
        {
          translateX: interpolate(
            animValue,
            inputRange,
            outputRange,
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  }, [animValue, index, length]);

  const isActive = useMemo(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [-DOT_WIDTH, 0, DOT_WIDTH];

    if (index === 0 && animValue > length - 1) {
      inputRange = [length - 1, length, length + 1];
      outputRange = [-DOT_WIDTH, 0, DOT_WIDTH];
    }
    const interpolateValue = interpolate(
      animValue,
      inputRange,
      outputRange,
      Extrapolate.CLAMP,
    );

    return (
      interpolateValue >= -DOT_WIDTH / 2 && interpolateValue <= DOT_WIDTH / 2
    );
  }, [animValue, index, length]);

  return (
    <View style={[styles.container, isActive && styles.active]}>
      <Animated.View style={[styles.contentContainer, animationStyle]} />
    </View>
  );
};
