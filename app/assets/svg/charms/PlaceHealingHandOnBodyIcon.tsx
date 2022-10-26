import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

import { ISvgProps } from '../../../utils/types';

export const PlaceHealingHandOnBodyIcon = ({
  width = 240,
  height = 240,
}: ISvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 240 240" fill="none">
      <G clipPath="url(#clip0_2913_351440)">
        <Path
          d="M120 240c-32.052 0-62.188-12.482-84.853-35.147C12.482 182.188 0 152.052 0 120c0-32.052 12.482-62.188 35.147-84.853C57.812 12.482 87.947 0 120 0c32.052 0 62.188 12.482 84.853 35.147C227.518 57.812 240 87.945 240 120c0 32.055-12.482 62.188-35.147 84.853C182.188 227.518 152.052 240 120 240z"
          fill="#FFB452"
        />
        <Path
          d="M120 240c-32.052 0-62.188-12.482-84.853-35.147C12.482 182.188 0 152.052 0 120c0-32.052 12.482-62.188 35.147-84.853C57.812 12.482 87.947 0 120 0c32.052 0 62.188 12.482 84.853 35.147C227.518 57.812 240 87.945 240 120c0 32.055-12.482 62.188-35.147 84.853C182.188 227.518 152.052 240 120 240zm0-231.826c-29.869 0-57.951 11.633-79.072 32.754C19.807 62.049 8.174 90.129 8.174 120c0 29.871 11.633 57.951 32.754 79.072C62.049 220.193 90.13 231.826 120 231.826s57.951-11.633 79.072-32.754c21.121-21.121 32.754-49.203 32.754-79.072s-11.633-57.951-32.754-79.072C177.951 19.807 149.869 8.174 120 8.174z"
          fill="#FFB452"
        />
        <Path
          d="M206.642 203.023a125.074 125.074 0 004.958-5.501c-5.187 1.658-10.296 2.942-14.61 3.582-20.867 19.835-48.092 30.722-76.99 30.722-28.898 0-57.951-11.633-79.072-32.754C19.807 177.951 8.174 149.869 8.174 120c0-5.885.454-11.696 1.339-17.402-2.025-4.954-3.869-10.03-5.064-15.158a119.905 119.905 0 00-3.805 20.01l-.018.17a119.447 119.447 0 00-.333 3.893c-.008.121-.015.245-.024.366-.037.556-.07 1.112-.1 1.67l-.015.273c-.03.631-.06 1.26-.081 1.893-.005.127-.007.253-.011.381-.016.507-.029 1.012-.04 1.52-.002.17-.007.339-.009.511-.009.625-.015 1.249-.015 1.873 0 32.052 12.482 62.188 35.147 84.853C57.81 227.518 87.945 240 119.998 240c32.052 0 62.188-12.482 84.853-35.147a123.424 123.424 0 001.791-1.828v-.002z"
          fill="#B68036"
        />
        <Path
          d="M117.779.022c-.39.007-.779.015-1.167.027-.203.006-.403.01-.606.017l-1.125.042-.58.024a121.586 121.586 0 00-3.353.201l-.379.03c-.433.034-.865.07-1.295.107-.187.015-.373.033-.56.05a174.055 174.055 0 00-1.71.17c-.394.042-.787.086-1.182.133l-.487.057c-1.11.135-2.217.285-3.32.45-.152.022-.304.046-.456.07-.402.062-.803.126-1.202.19-.179.029-.358.06-.536.09-.389.067-.775.133-1.16.201l-.503.09c-.455.085-.907.17-1.361.259l-.272.053c-.555.11-1.111.223-1.665.342l-.24.053c-.463.099-.927.2-1.39.306l-.454.106a104.448 104.448 0 00-1.67.4c-.417.103-.834.207-1.25.315a118.44 118.44 0 00-3.624.995 140.35 140.35 0 00-1.606.48l-.428.133c-.408.125-.814.255-1.22.386l-.39.125c-.483.16-.966.318-1.447.483-.042.016-.084.029-.126.042-.549.188-1.098.382-1.645.578l-.077.029c-.497.178-.99.36-1.485.545l-.346.132a142.4 142.4 0 00-1.237.476l-.377.148c-.433.17-.863.344-1.293.52l-.26.107a116.12 116.12 0 00-3.143 1.347l-.225.102a98.568 98.568 0 00-1.646.754c-.41.192-.818.384-1.224.58l-.31.15c-.484.234-.965.47-1.443.71l-.053.027c-.527.264-1.055.534-1.58.807a330.16 330.16 0 0110.023 4.246c14.083-6.244 29.445-9.526 45.313-9.526 29.868 0 57.951 11.632 79.072 32.754 21.121 21.12 32.754 49.203 32.754 79.072 0 10.183-1.353 20.157-3.973 29.721a155.444 155.444 0 006.26 7.591c.481-1.473.931-2.957 1.354-4.451l.022-.075c.419-1.488.812-2.986 1.174-4.492l.006-.029c.179-.746.351-1.491.516-2.241.009-.038.016-.075.025-.11a120.4 120.4 0 00.884-4.445l.04-.22c.13-.735.256-1.471.372-2.21l.009-.06c.115-.721.221-1.445.322-2.17l.029-.197c.099-.716.19-1.438.276-2.157l.037-.313a122.142 122.142 0 00.717-9.105c.004-.112.011-.222.015-.335.027-.699.047-1.398.062-2.1.002-.15.007-.297.009-.447.013-.717.022-1.436.022-2.155 0-32.053-12.482-62.188-35.147-84.853C182.188 12.482 152.052 0 120 0c-.565 0-1.127.004-1.689.013-.177.002-.356.007-.532.01z"
          fill="#FFDAAF"
        />
        <Path
          d="M120 227.269c59.243 0 107.269-48.026 107.269-107.269S179.243 12.73 120 12.73 12.731 60.757 12.731 120c0 59.243 48.026 107.269 107.269 107.269z"
          fill="#3F1670"
        />
        <Path
          d="M153.784 18.16c-10.623-3.522-21.982-5.43-33.784-5.43-30.153 0-57.4 12.442-76.888 32.472 13.116 7.1 28.271 10.838 44.258 10.106 27.806-1.273 51.879-15.775 66.414-37.147zM120 227.268c15.199 0 29.659-3.163 42.761-8.862-2.005-18.88-3.706-35.848-4.762-48.396.24-3.479 1.272-5.574 3.178-6.873l15.087 48.209a107.855 107.855 0 0030.261-27.93c-5.08-21.093-11.99-49.777-16.864-69.917-8.609-35.564-47.662-43.914-48.756-44.24-11.019-3.086-28.327-2.167-32.125-2.31H64.292c-3.798.143-21.106-.776-32.125 2.31-.298.088-3.417.773-7.969 2.443-7.334 14.518-11.467 30.925-11.467 48.302 0 59.243 48.026 107.269 107.269 107.269v-.005z"
          fill="#B348FF"
        />
        <Path
          d="M171.718 170.667c-1.762-7.135-6.866-18.748-10.384-18.724-3.518.025-1.068 11.812-.157 11.19l15.087 48.208a107.369 107.369 0 005.492-3.626 858.657 858.657 0 01-10.038-37.048zM153.784 18.16a106.609 106.609 0 00-17.709-4.232c-10.733 11.348-24.604 19.745-39.872 22.802-13.117 2.627-26.699 1.116-39.24-3.534a107.698 107.698 0 00-13.854 12.006c13.117 7.1 28.272 10.838 44.259 10.106 27.806-1.273 51.878-15.775 66.414-37.148h.002z"
          fill="#842AD3"
        />
        <Path
          opacity={0.1}
          d="M138.428 199.485c36.647 0 66.355-29.708 66.355-66.354 0-36.647-29.708-66.355-66.355-66.355-36.646 0-66.354 29.708-66.354 66.355 0 36.646 29.708 66.354 66.354 66.354z"
          fill="red"
        />
        <Path
          opacity={0.1}
          d="M138.428 213.061c44.144 0 79.93-35.786 79.93-79.931 0-44.144-35.786-79.93-79.93-79.93-44.144 0-79.93 35.786-79.93 79.93 0 44.145 35.786 79.931 79.93 79.931z"
          fill="red"
        />
        <Path
          opacity={0.4}
          d="M138.428 181.869c26.917 0 48.738-21.821 48.738-48.738 0-26.918-21.821-48.738-48.738-48.738-26.917 0-48.738 21.82-48.738 48.738 0 26.917 21.821 48.738 48.738 48.738z"
          fill="red"
        />
        <Path
          opacity={0.6}
          d="M138.428 165.132c17.674 0 32.002-14.327 32.002-32.001s-14.328-32.002-32.002-32.002c-17.674 0-32.001 14.328-32.001 32.002 0 17.674 14.327 32.001 32.001 32.001z"
          fill="red"
        />
        <Path
          d="M138.428 151.282c10.025 0 18.153-8.127 18.153-18.152s-8.128-18.152-18.153-18.152c-10.025 0-18.152 8.127-18.152 18.152s8.127 18.152 18.152 18.152z"
          fill="red"
        />
        <Path
          d="M138.428 141.064a7.934 7.934 0 100-15.868 7.934 7.934 0 100 15.868z"
          fill="#F9DEF5"
        />
        <Path
          opacity={0.15}
          d="M165.637 143.878c.772-10.142-1.401-20.235-6.326-29.298a52.968 52.968 0 00-3.946-6.198c-2.483-7.51-6.798-14.385-12.548-19.974a50.255 50.255 0 00-31.121-14.063 48.824 48.824 0 00-17.93-3.423c-8.22 0-16.269 1.921-25.058 6.012a50.182 50.182 0 00-16.216-2.662c-13.75 0-26.276 5.505-35.261 14.884a107.3 107.3 0 00-4.502 30.841c0 54.702 40.945 99.839 93.859 106.438 5.661-3.946 10.108-7.563 13.657-10.453l1.511-1.224c5.34-2.816 12.159-6.645 18.889-11.718 6.266-4.723 11.271-9.637 15.296-15.023 8.661-11.588 12.376-24.853 10.739-38.358a50.32 50.32 0 00-1.048-5.786l.005.005z"
          fill="#00FFD4"
        />
        <Path
          opacity={0.15}
          d="M156.711 144.606c.966-8.922-.799-17.804-5.153-25.812a44.07 44.07 0 00-4.151-6.298c-1.954-6.698-5.637-12.803-10.739-17.76-7.312-7.104-16.836-11.209-27.004-11.676-4.942-2.173-10.393-3.313-15.898-3.313-7.872 0-15.614 2.122-24.624 6.813-5.267-2.3-10.85-3.463-16.65-3.463-17.182 0-32.032 10.493-37.833 26.733-.311.873-.827 1.976-1.333 2.944l-.377.318a108.615 108.615 0 00-.218 6.908c0 50.295 34.615 92.504 81.322 104.108 9.142-5.622 15.759-11.006 20.627-14.965a282.88 282.88 0 012.226-1.798c3.917-2.049 11.343-6.003 18.432-11.348 5.591-4.212 10.02-8.549 13.538-13.258 7.277-9.735 10.406-20.805 9.048-32.014a41.38 41.38 0 00-1.216-6.117l.003-.002z"
          fill="#00FFD4"
        />
        <Path
          opacity={0.15}
          d="M147.714 145.36c1.211-7.715-.121-15.389-3.906-22.354a34.947 34.947 0 00-4.434-6.374c-1.374-5.905-4.398-11.238-8.853-15.568-6.123-5.95-14.226-9.226-22.815-9.226h-.11c-4.213-2.146-8.938-3.269-13.828-3.269-7.393 0-14.914 2.42-24.447 7.97-5.172-3.038-10.891-4.617-16.827-4.617-13.406 0-24.994 8.194-29.527 20.878-.745 2.085-1.991 4.46-2.757 5.748-1.782 1.414-4.398 3.646-7.353 6.672 2.097 43.76 30.413 80.645 69.585 95.291a90.283 90.283 0 006.258-3.47c9.025-5.476 15.605-10.829 20.411-14.742a175.414 175.414 0 012.982-2.393l.196-.104c3.538-1.848 10.896-5.695 17.74-10.852 4.916-3.705 8.77-7.464 11.783-11.493 5.891-7.883 8.436-16.761 7.355-25.674a31.995 31.995 0 00-1.453-6.423z"
          fill="#00FFD4"
        />
        <Path
          opacity={0.15}
          d="M138.565 146.176c1.544-6.467.695-13.062-2.51-18.958a25.907 25.907 0 00-4.875-6.396c-.681-5.095-3.015-9.744-6.808-13.432-4.467-4.341-10.387-6.732-16.666-6.732-.752 0-1.511.033-2.272.102-3.381-2.19-7.41-3.368-11.666-3.368-4.934 0-11.725 1.266-24.791 9.715-4.793-4.133-10.512-6.365-16.483-6.365-9.63 0-17.958 5.898-21.218 15.023-1.286 3.597-3.538 7.578-4.515 8.868-2.148 1.606-7.347 5.806-12.673 12.469 5.514 34.412 27.396 63.357 57.41 78.598 3.772-1.429 8.035-3.421 12.625-6.205 8.505-5.161 14.809-10.289 19.414-14.038 1.019-.83 3.081-2.508 3.842-3.044.188-.1.411-.216.664-.349l.157-.081c3.328-1.741 10.254-5.358 16.518-10.08 4.239-3.196 7.519-6.379 10.025-9.731 4.506-6.031 6.466-12.714 5.664-19.331a22.939 22.939 0 00-1.844-6.667l.002.002z"
          fill="#00FFD4"
        />
        <Path
          opacity={0.25}
          d="M128.97 147.23c2.228-5.35 2.016-10.865-.666-15.801-1.462-2.691-3.447-4.788-5.785-6.191.346-4.396-1.129-8.448-4.295-11.522-2.851-2.771-6.489-4.237-10.518-4.237-1.555 0-3.139.216-4.764.653-.21-.23-.426-.448-.644-.66-1.555-1.489-4.3-3.262-8.53-3.262-4.23 0-10.805 1.491-26.38 12.665a13.275 13.275 0 00-1.77-2.662c-3.653-4.29-8.313-6.653-13.124-6.653-5.851 0-10.92 3.6-12.91 9.169-1.79 5.011-5.375 11.395-7.104 12.647-1.813 1.302-9.513 7.177-15.856 17.348 7.016 25.301 23.069 46.841 44.466 60.928 4.488-.988 10.9-3.119 18.459-7.704 7.984-4.844 14.014-9.751 18.419-13.335 1.864-1.518 4.182-3.404 4.991-3.843.287-.156.68-.361 1.158-.611 3.119-1.63 9.61-5.022 15.294-9.305 3.564-2.687 6.269-5.291 8.269-7.967 3.167-4.237 4.504-8.606 3.972-12.987-.315-2.6-1.257-4.868-2.679-6.672l-.003.002z"
          fill="#00FFD4"
        />
        <Path
          d="M122.892 154.966c-.625-5.157-5.94-3.668-10.762-1.158 5.852-4.48 12.147-11.309 8.421-18.164-2.858-5.26-7.748-3.99-12.265-1.006 4.341-5.059 7.576-10.913 3.787-14.592-4.056-3.942-10.483-.529-15.74 3.668 1.69-2.682 2.281-5.547-.138-7.861-6.476-6.196-42.382 24.972-42.382 24.972s9.38-13.84 5.084-18.887c-4.296-5.046-9.544-4.334-11.008-.236-1.465 4.098-5.799 13.642-10.272 16.849-4.33 3.106-12.369 10.775-17.098 21.662 6.727 16.628 17.504 31.183 31.106 42.447 3.23-.412 13.24-2.119 23.34-8.249 12.272-7.446 19.873-15.267 23.773-17.387 3.899-2.119 25.318-12.398 24.147-22.058h.007z"
          fill="#8570ED"
        />
        <Path
          d="M88.6 116.939c1.54-.309 1.492-.135 2.462-.206 1.817-.134 2.278 2.473 1.87 4.249-.408 1.775-1.848 3.098-3.215 4.301l-17.498 15.404c9.45-3.276 15.9-11.909 24.317-17.306 1.531-2.585 1.981-5.311-.34-7.53-1.605-1.535-5.017-.774-9.243 1.238.119.161 1.416-.102 1.647-.148v-.002zM97.666 122.691c.194-.114.388-.231.584-.342 1.912-1.083 4.202-1.993 6.262-1.224 2.814 1.05 3.703 4.857 2.611 7.656-1.091 2.797-3.546 4.795-5.9 6.661l-19.755 15.656 25.739-15.502c2.014-1.213 4.449-2.459 6.595-1.504 3.276 1.458 2.7 6.308 1.099 9.515a36.219 36.219 0 01-13.887 14.904c-4.255 2.512-9.134 4.232-12.46 7.887l24.436-13.26c5.585-4.475 11.108-10.971 7.564-17.493-2.859-5.26-7.749-3.99-12.266-1.006 4.341-5.06 7.576-10.913 3.787-14.592-3.719-3.615-9.436-1.044-14.41 2.644zM122.892 154.966c-.404-3.34-2.775-3.889-5.704-3.183.253.084.483.231.666.463.417.527.386 1.273.278 1.937-.913 5.609-5.664 9.702-10.267 13.033-19.1 13.818-41.215 23.432-64.341 28.003a108.36 108.36 0 008.106 7.441c3.229-.412 13.24-2.119 23.34-8.249 12.272-7.446 19.873-15.267 23.772-17.387 3.9-2.119 25.319-12.398 24.147-22.058h.003zM58.9 121.936c-2.431-2.857-5.166-3.867-7.348-3.463 1.549 2.951 1.813 6.473 1.211 9.758-.62 3.388-2.097 6.559-3.796 9.557a65.885 65.885 0 01-9.574 12.911c1.77.38 3.445-.86 4.834-2.022 3.278-2.739 6.554-5.481 9.831-8.22 1.443-2.224 8.723-13.96 4.841-18.521z"
          fill="#5648C1"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2913_351440">
          <Path fill="#fff" d="M0 0H240V240H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
