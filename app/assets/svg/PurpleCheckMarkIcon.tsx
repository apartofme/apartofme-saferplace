import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { ISvgProps } from '../../utils/types';

export const PurpleCheckMarkIcon = ({ width = 18, height = 12 }: ISvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 18 12" fill="none">
      <Path
        d="M6.45 11.85c-.133 0-.263-.025-.388-.075a.698.698 0 01-.312-.25L1.175 7c-.2-.2-.3-.454-.3-.762 0-.309.1-.563.3-.763.2-.2.446-.3.738-.3.291 0 .545.1.762.3l3.775 3.8L15.325.4c.217-.2.467-.304.75-.312a.986.986 0 01.75.312c.2.217.3.471.3.763 0 .291-.1.537-.3.737l-9.65 9.625a.87.87 0 01-.337.25c-.125.05-.255.075-.388.075z"
        fill="#3F1670"
      />
    </Svg>
  );
};
