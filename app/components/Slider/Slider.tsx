import React from 'react';
import { View } from 'react-native';
import CommunitySlider from '@react-native-community/slider';

export const Slider: React.FC = ({}) => {
  return (
    <View>
      <CommunitySlider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
    </View>
  );
};
