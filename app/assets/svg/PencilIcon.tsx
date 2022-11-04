import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { ISvgProps } from '../../utils/types';

export const PencilIcon = ({ width = 24, height = 24 }: ISvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M1.318 14.69h.966l9.73-9.67-.967-.96-9.73 9.67v.96zM14.803 4.082L11.99 1.288l.923-.917c.249-.247.556-.371.922-.371s.674.124.923.371l.966.96c.249.248.374.553.374.917s-.125.67-.374.917l-.922.917zm-.923.917L2.811 16H0v-2.794L11.07 2.205l2.81 2.794zm-2.35-.459l-.483-.48.966.96-.483-.48z"
        fill="#fff"
      />
    </Svg>
  );
};
