import React, { useCallback } from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';

import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../../../components';
import { generalStyles } from '../../../../../utils/styles';
import { ISelectUserAcknowledgementScreenProps } from './SelectUserAcknowledgement.types';
import { SVG } from '../../../../../assets/svg';
import { styles } from './SelectUserAcknowledgement.styles';
import { BACKGROUND_IMAGES } from '../../../../../assets';
import { useTranslation } from 'react-i18next';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;
const CelebrationGuideIcon = SVG.CelebrationGuideIcon;

export const SelectUserAcknowledgementScreen: React.FC<ISelectUserAcknowledgementScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();

    const goToJointOnboardingStack = useCallback(() => {
      navigation.navigate('JointOnboardingStack');
    }, [navigation]);

    return (
      <ImageBackground
        source={BACKGROUND_IMAGES.MENU}
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <MainHeader
            leftIcon={<WhiteBackArrowIcon />}
            onLeftIconPress={navigation.goBack}
          />
          <BottomButtonView
            buttonTitle={t('buttons.next')}
            onSubmit={goToJointOnboardingStack}
            isArrow
            style={styles.container}>
            <CelebrationGuideIcon />
            <ExtendedText preset="large-title" style={styles.title}>
              {t('screens.sign_in.acknowledgement.title')}
            </ExtendedText>
            <ExtendedText preset="secondary-text" style={styles.subtitle}>
              {t('screens.sign_in.acknowledgement.description')}
            </ExtendedText>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
