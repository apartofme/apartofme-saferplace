import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View, FlatList } from 'react-native';

import { IMAGES } from '../../../assets';
import { ExtendedText, MainHeader } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { MenuButton } from '../components';
import { IAboutCharmMenuScreenProps } from './AboutCharmMenu.types';
import { styles } from './AboutCharmMenu.styles';
import { ABOUT_CHARM_ITEMS } from '../AboutCharm/AboutCharm.data';
import { AboutCharmsMenuItem } from '../AboutCharm/AboutCharm.types';
import { useSpecificKeyExtractor } from '../../../hooks';

export const AboutCharmMenuScreen: React.FC<IAboutCharmMenuScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const renderItem = useCallback(
    ({ item }: { item: AboutCharmsMenuItem }) => {
      const onMenuItemPress = () => {
        navigation.navigate('AboutCharm', { data: item });
      };
      return (
        <MenuButton
          key={`main-menu-${item.type}`}
          title={item.title}
          onPress={onMenuItemPress}
        />
      );
    },
    [navigation],
  );

  const keyExtractor = useSpecificKeyExtractor<AboutCharmsMenuItem>(
    'post-thread-list-child-key',
    'type',
  );

  return (
    <SafeAreaView style={generalStyles.flex}>
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        onLeftIconPress={navigation.goBack}
      />
      <View style={styles.container}>
        <ExtendedText style={styles.title}>
          {t('screens.menu.about_charm_menu.title')}
        </ExtendedText>
        <ExtendedText style={styles.subtitle}>
          {t('screens.menu.about_charm_menu.subtitle')}
        </ExtendedText>

        <FlatList
          style={styles.list}
          data={ABOUT_CHARM_ITEMS}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};
