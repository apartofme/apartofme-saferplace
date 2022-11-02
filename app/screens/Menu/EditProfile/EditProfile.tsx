import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, SafeAreaView, View } from 'react-native';

import { BACKGROUND_IMAGES } from '../../../assets';
import {
  BottomButtonView,
  ExtendedButton,
  ExtendedKeyboardAvoidingView,
  ExtendedTextInput,
  MainHeader,
} from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IEditProfileScreenProps } from './EditProfile.types';
import { styles } from './EditProfile.styles';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { cacheSlice, userSlice } from '../../../redux/slices';
import { UserType } from '../../../utils/types';
import { AVATARS_SVG, SVG } from '../../../assets/svg';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const EditProfileScreen: React.FC<IEditProfileScreenProps> = ({
  navigation,
  route,
}) => {
  const { type } = route.params.data;

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const oldNickname = useAppSelector(
    state => state.user[UserType.Child === type ? 'child' : 'parent']?.nickname,
  ) as string;

  const avatar = useAppSelector(
    state => state.user[UserType.Child === type ? 'child' : 'parent']?.avatar,
  );

  const [nickname, setNickname] = useState(oldNickname);
  const [isActive, setIsActive] = useState(false);

  const onSubmit = useCallback(() => {
    if (type === UserType.Parent) {
      dispatch(cacheSlice.actions.saveSignUpDataParent({ avatar, nickname }));
      dispatch(userSlice.actions.updateParent());
    } else {
      dispatch(cacheSlice.actions.saveSignUpDataChild({ avatar, nickname }));
      dispatch(userSlice.actions.updateChild());
    }
  }, [avatar, dispatch, nickname, type]);

  const Icon = avatar && AVATARS_SVG[avatar];

  return (
    <View style={generalStyles.flex}>
      <Image
        source={BACKGROUND_IMAGES.MENU}
        style={generalStyles.backgroundImage}
      />
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={<WhiteBackArrowIcon />}
          onLeftIconPress={navigation.goBack}
        />
        <ExtendedKeyboardAvoidingView>
          <BottomButtonView buttonTitle={t('buttons.save')} onSubmit={onSubmit}>
            {Icon && !isActive && (
              <View style={generalStyles.aiCenter}>
                <Icon />
              </View>
            )}
            <View style={styles.inputContainer}>
              <ExtendedTextInput
                value={nickname}
                onChangeText={setNickname}
                setIsActive={setIsActive}
              />
            </View>
          </BottomButtonView>
          <ExtendedButton
            preset="border"
            title={t('buttons.cancel')}
            style={styles.button}
            onPress={navigation.goBack}
          />
        </ExtendedKeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};
