import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, SafeAreaView, View } from 'react-native';

import {
  BottomButtonView,
  ExtendedKeyboardAvoidingView,
  ExtendedText,
  ExtendedTextInput,
  ExtendedTextInputType,
  MainHeader,
} from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { IForgotPasswordEmailScreenProps } from './ForgotPasswordEmailScreen.types';
import { styles } from './ForgotPasswordEmailScreen.styles';
import { SVG } from '../../../../assets/svg';
import { BACKGROUND_IMAGES } from '../../../../assets';
import { COLORS } from '../../../../themes/colors';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const ForgotPasswordEmailScreen: React.FC<IForgotPasswordEmailScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();

    const [email, setEmail] = useState('');

    const onSubmit = useCallback(() => {
      navigation.navigate('ForgotPasswordSuccess');
    }, [navigation]);

    return (
      <View style={generalStyles.flex}>
        <Image
          source={BACKGROUND_IMAGES.ONBOARDING_DEFAULT}
          style={generalStyles.backgroundImage}
        />
        <SafeAreaView style={generalStyles.flex}>
          <MainHeader
            leftIcon={<WhiteBackArrowIcon />}
            onLeftIconPress={navigation.goBack}
          />
          <ExtendedKeyboardAvoidingView>
            <BottomButtonView
              buttonTitle={t('buttons.reset_password')}
              onSubmit={onSubmit}
              isDisabledButton={!email}
              style={styles.container}>
              <ExtendedText
                preset="large-title"
                style={generalStyles.brilliantWhite}>
                {t('screens.onboarding.forgot_password.email.title')}
              </ExtendedText>

              <ExtendedText preset="secondary-text" style={styles.subtitle}>
                {t('screens.onboarding.forgot_password.email.description')}
              </ExtendedText>

              <ExtendedTextInput
                type={ExtendedTextInputType.Email}
                value={email}
                onChangeText={setEmail}
                placeholder={t('placeholders.enter_email')}
                placeholderTextColor={COLORS.BRILLIANT_WHITE}
                maxLength={39}
              />
            </BottomButtonView>
          </ExtendedKeyboardAvoidingView>
        </SafeAreaView>
      </View>
    );
  };
