import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  View,
} from 'react-native';
import { useTranslation } from 'react-i18next';

import { ExtendedText } from '../ExtendedText';
import {
  ExtendedTextInputPresetProps,
  ExtendedTextInputType,
} from './ExtendedTextInput.data';
import { IExtendedTextInputProps } from './ExtendedTextInput.types';
import { TextInputPasswordToggle } from './inputs';
import { styles } from './ExtendedTextInput.styles';
import { COLORS } from '../../themes/colors';
import { SVG } from '../../assets/svg';

const CircleExclamationMarkIcon = SVG.CircleExclamationMarkIcon;

export const ExtendedTextInput: React.FC<IExtendedTextInputProps> = ({
  label,
  labelStyle,
  type = ExtendedTextInputType.Default,
  error,
  errorStyle,
  style,
  setIsActive,
  onFocus: onFocusCallback,
  onBlur: onBlurCallback,
  ...rest
}) => {
  const initialInputProps = useMemo(
    () => ExtendedTextInputPresetProps[type],
    [type],
  );

  const { t } = useTranslation();

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

  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    if (setIsActive) {
      setIsActive(isFocus);
    }
    // intentionally
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocus]);

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
    <View>
      {!!label && (
        <ExtendedText style={[styles.label, labelStyle]}>{label}</ExtendedText>
      )}
      <InputComponent
        {...initialInputProps}
        {...rest}
        style={[
          styles.input,
          style,
          isFocus && styles.inputActive,
          !!error && styles.inputError,
        ]}
        selectionColor={COLORS.PRIMARY_ORANGE}
        onFocus={onFocus}
        onBlur={onBlur}
        allowFontScaling={false}
      />
      {!!error && (
        <View style={styles.errorContainer}>
          <CircleExclamationMarkIcon />
          <ExtendedText
            style={[styles.error, errorStyle]}
            preset="tertiary-text-regular">
            {t(error)}
          </ExtendedText>
        </View>
      )}
    </View>
  );
};
