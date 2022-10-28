import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { ISvgProps } from '../../../utils/types';

export const SayHelloIcon = ({ width = 96, height = 96 }: ISvgProps) => {
  return (
    <Svg
      width={width * WINDOW_COEFFICIENT}
      height={height * WINDOW_COEFFICIENT}
      viewBox="0 0 96 96"
      fill="none">
      <Path
        d="M47.998 95.994c-12.82 0-24.874-4.993-33.94-14.058C4.994 72.87.002 60.818.002 47.997c0-12.82 4.992-24.873 14.058-33.939C23.124 4.992 35.178 0 47.999 0c12.82 0 24.873 4.992 33.938 14.058 9.066 9.066 14.058 21.118 14.058 33.94 0 12.82-4.992 24.873-14.058 33.939-9.065 9.065-21.119 14.058-33.939 14.058v-.001z"
        fill="#FFB552"
      />
      <Path
        d="M47.998 95.994c-12.82 0-24.874-4.993-33.94-14.058C4.994 72.87.002 60.818.002 47.997c0-12.82 4.992-24.873 14.058-33.939C23.124 4.992 35.178 0 47.999 0c12.82 0 24.873 4.992 33.938 14.058 9.066 9.066 14.058 21.118 14.058 33.94 0 12.82-4.992 24.873-14.058 33.939-9.065 9.065-21.119 14.058-33.939 14.058v-.001zm0-92.725c-11.947 0-23.179 4.652-31.627 13.1s-13.1 19.68-13.1 31.627 4.652 23.18 13.1 31.628 19.68 13.1 31.627 13.1 23.18-4.652 31.627-13.1c8.448-8.448 13.101-19.68 13.101-31.627s-4.653-23.18-13.1-31.628c-8.449-8.448-19.681-13.1-31.628-13.1z"
        fill="#FFB552"
      />
      <Path
        d="M82.653 81.205a50.101 50.101 0 001.983-2.2c-2.075.663-4.118 1.177-5.843 1.432-8.347 7.934-19.236 12.289-30.795 12.289-11.558 0-23.179-4.653-31.627-13.101s-13.1-19.68-13.1-31.627c0-2.354.181-4.679.535-6.96-.81-1.982-1.548-4.012-2.026-6.063a47.958 47.958 0 00-1.522 8.003l-.007.068a47.893 47.893 0 00-.133 1.557l-.01.146c-.014.223-.028.445-.04.668l-.005.11c-.013.252-.024.503-.033.757l-.004.152a69.99 69.99 0 00-.016.608l-.004.205c-.003.25-.006.5-.006.749 0 12.82 4.992 24.874 14.058 33.94 9.066 9.065 21.12 14.057 33.94 14.057 12.82 0 24.873-4.992 33.939-14.058.227-.227.45-.456.672-.686l.044-.045v-.001z"
        fill="#B78036"
      />
      <Path
        d="M47.11.01c-.156.002-.312.005-.467.01l-.242.007c-.15.005-.3.01-.45.017l-.232.01a48.92 48.92 0 00-1.341.08l-.152.012c-.173.013-.346.027-.518.042l-.224.02-.453.045-.23.023-.474.053-.195.023a47.538 47.538 0 00-1.99.284l-.215.037a71.1 71.1 0 00-.464.08l-.201.036a59.03 59.03 0 00-.545.103l-.108.021c-.222.044-.445.09-.666.137l-.096.021a41.715 41.715 0 00-1.215.278l-.19.047c-.167.041-.334.083-.5.126l-.148.038c-.436.114-.87.234-1.302.36l-.132.039-.51.153-.172.053c-.163.05-.325.103-.488.155l-.156.05c-.193.063-.386.127-.578.193a44.691 44.691 0 00-.708.248l-.032.011c-.198.072-.396.144-.594.218l-.138.053-.495.19-.15.06c-.174.068-.346.138-.518.208l-.104.043c-.422.173-.84.352-1.257.539l-.09.04c-.174.078-.348.157-.52.237l-.138.065c-.164.077-.327.153-.49.232l-.124.06c-.193.093-.386.188-.577.284l-.021.01c-.211.106-.422.214-.632.323 1.345.544 2.682 1.111 4.009 1.699C35.51 4.585 41.654 3.273 48 3.273c11.947 0 23.179 4.652 31.627 13.1s13.1 19.68 13.1 31.627c0 4.073-.54 8.063-1.588 11.888a62.092 62.092 0 002.504 3.037c.192-.59.372-1.183.541-1.78l.01-.03c.167-.596.324-1.195.468-1.798l.003-.011c.072-.298.14-.597.207-.897l.01-.044c.128-.589.246-1.182.353-1.777l.016-.089c.052-.293.102-.588.149-.884 0-.007.003-.015.004-.023.045-.289.088-.578.128-.868l.012-.079c.04-.287.076-.575.11-.863l.015-.125a49.174 49.174 0 00.287-3.642l.006-.134c.01-.28.018-.56.025-.84 0-.06.002-.119.003-.179.005-.287.009-.574.009-.862 0-12.82-4.992-24.873-14.058-33.94C72.876 4.996 60.822.004 48.002.004c-.225 0-.45.002-.675.005l-.213.004-.004-.003z"
        fill="#FFDBB0"
      />
      <Path
        d="M47.998 90.902c23.696 0 42.906-19.209 42.906-42.905S71.694 5.092 47.998 5.092c-23.695 0-42.905 19.21-42.905 42.905 0 23.696 19.21 42.905 42.905 42.905z"
        fill="#3F1670"
      />
      <Path
        d="M24.026 44.317s3.132 6.317 6.149 13.86c3.017 7.542 6.537 19.359 17.097 20.113 10.56.754 18.354-6.537 19.61-11.314 1.258-4.777 1.51-11.063 2.263-14.835.755-3.771 2.515-7.794 2.263-9.554-.251-1.76-4.274-4.777-7.291 1.509-3.017 6.285-1.509 7.794-3.017 8.297-1.509.503-3.772-6.035-4.023-10.56-.252-4.526.148-20.264-3.52-20.616-3.35-.322-3.5 5.16-3.248 12.955.251 7.794.482 9.672-.272 9.924-.754.251-4.023-13.829-5.532-17.852-1.508-4.023-3.875-5.45-5.264-4.061-1.383 1.383.345 7.37 1.745 12.107 2.098 7.105 2.448 10.347 1.945 11.102-.503.754-4.88-9.124-6.471-12.862-1.983-4.66-3.64-6.809-5.518-5.736-2.152 1.23-.697 5.537 1.746 12.273 3.018 8.323 3.158 9.972 2.403 10.474-.754.503-4.917-5.948-7.431-9.971-2.515-4.023-7.17-4.476-3.635 4.745v.002z"
        fill="#18D2AE"
      />
      <Path
        d="M66.933 66.78c1.213-4.752 1.47-10.917 2.213-14.638.754-3.771 2.514-7.794 2.263-9.554a1.396 1.396 0 00-.031-.153c-2.518 6.252-3.666 15.487-9.03 23.234l4.585 1.11z"
        fill="#0A8F78"
      />
      <Path
        d="M66.883 66.976c.765-2.908 1.157-6.374 1.518-9.493l-2.674 3.621c-2.34 3.167-4.794 6.434-8.259 8.304-5.006 2.702-11.312 1.94-16.412-.583-4.072-2.014-7.594-5.104-10.173-8.841 2.892 7.485 6.641 17.61 16.39 18.306 10.56.754 18.353-6.537 19.61-11.314zM50.309 34.173c.213 6.62.413 8.972.005 9.685.108.237.26.462.503.534.622.186.963-.708.969-1.357.04-4.014-.8-8.007-.638-12.019.114-2.82.71-5.725.085-8.439-1.08 2.064-1.095 6.295-.924 11.595zM39.092 22.373c-1.094 1.673.551 7.37 1.895 11.919 1.793 6.072 2.31 9.323 2.107 10.61l.156.299c.13.243.277.502.529.618.44.2.97-.173 1.114-.634.146-.461.021-.959-.103-1.426l-5.698-21.385v-.001zM30.36 32.042c.49 1.902 1.326 4.26 2.33 7.027 2.584 7.126 3.057 9.36 2.666 10.17.313.317.73.575 1.118.4.287-.128.43-.45.508-.756.423-1.66-.397-3.357-1.169-4.886-1.973-3.911-3.792-7.9-5.453-11.955z"
        fill="#0A8F78"
      />
      <Path
        d="M39.57 72.413l.894-2.198a103.945 103.945 0 01-16.782-27.19c-.15-.356-.298-.713-.447-1.07.197.704.457 1.49.791 2.362 0 0 3.132 6.316 6.15 13.86 1.432 3.582 2.98 8.128 5.34 11.995 1.218.978 2.558 1.767 4.054 2.24v.001z"
        fill="#0A8F78"
      />
      <Path
        d="M19.292 46.748s-3.426 8.79 4.917 14.6M13.93 46.898s-4.32 12.067 7.15 19.517M76.58 45.092s2.08-9.202-7.037-13.704M81.863 44.146s2.473-12.577-9.98-18.234"
        stroke="#A1F9E8"
        strokeWidth={3}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  );
};
