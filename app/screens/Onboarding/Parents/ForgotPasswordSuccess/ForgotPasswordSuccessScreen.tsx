import _ from 'lodash';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';

import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { IForgotPasswordSuccessScreenProps } from './ForgotPasswordSuccessScreen.types';
import { styles } from './ForgotPasswordSuccessScreen.styles';
import { SVG_ICONS } from '../../../../assets/svg';

const WhiteBackArrowIcon = SVG_ICONS.WhiteBackArrowIcon;

export const ForgotPasswordSuccessScreen: React.FC<IForgotPasswordSuccessScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();

    return (
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
          {/* // TODO: add the image */}
          <ExtendedText preset="large-title" style={styles.title}>
            {t('screens.onboarding.forgot_password.success.title')}
          </ExtendedText>

          <ExtendedText preset="secondary-text" style={styles.subtitle}>
            {t('screens.onboarding.forgot_password.success.description')}
          </ExtendedText>
        </BottomButtonView>
      </SafeAreaView>
    );
  };
