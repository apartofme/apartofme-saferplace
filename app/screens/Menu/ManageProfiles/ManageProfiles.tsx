import _ from 'lodash';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { IManageProfilesScreenProps } from './ManageProfiles.types';
import { styles } from './ManageProfiles.styles';
import { generalStyles } from '../../../utils/styles';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../components';
import { IMAGES } from '../../../assets';
import { useAppSelector } from '../../../hooks';
import { UserImageTitle } from './components';
import { AvatarsNameType } from '../../../utils/types';

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

  const childAvatar = useAppSelector(state => state.user.child?.avatar);
  const parentAvatar = useAppSelector(state => state.user.parent?.avatar);

  return (
    <SafeAreaView style={generalStyles.flex}>
      {/* //TODO: change for correct function */}
      <BottomButtonView buttonTitle={t('buttons.done')} onSubmit={_.noop}>
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={navigation.goBack}
        />
        <View style={styles.container}>
          <ExtendedText style={styles.title}>
            {t('screens.menu.manage_profiles.title')}
          </ExtendedText>
          <View style={styles.imageContainer}>
            {/* TODO: change AvatarsNameType.Tree to default avatar */}
            <UserImageTitle
              title={parentNickname}
              image={parentAvatar ?? AvatarsNameType.Tree}
              onPress={_.noop}
            />
            {/* TODO: change AvatarsNameType.Tree to default avatar */}
            <UserImageTitle
              title={childNickname}
              image={childAvatar ?? AvatarsNameType.Tree}
              onPress={_.noop}
            />
          </View>
        </View>
      </BottomButtonView>
    </SafeAreaView>
  );
};
