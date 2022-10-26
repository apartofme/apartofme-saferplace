import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { ISvgProps } from '../../../utils/types';

export const GhostInShoulderIcon = ({
  width = 240,
  height = 240,
}: ISvgProps) => {
  return (
    <Svg
      width={width * WINDOW_COEFFICIENT}
      height={height * WINDOW_COEFFICIENT}
      viewBox="0 0 240 240"
      fill="none">
      <G clipPath="url(#clip0_2913_338829)">
        <Path
          d="M119.999 240c-32.053 0-62.187-12.482-84.852-35.147C12.482 182.188 0 152.052 0 119.999s12.482-62.187 35.147-84.852C57.812 12.482 87.946 0 119.999 0c32.053 0 62.187 12.482 84.852 35.147 22.665 22.665 35.147 52.799 35.147 84.852 0 32.053-12.482 62.187-35.147 84.852-22.665 22.665-52.799 35.147-84.852 35.147V240z"
          fill="#FFB452"
        />
        <Path
          d="M119.999 240c-32.053 0-62.187-12.482-84.852-35.147C12.482 182.188 0 152.052 0 119.999s12.482-62.187 35.147-84.852C57.812 12.482 87.946 0 119.999 0c32.053 0 62.187 12.482 84.852 35.147 22.665 22.665 35.147 52.799 35.147 84.852 0 32.053-12.482 62.187-35.147 84.852-22.665 22.665-52.799 35.147-84.852 35.147V240zm0-231.826c-29.87 0-57.952 11.633-79.073 32.754C19.807 62.048 8.174 90.13 8.174 120c0 29.87 11.633 57.951 32.754 79.073 21.122 21.121 49.203 32.754 79.073 32.754 29.87 0 57.952-11.633 79.073-32.754 21.121-21.122 32.752-49.203 32.752-79.073 0-29.87-11.633-57.952-32.752-79.073-21.121-21.121-49.203-32.754-79.073-32.754l-.002.002z"
          fill="#FFB452"
        />
        <Path
          d="M206.641 203.024a124.552 124.552 0 004.959-5.502c-5.188 1.659-10.297 2.941-14.611 3.58-20.866 19.836-48.092 30.724-76.99 30.724-28.898 0-57.952-11.633-79.073-32.754-21.121-21.121-32.754-49.203-32.754-79.073 0-5.884.454-11.698 1.34-17.403-2.025-4.954-3.868-10.03-5.062-15.157a119.75 119.75 0 00-3.804 20.01c-.006.057-.01.114-.017.171a127.2 127.2 0 00-.459 5.927c-.004.092-.01.184-.015.273-.033.629-.059 1.26-.08 1.893-.005.127-.007.256-.012.382-.015.507-.028 1.013-.039 1.52A133.54 133.54 0 000 119.999c0 32.053 12.482 62.187 35.147 84.852 22.665 22.665 52.799 35.147 84.852 35.147 32.053 0 62.187-12.482 84.852-35.147.568-.568 1.127-1.14 1.681-1.716l.109-.113v.002z"
          fill="#B68036"
        />
        <Path
          d="M117.778.022c-.388.006-.779.015-1.168.026-.203.007-.403.01-.604.017-.376.014-.751.027-1.125.042l-.581.024a124.192 124.192 0 00-5.026.34l-.561.053c-.377.035-.755.072-1.133.111l-.574.06c-.395.04-.788.087-1.181.132-.162.02-.325.038-.487.057-1.111.136-2.218.284-3.321.45-.153.022-.305.048-.456.07a114.544 114.544 0 00-1.74.28c-.387.065-.773.133-1.16.2l-.502.09a93.33 93.33 0 00-1.36.257l-.273.053c-.557.109-1.111.222-1.666.34l-.24.053c-.465.1-.928.2-1.39.305l-.455.105c-.397.092-.797.186-1.192.282-.16.04-.319.076-.478.116-.417.102-.834.207-1.249.314-.122.033-.246.063-.369.094a119.53 119.53 0 00-3.583.998c-.425.126-.851.253-1.277.384-.142.044-.284.087-.428.133a112.386 112.386 0 00-3.056.996c-.042.015-.086.028-.127.043-.55.188-1.098.38-1.646.577-.026.008-.053.02-.079.028-.495.18-.991.36-1.484.546l-.348.13c-.412.158-.825.315-1.238.477l-.377.148c-.433.17-.863.343-1.293.52-.087.035-.175.07-.26.107a124.806 124.806 0 00-3.368 1.45 100.5 100.5 0 00-1.302.594c-.115.052-.229.107-.343.159-.41.192-.818.384-1.224.58l-.313.151a124.269 124.269 0 00-1.495.736c-.528.264-1.055.535-1.579.808a333.864 333.864 0 0110.024 4.246c14.082-6.244 29.444-9.525 45.312-9.525 29.87 0 57.952 11.632 79.073 32.754 21.121 21.12 32.752 49.203 32.752 79.072 0 10.183-1.354 20.159-3.972 29.722a156.228 156.228 0 006.26 7.591c.48-1.474.93-2.956 1.354-4.449.006-.027.015-.051.021-.077.42-1.489.813-2.984 1.175-4.491l.007-.028c.179-.745.351-1.491.515-2.24.009-.037.015-.075.024-.112.323-1.473.618-2.956.884-4.445l.039-.22c.131-.736.256-1.472.374-2.212.002-.02.006-.039.009-.059.113-.723.22-1.445.32-2.17l.029-.197c.098-.718.19-1.436.277-2.157l.037-.312c.168-1.441.31-2.889.428-4.34.011-.131.022-.262.031-.393a147.828 147.828 0 00.161-2.406c.037-.653.07-1.308.096-1.965l.016-.337c.026-.698.046-1.397.061-2.098l.009-.447c.013-.719.021-1.437.021-2.155 0-32.053-12.482-62.187-35.147-84.852C182.188 12.482 152.052 0 119.999 0c-.563 0-1.127.004-1.69.013l-.531.009z"
          fill="#FFDAAF"
        />
        <Path
          d="M119.999 227.267c59.242 0 107.268-48.025 107.268-107.268 0-59.242-48.026-107.268-107.268-107.268-59.243 0-107.268 48.026-107.268 107.268 0 59.243 48.025 107.268 107.268 107.268z"
          fill="#3F1670"
        />
        <Path
          d="M152.2 17.65a107.244 107.244 0 00-32.201-4.919c-29.049 0-55.4 11.548-74.715 30.3 12.674 6.445 27.14 9.796 42.36 9.1 26.643-1.218 49.861-14.574 64.554-34.481h.002z"
          fill="#FF0"
        />
        <Path
          d="M58.25 32.278a107.7 107.7 0 00-12.964 10.753c12.674 6.445 27.14 9.796 42.36 9.1 26.644-1.218 49.861-14.574 64.555-34.481a105.74 105.74 0 00-9.035-2.404C103.26 40.8 73.095 37.05 58.251 32.28v-.002z"
          fill="#C1BC08"
        />
        <Path
          d="M119.999 227.269c15.44 0 30.119-3.264 43.384-9.137l-.131-1.284c-2.076-19.492-3.838-37.037-4.923-49.927.24-3.483 1.273-5.579 3.179-6.88l15.842 50.622a107.85 107.85 0 0030.005-28.398 67625.33 67625.33 0 00-17.342-71.901c-8.615-35.592-47.699-43.948-48.795-44.275-11.027-3.087-28.348-2.166-32.149-2.31H64.547c-3.8.144-21.121-.777-32.149 2.31-.258.076-2.618.598-6.187 1.814-8.587 15.425-13.48 33.191-13.48 52.098 0 59.242 48.026 107.268 107.268 107.268z"
          fill="#FF0"
        />
        <Path
          d="M172.06 167.58c-1.764-7.142-6.873-18.761-10.393-18.737-3.519.024-1.067 11.82-.157 11.198l15.842 50.622a106.16 106.16 0 005.441-3.687 859.423 859.423 0 01-10.733-39.396z"
          fill="#C1BC08"
        />
        <Path
          opacity={0.1}
          d="M138.745 196.419c36.674 0 66.405-29.73 66.405-66.405s-29.731-66.405-66.405-66.405c-36.675 0-66.406 29.73-66.406 66.405s29.731 66.405 66.406 66.405z"
          fill="red"
        />
        <Path
          opacity={0.1}
          d="M138.745 210.006c44.178 0 79.992-35.814 79.992-79.992 0-44.178-35.814-79.992-79.992-79.992-44.179 0-79.992 35.814-79.992 79.992 0 44.178 35.813 79.992 79.992 79.992z"
          fill="red"
        />
        <Path
          opacity={0.4}
          d="M138.745 178.789c26.938 0 48.775-21.837 48.775-48.775s-21.837-48.775-48.775-48.775-48.775 21.837-48.775 48.775 21.837 48.775 48.775 48.775z"
          fill="red"
        />
        <Path
          opacity={0.6}
          d="M138.745 162.041c17.688 0 32.027-14.339 32.027-32.027 0-17.688-14.339-32.027-32.027-32.027-17.688 0-32.027 14.339-32.027 32.027 0 17.688 14.339 32.027 32.027 32.027z"
          fill="red"
        />
        <Path
          opacity={0.15}
          d="M165.973 140.769c.773-10.148-1.402-20.251-6.33-29.32a53.433 53.433 0 00-3.947-6.203c-2.487-7.515-6.803-14.397-12.558-19.988a50.288 50.288 0 00-31.145-14.074 48.88 48.88 0 00-17.945-3.425c-8.227 0-16.28 1.923-25.077 6.017a50.22 50.22 0 00-16.229-2.666c-13.167 0-25.213 5.046-34.105 13.705-3.825 11.021-5.906 22.859-5.906 35.184 0 53.495 39.16 97.842 90.378 105.945 7.51-4.935 13.135-9.509 17.44-13.013.579-.471 1.085-.882 1.513-1.225 5.343-2.818 12.168-6.65 18.903-11.726 6.273-4.727 11.279-9.644 15.307-15.034 8.668-11.598 12.386-24.873 10.749-38.387a50.643 50.643 0 00-1.048-5.79z"
          fill="#00FFD4"
        />
        <Path
          opacity={0.15}
          d="M157.041 141.498c.967-8.93-.799-17.818-5.155-25.833a43.984 43.984 0 00-4.155-6.301c-1.956-6.705-5.641-12.814-10.746-17.774-7.316-7.111-16.849-11.218-27.025-11.687-4.945-2.175-10.401-3.315-15.91-3.315-7.88 0-15.626 2.125-24.643 6.819-5.272-2.301-10.857-3.465-16.663-3.465-17.195 0-32.057 10.502-37.863 26.752-.312.873-.827 1.978-1.334 2.947-.11.094-.229.195-.345.291a108.798 108.798 0 00-.467 10.067c0 49.079 32.962 90.459 77.955 103.214.948-.533 1.904-1.09 2.871-1.677 9.554-5.797 16.412-11.379 21.421-15.454a365.33 365.33 0 012.227-1.799c3.919-2.052 11.351-6.008 18.446-11.355 5.596-4.216 10.028-8.556 13.55-13.268 7.284-9.744 10.414-20.822 9.056-32.04a41.24 41.24 0 00-1.216-6.122h-.004z"
          fill="#00FFD4"
        />
        <Path
          opacity={0.15}
          d="M148.037 142.254c1.212-7.721-.12-15.399-3.908-22.373a35.034 35.034 0 00-4.437-6.379c-1.375-5.908-4.401-11.247-8.86-15.58-6.128-5.954-14.237-9.236-22.833-9.236h-.109c-4.216-2.146-8.945-3.27-13.838-3.27-7.399 0-14.927 2.42-24.466 7.973-5.176-3.04-10.899-4.62-16.84-4.62-13.416 0-25.014 8.2-29.548 20.894-.745 2.085-1.994 4.463-2.76 5.753-1.847 1.465-4.59 3.812-7.674 7.004.969 43.708 28.08 80.968 66.315 96.762a88.216 88.216 0 009.902-5.196c9.032-5.48 15.617-10.838 20.427-14.753 1.43-1.163 2.43-1.967 2.982-2.395l.197-.102c3.539-1.849 10.905-5.699 17.752-10.86 4.919-3.707 8.777-7.471 11.792-11.504 5.897-7.888 8.443-16.774 7.362-25.693a32.044 32.044 0 00-1.454-6.428l-.002.003z"
          fill="#00FFD4"
        />
        <Path
          opacity={0.15}
          d="M138.88 143.07c1.546-6.474.694-13.072-2.513-18.973a25.952 25.952 0 00-4.877-6.401c-.682-5.098-3.018-9.753-6.814-13.443-4.472-4.345-10.395-6.738-16.681-6.738-.753 0-1.511.035-2.273.1-3.382-2.191-7.416-3.37-11.674-3.37-4.936 0-11.735 1.266-24.811 9.724-4.797-4.137-10.52-6.37-16.495-6.37-9.637 0-17.97 5.901-21.235 15.033-1.286 3.601-3.541 7.585-4.517 8.876-2.227 1.663-7.729 6.113-13.257 13.204 4.685 34.145 25.438 63.168 54.388 79.195 4.579-1.434 10.138-3.746 16.275-7.471 8.512-5.166 14.82-10.299 19.429-14.05 1.02-.829 3.083-2.508 3.847-3.045.188-.101.41-.216.664-.347l.157-.083c3.332-1.74 10.261-5.363 16.53-10.087 4.244-3.199 7.526-6.384 10.032-9.738 4.511-6.034 6.471-12.724 5.668-19.346a22.955 22.955 0 00-1.845-6.672l.002.002z"
          fill="#00FFD4"
        />
        <Path
          opacity={0.25}
          d="M129.278 144.127c2.229-5.356 2.017-10.875-.666-15.814-1.463-2.692-3.45-4.792-5.79-6.196.345-4.399-1.131-8.454-4.297-11.532-2.853-2.773-6.493-4.24-10.526-4.24a18.32 18.32 0 00-4.768.653c-.209-.23-.426-.448-.646-.66-1.557-1.489-4.301-3.264-8.535-3.264-4.233 0-10.814 1.494-26.4 12.676a13.35 13.35 0 00-1.773-2.663c-3.655-4.295-8.32-6.659-13.135-6.659-5.858 0-10.927 3.602-12.918 9.176-1.793 5.015-5.38 11.404-7.111 12.659-1.887 1.351-10.127 7.644-16.6 18.562 6.362 24.711 21.311 45.974 41.474 60.424 4.174-.505 12.194-2.271 22.23-8.36 7.991-4.849 14.026-9.76 18.434-13.345 1.865-1.517 4.185-3.406 4.995-3.845.289-.157.682-.36 1.16-.611 3.122-1.631 9.617-5.026 15.307-9.314 3.567-2.688 6.275-5.297 8.275-7.973 3.168-4.24 4.506-8.613 3.975-12.998-.314-2.6-1.259-4.873-2.683-6.678l-.002.002z"
          fill="#00FFD4"
        />
        <Path
          d="M123.85 151.864c-.624-5.161-5.945-3.67-10.77-1.159 5.856-4.485 12.157-11.316 8.428-18.178-2.861-5.264-7.753-3.994-12.275-1.007 4.345-5.063 7.583-10.921 3.79-14.604-4.059-3.943-10.493-.53-15.75 3.67 1.69-2.683 2.281-5.55-.14-7.866-6.48-6.201-42.413 24.992-42.413 24.992s9.388-13.851 5.087-18.903c-4.3-5.052-9.55-4.336-11.015-.236-1.465 4.103-5.803 13.652-10.279 16.862-4.477 3.209-12.916 11.296-17.568 22.767a6.858 6.858 0 00-.455 1.924c6.34 15.707 16.292 29.566 28.824 40.555 5.714-1.103 17.583-3.889 26.575-9.345 12.284-7.451 19.888-15.278 23.792-17.401 3.904-2.12 25.337-12.407 24.167-22.075l.002.004z"
          fill="#FF0"
        />
        <Path
          d="M124.435 151.452c-.404-3.341-2.777-3.893-5.709-3.186.255.085.483.232.666.465.417.529.386 1.275.279 1.939-.912 5.613-5.67 9.709-10.276 13.043-19.397 14.032-46.12 24.8-69.635 29.289 4.605 4.408 7.439 8.679 7.439 8.679s16.995-3.299 29.278-10.751c12.283-7.451 19.888-15.279 23.791-17.401 3.904-2.12 25.338-12.407 24.167-22.075v-.002zM90.116 113.397c1.54-.308 1.493-.134 2.463-.206 1.819-.133 2.281 2.476 1.873 4.253-.408 1.778-1.85 3.101-3.218 4.306l-17.51 15.416c9.456-3.277 15.912-11.918 24.335-17.32 1.53-2.587 1.982-5.314-.34-7.537-1.608-1.537-5.022-.775-9.251 1.238.12.162 1.417-.102 1.648-.148v-.002zM99.188 119.152c.194-.116.388-.232.585-.343 1.915-1.085 4.205-1.996 6.268-1.225 2.816 1.05 3.705 4.862 2.613 7.661-1.091 2.799-3.547 4.799-5.903 6.666-6.592 5.222-13.18 10.445-19.772 15.669 8.587-5.17 17.171-10.342 25.758-15.512 2.016-1.214 4.452-2.463 6.601-1.506 3.277 1.458 2.7 6.314 1.098 9.523a36.234 36.234 0 01-13.899 14.914c-4.258 2.516-9.142 4.236-12.469 7.893l24.455-13.27c5.587-4.478 11.118-10.978 7.57-17.506-2.86-5.264-7.753-3.993-12.275-1.006 4.345-5.063 7.583-10.921 3.79-14.605-3.722-3.617-9.442-1.043-14.42 2.647zM60.395 118.399c-2.433-2.858-5.17-3.869-7.354-3.467 1.548 2.954 1.815 6.478 1.212 9.766-.62 3.39-2.098 6.565-3.799 9.565a66.157 66.157 0 01-9.58 12.923c1.773.38 3.447-.861 4.838-2.024l9.838-8.227c1.443-2.225 8.73-13.971 4.845-18.534v-.002z"
          fill="#C1BC08"
        />
        <Path
          d="M140.476 110.167h-2.231c-10.598 0-14.587 8.478-14.587 11.22v26.681l3.624-3.367 3.616 3.367 4.111-3.367 4.351 3.36 4.352-3.36 4.111 3.367 3.616-3.367 3.624 3.367v-26.681c0-2.742-3.989-11.22-14.587-11.22z"
          fill="#132A7C"
        />
        <Path
          d="M143.199 121.94s4.646.733 6.844-2.935M135.52 121.94s-4.646.733-6.845-2.935"
          stroke="#C90932"
          strokeWidth={3}
          strokeMiterlimit={10}
          strokeLinecap="round"
        />
        <Path
          d="M147.452 129.073a2.334 2.334 0 100-4.668 2.334 2.334 0 000 4.668zM131.269 129.073a2.334 2.334 0 100-4.668 2.334 2.334 0 000 4.668z"
          fill="#C90932"
        />
        <Path
          d="M133.169 137.195s5.958-8.827 13.241 0"
          stroke="#C90932"
          strokeWidth={4}
          strokeMiterlimit={10}
          strokeLinecap="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2913_338829">
          <Path fill="#fff" d="M0 0H240V240H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
