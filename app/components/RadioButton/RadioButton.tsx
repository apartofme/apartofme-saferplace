import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { ExtendedText } from '../ExtendedText';
import { IRadioButtonProps } from './RadioButton.types';
import { styles } from './RadioButton.styles';

export const RadioButton: React.FC<IRadioButtonProps> = ({
  title,
  isActive = false,
  onPress,
  style,
  imageSource,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, isActive && styles.activeBackground, style]}
      onPress={onPress}>
      <ExtendedText style={[styles.title, isActive && styles.activeTitle]}>
        {title}
      </ExtendedText>
      {imageSource && <Image source={imageSource} />}
    </TouchableOpacity>
  );
};
