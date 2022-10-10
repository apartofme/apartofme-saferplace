import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';

import { IMAGES } from '../../../assets';
import {
  AvatarCarousel,
  BottomButtonView,
  ExtendedButton,
  ExtendedTextInput,
  MainHeader,
} from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IEditProfileScreenProps } from './EditProfile.types';
import { styles } from './EditProfile.styles';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { cacheSlice, userSlice } from '../../../redux/slices';

export const EditProfileScreen: React.FC<IEditProfileScreenProps> = ({
  navigation,
}) => {
  const enum UserType {
    Parent = 'parent',
    Child = 'child',
  }
  const type = UserType.Parent;

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const parentNickname = useAppSelector(
    state => state.user.parent?.nickname,
  ) as string;
  const childNickname = useAppSelector(
    state => state.user.child?.nickname,
  ) as string;

  const parentAvatar = useAppSelector(
    state => state.user.parent?.avatar,
  ) as string;
  const childAvatar = useAppSelector(
    state => state.user.child?.avatar,
  ) as string;

  const [nickname, setNickname] = useState(
    UserType.Child === type ? childNickname : parentNickname,
  );
  const [avatar, setAvatar] = useState(
    UserType.Child === type ? childAvatar : parentAvatar,
  );

  return (
    <SafeAreaView style={generalStyles.flex}>
      <BottomButtonView
        buttonTitle={t('buttons.cancel')}
        onSubmit={navigation.goBack}>
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={navigation.goBack}
        />
        <View style={styles.carouselContainer}>
          <AvatarCarousel setImage={setAvatar} defaultImage={avatar} />
        </View>
        <View style={styles.container}>
          <ExtendedTextInput value={nickname} onChangeText={setNickname} />
        </View>
        <ExtendedButton title={t('buttons.save')} style={styles.button} />
      </BottomButtonView>
    </SafeAreaView>
  );
};
