import React, { useCallback, useRef, useState } from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { ICarouselInstance } from 'react-native-reanimated-carousel';

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
  const [index, setIndex] = useState(0);
  const carouselRef = useRef<ICarouselInstance>(null);

  const onSubmitPress = useCallback(() => {
    if (index >= ELIXIR_CAROUSEL.length - 1) {
      navigation.navigate('RecognitionDoubleInteraction');
      return;
    }
    carouselRef.current?.next();
  }, [navigation, index]);

  return (
    <ImageBackground
      source={BACKGROUND_IMAGES.ALTERNATIVE_GARDEN}
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <BottomButtonView
          buttonTitle={t('buttons.next')}
          onSubmit={onSubmitPress}
          style={styles.container}
          isArrow>
          <Carousel
            carouselRef={carouselRef}
            setIndex={setIndex}
            data={[...ELIXIR_CAROUSEL]}
            preset={CarouselType.IconDescription}
          />
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
