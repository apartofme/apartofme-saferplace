import React from 'react';
import { View } from 'react-native';
import { CircularProgressBase } from 'react-native-circular-progress-indicator';

import { ITimerProps } from './Timer.props';
import { styles } from './Timer.styles';

export const Timer: React.FC<ITimerProps> = ({ value, style }) => {
  return (
    // TODO: change to real styles
    <View style={style}>
      <CircularProgressBase
        value={value}
        radius={104}
        activeStrokeColor="#AA82E0"
        activeStrokeWidth={5}
        inActiveStrokeWidth={0}>
        <View style={styles.circle} />
      </CircularProgressBase>
    </View>
  );
};
