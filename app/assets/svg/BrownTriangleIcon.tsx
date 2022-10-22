import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { ISvgProps } from '../../utils/types';

export const BrownTriangleIcon = ({ width = 17, height = 20 }: ISvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 17 20" fill="none">
      <Path
        d="M2.278 19.604c-.387.258-.78.27-1.179.039-.4-.232-.599-.58-.599-1.044V1.21C.5.743.7.396 1.099.164c.4-.232.792-.22 1.179.038l13.68 8.735c.362.232.542.554.542.966 0 .412-.18.734-.541.966L2.278 19.604z"
        fill="#69471A"
      />
    </Svg>
  );
};
