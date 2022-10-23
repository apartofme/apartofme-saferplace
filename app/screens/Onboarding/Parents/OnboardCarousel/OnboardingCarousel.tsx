import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  BottomButtonView,
  Carousel,
  CarouselType,
} from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { CHARMS_CAROUSEL } from './OnboardingCarousel.data';
import { IOnboardingCarouselScreenProps } from './OnboardingCarousel.types';
import { styles } from './OnboardingCarousel.styles';
import { BACKGROUND_IMAGES } from '../../../../assets';

export const OnboardingCarouselScreen: React.FC<IOnboardingCarouselScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();

    const onSubmit = useCallback(() => {
      navigation.navigate('SignUpCredentials');
    }, [navigation]);

    return (
      <ImageBackground
        source={BACKGROUND_IMAGES.ONBOARDING_DEFAULT}
        style={generalStyles.flex}>
        <SafeAreaView edges={['bottom']} style={generalStyles.flex}>
          <BottomButtonView
            buttonTitle={t('buttons.next')}
            onSubmit={onSubmit}
            isArrow={true}>
            <Carousel
              data={[...CHARMS_CAROUSEL]}
              preset={CarouselType.ImageTitleSubtitle}
              carouselItemStyle={styles.carouselItem}
            />
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
