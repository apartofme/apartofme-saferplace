import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';

import {
  BottomButtonView,
  Carousel,
  CarouselType,
  MainHeader,
} from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { CHARMS_CAROUSEL } from './OnboardingCarousel.data';
import { IOnboardingCarouselScreenProps } from './OnboardingCarousel.types';
import { styles } from './OnboardingCarousel.styles';
import { IMAGES } from '../../../../assets';

export const OnboardingCarouselScreen: React.FC<IOnboardingCarouselScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();

    const onSubmit = useCallback(() => {
      navigation.navigate('SignUpCredentials');
    }, [navigation]);

    return (
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={navigation.goBack}
        />
        <BottomButtonView
          buttonTitle={t('buttons.next')}
          onSubmit={onSubmit}
          style={styles.container}>
          <Carousel
            data={[...CHARMS_CAROUSEL]}
            preset={CarouselType.ImageTitleSubTitle}
            carouselItemStyle={styles.carouselItem}
          />
        </BottomButtonView>
      </SafeAreaView>
    );
  };
