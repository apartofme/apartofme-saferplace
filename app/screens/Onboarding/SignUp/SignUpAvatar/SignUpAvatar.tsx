import { SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import React, { useCallback, useMemo, useState } from 'react';

import {
  AvatarCarousel,
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../../components';
import { IMAGES } from '../../../../assets';
import { useAppDispatch } from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { ISignUpAvatarScreenProps } from './SignUpAvatar.types';
import { cacheSlice, userSlice } from '../../../../redux/slices';
import { SING_UP_CAROUSEL } from './SignUpAvatar.data';
import { styles } from './SignUpAvatar.styles';

export const SignUpAvatarScreen: React.FC<ISignUpAvatarScreenProps> = ({
  navigation,
  route,
}) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const isChild = route.params?.isChild;

  // TODO: rework carousel
  const [avatar, setAvatar] = useState(SING_UP_CAROUSEL[0].image);

  const onSubmitButtonPress = useCallback(() => {
    navigation.navigate('SignUpSuccess');
    if (isChild) {
      dispatch(
        cacheSlice.actions.saveSignUpDataChild({ avatar: avatar as string }),
      );
      dispatch(userSlice.actions.saveChild());
    } else {
      dispatch(
        cacheSlice.actions.saveSignUpDataParent({ avatar: avatar as string }),
      );
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
        <AvatarCarousel
          data={[...SING_UP_CAROUSEL]}
          setImage={setAvatar}
          style={styles.carousel}
        />
      </BottomButtonView>
    </SafeAreaView>
  );
};
