import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { ExtendedText } from '../ExtendedText';
import { EmotionButtonType } from './EmotionButton.data';
import { IEmotionButton, IEmotionButtonProps } from './EmotionButton.types';
import { styles } from './EmotionButton.styles';
import { Nullable } from '../../utils';
import { EMOTION_BUTTON_SVG } from '../../assets/svg';
import { generalStyles } from '../../utils/styles';

export const EmotionButton: React.FC<IEmotionButtonProps> = ({
  data,
  setSelected,
}) => {
  const { t } = useTranslation();
  const [selectedItem, setSelectedItem] =
    useState<Nullable<EmotionButtonType>>(null);

  useEffect(() => {
    setSelected(selectedItem);
  }, [selectedItem, setSelected]);

  const renderItem = useCallback(
    ({ item }: { item: IEmotionButton; index: number }) => {
      const Icon = EMOTION_BUTTON_SVG[item.iconKey];

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
          <View style={item.type !== selectedItem && styles.image}>
            <Icon />
          </View>
          <ExtendedText
            preset="heading"
            style={[
              styles.title,
              item.type === selectedItem && generalStyles.grey,
            ]}>
            {t(item.title)}
          </ExtendedText>
        </TouchableOpacity>
      );
    },
    [selectedItem, t],
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
};
