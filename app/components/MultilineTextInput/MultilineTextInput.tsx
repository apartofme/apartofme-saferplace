import React from 'react';
import { Image, TextInput, View } from 'react-native';

import { IMAGES } from '../../assets';
import { IMultilineTextInputProps } from './MultilineTextInput.props';
import { styles } from './MultilineTextInput.styles';

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
