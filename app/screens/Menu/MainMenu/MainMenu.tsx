import _ from 'lodash';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';

import { BACKGROUND_IMAGES } from '../../../assets';
import { ExtendedText, MainHeader } from '../../../components';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { NavigationRouteNames } from '../../../navigation/stacks/mergedParams';
import { userSlice } from '../../../redux/slices';
import { generalStyles } from '../../../utils/styles';
import { MenuButton } from '../components';
import { MAIN_MENU_ITEMS } from './MainMenu.data';
import { IMainMenuScreenProps } from './MainMenu.types';
import { styles } from './MainMenu.styles';
import { AVATARS_SVG, SVG } from '../../../assets/svg';

const WhiteCrossIcon = SVG.WhiteCrossIcon;
const LogOutIcon = SVG.ExitIcon;

export const MainMenuScreen: React.FC<IMainMenuScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const parentNickname = useAppSelector(
    state => state.user.parent?.nickname ?? '',
  );
  const childNickname = useAppSelector(
    state => state.user.child?.nickname ?? '',
  );
  const avatar = useAppSelector(state => state.user.parent?.avatar);

  const AvatarIcon = avatar && AVATARS_SVG[avatar];

  const onMenuItemPress = useCallback(
    (item: NavigationRouteNames) => {
      navigation.navigate(item);
    },
    [navigation],
  );

  const onLogoutPress = useCallback(() => {
    dispatch(userSlice.actions.logout());
  }, [dispatch]);

  return (
    <ImageBackground source={BACKGROUND_IMAGES.MENU} style={generalStyles.flex}>
      <View style={styles.topContainer}>
        <SafeAreaView>
          <MainHeader
            rightIcon={<WhiteCrossIcon />}
            onRightIconPress={navigation.goBack}
          />
          <View style={styles.topContentContainer}>
            <View style={styles.avatar}>
              {AvatarIcon && <AvatarIcon width={80} height={80} />}
            </View>

            <View style={generalStyles.row}>
              <ExtendedText preset="title" style={styles.title}>
                {t('screens.menu.main_menu.title')}
              </ExtendedText>
              <ExtendedText preset="title" style={styles.parentName}>
                {` ${parentNickname}`}
              </ExtendedText>
            </View>
            <View style={generalStyles.row}>
              <ExtendedText preset="secondary-text" style={styles.subtitle}>
                {t('screens.menu.main_menu.description')}
              </ExtendedText>
              <ExtendedText preset="secondary-text" style={styles.childName}>
                {` ${childNickname}`}
              </ExtendedText>
            </View>
            <View style={styles.line} />
          </View>
        </SafeAreaView>
      </View>
      <SafeAreaView style={generalStyles.flex}>
        <View style={styles.container}>
          <ScrollView
            style={styles.menuItemsContainer}
            showsVerticalScrollIndicator={false}>
            {_.map(MAIN_MENU_ITEMS, (item, index) => (
              <View
                key={`main-menu-${item.route}`}
                style={[
                  styles.menuButtonContainer,
                  index === 1 && styles.menuButtonLineContainer,
                ]}>
                <MenuButton
                  key={`${index} ${item.route}`}
                  title={t(item.titleKey)}
                  onPress={() => onMenuItemPress(item.route)}
                  IconSvgComponent={item.icon}
                />
              </View>
            ))}
          </ScrollView>

          <TouchableOpacity
            style={styles.logOutContainer}
            onPress={onLogoutPress}>
            <LogOutIcon />
            <ExtendedText preset="body-bold" style={styles.logOutTitle}>
              {t('screens.menu.main_menu.log_out')}
            </ExtendedText>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
