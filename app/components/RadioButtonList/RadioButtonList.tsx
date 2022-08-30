import _ from 'lodash';
import React, { useCallback, useState } from 'react';
import { FlatList, View } from 'react-native';

import { useSpecificKeyExtractor } from '../../hooks';
import { generalStyles } from '../../utils/styles';
import { RadioButton } from '../RadioButton/RadioButton';
import {
  IRadioButtonListItem,
  RadioButtonListType,
} from './RadioButtonList.data';
import { IRadioButtonListProps } from './RadioButtonList.props';

export const RadioButtonList: React.FC<IRadioButtonListProps> = ({
  data,
  type,
}) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const renderItem = useCallback(
    ({ item }: { item: IRadioButtonListItem }) => {
      const onSelectedPress = () => {
        if (type === RadioButtonListType.Single) {
          setSelectedItems([item.title]);
        } else {
          const deleteType = _.find(
            selectedItems,
            deleteItem => deleteItem === item.title,
          );
          if (deleteType) {
            setSelectedItems(_.without(selectedItems, deleteType));
          } else {
            setSelectedItems([...selectedItems, item.title]);
          }
        }
      };
      return (
        <RadioButton
          title={item.title}
          isActive={
            type === RadioButtonListType.Single
              ? selectedItems[0] === item.title
              : !!_.find(selectedItems, findItem => findItem === item.title)
          }
          onPress={onSelectedPress}
        />
      );
    },
    [selectedItems, setSelectedItems, type],
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
