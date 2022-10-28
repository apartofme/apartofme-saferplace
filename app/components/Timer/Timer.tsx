import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import {
  CircularProgressBase,
  ProgressRef,
} from 'react-native-circular-progress-indicator';

import { SECOND } from './Timer.data';
import { ITimerProps } from './Timer.types';
import { styles } from './Timer.styles';
import { WINDOW_COEFFICIENT } from '../../constants/window';

export const Timer: React.FC<ITimerProps> = ({
  duration,
  isStart = false,
  maxValue = 100,
  onAnimationComplete,
  style,
}) => {
  const timerRef = useRef<ProgressRef>(null);

  useEffect(() => {
    if (isStart) {
      timerRef.current?.play();
    } else {
      timerRef.current?.pause();
    }
  }, [isStart]);

  return (
    // TODO: change to real styles
    <View style={style}>
      <CircularProgressBase
        ref={timerRef}
        value={maxValue}
        radius={104 * WINDOW_COEFFICIENT}
        activeStrokeColor="#AA82E0"
        activeStrokeWidth={5}
        inActiveStrokeWidth={0}
        duration={SECOND * duration}
        onAnimationComplete={onAnimationComplete}>
        <View style={styles.circle} />
      </CircularProgressBase>
    </View>
  );
};
