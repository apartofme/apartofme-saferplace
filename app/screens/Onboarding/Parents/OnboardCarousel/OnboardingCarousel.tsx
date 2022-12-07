import React, { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ICarouselInstance } from 'react-native-reanimated-carousel';

import { Carousel, CarouselType, ExtendedButton } from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { CHARMS_CAROUSEL } from './OnboardingCarousel.data';
import { IOnboardingCarouselScreenProps } from './OnboardingCarousel.types';
import { styles } from './OnboardingCarousel.styles';
import { BACKGROUND_IMAGES } from '../../../../assets';
import { SVG } from '../../../../assets/svg';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const OnboardingCarouselScreen: React.FC<IOnboardingCarouselScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();
    const [index, setIndex] = useState(0);
    const carouselRef = useRef<ICarouselInstance>(null);

    const onSubmit = useCallback(() => {
      if (index >= CHARMS_CAROUSEL.length - 1) {
        navigation.navigate('SignUpCredentials');
        return;
      }
      carouselRef.current?.next();
    }, [index, navigation]);

    const onBackArrowPress = useCallback(() => {
      if (index < 1) {
        navigation.goBack();
        return;
      }
      carouselRef.current?.prev();
    }, [index, navigation]);

    return (
      <ImageBackground
        source={BACKGROUND_IMAGES.GENERIC_ONBOARDING}
        style={generalStyles.flex}>
        <SafeAreaView edges={['bottom']} style={generalStyles.flex}>
          <TouchableOpacity
            style={styles.backArrowContainer}
            onPress={onBackArrowPress}>
            <WhiteBackArrowIcon />
          </TouchableOpacity>
          <Carousel
            data={CHARMS_CAROUSEL}
            preset={CarouselType.IconTitleDescription}
            setIndex={setIndex}
            carouselRef={carouselRef}
            isProgressBar={false}
          />
          <ExtendedButton
            title={t('buttons.next')}
            isArrow
            style={styles.button}
            onPress={onSubmit}
          />
        </SafeAreaView>
      </ImageBackground>
    );
  };
