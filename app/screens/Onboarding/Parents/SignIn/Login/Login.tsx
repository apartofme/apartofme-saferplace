import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
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
import { IMAGES } from '../../../../../assets';
import { generalStyles } from '../../../../../utils/styles';
import { useAppDispatch } from '../../../../../hooks';
import { userSlice } from '../../../../../redux/slices';
import { HIT_SLOP } from './Lodin.data';
import { SignInValidationSchema } from './Login.validation';

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
    <SafeAreaView style={generalStyles.flex}>
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
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
          {({
            values,
            handleChange,
            handleSubmit,
            handleBlur,
            isValid,
            errors,
          }) => (
            <>
              <ExtendedTextInput
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                placeholder={t('placeholders.enter_email')}
                type={ExtendedTextInputType.Email}
                style={styles.mb24}
                error={errors.email}
              />
              <ExtendedTextInput
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                placeholder={t('placeholders.enter_password')}
                type={ExtendedTextInputType.Password}
                style={styles.mb24}
                error={errors.password}
              />
              <ExtendedButton
                title={t('buttons.login')}
                style={styles.mb24}
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
          <ExtendedText preset="secondary-text">
            {t('buttons.forgot_password')}
          </ExtendedText>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <ExtendedText preset="secondary-text">
          {t('screens.onboarding.login.footer')}
        </ExtendedText>
        <TouchableOpacity hitSlop={HIT_SLOP} onPress={onSignUpPress}>
          <ExtendedText preset="secondary-text" style={styles.signupButton}>
            {t('buttons.signup')}!
          </ExtendedText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
