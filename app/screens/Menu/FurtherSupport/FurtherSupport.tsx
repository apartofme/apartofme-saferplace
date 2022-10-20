import _ from 'lodash';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View, FlatList, ImageBackground } from 'react-native';

import { ExtendedText, MainHeader } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { MenuButton } from '../components';
import { IFurtherSupportScreenProps } from './FurtherSupport.types';
import { styles } from './FurtherSupport.styles';
import { useSpecificKeyExtractor } from '../../../hooks';
import {
  FURTHER_SUPPORT_MENU_ITEMS,
  IFurtherSupportMenuItem,
} from './FurtherSupport.data';
import { SVG_ICONS } from '../../../assets/svg';
import { BACKGROUND_IMAGES } from '../../../assets';

const WhiteBackArrowIcon = SVG_ICONS.WhiteBackArrowIcon;

export const FurtherSupportScreen: React.FC<IFurtherSupportScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const renderItem = useCallback(
    ({ item }: { item: IFurtherSupportMenuItem }) => {
      return (
        <View style={styles.menuButtonContainer}>
          <MenuButton title={item.titleKey} onPress={_.noop} />
        </View>
      );
    },
    [],
  );

  const keyExtractor = useSpecificKeyExtractor<IFurtherSupportMenuItem>(
    'post-thread-list-child-key',
    'titleKey',
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
            {t('screens.menu.further_support.title')}
          </ExtendedText>

          <FlatList
            style={styles.list}
            data={FURTHER_SUPPORT_MENU_ITEMS}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
