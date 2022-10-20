import { ImageBackground, SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import {
  AVATAR_CAROUSEL,
  BottomButtonView,
  Carousel,
  CarouselType,
  ExtendedText,
  MainHeader,
} from '../../../../components';
import { BACKGROUND_IMAGES, IMAGES } from '../../../../assets';
import { useAppDispatch } from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { ISignUpAvatarScreenProps } from './SignUpAvatar.types';
import { cacheSlice, userSlice } from '../../../../redux/slices';
import { styles } from './SignUpAvatar.styles';

export const SignUpAvatarScreen: React.FC<ISignUpAvatarScreenProps> = ({
  navigation,
  route,
}) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const isChild = route.params?.isChild;

  const [avatar, setAvatar] = useState(AVATAR_CAROUSEL[0].image);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setAvatar(AVATAR_CAROUSEL[currentIndex].image);
  }, [currentIndex]);

  const onSubmitButtonPress = useCallback(() => {
    navigation.navigate('SignUpSuccess');
    if (isChild) {
      dispatch(cacheSlice.actions.saveSignUpDataChild({ avatar }));
      dispatch(userSlice.actions.saveChild());
    } else {
      dispatch(cacheSlice.actions.saveSignUpDataParent({ avatar }));
      dispatch(userSlice.actions.registerParent());
    }
  }, [avatar, dispatch, isChild, navigation]);

  const localizationPath = useMemo(() => {
    if (isChild) {
      return 'screens.onboarding.sign_up_avatar.child';
    } else {
      return 'screens.onboarding.sign_up_avatar.parent';
    }
  }, [isChild]);

  return (
    <ImageBackground
      source={BACKGROUND_IMAGES.NO_DETAIL_DEFAULT}
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={navigation.goBack}
        />
        <BottomButtonView
          buttonTitle={t('buttons.select')}
          onSubmit={onSubmitButtonPress}
          isDisabledButton={!avatar}
          style={styles.container}>
          <ExtendedText preset="large-title" style={styles.whiteColor}>
            {t(`${localizationPath}.title`)}
          </ExtendedText>
          <Carousel
            data={AVATAR_CAROUSEL}
            preset={CarouselType.Avatar}
            setIndex={setCurrentIndex}
          />
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
