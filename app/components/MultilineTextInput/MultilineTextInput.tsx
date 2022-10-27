import React, { useCallback, useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  View,
} from 'react-native';

import { IMultilineTextInputProps } from './MultilineTextInput.types';
import { styles } from './MultilineTextInput.styles';
import { COLORS } from '../../themes/colors';
import { SVG } from '../../assets/svg';

const WhitePencil = SVG.WhitePencilIcon;

export const MultilineTextInput: React.FC<IMultilineTextInputProps> = ({
  style,
  placeholder,
  onFocus: onFocusCallback,
  onBlur: onBlurCallback,
  ...rest
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const onFocus = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsFocus(true);
      onFocusCallback?.(e);
    },
    [onFocusCallback],
  );

  const onBlur = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsFocus(false);
      onBlurCallback?.(e);
    },
    [onBlurCallback],
  );
  return (
    <View
      style={[styles.inputContainer, isFocus && styles.inputActiveContainer]}>
      <TextInput
        style={[style, styles.input]}
        multiline={true}
        placeholderTextColor={COLORS.BRILLIANT_WHITE}
        placeholder={placeholder}
        selectionColor={COLORS.PRIMARY_ORANGE}
        returnKeyType="send"
        onFocus={onFocus}
        onBlur={onBlur}
        {...rest}
      />
      <View style={styles.imageContainer}>
        <WhitePencil />
      </View>
    </View>
  );
};
