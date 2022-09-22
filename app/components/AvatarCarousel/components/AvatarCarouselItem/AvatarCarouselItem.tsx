import React from 'react';
import { Image, View } from 'react-native';

import { IOnlyImageProps } from './AvatarCarouselItem.types';
import { styles } from './AvatarCarouselItem.styles';
import { IMAGES } from '../../../../assets';

export const AvatarCarouselItem: React.FC<IOnlyImageProps> = ({
  data,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      {data.image && (
        <Image
          source={IMAGES[data.image as keyof typeof IMAGES]}
          style={styles.image}
        />
      )}
    </View>
  );
};
