import React from 'react';
import { Image, TextInput, View } from 'react-native';

import { IMAGES } from '../../assets';
import { IMultilineTextInputProps } from './MultilineTextInput.types';
import { styles } from './MultilineTextInput.styles';
import { COLORS } from '../../themes/colors';

export const MultilineTextInput: React.FC<IMultilineTextInputProps> = ({
  style,
  placeholder,
  ...rest
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[style, styles.input]}
        multiline={true}
        placeholderTextColor={COLORS.BRILLIANT_WHITE}
        placeholder={placeholder}
        returnKeyType="send"
        {...rest}
      />
      <View style={styles.imageContainer}>
        <Image source={IMAGES.WHITE_PENCIL} />
      </View>
    </View>
  );
};
