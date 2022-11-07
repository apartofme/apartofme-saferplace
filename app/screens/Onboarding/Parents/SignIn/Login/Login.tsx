import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { Formik } from 'formik';

import {
  ExtendedButton,
  ExtendedKeyboardAvoidingView,
  ExtendedText,
  ExtendedTextInput,
  ExtendedTextInputType,
  MainHeader,
} from '../../../../../components';
import { styles } from './Login.styles';
import { ILoginScreenProps } from './Login.types';
import { generalStyles } from '../../../../../utils/styles';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
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

  const app = useAppSelector(state => state.app);
  const loginUserError = app.errors.loginUser;
  const isLoginUser = app.loading.isLoginUser;

  const [isOnLoginPress, setIsOnLoginPress] = useState(false);
  const [isErrorShow, setIsErrorShow] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isLoginUser) {
      setIsOnLoginPress(true);
    }
  }, [isLoginUser]);

  const title = useMemo(() => {
    if (isOnLoginPress && loginUserError) {
      setIsErrorShow(true);
      return 'screens.onboarding.login.error_title';
    }
    return 'screens.onboarding.login.title';
  }, [isOnLoginPress, loginUserError]);

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
        <View style={styles.container}>
          <ExtendedKeyboardAvoidingView>
            <ScrollView
              scrollEnabled={isActive}
              showsVerticalScrollIndicator={false}
              style={generalStyles.flex}>
              {!isActive && (
                <ExtendedText
                  preset="large-title"
                  style={[styles.title, !isErrorShow && styles.mb50]}>
                  {t(title)}
                </ExtendedText>
              )}
              {isErrorShow && (
                <ExtendedText preset="secondary-text" style={styles.errorTitle}>
                  {t('screens.onboarding.login.error')}
                </ExtendedText>
              )}

              <Formik
                initialValues={{
                  email: __DEV__ ? 'emberglazer@gmail.com' : '',
                  password: __DEV__ ? 'Test1111' : '',
                }}
                validationSchema={SignInValidationSchema}
                onSubmit={onLoginPress}>
                {({
                  values,
                  handleChange,
                  handleSubmit,
                  handleBlur,
                  isValid,
                  errors,
                  touched,
                }) => (
                  <View>
                    <ExtendedTextInput
                      value={values.email}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      placeholder={t('placeholders.enter_email')}
                      placeholderTextColor={COLORS.BRILLIANT_WHITE}
                      type={ExtendedTextInputType.Email}
                      setIsActive={setIsActive}
                      maxLength={39}
                      error={errors.email && touched.email ? errors.email : ''}
                    />
                    <ExtendedTextInput
                      type={ExtendedTextInputType.PasswordToggle}
                      value={values.password}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      style={styles.mt8}
                      placeholder={t('placeholders.enter_password')}
                      placeholderTextColor={COLORS.BRILLIANT_WHITE}
                      setIsActive={setIsActive}
                      error={
                        errors.password && touched.password
                          ? errors.password
                          : ''
                      }
                    />
                    <ExtendedButton
                      title={t('buttons.login')}
                      style={styles.button}
                      onPress={handleSubmit}
                      disabled={!isValid}
                    />
                  </View>
                )}
              </Formik>
            </ScrollView>
          </ExtendedKeyboardAvoidingView>
          {!isActive && (
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
          )}
        </View>

        {!isActive && (
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
        )}
      </SafeAreaView>
    </View>
  );
};
