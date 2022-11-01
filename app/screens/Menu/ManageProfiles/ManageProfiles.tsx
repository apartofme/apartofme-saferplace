import _ from 'lodash';
import React, { useCallback } from 'react';
import { ImageBackground, SafeAreaView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { IManageProfilesScreenProps } from './ManageProfiles.types';
import { styles } from './ManageProfiles.styles';
import { generalStyles } from '../../../utils/styles';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
  UserImageTitle,
} from '../../../components';
import { BACKGROUND_IMAGES } from '../../../assets';
import { useAppSelector } from '../../../hooks';
import { AvatarsNameType, UserType } from '../../../utils/types';
import { SVG } from '../../../assets/svg';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const ManageProfilesScreen: React.FC<IManageProfilesScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const parentNickname = useAppSelector(
    state => state.user.parent?.nickname,
  ) as string;
  const childNickname = useAppSelector(
    state => state.user.child?.nickname,
  ) as string;

  const childAvatar =
    useAppSelector(state => state.user.child?.avatar) ??
    `Circle${AvatarsNameType.Fox}`;
  const parentAvatar =
    useAppSelector(state => state.user.parent?.avatar) ??
    `Circle${AvatarsNameType.Rabbit}`;

  const goToEditProfile = useCallback(
    (type: UserType) => {
      navigation.navigate('EditProfile', { data: { type } });
    },
    [navigation],
  );

  return (
    <ImageBackground source={BACKGROUND_IMAGES.MENU} style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={<WhiteBackArrowIcon />}
          onLeftIconPress={navigation.goBack}
        />
        <BottomButtonView buttonTitle={t('buttons.done')} onSubmit={_.noop}>
          <View style={styles.container}>
            <ExtendedText preset="large-title" style={styles.title}>
              {t('screens.menu.manage_profiles.title')}
            </ExtendedText>
            <View style={styles.imageContainer}>
              <UserImageTitle
                title={parentNickname}
                image={parentAvatar}
                onPress={() => goToEditProfile(UserType.Parent)}
              />
              <UserImageTitle
                title={childNickname}
                image={childAvatar}
                onPress={() => goToEditProfile(UserType.Child)}
              />
            </View>
          </View>
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
