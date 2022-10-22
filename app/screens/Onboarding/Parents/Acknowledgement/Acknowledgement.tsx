import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView } from 'react-native';

import { BACKGROUND_IMAGES } from '../../../../assets';
import { SVG } from '../../../../assets/svg';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { styles } from './Acknowledgement.styles';
import { IAcknowledgementScreenProps } from './Acknowledgement.types';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

const GuideIcon = SVG.CompassionateGuideIcon;

export const AcknowledgementScreen: React.FC<IAcknowledgementScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const onNextPress = useCallback(() => {
    navigation.navigate('OnboardingCarousel');
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
          onSubmit={onNextPress}
          isArrow={true}
          style={styles.container}>
          <GuideIcon />
          <ExtendedText preset="body-regular" style={styles.title}>
            {t('screens.onboarding.acknowledgement.title')}
          </ExtendedText>
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
