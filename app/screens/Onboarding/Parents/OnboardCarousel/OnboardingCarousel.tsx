import _ from 'lodash';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';

import {
  BottomButtonView,
  Carousel,
  CarouselType,
} from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { CHARMS_CAROUSEL } from './OnboardingCarousel.data';
import { IOnboardingCarouselScreenProps } from './OnboardingCarousel.props';

export const OnboardingCarouselScreen: React.FC<IOnboardingCarouselScreenProps> =
  () => {
    const { t } = useTranslation();

    return (
      // TODO: remove noop to real function
      <SafeAreaView style={generalStyles.whFlex}>
        <BottomButtonView buttonTitle={t('buttons.next')} onSubmit={_.noop}>
          <Carousel
            data={CHARMS_CAROUSEL}
            preset={CarouselType.ImageTitleSubTitle}
          />
        </BottomButtonView>
      </SafeAreaView>
    );
  };
