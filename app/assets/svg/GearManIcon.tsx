import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { ISvgProps } from '../../utils/types';

export const GearManIcon = ({ width = 24, height = 24 }: ISvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M9.744 9.629c-1.418 0-2.578-.45-3.478-1.351-.9-.9-1.351-2.06-1.351-3.478 0-1.399.45-2.548 1.35-3.45C7.167.45 8.326 0 9.745 0c1.418 0 2.577.45 3.478 1.35.9.901 1.35 2.051 1.35 3.45 0 1.418-.45 2.577-1.35 3.478-.901.9-2.06 1.35-3.478 1.35zM1.207 19.976c-.345 0-.632-.11-.862-.33A1.123 1.123 0 010 18.797v-2.099c0-.785.21-1.485.632-2.098a3.818 3.818 0 011.581-1.35c1.437-.652 2.779-1.117 4.024-1.395 1.246-.278 2.415-.416 3.507-.416.115 0 .273.004.474.014.201.01.36.005.474-.014a8.708 8.708 0 00-.517 1.25 9.527 9.527 0 00-.374 1.423c-.096.421-.13.982-.1 1.681.028.7.12 1.298.273 1.796.095.499.268.954.517 1.366.25.412.498.752.747 1.02H1.208zm17.39-2.73c.69 0 1.235-.206 1.638-.618.402-.412.603-.954.603-1.624 0-.671-.2-1.212-.603-1.624-.403-.412-.949-.618-1.639-.618-.67 0-1.207.206-1.61.618-.402.412-.603.953-.603 1.624 0 .67.201 1.212.604 1.624.402.412.939.617 1.61.617zm-1.294 1.839a3.483 3.483 0 01-.905-.374 3.69 3.69 0 01-.762-.574l-1.207.287a.458.458 0 01-.403-.014.928.928 0 01-.316-.245l-.402-.776a.465.465 0 01-.1-.402.693.693 0 01.186-.374l1.063-1.006c-.057-.115-.081-.311-.071-.589.01-.278.033-.484.072-.618l-1.064-1.006a.606.606 0 01-.172-.36.546.546 0 01.086-.387l.402-.805a.69.69 0 01.316-.216.832.832 0 01.403-.043l1.207.259c.21-.173.465-.345.762-.517.297-.173.598-.307.905-.403l.23-1.466a.613.613 0 01.187-.402.596.596 0 01.417-.144h.977c.153 0 .278.048.373.144a.8.8 0 01.202.402l.23 1.466c.268.096.555.23.862.403.306.172.565.345.776.517l1.236-.259a.764.764 0 01.718.288l.431.776c.058.095.072.21.044.345a1.087 1.087 0 01-.187.402L22.735 14.4c.077.153.11.36.1.618-.009.259-.042.455-.1.59l1.064 1.005a.62.62 0 01.172.374c.02.153 0 .278-.057.373l-.46.777a.553.553 0 01-.273.258.474.474 0 01-.36.029l-1.264-.287c-.21.21-.47.397-.776.56a6.545 6.545 0 01-.862.388l-.23 1.466a.785.785 0 01-.202.374.505.505 0 01-.373.143h-.977a.638.638 0 01-.417-.13c-.106-.085-.168-.215-.187-.387l-.23-1.466z"
        fill="#fff"
      />
    </Svg>
  );
};