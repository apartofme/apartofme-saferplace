import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

import { ISvgProps } from '../../../utils/types';

export const StressedPlaceOnBodyIcon = ({
  width = 240,
  height = 240,
}: ISvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 240 240" fill="none">
      <G clipPath="url(#clip0_2913_351394)">
        <Path
          d="M120 240c-32.052 0-62.188-12.482-84.853-35.147C12.482 182.188 0 152.052 0 120c0-32.052 12.482-62.188 35.147-84.853C57.812 12.482 87.947 0 120 0c32.052 0 62.188 12.482 84.853 35.147C227.518 57.812 240 87.945 240 120c0 32.055-12.482 62.188-35.147 84.853C182.188 227.518 152.052 240 120 240z"
          fill="#FFB452"
        />
        <Path
          d="M120 240c-32.052 0-62.188-12.482-84.853-35.147C12.482 182.188 0 152.052 0 120c0-32.052 12.482-62.188 35.147-84.853C57.812 12.482 87.947 0 120 0c32.052 0 62.188 12.482 84.853 35.147C227.518 57.812 240 87.945 240 120c0 32.055-12.482 62.188-35.147 84.853C182.188 227.518 152.052 240 120 240zm0-231.826c-29.869 0-57.951 11.633-79.072 32.754C19.807 62.049 8.174 90.129 8.174 120c0 29.871 11.633 57.951 32.754 79.072C62.049 220.193 90.13 231.826 120 231.826s57.951-11.633 79.072-32.754c21.121-21.121 32.754-49.203 32.754-79.072s-11.633-57.951-32.754-79.072C177.951 19.807 149.869 8.174 120 8.174z"
          fill="#FFB452"
        />
        <Path
          d="M206.642 203.023a125.074 125.074 0 004.958-5.501c-5.187 1.658-10.296 2.942-14.61 3.582-20.868 19.835-48.092 30.722-76.99 30.722-28.898 0-57.951-11.633-79.072-32.754C19.807 177.951 8.174 149.869 8.174 120c0-5.885.454-11.696 1.339-17.402-2.025-4.954-3.869-10.03-5.064-15.158a119.905 119.905 0 00-3.805 20.01l-.018.17a119.447 119.447 0 00-.333 3.893c-.008.121-.015.245-.024.366-.037.556-.07 1.112-.1 1.67l-.015.273c-.03.631-.06 1.26-.081 1.893-.005.127-.007.253-.011.381-.016.507-.029 1.012-.04 1.52-.002.17-.007.339-.009.511-.009.625-.015 1.249-.015 1.873 0 32.052 12.482 62.188 35.147 84.853C57.81 227.518 87.945 240 119.998 240c32.052 0 62.188-12.482 84.853-35.147a123.424 123.424 0 001.791-1.828v-.002z"
          fill="#B68036"
        />
        <Path
          d="M117.779.022c-.391.007-.779.015-1.167.027-.203.006-.404.01-.606.017l-1.125.042-.58.024a120.233 120.233 0 00-3.353.201l-.379.03c-.433.034-.865.07-1.295.107-.188.015-.373.033-.56.05a174.055 174.055 0 00-1.71.17c-.394.042-.787.086-1.182.133l-.487.057c-1.11.135-2.217.285-3.32.45-.152.022-.304.046-.456.07-.402.062-.803.126-1.202.19-.179.029-.358.06-.536.09-.389.067-.775.133-1.16.201l-.504.09c-.454.085-.906.17-1.36.259l-.272.053a105.839 105.839 0 00-3.295.701l-.454.106a103.966 103.966 0 00-1.67.4 129.674 129.674 0 00-1.619.41c-1.09.284-2.175.584-3.255.9a140.35 140.35 0 00-1.606.48l-.428.133c-.408.125-.814.255-1.22.386l-.39.125c-.483.16-.966.318-1.447.483-.042.016-.084.029-.126.042-.549.188-1.098.382-1.645.578-.027.009-.053.02-.077.029-.497.178-.99.36-1.485.545l-.346.132c-.412.157-.825.315-1.237.476l-.377.148c-.433.17-.863.344-1.293.52l-.26.107c-1.055.434-2.102.882-3.143 1.347l-.225.102a98.556 98.556 0 00-1.646.754c-.41.192-.818.384-1.224.58l-.31.15a108.958 108.958 0 00-3.076 1.544 330.053 330.053 0 0110.023 4.246c14.083-6.244 29.445-9.526 45.313-9.526 29.868 0 57.951 11.632 79.072 32.754 21.121 21.12 32.753 49.203 32.753 79.072 0 10.183-1.352 20.157-3.972 29.721a155.444 155.444 0 006.26 7.591c.481-1.473.931-2.957 1.354-4.451l.022-.075c.419-1.488.812-2.986 1.173-4.492l.007-.029c.179-.746.351-1.491.516-2.241l.024-.11c.322-1.474.618-2.956.885-4.445l.04-.22c.13-.735.255-1.471.372-2.21l.009-.06c.115-.721.221-1.445.322-2.17l.029-.197c.099-.716.19-1.438.276-2.157l.037-.313a122.142 122.142 0 00.604-6.853c.007-.095.011-.189.016-.286.037-.653.068-1.308.097-1.966.004-.112.011-.222.015-.335.027-.699.047-1.398.062-2.1.002-.15.007-.297.009-.447.013-.717.022-1.436.022-2.155 0-32.053-12.482-62.188-35.147-84.853C182.188 12.482 152.052 0 120 0c-.565 0-1.127.004-1.69.013-.176.002-.355.007-.531.01z"
          fill="#FFDAAF"
        />
        <Path
          d="M120 227.269c59.243 0 107.269-48.026 107.269-107.269S179.243 12.73 120 12.73 12.731 60.757 12.731 120c0 59.243 48.026 107.269 107.269 107.269z"
          fill="#3F1670"
        />
        <Path
          d="M137.615 66.927c9.573-9.573 9.573-25.094 0-34.667s-25.094-9.573-34.667 0-9.573 25.094 0 34.667 25.094 9.573 34.667 0zM172.146 147.165c-.79-.499-2.585-1.855-3.046-2.942-.461-1.088-1.758-3.234-3.942-4.745-2.183-1.513-2.353-1.31-3.105-3.688-.752-2.377-4.337-16.709-4.337-16.709s-4.316-17.95-6.8-28.21c-2.483-10.261-13.752-12.672-14.067-12.765-3.178-.89-8.174-.624-9.268-.666h-12.837c-1.096.042-6.09-.225-9.268.666-.316.095-11.584 2.504-14.068 12.764-2.483 10.261-6.8 28.211-6.8 28.211s-3.584 14.332-4.336 16.709c-.752 2.378-.924 2.175-3.106 3.688-2.183 1.513-3.478 3.657-3.941 4.745-.461 1.087-2.256 2.443-3.046 2.942-.79.498-.693 1.632.567 2.294 1.26.664 3.716-1.952 3.716-1.952s-4.841 8.983-3.24 10.049c.598.397 1.171.139 1.652-.34-.633 1.297-1.045 2.803-.028 3.47.948.619 2.022-.331 2.878-1.478-.413 1.085-.45 2.17.787 2.521 1.61.459 2.746-1.18 3.41-2.616-.3 1.127-.361 2.311.748 2.199 2.078-.21 3.225-5.177 3.487-6.094.26-.916 1.542-2.876 2.526-5.797.983-2.92.558-4.64.558-4.64l12.389-39.589c.549.375.847.979.917 1.983-.313 3.716-.82 8.774-1.42 14.394-1.127 11.074-2.466 20.444-3.18 26.553.641.221 1.29.433 1.94.638-.048 3.778-1.444 53.312-1.451 53.363-.007.044-.011.088-.018.128a8.239 8.239 0 01-.04.242l-.006.014a5.883 5.883 0 01-.188.269c-.297.397-.886 1.087-1.42 1.294a8.113 8.113 0 01-.598.203c-3.454 1.048-9.982 1.127-12.166 3.026-1.603 1.394-2.126 2.985-1.97 4.33a4.429 4.429 0 00.132.651c.043.139.091.273.146.406a3.41 3.41 0 001.123 1.431c1.176.852 11.249 2.876 18.357 2.85h.049c3.231-.011 5.849-.448 6.74-1.61 2.852-3.719 3.424-9.297 3.424-9.297s6.844-53.729 10.267-53.729a.644.644 0 00.09-.007c.009 0 .018-.004.027-.007.02-.004.039-.006.057-.013.21 0 .417.007.626.007h.195c.209 0 .419-.005.626-.007l.057.013c.009 0 .018.005.027.007a.682.682 0 00.09.007c3.423 0 10.267 53.729 10.267 53.729s.572 5.578 3.424 9.297c.891 1.162 3.509 1.597 6.74 1.61h.049c7.106.026 17.182-1.998 18.357-2.85a3.432 3.432 0 001.123-1.431 3.889 3.889 0 00.278-1.057c.154-1.345-.366-2.936-1.97-4.33-2.184-1.899-8.714-1.98-12.166-3.026a9.266 9.266 0 01-.598-.203c-.534-.205-1.123-.897-1.42-1.294a5.365 5.365 0 01-.188-.269.074.074 0 00-.006-.014c-.007-.033-.031-.194-.04-.242-.007-.04-.011-.084-.018-.128-.006-.051-1.403-49.585-1.451-53.363a69.893 69.893 0 001.941-.638c-.715-6.109-2.054-15.479-3.181-26.553-.597-5.62-1.107-10.678-1.42-14.394.068-1.004.366-1.608.917-1.983l12.389 39.589s-.425 1.72.559 4.64c.983 2.921 2.265 4.879 2.525 5.797.26.915 1.407 5.884 3.487 6.094 1.11.11 1.048-1.072.748-2.199.664 1.436 1.797 3.075 3.41 2.616 1.235-.351 1.2-1.436.787-2.521.856 1.147 1.93 2.1 2.878 1.478 1.017-.664.603-2.171-.028-3.47.483.479 1.054.739 1.652.34 1.601-1.066-3.24-10.049-3.24-10.049s2.459 2.614 3.716 1.952c1.26-.664 1.357-1.796.567-2.294h-.004z"
          fill="#FC2DB2"
        />
        <Path
          d="M144.438 148.762c.483-.152-14.111 3.07-22.082 3.697.518.417 1.098 1.877 1.716 4.067l20.475-3.132c-.062-2.393-.1-4.052-.109-4.632zM172.646 148.019a2.577 2.577 0 00-.831-.305c-.47-.084-.955-.026-1.429-.088-1.447-.194-2.491-1.431-3.388-2.583-.435 2.898 5.342 10.003 3.143 11.586-.622.448-3.778-5.476-4.039-6.133-.046.831 2.72 6.35 2.894 7.163.174.814-.382 1.926-1.182 1.703-.421-.117-.66-.549-.854-.942-.75-1.526-2.461-4.815-3.209-6.341.759 2.038 3.174 7.266 1.994 8.075-1.18.812-2.642-1.076-3.275-2.486-.633-1.411-.898-3.008-1.824-4.248.584 1.987 2.154 5.422 1.25 6.079-.904.655-2.093-2.526-2.673-4.078-1.299-3.47-2.614-7.016-2.711-10.72-.033-1.224.071-2.457-.123-3.663-.177-1.105-.591-2.155-.997-3.196a247.199 247.199 0 01-9.654-30.476c-.51-2.057-1.981-5.408-2.996-5.401-1.014.006-.308 3.408-.046 3.229l12.389 39.589s-.426 1.72.558 4.641c.984 2.92 2.265 4.878 2.526 5.796.26.915 1.407 5.885 3.487 6.094 1.109.11 1.047-1.072.747-2.199.664 1.436 1.798 3.075 3.41 2.616 1.235-.351 1.2-1.436.788-2.521.856 1.147 1.93 2.1 2.878 1.478 1.017-.664.602-2.171-.029-3.47.483.479 1.055.739 1.652.34 1.602-1.065-3.24-10.049-3.24-10.049s2.46 2.614 3.717 1.952c.745-.393 1.081-.948 1.067-1.442zM97.902 148.762c-.483-.152 14.111 3.07 22.083 3.697-.519.417-1.099 1.877-1.716 4.067-6.825-1.043-13.651-2.087-20.475-3.132.061-2.393.099-4.052.108-4.632zM69.694 148.019a2.59 2.59 0 01.831-.305c.47-.084.955-.026 1.43-.088 1.446-.194 2.49-1.431 3.387-2.583.435 2.898-5.342 10.003-3.143 11.586.622.448 3.779-5.476 4.039-6.133.046.831-2.72 6.35-2.894 7.163-.174.814.382 1.926 1.182 1.703.422-.117.66-.549.854-.942.75-1.526 2.461-4.815 3.21-6.341-.76 2.038-3.175 7.266-1.995 8.075 1.18.812 2.642-1.076 3.276-2.486.633-1.411.897-3.008 1.824-4.248-.585 1.987-2.155 5.422-1.251 6.079.904.655 2.093-2.526 2.673-4.078 1.3-3.47 2.614-7.016 2.711-10.72.033-1.224-.07-2.457.123-3.663.177-1.105.592-2.155.997-3.196a247.267 247.267 0 009.655-30.476c.509-2.057 1.98-5.408 2.995-5.401 1.014.006.309 3.408.046 3.229l-12.389 39.589s.426 1.72-.558 4.641c-.984 2.92-2.265 4.878-2.526 5.796-.26.915-1.407 5.885-3.487 6.094-1.109.11-1.047-1.072-.747-2.199-.664 1.436-1.798 3.075-3.41 2.616-1.235-.351-1.2-1.436-.788-2.521-.855 1.147-1.93 2.1-2.878 1.478-1.017-.664-.602-2.171.029-3.47-.483.479-1.055.739-1.652.34-1.602-1.065 3.24-10.049 3.24-10.049s-2.46 2.614-3.717 1.952c-.745-.393-1.08-.948-1.067-1.442zM143.17 40.803c-.037.858-.068 1.716-.126 2.57-.383 5.674-2.055 11.332-5.32 15.99-3.264 4.659-8.196 8.243-13.774 9.36-7.479 1.499-15.481-1.662-20.653-7.269-3.924-4.252-6.306-9.74-7.263-15.47a24.532 24.532 0 00-.239 4.73c.618 13.526 12.083 23.987 25.608 23.37 13.525-.618 23.986-12.083 23.368-25.608a24.497 24.497 0 00-1.599-7.673h-.002z"
          fill="#BA1A89"
        />
        <Path
          d="M118.635 152.735c-8.519 13.315-7.16 44.055-14.97 57.536-.774 1.742-2.77 2.393-3.218 2.444a55.391 55.391 0 01-12.332.006c-1.71-.189-3.478-.485-4.892-1.468-1.05-.731-1.842-1.941-1.943-3.183-1.008 1.191-1.337 2.459-1.209 3.562a3.893 3.893 0 00.366 1.248c.25.503.607.931 1.035 1.24 1.175.851 11.249 2.876 18.357 2.85 3.232-.012 5.85-.448 6.741-1.611 2.852-3.718 3.423-9.296 3.423-9.296s5.761-45.593 9.356-52.737c-.106-.479-.606-.757-.71-.594l-.004.003zM123.45 152.391c8.871 13.04 7.382 44.371 15.287 58.017.774 1.742 2.77 2.393 3.218 2.444 4.093.461 8.238.463 12.332.006 1.709-.189 3.478-.485 4.892-1.468 1.05-.731 1.841-1.941 1.943-3.183 1.008 1.191 1.336 2.459 1.209 3.562a4.294 4.294 0 01-.133.651 3.797 3.797 0 01-.234.597 3.368 3.368 0 01-1.034 1.24c-1.176.851-11.249 2.876-18.358 2.85-3.231-.011-5.849-.448-6.74-1.611-2.852-3.718-3.423-9.296-3.423-9.296s-5.761-45.593-9.357-52.737c.106-.479.236-.847.393-1.074l.005.002z"
          fill="#BA1A89"
        />
        <Path
          d="M125.36 58.063h-10.965a1.294 1.294 0 000 2.59h10.965a1.294 1.294 0 000-2.59z"
          fill="#440C20"
        />
        <Path
          opacity={0.1}
          d="M138.355 114.17c11.986 0 21.702-9.716 21.702-21.701 0-11.985-9.716-21.701-21.702-21.701-11.985 0-21.701 9.716-21.701 21.7 0 11.986 9.716 21.702 21.701 21.702z"
          fill="red"
        />
        <Path
          opacity={0.4}
          d="M138.355 108.409c8.804 0 15.94-7.137 15.94-15.94 0-8.804-7.136-15.94-15.94-15.94-8.803 0-15.94 7.136-15.94 15.94 0 8.803 7.137 15.94 15.94 15.94z"
          fill="red"
        />
        <Path
          opacity={0.6}
          d="M138.355 102.934c5.78 0 10.466-4.685 10.466-10.465s-4.686-10.466-10.466-10.466c-5.78 0-10.465 4.686-10.465 10.466 0 5.78 4.685 10.465 10.465 10.465z"
          fill="red"
        />
        <Path
          d="M138.355 98.406a5.937 5.937 0 10.001-11.874 5.937 5.937 0 00-.001 11.874z"
          fill="red"
        />
        <Path
          d="M138.355 95.063a2.594 2.594 0 100-5.188 2.594 2.594 0 000 5.188z"
          fill="#F9DEF5"
        />
        <Path
          opacity={0.1}
          d="M101.197 199.235c11.61 0 21.022-9.412 21.022-21.022 0-11.61-9.412-21.022-21.022-21.022-11.61 0-21.022 9.412-21.022 21.022 0 11.61 9.412 21.022 21.022 21.022z"
          fill="red"
        />
        <Path
          opacity={0.4}
          d="M101.197 193.655c8.528 0 15.442-6.914 15.442-15.442s-6.914-15.442-15.442-15.442-15.442 6.914-15.442 15.442 6.914 15.442 15.442 15.442z"
          fill="red"
        />
        <Path
          opacity={0.6}
          d="M101.197 188.353c5.6 0 10.139-4.54 10.139-10.139 0-5.6-4.539-10.14-10.139-10.14s-10.14 4.54-10.14 10.14c0 5.599 4.54 10.139 10.14 10.139z"
          fill="red"
        />
        <Path
          d="M101.197 183.963a5.75 5.75 0 100-11.5 5.75 5.75 0 100 11.5z"
          fill="red"
        />
        <Path
          d="M101.197 180.728a2.514 2.514 0 100-5.028 2.514 2.514 0 000 5.028z"
          fill="#F9DEF5"
        />
        <Path
          opacity={0.1}
          d="M101.265 53.436c11.112 0 20.12-9.008 20.12-20.12 0-11.112-9.008-20.12-20.12-20.12-11.112 0-20.12 9.008-20.12 20.12 0 11.112 9.008 20.12 20.12 20.12z"
          fill="red"
        />
        <Path
          opacity={0.4}
          d="M101.265 48.096c8.163 0 14.78-6.617 14.78-14.78s-6.617-14.78-14.78-14.78c-8.162 0-14.78 6.617-14.78 14.78s6.618 14.78 14.78 14.78z"
          fill="red"
        />
        <Path
          opacity={0.6}
          d="M101.265 43.021c5.36 0 9.705-4.345 9.705-9.705s-4.345-9.705-9.705-9.705-9.704 4.345-9.704 9.705 4.344 9.705 9.704 9.705z"
          fill="red"
        />
        <Path
          d="M101.265 38.821a5.506 5.506 0 100-11.011 5.506 5.506 0 000 11.011z"
          fill="red"
        />
        <Path
          d="M101.265 35.723a2.407 2.407 0 100-4.814 2.407 2.407 0 000 4.814z"
          fill="#F9DEF5"
        />
        <Path
          d="M104.097 45.086c1.458 2.314 5.964 4.122 8.589.205M135.228 45.086c-1.458 2.314-5.964 4.122-8.589.205"
          stroke="#440C20"
          strokeWidth={2}
          strokeMiterlimit={10}
          strokeLinecap="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2913_351394">
          <Path fill="#fff" d="M0 0H240V240H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};