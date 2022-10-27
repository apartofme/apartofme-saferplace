import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';

import { ExtendedText } from '../ExtendedText';
import { EmotionButtonType } from './EmotionButton.data';
import { IEmotionButton, IEmotionButtonProps } from './EmotionButton.types';
import { styles } from './EmotionButton.styles';
import { Nullable } from '../../utils';
import { EMOTION_BUTTON_SVG } from '../../assets/svg';

export const EmotionButton: React.FC<IEmotionButtonProps> = ({
  data,
  setSelected,
}) => {
  const [selectedItem, setSelectedItem] =
    useState<Nullable<EmotionButtonType>>(null);

  useEffect(() => {
    setSelected(selectedItem);
  }, [selectedItem, setSelected]);

  const [emotions, setEmotions] = useState(
    data.length % 2 === 0 ? data : [...data, data[0]],
  );

  useEffect(() => {
    setEmotions(data.length % 2 === 0 ? data : [...data, data[0]]);
  }, [data]);

  const renderItem = useCallback(
    ({ item, index }: { item: IEmotionButton; index: number }) => {
      const Icon = EMOTION_BUTTON_SVG[item.iconKey];

      const onSelectedPress = () => {
        setSelectedItem(item.type);
      };

      if (data.length % 2 !== 0 && index === emotions.length - 1) {
        return <View style={styles.emptyContainer} />;
      }
      return (
        <TouchableOpacity
          onPress={onSelectedPress}
          style={[
            styles.buttonContainer,
            item.type === selectedItem && styles.activeButton,
          ]}>
          <Icon />
          <ExtendedText preset="heading" style={styles.title}>
            {item.title}
          </ExtendedText>
        </TouchableOpacity>
      );
    },
    [data.length, emotions, selectedItem],
  );

  return (
    <FlatList
      data={emotions}
      renderItem={renderItem}
      numColumns={2}
      columnWrapperStyle={styles.row}
      showsVerticalScrollIndicator={false}
    />
  );
};
