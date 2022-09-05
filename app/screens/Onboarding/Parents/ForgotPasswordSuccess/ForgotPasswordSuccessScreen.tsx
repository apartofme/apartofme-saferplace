import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';

import { ExtendedButton, ExtendedText } from '../../../../components';
import { IForgotPasswordSuccessScreenProps } from './ForgotPasswordSuccessScreen.props';

export const ForgotPasswordSuccessScreen: React.FC<IForgotPasswordSuccessScreenProps> =
  ({}) => {
    const { t } = useTranslation();

    return (
      <SafeAreaView>
        <ExtendedText>
          {t('screens.onboarding.forgot_password.success.title')}
        </ExtendedText>
        <ExtendedText>
          {t('screens.onboarding.forgot_password.success.subtitle')}
        </ExtendedText>
        <ExtendedButton title={t('buttons.open_email')} />
      </SafeAreaView>
    );
  };
