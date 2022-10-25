import { ImageBackground, SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import {
  AVATAR_CAROUSEL,
  BottomButtonView,
  Carousel,
  CarouselType,
  MainHeader,
} from '../../../../components';
import { BACKGROUND_IMAGES } from '../../../../assets';
import { useAppDispatch, useParsedJSXTextNickname } from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { ISignUpAvatarScreenProps } from './SignUpAvatar.types';
import { cacheSlice, userSlice } from '../../../../redux/slices';
import { styles } from './SignUpAvatar.styles';
import { SVG } from '../../../../assets/svg';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

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

  const Title = useParsedJSXTextNickname({
    text: t(
      isChild
        ? 'screens.onboarding.sign_up_avatar.child.title'
        : 'screens.onboarding.sign_up_avatar.parent.title',
    ),
    textHasNickname: isChild ?? false,
    style: styles.whiteColor,
    preset: 'large-title',
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
          <Title />
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
