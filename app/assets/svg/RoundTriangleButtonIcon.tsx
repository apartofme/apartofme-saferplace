import * as React from 'react';
import Svg, { Defs, G, Path, RadialGradient, Stop } from 'react-native-svg';

import { ISvgProps } from '../../utils/types';

export const RoundTriangleButtonIcon = ({
  width = 80,
  height = 80,
}: ISvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Path
        d="M39.998 80c-10.684 0-20.728-4.161-28.283-11.716S0 50.684 0 40c0-10.684 4.16-20.73 11.715-28.284C19.27 4.16 29.315 0 39.998 0S60.726 4.16 68.28 11.716C75.835 19.27 79.996 29.316 79.996 40c0 10.685-4.16 20.73-11.715 28.284C60.726 75.84 50.68 80 39.998 80z"
        fill="#FFB552"
      />
      <Path
        d="M39.998 80c-10.683 0-20.728-4.161-28.282-11.716C4.16 60.729 0 50.684 0 40c0-10.684 4.16-20.73 11.715-28.284C19.27 4.16 29.315 0 39.999 0 50.681 0 60.727 4.16 68.28 11.716 75.836 19.27 79.996 29.316 79.996 40c0 10.685-4.16 20.73-11.715 28.284C60.727 75.84 50.682 80 39.998 80zm0-77.276c-9.955 0-19.315 3.877-26.355 10.918-7.04 7.04-10.918 16.401-10.918 26.357s3.878 19.317 10.918 26.358c7.04 7.04 16.4 10.918 26.355 10.918 9.956 0 19.316-3.878 26.356-10.918 7.04-7.04 10.918-16.401 10.918-26.358 0-9.956-3.878-19.317-10.918-26.357C59.314 6.602 49.954 2.724 40 2.724z"
        fill="#FFB552"
      />
      <Path
        d="M68.877 67.674a41.663 41.663 0 001.653-1.833c-1.729.553-3.432.98-4.87 1.194-6.955 6.612-16.03 10.24-25.661 10.24-9.633 0-19.316-3.877-26.356-10.917C6.603 59.318 2.725 49.956 2.725 40c0-1.961.152-3.899.447-5.8-.675-1.652-1.29-3.344-1.688-5.053a39.968 39.968 0 00-1.269 6.67l-.005.056c-.045.431-.081.864-.111 1.298l-.009.122c-.012.185-.023.37-.033.557l-.005.09c-.01.211-.02.42-.027.632l-.004.127c-.005.169-.01.337-.013.506l-.003.171A44.17 44.17 0 000 40c0 10.684 4.16 20.73 11.715 28.284C19.27 75.84 29.315 80 39.998 80s20.728-4.16 28.283-11.716a41.88 41.88 0 00.596-.609z"
        fill="#B78036"
      />
      <Path
        d="M39.258.007c-.13.002-.26.005-.389.009l-.202.006-.375.014-.193.008A40.824 40.824 0 0036.98.11l-.126.01-.432.035-.186.017-.378.037-.192.02a35.57 35.57 0 00-.394.044c-.055.007-.108.012-.163.02a39.602 39.602 0 00-1.659.236l-.179.03-.386.067-.168.03-.454.086-.09.018a35.425 35.425 0 00-1.648.363l-.158.039c-.14.034-.278.069-.417.105-.041.01-.082.02-.123.032-.363.094-.725.194-1.085.3a46.784 46.784 0 00-.535.16l-.143.044c-.136.042-.271.085-.406.129l-.13.042c-.162.052-.323.105-.483.16l-.042.015c-.183.062-.366.127-.548.192l-.026.01-.495.181-.115.044-.413.16-.125.048c-.144.057-.288.115-.431.174l-.087.035a38.7 38.7 0 00-1.047.45l-.075.033a32.924 32.924 0 00-.957.445l-.104.05-.48.237-.018.009c-.176.088-.351.178-.526.269 1.12.453 2.235.925 3.34 1.415a37.174 37.174 0 0115.104-3.175c9.955 0 19.316 3.877 26.356 10.918 7.04 7.04 10.917 16.4 10.917 26.357 0 3.394-.45 6.72-1.324 9.907a51.758 51.758 0 002.086 2.53c.16-.49.31-.985.452-1.483l.007-.025c.14-.496.27-.996.391-1.498l.002-.01c.06-.248.117-.496.172-.746l.008-.037a39.702 39.702 0 00.433-2.292l.003-.02a39 39 0 00.107-.723l.01-.065c.033-.24.063-.48.092-.72l.012-.104c.056-.48.104-.963.143-1.447l.01-.13a38.548 38.548 0 00.086-1.458l.005-.112c.009-.233.016-.466.02-.7l.004-.149c.004-.239.007-.478.007-.718 0-10.684-4.16-20.73-11.715-28.284C60.73 4.163 50.685.002 40.002.002c-.188 0-.376.001-.563.004l-.177.003-.004-.002z"
        fill="#FFDBB0"
      />
      <Path
        d="M39.909 75.546c19.68 0 35.633-15.954 35.633-35.635 0-19.68-15.954-35.635-35.633-35.635-19.68 0-35.633 15.955-35.633 35.635S20.23 75.546 39.91 75.546z"
        fill="url(#paint0_radial_497_74110)"
      />
      <G filter="url(#filter0_i_497_74110)">
        <Path
          d="M35.3 53.4c-.5.333-1.008.35-1.525.05-.517-.3-.775-.75-.775-1.35V29.6c0-.6.258-1.05.775-1.35.517-.3 1.025-.284 1.525.05L53 39.6c.467.3.7.716.7 1.25 0 .533-.233.95-.7 1.25L35.3 53.4z"
          fill="#69471A"
        />
      </G>
      <Defs>
        <RadialGradient
          id="paint0_radial_497_74110"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 35.6347 -35.6328 0 39.909 39.911)">
          <Stop offset={0.0833333} stopColor="#fff" />
          <Stop offset={0.552083} stopColor="#FFDBB0" />
          <Stop offset={1} stopColor="#FFB552" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
};