import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView } from 'react-native';

import {
  AvatarList,
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../../../components';
import { generalStyles } from '../../../../../utils/styles';
import { ISelectUserScreenProps } from './SelectUser.types';
import { SVG } from '../../../../../assets/svg';
import { styles } from './SelectUser.styles';
import { BACKGROUND_IMAGES } from '../../../../../assets';
import { useAppSelector } from '../../../../../hooks';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const SelectUserScreen: React.FC<ISelectUserScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const children = useAppSelector(state => state.user.children);

  const goToManageProfile = useCallback(() => {
    navigation.navigate('EditProfileStack');
  }, [navigation]);

  return (
    <ImageBackground source={BACKGROUND_IMAGES.MENU} style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={<WhiteBackArrowIcon />}
          onLeftIconPress={navigation.goBack}
        />
        <BottomButtonView
          buttonTitle={t('buttons.manage_profiles')}
          onSubmit={goToManageProfile}
          preset="border"
          style={styles.container}>
          <ExtendedText preset="large-title" style={styles.title}>
            {t('screens.onboarding.select_user.title')}
          </ExtendedText>
          {/* // TODO: change to children */}
          <AvatarList data={children} />
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
