import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';

import { ELIXIR_CAROUSEL } from './ElixirCarousel.data';
import { IElixirCarouselScreenProps } from './ElixirCarousel.types';
import { styles } from './ElixirCarousel.styles';
import { BottomButtonView, Carousel, CarouselType } from '../../../components';
import { generalStyles } from '../../../utils/styles';

export const ElixirCarouselScreen: React.FC<IElixirCarouselScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const onSubmitPress = useCallback(() => {
    navigation.navigate('RecognitionDoubleInteraction');
  }, [navigation]);

  return (
    <SafeAreaView style={generalStyles.flex}>
      <BottomButtonView
        buttonTitle={t('buttons.next')}
        onSubmit={onSubmitPress}>
        <Carousel
          data={[...ELIXIR_CAROUSEL]}
          preset={CarouselType.ImageSubtitle}
          carouselItemStyle={styles.carouselItem}
        />
      </BottomButtonView>
    </SafeAreaView>
  );
};
