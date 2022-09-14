import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';

import { ExtendedText } from '../ExtendedText';
import { EmojiButtonType, IEmojiButton } from './EmojiButtons.data';
import { IEmojiButtonsProps } from './EmojiButtons.types';
import { styles } from './EmojiButtons.styles';

export const EmojiButtons: React.FC<IEmojiButtonsProps> = ({
  data,
  setSelected,
}) => {
  const [selectedItem, setSelectedItem] = useState<EmojiButtonType>(
    EmojiButtonType.Neutral,
  );

  useEffect(() => {
    setSelected(selectedItem);
  }, [selectedItem, setSelected]);

  const getEmojiImage = useCallback(() => {
    switch (selectedItem) {
      case EmojiButtonType.VeryStressed:
        return styles.grayBackground;
      case EmojiButtonType.Neutral:
        return styles.greenBackground;
      case EmojiButtonType.Ok:
        return styles.yellowBackground;
      case EmojiButtonType.Stressed:
        return styles.orangeBackground;
      case EmojiButtonType.Worried:
        return styles.redBackground;
      case EmojiButtonType.VeryOk:
        return styles.purpleBackground;
    }
  }, [selectedItem]);

  const renderItem = useCallback(
    ({ item }: { item: IEmojiButton }) => {
      const onSelectedPress = () => {
        setSelectedItem(item.type);
      };

      return (
        <TouchableOpacity
          onPress={onSelectedPress}
          style={item.type === selectedItem && styles.activeButton}>
          <ExtendedText> {item.title}</ExtendedText>
        </TouchableOpacity>
      );
    },
    [selectedItem],
  );

  return (
    <View>
      <View style={[styles.indicator, getEmojiImage()]} />
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};
