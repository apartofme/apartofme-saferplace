import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View, SafeAreaView } from 'react-native';
import { Formik } from 'formik';
import moment from 'moment';

import {
  BottomButtonView,
  ExtendedKeyboardAvoidingView,
  ExtendedText,
  ExtendedTextInput,
  ExtendedTextInputType,
  MainHeader,
} from '../../../../components';
import { IMAGES } from '../../../../assets';
import { useAppDispatch } from '../../../../hooks';
import { cacheSlice } from '../../../../redux/slices';
import { generalStyles } from '../../../../utils/styles';
import { ISignUpCredentialsScreenProps } from './SignUpCredentials.types';
import { styles } from './SignUpCredentials.styles';
import { SignUpCredentioalsValidationSchema } from './SignUpCredentials.validation';

export const SignUpCredentialsScreen: React.FC<ISignUpCredentialsScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const onSignUpPress = useCallback(
      ({ email, password }) => {
        const createdAt = moment().format('L');
        dispatch(
          cacheSlice.actions.saveSignUpDataParent({
            email,
            password,
            createdAt,
          }),
        );
        navigation.navigate('SignUpNickname');
      },
      [dispatch, navigation],
    );

    const onSignInPress = useCallback(() => {
      navigation.navigate('Login');
    }, [navigation]);

    return (
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={navigation.goBack}
        />
        <ExtendedKeyboardAvoidingView>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={SignUpCredentioalsValidationSchema}
            onSubmit={onSignUpPress}>
            {({
              values,
              handleChange,
              handleSubmit,
              handleBlur,
              isValid,
              dirty,
              errors,
            }) => (
              <BottomButtonView
                buttonTitle={t('buttons.signup')}
                onSubmit={handleSubmit}
                isDisabledButton={dirty ? !isValid : true}
                style={styles.container}>
                <View style={generalStyles.flex}>
                  <ExtendedText preset="large-title">
                    {t('screens.onboarding.sign_up_credentials.title')}
                  </ExtendedText>

                  <View style={styles.subtitle}>
                    <ExtendedText preset="secondary-text">
                      {t('screens.onboarding.sign_up_credentials.description')}
                    </ExtendedText>
                    <TouchableOpacity onPress={onSignInPress}>
                      <ExtendedText preset="secondary-text">
                        {` ${t('buttons.signin')}`}
                      </ExtendedText>
                    </TouchableOpacity>
                  </View>

                  <View>
                    <ExtendedTextInput
                      type={ExtendedTextInputType.Email}
                      value={values.email}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      placeholder={t('placeholders.enter_email')}
                      style={styles.input}
                      error={errors.email}
                    />
                    <ExtendedTextInput
                      type={ExtendedTextInputType.Password}
                      value={values.password}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      placeholder={t('placeholders.create_password')}
                      style={styles.input}
                      error={errors.password}
                    />
                  </View>
                </View>
              </BottomButtonView>
            )}
          </Formik>
        </ExtendedKeyboardAvoidingView>

        <View style={styles.bottomConatainer}>
          <ExtendedText preset="tertiary-text-regular">
            {t('screens.onboarding.sign_up_credentials.footer')}
          </ExtendedText>
          <TouchableOpacity>
            <ExtendedText preset="tertiary-text-regular">
              {t('buttons.terms_conditions')}
            </ExtendedText>
          </TouchableOpacity>
          <ExtendedText preset="tertiary-text-regular">
            {` ${t('labels.and')} `}
          </ExtendedText>
          <TouchableOpacity>
            <ExtendedText preset="tertiary-text-regular">
              {t('buttons.privacy_policy')}
            </ExtendedText>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
