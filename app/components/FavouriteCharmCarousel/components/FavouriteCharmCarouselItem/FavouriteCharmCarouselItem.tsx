import React from 'react';
import { Image, View } from 'react-native';

import { IFavouriteCharmCarouselItemProps } from './FavouriteCharmCarouselItem.types';
import { styles } from './FavouriteCharmCarouselItem.styles';
import { IMAGES } from '../../../../assets';
import { ExtendedText } from '../../../ExtendedText';

export const FavouriteCharmCarouselItem: React.FC<IFavouriteCharmCarouselItemProps> =
  ({ data, style }) => {
    return (
      <View style={style}>
        <View style={styles.container}>
          <Image source={IMAGES[data.image]} style={styles.image} />
          <ExtendedText preset="heading" style={styles.title}>
            {data.title}
          </ExtendedText>
        </View>
      </View>
    );
  };
