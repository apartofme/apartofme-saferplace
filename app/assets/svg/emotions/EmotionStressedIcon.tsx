import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { ISvgProps } from '../../../utils/types';

export const EmotionStressedIcon = ({ width = 48, height = 48 }: ISvgProps) => {
  return (
    <Svg
      width={width * WINDOW_COEFFICIENT}
      height={height * WINDOW_COEFFICIENT}
      viewBox="0 0 48 48"
      fill="none">
      <G>
        <Path
          d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24z"
          fill="#C0F9F2"
        />
        <Path
          d="M5.514 20.828s-.289 3.256.988 4.745c1.277 1.488 3.162 2.806 4.628 2.82 1.465.016 5.307-1.506 5.627-3.475 1.193-7.388-2.988-6.696-4.035-6.99-1.046-.294-6.772 2.964-7.206 2.898l-.002.002z"
          fill="#fff"
        />
        <Path
          d="M11.714 27.512a4.007 4.007 0 100-8.015 4.007 4.007 0 000 8.015z"
          fill="#D578FF"
        />
        <Path
          d="M15.72 23.569l.002.257v.14c-.002.053-.01.11-.015.17-.012.123-.024.268-.063.426-.055.319-.184.702-.406 1.115a4.089 4.089 0 01-1.022 1.227c-.465.375-1.068.7-1.776.843-.702.138-1.507.13-2.283-.156-.197-.062-.383-.156-.575-.247-.181-.108-.371-.208-.54-.343-.18-.122-.339-.275-.501-.425-.15-.163-.305-.326-.434-.512a4.203 4.203 0 01-.627-1.225 4.619 4.619 0 01-.211-1.405c.013-.48.1-.954.255-1.396.151-.445.391-.847.665-1.205.135-.183.294-.34.449-.499.168-.144.331-.29.514-.408.173-.13.366-.225.551-.326.193-.084.383-.173.582-.229.784-.26 1.589-.243 2.286-.084a4.158 4.158 0 012.732 2.158c.207.42.325.806.372 1.127.033.158.04.303.048.427.004.062.01.12.01.171l-.005.141-.01.258-.027-.256a6.627 6.627 0 01-.015-.14c-.008-.05-.021-.105-.033-.164-.026-.12-.049-.257-.101-.405a3.819 3.819 0 00-.477-1.021 3.894 3.894 0 00-1.013-1.052 3.82 3.82 0 00-1.597-.657c-.61-.09-1.29-.057-1.927.195-.163.053-.314.137-.47.213-.148.093-.304.175-.44.29-.147.1-.274.228-.409.349-.12.134-.247.265-.35.418a3.528 3.528 0 00-.517.985c-.12.357-.185.737-.198 1.124 0 .388.054.77.161 1.13.103.363.28.698.484 1 .1.155.222.29.338.429.13.124.254.257.396.362.133.118.288.207.432.303.155.08.303.17.464.228.628.273 1.307.326 1.92.256a3.79 3.79 0 001.617-.605 3.92 3.92 0 001.047-1.02c.246-.36.416-.707.509-1.005.057-.146.085-.284.114-.401.013-.06.029-.114.039-.165l.018-.138c.024-.163.035-.253.035-.253h.002z"
          fill="#32194C"
        />
        <Path
          d="M12.018 26.26a2.754 2.754 0 100-5.507 2.754 2.754 0 000 5.508zM4.945 13.29s.397-.604 1.14-1.399c.37-.398.828-.843 1.365-1.284.27-.22.558-.44.866-.651a8.79 8.79 0 011.033-.622 5.852 5.852 0 011.268-.469 4.36 4.36 0 011.392-.11c.228.02.458.061.662.119.201.057.364.124.507.188.282.127.487.238.655.312.163.076.341.115.494.118a.788.788 0 00.422-.116c.052-.035.096-.074.153-.098a.537.537 0 01.163-.047c.05-.008.097.012.114.036.019.022.022.035.024.035 0 0 .005-.008.005-.022.001-.015-.017-.023-.037 0a.338.338 0 00-.057.121c-.02.057-.02.143-.037.235-.037.182-.133.4-.333.602a1.94 1.94 0 01-.84.484c-.35.102-.707.13-1.025.16-.156.014-.303.028-.425.053a2.982 2.982 0 00-.336.094c-.44.145-.931.402-1.561.718-.316.16-.647.319-.995.47a12.27 12.27 0 01-1.013.385c-.659.22-1.28.37-1.815.472-1.068.205-1.79.219-1.79.219l.001-.002z"
          fill="#32194C"
        />
        <Path
          d="M16.904 21.195s.019.075.05.212c.03.139.088.344.127.616.087.538.181 1.34.033 2.336a5.266 5.266 0 01-.49 1.59 2.806 2.806 0 01-.254.404c-.093.124-.175.257-.286.376a5.706 5.706 0 01-.704.706c-1.043.88-2.528 1.469-4.126 1.433a5.738 5.738 0 01-2.257-.527 6.306 6.306 0 01-1.745-1.227 6.644 6.644 0 01-1.933-4.395c-.022-.393.007-.731.034-1.005.037-.272.072-.48.107-.622l.05-.213-.01.218a6.924 6.924 0 00-.008.622c.026.534.115 1.314.452 2.193.335.872.913 1.855 1.825 2.646.455.395.988.744 1.581.998a5.35 5.35 0 001.927.413 5.996 5.996 0 003.633-1.129c.24-.176.462-.368.66-.571.106-.094.192-.21.284-.316.098-.113.168-.197.237-.309.279-.444.46-.93.583-1.378.247-.907.27-1.693.267-2.23.004-.27-.017-.478-.023-.621-.009-.14-.012-.218-.012-.218l-.002-.002z"
          fill="#32194C"
        />
        <Path
          d="M11.438 14.837s1.4-.797 3.243-1.124a10.71 10.71 0 011.896-.163c.176 0 .322.002.448-.014a.786.786 0 00.314-.094.605.605 0 00.197-.18.492.492 0 00.074-.17c.008-.046.01-.072.01-.072-.007 0 .079.078.08.286a.75.75 0 01-.104.363.879.879 0 01-.15.197 1.45 1.45 0 01-.214.17c-.16.102-.345.174-.521.24-.175.063-.358.126-.553.186-.39.121-.823.232-1.284.314-1.843.328-3.432.063-3.432.063l-.004-.002z"
          fill="#186060"
        />
        <Path
          d="M4.07 24.382s.045-.262.139-.728c.1-.465.237-1.14.55-1.966.157-.411.362-.862.65-1.32.285-.457.643-.931 1.097-1.361.45-.43.99-.82 1.57-1.146.558-.311 1.168-.592 1.834-.808a8.2 8.2 0 012.044-.402 5.65 5.65 0 012.039.242c.16.045.317.12.468.178.152.074.296.145.437.229.293.171.513.36.723.546.405.376.714.756.972 1.114a8.388 8.388 0 011.002 1.808 5.259 5.259 0 01.225.714l-.131-.14a8.525 8.525 0 00-.385-.38c-.34-.315-.852-.752-1.505-1.211a9.4 9.4 0 00-1.075-.66c-.192-.091-.39-.187-.57-.236-.092-.028-.195-.048-.293-.073-.104-.012-.201-.04-.31-.046a5.268 5.268 0 00-1.383.054c-.496.082-1.018.22-1.558.396-.539.177-1.068.384-1.579.602-.486.21-.926.435-1.33.692a8.693 8.693 0 00-1.967 1.77c-.517.611-.914 1.172-1.204 1.547-.288.38-.46.583-.46.583v.002z"
          fill="#32194C"
        />
        <Path
          d="M42.263 20.828s.289 3.256-.988 4.745c-1.277 1.488-3.162 2.806-4.627 2.82-1.465.016-5.308-1.506-5.627-3.475-1.193-7.388 2.987-6.696 4.034-6.99 1.047-.294 6.773 2.964 7.206 2.898l.002.002z"
          fill="#fff"
        />
        <Path
          d="M36.063 27.512a4.007 4.007 0 100-8.015 4.007 4.007 0 000 8.015z"
          fill="#D578FF"
        />
        <Path
          d="M32.056 23.569s.014.09.035.253l.019.138c.01.05.025.106.039.165.028.117.057.255.114.401.092.3.262.647.509 1.005.25.358.596.723 1.047 1.02.448.294 1 .53 1.616.605.613.07 1.29.017 1.92-.256.162-.058.31-.147.464-.228.145-.098.298-.185.432-.303.143-.105.266-.236.397-.362.115-.14.238-.274.337-.429.204-.304.382-.637.484-1 .108-.36.163-.742.161-1.13a3.928 3.928 0 00-.198-1.124 3.55 3.55 0 00-.516-.985c-.104-.153-.231-.282-.35-.418-.135-.121-.261-.25-.409-.35-.138-.114-.294-.197-.44-.289-.157-.076-.31-.16-.47-.213-.638-.252-1.316-.284-1.928-.195a3.778 3.778 0 00-1.596.657c-.44.31-.775.685-1.013 1.052-.237.366-.395.719-.477 1.021-.052.15-.078.286-.101.405-.012.059-.026.114-.034.165l-.015.14-.027.255-.01-.258c0-.041-.003-.09-.005-.14 0-.053.007-.11.01-.172.008-.124.015-.267.049-.427.045-.32.163-.709.371-1.127a4.147 4.147 0 012.732-2.157c.697-.16 1.502-.177 2.287.083.198.056.388.145.581.229.185.1.378.197.551.326.184.118.346.264.514.408.155.158.315.316.45.5.273.357.513.759.665 1.204.156.442.241.916.255 1.396a4.62 4.62 0 01-.212 1.405c-.136.45-.364.858-.627 1.225-.127.186-.284.35-.433.512-.165.15-.321.3-.5.425-.17.136-.36.237-.542.343-.191.09-.376.185-.574.247-.777.284-1.582.292-2.284.156a4.144 4.144 0 01-2.797-2.07 3.827 3.827 0 01-.407-1.115c-.039-.158-.049-.301-.062-.425-.005-.063-.014-.118-.015-.17v-.141l.001-.257h.002z"
          fill="#32194C"
        />
        <Path
          d="M35.757 26.26a2.754 2.754 0 100-5.508 2.754 2.754 0 000 5.508zM42.83 13.29s-.722-.013-1.79-.218a14.24 14.24 0 01-1.815-.472c-.33-.11-.669-.237-1.013-.385-.348-.15-.679-.31-.995-.47-.63-.316-1.12-.573-1.56-.718a3.084 3.084 0 00-.337-.094 4.787 4.787 0 00-.425-.053c-.317-.03-.675-.058-1.025-.16a1.957 1.957 0 01-.84-.484c-.2-.202-.297-.42-.332-.602-.017-.09-.017-.176-.037-.235a.338.338 0 00-.058-.12c-.02-.026-.038-.018-.037 0 0 .013.007.021.006.021 0 0 .005-.013.023-.035.017-.024.064-.042.114-.036a.572.572 0 01.163.048c.057.023.101.063.153.097.108.069.26.118.422.116.153-.003.33-.042.494-.118.17-.075.375-.185.655-.312.145-.064.308-.13.508-.188.201-.058.433-.1.662-.12a4.36 4.36 0 011.39.111c.455.106.876.274 1.27.469.39.197.73.412 1.033.622.307.211.596.431.865.652.538.441.995.887 1.366 1.283.743.795 1.14 1.4 1.14 1.4v.002z"
          fill="#32194C"
        />
        <Path
          d="M30.87 21.195l-.011.218c-.007.143-.027.351-.024.622-.003.536.02 1.324.268 2.23.124.448.304.935.583 1.377.069.113.14.198.236.31.093.103.179.22.284.315.199.203.42.395.66.571a5.984 5.984 0 003.633 1.13 5.35 5.35 0 001.928-.414 6.073 6.073 0 001.58-.998c.915-.791 1.491-1.773 1.825-2.646a6.982 6.982 0 00.452-2.193 6.974 6.974 0 00-.006-.622l-.012-.218.05.213c.037.14.07.348.108.622.027.272.055.61.033 1.005a6.345 6.345 0 01-.195 1.329 6.615 6.615 0 01-1.737 3.066 6.268 6.268 0 01-1.746 1.227 5.737 5.737 0 01-2.256.527c-1.598.037-3.083-.552-4.127-1.433a5.7 5.7 0 01-.704-.706c-.11-.119-.193-.252-.285-.376a2.604 2.604 0 01-.254-.405 5.31 5.31 0 01-.49-1.59 7.41 7.41 0 01.033-2.335c.039-.27.094-.475.126-.617l.05-.211-.001.002z"
          fill="#32194C"
        />
        <Path
          d="M43.708 24.382s-.173-.204-.46-.583c-.291-.375-.688-.936-1.205-1.548a8.69 8.69 0 00-1.966-1.769 9.782 9.782 0 00-1.33-.692 19.769 19.769 0 00-1.58-.602 10.714 10.714 0 00-1.558-.396c-.495-.083-.96-.1-1.383-.054-.107.007-.206.034-.31.045-.098.026-.2.046-.293.074-.18.049-.378.145-.57.236-.384.198-.749.433-1.075.66-.655.459-1.166.894-1.505 1.211-.171.158-.3.29-.385.38l-.131.14.047-.187a5.09 5.09 0 01.178-.528 8.392 8.392 0 011.002-1.807c.26-.358.567-.738.972-1.114.21-.185.43-.375.723-.546.141-.085.287-.155.437-.23.153-.058.309-.132.468-.177a5.68 5.68 0 012.039-.242c.692.04 1.38.183 2.044.402.664.218 1.274.498 1.834.808.58.326 1.12.715 1.57 1.146.454.43.812.904 1.098 1.36.287.46.492.908.648 1.321.314.825.45 1.5.551 1.966.096.467.14.728.14.728v-.002z"
          fill="#32194C"
        />
        <Path
          d="M36.337 14.836s-1.59.266-3.433-.062a10.746 10.746 0 01-1.836-.5 2.571 2.571 0 01-.521-.24 1.198 1.198 0 01-.213-.17.872.872 0 01-.152-.197.783.783 0 01-.104-.363c0-.207.088-.284.08-.285a.472.472 0 00.084.242c.043.063.112.129.197.18.086.05.187.077.315.093.124.015.27.014.448.014a10.753 10.753 0 011.895.163c1.844.327 3.243 1.124 3.243 1.124l-.003.001z"
          fill="#186060"
        />
        <Path
          d="M14.95 36.055c.456-.472 1.254-.415 1.823-.09.572.322.992.848 1.474 1.292 2.048 1.88 5.417 2.117 7.707.543.742-.511 1.41-1.2 2.288-1.398 1.484-.333 2.917.858 4.438.828-.172-1.771-1.8-3.17-3.554-3.46-1.754-.29-3.557.353-5.027 1.355-.756.515-1.611 1.159-2.49.904-.74-.216-1.15-.983-1.722-1.498-1.28-1.144-3.588-.766-4.434.726"
          fill="#32194C"
        />
        <Path
          d="M33.268 36.988l-.693-.58c-.445-.364-1.082-.916-1.923-1.396a5.231 5.231 0 00-1.405-.565c-.512-.122-1.07-.153-1.581-.042-.52.111-.917.36-1.398.812-.239.223-.487.486-.776.768a6.034 6.034 0 01-1.047.843c-.41.254-.882.467-1.431.545a2.756 2.756 0 01-.847-.01l-.21-.044c-.067-.02-.135-.044-.2-.066-.066-.023-.133-.045-.197-.072l-.18-.09c-.475-.251-.806-.582-1.072-.881-.265-.303-.475-.588-.67-.839a4.316 4.316 0 00-.55-.613 1.441 1.441 0 00-.519-.3c-.356-.106-.85.016-1.285.201-.9.38-1.6.83-2.062 1.161a12.223 12.223 0 00-.71.55l.12-.202a8.504 8.504 0 012.186-2.332c.226-.161.484-.323.795-.456.31-.129.686-.228 1.111-.206.418.027.847.175 1.2.393.354.217.645.48.902.734.259.254.494.506.72.716.227.21.448.371.636.449l.07.03.07.015.065.02.065.008c.09.007.182.004.286-.015.207-.035.459-.142.712-.3.26-.16.494-.355.767-.602.267-.24.55-.51.87-.771a5.05 5.05 0 011.1-.702 3.78 3.78 0 011.274-.325 4.62 4.62 0 012.216.404c.627.279 1.141.651 1.54 1.024.807.755 1.264 1.476 1.585 1.963.315.492.47.775.47.775l-.004-.002z"
          fill="#92F7E4"
        />
        <Path
          d="M27.285 43.112l-.074.066c-.05.045-.13.1-.246.16-.116.056-.27.108-.458.135a2.476 2.476 0 01-.637-.01c-.464-.06-.985-.25-1.496-.445a12.478 12.478 0 00-1.641-.487 7.454 7.454 0 00-1.653-.19 5.535 5.535 0 00-1.375.176 4.694 4.694 0 00-1.25.521l.054-.082c.035-.056.09-.135.168-.23a3.43 3.43 0 01.798-.713 4.212 4.212 0 011.504-.603 4.908 4.908 0 011.992.037c.691.15 1.3.425 1.812.727.499.305.885.582 1.245.757.176.089.343.15.494.191.15.039.287.05.401.049a1.17 1.17 0 00.267-.035c.06-.016.096-.022.096-.022l-.002-.002z"
          fill="#32194C"
        />
      </G>
    </Svg>
  );
};
