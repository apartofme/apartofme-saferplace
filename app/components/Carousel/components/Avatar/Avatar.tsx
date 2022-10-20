import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import { IAvatarProps } from './Avatar.types';
import { styles } from './Avatar.styles';
import { AVATARS_SVG } from '../../../../assets/svg';
import { generalStyles } from '../../../../utils/styles';
import { AvatarsNameType } from '../../../../utils/types';

export const Avatar: React.FC<IAvatarProps> = ({ data, isActive, style }) => {
  const Icon = AVATARS_SVG[data.image as AvatarsNameType];

  return (
    <GestureHandlerRootView
      style={[generalStyles.flex, !isActive && styles.disabled]}>
      <Animated.View style={[styles.container, style]}>
        <Icon />
      </Animated.View>
    </GestureHandlerRootView>
  );
};
