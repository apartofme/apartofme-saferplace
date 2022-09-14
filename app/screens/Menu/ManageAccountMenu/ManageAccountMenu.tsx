import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View, FlatList } from 'react-native';

import { IMAGES } from '../../../assets';
import { ExtendedText, MainHeader } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { MenuButton } from '../components';
import { IManageAccountMenuScreenProps } from './ManageAccountMenu.types';
import { styles } from './ManageAccountMenu.styles';
import { useSpecificKeyExtractor } from '../../../hooks';
import { MANAGE_ACCOUNT_MENU_ITEM } from './ManageAccountMenu.data';
import { IButtonsMenuItem } from '../components/MenuButton/MenuButton.data';

export const ManageAccountMenuScreen: React.FC<IManageAccountMenuScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();

    const renderItem = useCallback(
      ({ item }: { item: IButtonsMenuItem }) => {
        const onMenuItemPress = () => {
          navigation.navigate(item.route);
        };
        return <MenuButton title={item.titleKey} onPress={onMenuItemPress} />;
      },
      [navigation],
    );

    const keyExtractor = useSpecificKeyExtractor<IButtonsMenuItem>(
      'post-thread-list-child-key',
      'route',
    );

    return (
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={navigation.goBack}
        />
        <View style={styles.container}>
          <ExtendedText style={styles.title}>
            {t('screens.menu.manage_account_menu.title')}
          </ExtendedText>

          <FlatList
            style={styles.list}
            data={MANAGE_ACCOUNT_MENU_ITEM}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    );
  };
