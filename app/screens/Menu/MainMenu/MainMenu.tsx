import _ from 'lodash';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';

import { ExtendedText, MainHeader } from '../../../components';
import { useAppDispatch } from '../../../hooks';
import { userSlice } from '../../../redux/slices';
import { generalStyles } from '../../../utils/styles';
import { MenuButton } from '../components';
import {
  IMainMenuItem,
  MainMenuItemType,
  MAIN_MENU_ITEMS,
} from './MainMenu.data';
import { IMainMenuScreenProps } from './MainMenu.props';

export const MainMenuScreen: React.FC<IMainMenuScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const onMenuItemPress = useCallback(
    (item: IMainMenuItem) => {
      switch (item.type) {
        case MainMenuItemType.Logout:
          dispatch(userSlice.actions.logout());
          break;
        default:
          navigation.navigate(item.type);
          break;
      }
    },
    [dispatch, navigation],
  );

  return (
    <SafeAreaView style={generalStyles.whFlex}>
      <MainHeader
        // TODO: add right icon
        title={t('screens.menu.main-menu.header')}
      />
      <ExtendedText>{t('screens.menu.main_menu.title')}</ExtendedText>
      <View>
        {_.map(MAIN_MENU_ITEMS, item => (
          <MenuButton
            key={`main-menu-${item.type}`}
            title={t(item.title)}
            onPress={() => onMenuItemPress(item)}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};
