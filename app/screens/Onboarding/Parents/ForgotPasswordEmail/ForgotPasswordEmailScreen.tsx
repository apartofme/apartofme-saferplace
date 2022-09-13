import _ from 'lodash';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { KeyboardAvoidingView, SafeAreaView } from 'react-native';

import { IMAGES } from '../../../../assets';
import {
  BottomButtonView,
  ExtendedText,
  ExtendedTextInput,
  ExtendedTextInputType,
  MainHeader,
} from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { IForgotPasswordEmailScreenProps } from './ForgotPasswordEmailScreen.types';
import { styles } from './ForgotPasswordEmailScreen.styles';

export const ForgotPasswordEmailScreen: React.FC<IForgotPasswordEmailScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();

    return (
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={navigation.goBack}
        />
        <KeyboardAvoidingView style={generalStyles.flex} behavior="padding">
          <BottomButtonView
            buttonTitle={t('buttons.reset_password')}
            // TODO: change to correct function
            onSubmit={_.noop}
            style={styles.container}>
            <ExtendedText preset="large-title">
              {t('screens.onboarding.forgot_password.email.title')}
            </ExtendedText>

            <ExtendedText preset="secondary-text" style={styles.subtitle}>
              {t('screens.onboarding.forgot_password.email.subtitle')}
            </ExtendedText>

            <ExtendedTextInput
              type={ExtendedTextInputType.Email}
              placeholder={t('placeholders.enter_email')}
            />
          </BottomButtonView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };
