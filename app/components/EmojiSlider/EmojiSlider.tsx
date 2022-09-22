import React, { useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import CommunitySlider from '@react-native-community/slider';

import { generalStyles } from '../../utils/styles';
import { styles } from './EmojiSlider.styles';
import { EmojiType, IEmojiSlider } from './EmojiSlider.types';

export const EmojiSlider: React.FC<IEmojiSlider> = ({ setEmojiKey }) => {
  const [sliderValue, setSliderValue] = useState(EmojiType.NO);

  const getEmojiImage = useMemo(() => {
    switch (sliderValue) {
      case EmojiType.NO:
        return styles.grayBackground;
      case EmojiType.SuperRelaxed:
        return styles.greenBackground;
      case EmojiType.Relaxed:
        return styles.yellowBackground;
      case EmojiType.Ok:
        return styles.orangeBackground;
      case EmojiType.VeryStressed:
        return styles.redBackground;
    }
  }, [sliderValue]);

  useEffect(() => {
    switch (sliderValue) {
      case EmojiType.NO:
        setEmojiKey('--');
        break;
      case EmojiType.SuperRelaxed:
        setEmojiKey('labels.emoji.super_relaxed');
        break;
      case EmojiType.Relaxed:
        setEmojiKey('labels.emoji.relaxed');
        break;
      case EmojiType.Ok:
        setEmojiKey('labels.emoji.ok');
        break;
      case EmojiType.VeryStressed:
        setEmojiKey('labels.emoji.very_stressed');
        break;
    }
  }, [setEmojiKey, sliderValue]);

  return (
    <View style={generalStyles.centered}>
      <View style={[styles.indicator, getEmojiImage]} />

      <CommunitySlider
        style={styles.slider}
        minimumValue={0}
        maximumValue={4}
        onValueChange={value => setSliderValue(Math.floor(value))}
        step={0}
      />
    </View>
  );
};
