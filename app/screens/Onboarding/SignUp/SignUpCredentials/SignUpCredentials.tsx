import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  TouchableOpacity,
  View,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
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
import { BACKGROUND_IMAGES } from '../../../../assets';
import { useAppDispatch } from '../../../../hooks';
import { cacheSlice } from '../../../../redux/slices';
import { generalStyles } from '../../../../utils/styles';
import { ISignUpCredentialsScreenProps } from './SignUpCredentials.types';
import { styles } from './SignUpCredentials.styles';
import { SignUpCredentioalsValidationSchema } from './SignUpCredentials.validation';
import { COLORS } from '../../../../themes/colors';
import { SVG_ICONS } from '../../../../assets/svg';

const WhiteBackArrowIcon = SVG_ICONS.WhiteBackArrowIcon;

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
      <ImageBackground
        source={BACKGROUND_IMAGES.ONBOARDING_DEFAULT}
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <MainHeader
            leftIcon={<WhiteBackArrowIcon />}
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
                setFieldTouched,
                touched,
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
                    <ExtendedText
                      preset="large-title"
                      style={styles.whiteColor}>
                      {t('screens.onboarding.sign_up_credentials.title')}
                    </ExtendedText>

                    <View style={styles.subtitle}>
                      <ExtendedText
                        preset="secondary-text"
                        style={styles.greyColor}>
                        {t(
                          'screens.onboarding.sign_up_credentials.description',
                        )}
                      </ExtendedText>
                      <TouchableOpacity onPress={onSignInPress}>
                        <ExtendedText
                          preset="secondary-text"
                          style={[
                            generalStyles.boldText,
                            generalStyles.primaryOrange,
                          ]}>
                          {` ${t('buttons.signin')}`}
                        </ExtendedText>
                      </TouchableOpacity>
                    </View>

                    <View>
                      <ExtendedTextInput
                        type={ExtendedTextInputType.Email}
                        value={values.email}
                        onChangeText={handleChange('email')}
                        onBlur={() => setFieldTouched('email')}
                        placeholder={t('placeholders.enter_email')}
                        placeholderTextColor={COLORS.BRILLIANT_WHITE}
                        style={styles.input}
                        maxLength={30}
                      />
                      <ExtendedTextInput
                        type={ExtendedTextInputType.PasswordToggle}
                        value={values.password}
                        onChangeText={handleChange('password')}
                        onBlur={() => setFieldTouched('password')}
                        placeholder={t('placeholders.create_password')}
                        placeholderTextColor={COLORS.BRILLIANT_WHITE}
                        style={styles.input}
                        maxLength={30}
                      />
                      {!!Object.entries(errors).length &&
                        (touched.email || touched.password) && (
                          <ExtendedText
                            preset="secondary-text"
                            style={styles.error}>
                            {Object.entries(errors)[0][1]}
                          </ExtendedText>
                        )}
                    </View>
                  </View>
                </BottomButtonView>
              )}
            </Formik>
          </ExtendedKeyboardAvoidingView>

          <View style={styles.bottomConatainer}>
            <ExtendedText
              preset="tertiary-text-regular"
              style={styles.whiteColor}>
              {t('screens.onboarding.sign_up_credentials.footer')}
            </ExtendedText>
            <TouchableOpacity>
              <ExtendedText
                preset="tertiary-text-regular"
                style={[generalStyles.boldText, generalStyles.primaryOrange]}>
                {t('buttons.terms_conditions')}
              </ExtendedText>
            </TouchableOpacity>
            <ExtendedText
              preset="tertiary-text-regular"
              style={styles.whiteColor}>
              {` ${t('labels.and')} `}
            </ExtendedText>
            <TouchableOpacity>
              <ExtendedText
                preset="tertiary-text-regular"
                style={[generalStyles.boldText, generalStyles.primaryOrange]}>
                {t('buttons.privacy_policy')}
              </ExtendedText>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  };
