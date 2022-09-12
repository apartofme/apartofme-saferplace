import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';

import {
  BottomButtonView,
  Carousel,
  CarouselType,
} from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { CHARMS_CAROUSEL } from './OnboardingCarousel.data';
import { IOnboardingCarouselScreenProps } from '../OnboardCarousel/OnboardingCarousel.props';
import { styles } from './OnboardingCarousel.styles';

export const OnboardingCarouselScreen: React.FC<IOnboardingCarouselScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();

    const onSubmit = useCallback(() => {
      navigation.navigate('SignUpCredentials');
    }, [navigation]);

    return (
      <SafeAreaView style={generalStyles.flex}>
        <BottomButtonView buttonTitle={t('buttons.next')} onSubmit={onSubmit}>
          <Carousel
            data={[...CHARMS_CAROUSEL]}
            preset={CarouselType.ImageTitleSubTitle}
            carouselItemStyle={styles.carouselItem}
          />
        </BottomButtonView>
      </SafeAreaView>
    );
  };
