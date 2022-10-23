import React, { useCallback } from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';

import { ELIXIR_CAROUSEL } from './ElixirCarousel.data';
import { IElixirCarouselScreenProps } from './ElixirCarousel.types';
import { styles } from './ElixirCarousel.styles';
import { BottomButtonView, Carousel, CarouselType } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { BACKGROUND_IMAGES } from '../../../assets';

export const ElixirCarouselScreen: React.FC<IElixirCarouselScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const onSubmitPress = useCallback(() => {
    navigation.navigate('RecognitionDoubleInteraction');
  }, [navigation]);

  return (
    <ImageBackground
      source={BACKGROUND_IMAGES.GARDEN_BACKGROUND}
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <BottomButtonView
          buttonTitle={t('buttons.next')}
          onSubmit={onSubmitPress}
          isArrow={true}>
          <Carousel
            data={[...ELIXIR_CAROUSEL]}
            preset={CarouselType.ImageSubtitle}
            carouselItemStyle={styles.carouselItem}
          />
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
