import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

import { styles } from './Avatar.styles';
import { generalStyles } from '../../../../utils/styles';
import { AVATARS_SVG } from '../../../../assets/svg';
import { AvatarsNameType } from '../../../../utils/types';
import { ICarouselItemProps } from '../../Carousel.types';

export const Avatar: React.FC<ICarouselItemProps> = ({
  data,
  isActive,
  style,
}) => {
  const Icon = AVATARS_SVG[data.image as AvatarsNameType];

  const progressValue = useDerivedValue(() => {
    return isActive
      ? withTiming(1, { duration: 250 })
      : withTiming(0, { duration: 500 });
  }, [isActive]);

  const avatarStyles = useAnimatedStyle(() => {
    const opacity = interpolate(progressValue.value, [0, 1], [0.5, 1]);

    return {
      opacity,
    };
  });

  return (
    <GestureHandlerRootView style={[generalStyles.flex]}>
      <Animated.View style={[styles.container, style, avatarStyles]}>
        <Icon />
      </Animated.View>
    </GestureHandlerRootView>
  );
};
