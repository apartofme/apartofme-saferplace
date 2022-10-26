import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { ISvgProps } from '../../utils/types';

export const SkipNextIcon = ({ width = 30, height = 28 }: ISvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 30 28" fill="none">
      <Path
        d="M27.55 27.652c-.6 0-1.1-.209-1.5-.625-.4-.417-.6-.925-.6-1.525V2.452c0-.567.2-1.059.6-1.475.4-.417.917-.625 1.55-.625.567 0 1.05.208 1.45.625.4.416.6.908.6 1.475v23.05c0 .6-.208 1.108-.625 1.525-.417.416-.908.625-1.475.625zm-23.9-2.3c-.733.5-1.467.55-2.2.15-.733-.4-1.1-1-1.1-1.8v-19.4c0-.834.375-1.442 1.125-1.825.75-.384 1.475-.342 2.175.125l13.95 9.65c.633.433.95 1.016.95 1.75 0 .733-.317 1.316-.95 1.75l-13.95 9.6z"
        fill="#FFB452"
      />
    </Svg>
  );
};
