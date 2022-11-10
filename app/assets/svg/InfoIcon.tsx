import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { ISvgProps } from '../../utils/types';

export const InfoIcon = ({ width = 25, height = 24 }: ISvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 25 24" fill="none">
      <Path
        d="M12.586 17.986c.305 0 .563-.105.773-.315.21-.21.315-.478.315-.802v-4.955c0-.286-.105-.534-.315-.745a1.018 1.018 0 00-.744-.315c-.325 0-.592.105-.802.316-.21.21-.315.467-.315.773v4.954c0 .306.105.564.315.774.21.21.467.315.773.315zm-.086-9.08c.363 0 .659-.109.888-.328.229-.22.344-.511.344-.874 0-.382-.115-.687-.344-.916-.23-.23-.525-.344-.888-.344-.382 0-.683.114-.902.344-.22.229-.33.534-.33.916 0 .363.115.654.344.874.23.22.525.329.888.329zM12.5 24c-1.68 0-3.26-.305-4.74-.916-1.48-.611-2.754-1.451-3.823-2.52-1.07-1.07-1.91-2.344-2.52-3.824C.804 15.26.5 13.68.5 12c0-1.68.305-3.255.916-4.726a11.684 11.684 0 012.535-3.823A11.684 11.684 0 017.774.916C9.244.306 10.82 0 12.5 0c1.68 0 3.255.305 4.726.916a11.683 11.683 0 013.823 2.535 11.72 11.72 0 012.535 3.81c.61 1.46.916 3.04.916 4.739 0 1.68-.305 3.255-.916 4.726a11.681 11.681 0 01-2.535 3.823 11.681 11.681 0 01-3.823 2.535c-1.47.61-3.046.916-4.726.916z"
        fill="#FFB452"
      />
    </Svg>
  );
};