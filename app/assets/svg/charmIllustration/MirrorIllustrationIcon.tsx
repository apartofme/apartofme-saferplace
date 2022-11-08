import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { ISvgProps } from '../../../utils/types';

export const MirrorIllustrationIcon = ({
  width = 149,
  height = 300,
}: ISvgProps) => {
  return (
    <Svg
      width={width * WINDOW_COEFFICIENT * 0.85}
      height={height * WINDOW_COEFFICIENT * 0.85}
      viewBox="0 0 149 300"
      fill="none">
      <Path
        opacity={0.5}
        d="M90.34 300c30.587 0 55.383-3.826 55.383-8.545 0-4.719-24.796-8.545-55.384-8.545-30.587 0-55.383 3.826-55.383 8.545 0 4.719 24.796 8.545 55.383 8.545z"
        fill="#330F59"
      />
      <Path
        d="M49.965.156c1.62-.97 2.517 2.22 13.202 20.042 5.846 9.75 5.97 20.95 4.622 30.975l1.688-3.421c.77 6.543-.852 13.34-4.494 18.832l-.033-.443c-.475 2.233-.88 4.258-1.128 6.018-1.6 11.464 8.717 15.104 8.717 15.104l-18.446 12.755c7.832-21.132-5.198-33.82-14.138-55.23-8.938-21.411 8.39-43.661 10.01-44.632z"
        fill="#DA9363"
      />
      <Path
        d="M72.541 87.264l-5.162 3.57c-1.677-1.174-2.575-3.277-3.169-5.28-5.27-17.77 3.374-37.178-.675-55.264-1.363-6.09-4.143-11.888-5.05-18.015A694.787 694.787 0 0063.17 20.2c5.847 9.75 5.97 20.95 4.622 30.976l1.688-3.422c.77 6.544-.852 13.341-4.494 18.833l-.033-.444c-.475 2.233-.88 4.258-1.128 6.019-1.6 11.464 8.717 15.104 8.717 15.104v-.002z"
        fill="#B07042"
      />
      <Path
        d="M59.533 164.087c1.26-2.707 2.308-5.732 2.937-7.702a14.926 14.926 0 015.103-.794c.457.009.977.071 1.249.439.269.36.187.865.077 1.299a18.954 18.954 0 01-2.321 5.45l-.958 4.093c-1.15-2.099-3.761-3.2-6.089-2.785h.002z"
        fill="#1C9BC3"
      />
      <Path
        d="M75.028 235.934s2.552 2.553.851 8.507c-1.7 5.955-6.806 16.592-2.978 19.568l3.828 2.978s4.68-3.402 4.68-1.275c0 2.127-2.128 4.254-2.553 9.359-.426 5.105.425 11.06.851 13.187.426 2.127-1.7 3.828-3.402 4.253-1.7.426-7.232-.851-8.081 0-.852.852-5.532 2.127-7.233 0 0 0-4.253 2.553-6.38 0 0 0-1.275 2.553-3.402-.425-2.127-2.979 0-6.807 2.978-5.955l2.979.851s2.553-2.126 4.68-2.978c2.126-.852 6.38-5.105 5.954-9.785-.426-4.679-3.828-8.507-5.955-13.612-2.127-5.106-1.7-5.955-2.552-7.658-.852-1.701-6.38-11.486-5.106-18.718 1.276-7.232 20.845 1.701 20.845 1.701l-.004.002zM94.597 243.166s9.785 19.141 10.634 23.821c.852 4.679 0 7.658-.425 9.784-.426 2.127-2.553 8.508-3.403 9.785-.851 1.275-5.954 3.402-4.253 5.955 1.7 2.553 5.954 4.254 7.232 2.127 1.275-2.127 8.081 3.402 9.359-.426 1.275-3.828 5.105 3.828 8.081 1.275 2.979-2.552 7.232 2.553 6.807-1.275-.426-3.828-5.106-5.105-6.381-5.105-1.275 0-7.232 2.552-7.232-5.955s-.426-11.912.852-20.845c1.275-8.933-1.701-19.141-4.254-21.694-2.553-2.552-17.015 2.553-17.015 2.553h-.002z"
        fill="#D89162"
      />
      <Path
        d="M65.192 252.018c-.335-.942-.668-1.882-1.004-2.824-2.078-.708-4.54-.002-5.99 1.63-1.83-3.682-5.014-10.921-4.015-16.593 1.275-7.232 20.845 1.701 20.845 1.701s2.552 2.553.851 8.507c-.604 2.114-1.635 4.814-2.544 7.554a18.619 18.619 0 01-1.813-.555c-1.114-.409-2.217-.929-3.402-.998-1.185-.068-2.51.466-2.928 1.578zM103.453 261.868c-3.058-7.357-8.856-18.704-8.856-18.704s2.215-.781 5.064-1.58a84.74 84.74 0 0113.036.527c1.117 1.957 2.187 5.11 2.84 8.739-1.106 3.826-2.54 7.555-5.15 10.511-2.171-1.105-4.926-.843-6.934.507zM68.221 292.511c-.851.852-5.53 2.127-7.232 0 0 0-4.253 2.553-6.38 0 0 0-1.275 2.553-3.402-.426-1.143-1.599-1.057-3.442-.274-4.675.969 1.136 2.414 1.875 3.912 1.781.684 2.254 4.523 2.431 5.412.249 1.699 2.131 5.884.785 6.018-1.937 2.037 1.046 4.378 2.102 6.535 1.332 2.116-.756 3.294-3.075 3.597-5.301.3-2.226-.067-4.488.02-6.734.16-4.2 1.99-8.306 4.968-11.265.009.055.013.115.013.179 0 2.127-2.127 4.254-2.552 9.359-.426 5.105.425 11.06.851 13.187.426 2.126-1.7 3.827-3.402 4.253-1.7.426-7.232-.851-8.081 0l-.003-.002zM99.444 288.171c-.11.631-.101 1.264.104 1.88.534 1.612 3.166 2.343 3.881.803.128-.276.183-.598.395-.819.657-.679 1.661.283 2.334.947 1.664 1.643 4.779 1.407 6.173-.47.375-.506.669-1.128 1.24-1.39 1.509-.691 2.581 1.582 4.029 2.391.999.559 2.232.375 3.36.175l5.242-.929c.097-.018.196-.035.293-.051 1.073.799 1.955 1.937 2.129 3.501.426 3.828-3.828-1.275-6.806 1.276-2.978 2.552-6.806-5.106-8.081-1.276-1.276 3.828-8.082-1.701-9.359.426-1.276 2.127-5.531.426-7.233-2.127-1.111-1.668.682-3.152 2.295-4.337h.004z"
        fill="#9E6337"
      />
      <Path
        d="M69.073 155.96s-7.232 23.397-8.933 29.352c-1.701 5.954-6.38 16.591-7.658 18.718-1.277 2.126-5.955 16.165-7.232 19.993-1.275 3.828-3.402 6.38-2.127 7.658 1.275 1.275 4.254-.426 3.828 2.126-.426 2.553-1.275 4.68.426 4.68 1.7 0 14.887-7.232 29.352 1.275 14.464 8.507 21.27 8.507 25.098 8.082 3.828-.426 11.912-2.979 17.015-4.68 5.105-1.701 5.954-2.127 6.38-5.955.426-3.827-.426-6.806 1.275-12.337 1.701-5.531-4.253-42.539-4.679-48.493-.426-5.955-7.232-24.247-7.232-24.247l-45.517 3.828h.004z"
        fill="#1CD6F5"
      />
      <Path
        d="M47.379 238.486c-1.701 0-.852-2.126-.426-4.679.426-2.553-2.553-.852-3.828-2.127-.785-.785-.282-2.054.519-3.803a4.836 4.836 0 001.862 1.01c1.93.529 3.973.071 5.946-.267a48.51 48.51 0 0120.904 1.019c7.016 1.92 13.52 5.399 20.511 7.407 6.992 2.005 7.462 3.49 13.52-.536.585-2.63.402-6.187.876-8.472.792-3.817.047-7.751-.428-11.621-4.064-33.184 6.544-28.103 3.038-56.145 5.551 5.551 10.275 17.933 11.1 30.087.351 5.154-.424 11.402 1.73 16.099 1.045 2.284 2.338 4.441 3.613 6.61.514 5.646.695 20.265.27 24.092-.426 3.828-2.639 4.307-7.744 6.008-5.106 1.701-13.187 4.254-17.015 4.68-3.828.425-10.634.425-25.098-8.082-14.465-8.507-27.651-1.275-29.352-1.275l.002-.005z"
        fill="#1C9CC4"
      />
      <Path
        d="M54.326 169.599a62.047 62.047 0 00-15.938 21.614c-.928 2.103-1.756 4.338-1.626 6.632.294 5.205 5.657 9.033 10.866 9.198 5.21.166 10.107-2.455 14.306-5.544 4.198-3.089 8.03-6.738 12.644-9.161.41-1.248-.585-2.464-1.157-3.646-3.013-6.229-8.145-11.131-13.169-15.89-1.434-1.359-2.971-2.775-4.904-3.192-.71-.155-1.075.714-1.022-.011zM117.882 149.849s6.919 8.238 11.598 12.917c4.68 4.68 8.082 8.082 8.508 9.359.425 1.275 10.634 18.718 10.208 23.821-.426 5.105-7.658 0-13.187 1.275-5.531 1.276-13.612 4.68-16.165 9.785-2.553 5.105-2.127-5.105-1.275-8.081.851-2.979 1.701-11.06 0-17.441-1.701-6.38-5.105-8.933-5.955-14.464-.852-5.531-.426-10.634-2.127-11.912-1.701-1.277 8.397-5.259 8.397-5.259h-.002z"
        fill="#1CD6F5"
      />
      <Path
        d="M51.869 174.777l-2.423-.426c2.123-2.46 4.812-4.929 6.266-6.566 3.402-3.828 7.404-13.528 7.404-13.528l10.634-3.403-.5 4.753 39.18-3.296c.018-.009.036-.018.053-.029 1.485.457 2.97.918 4.455 1.377 1.952.604 3.929 1.224 5.88 1.91 2.135 2.421 4.611 5.147 6.656 7.193 2.391 2.391 4.45 4.45 5.948 6.062-1.787 4.918-5.434 6.705-9.732 7.804-1.238.315.887 3.109 3.971 4.293 5.15 1.977 14.171 2.61 9.615 5.212-2.515.756-14.753-2.348-21.714-4.653-5.354-1.774-8.598-7.694-10.195-7.709-5.741-.062-9.7 5.582-14.817 8.187-3.415 1.739-7.517 2.085-11.177.94-3.237-1.013-6.014-3.089-8.99-4.715-2.977-1.628-6.467-2.835-9.728-1.906-.814 1.355-4.898 8.785-5.196 10.339-1.751-1.097.078-6.78-.76-8.567-1.17-2.493-2.514-3.634-4.837-3.272h.007z"
        fill="#1C9CC4"
      />
      <Path
        d="M78.355 196.97c-4.545-6.831-6.985-15.041-6.908-23.243 1.77 6.482 4.262 13.239 9.632 17.279.409.307.865.607 1.377.609.505 0 .96-.293 1.37-.585 5.913-4.211 10.063-10.821 11.285-17.976l1.43 4.582a43.33 43.33 0 01-6.846 13.979c-.638.863-1.33 1.752-1.496 2.813-.307 1.952 1.249 3.746 1.324 5.721.062 1.637-.892 3.117-1.807 4.474a29239.23 29239.23 0 00-4.4 6.524c-.434.646-.99 1.361-1.769 1.381-.697.018-1.262-.538-1.716-1.068a28.197 28.197 0 01-3.246-4.693c-.937-1.703-1.714-3.589-1.573-5.526.14-1.937 1.432-3.903 3.34-4.267l.003-.004z"
        fill="#1C9BC3"
      />
      <Path
        d="M81.72 195.551l.372.267.186.133.092.066c.016.022.031-.005.046-.013l.047-.038.739-.587 1.443-1.149.353-.283.176-.141.044-.035.02-.018.011-.011.047-.044.361-.353.722-.706c.119-.119.245-.229.355-.357l.34-.373.675-.744c.23-.242.435-.507.646-.765l.627-.779a34.324 34.324 0 004.082-6.76c2.168-4.757 3.216-9.946 2.978-15.007-.518 5.039-2.299 9.827-4.966 13.921a31.346 31.346 0 01-4.625 5.582l-.662.607c-.22.201-.434.408-.67.591l-.693.565-.344.282c-.113.095-.238.177-.358.265l-.721.519-.36.258-.044.033-.01.009h-.021c-.008 0-.017 0-.024-.002-.06-.014-.101-.042-.09-.111a.089.089 0 01-.011.036c-.007.008-.027.008-.042.011h-.058c.011.017-.072-.051-.123-.091l-.17-.132-.342-.267c-.115-.088-.223-.186-.333-.278-.22-.188-.446-.373-.658-.572a23.138 23.138 0 01-2.418-2.554 25.335 25.335 0 01-3.682-6.149 25.882 25.882 0 01-1.864-7.085 24.234 24.234 0 01.289-7.468c-.858 2.381-1.33 4.929-1.421 7.513-.09 2.583.198 5.204.85 7.757a28.095 28.095 0 003.035 7.36 27.222 27.222 0 002.987 4.119c.115.128.223.26.342.384l.356.375.178.187c.066.067.095.108.23.223l.67.596c.228.201.448.401.687.602l.728.614-.005-.003z"
        fill="#D86FAA"
      />
      <Path
        d="M84.316 190.724s3.724 7.448 3.067 8.763c-.658 1.315-5.04 6.133-6.573 6.354-1.533.218-4.6-7.012-4.6-8.324 0-1.315 2.41-4.821 3.285-5.476.876-.656 3.943-3.067 4.821-1.315v-.002z"
        fill="#57B95E"
      />
      <Path
        d="M69.073 155.96l43.236-3.636c3.691-2.226 5.571-2.475 5.571-2.475s5.079 1.67 7.055 5.882l-8.258 5.153c-.71.444-1.456.9-2.29.984-.845.086-1.672-.22-2.504-.384-5.067-.988-9.467 3.213-14.089 5.512a20.461 20.461 0 01-13.526 1.615c-4.234-.965-8.08-3.27-12.333-4.157-1.763-.368-3.55-.483-5.344-.439 1.412-4.596 2.482-8.053 2.482-8.053v-.002z"
        fill="#1C9BC3"
      />
      <Path
        d="M74.836 159.564a25.76 25.76 0 001.53 6.255 39.348 39.348 0 00-2.307-.807 27.16 27.16 0 01-.355-5.406c.048-1.374.205-2.74.47-4.075l.53-.044a24.607 24.607 0 00.13 4.077h.002zM92.713 168.719c.152-.221.302-.442.448-.667 2.667-4.094 4.448-8.884 4.966-13.921.216 4.624-.64 9.357-2.444 13.767-.967.348-1.962.622-2.97.821z"
        fill="#BF4498"
      />
      <Path
        d="M118.689 144.468a2.038 2.038 0 00-.302 2.565c1.657 2.599 5.388 7.883 9.558 10.026a61.492 61.492 0 017.746 4.77 2.044 2.044 0 01.19 3.154c-3.078 2.844-9.719 8.25-15.517 7.972-7.85-.378-17.145-3.444-22.13 2.087-4.987 5.531-12.488 8.842-20.662 4.256-8.172-4.589-12.859-5.337-16.547-4.989-3.69.349-10.542 1.068-9.32-2.543.987-2.917 8.148-13.401 10.87-17.333a2.045 2.045 0 00-.286-2.661c-1.7-1.575-4.647-4.661-6.588-8.664-2.864-5.906-11.362-3.691-10.712-17.299.654-13.606.007-22.029 13.095-32.418 13.087-10.388 21.39-19.433 27.07-17.587 5.681 1.847 19.164 5.115 32.168 18.328 13.005 13.213 15.768 21.213 11.503 33.597-3.181 9.239-7.929 14.607-10.138 16.739h.002z"
        fill="#FBD787"
      />
      <Path
        d="M76.292 92.18s-23.104 8.345-24.648 25.558c-1.547 17.216 5.008 15.729 9.747 22.078 4.739 6.35 11.018 10.614 13.156 11.076 2.138.463 1.745-58.713 1.745-58.713v.002zM108.936 129.685c.589.807.324 4.236.068 5.202l-.827 4.527c-.832 2.118-2.672 3.722-4.724 4.706-2.052.982-7.197 2.551-9.447 2.892 3.645-4.789 10.857-12.899 14.932-17.327h-.002z"
        fill="#A38553"
      />
      <Path
        d="M80.12 151.865s-9.642-.371-14.18-5.419c-2.537-2.821-5.032-3.457-4.982-7.126.051-3.669.654-6.341-1.222-8.556-1.875-2.213-.708.133-1.875-2.213-1.167-2.345-3.034-20.293 2.57-27.554 5.604-7.26 12.655-6.74 13.558-5.809.904.93 26.614 9.331 29.903 11.283 3.29 1.951 8.574 12.68 5.551 22.023-3.022 9.344-5.438 13.085-8.492 14.383-3.051 1.297-5.443 3.205-5.443 3.205s-1.244 3.157-7.832 5.112c-6.59 1.955-7.558.671-7.558.671h.002z"
        fill="#D89162"
      />
      <Path
        d="M41.63 195.266c3.505 12.371 17.837 10.295 20.215 10.577 1.399.168 6.35-2.564 6.533-2.594 3.034-.523 2.808-1.419 6.65-1.194-.951-2.248-7.224-9.685-8.175-11.936-.58-1.374-1.169-2.784-1.253-4.273-.088-1.582.4-3.131.883-4.64l1.187-3.713a11.674 11.674 0 004.706-2.617c.238-.218.564-.635.657-.946.132-.444 1.156-1.044.883-1.39-1.644-2.085-5.004-3.702-7.221-5.163-.373-.247-.77-.488-1.214-.545-.441-.055-.88.077-1.3.227-7.36 2.619-12.301 10.008-19.23 13.62-1.387.723-3.04 3.479-3.93 5.118-.274.505-.343 1.119-.096 1.637.742 1.56-.589 3.281.702 7.832h.002z"
        fill="#1C9BC3"
      />
      <Path
        d="M96.296 111.927c-3.94-1.555-8.393-.741-12.573-1.425-5.07-.83-9.71-4-12.322-8.424 6.232-.313 12.533-.622 18.667.534 2.118.4 4.2.971 6.248 1.644 3.698 1.216 7.382 2.831 10.124 5.593.378.379.731.776 1.064 1.189 2.299 4.45 3.949 11.256 1.944 17.454-3.023 9.343-5.439 13.085-8.492 14.382a24.925 24.925 0 00-3.477 1.84 23.232 23.232 0 001.806-2.947c.433-.841.823-1.721 1.454-2.425.435-.483.969-.863 1.468-1.28 3.536-2.958 5.175-7.871 4.573-12.441-.602-4.571-3.281-8.739-6.912-11.58-1.094-.856-2.281-1.606-3.572-2.116v.002zM57.863 128.551c-.362-.728-.794-2.967-1.046-5.924.367-3.561.803-7.115 1.313-10.66.527-3.671 1.185-7.473 3.323-10.504 2.138-3.032 6.186-5.037 9.637-3.678l-.197 3.618c-1.646.843-2.824 2.418-3.547 4.119-.724 1.703-1.042 3.546-1.353 5.368l-3.051 17.813c-.346 2.021-.697 4.06-1.452 5.966-.121.305-.254.607-.4.902.023-1.868-.182-3.428-1.352-4.807-1.875-2.213-.708.132-1.875-2.213z"
        fill="#9E6337"
      />
      <Path
        d="M70.152 92.241s22.835-3.14 35.851 9.811c13.015 12.953 7.992 29.255 4.534 34.288 0 0-1.769.328-1.601-6.657.167-6.982-5.092-19.547-16.007-21.18-10.914-1.632-20.02-1.407-22.905-7.093 0 0-5.59-.419-6.43 10.707-1.546 20.527-6.309 21.187-9.453 23.967 0 0 .263-5.992 1.57-8.797 1.31-2.804 1.206-6.358.94-7.772-.262-1.414 1.016 9.012-5.583 14.182 0 0-2.886-11.932 1.71-22.665 4.595-10.734 8.405-16.677 17.372-18.793l.002.002z"
        fill="#493F28"
      />
      <Path
        d="M66.58 125.637s.088-.005.234-.02c.073-.009.16-.02.264-.02.104 0 .217-.017.345-.013.125 0 .26-.004.403.007.073.004.146.002.221.008l.232.02c.313.036.648.073.997.144.346.068.675.143.977.229l.219.071.106.033.099.039.194.073c.057.027.117.053.177.078.055.026.114.046.163.072.048.027.097.051.143.075.044.022.088.044.128.067.038.022.07.044.104.064.126.077.203.119.203.119s-.029-.078-.093-.219l-.055-.117c-.024-.042-.053-.084-.08-.13l-.097-.15c-.035-.053-.079-.101-.123-.157-.046-.052-.093-.11-.146-.167l-.176-.163c-.033-.029-.064-.058-.095-.084a3.584 3.584 0 00-.106-.078c-.073-.05-.148-.105-.227-.156a3.553 3.553 0 00-1.136-.437 3.514 3.514 0 00-1.214-.009c-.093.018-.18.035-.267.055-.086.02-.168.051-.245.075a2.803 2.803 0 00-.421.177c-.126.055-.232.132-.324.19a1.847 1.847 0 00-.225.167c-.117.1-.177.159-.177.159l-.002-.002z"
        fill="#995B37"
      />
      <Path
        d="M61.03 133.085l.136-.055c.046-.018.101-.04.172-.062l.24-.066c.093-.022.197-.037.311-.057a6.78 6.78 0 01.376-.038c.27-.013.58-.006.915.022.336.031.695.084 1.07.144.375.059.761.126 1.152.167.393.045.765.056 1.158.02a6.068 6.068 0 001.198-.24 7.08 7.08 0 002.147-1.11 6.9 6.9 0 001.443-1.476 6.17 6.17 0 00.701-1.288l.084-.225c.024-.067.04-.122.055-.168.029-.091.047-.141.047-.141l.022.145c.006.049.015.108.022.181l.015.247c.016.375-.022.931-.231 1.595a5.708 5.708 0 01-1.247 2.114 5.93 5.93 0 01-2.588 1.646 5.41 5.41 0 01-1.613.243c-.53 0-1.05-.097-1.487-.228a10.34 10.34 0 01-1.18-.439l-.955-.414c-.29-.12-.552-.221-.788-.296a9.876 9.876 0 00-.333-.095c-.104-.022-.2-.048-.287-.062l-.236-.037c-.068-.009-.128-.011-.174-.016l-.148-.013.002.002zM62.571 123.144s.126-.06.331-.148l.168-.07c.06-.027.126-.062.192-.095.137-.069.285-.13.441-.221.077-.042.159-.086.24-.128.082-.042.164-.099.25-.145.17-.089.34-.208.516-.305.349-.221.708-.446 1.094-.664.382-.227.753-.43 1.117-.627.172-.105.36-.196.52-.3.082-.05.17-.094.25-.145.077-.051.152-.1.23-.146.156-.09.282-.19.41-.273.061-.045.123-.082.176-.122l.144-.11c.176-.137.29-.216.29-.216s.03.125.054.362a4 4 0 01.015.198c0 .073-.002.148-.007.232-.01.165-.021.366-.072.569-.022.104-.051.212-.082.326-.033.113-.08.223-.126.34-.09.241-.225.47-.377.713-.32.468-.768.924-1.335 1.26-.569.328-1.189.494-1.754.542a3.944 3.944 0 01-.805-.022c-.126-.017-.245-.031-.357-.057a8.397 8.397 0 01-.325-.09c-.203-.056-.381-.144-.531-.217-.075-.037-.144-.07-.206-.108a8.885 8.885 0 01-.165-.11 3.35 3.35 0 01-.29-.223h-.006z"
        fill="#32194C"
      />
      <Path
        d="M92.832 119.347s-.086-.037-.247-.095c-.082-.028-.18-.064-.3-.086-.12-.022-.258-.059-.413-.068-.154-.013-.326-.029-.51-.013-.09.006-.187.006-.284.019a3.874 3.874 0 00-1.56.543c-.41.256-.752.578-1.008.909-.062.084-.119.17-.174.254l-.08.123-.066.126-.119.241c-.033.079-.06.159-.086.231-.024.075-.05.144-.066.212-.013.066-.029.132-.042.194l-.031.168-.011.143c-.009.172-.009.265-.009.265s.062-.075.163-.205c.027-.033.053-.068.082-.108a8.116 8.116 0 00.227-.254c.04-.048.093-.093.141-.141l.153-.152c.06-.051.117-.104.174-.153l.088-.081c.033-.027.067-.051.097-.077.069-.056.135-.111.199-.161a12.598 12.598 0 012.138-1.289c.075-.037.152-.064.225-.099.145-.071.287-.117.419-.168.13-.057.254-.086.362-.123.108-.04.205-.064.284-.084.16-.044.252-.073.252-.073l.002.002z"
        fill="#995B37"
      />
      <Path
        d="M99.671 123.905l-.13.111c-.042.035-.094.077-.154.13l-.196.189c-.073.071-.146.159-.228.248-.08.092-.16.196-.249.308-.17.228-.35.495-.54.797-.2.326-.407.668-.62 1.019-.23.373-.488.777-.817 1.192-.322.41-.745.842-1.242 1.195a6.194 6.194 0 01-1.67.839 6.565 6.565 0 01-1.818.317 6.736 6.736 0 01-1.692-.15 6.567 6.567 0 01-2.564-1.156 5.42 5.42 0 01-1.27-1.341 43.71 43.71 0 00-.15-.243c-.043-.07-.071-.134-.098-.183-.048-.097-.077-.152-.077-.152l.137.101c.044.034.097.075.163.122.066.046.144.097.227.154a7.1 7.1 0 001.51.744 8.071 8.071 0 005.068.053c.458-.153.888-.338 1.279-.565a6.378 6.378 0 001.072-.786c.335-.297.655-.615.966-.917.311-.303.614-.592.907-.841.296-.249.58-.461.843-.627.132-.081.258-.152.375-.214.121-.057.227-.11.329-.15.099-.037.19-.068.269-.099.08-.024.148-.04.2-.055l.166-.04h.004zM96.466 116.289s-.062.13-.201.356c-.035.055-.075.119-.121.185-.049.064-.104.128-.166.201-.123.139-.269.306-.452.452-.09.075-.19.152-.296.232-.106.077-.223.141-.344.214-.243.15-.518.26-.818.37-.6.194-1.309.291-2.037.199a4.742 4.742 0 01-1.915-.722 4.562 4.562 0 01-.695-.569c-.099-.101-.194-.194-.276-.296a8.028 8.028 0 01-.225-.3c-.14-.187-.238-.388-.32-.553-.04-.084-.077-.161-.108-.236-.026-.078-.05-.148-.07-.212-.077-.254-.104-.395-.104-.395a9.626 9.626 0 00.59.15c.07.018.151.031.233.048.165.034.338.08.538.106.097.016.199.033.298.053.102.018.212.027.318.042.21.038.439.051.664.084.459.044.929.093 1.419.161.492.06.957.135 1.412.212.225.026.45.073.661.093.106.011.217.033.318.041.102.007.203.018.302.027.201.026.38.026.548.037.084.005.165.011.238.014h.203c.25 0 .404.008.404.008l.002-.002z"
        fill="#32194C"
      />
      <Path
        d="M69.54 136.264s-1.846.892-3.911-.372c0 0-.377 6.839 4.006 8.769 4.384 1.931-2.47-2.468-.094-8.399v.002zM94.004 131.592s2.279.19 3.92-1.952c0 0 3.129 6.965-.66 10.729-3.788 3.761 1.585-3.557-3.26-8.777zM68.005 114.988a92.668 92.668 0 0013.573-2.97c.788-.236 1.66-.479 2.41-.139l-.577.128a62.255 62.255 0 01-4.97 10.109c-.194.315-.433.662-.799.721-.333.056-.649-.15-.924-.346l-6.374-4.507c-1.072-.757-2.246-1.688-2.339-2.996zM70.48 109.834a20.11 20.11 0 013.345-2.849c.216-.145.444-.291.702-.319.22-.025.441.037.653.105a10.895 10.895 0 013.945 2.288l-.534.044a272.88 272.88 0 01-8.426 1.807c-.245-.324.035-.776.316-1.074v-.002z"
        fill="#57B95E"
      />
      <Path
        d="M75.798 137.498s.551.413 1.469.991a33.45 33.45 0 002.614 1.484c.172.089.347.175.525.261l.272.13c.143.066.289.132.432.201l.556.251.069.031.035.015.024-.028.1-.115.194-.229c.125-.148.249-.298.377-.448a26.475 26.475 0 001.904-2.707c.57-.929.87-1.547.87-1.547s-.572.384-1.413 1.077c-.419.346-.907.77-1.425 1.262-.258.245-.525.509-.792.787-.069.071-.135.142-.2.212-.012.007-.01 0-.014 0-.004-.002-.004-.009-.004-.009l-.124-.053a30.005 30.005 0 00-.827-.342 24.636 24.636 0 00-1.057-.377 22.904 22.904 0 00-1.838-.516c-1.064-.249-1.747-.329-1.747-.329v-.002z"
        fill="#32194C"
      />
      <Path
        d="M82.081 142.72s.58-.803.426-1.635c-.154-.829-.984-1.372-.984-1.372s-.58.803-.426 1.635c.155.829.984 1.372.984 1.372zM79.376 145.286c.06-.128.223-.161.364-.176l2.813-.322c.9-.104 1.812-.208 2.666-.512.853-.303 1.66-.828 2.135-1.6l.486-.097a7.353 7.353 0 01-2.805 4.953c-.346.265-.723.501-1.145.605-.56.136-1.151.031-1.703-.139-1.242-.38-2.48-1.196-2.808-2.454-.023-.086-.04-.178-.003-.258z"
        fill="#32194C"
      />
      <Path
        d="M114.718 155.675c-3.495.596-7.135.139-10.57 1.015-3.177.81-7.448 7.519-10.16 9.364-21.502 14.638-24.249-6.255-36.524-4.069a414.495 414.495 0 015.809-8.558c4.96 3.559 11.686 3.971 17.88 3.656 5.927-.302 11.977-1.136 17.232-3.901 1.459-.768 2.842-1.677 4.349-2.338 2.204-.969 4.606-1.384 6.908-2.092 4.575-1.412 8.719-4.088 11.995-7.576-2.343 2.976-4.154 4.368-4.154 4.368s1.954 3.49 4.827 6.773c-2.226 1.697-4.827 2.888-7.592 3.358z"
        fill="#AE9153"
      />
      <Path
        d="M97.43 79.19c-.093-.438.593-.555 1.02-.418 1.815.578 3.306 1.921 4.235 3.58.883-3.602 1.156-8.926-.256-16.736-3.73-20.635-3.053-34.766 4.375-47.523C114.235 5.337 118.722-.744 120.218.902c1.496 1.646 21.35 25.151 14.041 46.307-7.309 21.156-10.425 20.483-14.614 31.296-2.29 5.908-4.437 8.849-5.386 11.781 1.699-2.195 4.174-3.797 6.915-4.264-2.088 2.532-4.175 5.065-6.262 7.6 1.673-1.586 3.451-3.232 5.688-3.784-3.261 1.71-5.5 5.178-5.827 8.834.066.194.133.39.205.591 3.237 9.073-6.426-8.176-16.844-9.725 0 0 1.392-.571 2.746-2.729.316-2.903-.98-6.016-3.452-7.62l.002.002z"
        fill="#DA9363"
      />
      <Path
        d="M98.45 78.772c1.815.578 3.306 1.921 4.235 3.58.883-3.602 1.156-8.926-.256-16.736-3.49-19.303-3.124-32.913 3.021-45.032-.217 3.492-.466 6.985-1.053 10.433-.69 4.067-1.846 8.077-1.985 12.201-.137 4.009.695 7.976 1.414 11.923a224.01 224.01 0 013.634 39.295c-2.772-2.319-6.01-4.401-9.324-4.893 0 0 1.392-.572 2.747-2.73.315-2.903-.98-6.016-3.453-7.62-.093-.439.593-.556 1.02-.419v-.002z"
        fill="#B07042"
      />
      <Path
        d="M49.031 11.93c.219-.344.486-.712.883-.791.578-.115 1.061.423 1.399.909a52.973 52.973 0 019.206 25.606c1.253 14.876-3.799 30.188.115 44.597l-.935-1.2C58.233 65.507 46.18 52.692 43.747 37.27c-1.374-8.71.54-17.9 5.282-25.338l.002-.002zM109.547 50.523c-1.141-12.671-.331-26.55 7.779-36.355.355-.428.759-.87 1.299-.993 1.174-.267 2.057 1.028 2.529 2.133 5.983 14.021 5.884 30.33.677 44.655-3.078 8.47-7.865 16.355-10.35 24.966 1.406-11.347-.904-22.943-1.937-34.409l.003.002z"
        fill="#FF98EB"
      />
      <Path
        d="M49.916 11.139c.578-.115 1.061.423 1.399.909a52.973 52.973 0 019.207 25.606c1.253 14.876-3.8 30.188.114 44.597l-.935-1.2c-.36-3.81-1.355-7.458-2.69-11.02-1.39-8.239-1.094-16.707-1.515-25.075-.468-9.275-1.97-18.874-7.215-26.541l-4.964 13.25c.005-6.938 1.984-13.879 5.714-19.734.219-.345.486-.713.883-.792h.002zM118.628 13.175c1.173-.267 2.056 1.028 2.528 2.133 5.983 14.021 5.884 30.33.677 44.655-3.077 8.47-7.865 16.355-10.349 24.966.295-2.39.426-4.788.439-7.195 1.138-7.262 3.912-14.32 5.827-21.48a94.759 94.759 0 003.06-29.7c-.153-2.723-.669-5.847-3.016-7.232a108.66 108.66 0 00-8.655 23.077c-.064-10.217 1.789-20.494 8.189-28.231.355-.428.759-.87 1.3-.993z"
        fill="#EE6AE7"
      />
      <Path
        d="M50.574 180.399c.776 1.855 3.704 6.345 6.733 10.347 2.217 2.932 5.081 5.322 8.397 6.91 5.061 2.427 7.325 4.764 11.268 1.642 2.047-1.622-4.89-22.937-2.463-23.901.746-.295 1.556-.525 2.343-.379-2.49-1.92-10.47 3.956-12.964 2.036-1.083-.834 3.31-9.469 2.061-10.025a8.814 8.814 0 00-3.59-.755 37.59 37.59 0 01-9.237 12.911c-.611.554-1.633.592-2.385.856a.268.268 0 00-.163.358z"
        fill="#4CC6E6"
      />
      <Path
        d="M51.07 185.336c1.606-.582 3.27-1.068 4.975-1.158.957-.051 1.926.022 2.866-.163a5.33 5.33 0 003.455-2.39c.66-1.061.92-2.316 1.419-3.463a8.929 8.929 0 012.446-3.27c.9-.752 2.026-1.441 2.275-2.588.185-.854-.183-1.717-.408-2.561a7.99 7.99 0 01-.033-3.978c.198-.797.518-1.653.196-2.41-.426-1.001-1.829-1.259-2.81-.792-.985.466-1.629 1.426-2.18 2.363-1.245 2.112-2.282 4.355-3.745 6.321-2.226 2.99-5.301 5.178-8.275 7.358-1.646 1.207-5.668 3.23-4.368 5.816.882 1.751 2.627 1.522 4.191.913l-.004.002z"
        fill="#FAD686"
      />
      <Path
        d="M15.075 162.21c1.657-.52 3.206-1.328 4.783-2.056 3.252-1.5 6.784-2.696 10.35-2.367a16.485 16.485 0 002.325-4.993c-2.8-1.769-6.2-2.42-9.509-2.314-3.31.103-6.555.922-9.716 1.91a90.635 90.635 0 00-10.074 3.813c-.772.346-2.69.845-3.142 1.608-.666 1.121 2.465 2.709 3.389 3.206a15.483 15.483 0 005.405 1.723c2.07.258 4.197.097 6.189-.53z"
        fill="#D89162"
      />
      <Path
        d="M11.71 160.209c1.476.201 2.917-.475 4.254-1.13l8.876-4.348a30.29 30.29 0 00-11.345 2.012c-1.935.745-3.708 1.429-5.782 1.599.825.859 2.8 1.706 3.997 1.869v-.002z"
        fill="#E39BC4"
      />
      <Path
        d="M49.83 181.696c-3.682 1.324-10.127.547-13.939-.335-2.372-.55-4.476-1.911-6.372-3.438-1.209-.973-2.385-2.065-3.027-3.479-.432-.953-.6-2.006-.984-2.979-.567-1.445-1.58-2.662-2.391-3.984-.814-1.322-1.448-2.881-1.13-4.399.265-1.262 1.143-2.295 1.992-3.268 2.048-2.343 4.106-4.677 6.171-7.005 1.26-1.42 2.538-2.848 4.075-3.964 3.541-2.568 8.095-3.226 12.459-3.524 1.31-.088 2.637-.152 3.932.073 4.09.711 11.32 4.3 13.826 13.675 1.072 4.01-.03 7.618-1.171 11.611-.854 2.983-5.6 4.644-7.197 7.318-1.562 2.615-3.539 2.723-6.246 3.696l.002.002z"
        fill="#FAD686"
      />
      <Path
        d="M61.693 162.005c.14 5.368-2.786 10.712-7.382 13.487-3.012 1.82-6.873 2.531-10.094 1.114-1.14-.501-2.162-1.246-3.075-2.093-3.052-2.827-4.944-6.904-5.004-11.063-.062-4.158 1.745-8.335 4.904-11.042 2.114-1.811 4.79-2.903 7.557-3.166 1.686-.161 3.896-.529 5.531.073 4.629 1.705 7.448 8.139 7.565 12.69h-.002z"
        fill="#D89162"
      />
      <Path
        d="M38.477 157.911c-.144.875-.44 1.738-.393 2.625.037.691.282 1.355.558 1.988 1.562 3.592 4.15 6.616 6.39 9.831 2.239 3.214 4.205 6.853 4.213 10.771a15.2 15.2 0 00-5.017-2.694c-1.33-.419-2.718-.653-4.037-1.108-4.532-1.564-7.927-5.771-8.955-10.453-1.029-4.681.17-9.714 2.804-13.72.63-.96 2.113-2.262 3.4-1.644 1.359.653 1.233 3.181 1.034 4.406l.003-.002z"
        fill="#493F28"
      />
      <Path
        d="M37.25 150.943c.867-.918 2.08-1.417 3.272-1.827a37.463 37.463 0 016.241-1.571c2.354-.382 4.828-.529 7.076.265 2.319.818 4.18 2.555 5.93 4.284-4.11-2.232-9.257-1.242-13.509.709-2.62 1.202-5.23 2.779-8.114 2.76-2.471-.016-2.13-3.316-.898-4.618l.002-.002z"
        fill="#493F28"
      />
      <Path
        d="M46.847 156.836c.958 1.231 2.145 2.347 2.937 3.693-.686.435-5.02 2.654-4.975 2.383.125-.799 1.767-5.379 2.038-6.074v-.002zM44.398 157.264l-3.479 1.109c-.207.067 1.286 3.502 1.642 3.722.836-1.407 1.26-3.291 1.835-4.831h.002z"
        fill="#57B95E"
      />
      <Path
        d="M45.28 168.516c.113.556.297 1.132.713 1.516.417.384 1.134.494 1.543.099.16-.157.258-.366.333-.578a4.545 4.545 0 00-.27-3.636c-.165-.311-.383-.613-.703-.763-.704-.331-1.333.415-1.547.999-.275.75-.225 1.593-.068 2.363zM50.807 164.574l-.249-.468a23.044 23.044 0 002.001-1.198 20.308 20.308 0 01-.373-1.617h-.013l-.01-.144.524-.066c.113.627.258 1.253.433 1.867l.053.183-.157.108c-.708.483-1.45.933-2.209 1.335zM53.715 166.815c-.029 0-.057 0-.086-.005l.042-.527c.254.02.514-.143.735-.309.743-.549 1.266-1.169 1.553-1.849.329-.776.318-1.626-.027-2.272l.468-.249c.42.787.435 1.806.047 2.726-.325.768-.905 1.463-1.728 2.07-.265.194-.613.412-1.008.412l.004.003z"
        fill="#32194C"
      />
      <Path
        d="M54.47 164.054a15.731 15.731 0 00-1.633-.803l.205-.487c.576.242 1.145.52 1.688.829l-.26.461zM51.205 154.438c-.508.644-.86 1.449-.795 2.265.025.3.128.625.389.773a.833.833 0 00.375.092c.516.025 1.021-.189 1.431-.507.41-.318.733-.728 1.038-1.145.333-.457.657-.953.708-1.516.062-.69-.477-1.487-1.25-1.339-.632.123-1.515.891-1.896 1.377z"
        fill="#32194C"
      />
      <Path
        d="M50.765 169.44l2 2.719c-.634.079-1.27.156-1.903.236-.37.046-1.248.35-1.295-.075-.033-.294.484-1.075.596-1.386.183-.505.349-1.017.605-1.491l-.003-.003zM56.912 155.779l1.999 2.718c-.633.08-1.269.157-1.902.236-.37.047-1.248.351-1.295-.075-.033-.293.483-1.074.596-1.385.183-.505.348-1.017.604-1.491l-.002-.003z"
        fill="#57B95E"
      />
      <Path
        d="M31.23 173.246c-.945 1.43-.945 3.274-.766 4.977.18 1.704.507 3.447.103 5.112-.245 1.011-.745 1.94-1.262 2.842a73.39 73.39 0 01-11.26 14.905c-1.6-2.821-1.593-6.23-1.825-9.464-.22-3.069-.69-6.165-.199-9.201.49-3.035 2.171-6.1 5.017-7.26 1.362-.556 2.921-.656 4.133-1.49 1.661-1.142 1.877-3.298 3.28-4.569.973-.882 1.053 0 1.386.947.132.375 1.511 3.025 1.394 3.203l-.002-.002z"
        fill="#D89162"
      />
      <Path
        d="M21.694 182.117c-.212.761-.208 1.562-.201 2.352l.073 9.202c.459-.456.699-1.081.928-1.685.793-2.098 1.582-4.199 2.374-6.297.234-.62.47-1.249.537-1.908.108-1.081-.248-2.149-.351-3.23-.093-.978.139-1.862.269-2.809-1.416-.117-3.292 3.171-3.63 4.375z"
        fill="#E39BC4"
      />
      <Path
        d="M68.614 199.944c-1.156.966-2.436 1.782-3.689 2.625a9.97 9.97 0 01-8.747 1.169l-4.65-1.564c-5.096-1.714-8.81-6.261-9.197-11.625-.066-.922-.19-1.84-.37-2.749-.177-.891-.411-1.796-.307-2.698.084-.737.39-1.43.737-2.087 2.46-4.666 6.954-7.856 11.289-10.868.708-.492 1.485-1.004 2.345-.964.622.029 1.19.344 1.73.653l5.332 3.031c2.16 1.229 4.353 2.482 6.07 4.276 1.716 1.794 2.923 4.24 2.65 6.705-.148 1.332-.713 2.645-.49 3.967.126.745.496 1.425.706 2.153.85 2.945-1.061 6.01-3.411 7.971l.002.005z"
        fill="#ED50C0"
      />
      <Path
        d="M56.144 203.727l-4.247-1.427c-5.264-1.772-9.127-6.442-9.584-11.978-.026-.315-.06-.631-.097-.944a48.361 48.361 0 002.637 2.57c3.845 3.466 8.421 6.359 13.537 7.151 1.681.26 3.387.289 5.086.311.957.013 1.957.015 2.822-.397.69-.329 1.233-.896 1.754-1.457.94-1.014 1.888-2.118 2.018-3.547a2.655 2.655 0 00-.428-1.734c-.754-1.097-1.926-1.006-2.994-.881-.858.102-1.773.21-2.524-.287-.476-.315-.772-.884-.615-1.434.187-.648.852-.851 1.434-1.056 1.269-.448 2.475-1.176 3.278-2.257.801-1.081 1.145-2.551.687-3.815-.475-1.302-1.693-2.078-2.268-3.338-1.313-2.868-7.21-5.39-10.577-6.067-3.255-.656-6.595 2.195-9.13 4.196 2.074-1.908 4.435-3.57 6.751-5.18.709-.492 1.485-1.004 2.346-.964.622.028 1.189.344 1.73.653l5.332 3.031c2.16 1.229 4.353 2.482 6.07 4.276 1.716 1.793 2.923 4.24 2.649 6.705-.148 1.332-.713 2.645-.49 3.966.126.746.497 1.426.706 2.154.85 2.945-1.061 6.01-3.41 7.971-1.148.96-2.416 1.769-3.66 2.606a10.053 10.053 0 01-8.81 1.178l-.003-.005z"
        fill="#BD2EA2"
      />
      <Path
        d="M43.644 180.992c1.747-2.451 4.095-4.428 6.552-6.277.967-.725 2.87.627 4.907 1.13.342.084-.384.865-.128 1.105 0 0 2.103.274 2.105.276 4.507 4.232 6.098 4.038 8.507 9.73.104.242.201.518.1.763-.089.21-.3.333-.495.45-1.125.673-2.135 1.628-2.594 2.857-.46 1.229-.256 2.754.715 3.634l-3.736 1.878a45.18 45.18 0 01-15.935-15.541l.002-.005z"
        fill="#ED50C0"
      />
      <Path
        d="M49.093 185.468c.082-.747.305-1.54.61-2.332.301-.794.683-1.592 1.065-2.389-.746.474-1.492.947-2.224 1.5-.73.552-1.45 1.185-2.092 1.975-.207 1.013-.245 2.034-.086 3.003.157.966.532 1.877 1.101 2.557-.119-.878.049-1.708.355-2.429a6.093 6.093 0 011.273-1.88l-.002-.005zM55.588 189.874a8.014 8.014 0 012.006-4.752c-1.8.594-3.502 1.9-4.724 3.68-.322 2.136.029 4.252.938 5.915a8.01 8.01 0 011.78-4.84v-.003z"
        fill="#BD2EA2"
      />
      <Path
        d="M86.78 169.408c2.95 1.659 5.459 4.086 8.574 5.412l.874 23.195a24.885 24.885 0 00-11.561 3.717c-.854.534-1.697 1.128-2.67 1.375-.796.2-1.632.156-2.447.057-5.791-.717-10.85-4.115-15.664-7.417-.785-.539-1.62-1.143-1.915-2.05-.214-.655-.108-1.366-.002-2.045.348-2.235.697-4.47 1.048-6.703.423-2.716.86-5.474 2.045-7.953 1.183-2.48 3.24-4.684 5.895-5.368 1.434-.371 3.014-.298 4.296-1.048.721-.422 1.281-1.072 1.95-1.573 2.714-2.034 6.632-1.256 9.582.403l-.005-.002z"
        fill="#ED50C0"
      />
      <Path
        d="M95.354 174.82l.874 23.195a24.887 24.887 0 00-10.034 2.841 52.13 52.13 0 001.623-3.735c2.079-5.334 3.279-11.201 2.092-16.803-.39-1.84-1.028-3.616-1.67-5.383-.362-.997-.75-2.03-1.516-2.762-.611-.585-1.41-.924-2.193-1.242-1.203-.488-2.471-.955-3.762-.828-1.29.128-2.597 1.037-2.742 2.326-.093.829.293 1.628.68 2.369.385.739.791 1.525.743 2.357-.049.834-.761 1.685-1.586 1.553-.58-.093-.984-.609-1.364-1.059-.96-1.139-2.184-2.1-3.618-2.506-1.432-.406-3.087-.186-4.214.785-1.16 1.002-1.6 2.59-1.875 4.097a33.205 33.205 0 00-.097 11.336c.598 3.622 2.13 7.499 5.193 9.337-2.786-1.397-5.43-3.188-8.002-4.953-.785-.539-1.62-1.143-1.915-2.05-.214-.655-.108-1.366-.002-2.045.348-2.235.697-4.47 1.048-6.703.423-2.716.86-5.474 2.045-7.953 1.183-2.48 3.24-4.684 5.895-5.368 1.434-.371 3.014-.298 4.296-1.048.721-.422 1.281-1.072 1.95-1.573 2.714-2.034 6.632-1.256 9.582.404 2.95 1.659 5.458 4.086 8.573 5.411h-.004z"
        fill="#BD2EA2"
      />
      <Path
        d="M76.965 202.661c-3.22-.845-5.549-1.185-8.424-3-1.13-.715-1.114-4.53-1.392-6.835-.046-.386 1.044.059 1.194-.3l-.54-2.284c2.61-6.319 1.786-7.887 6.728-12.611.212-.201.46-.412.75-.401.252.008.462.178.66.335 1.138.9 2.52 1.571 3.971 1.564 1.45-.009 2.948-.814 3.48-2.164l3.404 3.126c-1.322 8.188-4.744 16.024-9.831 22.572v-.002z"
        fill="#ED50C0"
      />
      <Path
        d="M79.46 195.27c-.805.208-1.712.287-2.652.285-.942 0-1.915-.082-2.888-.166.781.585 1.564 1.172 2.423 1.712.856.539 1.793 1.035 2.861 1.39 1.128-.18 2.2-.542 3.14-1.087.937-.541 1.732-1.287 2.213-2.14-.863.467-1.785.617-2.652.584a6.735 6.735 0 01-2.445-.58v.002zM81.472 186.827a8.874 8.874 0 01-5.7-.212c1.319 1.628 3.337 2.877 5.656 3.444 2.334-.503 4.386-1.696 5.75-3.287a8.875 8.875 0 01-5.706.055z"
        fill="#BD2EA2"
      />
      <Path
        d="M67.27 284.487a7.419 7.419 0 00-.935 2.542 6.104 6.104 0 00.108 2.595 5.823 5.823 0 01.512-2.412 6.386 6.386 0 011.346-1.941c.38-.676.887-1.3 1.511-1.816A5.826 5.826 0 0172 282.316a6.166 6.166 0 00-2.529.589 7.402 7.402 0 00-2.2 1.582zM60.85 286.078a7.664 7.664 0 00-.77 2.436 6.499 6.499 0 00.122 2.449c.037-1.61.728-3.082 1.718-4.159.634-1.319 1.746-2.504 3.228-3.137a6.465 6.465 0 00-2.32.794 7.65 7.65 0 00-1.98 1.617h.002zM104.133 289.778a8.086 8.086 0 00.297 2.222 7.415 7.415 0 01.945-1.858c-.029-.67.037-1.37.209-2.074a8.11 8.11 0 00-1.451 1.71zM114.085 288.902c.678.697 1.167 1.699 1.163 2.824.214-.516.32-1.103.309-1.701a5.13 5.13 0 00-.369-1.798 5.158 5.158 0 00-1.432-1.147 4.248 4.248 0 00-1.654-.501c1.004.51 1.67 1.401 1.981 2.323h.002z"
        fill="#9E6337"
      />
      <Path
        d="M88.916 198.788c.093 2.449.298 5.16 2.063 6.861 1.227 1.183 2.965 1.622 4.604 2.089 9.437 2.701 18.729 7.879 28.432 6.405 8.309-1.262 14.308-2.645 20.525-8.3 1.245-1.132 3.285-6.892 3.676-8.529.32-1.337-.029-2.742-.497-4.035-1.652-4.565-5.18-8.746-9.91-9.84-1.714-.397-3.495-.373-5.244-.554-7.007-.717-13.222-4.582-19.55-7.673-5.377-2.626-14.769-6.981-19.605-1.247-5.438 6.449-4.79 17.015-4.494 24.82v.003z"
        fill="#1CD6F5"
      />
    </Svg>
  );
};
