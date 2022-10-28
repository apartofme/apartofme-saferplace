import React from 'react';
import { View } from 'react-native';

import { styles } from './SearchBox.styles';
import { ISearchBoxProps } from './SearchBox.types';
import { ExtendedTextInput } from '../ExtendedTextInput';

export const SearchBox: React.FC<ISearchBoxProps> = ({
  containerStyle = {},
  style,
  ...rest
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <ExtendedTextInput {...rest} style={[styles.input, style]} />

      {/* TODO: change to actual image */}
      {/* <Image source={IMAGES.WHITE_PENCIL} style={[styles.icon, iconStyle]} /> */}
    </View>
  );
};
