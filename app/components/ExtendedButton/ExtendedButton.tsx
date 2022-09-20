import React, { useCallback, useMemo } from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';

import { trackButtonPress } from '../../services/firebase';
import { ExtendedText } from '../ExtendedText';
import presets, { additionalStyles } from './ExtendedButton.presets';
import { IExtendedButtonProps } from './ExtendedButton.types';

export const ExtendedButton: React.FC<IExtendedButtonProps> = ({
  title,
  titleStyle,
  style,
  preset = 'default',
  disabled,
  onPress,
  ...rest
}) => {
  const styles = useMemo(
    () => [
      presets[preset],
      disabled && additionalStyles[`${preset}Disabled`],
      style,
    ],
    [preset, disabled, style],
  );

  const titleStyles = useMemo(
    () => [
      additionalStyles[`${preset}Title`],
      disabled && additionalStyles[`${preset}DisabledTitle`],
      titleStyle,
    ],
    [preset, disabled, titleStyle],
  );

  const onButtonPress = useCallback(
    (event: GestureResponderEvent) => {
      trackButtonPress(title);
      onPress?.(event);
    },
    [onPress, title],
  );

  return (
    <TouchableOpacity
      {...rest}
      style={styles}
      disabled={disabled}
      onPress={onButtonPress}>
      <ExtendedText style={titleStyles}>{title}</ExtendedText>
    </TouchableOpacity>
  );
};
