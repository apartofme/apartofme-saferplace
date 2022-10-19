import React from 'react';
import { View } from 'react-native';

import { styles } from './Circle.styles';
import { ICircleProps } from './Circle.types';

export const Circle: React.FC<ICircleProps> = ({ isActive }) => {
  return (
    <View style={styles.container}>
      {isActive && <View style={styles.circle} />}
    </View>
  );
};
