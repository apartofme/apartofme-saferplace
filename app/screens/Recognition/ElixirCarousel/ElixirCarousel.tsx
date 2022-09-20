import React from 'react';
import { SafeAreaView } from 'react-native';

import { ELIXIR_CAROUSEL } from './ElixirCarousel.data';
import { IElixirCarouselScreenProps } from './ElixirCarousel.types';
import { styles } from './ElixirCarousel.styles';
import { Carousel, CarouselType } from '../../../components';
import { generalStyles } from '../../../utils/styles';

export const ElixirCarouselScreen: React.FC<IElixirCarouselScreenProps> =
  () => {
    return (
      <SafeAreaView style={generalStyles.flex}>
        <Carousel
          data={[...ELIXIR_CAROUSEL]}
          preset={CarouselType.ImageSubtitle}
          carouselItemStyle={styles.carouselItem}
        />
      </SafeAreaView>
    );
  };
