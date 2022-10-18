import React, { useMemo } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';

import { ExtendedText } from '../ExtendedText';
import {
  ExtendedTextInputPresetProps,
  ExtendedTextInputType,
} from './ExtendedTextInput.data';
import { IExtendedTextInputProps } from './ExtendedTextInput.types';
import { TextInputPasswordToggle } from './inputs';
import { styles } from './ExtendedTextInput.styles';
import { COLORS } from '../../themes/colors';

export const ExtendedTextInput: React.FC<IExtendedTextInputProps> = ({
  label,
  labelStyle,
  type = ExtendedTextInputType.Default,
  error,
  errorStyle,
  style,
  ...rest
}) => {
  const initialInputProps = useMemo(
    () => ExtendedTextInputPresetProps[type],
    [type],
  );

  const InputComponent: React.ComponentType<TextInputProps> = useMemo(() => {
    switch (type) {
      case ExtendedTextInputType.Default:
      case ExtendedTextInputType.Email:
      case ExtendedTextInputType.Numeric:
      case ExtendedTextInputType.Password:
        return TextInput;
      case ExtendedTextInputType.PasswordToggle:
        return TextInputPasswordToggle;
    }
  }, [type]);

  return (
    <View>
      {label && (
        <ExtendedText style={[styles.label, labelStyle]}>{label}</ExtendedText>
      )}
      <InputComponent
        {...initialInputProps}
        {...rest}
        style={[styles.input, style]}
        selectionColor={COLORS.PRIMARY_ORANGE}
      />
      {error && (
        <ExtendedText style={[styles.error, errorStyle]}>{error}</ExtendedText>
      )}
    </View>
  );
};
