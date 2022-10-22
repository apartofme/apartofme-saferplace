import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { ISvgProps } from '../../utils/types';

export const WhiteTopArrowIcon = ({ width = 15, height = 8 }: ISvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 15 8" fill="none">
      <Path
        d="M1.5 7l6-6 6 6"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
