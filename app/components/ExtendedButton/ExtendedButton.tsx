import React, { useCallback, useMemo } from 'react';
import { GestureResponderEvent, Image, TouchableOpacity } from 'react-native';

import { IMAGES } from '../../assets';
import { trackButtonPress } from '../../services/firebase';
import { ExtendedText } from '../ExtendedText';
import presets, { additionalStyles } from './ExtendedButton.presets';
import { styles } from './ExtendedButton.styles';
import { IExtendedButtonProps } from './ExtendedButton.types';

export const ExtendedButton: React.FC<IExtendedButtonProps> = ({
  title,
  titleStyle,
  style,
  preset = 'default',
  isArrow,
  disabled,
  onPress,
  ...rest
}) => {
  const containerStyles = useMemo(
    () => [
      styles.container,
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
      style={containerStyles}
      disabled={disabled}
      onPress={onButtonPress}>
      <ExtendedText style={titleStyles}>{title}</ExtendedText>
      {isArrow && <Image source={IMAGES.BROWN_TRIANGLE} style={styles.image} />}
    </TouchableOpacity>
  );
};
