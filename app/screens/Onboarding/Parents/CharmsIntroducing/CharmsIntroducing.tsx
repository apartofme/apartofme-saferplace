import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView } from 'react-native';

import {
  BottomButtonView,
  Carousel,
  CarouselType,
  MainHeader,
} from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { CHARMS_CAROUSEL } from './CharmsIntroducing.data';
import { ICharmsIntroducingScreenProps } from './CharmsIntroducing.types';
import { styles } from './CharmsIntroducing.styles';
import { SVG } from '../../../../assets/svg';
import { BACKGROUND_IMAGES } from '../../../../assets';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const CharmsIntroducingScreen: React.FC<ICharmsIntroducingScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();

    const onSubmit = useCallback(() => {
      navigation.navigate('ParentGroundingStack');
    }, [navigation]);

    return (
      <ImageBackground
        source={BACKGROUND_IMAGES.ONBOARDING_DEFAULT}
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <MainHeader
            leftIcon={<WhiteBackArrowIcon />}
            onLeftIconPress={navigation.goBack}
          />
          <BottomButtonView
            buttonTitle={t('buttons.next')}
            isArrow={true}
            onSubmit={onSubmit}
            style={styles.container}>
            <Carousel
              data={CHARMS_CAROUSEL}
              preset={CarouselType.IconTitleDescription}
              carouselItemStyle={styles.carousel}
            />
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
