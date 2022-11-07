import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

import { WINDOW_COEFFICIENT } from '../../constants/window';

import { ISvgProps } from '../../utils/types';

export const ExitIcon = ({ width = 48, height = 48 }: ISvgProps) => {
  return (
    <Svg
      width={width * WINDOW_COEFFICIENT}
      height={height * WINDOW_COEFFICIENT}
      viewBox="0 0 48 48"
      fill="none">
      <G clipPath="url(#clip0_1365_268205)">
        <G clipPath="url(#clip1_1365_268205)">
          <Path
            d="M29.22 29.475a1.366 1.366 0 01-.382-.955c0-.36.138-.68.414-.955l2.228-2.196h-9.517c-.36 0-.669-.133-.923-.398a1.31 1.31 0 01-.382-.94c0-.381.127-.7.382-.954.254-.255.562-.382.923-.382h9.453l-2.291-2.324a1.09 1.09 0 01-.366-.875c.01-.35.154-.663.43-.939.233-.233.54-.345.922-.334.382.01.711.132.987.366l4.52 4.552c.106.127.196.27.27.43a1.154 1.154 0 010 .986c-.074.16-.164.292-.27.398l-4.488 4.552a1.204 1.204 0 01-.923.366c-.36-.01-.69-.144-.987-.398zm-14.578 6.557c-.722 0-1.342-.26-1.862-.78S12 34.112 12 33.39V14.674c0-.722.26-1.348.78-1.878.52-.53 1.14-.796 1.862-.796h8.085c.382 0 .7.133.955.398.254.265.382.578.382.939 0 .382-.128.7-.382.955a1.296 1.296 0 01-.955.382h-8.085V33.39h8.085c.382 0 .7.127.955.382.254.255.382.573.382.955 0 .36-.128.668-.382.923a1.296 1.296 0 01-.955.382h-8.085z"
            fill="#FFB552"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_1365_268205">
          <Path fill="#fff" d="M0 0H48V48H0z" />
        </ClipPath>
        <ClipPath id="clip1_1365_268205">
          <Path fill="#fff" d="M0 0H48V48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
