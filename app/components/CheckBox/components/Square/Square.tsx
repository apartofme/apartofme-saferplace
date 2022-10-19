import React from 'react';
import { Image, View } from 'react-native';

import { IMAGES } from '../../../../assets';
import { styles } from './Square.styles';
import { ISquareProps } from './Square.types';

export const Square: React.FC<ISquareProps> = ({ isActive }) => {
  return (
    <View style={[styles.container, isActive && styles.activeBackground]}>
      {isActive && <Image source={IMAGES.CHECK_MARK} />}
    </View>
  );
};
