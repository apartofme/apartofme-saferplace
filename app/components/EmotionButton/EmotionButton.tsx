import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Image, TouchableOpacity } from 'react-native';

import { ExtendedText } from '../ExtendedText';
import { EmotionButtonType } from './EmotionButton.data';
import { IEmotionButton, IEmotionButtonProps } from './EmotionButton.types';
import { styles } from './EmotionButton.styles';
import { Nullable } from '../../utils';

export const EmotionButton: React.FC<IEmotionButtonProps> = ({
  data,
  setSelected,
}) => {
  const [selectedItem, setSelectedItem] =
    useState<Nullable<EmotionButtonType>>(null);

  useEffect(() => {
    setSelected(selectedItem);
  }, [selectedItem, setSelected]);

  const renderItem = useCallback(
    ({ item }: { item: IEmotionButton }) => {
      const onSelectedPress = () => {
        setSelectedItem(item.type);
      };

      return (
        <TouchableOpacity
          onPress={onSelectedPress}
          style={[
            styles.buttonContainer,
            item.type === selectedItem && styles.activeButton,
          ]}>
          <Image source={item.image} style={styles.buttonImage} />
          <ExtendedText preset="heading">{item.title}</ExtendedText>
        </TouchableOpacity>
      );
    },
    [selectedItem],
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      numColumns={2}
      columnWrapperStyle={styles.row}
    />
  );
};
