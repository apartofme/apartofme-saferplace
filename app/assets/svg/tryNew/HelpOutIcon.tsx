import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { ISvgProps } from '../../../utils/types';

export const HelpOutIcon = ({ width = 96, height = 96 }: ISvgProps) => {
  return (
    <Svg
      width={width * WINDOW_COEFFICIENT}
      height={height * WINDOW_COEFFICIENT}
      viewBox="0 0 96 97"
      fill="none">
      <Path
        d="M47.998 96.015c-12.82 0-24.874-4.992-33.94-14.058C4.994 72.893.002 60.84.002 48.02c0-12.82 4.992-24.874 14.058-33.94C23.124 5.014 35.178.021 47.999.021c12.82 0 24.873 4.993 33.939 14.058 9.065 9.066 14.058 21.119 14.058 33.94 0 12.821-4.993 24.874-14.058 33.94-9.066 9.065-21.12 14.057-33.94 14.057z"
        fill="#FFB552"
      />
      <Path
        d="M47.998 96.015c-12.82 0-24.874-4.992-33.94-14.058C4.994 72.893.002 60.84.002 48.02c0-12.82 4.992-24.874 14.058-33.94C23.124 5.014 35.178.021 47.999.021c12.82 0 24.873 4.993 33.939 14.058 9.065 9.066 14.058 21.119 14.058 33.94 0 12.821-4.993 24.874-14.058 33.94-9.066 9.065-21.12 14.057-33.94 14.057zm0-92.725c-11.947 0-23.179 4.653-31.627 13.1-8.448 8.449-13.1 19.681-13.1 31.628s4.652 23.18 13.1 31.627c8.448 8.448 19.68 13.1 31.627 13.1s23.18-4.652 31.627-13.1c8.448-8.448 13.101-19.68 13.101-31.627s-4.653-23.18-13.1-31.627c-8.449-8.448-19.68-13.1-31.628-13.1z"
        fill="#FFB552"
      />
      <Path
        d="M82.653 81.226a50.101 50.101 0 001.983-2.2c-2.075.664-4.118 1.177-5.843 1.433-8.347 7.934-19.236 12.288-30.795 12.288-11.558 0-23.179-4.653-31.627-13.1-8.448-8.449-13.1-19.68-13.1-31.628 0-2.353.181-4.678.535-6.96-.81-1.982-1.548-4.012-2.026-6.063A47.958 47.958 0 00.258 43l-.007.068a47.893 47.893 0 00-.133 1.557l-.01.147c-.014.222-.028.445-.04.668l-.005.11c-.013.252-.024.503-.033.756l-.004.153c-.007.203-.012.405-.016.608l-.004.204c-.003.25-.006.5-.006.75 0 12.82 4.992 24.873 14.058 33.939 9.066 9.065 21.12 14.058 33.94 14.058 12.82 0 24.873-4.993 33.939-14.058.227-.227.45-.457.672-.687l.044-.045z"
        fill="#B78036"
      />
      <Path
        d="M47.11.03l-.467.011-.242.007c-.15.006-.3.01-.45.017l-.232.01a48.912 48.912 0 00-1.341.08l-.152.012-.518.043-.224.02-.453.044-.23.024c-.159.017-.316.034-.474.053l-.195.023a47.538 47.538 0 00-1.99.284c-.072.011-.144.024-.215.036a71.1 71.1 0 00-.464.08l-.201.036a58.997 58.997 0 00-1.32.262l-.095.02c-.186.04-.37.081-.556.123l-.182.043c-.16.037-.318.074-.477.113l-.19.046c-.167.042-.334.083-.5.127-.05.012-.1.024-.148.038-.436.113-.87.233-1.302.36l-.132.038c-.17.05-.34.102-.51.154l-.172.053c-.163.05-.325.102-.488.154l-.156.05c-.193.064-.386.127-.578.194a44.576 44.576 0 00-.708.248l-.032.01-.594.219-.138.053c-.165.062-.33.126-.495.19l-.15.06c-.174.067-.346.137-.518.208l-.104.042c-.422.174-.84.353-1.257.539l-.09.04a39.173 39.173 0 00-1.148.534l-.124.06a43.57 43.57 0 00-.577.284l-.021.011c-.211.106-.422.213-.632.323 1.345.543 2.682 1.11 4.009 1.698C35.51 4.607 41.654 3.294 48 3.294c11.947 0 23.179 4.653 31.627 13.1 8.448 8.449 13.1 19.68 13.1 31.628 0 4.073-.54 8.062-1.588 11.888a62.092 62.092 0 002.504 3.036c.192-.59.372-1.183.541-1.78l.01-.03c.167-.596.324-1.195.468-1.797l.003-.012c.072-.298.14-.596.207-.896l.01-.044a48.1 48.1 0 00.353-1.778l.016-.088c.052-.294.102-.589.149-.884 0-.008.003-.016.004-.024.045-.288.088-.578.128-.868l.012-.078c.04-.287.076-.576.11-.863l.015-.126a49.174 49.174 0 00.287-3.641l.006-.134c.01-.28.018-.56.025-.84l.003-.18c.005-.286.009-.574.009-.861 0-12.82-4.992-24.874-14.058-33.94C72.876 5.017 60.822.024 48.002.024c-.225 0-.45.002-.675.006l-.213.003-.004-.002z"
        fill="#FFDBB0"
      />
      <Path
        d="M47.998 90.924c23.696 0 42.905-19.21 42.905-42.906 0-23.695-19.209-42.905-42.905-42.905S5.093 24.323 5.093 48.02c0 23.695 19.21 42.905 42.905 42.905z"
        fill="#3F1670"
      />
      <Path
        d="M19.222 19.018v60.825c7.478 6.764 17.35 10.932 28.193 11.076h.034a38.643 38.643 0 001.099 0h.033c10.843-.145 20.715-4.312 28.193-11.076V19.017c-.081-.078-57.643 0-57.55 0h-.002z"
        fill="#7A4721"
      />
      <Path
        d="M22.628 82.621a42.715 42.715 0 0025.37 8.302c9.491 0 18.26-3.082 25.365-8.298V22.498H22.628v60.123z"
        fill="#B2835D"
      />
      <Path
        d="M57.36 67.116c.366-1.463-2.194-3.291-2.011-4.205.182-.914-.731-3.657-.731-3.657L33.772 77.539l-4.486 9.1a42.585 42.585 0 009.36 3.263c.791-2.451 1.764-5.271 2.257-5.962.914-1.28 6.4-1.829 8.594-2.743 2.194-.914 5.668-3.84 7.132-5.668 1.463-1.829.366-6.948.731-8.411v-.002z"
        fill="#754A2A"
      />
      <Path
        d="M56.132 63.528c-.538-1.973-2.153-2.332-2.153-2.332s1.435-1.077.359-3.41c-1.077-2.333-2.692-1.974-2.692-1.974s1.256-2.153-1.615-3.767c-2.003-1.127-3.948 1.076-4.666.897-.718-.18-6.28-1.974-7.896-1.616-1.615.36-11.485 8.075-12.74 10.588-1.257 2.512-.36 8.434-.719 10.766-.264 1.717-3.639 4.99-5.402 6.597a42.948 42.948 0 0013.089 8.442c1.568-2.631 3.919-6.547 4.156-6.784.359-.359 2.153-1.615 4.486-2.692 2.332-1.076 6.101-1.973 6.819-2.153.718-.18 5.383-1.435 8.254-4.845 1.968-2.338-.538-3.768-.538-3.768s1.794-1.974 1.256-3.948h.002z"
        fill="#FF00F3"
      />
      <Path
        d="M56.132 63.528s-.444 1.874-2.52 3.34c-2.076 1.465-3.907 2.564-5.13 3.053-1.22.489-2.442 1.1-3.786.855-.726-.508-.675-1.276-.514-1.814.722-.106 1.598-.408 2.59-.995 2.688-1.588 5.253-3.908 6.23-4.886.554-.554 1.03-1.147 1.472-1.692a2.33 2.33 0 00-.495-.195s1.036-.779.686-2.445c-.577.828-1.56 2.152-2.64 3.232-1.71 1.71-3.176 3.176-4.397 4.031-1.221.855-2.932 2.198-4.275 2.198-1.184 0-1.514-.663-1.41-.236a5.077 5.077 0 01-.178-.13c-.688-.53-.94-1.15-1.005-1.684.317-.2.84-.519 1.493-.881 1.1-.61 4.957-3.705 7.277-6.393 2.012-2.33 2.996-2.808 3.222-2.893-.618-.29-1.106-.183-1.106-.183s.87-1.49-.492-2.922c-.074.845.103 2.193-.472 2.864-.733.855-5.374 5.13-7.084 6.718a14.768 14.768 0 01-3.664 2.443c-.977 0-2.026-1.086-1.832-1.954.421-1.888 2.443-3.054 2.443-3.054s1.708.165 3.118-.608c.61-.335 1.935-1.456 2.62-2.205.002.012.643-.784.655-.818.315-.437.646-.957.747-1.33.189-.693-.588-2.126-1.153-2.452-.41.226-.754.421-1.004.454.193.078.693.331.969.95.26.58.173 1.088.154 1.125-.122.244-1.832 2.442-3.42 2.809-1.588.366-5.985-.122-5.985-.122-.816.134-.866.949-.716 1.267.328.7 2.06.931 2.06.931s-2.582.894-2.388 3.577c.228 3.139 3.367 2.956 3.367 2.956s-.741.75-.228 1.956c.91 2.137 2.79 1.649 2.79 1.649s-.154.223.212 1.444c.135.45.492.704.887.845 1.24 2.5-2.26 3.038-4.144 3.576-1.631.466-5.921 3.59-5.921 3.59s-2.323 2.575-4.877 6.637a42.465 42.465 0 003.412 1.582c1.569-2.632 3.92-6.548 4.156-6.784.36-.36 2.154-1.616 4.486-2.692 2.333-1.076 6.102-1.974 6.82-2.153.717-.18 5.382-1.436 8.254-4.846.907-1.077.864-1.962.553-2.602a13.65 13.65 0 01-1.867 2.502c-1.165 1.233-4.641 3.42-6.595 2.687-1.312-.492-.918-1.534-.517-2.166.605-.093 1.307-.29 2.104-.643 2.517-1.11 4.673-2.31 6.092-3.328-.179-.142-.31-.216-.31-.216s1.795-1.974 1.257-3.948v-.001z"
        fill="#AD05AD"
      />
      <Path
        d="M64.868 83.472a5.488 5.488 0 100-10.976 5.488 5.488 0 000 10.977z"
        fill="#754A2A"
      />
      <Path
        d="M31.741 50.32s3.336-5.432 8.906-3.595M30.878 44.714s3.055-4.683 8.211-2.967"
        stroke="#6BF6E2"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M66.938 79.445a4.981 4.981 0 100-9.962 4.981 4.981 0 000 9.962z"
        fill="#E2B088"
      />
      <Path
        d="M48.705 40.704a1.694 1.694 0 100-3.388 1.694 1.694 0 000 3.388z"
        fill="#72B6C1"
        stroke="#563F07"
        strokeMiterlimit={10}
      />
    </Svg>
  );
};
