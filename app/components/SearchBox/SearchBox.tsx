import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './SearchBox.styles';
import { ISearchBoxProps } from './SearchBox.props';
import { ExtendedTextInput } from '../ExtendedTextInput';
import { IMAGES } from '../../assets';

export const SearchBox: React.FC<ISearchBoxProps> = ({
  containerStyle = {},
  iconStyle = {},
  style,
  ...rest
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <ExtendedTextInput {...rest} style={[styles.input, style]} />

      {/* TODO: change to actual image */}
      <Image source={IMAGES.WHITE_PENCIL} style={[styles.icon, iconStyle]} />
    </View>
  );
};
