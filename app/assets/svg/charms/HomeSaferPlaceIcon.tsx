import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { ISvgProps } from '../../../utils/types';

export const HomeSaferPlaceIcon = ({
  width = 240,
  height = 240,
}: ISvgProps) => {
  return (
    <Svg
      width={width * WINDOW_COEFFICIENT}
      height={height * WINDOW_COEFFICIENT}
      viewBox="0 0 240 240"
      fill="none">
      <G clipPath="url(#clip0_2913_349554)">
        <Path
          d="M120 240c-32.054 0-62.189-12.483-84.854-35.146C12.483 182.189 0 152.054 0 120s12.483-62.189 35.148-84.852C57.811 12.483 87.946 0 120 0s62.189 12.483 84.854 35.148c22.665 22.666 35.148 52.8 35.148 84.854s-12.483 62.189-35.148 84.854c-22.665 22.666-52.8 35.146-84.854 35.146V240z"
          fill="#FFB452"
        />
        <Path
          d="M120 240c-32.054 0-62.189-12.483-84.854-35.146C12.483 182.189 0 152.054 0 120s12.483-62.189 35.148-84.852C57.811 12.483 87.946 0 120 0s62.189 12.483 84.854 35.148c22.665 22.666 35.148 52.8 35.148 84.854s-12.483 62.189-35.148 84.854c-22.665 22.666-52.8 35.146-84.854 35.146V240zm0-231.825c-29.87 0-57.952 11.632-79.073 32.754C19.805 62.049 8.175 90.13 8.175 120c0 29.869 11.632 57.952 32.754 79.073 21.121 21.122 49.204 32.755 79.073 32.755 29.87 0 57.952-11.633 79.074-32.755 21.121-21.121 32.752-49.204 32.752-79.073 0-29.87-11.633-57.952-32.752-79.073-21.122-21.122-49.204-32.755-79.074-32.755l-.002.003z"
          fill="#FFB452"
        />
        <Path
          d="M206.643 203.024a123.32 123.32 0 004.958-5.501c-5.187 1.657-10.297 2.94-14.611 3.581-20.868 19.834-48.091 30.721-76.99 30.721-28.899 0-57.952-11.632-79.073-32.754-21.122-21.121-32.755-49.204-32.755-79.073 0-5.884.453-11.698 1.339-17.403-2.026-4.953-3.869-10.03-5.062-15.157a119.927 119.927 0 00-3.804 20.01c-.007.056-.011.114-.018.169a118.404 118.404 0 00-.333 3.894c-.008.122-.015.245-.024.366-.038.555-.07 1.111-.1 1.668-.005.092-.012.183-.016.275-.031.629-.058 1.26-.08 1.892l-.012.381a115.17 115.17 0 00-.037 1.52l-.01.511A130.77 130.77 0 000 119.995c0 32.054 12.483 62.189 35.148 84.854 22.666 22.666 52.8 35.146 84.854 35.146s62.189-12.482 84.854-35.146c.567-.566 1.127-1.14 1.68-1.715l.11-.114-.003.004z"
          fill="#B68036"
        />
        <Path
          d="M117.78.022c-.39.007-.779.016-1.167.027-.203.005-.404.011-.607.018-.374.011-.749.027-1.124.042-.194.01-.388.016-.58.025-.431.02-.859.042-1.29.067a138.062 138.062 0 00-2.066.134l-.379.029a126.764 126.764 0 00-2.99.267l-.575.06c-.395.043-.788.088-1.183.134-.163.02-.325.038-.486.056a116.359 116.359 0 00-4.98.71l-.537.089c-.389.065-.775.132-1.16.2-.168.03-.335.061-.503.09-.453.083-.908.17-1.358.257l-.273.05c-.555.11-1.11.224-1.664.342-.08.018-.16.036-.239.052-.464.1-.928.2-1.39.305l-.455.105c-.399.092-.796.185-1.193.281l-.478.116c-.417.103-.834.208-1.25.315l-.367.094a123.1 123.1 0 00-3.583.997c-.427.125-.853.254-1.277.384l-.426.131c-.408.127-.814.257-1.22.386l-.39.127c-.485.159-.966.32-1.446.482-.043.014-.085.03-.127.043-.551.187-1.098.381-1.647.577l-.078.03a117.663 117.663 0 00-3.066 1.153l-.376.147c-.431.17-.862.344-1.292.52l-.261.107a122.01 122.01 0 00-3.144 1.348c-.076.033-.15.069-.225.102-.435.194-.87.393-1.303.594l-.344.16c-.41.192-.819.384-1.225.58l-.312.15c-.482.234-.964.47-1.444.71a104.748 104.748 0 00-1.63.835 334.316 334.316 0 0110.024 4.245c14.082-6.243 29.445-9.527 45.313-9.527 29.869 0 57.952 11.633 79.073 32.754 21.122 21.122 32.752 49.204 32.752 79.074 0 10.182-1.352 20.157-3.971 29.72a154.004 154.004 0 006.26 7.59c.48-1.473.93-2.957 1.354-4.451.007-.025.014-.052.023-.076.419-1.488.812-2.985 1.173-4.491l.007-.029c.178-.746.35-1.491.515-2.24l.025-.112a119.953 119.953 0 001.298-6.874l.009-.06a122.079 122.079 0 00.625-4.525l.036-.312c.167-1.441.31-2.889.428-4.342l.031-.392c.054-.705.103-1.413.145-2.12.007-.096.011-.192.016-.285.038-.654.069-1.31.096-1.966.004-.112.011-.223.013-.337.027-.698.047-1.399.063-2.099.002-.15.006-.299.009-.446.013-.719.02-1.437.02-2.156 0-32.053-12.483-62.188-35.148-84.854C182.189 12.483 152.054 0 120 0c-.564 0-1.127.004-1.689.013l-.531.01z"
          fill="#FFDAAF"
        />
        <Path
          d="M120 227.27c59.243 0 107.27-48.027 107.27-107.27 0-59.243-48.027-107.27-107.27-107.27C60.757 12.73 12.73 60.758 12.73 120c0 59.243 48.027 107.27 107.27 107.27z"
          fill="#EF2B2B"
        />
        <Path
          opacity={0.28}
          d="M171.408 202.087c-21.909 0-39.735-17.826-39.735-39.735v-51.935l-11.927-7.066-11.925 7.066v51.935c0 21.909-17.827 39.735-39.736 39.735-21.909 0-39.735-17.826-39.735-39.735v-43.093a39.476 39.476 0 01-3.991-5.576c-5.41-9.125-6.941-19.814-4.31-30.099 2.632-10.29 9.113-18.933 18.247-24.34l60.732-35.99a39.71 39.71 0 0120.247-5.55h.944c7.119 0 14.12 1.918 20.249 5.55l60.738 35.994c9.13 5.406 15.609 14.049 18.241 24.334 2.631 10.285 1.098 20.979-4.317 30.11a39.725 39.725 0 01-3.984 5.567v43.093c0 21.909-17.827 39.735-39.736 39.735h-.002z"
          fill="#FF53F8"
        />
        <Path
          opacity={0.53}
          d="M171.408 190.968c-15.778 0-28.615-12.838-28.615-28.616v-58.271l-23.047-13.656-23.045 13.656v58.271c0 15.778-12.837 28.616-28.616 28.616-15.778 0-28.615-12.838-28.615-28.616v-47.597a28.47 28.47 0 01-5.544-6.738c-3.896-6.571-5-14.27-3.106-21.675 1.896-7.41 6.562-13.634 13.139-17.53l60.738-35.991a28.601 28.601 0 0115.042-3.991 28.631 28.631 0 0115.06 3.991l60.738 35.994c6.573 3.893 11.24 10.115 13.134 17.525 1.895 7.407.79 15.109-3.107 21.683a28.478 28.478 0 01-5.54 6.732v47.597c0 15.778-12.838 28.616-28.616 28.616z"
          fill="#FF53F8"
        />
        <Path
          opacity={0.92}
          d="M171.408 179.846c-9.647 0-17.494-7.847-17.494-17.494V97.745l-34.166-20.247-34.164 20.247v64.607c0 9.647-7.847 17.494-17.494 17.494-9.647 0-17.494-7.847-17.494-17.494v-53.351a17.502 17.502 0 01-7.097-6.654A17.381 17.381 0 0141.6 89.095a17.38 17.38 0 018.032-10.716l60.734-35.994a17.487 17.487 0 019.366-2.436 17.484 17.484 0 019.395 2.436l60.741 35.994a17.384 17.384 0 018.032 10.714 17.37 17.37 0 01-1.901 13.254 17.5 17.5 0 01-7.095 6.649v53.351c0 9.648-7.846 17.494-17.494 17.494l-.002.005z"
          fill="#F975F9"
        />
        <Path
          d="M184.199 87.946l-60.741-35.993a6.328 6.328 0 00-3.717-.87 6.349 6.349 0 00-3.706.87l-60.74 35.993a6.37 6.37 0 00-2.234 8.733 6.366 6.366 0 005.491 3.125 6.353 6.353 0 003.162-.85v63.398a6.373 6.373 0 006.374 6.374 6.373 6.373 0 006.374-6.374V93.881c0-.785-.15-1.535-.409-2.229l45.697-27.078 45.697 27.078a6.323 6.323 0 00-.408 2.229v68.471a6.374 6.374 0 1012.748 0V98.954c.997.574 2.086.85 3.161.85a6.373 6.373 0 003.258-11.858h-.007z"
          fill="#FEEBFF"
        />
        <Path
          d="M117.211 162.053c21.834 0 39.535-17.7 39.535-39.534s-17.701-39.535-39.535-39.535c-21.834 0-39.534 17.701-39.534 39.535 0 21.834 17.7 39.534 39.534 39.534z"
          fill="#F9F330"
        />
        <Path
          d="M152.223 140.876c-10.184 3.24-23.736 8.001-32.241 9.393l.48 3.989c2.258 1.778 7.121 4.322 9.33 4.701.723.125 1.406.21 2.068.277a39.66 39.66 0 0020.363-18.362v.002zM82.183 140.876c10.185 3.24 23.737 8.001 32.242 9.393l-.48 3.989c-2.258 1.778-7.122 4.322-9.33 4.701a29.32 29.32 0 01-2.069.277 39.664 39.664 0 01-20.363-18.362v.002z"
          fill="#AF8F05"
        />
        <Path
          d="M94.31 103.249c3.02-2.182 7.688-4.214 13.033-1.838M140.115 103.249c-3.021-2.182-7.688-4.214-13.034-1.838"
          stroke="#84130D"
          strokeWidth={7}
          strokeMiterlimit={10}
          strokeLinecap="round"
        />
        <Path
          d="M113.599 113.786s3.583 1.847 7.882.37"
          stroke="#84130D"
          strokeWidth={4}
          strokeMiterlimit={10}
          strokeLinecap="round"
        />
        <Path
          d="M128.072 117.427c-6.022 1.116-8.786 5.745-9.993 8.931-.281.743-1.452.743-1.736 0-1.209-3.186-3.973-7.815-9.993-8.931-10.53-1.95-19.35 9.792-11.325 22.157 6.464 9.959 18.913 16.302 22.122 16.481v.004h.133v-.004c3.209-.179 15.658-6.522 22.121-16.481 8.026-12.365-.794-24.107-11.324-22.157h-.005z"
          fill="#FF00ED"
        />
        <Path
          d="M147.429 125.426s-5.964 11.244-13.592 10.169c-7.626-1.075-11.733-2.249-11.146.587.586 2.835 3.52 3.324 3.52 3.324s-8.507.489-8.116 6.454c.39 5.964 11.831 9.583 20.729 6.357 8.897-3.226 18.089-12.711 15.742-26.695-2.347-13.982-7.137-.196-7.137-.196zM86.994 125.426s5.963 11.244 13.591 10.169c7.626-1.075 11.733-2.249 11.147.587-.587 2.835-3.521 3.324-3.521 3.324s8.507.489 8.117 6.454c-.391 5.964-11.832 9.583-20.73 6.357-8.897-3.226-18.089-12.711-15.742-26.695 2.348-13.982 7.138-.196 7.138-.196z"
          fill="#F9F330"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2913_349554">
          <Path fill="#fff" d="M0 0H240V240H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};