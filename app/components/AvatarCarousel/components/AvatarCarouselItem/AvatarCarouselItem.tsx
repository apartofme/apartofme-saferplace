import React from 'react';
import { Image, View } from 'react-native';

import { IOnlyImageProps } from './AvatarCarouselItem.types';
import { styles } from './AvatarCarouselItem.styles';
import { IMAGES } from '../../../../assets';
import { ImagesKeys } from '../../../../utils/types';

export const AvatarCarouselItem: React.FC<IOnlyImageProps> = ({
  data,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      {data.image && (
        <Image source={IMAGES[data.image as ImagesKeys]} style={styles.image} />
      )}
    </View>
  );
};
