import React from 'react';
import { TouchableOpacity } from 'react-native';

import { ExtendedText } from '../ExtendedText';
import { IRadioButtonProps } from './RadioButton.types';
import { styles } from './RadioButton.styles';
import { Circle } from './components';

export const RadioButton: React.FC<IRadioButtonProps> = ({
  title,
  isActive = false,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, isActive && styles.activeBackground]}
      onPress={onPress}>
      <ExtendedText style={styles.title}>{title}</ExtendedText>
      <Circle isActive={isActive} />
    </TouchableOpacity>
  );
};
