import { SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import React, { useCallback, useMemo, useState } from 'react';

import {
  AvatarCarousel,
  AVATAR_CAROUSEL,
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../../components';
import { IMAGES } from '../../../../assets';
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
        <ExtendedText preset="large-title">
          {t(`${localizationPath}.title`)}
        </ExtendedText>
        <AvatarCarousel setImage={setAvatar} style={styles.carousel} />
      </BottomButtonView>
    </SafeAreaView>
  );
};
