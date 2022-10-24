import _ from 'lodash';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView } from 'react-native';

import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { IForgotPasswordSuccessScreenProps } from './ForgotPasswordSuccessScreen.types';
import { styles } from './ForgotPasswordSuccessScreen.styles';
import { SVG } from '../../../../assets/svg';
import { BACKGROUND_IMAGES } from '../../../../assets';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;
const CheckYourEmailIcon = SVG.CheckYourEmailIcon;

export const ForgotPasswordSuccessScreen: React.FC<IForgotPasswordSuccessScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();

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
            buttonTitle={t('buttons.open_email')}
            // TODO: change to correct function
            onSubmit={_.noop}
            style={styles.container}>
            <CheckYourEmailIcon />
            <ExtendedText preset="large-title" style={styles.title}>
              {t('screens.onboarding.forgot_password.success.title')}
            </ExtendedText>

            <ExtendedText preset="secondary-text" style={styles.subtitle}>
              {t('screens.onboarding.forgot_password.success.description')}
            </ExtendedText>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
