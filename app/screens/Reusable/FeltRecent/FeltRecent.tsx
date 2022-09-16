import _ from 'lodash';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, SafeAreaView, View } from 'react-native';

import { IMAGES } from '../../../assets';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { FeltRecentItem } from './components';
import { FELT_RECENT_DATA } from './FeltRecent.data';
import { styles } from './FeltRecent.styles';
import { IFeltRecentItem, IFeltRecentScreenProps } from './FeltRecent.types';

export const FeltRecentScreen: React.FC<IFeltRecentScreenProps> = ({
  navigation,
  route,
}) => {
  const { titleKey, subtitleKey } = route.params.data;

  const { t } = useTranslation();

  const [activeItems, setActiveItems] = useState(['']);

  const renderItem = useCallback(
    ({ item }: { item: IFeltRecentItem }) => {
      const onPress = () => {
        const deleteType = _.find(
          activeItems,
          deleteItem => deleteItem === item.titleKey,
        );
        if (deleteType) {
          setActiveItems(_.without(activeItems, deleteType));
        } else {
          setActiveItems([...activeItems, item.titleKey]);
        }
      };
      return (
        <FeltRecentItem
          titleKey={item.titleKey}
          onPress={onPress}
          isActive={
            !!_.find(activeItems, findItem => findItem === item.titleKey)
          }
        />
      );
    },
    [activeItems],
  );

  return (
    <SafeAreaView style={generalStyles.flex}>
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        onLeftIconPress={navigation.goBack}
      />
      <BottomButtonView buttonTitle={t('buttons.next')} onSubmit={_.noop}>
        <View style={styles.container}>
          <ExtendedText style={styles.title}>{t(titleKey)}</ExtendedText>
          <ExtendedText style={styles.subtitle}>{t(subtitleKey)}</ExtendedText>
        </View>
        <FlatList
          data={FELT_RECENT_DATA}
          renderItem={renderItem}
          style={styles.list}
          numColumns={2}
        />
      </BottomButtonView>
    </SafeAreaView>
  );
};
