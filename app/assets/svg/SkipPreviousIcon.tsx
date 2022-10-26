import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { ISvgProps } from '../../utils/types';

export const SkipPreviousIcon = ({ width = 30, height = 28 }: ISvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 30 28" fill="none">
      <Path
        d="M2.45 27.652c-.6 0-1.1-.209-1.5-.625-.4-.417-.6-.925-.6-1.525V2.452c0-.567.208-1.059.625-1.475A2.075 2.075 0 012.5.352c.567 0 1.05.208 1.45.625.4.416.6.908.6 1.475v23.05c0 .6-.2 1.108-.6 1.525-.4.416-.9.625-1.5.625zm23.95-2.3l-13.95-9.6c-.667-.434-1-1.017-1-1.75 0-.734.333-1.317 1-1.75l13.95-9.65c.667-.467 1.375-.509 2.125-.125.75.383 1.125.991 1.125 1.825v19.4c0 .8-.367 1.4-1.1 1.8-.733.4-1.45.35-2.15-.15z"
        fill="#FFB452"
      />
    </Svg>
  );
};
