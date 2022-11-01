import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Carousel, CarouselType, ExtendedText } from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { CHARMS_CAROUSEL } from './OnboardingCarousel.data';
import { IOnboardingCarouselScreenProps } from './OnboardingCarousel.types';
import { styles } from './OnboardingCarousel.styles';
import { BACKGROUND_IMAGES } from '../../../../assets';
import { HIT_SLOP } from '../../../../constants/hitSlop';

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
          <Carousel
            data={CHARMS_CAROUSEL}
            preset={CarouselType.IconTitleDescription}
          />
          <Pressable
            onPress={onSubmit}
            style={styles.button}
            hitSlop={HIT_SLOP}>
            <ExtendedText
              preset="secondary-text"
              style={generalStyles.brilliantWhite}>
              {t('buttons.skip').toUpperCase()}
            </ExtendedText>
          </Pressable>
        </SafeAreaView>
      </ImageBackground>
    );
  };
