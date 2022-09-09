import React from 'react';
import { Image, View } from 'react-native';

import { IOnlyImageProps } from './OnlyImage.props';
import { styles } from './OnlyImage.styles';

export const OnlyImage: React.FC<IOnlyImageProps> = ({ data, style }) => {
  return (
    <View style={[styles.container, style]}>
      {data.image && <Image source={data.image} style={styles.image} />}
    </View>
  );
};
