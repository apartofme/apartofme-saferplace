import React, { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView } from 'react-native';
import { ICarouselInstance } from 'react-native-reanimated-carousel';

import {
  BottomButtonView,
  Carousel,
  CarouselType,
} from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { CHARMS_CAROUSEL } from './CharmsIntroducing.data';
import { ICharmsIntroducingScreenProps } from './CharmsIntroducing.types';
import { styles } from './CharmsIntroducing.styles';
import { BACKGROUND_IMAGES } from '../../../../assets';

export const CharmsIntroducingScreen: React.FC<ICharmsIntroducingScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();
    const [index, setIndex] = useState(0);
    const carouselRef = useRef<ICarouselInstance>(null);

    const onSubmit = useCallback(() => {
      if (index >= CHARMS_CAROUSEL.length - 1) {
        navigation.navigate('ParentGroundingStack');
      }
      carouselRef.current?.next();
    }, [index, navigation]);

    return (
      <ImageBackground
        source={BACKGROUND_IMAGES.ONBOARDING_DEFAULT}
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <BottomButtonView
            buttonTitle={t('buttons.next')}
            isArrow={true}
            onSubmit={onSubmit}
            style={styles.container}>
            <Carousel
              data={CHARMS_CAROUSEL}
              preset={CarouselType.IconTitleDescription}
              setIndex={setIndex}
              carouselRef={carouselRef}
              carouselItemStyle={styles.carousel}
            />
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
