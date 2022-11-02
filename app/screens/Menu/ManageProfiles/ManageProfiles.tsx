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
} from '../../../components';
import { BACKGROUND_IMAGES } from '../../../assets';
import { useAppSelector } from '../../../hooks';
import { UserImageTitle } from './components';
import { SVG } from '../../../assets/svg';
import { UserType } from '../../../utils/types';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const ManageProfilesScreen: React.FC<IManageProfilesScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const { parent, child } = useAppSelector(state => state.user);

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
                title={parent?.nickname ?? ''}
                image={parent?.avatar ?? 'CircleRabbitIcon'}
                onPress={() => goToEditProfile(UserType.Parent)}
              />
              <UserImageTitle
                title={child?.nickname ?? ''}
                image={child?.avatar ?? 'CircleBearIcon'}
                onPress={() => goToEditProfile(UserType.Child)}
              />
            </View>
          </View>
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
