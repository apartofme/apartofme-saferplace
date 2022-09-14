import React from 'react';
import { Text as ReactNativeText } from 'react-native';

import presets from './ExtendedText.presets';
import { IExtendedTextProps } from './ExtendedText.types';

export const ExtendedText: React.FC<IExtendedTextProps> = ({
  style,
  preset = 'body-regular',
  ...rest
}) => {
  const styles = [presets[preset], style];

  return <ReactNativeText {...rest} style={styles} />;
};
