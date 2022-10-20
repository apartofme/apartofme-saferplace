import React from 'react';
import { TextInput, View } from 'react-native';

import { IMultilineTextInputProps } from './MultilineTextInput.types';
import { styles } from './MultilineTextInput.styles';
import { COLORS } from '../../themes/colors';
import { SVG_ICONS } from '../../assets/svg';

export const MultilineTextInput: React.FC<IMultilineTextInputProps> = ({
  style,
  placeholder,
  ...rest
}) => {
  const WhitePencil = SVG_ICONS.whitePencilIcon;
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
        <WhitePencil />
      </View>
    </View>
  );
};
