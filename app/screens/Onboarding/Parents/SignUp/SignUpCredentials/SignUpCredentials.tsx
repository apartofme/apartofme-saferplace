import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View, SafeAreaView } from 'react-native';

import {
  ExtendedButton,
  ExtendedText,
  ExtendedTextInput,
  MainHeader,
} from '../../../../../components';
import { IMAGES } from '../../../../../assets';
import { useAppDispatch } from '../../../../../hooks';
import { cacheSlice } from '../../../../../redux/slices';
import { generalStyles } from '../../../../../utils/styles';
import { ISignUpCredentialsScreenProps } from './SignUpCredentials.props';

export const SignUpCredentialsScreen: React.FC<ISignUpCredentialsScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSignUpPress = useCallback(() => {
      dispatch(cacheSlice.actions.saveSignUpData({ email, password }));
      navigation.navigate('SignUpNickname');
    }, [dispatch, email, navigation, password]);

    return (
      <SafeAreaView style={generalStyles.whFlex}>
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={navigation.goBack}
        />
        <ExtendedText>
          {t('screens.onboarding.sign_up_credentials.title')}
        </ExtendedText>
        <View style={generalStyles.row}>
          <ExtendedText>
            {t('screens.onboarding.sign_up_credentials.subtitle')}
          </ExtendedText>
          <TouchableOpacity>
            <ExtendedText>{t('buttons.signup')} </ExtendedText>
          </TouchableOpacity>
        </View>
        <ExtendedTextInput
          value={email}
          onChangeText={setEmail}
          placeholder={t('placeholders.enter_email')}
        />
        <ExtendedTextInput
          value={password}
          onChangeText={setPassword}
          placeholder={t('placeholders.create_password')}
        />
        <ExtendedButton
          onPress={onSignUpPress}
          disabled={!email && !password}
          title={t('buttons.signup').toUpperCase()}
        />

        <View>
          <ExtendedText>
            {t('screens.onboarding.sign_up_credentials.footer')}
          </ExtendedText>
          <TouchableOpacity>
            <ExtendedText>{t('buttons.terms_conditions')}</ExtendedText>
          </TouchableOpacity>
          <ExtendedText>{t('labels.and')}</ExtendedText>
          <TouchableOpacity>
            <ExtendedText>{t('buttons.privacy_policy')}</ExtendedText>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
