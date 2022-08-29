import React from 'react';
import { View } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { DOT_WIDTH } from './PogressBarItem.data';
import { IPogressBarItemProps } from './PogressBarItem.props';
import { styles } from './PogressBarItem.styles';

export const PogressBarItem: React.FC<IPogressBarItemProps> = ({
  animValue,
  index,
  length,
}) => {
  const animationStyle = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [-DOT_WIDTH, 0, DOT_WIDTH];

    if (index === 0 && animValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
      outputRange = [-DOT_WIDTH, 0, DOT_WIDTH];
    }

    return {
      transform: [
        {
          translateX: interpolate(
            animValue?.value,
            inputRange,
            outputRange,
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  }, [animValue, index, length]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.contentContainer, animationStyle]} />
    </View>
  );
};
