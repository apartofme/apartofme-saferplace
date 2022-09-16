import _ from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, View } from 'react-native';

import { useSpecificKeyExtractor } from '../../hooks';
import { generalStyles } from '../../utils/styles';
import { RadioButton } from '../RadioButton/RadioButton';
import {
  IRadioButtonListItem,
  RadioButtonListType,
} from './RadioButtonList.data';
import { IRadioButtonListProps } from './RadioButtonList.types';

export const RadioButtonList: React.FC<IRadioButtonListProps> = ({
  data,
  type,
  setSelected,
  radioButtonStyle,
}) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const { t } = useTranslation();

  useEffect(() => {
    setSelected(selectedItems);
  }, [selectedItems, setSelected]);

  const renderItem = useCallback(
    ({ item }: { item: IRadioButtonListItem }) => {
      const onSelectedPress = () => {
        if (type === RadioButtonListType.Single) {
          setSelectedItems([item.id]);
        } else {
          const deleteType = _.find(
            selectedItems,
            deleteItem => deleteItem === item.id,
          );
          if (deleteType) {
            setSelectedItems(_.without(selectedItems, deleteType));
          } else {
            setSelectedItems([...selectedItems, item.id]);
          }
        }
      };
      return (
        <RadioButton
          title={t(item.title)}
          isActive={
            type === RadioButtonListType.Single
              ? selectedItems[0] === item.id
              : !!_.find(selectedItems, findItem => findItem === item.id)
          }
          onPress={onSelectedPress}
          imageSource={item.image}
          style={radioButtonStyle}
        />
      );
    },
    [selectedItems, setSelectedItems, type, t, radioButtonStyle],
  );

  const keyExtractor = useSpecificKeyExtractor<IRadioButtonListItem>(
    'post-thread-list-child-key',
    'id',
  );

  return (
    <View style={generalStyles.flex}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};
