import React from 'react';

import { IOnlyImageProps } from './OnlyImage.types';
import { styles } from './OnlyImage.styles';
import { SVG_DANCING_CHARM } from '../../../../assets/svg';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

export const OnlyImage: React.FC<IOnlyImageProps> = ({
  data,
  style,
  isActive,
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

  const Icon = SVG_DANCING_CHARM[data.iconKey];

  return (
    <Animated.View style={[styles.container, style, opacityContainer]}>
      <Icon width={247} height={247} />
    </Animated.View>
  );
};
