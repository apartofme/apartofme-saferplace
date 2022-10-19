import _ from 'lodash';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';

import { IMAGES } from '../../../assets';
import { ExtendedText, MainHeader } from '../../../components';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { NavigationRouteNames } from '../../../navigation/stacks/mergedParams';
import { userSlice } from '../../../redux/slices';
import { generalStyles } from '../../../utils/styles';
import { MenuButton } from '../components';
import { MAIN_MENU_ITEMS } from './MainMenu.data';
import { IMainMenuScreenProps } from './MainMenu.types';
import { styles } from './MainMenu.styles';
import { AvatarsNameType } from '../../../utils/types';

export const MainMenuScreen: React.FC<IMainMenuScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const parentNickname = useAppSelector(state => state.user.parent?.nickname);
  const childNickname = useAppSelector(state => state.user.child?.nickname);
  const avatar = useAppSelector(state => state.user.parent?.avatar);

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
    <ImageBackground source={IMAGES.MENU_BACKGROUND} style={generalStyles.flex}>
      <View style={styles.topContainer}>
        <SafeAreaView>
          <MainHeader
            rightIcon={IMAGES.WHITE_CROSS}
            onRightIconPress={navigation.goBack}
          />
          <View style={styles.topContentContainer}>
            <Image
              source={IMAGES[avatar ?? AvatarsNameType.Tree]}
              style={styles.avatar}
            />
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
          <View style={styles.menuItemsContainer}>
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
                  icon={item.icon}
                />
              </View>
            ))}
          </View>

          <TouchableOpacity
            style={styles.logOutContainer}
            onPress={onLogoutPress}>
            <Image source={IMAGES.EXIT_ICON} />
            <ExtendedText preset="body-bold" style={styles.logOutTitle}>
              Log out
            </ExtendedText>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
