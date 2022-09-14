import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View, SafeAreaView } from 'react-native';

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

export const SignUpCredentialsScreen: React.FC<ISignUpCredentialsScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSignUpPress = useCallback(() => {
      dispatch(cacheSlice.actions.saveSignUpDataParent({ email, password }));
      navigation.navigate('SignUpNickname');
    }, [dispatch, email, navigation, password]);

    const isButtonDisabled = useMemo(
      () => !email || !password,
      [email, password],
    );

    return (
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={navigation.goBack}
        />
        <ExtendedKeyboardAvoidingView>
          <BottomButtonView
            buttonTitle={t('buttons.signup')}
            onSubmit={onSignUpPress}
            isDisabledButton={isButtonDisabled}
            style={styles.container}>
            <View style={generalStyles.flex}>
              <ExtendedText preset="large-title">
                {t('screens.onboarding.sign_up_credentials.title')}
              </ExtendedText>

              <View style={styles.subtitle}>
                <ExtendedText preset="secondary-text">
                  {t('screens.onboarding.sign_up_credentials.subtitle')}
                </ExtendedText>
                <TouchableOpacity>
                  <ExtendedText preset="secondary-text">
                    {` ${t('buttons.signin')}`}
                  </ExtendedText>
                </TouchableOpacity>
              </View>

              <ExtendedTextInput
                type={ExtendedTextInputType.Email}
                value={email}
                onChangeText={setEmail}
                placeholder={t('placeholders.enter_email')}
                style={styles.input}
              />
              <ExtendedTextInput
                type={ExtendedTextInputType.Password}
                value={password}
                onChangeText={setPassword}
                placeholder={t('placeholders.create_password')}
              />
            </View>
          </BottomButtonView>
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
            {t('labels.and')}
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
