import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  ScrollView,
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
import { SCROLL_DELAY } from '../../../../constants/time';
import { Square } from '../../../../components/CheckBox/components';
import { parseText } from '../../../../utils/parsers';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const SignUpCredentialsScreen: React.FC<ISignUpCredentialsScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const [isFocus, setIsFocus] = useState(false);
    const scrollViewRef = useRef<ScrollView>(null);

    const [toggleCheckBox, setToggleCheckBox] = useState(false);

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

    useEffect(() => {
      if (isFocus) {
        setTimeout(() => {
          scrollViewRef.current?.scrollToEnd();
        }, SCROLL_DELAY);
      }
    }, [isFocus]);

    const onCheckBoxPress = useCallback(() => {
      setToggleCheckBox(!toggleCheckBox);
    }, [toggleCheckBox]);

    const CheckBoxTitle = parseText({
      text: t('screens.onboarding.sign_up_credentials.receive_information'),
      preset: 'tertiary-text-regular',
      style: styles.checkBoxTitle,
    });

    return (
      <View style={generalStyles.flex}>
        <Image
          source={BACKGROUND_IMAGES.GENERIC_ONBOARDING}
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
                    ref={scrollViewRef}
                    scrollEnabled={isFocus}
                    showsVerticalScrollIndicator={false}
                    style={generalStyles.flex}>
                    <ExtendedText
                      preset="large-title"
                      style={generalStyles.brilliantWhite}>
                      {t('screens.onboarding.sign_up_credentials.title')}
                    </ExtendedText>

                    <View style={styles.subtitle}>
                      <ExtendedText
                        preset="secondary-text"
                        style={generalStyles.grey}>
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

                    <View style={styles.mb16}>
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
                    <TouchableOpacity
                      onPress={onCheckBoxPress}
                      style={[
                        generalStyles.row,
                        generalStyles.aiCenter,
                        styles.mb16,
                      ]}>
                      <Square isActive={toggleCheckBox} />
                      <CheckBoxTitle />
                    </TouchableOpacity>
                  </ScrollView>
                </BottomButtonView>
              )}
            </Formik>
          </ExtendedKeyboardAvoidingView>

          {!isFocus && (
            <View style={styles.bottomConatainer}>
              <ExtendedText style={styles.footerTitle}>
                <ExtendedText
                  preset="tertiary-text-regular"
                  style={generalStyles.brilliantWhite}>
                  {`${t(
                    'screens.onboarding.sign_up_credentials.first_footer',
                  )} `}
                </ExtendedText>
                <ExtendedText
                  preset="tertiary-text-regular"
                  style={[generalStyles.boldText, generalStyles.primaryOrange]}
                  onPress={onConditionPress}>
                  {t('buttons.terms_conditions')}
                </ExtendedText>
                <ExtendedText
                  preset="tertiary-text-regular"
                  style={generalStyles.brilliantWhite}>
                  {` ${t(
                    'screens.onboarding.sign_up_credentials.second_footer',
                  )} `}
                </ExtendedText>
                <ExtendedText
                  preset="tertiary-text-regular"
                  style={[generalStyles.boldText, generalStyles.primaryOrange]}
                  onPress={onPrivacyPress}>
                  {t('buttons.privacy_policy')}.
                </ExtendedText>
              </ExtendedText>
            </View>
          )}
        </SafeAreaView>
      </View>
    );
  };
