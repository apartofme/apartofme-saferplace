import * as React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { ISvgProps } from '../../../utils/types';
import { styles } from './ErrorInfoIcon.styles';

export const ErrorInfoIcon = ({ width = 22, height = 19 }: ISvgProps) => {
  return (
    <View style={styles.icon}>
      <Svg width={width} height={height} viewBox="0 0 22 19" fill="none">
        <Path
          d="M0 19L11 0l11 19H0zm2.6-1.5h16.8L11 3 2.6 17.5zm8.5-1.425a.728.728 0 00.75-.75.728.728 0 00-.75-.75.728.728 0 00-.75.75.728.728 0 00.75.75zm-.75-2.775h1.5V7.7h-1.5v5.6z"
          fill="#fff"
        />
      </Svg>
    </View>
  );
};
