import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import CommunitySlider from '@react-native-community/slider';

import { generalStyles } from '../../utils/styles';
import { styles } from './EmojiSlider.styles';
import { EmojiType, IEmojiSlider } from './EmojiSlider.types';

export const EmojiSlider: React.FC<IEmojiSlider> = ({ setEmoji }) => {
  const [sliderValue, setSliderValue] = useState(0);

  const getEmojiImage = useCallback(() => {
    switch (sliderValue) {
      case 0:
        setEmoji(EmojiType.VeryStressed);
        return styles.grayBackground;
      case 1:
        setEmoji(EmojiType.Neutral);
        return styles.greenBackground;
      case 2:
        setEmoji(EmojiType.Ok);
        return styles.yellowBackground;
      case 3:
        setEmoji(EmojiType.Relaxed);
        return styles.orangeBackground;
      case 4:
        setEmoji(EmojiType.SuperRelaxed);
        return styles.redBackground;
      default:
        break;
    }
  }, [setEmoji, sliderValue]);

  return (
    <View style={generalStyles.centered}>
      <View style={[styles.indicator, getEmojiImage()]} />

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
