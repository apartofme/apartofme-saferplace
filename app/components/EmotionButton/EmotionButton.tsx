import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Image, TouchableOpacity } from 'react-native';
import _ from 'lodash';

import { ExtendedText } from '../ExtendedText';
import { EmotionButtonType } from './EmotionButton.data';
import { IEmotionButton, IEmotionButtonProps } from './EmotionButton.types';
import { styles } from './EmotionButton.styles';
import { Nullable } from '../../utils';
import { useAppSelector } from '../../hooks';

export const EmotionButton: React.FC<IEmotionButtonProps> = ({
  data,
  setSelected,
}) => {
  const completedEmotions = useAppSelector(
    state => state.cache.emotions.completed,
  );
  const [selectedItem, setSelectedItem] =
    useState<Nullable<EmotionButtonType>>(null);
  const [emotions, setEmotions] = useState<IEmotionButton[]>(data);

  useEffect(() => {
    setSelected(selectedItem);
  }, [selectedItem, setSelected]);

  useEffect(() => {
    const tempEmotions = _.map(data, item => {
      if (_.indexOf(completedEmotions, item.type) === -1) {
        return item;
      }
    });

    setEmotions(_.compact(tempEmotions));
  }, [completedEmotions, data]);

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
      data={emotions}
      renderItem={renderItem}
      numColumns={2}
      columnWrapperStyle={styles.row}
    />
  );
};
