import _ from 'lodash';
import React, { useCallback, useState } from 'react';
import { FlatList, View } from 'react-native';

import { RadioButton } from '../RadioButton/RadioButton';
import { IRadioButtonItem, RadioButtonListType } from './RadioButtonList.data';
import { IRadioButtonListProps } from './RadioButtonList.props';
import { styles } from './RadioButtonList.styles';

export const RadioButtonList: React.FC<IRadioButtonListProps> = ({
  data,
  type,
}) => {
  const [selectedItem, setSelectedItem] = useState<string>();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const renderItem = useCallback(
    ({ item }: { item: IRadioButtonItem }) => {
      const onPressSelectedItem = () => {
        setSelectedItem(item.title);
      };
      const onPressSelectedItems = () => {
        const deleteType = _.find<string>(
          selectedItems,
          deleteItem => deleteItem === item.title,
        );
        if (deleteType) {
          setSelectedItems(_.without<string>(selectedItems, deleteType));
        } else {
          setSelectedItems([...selectedItems, item.title]);
        }
      };
      return (
        <RadioButton
          title={item.title}
          isActive={
            type === RadioButtonListType.Single
              ? selectedItem === item.title
              : !!_.find(selectedItems, findItem => findItem === item.title)
          }
          onPress={
            type === RadioButtonListType.Single
              ? onPressSelectedItem
              : onPressSelectedItems
          }
        />
      );
    },
    [setSelectedItem, selectedItem, selectedItems, setSelectedItems, type],
  );

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};
