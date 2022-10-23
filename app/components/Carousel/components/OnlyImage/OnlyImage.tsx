import React from 'react';
import { Image, View } from 'react-native';

import { IOnlyImageProps } from './OnlyImage.types';
import { styles } from './OnlyImage.styles';
import { IMAGES } from '../../../../assets';
import { ImagesKeys } from '../../../../utils/types';

export const OnlyImage: React.FC<IOnlyImageProps> = ({ data, style }) => {
  return (
    <View style={[styles.container, style]}>
      {data.image && (
        <Image source={IMAGES[data.image as ImagesKeys]} style={styles.image} />
      )}
    </View>
  );
};
