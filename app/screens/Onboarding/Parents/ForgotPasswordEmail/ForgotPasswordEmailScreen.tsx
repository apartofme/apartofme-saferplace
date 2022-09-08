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
import { IForgotPasswordEmailScreenProps } from './ForgotPasswordEmailScreen.props';

export const ForgotPasswordEmailScreen: React.FC<IForgotPasswordEmailScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();

    return (
      <SafeAreaView style={generalStyles.whFlex}>
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={navigation.goBack}
        />
        <KeyboardAvoidingView style={generalStyles.flex} behavior="padding">
          {/* // TODO: change to correct function */}
          <BottomButtonView
            buttonTitle={t('buttons.reset_password')}
            onSubmit={_.noop}>
            <ExtendedText>
              {t('screens.onboarding.forgot_password.email.title')}
            </ExtendedText>
            <ExtendedText>
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
