import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import CommunitySlider from '@react-native-community/slider';

import { generalStyles } from '../../utils/styles';
import { styles } from './EmojiSlider.styles';

export const EmojiSlider: React.FC = ({}) => {
  const [sliderValue, setSliderValue] = useState(0);

  const getEmojiImage = useCallback(() => {
    switch (sliderValue) {
      case 0:
        return styles.grayBackground;
      case 1:
        return styles.greenBackground;
      case 2:
        return styles.yellowBackground;
      case 3:
        return styles.orangeBackground;
      case 4:
        return styles.redBackground;
      default:
        break;
    }
  }, [sliderValue]);

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