import { ImageBackground, SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
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

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const SignUpAvatarScreen: React.FC<ISignUpAvatarScreenProps> = ({
  navigation,
  route,
}) => {
  const isChild = route.params?.isChild;

  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const parentAvatar = useAppSelector(
    state => state.user.parent?.avatar,
  )?.replace('Circle', '');
  const nickname =
    useAppSelector(
      state => state.cache.auth[isChild ? 'child' : 'parent']?.nickname,
    ) ?? '';

  const [avatarsData, setAvatarsData] = useState(
    _.filter(AVATAR_CAROUSEL, item => item.image !== parentAvatar),
  );
  const [avatar, setAvatar] = useState(avatarsData[0].image);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setAvatar(avatarsData[currentIndex].image);
  }, [avatarsData, currentIndex]);

  const onSubmitButtonPress = useCallback(() => {
    navigation.navigate('SignUpSuccess');
    if (isChild) {
      dispatch(
        cacheSlice.actions.saveSignUpDataChild({
          avatar: `Circle${avatar}`,
        }),
      );
      dispatch(userSlice.actions.saveChild());
    } else {
      dispatch(
        cacheSlice.actions.saveSignUpDataParent({
          avatar: `Circle${avatar}`,
        }),
      );
      dispatch(userSlice.actions.registerParent());
    }
  }, [avatar, dispatch, isChild, navigation]);

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
          isDisabledButton={!avatar}
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
          />
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
