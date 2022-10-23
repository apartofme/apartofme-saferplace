import React from 'react';
import { View } from 'react-native';

import { SVG } from '../../../../assets/svg';
import { styles } from './Square.styles';
import { ISquareProps } from './Square.types';

export const Square: React.FC<ISquareProps> = ({ isActive }) => {
  const Icon = SVG.PurpleCheckMarkIcon;
  return (
    <View style={[styles.container, isActive && styles.activeBackground]}>
      {isActive && <Icon />}
    </View>
  );
};
