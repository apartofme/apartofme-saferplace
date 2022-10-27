import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import { Formik } from 'formik';

import {
  ExtendedButton,
  ExtendedText,
  ExtendedTextInput,
  ExtendedTextInputType,
  MainHeader,
} from '../../../../../components';
import { styles } from './Login.styles';
import { ILoginScreenProps } from './Login.types';
import { generalStyles } from '../../../../../utils/styles';
import { useAppDispatch } from '../../../../../hooks';
import { userSlice } from '../../../../../redux/slices';
import { SignInValidationSchema } from './Login.validation';
import { SVG } from '../../../../../assets/svg';
import { BACKGROUND_IMAGES } from '../../../../../assets';
import { HIT_SLOP } from '../../../../../constants/hitSlop';
import { COLORS } from '../../../../../themes/colors';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const LoginScreen: React.FC<ILoginScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const onLoginPress = useCallback(
    ({ email, password }) => {
      dispatch(userSlice.actions.loginUser({ email, password }));
    },
    [dispatch],
  );

  const onForgotPusswordPress = useCallback(() => {
    navigation.navigate('ForgotPasswordEmail');
  }, [navigation]);

  const onSignUpPress = useCallback(() => {
    navigation.navigate('SignUpCredentials');
  }, [navigation]);

  return (
    <ImageBackground
      source={BACKGROUND_IMAGES.ONBOARDING_DEFAULT}
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={<WhiteBackArrowIcon />}
          onLeftIconPress={navigation.goBack}
        />
        <View style={styles.container}>
          <ExtendedText preset="large-title" style={styles.title}>
            {t('screens.onboarding.login.title')}
          </ExtendedText>
          <Formik
            initialValues={{
              email: __DEV__ ? 'emberglazer@gmail.com' : '',
              password: __DEV__ ? 'Test1111' : '',
            }}
            validationSchema={SignInValidationSchema}
            onSubmit={onLoginPress}>
            {({ values, handleChange, handleSubmit, handleBlur, isValid }) => (
              <>
                <ExtendedTextInput
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  placeholder={t('placeholders.enter_email')}
                  placeholderTextColor={COLORS.BRILLIANT_WHITE}
                  type={ExtendedTextInputType.Email}
                  style={styles.mb16}
                />
                <ExtendedTextInput
                  type={ExtendedTextInputType.PasswordToggle}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  placeholder={t('placeholders.enter_password')}
                  placeholderTextColor={COLORS.BRILLIANT_WHITE}
                />
                <ExtendedButton
                  title={t('buttons.login')}
                  style={styles.button}
                  onPress={handleSubmit}
                  disabled={!isValid}
                />
              </>
            )}
          </Formik>
          <TouchableOpacity
            onPress={onForgotPusswordPress}
            style={styles.forgotButton}
            hitSlop={HIT_SLOP}>
            <ExtendedText
              preset="body-bold"
              style={generalStyles.primaryOrange}>
              {t('buttons.forgot_password')}
            </ExtendedText>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <ExtendedText
            preset="secondary-text"
            style={generalStyles.brilliantWhite}>
            {t('screens.onboarding.login.footer')}
          </ExtendedText>
          <TouchableOpacity hitSlop={HIT_SLOP} onPress={onSignUpPress}>
            <ExtendedText preset="body-bold" style={styles.signupButton}>
              {t('buttons.signup')}!
            </ExtendedText>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
