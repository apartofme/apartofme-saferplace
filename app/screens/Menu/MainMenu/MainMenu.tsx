import _ from 'lodash';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';

import { IMAGES } from '../../../assets';
import { ExtendedText, MainHeader } from '../../../components';
import { useAppDispatch } from '../../../hooks';
import { userSlice } from '../../../redux/slices';
import { generalStyles } from '../../../utils/styles';
import { MenuButton } from '../components';
import { MAIN_MENU_ITEMS } from './MainMenu.data';
import { IMainMenuScreenProps } from './MainMenu.props';
import { styles } from './MainMenu.styles';

export const MainMenuScreen: React.FC<IMainMenuScreenProps> = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const onLogoutPress = useCallback(() => {
    dispatch(userSlice.actions.logout());
  }, [dispatch]);

  return (
    <SafeAreaView style={generalStyles.whFlex}>
      <MainHeader
        // TODO: change to correct icon
        rightIcon={IMAGES.WHITE_BACK_ARROW}
      />
      <View style={styles.container}>
        <View>
          <ExtendedText style={styles.title}>
            {t('screens.menu.main_menu.title')}
          </ExtendedText>
          <ExtendedText style={styles.subtitle}>
            {t('screens.menu.main_menu.subtitle')}
          </ExtendedText>
          <ExtendedText style={styles.userActionTitile}>
            {t('screens.menu.main_menu.user_add_action')}
          </ExtendedText>
          <View style={styles.menuItemsContainer}>
            {_.map(MAIN_MENU_ITEMS, item => (
              <MenuButton
                key={`main-menu-${item.type}`}
                title={t(item.title)}
                onPress={_.noop}
                icon={item.icon}
              />
            ))}
          </View>
        </View>

        <TouchableOpacity
          style={styles.logOutContainer}
          onPress={onLogoutPress}>
          <ExtendedText>Log out</ExtendedText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
