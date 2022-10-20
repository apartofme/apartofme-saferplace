import React from 'react';
import { Image } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import { IAvatarProps } from './Avatar.types';
import { styles } from './Avatar.styles';
import { AVATAR_IMAGES } from '../../../../assets';
import { generalStyles } from '../../../../utils/styles';
import { AvatarsNameType } from '../../../../utils/types';

export const Avatar: React.FC<IAvatarProps> = ({ data, isActive, style }) => {
  return (
    <GestureHandlerRootView
      style={[generalStyles.flex, !isActive && styles.disabled]}>
      <Animated.View style={[styles.container, style]}>
        {data.image && (
          <Image source={AVATAR_IMAGES[data.image as AvatarsNameType]} />
        )}
      </Animated.View>
    </GestureHandlerRootView>
  );
};
