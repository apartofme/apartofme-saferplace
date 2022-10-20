import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View, FlatList, ImageBackground } from 'react-native';

import { BACKGROUND_IMAGES } from '../../../assets';
import { ExtendedText, MainHeader } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { MenuButton } from '../components';
import { IAboutCharmMenuScreenProps } from './AboutCharmMenu.types';
import { styles } from './AboutCharmMenu.styles';
import { ABOUT_CHARM_ITEMS } from '../AboutCharm/AboutCharm.data';
import { AboutCharmsMenuItem } from '../AboutCharm/AboutCharm.types';
import { useSpecificKeyExtractor } from '../../../hooks';
import { SVG_ICONS } from '../../../assets/svg';

const WhiteBackArrowIcon = SVG_ICONS.WhiteBackArrowIcon;

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
        <View style={styles.menuButtonContainer}>
          <MenuButton title={item.title} onPress={onMenuItemPress} />
        </View>
      );
    },
    [navigation],
  );

  const keyExtractor = useSpecificKeyExtractor<AboutCharmsMenuItem>(
    'post-thread-list-child-key',
    'type',
  );

  return (
    <ImageBackground source={BACKGROUND_IMAGES.MENU} style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={<WhiteBackArrowIcon />}
          onLeftIconPress={navigation.goBack}
        />
        <View style={styles.container}>
          <ExtendedText style={styles.title} preset="large-title">
            {t('screens.menu.about_charm_menu.title')}
          </ExtendedText>
          <ExtendedText style={styles.subtitle} preset="secondary-text">
            {t('screens.menu.about_charm_menu.description')}
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
    </ImageBackground>
  );
};
