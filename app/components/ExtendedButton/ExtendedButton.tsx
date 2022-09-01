import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';

import { ExtendedText } from '../ExtendedText';
import presets, { additionalStyles } from './ExtendedButton.presets';
import { IExtendedButtonProps } from './ExtendedButton.props';

export const ExtendedButton: React.FC<IExtendedButtonProps> = ({
  title,
  titleStyle,
  style,
  preset = 'default',
  disabled,
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

  return (
    <TouchableOpacity {...rest} style={styles} disabled={disabled}>
      <ExtendedText style={titleStyles}>{title}</ExtendedText>
    </TouchableOpacity>
  );
};
