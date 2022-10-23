import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';
import _ from 'lodash';

import { BACKGROUND_IMAGES } from '../../../assets';
import {
  AVATAR_CAROUSEL,
  BottomButtonView,
  Carousel,
  CarouselType,
  ExtendedButton,
  ExtendedKeyboardAvoidingView,
  ExtendedTextInput,
  MainHeader,
} from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IEditProfileScreenProps } from './EditProfile.types';
import { styles } from './EditProfile.styles';
import { useAppDispatch, useAppSelector, useMount } from '../../../hooks';
import { cacheSlice, userSlice } from '../../../redux/slices';
import { UserType } from '../../../utils/types';
import { SVG } from '../../../assets/svg';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const EditProfileScreen: React.FC<IEditProfileScreenProps> = ({
  navigation,
  route,
}) => {
  const { type } = route.params.data;

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const parentNickname = useAppSelector(
    state => state.user.parent?.nickname,
  ) as string;
  const childNickname = useAppSelector(
    state => state.user.child?.nickname,
  ) as string;

  const parentAvatar = useAppSelector(state => state.user.parent?.avatar);
  const childAvatar = useAppSelector(state => state.user.child?.avatar);

  const [nickname, setNickname] = useState(
    UserType.Child === type ? childNickname : parentNickname,
  );
  const [avatar, setAvatar] = useState(
    UserType.Child === type ? childAvatar : parentAvatar,
  );
  const [avatarIndex, setAvatarIndex] = useState(0);

  useMount(() => {
    setAvatarIndex(
      _.findIndex(AVATAR_CAROUSEL, item => `Circle${item.image}` === avatar),
    );
  });

  useEffect(() => {
    setAvatar(`Circle${AVATAR_CAROUSEL[avatarIndex].image}`);
  }, [avatarIndex]);

  const onSubmit = useCallback(() => {
    if (type === UserType.Parent) {
      dispatch(cacheSlice.actions.saveSignUpDataParent({ avatar, nickname }));
      dispatch(userSlice.actions.updateParent());
    } else {
      dispatch(cacheSlice.actions.saveSignUpDataChild({ avatar, nickname }));
      dispatch(userSlice.actions.updateChild());
    }
  }, [avatar, dispatch, nickname, type]);

  return (
    <ImageBackground source={BACKGROUND_IMAGES.MENU} style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <ExtendedKeyboardAvoidingView>
          <MainHeader
            leftIcon={<WhiteBackArrowIcon />}
            onLeftIconPress={navigation.goBack}
          />
          <BottomButtonView
            buttonTitle={t('buttons.cancel')}
            onSubmit={navigation.goBack}>
            <Carousel
              data={AVATAR_CAROUSEL}
              preset={CarouselType.Avatar}
              defaultIndex={avatarIndex === -1 ? 0 : avatarIndex}
              setIndex={setAvatarIndex}
            />

            <View style={styles.container}>
              <ExtendedTextInput value={nickname} onChangeText={setNickname} />
            </View>

            <ExtendedButton
              title={t('buttons.save')}
              style={styles.button}
              onPress={onSubmit}
            />
          </BottomButtonView>
        </ExtendedKeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};
