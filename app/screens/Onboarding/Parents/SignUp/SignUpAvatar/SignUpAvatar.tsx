import { SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import React, { useCallback, useState } from 'react';

import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../../../components';
import { IMAGES } from '../../../../../assets';
import { useAppDispatch } from '../../../../../hooks';
import { generalStyles } from '../../../../../utils/styles';
import { ISignUpAvatarScreenProps } from './SignUpAvatar.props';
import { cacheSlice, userSlice } from '../../../../../redux/slices';

export const SignUpAvatarScreen: React.FC<ISignUpAvatarScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const [avatar, setAvatar] = useState(null);

  const onSubmitButtonPress = useCallback(() => {
    dispatch(cacheSlice.actions.saveSignUpData({ avatar }));
    dispatch(userSlice.actions.registerUser());
  }, [avatar, dispatch]);

  return (
    <SafeAreaView style={generalStyles.whFlex}>
      <BottomButtonView
        buttonTitle={t('buttons.next').toUpperCase()}
        onSubmit={onSubmitButtonPress}
        isDisabledButton={!avatar}>
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={navigation.goBack}
        />
        <ExtendedText>
          {t('screens.onboarding.sign_up_avatar.title')}
        </ExtendedText>
        <ExtendedText>
          {t('screens.onboarding.sign_up_avatar.subtitle')}
        </ExtendedText>
        {/* // TODO: add carousel */}
      </BottomButtonView>
    </SafeAreaView>
  );
};
