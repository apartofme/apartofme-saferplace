import _ from 'lodash';
import { useNetInfo } from '@react-native-community/netinfo';
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
import { questSlice, userSlice } from '../../../redux/slices';
import { generalStyles } from '../../../utils/styles';
import { MenuButton } from '../components';
import { MAIN_MENU_ITEMS } from './MainMenu.data';
import { IMainMenuScreenProps } from './MainMenu.types';
import { styles } from './MainMenu.styles';
import { AVATARS_SVG, SVG } from '../../../assets/svg';
import { SaveIcon } from '../../../assets/svg/SaveIcon';
import { SwitchUserIcon } from '../../../assets/svg/SwitchUserIcon';
import { showInternetErrorAlert, showProgressAlert } from '../../../utils';

const WhiteCrossIcon = SVG.WhiteCrossIcon;
const LogOutIcon = SVG.ExitIcon;

export const MainMenuScreen: React.FC<IMainMenuScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { isConnected } = useNetInfo();

  const { parent, child, children } = useAppSelector(state => state.user);

  const AvatarIcon = parent?.avatar && AVATARS_SVG[parent.avatar];

  const onMenuItemPress = useCallback(
    (item: NavigationRouteNames) => {
      navigation.navigate(item);
    },
    [navigation],
  );

  const onLogoutPress = useCallback(() => {
    dispatch(userSlice.actions.logout());
  }, [dispatch]);

  const onSaveProgressPress = useCallback(() => {
    if (isConnected) {
      dispatch(questSlice.actions.saveProgress());
      showProgressAlert(t('alert.save_progress.title'));
      return;
    }
    showInternetErrorAlert(
      t('errors.network.title'),
      t('errors.network.description'),
    );
  }, [dispatch, isConnected, t]);

  const onSwitchUserPress = useCallback(() => {
    navigation.navigate('SelectUser');
  }, [navigation]);

  return (
    <ImageBackground source={BACKGROUND_IMAGES.MENU} style={generalStyles.flex}>
      <View style={styles.topContainer}>
        <SafeAreaView>
          <MainHeader
            rightIcon={<WhiteCrossIcon />}
            onRightIconPress={navigation.goBack}
          />
          <View style={styles.avatar}>
            {AvatarIcon && <AvatarIcon width={100} height={100} />}
          </View>
          <View style={styles.topContentContainer}>
            <View style={generalStyles.row}>
              <ExtendedText preset="title" style={styles.title}>
                {t('screens.menu.main_menu.title')}
              </ExtendedText>
              <ExtendedText preset="title" style={styles.parentName}>
                {` ${parent?.nickname}`}
              </ExtendedText>
            </View>
            <View style={generalStyles.row}>
              <ExtendedText preset="secondary-text" style={styles.subtitle}>
                {t('screens.menu.main_menu.description')}
              </ExtendedText>
              <ExtendedText preset="secondary-text" style={styles.childName}>
                {` ${child?.nickname}`}
              </ExtendedText>
            </View>
            <View style={styles.line} />

            <TouchableOpacity
              onPress={onSaveProgressPress}
              style={[
                generalStyles.row,
                generalStyles.jcSpaceBtw,
                generalStyles.aiCenter,
              ]}>
              <ExtendedText
                preset="body-bold"
                style={generalStyles.primaryOrange}>
                {t('screens.menu.main_menu.save_progress')}
              </ExtendedText>

              <SaveIcon />
            </TouchableOpacity>
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

          {children.length > 1 ? (
            <View style={[generalStyles.row, generalStyles.jcSpaceA]}>
              <TouchableOpacity
                style={styles.logOutContainer}
                onPress={onLogoutPress}>
                <LogOutIcon />
                <ExtendedText preset="body-bold" style={styles.logOutTitle}>
                  {t('screens.menu.main_menu.log_out')}
                </ExtendedText>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.logOutContainer}
                onPress={onSwitchUserPress}>
                <SwitchUserIcon />
                <ExtendedText preset="body-bold" style={styles.logOutTitle}>
                  {t('screens.menu.main_menu.switch_user')}
                </ExtendedText>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              style={styles.logOutContainer}
              onPress={onLogoutPress}>
              <LogOutIcon />
              <ExtendedText preset="body-bold" style={styles.logOutTitle}>
                {t('screens.menu.main_menu.log_out')}
              </ExtendedText>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
