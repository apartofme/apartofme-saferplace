import { SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import React, { useCallback, useState } from 'react';

import {
  BottomButtonView,
  Carousel,
  CarouselType,
  ExtendedText,
  MainHeader,
} from '../../../../components';
import { IMAGES } from '../../../../assets';
import { useAppDispatch } from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { ISignUpAvatarScreenProps } from './SignUpAvatar.props';
import { cacheSlice, userSlice } from '../../../../redux/slices';
import { SING_UP_CAROUSEL } from './SignUpAvatar.data';

export const SignUpAvatarScreen: React.FC<ISignUpAvatarScreenProps> = ({
  navigation,
  route,
}) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const isChild = route.params?.isChild;

  const [avatar, setAvatar] = useState(SING_UP_CAROUSEL[0].image);

  const onSubmitButtonPress = useCallback(() => {
    if (isChild) {
      dispatch(cacheSlice.actions.saveSignUpDataChild({ avatar }));
    } else {
      dispatch(cacheSlice.actions.saveSignUpDataParent({ avatar }));
      dispatch(userSlice.actions.registerUser());
      navigation.navigate('CharmsIntroducing');
    }
  }, [avatar, dispatch, isChild, navigation]);

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
        <Carousel
          data={[...SING_UP_CAROUSEL]}
          preset={CarouselType.OnlyImage}
          setImage={setAvatar}
        />
      </BottomButtonView>
    </SafeAreaView>
  );
};
