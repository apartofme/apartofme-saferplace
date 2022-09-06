import _ from 'lodash';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';

import { BottomButtonView, ExtendedText } from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { IForgotPasswordSuccessScreenProps } from './ForgotPasswordSuccessScreen.props';

export const ForgotPasswordSuccessScreen: React.FC<IForgotPasswordSuccessScreenProps> =
  ({}) => {
    const { t } = useTranslation();

    return (
      <SafeAreaView style={generalStyles.whFlex}>
        {/* // TODO: change to correct function */}
        <BottomButtonView
          buttonTitle={t('buttons.open_email')}
          onSubmit={_.noop}>
          <ExtendedText>
            {t('screens.onboarding.forgot_password.success.title')}
          </ExtendedText>
          <ExtendedText>
            {t('screens.onboarding.forgot_password.success.subtitle')}
          </ExtendedText>
        </BottomButtonView>
      </SafeAreaView>
    );
  };
