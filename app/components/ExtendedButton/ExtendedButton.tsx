import React, { useCallback, useMemo } from 'react';
import { GestureResponderEvent, TouchableOpacity, View } from 'react-native';

import { SVG } from '../../assets/svg';
import { trackButtonPress } from '../../services/firebase';
import { ExtendedText } from '../ExtendedText';
import presets, { additionalStyles } from './ExtendedButton.presets';
import { styles } from './ExtendedButton.styles';
import { IExtendedButtonProps } from './ExtendedButton.types';

const ArrowIcon = SVG.BrownTriangleIcon;

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

  const WhiteBinIcon = SVG.whiteBinIcon;

  return (
    <TouchableOpacity
      {...rest}
      style={containerStyles}
      disabled={disabled}
      onPress={onButtonPress}>
      <ExtendedText style={titleStyles}>{title}</ExtendedText>
      {isArrow && (
        <View style={styles.imageContainer}>
          <ArrowIcon />
        </View>
      )}
      {preset === 'destructive' && (
        <View style={styles.imageContainer}>
          <WhiteBinIcon />
        </View>
      )}
    </TouchableOpacity>
  );
};
