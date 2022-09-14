import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';

import { IMAGES } from '../../../../assets';
import {
  BottomButtonView,
  ExtendedKeyboardAvoidingView,
  ExtendedText,
  ExtendedTextInput,
  ExtendedTextInputType,
  MainHeader,
} from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { IForgotPasswordEmailScreenProps } from './ForgotPasswordEmailScreen.props';
import { styles } from './ForgotPasswordEmailScreen.styles';

export const ForgotPasswordEmailScreen: React.FC<IForgotPasswordEmailScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();

    const [email, setEmail] = useState('');

    const onSubmit = useCallback(() => {
      navigation.navigate('ForgotPasswordSuccess');
    }, [navigation]);

    return (
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={navigation.goBack}
        />
        <ExtendedKeyboardAvoidingView>
          <BottomButtonView
            buttonTitle={t('buttons.reset_password')}
            onSubmit={onSubmit}
            isDisabledButton={!email}
            style={styles.container}>
            <ExtendedText preset="large-title">
              {t('screens.onboarding.forgot_password.email.title')}
            </ExtendedText>

            <ExtendedText preset="secondary-text" style={styles.subtitle}>
              {t('screens.onboarding.forgot_password.email.subtitle')}
            </ExtendedText>

            <ExtendedTextInput
              type={ExtendedTextInputType.Email}
              value={email}
              onChangeText={setEmail}
              placeholder={t('placeholders.enter_email')}
            />
          </BottomButtonView>
        </ExtendedKeyboardAvoidingView>
      </SafeAreaView>
    );
  };
