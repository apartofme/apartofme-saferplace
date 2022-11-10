import { ImageBackground, SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNetInfo } from '@react-native-community/netinfo';
import uuid from 'react-native-uuid';
import _ from 'lodash';

import {
  AVATAR_CAROUSEL,
  BottomButtonView,
  Carousel,
  CarouselType,
  ExtendedText,
  MainHeader,
} from '../../../../components';
import { BACKGROUND_IMAGES } from '../../../../assets';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { ISignUpAvatarScreenProps } from './SignUpAvatar.types';
import { cacheSlice, userSlice } from '../../../../redux/slices';
import { styles } from './SignUpAvatar.styles';
import { SVG } from '../../../../assets/svg';
import { DatoCMSTextVariables } from '../../../../constants/quest';
import { IParent } from '../../../../models/IParent';
import { showInternetErrorAlert } from '../../../../utils';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const SignUpAvatarScreen: React.FC<ISignUpAvatarScreenProps> = ({
  navigation,
  route,
}) => {
  const isChild = route.params?.isChild;

  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { isConnected } = useNetInfo();

  const { isRegisterUser, isCreateChild } = useAppSelector(
    state => state.app.loading,
  );
  const parent = useAppSelector(
    state => state.user.parent ?? state.cache.auth.parent,
  ) as IParent;
  const child = useAppSelector(state => state.cache.auth.child);
  const parentAvatar = useAppSelector(state => state.user.parent?.avatar);

  const avatarsData = useMemo(() => {
    if (isChild) {
      return _.filter(
        AVATAR_CAROUSEL,
        item => `Circle${item.iconKey}` !== parentAvatar,
      );
    }
    return AVATAR_CAROUSEL;
  }, [isChild, parentAvatar]);

  const [avatar, setAvatar] = useState(avatarsData[0].iconKey);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nickname = useMemo(
    () => (isChild && child ? child.nickname : parent.nickname),
    [child, isChild, parent.nickname],
  );

  useEffect(() => {
    setAvatar(avatarsData[currentIndex].iconKey);
  }, [avatarsData, currentIndex]);

  const onSubmitButtonPress = useCallback(() => {
    if (isConnected === false) {
      showInternetErrorAlert(
        t('errors.network.title'),
        t('errors.network.description'),
      );
      return;
    }

    if (isChild && child && !isCreateChild) {
      dispatch(
        cacheSlice.actions.saveSignUpDataChild({
          avatar: `Circle${avatar}`,
        }),
      );

      dispatch(
        userSlice.actions.createChild({
          ...child,
          uid: uuid.v4().toString(),
          parentId: parent.uid,
          avatar: `Circle${avatar}`,
        }),
      );
      return;
    }

    if (!isRegisterUser && !isChild) {
      dispatch(
        cacheSlice.actions.saveSignUpDataParent({
          avatar: `Circle${avatar}`,
        }),
      );
      dispatch(userSlice.actions.registerParent());
    }
  }, [
    avatar,
    child,
    dispatch,
    isChild,
    isConnected,
    isCreateChild,
    isRegisterUser,
    parent.uid,
    t,
  ]);

  const title = t(
    `screens.onboarding.sign_up_avatar.${isChild ? 'child' : 'parent'}.title`,
  );
  const titleArray = _(title)
    .replace(
      DatoCMSTextVariables[isChild ? 'Child' : 'GrownUp'],
      `$${nickname}`,
    )
    .split('|')
    .map(value => {
      if (value.startsWith('$')) {
        return (
          <ExtendedText
            key={value}
            preset="large-title"
            style={generalStyles.primaryOrange}>
            {value.replace('$', '')}
          </ExtendedText>
        );
      }
      return value;
    });

  const background = useMemo(() => {
    if (isChild) {
      return BACKGROUND_IMAGES.ALTERNATIVE_GARDEN;
    }
    return BACKGROUND_IMAGES.ONBOARDING_DEFAULT;
  }, [isChild]);

  return (
    <ImageBackground source={background} style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={<WhiteBackArrowIcon />}
          onLeftIconPress={navigation.goBack}
        />
        <BottomButtonView
          buttonTitle={t('buttons.select')}
          onSubmit={onSubmitButtonPress}
          style={styles.container}>
          <ExtendedText
            preset="large-title"
            style={generalStyles.brilliantWhite}>
            {titleArray}
          </ExtendedText>
          <Carousel
            data={avatarsData}
            preset={CarouselType.Avatar}
            setIndex={setCurrentIndex}
            style={styles.carousel}
          />
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
