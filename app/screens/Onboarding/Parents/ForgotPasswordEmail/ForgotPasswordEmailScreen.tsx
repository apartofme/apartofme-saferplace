import React, { useCallback } from 'react';
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
import { Formik } from 'formik';
import { ForgotPasswordValidationSchema } from './ForgotPasswordEmailScreen.validation';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const ForgotPasswordEmailScreen: React.FC<IForgotPasswordEmailScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();

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
            <Formik
              initialValues={{
                email: '',
              }}
              validationSchema={ForgotPasswordValidationSchema}
              onSubmit={onSubmit}>
              {({
                values,
                handleChange,
                handleSubmit,
                handleBlur,
                isValid,
                errors,
                touched,
              }) => (
                <BottomButtonView
                  buttonTitle={t('buttons.reset_password')}
                  onSubmit={handleSubmit}
                  isDisabledButton={!isValid}
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
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    placeholder={t('placeholders.enter_email')}
                    placeholderTextColor={COLORS.BRILLIANT_WHITE}
                    maxLength={30}
                    error={errors.email && touched.email ? errors.email : ''}
                  />
                </BottomButtonView>
              )}
            </Formik>
          </ExtendedKeyboardAvoidingView>
        </SafeAreaView>
      </View>
    );
  };
