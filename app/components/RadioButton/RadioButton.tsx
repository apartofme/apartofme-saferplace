import React from 'react';
import { TouchableOpacity } from 'react-native';

import { ExtendedText } from '../ExtendedText';
import { IRadioButtonProps } from './RadioButton.props';
import { styles } from './RadioButton.styles';

export const RadioButton: React.FC<IRadioButtonProps> = ({
  title,
  isActive = false,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, isActive && styles.activeBackground]}
      onPress={onPress}>
      <ExtendedText style={[styles.title, isActive && styles.activeTitle]}>
        {title}
      </ExtendedText>
    </TouchableOpacity>
  );
};
