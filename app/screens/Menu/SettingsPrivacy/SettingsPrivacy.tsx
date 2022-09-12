import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View, FlatList } from 'react-native';

import { IMAGES } from '../../../assets';
import { ExtendedText, MainHeader } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { MenuButton } from '../components';
import { ISettingsPrivacyScreenProps } from './SettingsPrivacy.types';
import { styles } from './SettingsPrivacy.styles';
import { useSpecificKeyExtractor } from '../../../hooks';
import {
  ISettingsPrivacyMenuItem,
  SETTINGS_PRIVACY_MENU_ITEM,
} from './SettingsPrivacy.data';

export const SettingsPrivacyScreen: React.FC<ISettingsPrivacyScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const renderItem = useCallback(
    ({ item }: { item: ISettingsPrivacyMenuItem }) => {
      const onMenuItemPress = () => {
        if (item.data) {
          navigation.navigate('Conditions', { data: item.data });
        } else {
          navigation.navigate(item.route);
        }
      };
      return <MenuButton title={item.titleKey} onPress={onMenuItemPress} />;
    },
    [navigation],
  );

  const keyExtractor = useSpecificKeyExtractor<ISettingsPrivacyMenuItem>(
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
          {t('screens.menu.settings_privacy_screen.title')}
        </ExtendedText>

        <FlatList
          style={styles.list}
          data={SETTINGS_PRIVACY_MENU_ITEM}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};
