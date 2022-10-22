import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View, FlatList, ImageBackground } from 'react-native';

import { ExtendedText, MainHeader } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { MenuButton } from '../components';
import { ISettingsPrivacyScreenProps } from './SettingsPrivacy.types';
import { styles } from './SettingsPrivacy.styles';
import { useSpecificKeyExtractor } from '../../../hooks';
import {
  ISettingsPrivacyMenuItem,
  SettingsPrivacyRouteType,
  SETTINGS_PRIVACY_MENU,
} from './SettingsPrivacy.data';
import { SVG } from '../../../assets/svg';
import { BACKGROUND_IMAGES } from '../../../assets';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const SettingsPrivacyScreen: React.FC<ISettingsPrivacyScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const renderItem = useCallback(
    ({ item }: { item: ISettingsPrivacyMenuItem }) => {
      const onMenuItemPress = () => {
        switch (item.type) {
          case SettingsPrivacyRouteType.OnConditionsScreen:
            if (item.data) {
              navigation.navigate('Conditions', { data: item.data });
            }
            break;
          default:
            navigation.navigate(item.route);
            break;
        }
      };
      return (
        <View style={styles.menuButtonContainer}>
          <MenuButton title={item.titleKey} onPress={onMenuItemPress} />
        </View>
      );
    },
    [navigation],
  );

  const keyExtractor = useSpecificKeyExtractor<ISettingsPrivacyMenuItem>(
    'post-thread-list-child-key',
    'route',
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
            {t('screens.menu.settings_privacy.title')}
          </ExtendedText>

          <FlatList
            style={styles.list}
            data={SETTINGS_PRIVACY_MENU}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
