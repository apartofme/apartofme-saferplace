import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

import { WINDOW_COEFFICIENT } from '../../constants/window';
import { ISvgProps } from '../../utils/types';

export const RoundPlussIcon = ({ width = 120, height = 120 }: ISvgProps) => {
  return (
    <Svg
      width={width * WINDOW_COEFFICIENT}
      height={height * WINDOW_COEFFICIENT}
      viewBox="0 0 120 120"
      fill="none">
      <Circle
        opacity={0.75}
        cx={60}
        cy={60}
        r={58}
        fill="#3F1670"
        stroke="#FFB452"
        strokeWidth={4}
      />
      <Path stroke="#FFB452" strokeWidth={4} d="M59 24L59 96" />
      <Path stroke="#FFB452" strokeWidth={4} d="M24 61L96 61" />
    </Svg>
  );
};
