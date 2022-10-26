import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { ISvgProps } from '../../../utils/types';

export const LoupeOnBodyIcon = ({ width = 240, height = 240 }: ISvgProps) => {
  return (
    <Svg
      width={width * WINDOW_COEFFICIENT}
      height={height * WINDOW_COEFFICIENT}
      viewBox="0 0 240 240"
      fill="none">
      <G clipPath="url(#clip0_2913_349452)">
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
          d="M117.78.022c-.39.007-.778.016-1.167.027-.203.005-.404.011-.607.018-.374.011-.749.027-1.124.042-.194.01-.388.016-.58.025-.431.02-.859.042-1.29.067a138.062 138.062 0 00-2.066.134l-.379.029a126.764 126.764 0 00-2.99.267l-.575.06c-.395.043-.788.088-1.183.134-.162.02-.325.038-.486.056a116.359 116.359 0 00-4.98.71l-.537.089a96.67 96.67 0 00-1.16.2c-.168.03-.335.061-.503.09-.452.083-.908.17-1.358.257l-.272.05a104.48 104.48 0 00-1.903.394 139.835 139.835 0 00-1.846.41c-.399.092-.796.185-1.193.281l-.478.116c-.417.103-.834.208-1.25.315l-.367.094a122.887 122.887 0 00-3.583.997 120.7 120.7 0 00-1.277.384l-.426.131c-.408.127-.814.257-1.22.386l-.39.127c-.485.159-.966.32-1.446.482-.043.014-.085.03-.127.043-.551.187-1.098.381-1.647.577l-.078.03a118.254 118.254 0 00-3.065 1.153l-.377.147c-.431.17-.862.344-1.292.52l-.261.107c-1.056.435-2.102.884-3.144 1.348-.076.033-.15.069-.225.102-.435.194-.87.393-1.303.594l-.344.16c-.41.192-.819.384-1.225.58l-.312.15c-.482.234-.964.47-1.443.71l-.052.026c-.528.266-1.055.533-1.58.808a334.537 334.537 0 0110.025 4.246c14.082-6.243 29.445-9.527 45.313-9.527 29.869 0 57.952 11.633 79.073 32.754 21.122 21.122 32.752 49.204 32.752 79.074 0 10.182-1.352 20.157-3.971 29.72a154.004 154.004 0 006.26 7.59c.48-1.473.931-2.957 1.354-4.451.007-.025.014-.052.023-.076.419-1.488.812-2.985 1.173-4.491l.007-.029c.178-.746.35-1.491.515-2.24l.025-.112a119.953 119.953 0 001.298-6.874l.009-.06c.114-.723.221-1.446.322-2.171l.026-.196a129.796 129.796 0 00.313-2.47c.167-1.441.31-2.889.428-4.342l.031-.392c.054-.705.103-1.413.145-2.12.007-.096.011-.192.016-.285.038-.654.069-1.31.096-1.966.004-.112.011-.223.013-.337.027-.698.047-1.399.063-2.099.002-.15.006-.299.009-.446.013-.719.02-1.437.02-2.156 0-32.053-12.483-62.188-35.148-84.854C182.189 12.483 152.054 0 120 0c-.564 0-1.127.004-1.689.013l-.531.01z"
          fill="#FFDAAF"
        />
        <Path
          d="M120 227.27c59.243 0 107.27-48.027 107.27-107.27 0-59.243-48.027-107.27-107.27-107.27C60.757 12.73 12.73 60.758 12.73 120c0 59.243 48.027 107.27 107.27 107.27z"
          fill="#3F1670"
        />
        <Path
          opacity={0.07}
          d="M134.397 212.324c-7.097-.027-12.811-1.803-17.056-5.293-4.244 3.492-9.94 5.268-17.001 5.293h-.208c-.176 0-17.625-.067-25.615-5.853a21.516 21.516 0 01-8.016-11.378 22.154 22.154 0 01-.745-3.663c-.863-7.468 2.022-14.69 7.914-19.812 1.595-1.386 3.424-2.55 5.464-3.474.104-3.71.223-7.998.337-12.148-2.664 1.24-5.509 1.865-8.51 1.865a19.846 19.846 0 01-4.852-.598 20.398 20.398 0 01-10.067-4.009 19.906 19.906 0 01-5.794-4.915c-1.45-1.816-3.902-5.618-4.295-10.926-.533-2.594-.738-6.436.89-10.867a19.73 19.73 0 01.763-5.473 19.682 19.682 0 0111.225-12.668 28.743 28.743 0 014.814-3.043c1.562-2.43 3.472-5.437 4.748-7.459l4.366-7.056c2.501-4.04 5.558-8.976 7.79-12.568.436-.703.9-1.39 1.391-2.057A38.603 38.603 0 0178.2 61.343c-.469-10.238 3.085-20.053 10.004-27.636 6.92-7.584 16.369-12.017 26.608-12.485.573-.027 1.171-.04 1.769-.04 20.566 0 37.41 16.099 38.352 36.652a38.415 38.415 0 01-3.157 17.143 30.593 30.593 0 012.362 3.302c4.463 7.189 12.242 19.767 12.242 19.767 1.25 1.979 3.13 4.942 4.657 7.316a28.786 28.786 0 014.816 3.045 19.692 19.692 0 0111.223 12.668c.511 1.79.767 3.626.763 5.471 1.628 4.431 1.423 8.273.89 10.865-.391 5.303-2.842 9.105-4.288 10.921a19.966 19.966 0 01-5.801 4.922 20.384 20.384 0 01-10.071 4.011 19.936 19.936 0 01-4.848.601c-2.294 0-5.292-.402-8.509-1.895.116 4.19.234 8.505.337 12.177 2.039.926 3.87 2.089 5.466 3.477 5.892 5.122 8.777 12.34 7.913 19.802a21.732 21.732 0 01-1.595 6.038 21.53 21.53 0 01-7.164 9.009c-7.992 5.787-25.427 5.854-25.604 5.854h-.165l-.002-.004z"
          fill="#C25CF7"
        />
        <Path
          opacity={0.25}
          d="M134.397 208.054c-2.878-.012-11.586-.043-16.9-6.973a12.184 12.184 0 01-.157-.205 9.266 9.266 0 01-.156.205c-5.316 6.93-14.006 6.964-16.862 6.973h-.192c-.16 0-16.447-.217-23.11-5.043a17.247 17.247 0 01-5.74-7.219 17.555 17.555 0 01-1.285-4.851c-.7-6.05 1.66-11.918 6.472-16.101 2.205-1.917 4.657-3.039 6.852-3.737.172-6.169.417-14.942.605-21.865l-1.381-.475c-3.425 3.208-7.305 4.828-11.584 4.828a15.52 15.52 0 01-4.094-.547 16.076 16.076 0 01-8.48-3.377 15.6 15.6 0 01-4.802-3.994c-1.182-1.481-3.15-4.56-3.39-8.853-.523-2.307-.68-5.644.94-9.524-.089-1.705.105-3.398.578-5.049a15.287 15.287 0 019.295-10.116 24.746 24.746 0 015.569-3.436c1.555-2.405 3.748-5.854 5.428-8.516l.087-.138c.071-.118.14-.23.205-.335l4.094-6.615c2.501-4.038 5.556-8.97 7.785-12.56a26.895 26.895 0 012.855-3.807 34.033 34.033 0 01-4.567-15.575c-.417-9.098 2.742-17.822 8.893-24.564 6.151-6.74 14.549-10.682 23.65-11.097a33.347 33.347 0 011.575-.036c18.279 0 33.249 14.31 34.086 32.578.285 6.245-1.087 12.284-3.991 17.675a26.718 26.718 0 013.835 4.828c4.46 7.186 12.239 19.76 12.239 19.76a1111.85 1111.85 0 005.357 8.405 24.67 24.67 0 015.571 3.435 15.276 15.276 0 019.292 10.116c.473 1.653.668 3.347.578 5.049 1.618 3.88 1.464 7.215.942 9.522-.239 4.293-2.207 7.369-3.387 8.849a15.62 15.62 0 01-4.806 3.998 16.029 16.029 0 01-8.482 3.377 15.629 15.629 0 01-4.092.545c-3.168 0-7.42-.951-11.588-4.828l-1.377.473c.19 6.979.438 15.867.605 21.864 2.195.699 4.647 1.821 6.852 3.737 4.812 4.186 7.172 10.051 6.474 16.091-.04.352-.089.691-.152 1.035a17.523 17.523 0 01-1.131 3.822 17.238 17.238 0 01-5.74 7.222c-6.664 4.825-22.936 5.042-23.098 5.042h-.166l-.004.007z"
          fill="#C25CF7"
        />
        <Path
          opacity={0.35}
          d="M134.399 203.785c-4.069-.016-9.892-.58-13.513-5.301-1.711-2.229-2.823-4.712-3.543-6.903-.721 2.191-1.832 4.672-3.543 6.903-3.621 4.721-9.433 5.285-13.489 5.301h-.176c-2.434 0-15.78-.734-20.607-4.23a12.974 12.974 0 01-4.317-5.435c-.2-.471-.372-.955-.517-1.441a12.892 12.892 0 01-.453-2.229c-.536-4.63 1.298-9.145 5.033-12.389 2.479-2.155 5.457-3.07 8.228-3.61.19-6.756.556-19.825.779-28.23l-2.26-.778 1.002-8.556c-.177.258-.362.515-.551.769-1.326 1.767-2.608 3.063-3.374 3.838l-.049.049c-5.22 7.777-10.374 7.777-12.083 7.777a11.365 11.365 0 01-3.338-.5 11.747 11.747 0 01-5.919-2.012 11.717 11.717 0 01-.975-.736 11.211 11.211 0 01-3.81-3.063c-.915-1.145-2.401-3.503-2.48-6.785-.521-1.981-.633-4.815 1.047-8.188a11.203 11.203 0 01.328-4.614c1.037-3.632 3.76-6.403 7.347-7.519a20.442 20.442 0 016.267-3.763 935.095 935.095 0 006.182-9.679l.114-.181c.067-.113.134-.22.196-.321l4.097-6.617c2.498-4.036 5.553-8.969 7.781-12.557a22.27 22.27 0 014.735-5.439A29.884 29.884 0 0186.73 60.96c-.363-7.96 2.401-15.593 7.782-21.49 5.382-5.899 12.731-9.346 20.689-9.71.448-.02.915-.03 1.379-.03 15.99 0 29.091 12.52 29.82 28.501.301 6.613-1.546 12.994-5.256 18.34a22.479 22.479 0 015.736 6.218c4.458 7.184 12.235 19.756 12.235 19.756 2.059 3.262 4.667 7.358 6.133 9.6a20.412 20.412 0 016.27 3.764c3.587 1.12 6.307 3.889 7.344 7.518.431 1.502.54 3.073.328 4.614 1.68 3.374 1.569 6.207 1.049 8.186-.078 3.284-1.564 5.64-2.477 6.785a11.229 11.229 0 01-3.813 3.067 11.768 11.768 0 01-6.894 2.751 11.348 11.348 0 01-3.335.5c-6.68 0-10.611-5.551-12.088-7.784l-.047-.047c-.714-.721-2.048-2.066-3.371-3.835a18.772 18.772 0 01-.551-.77c.016.123 1.002 8.559 1.002 8.559l-2.26.778c.225 8.505.602 21.927.778 28.23 2.771.54 5.75 1.455 8.228 3.61 3.733 3.246 5.569 7.757 5.034 12.378a13.705 13.705 0 01-.458 2.249c-.145.488-.316.968-.513 1.43a12.974 12.974 0 01-4.317 5.435c-4.826 3.493-18.165 4.23-20.593 4.23h-.165v-.007z"
          fill="#C25CF7"
        />
        <Path
          opacity={0.78}
          d="M134.406 200.368c-3.63-.014-8.135-.476-10.81-3.965-3.217-4.194-3.975-9.656-4.102-10.801a729.776 729.776 0 00-2.151-15.526 712.647 712.647 0 00-2.151 15.526c-.127 1.145-.883 6.604-4.103 10.801-2.675 3.487-7.173 3.951-10.792 3.965h-.169c-3.891 0-15.122-1.065-18.594-3.581a9.541 9.541 0 01-3.177-4.005 9.943 9.943 0 01-.64-2.169 9.795 9.795 0 01-.08-.555c-.404-3.492 1.01-6.923 3.88-9.417 2.57-2.234 5.994-2.778 9.323-3.282.219-7.767.7-24.935.924-33.553l-2.028-.699.64-5.461c.192-1.642.44-3.568.7-5.609.297-2.314.63-4.924.969-7.758l-5.99 7.093c-.507 1.435-1.284 2.856-2.317 4.235-1.182 1.577-2.362 2.768-3.067 3.48-.094.096-.199.199-.286.29-1.347 2.059-4.382 6.526-9.42 6.526a7.953 7.953 0 01-2.724-.48 8.333 8.333 0 01-4.615-1.445 8.422 8.422 0 01-1.011-.804 7.725 7.725 0 01-3.023-2.302c-.583-.73-1.803-2.573-1.732-5.143-.725-2.213-.314-4.607 1.225-7.144a7.775 7.775 0 01.02-4.227c.759-2.655 2.823-4.646 5.522-5.322.07-.017.172-.051.28-.091 1.806-1.765 4.252-3.211 6.677-3.929l.055-.016c1.156-1.731 4.202-6.496 6.868-10.72l.009.007c.109-.196.218-.375.316-.533l4.097-6.618c2.498-4.033 5.553-8.966 7.78-12.554a19.161 19.161 0 016.862-6.575 26.52 26.52 0 01-7.427-17.213c-.321-7.047 2.126-13.805 6.892-19.03 4.767-5.226 11.273-8.28 18.321-8.601.402-.018.812-.03 1.223-.03 14.16 0 25.76 11.09 26.407 25.243.323 7.057-2.122 13.82-6.885 19.038-.012.013-.023.024-.034.038 3.295 1.624 6.004 4.058 7.909 7.128 4.458 7.182 12.233 19.751 12.233 19.751 2.615 4.144 5.667 8.923 6.834 10.669.018.005.036.012.053.016 2.428.718 4.873 2.164 6.68 3.929.105.038.21.074.279.091 2.697.676 4.761 2.667 5.522 5.322a7.802 7.802 0 01.02 4.227c1.54 2.537 1.95 4.931 1.225 7.144.071 2.57-1.149 4.413-1.729 5.143a7.732 7.732 0 01-3.025 2.302c-.313.29-.652.56-1.011.804a8.331 8.331 0 01-4.616 1.443 7.948 7.948 0 01-2.722.48c-5.031 0-8.065-4.46-9.42-6.526l-.285-.29c-.705-.712-1.885-1.903-3.066-3.481-1.033-1.378-1.809-2.8-2.316-4.234l-5.99-7.093c.339 2.836.672 5.44.966 7.742.263 2.055.511 3.982.703 5.622l.64 5.464-2.028.698c.223 8.612.705 25.785.924 33.553 3.326.505 6.753 1.047 9.323 3.282 2.87 2.495 4.284 5.924 3.882 9.409a9.748 9.748 0 01-.722 2.733 9.56 9.56 0 01-3.177 4.005c-3.474 2.514-14.705 3.58-18.587 3.58h-.159l-.002.003z"
          fill="#C25CF7"
        />
        <Path
          d="M171.725 128.996c.709-1.143.924-2.463.571-3.695-.419-1.468-1.566-2.57-3.068-2.947-.461-.116-1.158-.386-1.445-.558-1.136-1.238-3.173-2.764-5.652-3.501a41.331 41.331 0 00-.823-.234 33.182 33.182 0 01-.352-.098c-.07-.089-.168-.221-.308-.415-.81-1.124-4.846-7.458-7.343-11.416 0 0-7.773-12.566-12.23-19.748-1.899-3.058-4.726-5.314-8.249-6.606l-.022-.107-1.988-.555a14.48 14.48 0 00-1.513-.328 23.263 23.263 0 004.275-3.673 22.88 22.88 0 005.995-16.579c-.564-12.326-10.664-21.982-22.996-21.982-.354 0-.713.009-1.066.024-12.688.58-22.538 11.374-21.958 24.062a22.994 22.994 0 0010.633 18.39c-.107.028-.216.055-.321.086l-1.988.555-.022.107c-3.523 1.292-6.35 3.545-8.249 6.606-4.453 7.173-12.215 19.723-12.215 19.721-2.514 3.982-6.548 10.316-7.358 11.441a11.69 11.69 0 01-.308.413l-.352.098c-.237.067-.509.14-.823.234-2.479.734-4.516 2.26-5.652 3.498-.287.172-.983.442-1.445.558-1.502.377-2.649 1.479-3.068 2.947-.353 1.234-.138 2.553.571 3.695-1.32 1.684-2.71 4.045-1.624 6.222-.286 1.765.54 3.041.928 3.528a4.35 4.35 0 002.26 1.486c.286.345.627.655 1.02.921a4.938 4.938 0 003.337.825 4.495 4.495 0 002.086.511c2.912 0 4.998-2.59 6.656-5.124l.071-.107c.103-.116.35-.366.551-.572.685-.691 1.718-1.735 2.76-3.125 1.165-1.558 1.731-2.919 2.006-3.878l13.647-16.162c-.107 1.04-.223 2.147-.348 3.322-.605 5.946-1.292 11.314-1.845 15.629-.272 2.128-.509 3.969-.696 5.571l-.32 2.731 1.795.618c-.203 8.243-.9 32.959-1.07 38.86-.753.17-1.733.319-2.685.464-3.021.458-5.875.888-7.73 2.504-2.007 1.742-3.002 4.089-2.73 6.443a6.138 6.138 0 00.223 1.087c.07.234.152.468.25.696a6.135 6.135 0 002.037 2.574c2.194 1.589 11.747 2.932 16.584 2.932h.163c4.217-.016 6.711-.826 8.092-2.626 2.722-3.55 3.34-8.373 3.42-9.123 1.664-13.054 3.86-27.279 5.544-35.211 1.687 7.934 3.88 22.159 5.544 35.211.081.748.699 5.573 3.423 9.123 1.381 1.8 3.878 2.61 8.105 2.626h.15c4.837 0 14.388-1.341 16.583-2.929a6.144 6.144 0 002.04-2.577 6.796 6.796 0 00.417-1.408c.022-.123.04-.25.056-.382.272-2.347-.723-4.692-2.729-6.436-1.856-1.613-4.71-2.046-7.731-2.504-.952-.145-1.932-.292-2.686-.464-.167-5.901-.863-30.619-1.069-38.86l1.794-.618-.319-2.731c-.187-1.604-.424-3.443-.696-5.571-.551-4.313-1.238-9.683-1.845-15.644a949.652 949.652 0 01-.348-3.307l13.647 16.162c.275.957.841 2.32 2.006 3.878 1.04 1.39 2.075 2.434 2.758 3.123.203.205.448.455.553.571l.071.11c1.658 2.534 3.744 5.122 6.653 5.122.331 0 .661-.036.984-.107a4.29 4.29 0 001.102-.404 4.946 4.946 0 003.338-.825 4.83 4.83 0 001.02-.922 4.348 4.348 0 002.26-1.486c.386-.484 1.213-1.762.926-3.525 1.084-2.175-.304-4.538-1.625-6.22l.005.005z"
          fill="#D38FFF"
        />
        <Path
          d="M130.435 73.46c7.661-7.66 7.661-20.082 0-27.743-7.661-7.661-20.082-7.661-27.744 0-7.66 7.661-7.66 20.082 0 27.744 7.662 7.66 20.083 7.66 27.744 0zM148.685 185.798c-1.747-1.519-6.975-1.584-9.737-2.423a6.171 6.171 0 01-.477-.162c-.426-.166-.899-.719-1.136-1.036a5.962 5.962 0 01-.149-.216c-.002-.004-.007-.009-.007-.011a10.469 10.469 0 00-.031-.194 2.405 2.405 0 01-.013-.103c-.005-.04-1.123-39.679-1.163-42.705a70.46 70.46 0 001.553-.508c-.573-4.889-1.644-12.387-2.546-21.251-.479-4.498-.885-8.545-1.135-11.519.055-.803.294-1.288.734-1.587l-4.681-21.677c-2.543-.711-6.542-.5-7.418-.533h-10.272c-.877.034-4.873-.178-7.418.533l-4.681 21.677c.439.299.678.784.734 1.587-.25 2.974-.658 7.021-1.136 11.519-.901 8.862-1.972 16.36-2.545 21.251.515.176 1.032.345 1.552.508-.037 3.026-1.155 42.663-1.162 42.705l-.013.103-.032.194-.006.011a5.165 5.165 0 01-.15.216c-.238.317-.71.87-1.135 1.036-.15.058-.31.111-.478.162-2.764.837-7.99.904-9.736 2.423-1.283 1.116-1.7 2.39-1.578 3.465.007.06.016.118.025.179a2.899 2.899 0 00.196.667c.201.471.513.868.9 1.147.94.682 9.002 2.302 14.691 2.28h.038c2.586-.009 4.681-.359 5.395-1.288 2.282-2.976 2.739-7.44 2.739-7.44s5.478-42.999 8.217-42.999a.463.463 0 00.096-.012c.016-.002.032-.006.047-.009.167 0 .335.005.502.005H117.43c.167 0 .334-.005.502-.005.015.005.031.007.047.009.006 0 .013.005.022.005a.453.453 0 00.074.007c2.739 0 8.217 42.999 8.217 42.999s.457 4.464 2.739 7.44c.714.931 2.809 1.279 5.395 1.288h.038c5.687.022 13.75-1.598 14.691-2.28.386-.279.699-.676.9-1.147a2.904 2.904 0 00.22-.846c.125-1.077-.292-2.349-1.577-3.465h-.013z"
          fill="#FF4848"
        />
        <Path
          d="M124.286 82.005c.263-.007 9.433-.995 13.888 6.182 4.456 7.18 12.229 19.743 12.229 19.743s6.309 9.997 7.476 11.617c1.167 1.617 1.247 1.423 3.284 2.026 2.037.602 3.559 1.909 4.183 2.621.623.712 2.327 1.292 3.052 1.475.726.181.935 1.066.143 1.885s-3.313-.553-3.313-.553 5.928 5.618 4.978 6.827c-.355.453-.855.399-1.341.156.805.828 1.495 1.87.89 2.63-.567.71-1.62.255-2.559-.403.587.722.886 1.537.033 2.112-1.108.752-2.382-.209-3.246-1.135.509.783.852 1.666-.018 1.858-1.633.362-3.748-3.128-4.174-3.759-.428-.631-1.892-1.801-3.369-3.773-1.479-1.974-1.586-3.389-1.586-3.389l-20.952-24.814M110.397 82.005c-.263-.007-9.432-.995-13.888 6.182-4.455 7.18-12.228 19.743-12.228 19.743s-6.31 9.997-7.477 11.617c-1.166 1.617-1.247 1.423-3.284 2.026-2.037.602-3.558 1.909-4.183 2.621-.623.712-2.327 1.292-3.052 1.475-.725.181-.935 1.066-.143 1.885s3.313-.553 3.313-.553-5.928 5.618-4.977 6.827c.354.453.854.399 1.34.156-.805.828-1.494 1.87-.89 2.63.567.71 1.62.255 2.56-.403-.587.722-.886 1.537-.034 2.112 1.109.752 2.383-.209 3.246-1.135-.508.783-.852 1.666.018 1.858 1.633.362 3.748-3.128 4.174-3.759.429-.631 1.892-1.801 3.37-3.773 1.478-1.974 1.585-3.389 1.585-3.389l20.952-24.814"
          fill="#FF4848"
        />
        <Path
          d="M120.627 66.367h-8.775c-.572 0-1.035.464-1.035 1.035v.003c0 .571.463 1.035 1.035 1.035h8.775c.572 0 1.035-.464 1.035-1.035v-.003c0-.571-.463-1.035-1.035-1.035z"
          fill="#440C20"
        />
        <Path
          d="M103.611 55.981c1.166 1.852 4.772 3.3 6.871.163M128.525 55.981c-1.167 1.852-4.772 3.3-6.872.163"
          stroke="#440C20"
          strokeWidth={2}
          strokeMiterlimit={10}
          strokeLinecap="round"
        />
        <Path
          d="M135.943 138.948c.386-.12-11.294 2.457-17.672 2.959.415.332.879 1.501 1.372 3.255 5.462-.834 10.923-1.671 16.385-2.506a526.3 526.3 0 01-.087-3.705l.002-.003zM98.702 138.948c-.386-.12 11.294 2.457 17.672 2.959-.415.332-.879 1.501-1.372 3.255-5.461-.834-10.923-1.671-16.385-2.506.05-1.914.08-3.241.087-3.705l-.002-.003zM134.926 52.553c-.031.687-.054 1.374-.101 2.057-.305 4.54-1.644 9.07-4.256 12.797-2.613 3.728-6.56 6.597-11.022 7.49-5.986 1.198-12.389-1.332-16.528-5.817-3.139-3.402-5.046-7.793-5.814-12.38a19.707 19.707 0 00-.192 3.786c.496 10.823 9.67 19.197 20.493 18.701 10.823-.495 19.196-9.67 18.7-20.492a19.545 19.545 0 00-1.28-6.14v-.002z"
          fill="#B71616"
        />
        <Path
          d="M115.292 142.128c-6.815 10.656-5.729 35.255-11.98 46.045-.621 1.394-2.218 1.916-2.575 1.956a44.38 44.38 0 01-9.87.005c-1.368-.152-2.785-.388-3.916-1.176-.84-.585-1.472-1.553-1.555-2.546-.805.953-1.07 1.968-.968 2.852a2.983 2.983 0 00.294.999c.201.404.485.743.828.993.942.683 9.002 2.302 14.692 2.28 2.585-.009 4.68-.359 5.394-1.289 2.283-2.977 2.74-7.441 2.74-7.441s4.612-36.487 7.488-42.203c-.085-.384-.487-.604-.569-.475h-.003zM119.145 141.854c7.1 10.434 5.908 35.509 12.233 46.428.621 1.394 2.218 1.916 2.575 1.957 3.275.368 6.593.37 9.87.004 1.368-.152 2.785-.388 3.916-1.176.841-.584 1.472-1.553 1.555-2.545.805.952 1.071 1.967.968 2.851a3.067 3.067 0 01-.294.999 2.721 2.721 0 01-.828.993c-.942.683-9.002 2.303-14.692 2.28-2.585-.008-4.68-.359-5.394-1.289-2.283-2.976-2.74-7.441-2.74-7.441s-4.612-36.487-7.488-42.203c.085-.383.19-.678.315-.858h.004zM169.034 126.246c-.232-.04-.694-.071-.932-.029-.377.065-.728.241-1.1.324-1.14.25-2.265-.399-3.253-1.02.464 2.298 6.747 6.069 5.524 7.86-.346.507-4.337-3.09-4.71-3.514.192.639 3.78 4.036 4.132 4.601.353.564.239 1.553-.426 1.604-.348.027-.647-.234-.899-.475-.98-.944-3.164-2.952-4.145-3.896 1.126 1.326 4.368 4.601 3.701 5.533-.667.933-2.28-.089-3.144-.977-.861-.888-1.497-2.019-2.53-2.699.982 1.336 3.101 3.491 2.6 4.232-.502.741-2.263-1.33-3.124-2.338-1.923-2.256-3.88-4.567-4.962-7.325-.357-.912-.618-1.867-1.091-2.724-.433-.783-1.033-1.459-1.622-2.133-5.622-6.421-11.465-12.819-16.211-19.91-.943-1.41-2.026-2.204-2.789-1.923-.763.281.141 2.706.288 2.499l20.374 24.637s.15 1.411 1.687 3.34c1.537 1.93 3.034 3.055 3.48 3.673.447.618 2.664 4.042 4.286 3.634.866-.219.496-1.091-.038-1.858.891.899 2.191 1.822 3.278 1.039.834-.602.511-1.407-.096-2.11.957.629 2.023 1.053 2.568.328.582-.777-.138-1.799-.968-2.602.493.23.995.268 1.336-.194.915-1.238-4.701-6.579-4.701-6.579s2.278 1.209 3.046.366c.452-.498.584-.991.439-1.357l.002-.007z"
          fill="#B71616"
        />
        <Path
          d="M133.969 106.854s-1.268-4.185-.368-5.086c.901-.902 1.782.004 1.782.004l.065 3.474s-1.609-.578-1.479 1.608zM65.647 126.264c.232-.04.738-.089.977-.047.377.065.727.241 1.1.324 1.14.25 2.264-.399 3.253-1.02-.464 2.298-6.747 6.069-5.524 7.86.346.507 4.337-3.09 4.71-3.514-.192.639-3.78 4.036-4.132 4.601-.353.564-.24 1.553.426 1.604.348.027.647-.234.899-.475.98-.944 3.163-2.952 4.145-3.896-1.127 1.326-4.368 4.601-3.701 5.533.667.933 2.28-.089 3.143-.977.862-.888 1.497-2.019 2.53-2.699-.981 1.336-3.1 3.491-2.599 4.232.502.741 2.263-1.33 3.124-2.338 1.923-2.256 3.88-4.567 4.962-7.325.357-.912.618-1.867 1.09-2.724.433-.783 1.034-1.459 1.623-2.133 5.622-6.421 11.465-12.819 16.21-19.91.944-1.41 2.026-2.204 2.789-1.923.761.281-.14 2.706-.288 2.499L80.01 128.573s-.15 1.411-1.686 3.34c-1.537 1.93-3.034 3.055-3.48 3.673-.447.618-2.665 4.042-4.287 3.634-.865-.219-.495-1.091.038-1.858-.89.899-2.19 1.822-3.277 1.039-.834-.602-.511-1.407.096-2.11-.957.629-2.024 1.053-2.568.328-.583-.777.138-1.799.968-2.602-.493.23-.995.268-1.336-.194-.915-1.238 4.58-6.483 4.58-6.483s-2.108 1.151-2.876.31c-.453-.498-.678-1.013-.535-1.381v-.005z"
          fill="#B71616"
        />
        <Path
          d="M100.757 106.854s1.339-4.234.44-5.136c-.902-.901-1.855.054-1.855.054l-.064 3.474s1.608-.578 1.479 1.608z"
          fill="#B71616"
        />
        <Path
          d="M205.294 75.791c-2.006 2.497-5.306 3.474-8.387 4.348-13.473 3.827-30.032 8.78-43.095 13.835l-3.26-9.326c10.892-5.562 27.909-12.73 38.801-18.292 4.132-2.11 9.018-4.25 13.219-2.285 4.179 1.957 5.611 8.121 2.722 11.718v.002z"
          fill="#EAC31F"
        />
        <Path
          d="M204.972 65.975c-.261.403-.506.823-.749 1.218-3.67 6-10.366 9.388-16.885 12.025-10.879 4.4-22.217 7.55-33.526 10.69l-.948 1.356.948 2.71c13.06-5.055 29.622-10.008 43.095-13.834 3.081-.875 6.381-1.85 8.387-4.349 2.235-2.782 1.883-7.097-.324-9.816h.002z"
          fill="#C18423"
        />
        <Path
          opacity={0.59}
          d="M131.327 123.745c13.389 0 24.243-10.854 24.243-24.243 0-13.388-10.854-24.242-24.243-24.242s-24.243 10.854-24.243 24.242c0 13.389 10.854 24.243 24.243 24.243z"
          fill="#4BF7F7"
        />
        <Path
          d="M111.328 93.41c3.52 7.735 10.247 13.949 18.234 16.845 7.588 2.751 16.218 2.474 23.627-.714a24.125 24.125 0 01-10.662 11.322c-11.822 6.285-26.503 1.799-32.788-10.024-.004-.011-.009-.02-.015-.031-2.515-5.658-3.151-12.153-1.687-18.174.085-.348.185-.712.44-.962.939-.921 2.302.54 2.846 1.738h.005z"
          fill="#4DA5F4"
          opacity={0.96}
        />
        <Path
          d="M128.668 72.792c-14.888 1.381-25.838 14.57-24.457 29.457 1.381 14.888 14.569 25.838 29.457 24.457 14.887-1.381 25.837-14.569 24.456-29.457-1.381-14.888-14.568-25.838-29.456-24.457zm24.47 24.921c1.124 12.133-7.8 22.882-19.932 24.007-12.133 1.124-22.882-7.8-24.007-19.933-1.124-12.132 7.8-22.882 19.933-24.006 12.132-1.125 22.882 7.8 24.006 19.932z"
          fill="#EAC31F"
        />
        <Path
          d="M147.114 91.955c-1.838-3.592-5.343-6.08-8.536-6.99-2.128-.266-2.822 2.28-1.102 2.775 2.351 1.02 4.272 3.217 4.96 5.687.484 1.745.767 4.045 2.523 4.48 1.296.321 2.61-.808 2.916-2.106.306-1.299-.152-2.657-.761-3.844v-.002z"
          fill="#fff"
        />
        <Path
          d="M111.002 117.813a26.96 26.96 0 01-6.289-12.295c2.142.669 4.196 1.813 6.184 2.947a22.02 22.02 0 003.835 6.006c7.711 8.61 20.656 9.738 29.714 2.894 3.195-.404 6.32-1.239 9.23-2.56a27.148 27.148 0 01-4.445 5.112c-11.137 9.975-28.254 9.033-38.229-2.104z"
          fill="#C18423"
        />
        <Path
          d="M112.223 84.022c4.201-5.06 10.122-8.182 16.672-8.789l.029.313-.029-.313c13.52-1.254 25.539 8.726 26.793 22.246a24.466 24.466 0 01-5.573 18.003c-4.201 5.06-10.122 8.181-16.671 8.788-13.52 1.254-25.539-8.726-26.792-22.246a24.475 24.475 0 015.573-18.002h-.002zm42.84 13.513c-1.222-13.177-12.935-22.902-26.11-21.68-6.383.592-12.152 3.635-16.249 8.566-4.094 4.933-6.023 11.162-5.432 17.545 1.222 13.177 12.935 22.902 26.11 21.679a23.836 23.836 0 0016.247-8.565c2.831-3.411 4.627-7.443 5.269-11.717.286-1.906.344-3.86.161-5.83l.004.002z"
          fill="#8E660D"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2913_349452">
          <Path fill="#fff" d="M0 0H240V240H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
