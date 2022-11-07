import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from '../../themes/colors';
import { ISvgProps } from '../../utils/types';

export const FillPencilIcon = ({
  width = 24,
  height = 24,
  color = COLORS.BRILLIANT_WHITE,
}: ISvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M20.025 7.525l-3.475-3.45 1-1.025a1.624 1.624 0 011.225-.487c.483.008.908.179 1.275.512l1 1.025c.35.35.512.763.487 1.238-.025.475-.204.879-.537 1.212l-.975.975zm-16.2 13.8c-.317 0-.57-.1-.763-.3a1.01 1.01 0 01-.287-.725v-2.025c0-.116.03-.245.087-.387a1.02 1.02 0 01.213-.338l12.45-12.425L19 8.55 6.575 21c-.117.1-.238.18-.363.238a.907.907 0 01-.387.087h-2z"
        fill={color}
      />
    </Svg>
  );
};
