import React from 'react';
import { ImageBackground, SafeAreaView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { IManageProfilesScreenProps } from './ManageProfiles.types';
import { styles } from './ManageProfiles.styles';
import { generalStyles } from '../../../utils/styles';
import {
  AvatarList,
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../components';
import { BACKGROUND_IMAGES } from '../../../assets';
import { useAppSelector } from '../../../hooks';
import { SVG } from '../../../assets/svg';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const ManageProfilesScreen: React.FC<IManageProfilesScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const parentData = useAppSelector(state => state.user.parent);
  const children = useAppSelector(state => state.user.children);

  return (
    <ImageBackground source={BACKGROUND_IMAGES.MENU} style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={<WhiteBackArrowIcon />}
          onLeftIconPress={navigation.goBack}
        />
        <BottomButtonView
          buttonTitle={t('buttons.done')}
          onSubmit={navigation.goBack}>
          <View style={styles.container}>
            <ExtendedText preset="large-title" style={styles.title}>
              {t('screens.menu.manage_profiles.title')}
            </ExtendedText>
            <AvatarList data={children} parent={parentData} />
          </View>
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
