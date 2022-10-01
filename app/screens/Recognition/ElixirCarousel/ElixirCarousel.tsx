import React from 'react';
import { SafeAreaView } from 'react-native';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';

import { ELIXIR_CAROUSEL } from './ElixirCarousel.data';
import { IElixirCarouselScreenProps } from './ElixirCarousel.types';
import { styles } from './ElixirCarousel.styles';
import { BottomButtonView, Carousel, CarouselType } from '../../../components';
import { generalStyles } from '../../../utils/styles';

export const ElixirCarouselScreen: React.FC<IElixirCarouselScreenProps> =
  () => {
    const { t } = useTranslation();
    return (
      <SafeAreaView style={generalStyles.flex}>
        {/* // TODO: change to correct function */}
        <BottomButtonView buttonTitle={t('buttons.next')} onSubmit={_.noop}>
          <Carousel
            data={[...ELIXIR_CAROUSEL]}
            preset={CarouselType.ImageSubtitle}
            carouselItemStyle={styles.carouselItem}
          />
        </BottomButtonView>
      </SafeAreaView>
    );
  };
