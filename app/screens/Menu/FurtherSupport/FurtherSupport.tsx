import _ from 'lodash';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View, FlatList } from 'react-native';

import { IMAGES } from '../../../assets';
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

export const FurtherSupportScreen: React.FC<IFurtherSupportScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  // TODO: change to correct function
  const renderItem = useCallback(
    ({ item }: { item: IFurtherSupportMenuItem }) => {
      return <MenuButton title={item.titleKey} onPress={_.noop} />;
    },
    [],
  );

  const keyExtractor = useSpecificKeyExtractor<IFurtherSupportMenuItem>(
    'post-thread-list-child-key',
    'titleKey',
  );

  return (
    <SafeAreaView style={generalStyles.flex}>
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        onLeftIconPress={navigation.goBack}
      />
      <View style={styles.container}>
        <ExtendedText style={styles.title}>
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
  );
};
