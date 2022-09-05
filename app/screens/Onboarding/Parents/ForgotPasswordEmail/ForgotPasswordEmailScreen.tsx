import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import {
  ExtendedButton,
  ExtendedText,
  ExtendedTextInput,
  ExtendedTextInputType,
} from '../../../../components';
import { IForgotPasswordEmailScreenProps } from './ForgotPasswordEmailScreen.props';
import { styles } from './ForgotPasswordEmailScreen.styles';

export const ForgotPasswordEmailScreen: React.FC<IForgotPasswordEmailScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();

    return (
      <SafeAreaView>
        <TouchableOpacity
          onPress={navigation.goBack}
          style={styles.goBackButton}>
          {/* // TODO: add the image */}
        </TouchableOpacity>

        <KeyboardAvoidingView behavior="padding">
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
          <ExtendedButton title={t('buttons.reset_password')} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };
