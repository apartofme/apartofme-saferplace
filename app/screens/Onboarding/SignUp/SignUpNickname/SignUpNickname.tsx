import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { KeyboardAvoidingView, SafeAreaView } from 'react-native';

import {
  BottomButtonView,
  ExtendedText,
  ExtendedTextInput,
  MainHeader,
} from '../../../../components';
import { IMAGES } from '../../../../assets';
import { useAppDispatch } from '../../../../hooks';
import { cacheSlice } from '../../../../redux/slices';
import { generalStyles } from '../../../../utils/styles';
import { ISignUpNicknameScreenProps } from './SignUpNickname.props';
import { styles } from './SignUpNickname.styles';

export const SignUpNicknameScreen: React.FC<ISignUpNicknameScreenProps> = ({
  navigation,
  route,
}) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isChild = route.params?.isChild;

  const [nickname, setNickname] = useState('');

  const onSubmit = useCallback(() => {
    if (isChild) {
      dispatch(cacheSlice.actions.saveSignUpDataChild({ nickname }));
      navigation.navigate('SignUpAge');
    } else {
      dispatch(cacheSlice.actions.saveSignUpDataParent({ nickname }));
      navigation.navigate('SignUpAvatar');
    }
  }, [dispatch, isChild, navigation, nickname]);

  return (
    <SafeAreaView style={generalStyles.flex}>
      <KeyboardAvoidingView style={generalStyles.flex} behavior="padding">
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={navigation.goBack}
        />
        <BottomButtonView
          buttonTitle={t('buttons.next').toUpperCase()}
          onSubmit={onSubmit}
          isDisabledButton={!nickname}
          style={styles.container}>
          <ExtendedText preset="large-title">
            {t('screens.onboarding.sign_up_nickname.title')}
          </ExtendedText>
          <ExtendedText preset="secondary-text" style={styles.subtitle}>
            {t('screens.onboarding.sign_up_nickname.subtitle')}
          </ExtendedText>
          <ExtendedTextInput
            value={nickname}
            onChangeText={setNickname}
            placeholder={t('placeholders.enter_nickname')}
          />
        </BottomButtonView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
