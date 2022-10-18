import React from 'react';
import { TouchableOpacity } from 'react-native';

import { ExtendedText } from '../ExtendedText';
import { ICheckBoxProps } from './CheckBox.types';
import { styles } from './CheckBox.styles';
import { Square } from './components';

export const CheckBox: React.FC<ICheckBoxProps> = ({
  title,
  isActive = false,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, isActive && styles.activeBackground]}
      onPress={onPress}>
      <ExtendedText style={styles.title}>{title}</ExtendedText>
      <Square isActive={isActive} />
    </TouchableOpacity>
  );
};
