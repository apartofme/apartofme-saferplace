import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';

import { ExtendedText } from '../ExtendedText';
import { EmojiButtonType, IEmojiButton } from './EmojiButtons.data';
import { IEmojiButtonsProps } from './EmojiButtons.props';
import { styles } from './EmojiButtons.styles';

export const EmojiButtons: React.FC<IEmojiButtonsProps> = ({
  data,
  setSelected,
}) => {
  const [selectedItem, setSelectedItem] = useState<EmojiButtonType>(
    EmojiButtonType.neutral,
  );

  useEffect(() => {
    setSelected(selectedItem);
  }, [selectedItem, setSelected]);

  const getEmojiImage = useCallback(() => {
    switch (selectedItem) {
      case EmojiButtonType.veryStressed:
        return styles.grayBackground;
      case EmojiButtonType.neutral:
        return styles.greenBackground;
      case EmojiButtonType.ok:
        return styles.yellowBackground;
      case EmojiButtonType.stressed:
        return styles.orangeBackground;
      case EmojiButtonType.worried:
        return styles.redBackground;
      case EmojiButtonType.veryOk:
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
