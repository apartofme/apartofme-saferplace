import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { ISvgProps } from '../../utils/types';

export const WhiteBottomArrowIcon = ({
  width = 17,
  height = 10,
}: ISvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 17 10" fill="none">
      <Path
        d="M8.474 9.416c-.178 0-.351-.033-.518-.1a.934.934 0 01-.418-.334L.885 2.396a1.306 1.306 0 01-.384-1.003A1.42 1.42 0 01.919.39c.29-.29.618-.418.986-.385.368.034.685.173.953.418L8.474 6.04l5.65-5.617c.245-.267.568-.407.97-.418.4-.011.735.128 1.002.418.29.268.424.602.402 1.003-.023.401-.168.724-.435.97l-6.62 6.586a1.165 1.165 0 01-.45.334c-.168.067-.34.1-.519.1z"
        fill="#fff"
      />
    </Svg>
  );
};
