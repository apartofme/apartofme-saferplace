import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { ISvgProps } from '../../../utils/types';

export const HutWithBearIcon = ({ width = 240, height = 240 }: ISvgProps) => {
  return (
    <Svg
      width={width * WINDOW_COEFFICIENT}
      height={height * WINDOW_COEFFICIENT}
      viewBox="0 0 240 240"
      fill="none">
      <G clipPath="url(#clip0_2913_349658)">
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
          fill="#3F1670"
        />
        <Path
          d="M120 12.73c-1.35 0-2.693.034-4.032.083-3.511 14.756-11.639 25.67-24.227 32.486-10.66 5.772-20.713 6.308-20.811 6.312l-.837.038-.589.598c-9.62 9.768-20.918 14.125-33.577 12.956a45.313 45.313 0 01-7.363-1.312 108.723 108.723 0 00-2.238 3.817 50.185 50.185 0 009.025 1.73c1.372.131 2.838.211 4.382.211 9.172 0 21.061-2.793 32.239-13.832 2.782-.248 11.867-1.424 21.639-6.673 9.884-5.31 22.168-15.877 26.748-36.407-.12 0-.239-.004-.359-.004v-.003z"
          fill="#129BD8"
        />
        <Path
          d="M200.622 69.436a50.573 50.573 0 0012.429-2.838 105.478 105.478 0 00-2.256-3.733 46.295 46.295 0 01-10.584 2.32c-12.724 1.225-24.077-3.128-33.742-12.94l-.589-.596-.835-.04c-.1-.004-10.153-.54-20.813-6.311-12.613-6.828-20.747-17.77-24.248-32.57-1.459 0-2.907.038-4.35.097 4.596 20.467 16.858 31.014 26.726 36.314 9.774 5.25 18.859 6.426 21.639 6.674 11.177 11.039 23.067 13.832 32.239 13.832 1.541 0 3.009-.08 4.381-.212l.003.002z"
          fill="#129BD8"
        />
        <Path
          d="M56.406 152.375s53.523 22.182 125.372-5.303l-17.36-93.064s-17.36 23.627-48.22 18.324c-30.86-5.304-45.326-18.324-45.326-18.324l-14.466 98.37v-.003z"
          fill="#63B3DB"
        />
        <Path
          d="M155.128 77.206a92.302 92.302 0 001.107 31.072l15.309 4.42a189.77 189.77 0 01-7.409-58.32c-1.707 2.148-11.097 13.18-27.007 17.232-.707.574-1.444 1.096-2.3 1.38-.964.318-2.002.307-3.017.291a393.436 393.436 0 01-8.103-.196 41.972 41.972 0 01-1.283-.054c-7.867-.332-15.707-1.077-23.326-2.994-10.256-2.579-20.186-7.458-27.292-15.26a26.864 26.864 0 01-.812-.663c.185 4.092-.57 8.168-1.326 12.195l-2.8 14.913-7.915 53.822c.928.754 2.204.912 3.402.97a33.59 33.59 0 008.329-.635c1.976-.404 4.031-1.056 5.356-2.575 1.2-1.377 1.622-3.251 1.921-5.053 1.212-7.336 1.049-14.819.884-22.251l-.781-35.079c9.834 9.212 23.774 13.01 37.248 13.116 13.473.108 26.725-3.12 39.813-6.329l.002-.002z"
          fill="#4FA1C1"
        />
        <Path
          d="M204.31 165.808l-15.453-22.092c-.665-.95-1.37-1.936-2.398-2.474-1.067-.558-2.329-.553-3.532-.529-22.605.48-45.121 3.956-67.722 3.322-8.852-.247-17.676-1.124-26.527-1.443a210.11 210.11 0 00-31.732 1.263l-9.32 15.905c-4.02 3.545-8.444 8.621-6.398 13.574 1.624 3.933 6.423 5.247 10.575 6.18a244.775 244.775 0 0167.421 26.092c8.96-8.699 21.378-12.793 33.57-15.486 12.193-2.693 24.756-4.299 36.246-9.19 4.65-1.979 9.063-4.471 13.463-6.956 1.45-.819 3.036-1.812 3.429-3.431.403-1.674-.634-3.325-1.62-4.735h-.002z"
          fill="#DCEFF9"
        />
        <Path
          d="M82.989 180.342c-.962-.563-2.113-.685-3.222-.792l-9.899-.971-6.796 3.762a244.733 244.733 0 0113.105 4.004 43.436 43.436 0 005.232-1.048c1.25-.337 2.662-.922 2.985-2.175.28-1.08-.444-2.218-1.405-2.78zM188.933 176.042c-4.426-1.599-8.855-3.199-13.281-4.801-5.087-1.838-10.31-3.701-15.718-3.628-5.408.074-11.124 2.497-13.605 7.303l-21.443 7.846c-3.239-.261-6.568 1.027-8.79 3.398-.426.455-.83.984-.888 1.607-.112 1.166.988 2.066 2.014 2.628 4.052 2.215 8.753 2.867 13.349 3.313 2.521.245 5.044.433 7.572.578 4.759-1.758 9.723-3.075 14.649-4.163 12.193-2.693 24.756-4.3 36.246-9.19a80.742 80.742 0 004.743-2.218c-1.249-1.323-3.101-2.041-4.85-2.673h.002zM66.274 164.354c1.629.709 3.485.578 5.256.43 18.975-1.561 39.24-3.625 53.95-15.715.794-.654 1.606-1.395 1.858-2.392l-2.459-.089-54.03 8.996c-1.795.419-3.658.872-5.097 2.025-1.44 1.156-2.316 3.233-1.52 4.898.404.845 1.183 1.472 2.044 1.847h-.002z"
          fill="#AFD2E2"
        />
        <Path
          d="M64.518 127.988s24-21.637 49.623-19.319c0 0 20.745 18.545 15.051 38.635 0 0-43.115 19.319-50.438 16.227-7.322-3.09-21.15-24.341-14.236-35.546v.003z"
          fill="#BCF7F1"
        />
        <Path
          d="M84.002 156.739a11.872 11.872 0 004.556-3.728c-2.905 1.512-6.685.644-9.264-1.335-2.577-1.976-4.185-4.857-5.57-7.715-1.917-3.953-3.437-8.935-.63-12.375 1.562-1.915 4.447-3.492 3.967-5.87-2.704 1.236-5.408 2.472-8.112 3.71-.614.281-1.374.553-1.934.187-.552-.359-.567-1.111-.527-1.744l.105-1.618a51.495 51.495 0 00-2.075 1.736c-6.914 11.204 6.914 32.453 14.236 35.545 7.323 3.09 50.438-16.226 50.438-16.226 1.124-3.965 1.216-7.869.643-11.584-11.872 12.014-28.529 19.707-45.833 21.017z"
          fill="#8CDDD3"
        />
        <Path
          d="M70.716 53.762s42.54 34.467 93.287 0c0 0-10.742 25.54-46.303 25.54-35.561 0-46.984-25.54-46.984-25.54z"
          fill="#7ACEFC"
        />
        <Path
          d="M70.716 53.762s-15.814 69.277-45.181 103.162c0 0 18.071 17.32 27.107 15.06 9.036-2.26 28.616-76.055 18.072-118.224l.002.002zM164.148 53.762s15.814 69.277 45.182 103.162c0 0-18.072 17.32-27.108 15.06-9.036-2.26-28.615-76.055-18.071-118.224l-.003.002z"
          fill="#7ACEFC"
        />
        <Path
          d="M37.486 71.124c-.374-3.368-2.246-3.93-2.246-3.93h-.04s-1.872.562-2.247 3.93c-.33 2.983 1.095 3.325 2.077 3.365h.377c.982-.04 2.41-.382 2.077-3.365h.002z"
          fill="#129BD8"
        />
        <Path
          opacity={0.29}
          d="M35.244 82.335a6.044 6.044 0 100-12.088 6.044 6.044 0 000 12.088z"
          fill="#F9FC6D"
        />
        <Path
          opacity={0.11}
          d="M35.244 84.86a8.57 8.57 0 100-17.138 8.57 8.57 0 000 17.139z"
          fill="#F9FC6D"
        />
        <Path
          opacity={0.06}
          d="M35.244 87.62c6.257 0 11.33-5.072 11.33-11.329 0-6.257-5.073-11.33-11.33-11.33s-11.33 5.073-11.33 11.33 5.073 11.33 11.33 11.33z"
          fill="#F9FC6D"
        />
        <Path
          d="M35.244 79.288a2.996 2.996 0 100-5.993 2.996 2.996 0 000 5.993z"
          fill="#F9FC6D"
        />
        <Path
          d="M61.928 66.202c-1.504-3.039-3.456-2.925-3.456-2.925l-.038.013s-1.566 1.17-.765 4.462c.709 2.916 2.166 2.75 3.103 2.45.007 0 .348-.127.355-.13.908-.372 2.133-1.182.8-3.87z"
          fill="#129BD8"
        />
        <Path
          opacity={0.29}
          d="M61.589 77.868a6.044 6.044 0 100-12.088 6.044 6.044 0 000 12.088z"
          fill="#F9FC6D"
        />
        <Path
          opacity={0.11}
          d="M61.589 80.394a8.57 8.57 0 100-17.14 8.57 8.57 0 000 17.14z"
          fill="#F9FC6D"
        />
        <Path
          opacity={0.06}
          d="M61.589 83.154c6.257 0 11.329-5.072 11.329-11.33 0-6.257-5.073-11.329-11.33-11.329S50.26 65.567 50.26 71.825c0 6.257 5.072 11.329 11.33 11.329z"
          fill="#F9FC6D"
        />
        <Path
          d="M61.589 74.82a2.996 2.996 0 100-5.992 2.996 2.996 0 000 5.993z"
          fill="#F9FC6D"
        />
        <Path
          d="M90.525 53.553c-.722-3.313-2.643-3.677-2.643-3.677l-.04.004s-1.803.755-1.826 4.143c-.02 3.001 1.435 3.193 2.417 3.13.006 0 .368-.037.374-.04.973-.14 2.356-.63 1.716-3.56h.002z"
          fill="#129BD8"
        />
        <Path
          opacity={0.29}
          d="M88.832 64.969a6.044 6.044 0 100-12.088 6.044 6.044 0 000 12.088z"
          fill="#F9FC6D"
        />
        <Path
          opacity={0.11}
          d="M88.832 67.495a8.57 8.57 0 100-17.14 8.57 8.57 0 000 17.14z"
          fill="#F9FC6D"
        />
        <Path
          opacity={0.06}
          d="M88.832 70.254c6.257 0 11.329-5.072 11.329-11.329 0-6.257-5.072-11.33-11.329-11.33-6.257 0-11.33 5.073-11.33 11.33s5.073 11.33 11.33 11.33z"
          fill="#F9FC6D"
        />
        <Path
          d="M88.832 61.921a2.996 2.996 0 100-5.992 2.996 2.996 0 000 5.992z"
          fill="#F9FC6D"
        />
        <Path
          d="M111.627 36.897c-1.68-2.945-3.621-2.717-3.621-2.717l-.036.016s-1.495 1.258-.504 4.5c.879 2.869 2.325 2.617 3.242 2.264l.348-.15c.885-.426 2.059-1.305.573-3.91l-.002-.003z"
          fill="#129BD8"
        />
        <Path
          opacity={0.29}
          d="M111.616 48.574a6.044 6.044 0 100-12.088 6.044 6.044 0 000 12.088z"
          fill="#F9FC6D"
        />
        <Path
          opacity={0.11}
          d="M111.616 51.1a8.57 8.57 0 10-.001-17.14 8.57 8.57 0 00.001 17.14z"
          fill="#F9FC6D"
        />
        <Path
          opacity={0.06}
          d="M111.616 53.86c6.257 0 11.329-5.072 11.329-11.33 0-6.257-5.072-11.329-11.329-11.329-6.257 0-11.33 5.072-11.33 11.33 0 6.257 5.073 11.329 11.33 11.329z"
          fill="#F9FC6D"
        />
        <Path
          d="M111.616 45.527a2.997 2.997 0 10-.001-5.993 2.997 2.997 0 00.001 5.993z"
          fill="#F9FC6D"
        />
        <Path
          d="M136.209 47.72c1.086-3.21-.371-4.513-.371-4.513l-.035-.018s-1.935-.283-3.699 2.61c-1.562 2.562-.415 3.477.457 3.927.007.005.335.159.341.16.906.38 2.345.675 3.307-2.168v.002z"
          fill="#129BD8"
        />
        <Path
          opacity={0.29}
          d="M131.99 57.494a6.044 6.044 0 100-12.088 6.044 6.044 0 000 12.088z"
          fill="#F9FC6D"
        />
        <Path
          opacity={0.11}
          d="M131.99 60.02a8.569 8.569 0 008.569-8.57 8.57 8.57 0 10-8.569 8.57z"
          fill="#F9FC6D"
        />
        <Path
          opacity={0.06}
          d="M131.99 62.78c6.257 0 11.329-5.072 11.329-11.33 0-6.257-5.072-11.329-11.329-11.329-6.257 0-11.33 5.072-11.33 11.33 0 6.257 5.073 11.329 11.33 11.329z"
          fill="#F9FC6D"
        />
        <Path
          d="M131.99 54.447a2.996 2.996 0 100-5.992 2.996 2.996 0 000 5.992z"
          fill="#F9FC6D"
        />
        <Path
          d="M156.433 56.473c-.12-3.389-1.945-4.09-1.945-4.09h-.04s-1.91.418-2.535 3.749c-.553 2.95.843 3.398 1.818 3.512l.378.029c.981.033 2.429-.201 2.324-3.2z"
          fill="#129BD8"
        />
        <Path
          opacity={0.29}
          d="M153.81 67.501a6.043 6.043 0 006.043-6.044 6.043 6.043 0 10-12.087 0 6.044 6.044 0 006.044 6.044z"
          fill="#F9FC6D"
        />
        <Path
          opacity={0.11}
          d="M153.81 70.027a8.57 8.57 0 10-.001-17.14 8.57 8.57 0 00.001 17.14z"
          fill="#F9FC6D"
        />
        <Path
          opacity={0.06}
          d="M153.81 72.787c6.257 0 11.329-5.073 11.329-11.33s-5.072-11.33-11.329-11.33c-6.257 0-11.33 5.073-11.33 11.33s5.073 11.33 11.33 11.33z"
          fill="#F9FC6D"
        />
        <Path
          d="M153.81 64.454a2.997 2.997 0 10-.001-5.994 2.997 2.997 0 00.001 5.994z"
          fill="#F9FC6D"
        />
        <Path
          d="M185.346 70.688c.747-3.306-.837-4.45-.837-4.45l-.038-.014s-1.952-.083-3.409 2.98c-1.29 2.711-.051 3.501.863 3.858.007.002.351.123.357.123.942.283 2.401.426 3.064-2.499v.002z"
          fill="#129BD8"
        />
        <Path
          opacity={0.29}
          d="M181.535 80.88a6.044 6.044 0 100-12.088 6.044 6.044 0 000 12.088z"
          fill="#F9FC6D"
        />
        <Path
          opacity={0.11}
          d="M181.535 83.406a8.569 8.569 0 008.569-8.57 8.57 8.57 0 10-8.569 8.57z"
          fill="#F9FC6D"
        />
        <Path
          opacity={0.06}
          d="M181.535 86.165c6.257 0 11.329-5.072 11.329-11.329 0-6.257-5.072-11.33-11.329-11.33-6.257 0-11.329 5.073-11.329 11.33s5.072 11.33 11.329 11.33z"
          fill="#F9FC6D"
        />
        <Path
          d="M181.535 77.832a2.996 2.996 0 100-5.991 2.996 2.996 0 000 5.992z"
          fill="#F9FC6D"
        />
        <Path
          d="M208.593 70.464c-1.298-3.133-3.253-3.15-3.253-3.15l-.037.01s-1.643 1.063-1.062 4.403c.513 2.956 1.978 2.886 2.931 2.652.007 0 .357-.102.364-.105.932-.312 2.206-1.037 1.057-3.81z"
          fill="#129BD8"
        />
        <Path
          opacity={0.29}
          d="M207.879 82.097a6.044 6.044 0 100-12.088 6.044 6.044 0 000 12.088z"
          fill="#F9FC6D"
        />
        <Path
          opacity={0.11}
          d="M207.879 84.622a8.57 8.57 0 100-17.14 8.57 8.57 0 000 17.14z"
          fill="#F9FC6D"
        />
        <Path
          opacity={0.06}
          d="M207.879 87.382c6.257 0 11.33-5.072 11.33-11.329 0-6.257-5.073-11.33-11.33-11.33s-11.329 5.073-11.329 11.33 5.072 11.33 11.329 11.33z"
          fill="#F9FC6D"
        />
        <Path
          d="M207.879 79.05a2.997 2.997 0 100-5.994 2.997 2.997 0 000 5.993z"
          fill="#F9FC6D"
        />
        <Path
          d="M76.15 142.715s-4.421 38.923-5.749 41.134c-1.327 2.211-15.481 11.499-32.288 1.327l-4.422-41.575 42.462-.884-.002-.002z"
          fill="#ED6306"
        />
        <Path
          d="M80.858 137.704s-24-11.022-51.02.712l25.954 11.911 25.066-12.621v-.002z"
          fill="#B54D06"
        />
        <Path
          d="M55.38 146.016c-2.983-15.836-11.15-30.65-22.943-41.629-.508-.473-1.06-.959-1.74-1.102-.68-.143-1.515.201-1.655.881-.127.609.317 1.176.727 1.644 10.734 12.249 18.556 27.032 22.643 42.797.808 0 1.618-.003 2.425-.005"
          fill="#5EE55E"
        />
        <Path
          d="M42.35 123.782c-3.157-4.007-8.632-6.042-13.638-5.069-2.669.518-5.324 1.816-7.979 1.243a30.716 30.716 0 004.953 6.662c1.785 1.823 3.84 3.445 6.227 4.339 2.39.895 5.15.998 7.44-.125 2.292-1.122 3.972-3.592 3.782-6.135"
          fill="#5EE55E"
        />
        <Path
          d="M54.56 149.97c-6.824.455-13.78.089-20.369-1.671l1.343 12.616c13.083 1.314 26.864 2.385 38.718-3.244l.13-.062c.526-4.27.99-8.181 1.311-10.923-6.987 1.47-14.013 2.811-21.132 3.286v-.002z"
          fill="#B24B04"
        />
        <Path
          d="M81.017 137.407l-3.097 12.827s-6.635 3.98-21.673 3.98c-15.037 0-23.883-3.097-23.883-3.097l-2.653-12.826s20.345 7.518 51.306-.884z"
          fill="#ED6306"
        />
        <Path
          d="M42.2 124.866c-.408-.114-.84-.087-1.265-.058-6.157.395-12.82.402-17.864-3.148-.756-.533-1.488-1.147-2.284-1.606a30.644 30.644 0 004.897 6.564c1.785 1.822 3.84 3.444 6.227 4.339 2.387.895 5.15.997 7.44-.125 2.057-1.008 3.62-3.106 3.778-5.363a1.94 1.94 0 00-.928-.601v-.002zM38.589 110.842a74.949 74.949 0 00-6.152-6.457c-.377-.35-.776-.707-1.233-.926-.128.152-.25.308-.36.473a6.017 6.017 0 00-.859 2.133 104.39 104.39 0 016.06 7.668 4.768 4.768 0 00.252-2.635 4.376 4.376 0 002.292-.256z"
          fill="#25AF25"
        />
        <Path
          d="M33.243 106.134c2.106.937 4.524 1.881 6.635.957 2.593-1.133 3.342-4.547 2.831-7.331-.691.531-1.486 1.073-2.354.979-1.427-.153-2.083-1.84-2.32-3.255-.236-1.414-.533-3.096-1.84-3.688-1.047-.473-2.328.04-3.088.9-.761.859-1.12 1.992-1.462 3.09-.444-1.397-1.14-2.756-2.248-3.713-1.112-.957-2.689-1.452-4.088-1.015-1.604.5-2.684 2.177-2.722 3.857-.038 1.68.844 3.298 2.118 4.396-1.174-1.127-3.193-.56-4.391.54-1.848 1.691-2.557 4.716-1.163 6.798 1.393 2.081 4.998 2.349 6.323.225-.151 1.638-.294 3.344.302 4.877.597 1.533 2.177 2.816 3.79 2.501 1.524-.297 2.476-1.832 2.959-3.309.72-2.208.812-4.618.26-6.874"
          fill="#FF15EE"
        />
        <Path
          d="M26.331 100.532c-.118-.361-.397-.644-.654-.925a11.795 11.795 0 01-1.622-2.267c-.379-.687-.694-1.433-.732-2.216-.008-.187 0-.377.027-.566a4.405 4.405 0 00-.763 2.353c-.031 1.39.574 2.736 1.504 3.78.303.239.616.464.953.654.292.165.649.314.955.176.348-.156.453-.627.332-.989zM42.71 99.76c-.525.402-1.107.81-1.736.944-.099.571-.172 1.16-.317 1.691-.446 1.626-1.834 2.958-3.476 3.338-1.645.379-3.474-.212-4.587-1.482l-1.245 1.946c-.116.18-.235.366-.284.573-.067.277-.01.567.03.85a7.197 7.197 0 01-1.223 5.096c-.308.437-.696.861-1.214.993-.602.154-1.254-.139-1.664-.603-.413-.464-.623-1.075-.755-1.682a8.465 8.465 0 01.607-5.35c-1.465.634-2.686 2.024-4.281 1.999-1.24-.018-2.327-.955-2.85-2.082-.387-.841-.514-1.769-.532-2.701-.933 1.668-1.082 3.781-.032 5.354 1.393 2.082 4.998 2.349 6.323.225-.151 1.638-.294 3.345.302 4.878.595 1.532 2.177 2.815 3.79 2.501 1.524-.297 2.476-1.832 2.959-3.309.72-2.209.812-4.618.26-6.874l.458.067c2.106.937 4.524 1.881 6.635.957 2.593-1.133 3.342-4.547 2.831-7.331v.002z"
          fill="#B70DB3"
        />
        <Path
          d="M30.157 106.513a3.322 3.322 0 100-6.644 3.322 3.322 0 000 6.644z"
          fill="#FFFF17"
        />
        <Path
          d="M177.59 133.888c6.54 4.399 8.3 13.362 13.922 18.888 1.848 1.816 4.081 3.222 5.823 5.14 1.743 1.917 2.974 4.612 2.211 7.088-1.064 3.452-5.653 4.757-9.013 3.432-3.36-1.326-5.642-4.456-7.412-7.604-4.286-7.628-6.936-16.594-13.687-22.156"
          fill="#B77C15"
        />
        <Path
          d="M192.534 164.547c-.736-.961-1.789-1.62-2.771-2.329a25.88 25.88 0 01-8.844-11.336l1.897 9.395c.1.185.198.372.301.555 1.769 3.148 4.051 6.279 7.411 7.604.531.21 1.096.346 1.669.426.328-.261.629-.553.832-.919.592-1.058.239-2.434-.497-3.396h.002z"
          fill="#8E5F13"
        />
        <Path
          d="M171.292 134.258h-16.081c-7.909 6.434-12.439 16.811-11.78 26.987.165 2.559.644 5.116 1.613 7.489 2.907 7.126 10.541 11.986 18.205 11.789 7.664.197 15.299-4.663 18.206-11.789.968-2.376 1.448-4.93 1.613-7.489.66-10.176-3.871-20.553-11.78-26.987h.004z"
          fill="#B77C15"
        />
        <Path
          d="M152.946 136.679l-1.47-2.523c-5.04-.694-9.795 2.679-12.985 6.644-3.19 3.964-5.435 8.665-8.955 12.34-1.627 1.697-3.51 3.159-4.924 5.037-1.415 1.879-2.321 4.351-1.613 6.591.908 2.874 4.176 4.397 7.188 4.475 3.721.096 7.383-1.523 10.098-4.071 2.715-2.548 4.524-5.962 5.508-9.554.875-3.195 1.16-6.628 2.847-9.477.917-1.549 2.204-2.845 3.186-4.355.98-1.511 1.649-3.385 1.12-5.105v-.002z"
          fill="#B77C15"
        />
        <Path
          d="M131.445 165.623c-.977.288-2.017.466-2.862 1.035-.714.482-1.178 1.205-1.41 2.017a9.72 9.72 0 003.012.564c3.721.096 7.382-1.524 10.095-4.071 1.223-1.147 2.252-2.477 3.115-3.911l1.118-9.828c-1.52 2.942-3.052 5.905-5.13 8.484-2.077 2.58-4.765 4.773-7.94 5.71h.002zM183.222 139.742c-1.21-2.418-3.764-4.596-5.632-5.854 0 0-5.519 1.004-6.298.37h-16.081c-.841.685-3.737-.103-3.737-.103-3.427-.47-6.72.94-9.48 3.135 1.582.368 3.172.498 4.355 1.647 1.446 1.405 3.34 4.613 4.937 5.843 3.929 3.023 6.319 3.018 9.672 3.525 3.353.506 8.197.123 11.586-2.619 2.356-1.906 3.663-3.833 6.347-5.239 2.115-1.109 3.358-.413 4.333-.705h-.002z"
          fill="#8E5F13"
        />
        <Path
          d="M179.906 114.324a8.46 8.46 0 008.46-8.46 8.46 8.46 0 10-16.92 0 8.46 8.46 0 008.46 8.46z"
          fill="#B77C15"
        />
        <Path
          d="M179.018 111.631c.415.902.893 1.85 1.488 2.662 4.391-.31 7.858-3.96 7.858-8.429 0-1.557-.428-3.01-1.16-4.261.248 1.956-.14 3.998-1.149 5.695-1.461 2.466-4.179 4.139-7.039 4.333h.002z"
          fill="#8E5F13"
        />
        <Path
          d="M180.143 110.11c2.444 0 4.426-1.966 4.426-4.391s-1.982-4.391-4.426-4.391c-2.445 0-4.427 1.966-4.427 4.391s1.982 4.391 4.427 4.391z"
          fill="#F789F2"
        />
        <Path
          d="M147.145 114.324a8.46 8.46 0 100-16.921 8.46 8.46 0 000 16.921z"
          fill="#B77C15"
        />
        <Path
          d="M146.079 111.12c-3.275-1.039-6.173-3.57-7.247-6.789a8.498 8.498 0 00-.145 1.531c0 3.886 2.624 7.15 6.194 8.143.685-.422 1.303-.993 1.874-1.564.107-.107.219-.223.261-.368.141-.478-.464-.803-.937-.953z"
          fill="#8E5F13"
        />
        <Path
          d="M147.382 110.11c2.445 0 4.426-1.966 4.426-4.391s-1.981-4.391-4.426-4.391c-2.445 0-4.427 1.966-4.427 4.391s1.982 4.391 4.427 4.391z"
          fill="#F789F2"
        />
        <Path
          d="M163.526 144.18c12.235 0 22.154-9.208 22.154-20.566 0-11.358-9.919-20.566-22.154-20.566-12.236 0-22.155 9.208-22.155 20.566 0 11.358 9.919 20.566 22.155 20.566z"
          fill="#B77C15"
        />
        <Path
          d="M163.526 138.821c7.515 0 13.607-3.948 13.607-8.817 0-4.87-6.092-8.817-13.607-8.817s-13.607 3.947-13.607 8.817c0 4.869 6.092 8.817 13.607 8.817z"
          fill="#F4CD8E"
        />
        <Path
          d="M163.526 130.013c2.993 0 5.419-1.464 5.419-3.269 0-1.805-2.426-3.268-5.419-3.268-2.993 0-5.419 1.463-5.419 3.268 0 1.805 2.426 3.269 5.419 3.269zM176.938 119.254c1.369-1.716.98-4.303-.868-5.778-1.848-1.474-4.457-1.278-5.826.438-1.37 1.717-.981 4.304.867 5.778 1.849 1.475 4.457 1.279 5.827-.438z"
          fill="#4F3306"
        />
        <Path
          d="M173.612 114.86c.222-.278.158-.698-.142-.938-.301-.24-.725-.208-.947.07-.222.278-.158.698.142.938.301.24.725.209.947-.07zM176.356 117.05c.222-.279.158-.699-.142-.938-.301-.24-.725-.209-.947.069-.222.279-.158.699.142.939.301.239.725.208.947-.07zM171.914 116.985c.222-.278.158-.698-.142-.938-.301-.24-.724-.208-.946.07-.222.278-.159.698.142.938.3.24.724.209.946-.07zM174.66 119.176c.222-.279.158-.699-.142-.938-.301-.24-.725-.209-.947.069-.222.279-.158.699.142.939.301.239.725.208.947-.07z"
          fill="#B78946"
        />
        <Path
          d="M157.178 119.715c1.849-1.475 2.237-4.061.868-5.778-1.369-1.716-3.978-1.913-5.826-.438-1.849 1.475-2.237 4.061-.868 5.778 1.369 1.716 3.978 1.913 5.826.438z"
          fill="#4F3306"
        />
        <Path
          d="M155.627 114.953c.3-.24.364-.66.142-.938-.222-.279-.646-.31-.946-.07-.301.24-.364.66-.142.938.222.278.645.31.946.07zM152.881 117.141c.3-.239.364-.659.142-.938-.222-.278-.646-.309-.946-.07-.301.24-.364.66-.142.938.222.279.645.31.946.07zM157.323 117.08c.3-.24.364-.66.142-.938-.222-.279-.646-.31-.946-.07-.301.24-.364.66-.142.938.222.278.645.31.946.07zM154.581 119.27c.3-.239.364-.659.142-.938-.222-.278-.646-.31-.947-.07-.3.24-.364.66-.142.938.222.279.646.31.947.07z"
          fill="#B78946"
        />
        <Path
          d="M201.666 172.467c-.21-2.01-.754-4.04-1.972-5.651-2.55-3.378-7.666-4.083-11.517-2.325-3.851 1.756-6.47 2.539-7.945 6.506-.263.707-2.559 2.164-3.157 1.702-.283-.218-2.142-1.16-4.284 1.964-2.141 3.123-.499 5.191-.499 5.191a61.225 61.225 0 004.232 6c2.166 2.711 4.75 5.354 8.105 6.24 4.786 1.265 9.889-1.492 12.941-5.39 3.119-3.985 4.62-9.199 4.098-14.232l-.002-.005zM146.501 165.114c-2.8-1.201-7.209 6.358-10.172 5.852-1.419-.241-2.325-1.723-3.335-2.84-2.702-2.99-7.588-3.592-10.35-.832-1.827 1.825-2.486 4.662-2.541 7.378-.092 4.468 1.296 9.049 4.031 12.505 2.738 3.456 6.838 5.7 11.004 5.756 4.161.056 8.112-2.008 11.168-4.949 2.908-2.795 5.123-6.407 6.381-10.399l-6.189-12.471h.003z"
          fill="#B77C15"
        />
        <Path
          d="M141.983 183.13c-3.327 2.18-7.657 2.967-11.39 1.6-1.671-.612-3.175-1.622-4.52-2.787a22.088 22.088 0 01-5.924-8.253 19.06 19.06 0 00-.049.984c-.091 4.469 1.297 9.05 4.032 12.505 2.737 3.456 6.838 5.701 11.004 5.757 4.16.055 8.112-2.008 11.168-4.949 2.907-2.795 5.123-6.408 6.381-10.399l-3.065-3.643c-.186-.056-.373-.105-.558-.161-1.386 3.728-3.757 7.169-7.084 9.348l.005-.002zM197.947 185.102c-.966-.183-1.95.107-2.898.361-3.726.997-7.856 1.421-11.316-.283-3.742-1.843-5.953-5.765-9.168-8.42-.388-.322-2.902 1.869-2.934 2.005l.661 1.087a61.042 61.042 0 004.232 5.999c2.166 2.711 4.75 5.355 8.105 6.241 4.786 1.265 9.889-1.493 12.941-5.391.354-.453.685-.923.997-1.405a3.022 3.022 0 00-.618-.194h-.002z"
          fill="#8E5F13"
        />
        <Path
          d="M197.157 175.522c-.199-2.108-1.131-4.399-3.266-5.305-1.372-.583-3.028-.467-4.407.098-1.381.564-2.512 1.535-3.429 2.617-1.334 1.571-2.285 3.438-2.501 5.404-.127 1.153.02 2.561.44 3.841.644 1.962 2.63 3.394 4.912 3.396 1.944 0 3.943-.714 5.346-1.943 2.338-2.053 3.184-5.185 2.909-8.106l-.004-.002zM134.326 177.084c-1.091-2.392-3.077-4.48-5.643-5.593-.685-.299-1.448-.531-2.195-.409-1.513.246-2.316 1.781-2.557 3.164-.64 3.681 1.163 7.628 4.478 9.808 1.093.81 3.438.727 4.616.024 1.178-.703 1.872-1.963 2.026-3.239.154-1.276-.185-2.568-.725-3.755z"
          fill="#D8962B"
        />
        <Path
          d="M178.204 170.625c-3.469 4.87-10.053 6.865-15.963 5.957-5.91-.908-11.182-4.313-15.522-8.425a28.372 28.372 0 002.874 6.495l1.1 1.521c3.534 2.825 8.041 4.467 12.556 4.351 4.88.125 9.743-1.8 13.387-5.053.104-.145.214-.286.314-.433.884-1.305 1.633-2.885 1.252-4.413h.002z"
          fill="#8E5F13"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2913_349658">
          <Path fill="#fff" d="M0 0H240V240H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};