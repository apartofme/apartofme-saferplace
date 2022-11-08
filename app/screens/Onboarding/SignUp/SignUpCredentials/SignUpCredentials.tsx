import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import { Formik } from 'formik';

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
import { SVG } from '../../../../assets/svg';
import { SETTINGS_PRIVACY_MENU } from '../../../Menu/SettingsPrivacy/SettingsPrivacy.data';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const SignUpCredentialsScreen: React.FC<ISignUpCredentialsScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const [isFocus, setIsFocus] = useState(false);

    const onSignUpPress = useCallback(
      ({ email, password }) => {
        dispatch(
          cacheSlice.actions.saveSignUpDataParent({
            email,
            password,
          }),
        );
        navigation.navigate('SignUpNickname');
      },
      [dispatch, navigation],
    );

    const onSignInPress = useCallback(() => {
      navigation.navigate('Login');
    }, [navigation]);

    const onConditionPress = useCallback(() => {
      if (SETTINGS_PRIVACY_MENU[3].data) {
        navigation.navigate('MenuStack', {
          screen: 'Conditions',
          params: { data: SETTINGS_PRIVACY_MENU[3].data },
        });
      }
    }, [navigation]);

    const onPrivacyPress = useCallback(() => {
      if (SETTINGS_PRIVACY_MENU[4].data) {
        navigation.navigate('MenuStack', {
          screen: 'Conditions',
          params: { data: SETTINGS_PRIVACY_MENU[4].data },
        });
      }
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
              initialValues={{ email: '', password: '' }}
              validationSchema={SignUpCredentioalsValidationSchema}
              onSubmit={onSignUpPress}>
              {({
                handleChange,
                handleSubmit,
                handleBlur,
                isValid,
                dirty,
                errors,
                touched,
              }) => (
                <BottomButtonView
                  buttonTitle={t('buttons.signup')}
                  onSubmit={handleSubmit}
                  isDisabledButton={dirty ? !isValid : true}
                  style={styles.container}>
                  <ScrollView
                    scrollEnabled={isFocus}
                    showsVerticalScrollIndicator={false}
                    style={generalStyles.flex}>
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

                    <View style={styles.mb24}>
                      <ExtendedTextInput
                        type={ExtendedTextInputType.Email}
                        onChangeText={handleChange('email')}
                        setIsActive={setIsFocus}
                        onBlur={handleBlur('email')}
                        placeholder={t('placeholders.enter_email')}
                        placeholderTextColor={COLORS.BRILLIANT_WHITE}
                        maxLength={30}
                        error={
                          errors.email && touched.email ? errors.email : ''
                        }
                      />
                      <ExtendedTextInput
                        type={ExtendedTextInputType.PasswordToggle}
                        onChangeText={handleChange('password')}
                        setIsActive={setIsFocus}
                        onBlur={handleBlur('password')}
                        placeholder={t('placeholders.create_password')}
                        placeholderTextColor={COLORS.BRILLIANT_WHITE}
                        style={styles.mt16}
                        maxLength={30}
                        error={
                          errors.password && touched.password
                            ? errors.password
                            : ''
                        }
                      />
                    </View>
                  </ScrollView>
                </BottomButtonView>
              )}
            </Formik>
          </ExtendedKeyboardAvoidingView>

          {!isFocus && (
            <View style={styles.bottomConatainer}>
              <ExtendedText
                preset="tertiary-text-regular"
                style={styles.whiteColor}>
                {t('screens.onboarding.sign_up_credentials.footer')}
              </ExtendedText>
              <Pressable onPress={onConditionPress}>
                <ExtendedText
                  preset="tertiary-text-regular"
                  style={[generalStyles.boldText, generalStyles.primaryOrange]}>
                  {t('buttons.terms_conditions')}
                </ExtendedText>
              </Pressable>
              <ExtendedText
                preset="tertiary-text-regular"
                style={styles.whiteColor}>
                {` ${t('labels.and')} `}
              </ExtendedText>
              <Pressable onPress={onPrivacyPress}>
                <ExtendedText
                  preset="tertiary-text-regular"
                  style={[generalStyles.boldText, generalStyles.primaryOrange]}>
                  {t('buttons.privacy_policy')}
                </ExtendedText>
              </Pressable>
            </View>
          )}
        </SafeAreaView>
      </View>
    );
  };
