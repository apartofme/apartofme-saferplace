import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View, FlatList, ImageBackground } from 'react-native';

import { ExtendedText, MainHeader } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { MenuButton } from '../components';
import { IHelpSupportScreenProps } from './HelpSupport.types';
import { styles } from './HelpSupport.styles';
import { useSpecificKeyExtractor } from '../../../hooks';
import { IButtonsMenuItem } from '../components/MenuButton/MenuButton.data';
import { HELP_SUPPORT_MENU_ITEMS } from './HelpSupport.data';
import { SVG_ICONS } from '../../../assets/svg';
import { BACKGROUND_IMAGES } from '../../../assets';

const WhiteBackArrowIcon = SVG_ICONS.WhiteBackArrowIcon;

export const HelpSupportScreen: React.FC<IHelpSupportScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const renderItem = useCallback(
    ({ item }: { item: IButtonsMenuItem }) => {
      const onMenuItemPress = () => {
        navigation.navigate(item.route);
      };
      return (
        <View style={styles.menuButtonContainer}>
          <MenuButton title={item.titleKey} onPress={onMenuItemPress} />
        </View>
      );
    },
    [navigation],
  );

  const keyExtractor = useSpecificKeyExtractor<IButtonsMenuItem>(
    'post-thread-list-child-key',
    'route',
  );

  return (
    <ImageBackground
      source={BACKGROUND_IMAGES.MENU_BACKGROUND}
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={<WhiteBackArrowIcon />}
          onLeftIconPress={navigation.goBack}
        />
        <View style={styles.container}>
          <ExtendedText style={styles.title} preset="large-title">
            {t('screens.menu.help_support.title')}
          </ExtendedText>

          <FlatList
            style={styles.list}
            data={HELP_SUPPORT_MENU_ITEMS}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
