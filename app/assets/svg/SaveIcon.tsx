import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { ISvgProps } from '../../utils/types';

export const SaveIcon = ({ width = 48, height = 48 }: ISvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 48 48" fill="none">
      <Path
        d="M23.813 28.94c-.18 0-.35-.035-.509-.103a1.41 1.41 0 01-.441-.305l-5.33-5.33a1.264 1.264 0 01-.39-.967c.011-.374.153-.685.424-.934.272-.271.589-.407.95-.407.363 0 .68.136.951.407l2.987 3.022V13.358c0-.385.13-.707.39-.968.261-.26.584-.39.968-.39.385 0 .707.13.968.39.26.26.39.583.39.968v10.965l3.021-3.022c.272-.271.589-.407.95-.407.363 0 .68.136.951.407.272.25.408.56.408.934 0 .373-.136.696-.408.967l-5.33 5.33a1.357 1.357 0 01-.458.305c-.17.068-.333.102-.492.102zM14.716 36a2.615 2.615 0 01-1.918-.798A2.615 2.615 0 0112 33.284V28.94c0-.384.13-.707.39-.967s.583-.39.968-.39.707.13.967.39.39.571.39.933v4.38h18.196v-4.38c0-.362.13-.673.39-.933s.583-.39.968-.39c.362 0 .673.13.933.39s.39.571.39.933v4.38c0 .746-.265 1.385-.797 1.917S33.635 36 32.91 36H14.716z"
        fill="#FFB552"
      />
    </Svg>
  );
};