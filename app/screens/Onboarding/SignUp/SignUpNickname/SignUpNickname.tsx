import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';

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

export const SignUpNicknameScreen: React.FC<ISignUpNicknameScreenProps> = ({
  navigation,
  route,
}) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isChild = route.params.isChild;

  const [nickname, setNickname] = useState('');

  const onSubmit = useCallback(() => {
    if (isChild) {
      dispatch(cacheSlice.actions.saveSignUpDataChild({ nickname }));
    } else {
      dispatch(cacheSlice.actions.saveSignUpDataParent({ nickname }));
    }
    navigation.navigate('SignUpAvatar', { isChild });
  }, [dispatch, isChild, navigation, nickname]);

  return (
    <SafeAreaView style={generalStyles.whFlex}>
      <BottomButtonView
        buttonTitle={t('buttons.next').toUpperCase()}
        onSubmit={onSubmit}
        isDisabledButton={!nickname}>
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={navigation.goBack}
        />
        <ExtendedText>
          {t('screens.onboarding.sign_up_nickname.title')}
        </ExtendedText>
        <ExtendedText>
          {t('screens.onboarding.sign_up_nickname.subtitle')}
        </ExtendedText>
        <ExtendedTextInput
          value={nickname}
          onChangeText={setNickname}
          placeholder={t('placeholders.enter_nickname')}
        />
      </BottomButtonView>
    </SafeAreaView>
  );
};
