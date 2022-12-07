import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { ISvgProps } from '../../../utils/types';

export const RabbitAvatarIcon = ({ width = 375, height = 400 }: ISvgProps) => {
  return (
    <Svg
      width={width * WINDOW_COEFFICIENT}
      height={height * WINDOW_COEFFICIENT}
      viewBox="0 0 375 400"
      fill="none">
      <Path
        opacity={0.5}
        d="M196.013 390.09c41.428 0 75.012-5.84 75.012-13.045 0-7.204-33.584-13.045-75.012-13.045-41.429 0-75.013 5.841-75.013 13.045 0 7.205 33.584 13.045 75.013 13.045z"
        fill="#330F59"
      />
      <Path
        d="M245.299 16.194c-2.013-1.207-3.127 2.759-16.401 24.915-7.262 12.12-7.418 26.046-5.744 38.508l-2.096-4.255c-.958 8.134 1.058 16.585 5.582 23.41l.042-.55c.588 2.774 1.094 5.293 1.4 7.483 1.985 14.251-10.83 18.778-10.83 18.778l22.915 15.856c-9.729-26.268 6.459-42.044 17.565-68.659 11.105-26.617-10.42-54.275-12.433-55.483v-.003z"
        fill="#DA9363"
      />
      <Path
        d="M217.252 124.481l6.413 4.437c2.084-1.459 3.199-4.072 3.936-6.563 6.547-22.09-4.191-46.219.84-68.702 1.694-7.569 5.149-14.777 6.275-22.396a889.185 889.185 0 01-5.817 9.852c-7.261 12.12-7.417 26.046-5.743 38.508l-2.097-4.255c-.957 8.134 1.059 16.585 5.583 23.41l.042-.55c.588 2.774 1.094 5.293 1.399 7.483 1.986 14.251-10.829 18.778-10.829 18.778l-.002-.002z"
        fill="#B17042"
      />
      <Path
        d="M268.373 270.762l-8.723-10.748c-.225-.278-.463-.564-.787-.714-.579-.265-1.253-.022-1.84.225-4.077 1.716-8.164 3.73-11.162 6.985-2.998 3.256-4.72 8.011-3.326 12.211l1.425 1.557c-1.383 5.94 3.594 12.129 9.579 13.285 5.984 1.154 12.211-1.875 16.222-6.468 1.618-1.853 2.99-4.072 3.152-6.528.244-3.685-2.214-6.937-4.54-9.803v-.002z"
        fill="#ED50C0"
      />
      <Path
        d="M257.195 277.55a52.304 52.304 0 0113.299-4.003c-.664-.966-1.398-1.894-2.121-2.785l-6.008-7.403a20.915 20.915 0 00-3.42 1.129c-3.437 1.46-6.507 3.644-9.693 5.593-2.491 1.524-5.112 2.948-7.192 4.975a9.978 9.978 0 00.475 3.667l1.425 1.556c-1.383 5.94 3.594 12.13 9.579 13.285 1.94.375 3.907.307 5.815-.109-.348-.124-.7-.247-1.031-.394-2.889-1.279-4.407-4.461-5.287-7.496-.387-1.333-.696-2.77-.277-4.093.614-1.94 2.584-3.077 4.436-3.918v-.004z"
        fill="#BD2EA2"
      />
      <Path
        d="M228.959 207.767s3.7 13.221 7.926 17.98c4.229 4.76 13.212 14.807 15.327 18.508 2.114 3.702 8.983 16.923 9.512 19.037.528 2.115-5.286-3.174-12.155 3.173-6.87 6.345-5.609 13.809-5.609 13.809s-4.432-11.164-8.659-19.098c-4.228-7.932-5.812-10.576-7.926-21.152-2.114-10.577-10.57-26.442-10.57-26.442l-1.057-10.047 13.212 4.231-.001.001z"
        fill="#1CD6F5"
      />
      <Path
        d="M244.593 260.614c-.981-6.825-6.692-12.525-9.004-19.021-4.632-13.011-1.632-19.881-15.013-32.371-2.943 2.826-2.922 7.482-2.479 11.54 2.509 22.943 12.087 45.063 27.099 62.588l2.618-13.42c-1.269-.332-3.033-8.021-3.221-9.32v.004z"
        fill="#1C9CC4"
      />
      <Path
        d="M233.41 219.985c-1.566-3.365-2.866-7.125-3.648-9.575a18.56 18.56 0 00-6.339-.987c-.569.011-1.213.089-1.552.545-.333.449-.233 1.074-.097 1.616a23.535 23.535 0 002.884 6.774l1.191 5.088c1.428-2.607 4.673-3.977 7.565-3.461h-.004z"
        fill="#1C9CC4"
      />
      <Path
        d="M214.161 309.303s-3.171 3.173-1.057 10.576c2.114 7.403 8.455 20.624 3.7 24.326l-4.757 3.702s-5.813-4.231-5.813-1.586c0 2.644 2.643 5.289 3.172 11.634.528 6.345-.529 13.749-1.057 16.394-.529 2.644 2.114 4.76 4.228 5.289 2.114.529 8.984-1.058 10.041 0 1.057 1.058 6.869 2.644 8.983 0 0 0 5.286 3.173 7.927 0 0 0 1.586 3.173 4.228-.529 2.643-3.702 0-8.461-3.699-7.403l-3.7 1.058s-3.172-2.645-5.813-3.702c-2.642-1.058-7.926-6.346-7.398-12.163.529-5.817 4.757-10.577 7.398-16.923 2.643-6.346 2.114-7.403 3.172-9.519 1.057-2.116 7.926-14.279 6.341-23.268-1.586-8.99-25.896 2.115-25.896 2.115v-.001zM189.851 318.292s-12.155 23.797-13.212 29.614c-1.057 5.816 0 9.518.529 12.163.528 2.644 3.171 10.576 4.228 12.163 1.057 1.586 7.398 4.231 5.285 7.403-2.114 3.173-7.398 5.289-8.983 2.644-1.586-2.644-10.041 4.231-11.627-.529-1.585-4.76-6.341 4.76-10.041 1.587-3.699-3.173-8.983 3.173-8.455-1.587.529-4.76 6.341-6.345 7.927-6.345 1.586 0 8.984 3.174 8.984-7.403 0-10.576.528-14.807-1.057-25.913-1.586-11.105 2.114-23.797 5.285-26.97 3.171-3.173 21.139 3.173 21.139 3.173h-.002z"
        fill="#DA9363"
      />
      <Path
        d="M226.38 329.298l1.247-3.509c2.582-.881 5.64-.004 7.441 2.025 2.275-4.577 6.232-13.576 4.989-20.627-1.586-8.99-25.896 2.116-25.896 2.116s-3.171 3.173-1.057 10.576c.75 2.627 2.032 5.985 3.162 9.39a23.032 23.032 0 002.252-.691c1.385-.507 2.755-1.156 4.227-1.24 1.471-.083 3.118.579 3.635 1.96zM178.85 341.543c3.797-9.146 11.001-23.251 11.001-23.251s-2.752-.971-6.291-1.964a104.964 104.964 0 00-16.197.656c-1.386 2.432-2.718 6.351-3.526 10.864 1.372 4.755 3.155 9.39 6.397 13.065 2.697-1.373 6.119-1.048 8.614.631l.002-.001zM222.618 379.636c1.057 1.058 6.869 2.645 8.983 0 0 0 5.286 3.174 7.927 0 0 0 1.586 3.174 4.228-.529 1.419-1.987 1.313-4.279.339-5.813-1.203 1.413-2.999 2.333-4.859 2.214-.85 2.804-5.62 3.024-6.724.31-2.109 2.651-7.309.976-7.478-2.408-2.53 1.301-5.438 2.614-8.118 1.656-2.628-.941-4.093-3.823-4.466-6.591-.373-2.768.08-5.58-.026-8.371-.199-5.221-2.472-10.325-6.174-14.005a1.653 1.653 0 00-.016.222c0 2.644 2.643 5.289 3.172 11.634.528 6.345-.529 13.749-1.057 16.394-.529 2.644 2.114 4.76 4.228 5.289 2.114.529 8.984-1.058 10.041 0v-.002zM183.83 374.243c.136.784.125 1.57-.129 2.337-.665 2.005-3.934 2.915-4.821.999-.159-.344-.228-.745-.49-1.016-.818-.846-2.064.35-2.9 1.176-2.066 2.045-5.937 1.749-7.669-.585-.466-.628-.831-1.402-1.542-1.728-1.874-.858-3.207 1.968-5.006 2.974-1.242.695-2.773.466-4.174.217l-6.511-1.156-.365-.064c-1.332.993-2.429 2.408-2.646 4.352-.528 4.76 4.757-1.587 8.455 1.586 3.698 3.174 8.455-6.345 10.041-1.586 1.586 4.76 10.041-2.116 11.626.529 1.586 2.644 6.87.529 8.984-2.645 1.382-2.072-.847-3.919-2.851-5.393l-.002.003z"
        fill="#9F6338"
      />
      <Path
        d="M221.561 209.883s8.983 29.084 11.098 36.489c2.114 7.403 7.926 20.624 9.512 23.268 1.585 2.645 7.398 20.095 8.983 24.855 1.586 4.76 4.229 7.932 2.643 9.519-1.585 1.586-5.285-.529-4.757 2.644.529 3.174 1.586 5.816-.528 5.816s-18.496-8.989-36.465 1.587c-17.968 10.576-26.424 10.576-31.18 10.048-4.757-.529-14.797-3.703-21.138-5.817-6.341-2.115-7.398-2.644-7.927-7.403-.528-4.76.529-8.46-1.585-15.336-2.115-6.874 5.285-52.882 5.812-60.286.528-7.403 8.984-30.142 8.984-30.142l56.546 4.76.002-.002z"
        fill="#1CD6F5"
      />
      <Path
        d="M248.512 312.474c2.114 0 1.057-2.644.528-5.816-.528-3.172 3.172-1.058 4.757-2.644.975-.976.35-2.553-.644-4.728a5.985 5.985 0 01-2.313 1.255c-2.399.658-4.937.089-7.387-.332a60.212 60.212 0 00-25.971 1.266c-8.716 2.386-16.798 6.712-25.483 9.207-8.685 2.495-9.271 4.339-16.796-.666-.726-3.268-.5-7.69-1.089-10.531-.985-4.745-.058-9.636.531-14.446 5.048-41.252-8.13-34.937-3.775-69.796-6.895 6.899-12.764 22.294-13.79 37.402-.436 6.408.525 14.174-2.15 20.013-1.3 2.837-2.904 5.522-4.49 8.216-.638 7.019-.861 12.615-.227 14.681 2.115 6.874 1.057 10.576 1.586 15.336.529 4.76 1.586 5.289 7.927 7.403 6.34 2.116 16.383 5.289 21.138 5.816 4.757.529 13.212.529 31.18-10.047 17.967-10.577 34.35-1.587 36.465-1.587l.003-.002z"
        fill="#1C9CC4"
      />
      <Path
        d="M163.024 278.183c-1.102-4.061-3.263-7.824-3.912-11.98l-27.673-8.112a30.952 30.952 0 01-7.994 12.805c-.901.866-1.874 1.701-2.467 2.8-.485.897-.686 1.92-.812 2.932-.898 7.199 1.658 14.331 4.173 21.139.409 1.11.882 2.3 1.886 2.933.723.457 1.611.547 2.462.626l8.393.778c3.399.315 6.857.627 10.203-.045 3.346-.672 6.629-2.482 8.259-5.472.882-1.618 1.277-3.543 2.569-4.858.728-.742 1.68-1.219 2.487-1.873 3.274-2.653 3.529-7.611 2.427-11.671l-.001-.002z"
        fill="#ED50C0"
      />
      <Path
        d="M159.113 266.202l-27.672-8.112a30.963 30.963 0 01-6.473 11.229 65.41 65.41 0 014.993-.822c7.058-.881 14.491-.542 20.877 2.592 2.098 1.029 4.042 2.339 5.975 3.652 1.089.74 2.215 1.523 2.866 2.669.519.914.686 1.98.829 3.022.22 1.596.398 3.268-.146 4.784-.546 1.518-2.039 2.817-3.634 2.598-1.027-.14-1.873-.849-2.648-1.54-.774-.69-1.593-1.418-2.612-1.612-1.019-.195-2.262.405-2.354 1.438-.064.729.434 1.37.86 1.965 1.078 1.505 1.865 3.273 1.918 5.123.053 1.851-.715 3.778-2.228 4.841-1.558 1.094-3.607 1.141-5.506 1.014a41.253 41.253 0 01-13.684-3.332c-4.183-1.823-8.384-4.852-9.667-9.101.834 3.784 2.19 7.515 3.533 11.152.41 1.111.882 2.3 1.886 2.934.723.456 1.612.546 2.463.625l8.393.778c3.399.315 6.856.627 10.203-.045 3.346-.672 6.628-2.482 8.259-5.472.882-1.617 1.277-3.543 2.569-4.858.727-.741 1.68-1.219 2.487-1.873 3.274-2.653 3.529-7.61 2.427-11.671-1.102-4.061-3.263-7.824-3.912-11.98l-.002.002z"
        fill="#CC3EAA"
      />
      <Path
        d="M166.577 305.681c-.501-1.248-2.083-1.717-3.471-1.973-9.811-1.802-19.928-.882-29.875.045-7.419.692-15.156 1.484-21.415 5.305l19.456 12.255c8.764-.471 17.434-2.448 25.457-5.808 3.766-1.577 7.612-3.664 9.447-7.144.438-.831.748-1.812.4-2.68h.001z"
        fill="#EEC92B"
      />
      <Path
        d="M166.577 310.254c-.501-1.247-2.083-1.717-3.471-1.972-9.811-1.802-19.928-.883-29.875.045-7.419.691-15.156 1.484-21.415 5.305l19.456 12.255c8.764-.471 17.434-2.449 25.457-5.809 3.766-1.577 7.612-3.663 9.447-7.144.438-.831.748-1.812.4-2.68h.001z"
        fill="#B19419"
      />
      <Path
        d="M112.809 308.565s-6.896-27.234 27.216-28.324c34.111-1.09 25.039 27.597 25.039 27.597l-5.08.727s8.709-23.24-19.596-22.514c-28.306.725-22.863 23.602-22.863 23.602l-4.716-1.09v.002z"
        fill="#FFFF31"
      />
      <Path
        d="M119.985 279.897c.04 4.138 1.131 8.216 2.447 12.233.517 1.581 3.725 1.553 6.416 2.589.452.173.246-1.277.725-1.346.003 0 2.585 1.347 2.586 1.346 8.406-1.224 10.046.246 17.238-4.275.307-.193.636-.426.712-.781.066-.306-.076-.611-.203-.896-.737-1.644-1.126-3.515-.676-5.261.45-1.746 1.878-3.306 3.665-3.535l-2.731-5.055c-10.265-.898-20.744.843-30.179 4.981z"
        fill="#ED50C0"
      />
      <Path
        d="M160.924 202.285s-8.595 10.242-14.407 16.059c-5.813 5.816-10.041 10.047-10.57 11.634-.528 1.586-13.212 23.268-12.683 29.613.528 6.345 9.512 0 16.383 1.587 6.87 1.587 16.912 5.816 20.082 12.163 3.171 6.345 2.643-6.345 1.585-10.048-1.057-3.702-2.114-13.749 0-21.681 2.115-7.932 6.341-11.105 7.398-17.979 1.058-6.874.529-13.221 2.643-14.808 2.114-1.587-10.431-6.54-10.431-6.54z"
        fill="#1CD6F5"
      />
      <Path
        d="M243.907 233.913l.098-.072c-2.638-3.058-5.312-6.059-7.12-8.094-4.228-4.76-7.926-17.98-7.926-17.98l-13.212-4.231.621 5.91-48.676-4.098a4.012 4.012 0 01-.066-.034c-1.845.569-3.69 1.14-5.532 1.712-2.426.753-4.881 1.523-7.305 2.375-2.654 3.009-5.728 6.398-8.271 8.943-2.972 2.974-5.528 5.531-7.388 7.536 3.925 10.811 15.084 9.449 25.153 12.718 3.457-2.989 5.131-6.521 9.7-6.571 7.13-.075 12.053 6.94 18.406 10.177 4.245 2.162 9.339 2.589 13.886 1.167 4.021-1.259 7.472-3.839 11.168-5.862 3.697-2.022 8.034-3.525 12.086-2.371a16.834 16.834 0 012.095 5.479c2.034-4.588 7.332-7.479 12.287-6.705l-.004.001z"
        fill="#1C9CC4"
      />
      <Path
        d="M210.029 260.864c5.647-8.489 8.679-18.697 8.581-28.894-2.198 8.058-5.294 16.458-11.966 21.48-.507.383-1.076.756-1.711.756-.628 0-1.19-.364-1.703-.728-7.345-5.236-12.5-13.454-14.02-22.349l-1.775 5.696a53.932 53.932 0 008.503 17.378c.792 1.072 1.652 2.178 1.857 3.494.381 2.428-1.551 4.658-1.645 7.112-.075 2.034 1.107 3.875 2.245 5.563 1.821 2.704 3.645 5.408 5.467 8.112.541.802 1.23 1.691 2.197 1.717.868.022 1.57-.669 2.132-1.328a34.838 34.838 0 004.031-5.834c1.165-2.116 2.129-4.463 1.955-6.873-.173-2.41-1.78-4.853-4.151-5.303l.003.001z"
        fill="#1C9CC4"
      />
      <Path
        d="M205.849 259.101l-.463.333-.23.165-.114.082c-.019.028-.038-.006-.057-.017l-.058-.047-.918-.73-1.793-1.427-.438-.351-.219-.174-.054-.043-.026-.021-.014-.014-.057-.055-.451-.439-.898-.878c-.146-.147-.304-.286-.442-.443l-.421-.463-.838-.925c-.286-.3-.542-.63-.802-.953l-.779-.968a42.53 42.53 0 01-5.07-8.404c-2.696-5.915-3.996-12.366-3.702-18.655.644 6.264 2.857 12.216 6.169 17.308a39.1 39.1 0 005.745 6.938l.823.756c.273.25.539.508.833.734l.86.701.427.351c.14.119.298.218.445.328l.895.644.445.322.056.04.015.01h.026a.1.1 0 00.03-.005c.076-.018.125-.053.111-.137a.198.198 0 00.014.045c.01.011.034.01.053.013.021 0 .045 0 .071-.002-.013.023.092-.064.154-.112l.212-.166.424-.331c.143-.109.277-.23.415-.346.275-.231.553-.463.816-.712a28.979 28.979 0 003.004-3.175 31.42 31.42 0 004.574-7.642 32.163 32.163 0 002.317-8.808c.35-3.056.253-6.199-.36-9.286 1.065 2.96 1.653 6.129 1.765 9.339a34.265 34.265 0 01-1.053 9.642 35.022 35.022 0 01-3.771 9.151 33.444 33.444 0 01-2.887 4.146c-.262.334-.543.652-.824.972-.141.159-.278.323-.426.478l-.44.464-.222.233c-.082.084-.119.135-.284.277l-.834.739c-.283.248-.556.499-.853.751l-.906.762.005.005z"
        fill="#F566CC"
      />
      <Path
        d="M202.623 253.098s-4.627 9.26-3.811 10.893c.816 1.633 6.259 7.627 8.165 7.898 1.905.272 5.716-8.714 5.716-10.349 0-1.635-2.995-5.992-4.082-6.809-1.088-.816-4.899-3.813-5.988-1.633z"
        fill="#26D962"
      />
      <Path
        d="M221.561 209.883l-53.715-4.521c-4.585-2.766-6.92-3.077-6.92-3.077s-6.311 2.077-8.766 7.312l10.261 6.406c.884.551 1.808 1.117 2.844 1.222 1.049.106 2.075-.275 3.11-.476 6.294-1.228 11.761 3.993 17.503 6.851 5.151 2.565 11.196 3.288 16.806 2.008 5.261-1.199 10.039-4.065 15.321-5.168 2.192-.457 4.41-.6 6.64-.547-1.754-5.713-3.083-10.012-3.083-10.012l-.001.002z"
        fill="#1C9CC4"
      />
      <Path
        d="M214.402 214.363a31.993 31.993 0 01-1.904 7.776 48.902 48.902 0 012.866-1.003c.37-2.233.519-4.487.442-6.72a31.606 31.606 0 00-.585-5.067l-.658-.054a30.9 30.9 0 01-.161 5.068zM192.192 225.743a34.197 34.197 0 01-.556-.829c-3.313-5.09-5.525-11.044-6.169-17.307-.27 5.747.795 11.631 3.036 17.114 1.202.432 2.436.773 3.689 1.021v.001z"
        fill="#CC38A8"
      />
      <Path
        d="M159.922 195.595a2.54 2.54 0 01.376 3.191c-2.057 3.229-6.693 9.801-11.874 12.463-4.086 2.1-7.495 4.389-9.625 5.931a2.542 2.542 0 00-.236 3.922c3.822 3.537 12.074 10.255 19.278 9.909 9.752-.467 21.299-4.282 27.494 2.594 6.195 6.875 15.514 10.992 25.668 5.288 10.153-5.703 15.973-6.634 20.555-6.202 4.582.433 13.097 1.328 11.578-3.163-1.225-3.627-10.122-16.66-13.506-21.547a2.543 2.543 0 01.357-3.308c2.111-1.958 5.772-5.796 8.184-10.771 3.558-7.344 14.116-4.59 13.306-21.505-.809-16.915-.008-27.387-16.266-40.3-16.258-12.914-26.572-24.158-33.629-21.862-7.057 2.294-23.807 6.358-39.962 22.783-16.157 16.424-19.59 26.371-14.29 41.766 3.953 11.487 9.851 18.16 12.593 20.811h-.001z"
        fill="#FBD787"
      />
      <Path
        d="M212.081 128.938s29.214 12.031 31.134 33.433c1.92 21.4-6.224 19.553-12.11 27.446-5.886 7.895-13.687 13.193-16.345 13.769-2.657.576-2.681-74.648-2.681-74.648h.002zM172.62 180.144a4.251 4.251 0 00-.666 3.543l1.029 5.628c1.033 2.634 3.317 4.629 5.868 5.85 2.55 1.222 5.369 1.754 8.165 2.179a240.446 240.446 0 00-14.395-17.198l-.001-.002z"
        fill="#A48653"
      />
      <Path
        d="M216.547 203.501s11.552-3.196 15.601-10.599c2.263-4.138 5.1-5.619 3.994-10.043-1.107-4.424-2.597-7.488-.961-10.7 1.635-3.213.893-.043 1.635-3.213.744-3.17-2.112-25.421-10.958-32.609-8.845-7.187-17.222-4.547-18.051-3.163-.829 1.384-29.523 18.879-32.945 22.176-3.422 3.299-6.755 17.787-.437 28.231 6.317 10.443 10.305 14.282 14.366 14.983 4.061.701 7.494 2.328 7.494 2.328s2.404 3.467 10.929 3.953c8.526.487 9.333-1.344 9.333-1.344z"
        fill="#DA9363"
      />
      <Path
        d="M185.608 159.787c4.322-3.006 9.937-3.291 14.798-5.31 5.896-2.448 10.601-7.608 12.499-13.706-7.625 1.399-15.333 2.821-22.419 5.967-2.449 1.087-4.804 2.373-7.088 3.772-4.124 2.525-8.121 5.53-10.65 9.655a19.323 19.323 0 00-.946 1.741c-1.512 6.04-1.568 14.746 2.623 21.674 6.317 10.442 10.304 14.281 14.366 14.982 1.775.306 3.43.79 4.729 1.237a29.133 29.133 0 01-3.025-3.05c-.761-.894-1.484-1.849-2.45-2.518-.663-.459-1.417-.766-2.136-1.128-5.119-2.571-8.5-8.049-9.076-13.751-.575-5.703 1.478-11.511 5.058-15.985 1.078-1.347 2.299-2.593 3.716-3.578l.001-.002zM236.818 168.946c.231-.986.114-3.817-.423-7.466a335.34 335.34 0 00-4.623-12.525c-1.682-4.292-3.562-8.705-7.01-11.762-3.447-3.058-8.917-4.333-12.701-1.703l1.269 4.323c2.232.55 4.104 2.12 5.464 3.974 1.359 1.853 2.269 3.992 3.165 6.109l8.765 20.685c.995 2.347 1.999 4.711 3.456 6.803.233.334.48.661.739.979-.561-2.254-.755-4.201.265-6.204 1.635-3.213.893-.043 1.635-3.213h-.001z"
        fill="#9F6338"
      />
      <Path
        d="M230.988 169.434s.819 3.278-.421 5.045c-1.242 1.765-3.329 3.667-4.931 3.839-1.601.172-5.418-.404-5.806-2.566-.387-2.162 3.266-4.99 4.381-5.424 1.117-.432 6.309-.776 6.778-.894h-.001z"
        fill="#fff"
      />
      <Path
        d="M211.613 128.513s-28.508 2.711-40.557 22.095c-12.047 19.384-1.327 37.675 4.287 42.779 0 0 2.231-.107.04-8.509-2.193-8.402.588-25.102 13.319-30.192 12.734-5.088 23.809-7.411 25.678-15.113 0 0 6.639-2.102 10.824 11.123 7.72 24.397 13.667 23.838 18.26 26.305 0 0-3.499-7.758-5.882-10.779-2.382-3.02-1.791-6.768-1.876-8.554-.085-1.787 1.34 11.196 10.793 15.568 0 0 .09-15.261-8.524-26.936-8.615-11.676-14.919-17.784-26.362-17.787z"
        fill="#493E27"
      />
      <Path
        d="M224.006 178.405a4.53 4.53 0 004.529-4.532 4.53 4.53 0 00-4.529-4.532 4.53 4.53 0 00-4.529 4.532 4.53 4.53 0 004.529 4.532z"
        fill="#1FD3FF"
      />
      <Path
        d="M219.504 174.378l.068.281c.011.047.022.098.037.154.016.057.038.116.061.182.045.13.091.281.172.441.136.326.364.699.682 1.077.32.376.749.749 1.287 1.033a4.275 4.275 0 001.885.507c.697.013 1.454-.121 2.132-.497.175-.084.332-.199.498-.307.078-.058.154-.124.231-.187.08-.059.151-.13.222-.202.149-.135.273-.296.406-.45.116-.169.239-.333.334-.52.196-.363.36-.757.437-1.178a4.45 4.45 0 00.06-1.291 4.534 4.534 0 00-.344-1.244 4.016 4.016 0 00-.686-1.053c-.133-.161-.291-.293-.44-.432-.164-.121-.322-.251-.497-.349-.085-.053-.168-.108-.26-.148-.09-.044-.177-.09-.267-.13-.184-.07-.364-.147-.552-.19-.744-.216-1.512-.179-2.19-.011a4.293 4.293 0 00-1.725.911 4.407 4.407 0 00-1.027 1.294 4.284 4.284 0 00-.427 1.201c-.044.174-.055.331-.069.468-.007.069-.016.132-.02.19v.157l-.003.29-.038-.288-.021-.159c-.005-.06-.005-.124-.007-.193-.005-.14-.013-.304.008-.486.016-.366.108-.815.296-1.31a4.692 4.692 0 012.839-2.723c.194-.058.39-.129.599-.161.103-.019.207-.043.313-.058l.323-.03c.109-.015.218-.015.329-.012.111.002.224 0 .336.007.223.027.455.042.68.099.229.041.451.121.679.195.111.042.22.093.331.141.113.045.219.105.325.166.218.113.417.26.623.404.191.162.389.321.559.512.347.373.662.799.879 1.285.223.48.373 1.005.438 1.545a5.183 5.183 0 01-.086 1.604 4.761 4.761 0 01-.574 1.447c-.124.223-.281.423-.432.624-.169.185-.329.374-.517.532-.09.083-.18.164-.28.233-.098.071-.193.146-.292.212-.206.124-.405.249-.619.341-.207.108-.429.172-.641.247-.107.033-.218.055-.326.082a2.13 2.13 0 01-.324.063l-.322.042c-.106.01-.213.008-.319.013-.211.014-.418-.01-.62-.024a4.708 4.708 0 01-2.091-.758 4.583 4.583 0 01-1.282-1.27 4.276 4.276 0 01-.576-1.212c-.061-.173-.089-.334-.116-.471-.013-.069-.027-.131-.035-.189a7.52 7.52 0 00-.015-.159l-.025-.29-.004.002z"
        fill="#32194C"
      />
      <Path
        d="M223.087 177.842a3.376 3.376 0 000-6.752 3.376 3.376 0 000 6.752z"
        fill="#32194C"
      />
      <Path
        d="M225.447 167.902s-.108.018-.289.042c-.092.011-.201.023-.328.052-.127.027-.265.04-.418.083-.152.037-.315.069-.487.124-.085.026-.173.045-.263.074-.09.03-.18.061-.273.09-.37.13-.765.273-1.165.457-.4.181-.776.366-1.115.556l-.242.148-.119.07-.109.076-.216.143-.191.145c-.061.048-.125.088-.177.135l-.151.132-.136.115-.108.106c-.13.129-.21.203-.21.203s.011-.103.048-.291l.034-.158.059-.18.076-.209c.027-.074.067-.144.106-.223.04-.077.082-.161.13-.244l.167-.248.091-.13.106-.124c.073-.082.148-.17.23-.254.334-.326.758-.63 1.25-.852a4.35 4.35 0 011.804-.367c.109 0 .217.013.318.021.204.013.392.055.561.094.169.032.316.093.445.136a3.84 3.84 0 01.578.282l-.006-.004z"
        fill="#9A5B37"
      />
      <Path
        d="M234.623 169.106l-.189.132c-.063.042-.14.098-.236.156l-.342.185c-.132.068-.282.127-.449.198a9.534 9.534 0 01-.554.19c-.403.117-.874.217-1.391.292a26.21 26.21 0 01-1.666.164c-.587.044-1.197.082-1.8.156a8.782 8.782 0 00-1.759.383 9.373 9.373 0 00-1.723.791 10.856 10.856 0 00-2.847 2.443c-.755.915-1.3 1.876-1.653 2.746a9.525 9.525 0 00-.648 2.566c-.013.107-.016.199-.022.273l-.02.23-.085-.214c-.027-.071-.064-.158-.098-.264l-.112-.369a7.419 7.419 0 01-.22-2.495 8.912 8.912 0 011.129-3.642 9.209 9.209 0 013.326-3.411 8.416 8.416 0 012.35-.942 8.252 8.252 0 012.326-.185c.715.04 1.358.142 1.941.241l1.592.288c.479.079.909.135 1.293.167.191.011.37.021.537.024.164-.003.318 0 .456-.008.137-.009.26-.019.368-.027.108-.011.196-.029.27-.039l.228-.032-.002.003z"
        fill="#32194C"
      />
      <Path
        d="M230.997 169.491l.065.173.075.212c.029.086.053.184.087.296.122.447.251 1.119.231 1.97a8.011 8.011 0 01-.173 1.381 7.48 7.48 0 01-.532 1.524 7.112 7.112 0 01-.978 1.512 6.78 6.78 0 01-1.461 1.286c-.279.185-.575.34-.878.471a3.447 3.447 0 01-.457.177l-.228.077c-.075.026-.154.041-.231.06-.154.034-.305.082-.46.101-.151.023-.302.043-.456.066-.302.019-.598.042-.885.023a3.665 3.665 0 01-.424-.029c-.138-.018-.277-.031-.41-.052-.265-.055-.524-.098-.765-.178a6.637 6.637 0 01-1.293-.526c-.747-.412-1.258-.876-1.563-1.228-.164-.164-.26-.322-.336-.415l-.111-.148.142.119c.096.074.218.203.409.33.359.276.923.619 1.663.89.376.122.786.253 1.24.317.225.047.461.056.702.082.121.006.245.005.368.008.124.006.249 0 .376-.008.254-.005.51-.047.771-.079l.391-.082c.132-.022.259-.072.389-.106.064-.021.131-.034.194-.059l.191-.074c.129-.049.259-.095.381-.161.252-.116.503-.249.744-.41a6.994 6.994 0 001.291-1.087c.372-.403.69-.832.947-1.273.258-.44.461-.886.618-1.32.151-.435.256-.855.333-1.244.136-.783.136-1.44.107-1.894-.009-.112-.013-.215-.022-.302l-.029-.222-.023-.183v.005zM229.118 164.526s-.172-.016-.447-.051c-.069-.01-.144-.019-.223-.031-.082-.009-.174-.012-.267-.02-.188-.013-.385-.041-.61-.041a7.866 7.866 0 01-.338-.016c-.114-.006-.237 0-.356 0-.238-.011-.494.007-.746 0-.514.016-1.039.029-1.59.021a34.023 34.023 0 01-1.591-.035c-.252.003-.507-.018-.745-.008-.121.001-.243-.007-.357 0-.114.006-.226.009-.337.013-.225-.002-.423.025-.612.035-.093.006-.185.01-.267.018a15.159 15.159 0 01-.671.077s.048-.153.173-.421c.031-.068.068-.142.109-.224.044-.079.097-.157.155-.244.117-.171.253-.378.437-.563.089-.096.188-.196.292-.299.106-.101.225-.188.349-.286a5.04 5.04 0 01.853-.526 5.29 5.29 0 012.223-.508 5.305 5.305 0 012.219.526c.315.167.604.331.848.532.124.098.242.187.347.29.104.102.201.204.291.3.183.187.316.396.432.568.056.088.109.167.151.246.04.082.077.156.107.223.123.27.169.423.169.423l.002.001z"
        fill="#32194C"
      />
      <Path
        d="M185.923 170.069s-.561 3.725 1.006 5.553c1.566 1.826 4.085 3.714 5.881 3.733 1.796.019 5.97-1.026 6.169-3.466.2-2.44-4.156-5.189-5.439-5.551-1.286-.362-7.085-.188-7.617-.269z"
        fill="#fff"
      />
      <Path
        d="M194.144 179.302a5.051 5.051 0 005.049-5.053 5.052 5.052 0 00-5.049-5.053 5.052 5.052 0 00-5.05 5.053 5.051 5.051 0 005.05 5.053z"
        fill="#1FD3FF"
      />
      <Path
        d="M199.191 174.329l.002.324v.178c-.003.066-.013.137-.019.215-.016.156-.029.338-.077.536a4.827 4.827 0 01-.513 1.406 5.231 5.231 0 01-3.526 2.608c-.223.037-.452.087-.686.093-.117.007-.236.019-.355.019l-.362-.012c-.061-.004-.122-.004-.183-.01l-.183-.026c-.122-.017-.247-.032-.371-.056-.244-.061-.496-.111-.737-.207-.249-.078-.484-.197-.723-.312-.118-.063-.23-.135-.347-.204a2.812 2.812 0 01-.336-.23c-.227-.155-.424-.348-.631-.536-.188-.205-.384-.41-.547-.646a5.31 5.31 0 01-.79-1.545 5.864 5.864 0 01-.267-1.771 5.795 5.795 0 01.323-1.762c.19-.561.493-1.069.839-1.519.168-.23.371-.428.565-.629.212-.182.418-.367.648-.514.111-.079.223-.156.342-.219.119-.064.233-.133.352-.193.244-.108.482-.219.732-.288.244-.088.498-.13.744-.183.124-.019.249-.029.371-.043l.183-.02c.061-.005.122-.001.183-.003h.362c.119.005.238.021.355.031.235.014.461.07.683.115a5.23 5.23 0 012.202 1.134 5.153 5.153 0 011.239 1.585c.262.529.41 1.016.467 1.423.042.199.05.382.061.538.005.079.012.15.013.215-.001.066-.004.126-.006.179l-.013.323-.035-.321a6.001 6.001 0 00-.02-.176c-.009-.064-.027-.133-.041-.209-.031-.151-.061-.323-.127-.511a4.778 4.778 0 00-.603-1.288 4.894 4.894 0 00-1.277-1.326 4.79 4.79 0 00-2.011-.828c-.195-.022-.389-.058-.591-.054-.102 0-.201-.01-.304-.007l-.307.023c-.051.004-.103.004-.154.013l-.154.027c-.103.019-.208.032-.309.055-.202.059-.411.102-.609.189-.204.068-.397.174-.593.269-.096.053-.187.115-.282.172a2.124 2.124 0 00-.273.191c-.185.127-.344.288-.514.44-.151.171-.312.335-.444.528-.268.374-.506.786-.649 1.241a5.019 5.019 0 00-.249 1.418c0 .488.069.969.204 1.426.13.458.354.877.611 1.26.123.196.279.365.425.54.164.158.318.323.5.457.087.07.172.143.267.201.093.059.183.125.276.181.194.103.382.214.585.288.196.093.403.143.604.209.101.026.205.043.307.064l.152.033c.052.009.103.011.154.017l.306.032c.101.007.202.002.303.004.203.009.399-.02.593-.036a4.764 4.764 0 002.037-.763 4.954 4.954 0 001.319-1.285c.312-.453.525-.89.643-1.268.072-.185.107-.357.143-.507.017-.074.037-.143.048-.207l.024-.175.045-.32.006.009z"
        fill="#32194C"
      />
      <Path
        d="M195.225 178.572a3.762 3.762 0 003.761-3.763 3.762 3.762 0 00-3.761-3.764 3.762 3.762 0 00-3.761 3.764 3.762 3.762 0 003.761 3.763z"
        fill="#32194C"
      />
      <Path
        d="M191.907 167.777s.092-.069.272-.185a2.46 2.46 0 01.339-.19c.138-.061.296-.146.479-.199.183-.059.387-.127.612-.162.112-.02.229-.047.352-.057.12-.009.247-.019.375-.025a4.789 4.789 0 011.665.239c.57.193 1.073.486 1.478.812a7.174 7.174 0 01.413.383c.038.043.077.088.115.135.076.088.147.173.212.257.063.087.118.175.171.257.051.084.103.158.141.238l.105.224c.028.067.057.131.085.192.021.063.038.121.053.172.061.206.085.319.085.319s-.098-.073-.256-.201c-.04-.032-.083-.069-.13-.106l-.165-.114-.182-.129c-.062-.047-.138-.085-.21-.132l-.227-.14-.254-.135-.13-.072-.139-.064-.286-.139a16.27 16.27 0 00-1.297-.498c-.464-.161-.919-.276-1.341-.383a9.635 9.635 0 01-.314-.07c-.102-.024-.202-.036-.3-.055-.196-.042-.381-.059-.554-.085-.174-.031-.331-.031-.473-.048a3.07 3.07 0 00-.367-.021 9.027 9.027 0 01-.327-.016v-.002z"
        fill="#9A5B37"
      />
      <Path
        d="M181.852 170.092s.092.005.257.011c.084.003.185.013.304.013l.411-.008c.153-.005.325-.027.506-.04.183-.023.383-.052.593-.085.423-.076.895-.185 1.419-.324.554-.155 1.139-.321 1.735-.49a18.432 18.432 0 012.128-.476 9.25 9.25 0 012.603-.043 9.371 9.371 0 012.708.794c.878.405 1.658.937 2.338 1.522a10.236 10.236 0 011.716 1.909c.933 1.34 1.436 2.737 1.642 3.919.202 1.19.134 2.154.022 2.792l-.085.423c-.027.121-.06.222-.08.304l-.073.246-.046-.252c-.016-.082-.031-.184-.055-.303l-.091-.405a10.66 10.66 0 00-.902-2.374 11.915 11.915 0 00-2.127-2.871 12.154 12.154 0 00-3.42-2.409 10.514 10.514 0 00-1.997-.694 9.742 9.742 0 00-1.992-.236c-.676-.018-1.358.004-2.013.019-.656.016-1.285.021-1.867-.005a11.446 11.446 0 01-1.576-.175 10.425 10.425 0 01-.636-.151c-.193-.063-.366-.113-.519-.172l-.398-.169c-.113-.053-.204-.108-.28-.148l-.223-.125-.002.003z"
        fill="#32194C"
      />
      <Path
        d="M185.918 170.132l-.004.206-.009.247c-.001.099.005.213.007.338.016.506.087 1.236.321 2.09.126.424.286.879.501 1.345.221.463.494.938.828 1.399a7.805 7.805 0 003.166 2.587c.145.067.293.111.437.167.074.026.143.058.219.077l.221.061.221.061c.073.021.149.029.223.045.149.024.294.066.443.077l.442.049c.292.008.582.027.864.004l.211-.008c.07-.003.138-.016.207-.022.137-.018.273-.029.407-.048.263-.053.525-.092.769-.166.498-.12.94-.307 1.343-.484a7.088 7.088 0 001.75-1.165c.096-.082.181-.158.245-.23.068-.069.126-.129.172-.179l.145-.148s-.039.063-.106.177l-.132.214c-.05.087-.117.18-.197.281-.301.423-.818.992-1.604 1.529-.398.253-.851.523-1.38.72-.258.115-.541.19-.83.279-.147.037-.298.067-.449.101-.077.014-.152.035-.231.046l-.236.031c-.317.051-.648.058-.985.069l-.512-.024c-.174-.005-.346-.042-.521-.063-.087-.014-.177-.022-.263-.041l-.262-.063-.265-.064c-.089-.021-.174-.057-.262-.084-.172-.063-.354-.114-.521-.19a7.533 7.533 0 01-2.262-1.508 7.88 7.88 0 01-1.246-1.575 8.191 8.191 0 01-.752-1.633 8.889 8.889 0 01-.341-1.515 7.696 7.696 0 01.048-2.21c.024-.127.041-.241.065-.338l.062-.244.052-.2.001.002zM187.473 164.422s.037-.175.143-.487c.028-.079.058-.166.095-.259.039-.092.089-.185.142-.289.109-.203.236-.449.419-.676.088-.117.185-.239.291-.364.106-.124.228-.235.353-.357.251-.251.553-.463.885-.682a5.892 5.892 0 012.405-.821 5.891 5.891 0 012.521.326c.368.148.707.296 1.002.492.148.095.289.178.418.28.129.102.247.202.357.3.223.187.397.4.544.579.073.092.14.172.198.255.055.086.103.164.145.235.167.285.236.449.236.449s-.193.003-.502-.005l-.25-.008c-.092 0-.193.006-.297.008-.211.008-.433 0-.683.026-.124.008-.249.016-.376.022-.127.007-.264.029-.397.04-.265.015-.546.066-.826.089-.567.077-1.148.152-1.76.209a39.3 39.3 0 01-1.768.146c-.278.034-.565.04-.827.079-.132.016-.27.021-.397.04-.125.019-.25.037-.373.053-.25.024-.465.077-.673.111-.102.019-.204.032-.292.051l-.244.058c-.302.069-.492.105-.492.105l.003-.005z"
        fill="#32194C"
      />
      <Path
        d="M224.894 181.607s2.487.553 4.624-1.566c0 0 2.405 8.168-2.346 11.755-4.75 3.586 2.285-3.691-2.278-10.189zM193.981 182.927s-2.702.878-5.296-1.243c0 0-1.798 9.321 3.855 12.793 5.654 3.473-2.928-3.853 1.443-11.55h-.002zM220.688 155.424c-5.735.524-11.509.616-17.259.277-1.02-.061-2.143-.106-2.952.517l.732-.008a77.2 77.2 0 008.892 10.816c.323.328.712.677 1.171.645.42-.029.741-.367 1.019-.682l6.423-7.271c1.079-1.222 2.233-2.683 1.974-4.292v-.002zM216.225 149.893a24.825 24.825 0 00-4.858-2.494c-.302-.116-.62-.225-.94-.188-.274.032-.522.172-.758.315a13.5 13.5 0 00-4.117 3.892l.657-.098c3.569-.014 7.138-.087 10.704-.217.204-.463-.265-.931-.688-1.21z"
        fill="#26D962"
      />
      <Path
        d="M217.681 184.882s-.548.656-1.496 1.617a42.558 42.558 0 01-1.698 1.632 39.848 39.848 0 01-1.598 1.374l-.291.233-.468.365-.599.463-.074.056-.037.029-.038-.027-.151-.111-.301-.222-.583-.434-.286-.225c-.376-.301-.731-.6-1.065-.89a34.223 34.223 0 01-1.724-1.619c-.952-.962-1.492-1.624-1.492-1.624s.8.301 2.013.9a33.5 33.5 0 013.264 1.847l.304.2c.016.005.011-.004.016-.004.003-.004.003-.011.003-.011l.133-.099c.102-.074.201-.15.303-.224.2-.146.403-.288.602-.424a28.035 28.035 0 013.247-1.907c1.214-.606 2.018-.895 2.018-.895h-.002z"
        fill="#32194C"
      />
      <Path
        d="M211.568 192.992s-.93-.807-.981-1.855c-.05-1.048.798-1.942.798-1.942s.93.807.982 1.855c.051 1.048-.799 1.942-.799 1.942zM215.57 195.328c-.108-.138-.317-.13-.49-.109-1.165.136-2.328.274-3.493.411-1.119.132-2.249.264-3.37.142-1.12-.124-2.246-.526-3.038-1.328l-.615.019a9.147 9.147 0 004.8 5.194c.493.222 1.017.4 1.558.407.717.006 1.403-.291 2.021-.653 1.395-.813 2.657-2.154 2.698-3.768.003-.109-.004-.228-.071-.314v-.001z"
        fill="#32194C"
      />
      <Path
        d="M164.854 209.529c4.34.741 8.863.172 13.131 1.262 3.948 1.008 9.254 9.347 12.621 11.641 26.714 18.196 30.124-7.775 45.375-5.058a515.722 515.722 0 00-7.215-10.637c-6.161 4.426-14.52 4.937-22.212 4.545-7.366-.375-14.881-1.414-21.408-4.851-1.811-.953-3.53-2.083-5.403-2.908-2.739-1.204-5.723-1.718-8.582-2.601-5.684-1.755-10.831-5.081-14.901-9.419 2.91 3.701 5.162 5.429 5.162 5.429s-2.429 4.339-5.999 8.421c2.765 2.107 5.997 3.59 9.431 4.176z"
        fill="#B09354"
      />
      <Path
        d="M186.333 114.447c.115-.545-.738-.691-1.268-.523-2.257.721-4.109 2.389-5.263 4.452-1.097-4.479-1.436-11.096.318-20.806 4.637-25.654 3.795-43.22-5.436-59.078-9.231-15.86-14.806-23.418-16.663-21.372-1.857 2.045-26.524 31.268-17.444 57.568 9.08 26.3 12.951 25.463 18.156 38.907 2.843 7.345 5.512 11.001 6.689 14.645-2.109-2.728-5.187-4.72-8.591-5.302l7.778 9.448c-2.077-1.971-4.286-4.017-7.065-4.702 4.052 2.125 6.832 6.438 7.239 10.981-.08.241-.164.484-.254.735-4.021 11.279 7.984-10.165 20.925-12.089 0 0-1.73-.711-3.414-3.392-.392-3.611 1.218-7.479 4.29-9.472h.003z"
        fill="#DA9363"
      />
      <Path
        d="M185.065 113.924c-2.257.721-4.109 2.389-5.263 4.452-1.097-4.479-1.436-11.096.318-20.806 4.336-23.996 3.88-40.916-3.752-55.98.268 4.34.58 8.683 1.306 12.97.858 5.055 2.292 10.04 2.466 15.165.168 4.982-.863 9.916-1.756 14.82a278.78 278.78 0 00-4.515 48.85c3.443-2.882 7.466-5.472 11.585-6.084 0 0-1.73-.711-3.414-3.392-.392-3.611 1.218-7.479 4.29-9.472.115-.545-.738-.691-1.268-.523h.003z"
        fill="#B17042"
      />
      <Path
        d="M246.459 30.833c-.272-.426-.603-.884-1.098-.984-.719-.145-1.319.526-1.738 1.129a65.893 65.893 0 00-11.438 31.831c-1.555 18.496 4.72 37.53-.143 55.44l1.161-1.494c1.819-19.323 16.793-35.252 19.817-54.425 1.707-10.828-.672-22.253-6.561-31.499v.002zM171.278 78.808c1.419-15.753.41-33.007-9.663-45.194-.44-.532-.943-1.082-1.616-1.235-1.457-.33-2.556 1.277-3.143 2.653-7.431 17.43-7.311 37.703-.841 55.513 3.825 10.53 9.769 20.333 12.857 31.038-1.745-14.105 1.123-28.522 2.406-42.773v-.002z"
        fill="#FF98EB"
      />
      <Path
        d="M245.36 29.849c-.72-.145-1.319.526-1.738 1.129a65.884 65.884 0 00-11.439 31.831c-1.555 18.496 4.72 37.53-.143 55.44l1.162-1.494c.446-4.737 1.683-9.271 3.341-13.7 1.727-10.242 1.359-20.768 1.883-31.17.582-11.53 2.448-23.464 8.963-32.993 2.056 5.49 4.113 10.981 6.167 16.471-.005-8.626-2.464-17.254-7.099-24.533-.271-.426-.602-.884-1.097-.984v.003zM159.999 32.381c-1.457-.331-2.556 1.276-3.143 2.652-7.431 17.43-7.311 37.703-.841 55.514 3.825 10.529 9.769 20.333 12.857 31.037-.368-2.969-.529-5.952-.545-8.944-1.414-9.028-4.86-17.803-7.237-26.702a117.773 117.773 0 01-3.801-36.922c.189-3.384.83-7.268 3.746-8.99a135.28 135.28 0 0110.754 28.688c.079-12.701-2.223-25.477-10.174-35.095-.44-.532-.943-1.082-1.616-1.235v-.003z"
        fill="#EE6AE7"
      />
      <Path
        d="M246.475 260.659s.046 2.416.544 8.443c.386 4.658-1.351 9.827-.816 10.349.871.851 5.716-6.808 10.886-8.169 5.171-1.362 11.43 0 11.159-1.09-.272-1.09-6.259-7.627-9.798-14.435-3.538-6.808-8.709-1.362-8.709-1.362l-3.266 6.264z"
        fill="#1CD6F5"
      />
      <Path
        d="M129.647 279.138c-.495.908-.868 1.976-1.149 3.109-.284 1.135-.484 2.334-.68 3.532-.467-1.121-.936-2.243-1.325-3.44-.389-1.196-.7-2.478-.805-3.873.562-1.305 1.322-2.485 2.264-3.453.936-.965 2.075-1.698 3.251-2.016-.824.898-1.288 1.963-1.51 3.019a8.402 8.402 0 00-.045 3.122h-.001zM140.428 279.283a11.036 11.036 0 00-1.478 6.936c-1.562-2.086-2.452-4.898-2.429-7.866 1.316-2.66 3.377-4.769 5.71-5.928a11.028 11.028 0 00-1.801 6.859l-.002-.001zM269.882 280.758c-.567 1.635-1.491 3.015-2.593 3.998-.148-1.469-.683-2.755-1.416-3.745.603-1.074.974-2.416.937-3.894 1.216.838 2.305 2.09 3.072 3.641zM260.541 281.782l-.872 3.482-2.903-2.109.872-3.482 2.903 2.109z"
        fill="#AE2C8F"
      />
      <Path
        d="M163.957 304.014s-6.341 7.403-23.253 8.989c-16.912 1.587-25.895-6.874-25.895-6.874s-5.286 3.703-5.286 4.76c0 1.058 1.057 6.874.529 8.461-.529 1.587-11.627 4.76-6.87 22.211 4.757 17.45 34.351 17.45 43.863 16.394 9.513-1.058 31.708-12.163 28.01-26.442-3.7-14.278-8.611-15.465-8.611-16.523 0-1.057 1.989-6.694 1.807-8.142-.067-.539-3.238-3.892-4.295-2.834h.001z"
        fill="#FFFF31"
      />
      <Path
        d="M165.13 315.963c-3.602 3.096-8.325 4.506-12.941 5.62-7.081 1.709-14.343 2.923-21.622 2.654-7.142-.263-14.335-2.017-20.377-5.826-.018.385-.061.708-.138.939-.164.494-1.353 1.142-2.767 2.325 2.579 2.366 6.088 3.652 9.524 4.532 14.189 3.629 29.684 1.882 42.709-4.817 2.383-1.225 4.878-2.848 5.612-5.427zM175.055 331.513c-1.375-5.308-2.917-8.806-4.314-11.161.404 9.668-6.23 19.368-15.022 24.04-10.309 5.477-22.67 5.407-34.217 3.71a135.887 135.887 0 01-16.631-3.522 12.72 12.72 0 00-.612-.153c7.054 14.581 33.828 14.524 42.788 13.529 9.512-1.057 31.708-12.163 28.01-26.441l-.002-.002z"
        fill="#EEC92B"
      />
      <Path
        d="M223.8 369.663a9.19 9.19 0 011.163 3.16 7.625 7.625 0 01-.133 3.225 7.2 7.2 0 00-.638-2.998 7.99 7.99 0 00-1.671-2.413 8.008 8.008 0 00-1.878-2.257 7.216 7.216 0 00-2.716-1.416 7.619 7.619 0 013.14.733 9.222 9.222 0 012.733 1.966zM231.775 371.639c.492.966.816 1.993.956 3.028a8.103 8.103 0 01-.151 3.045c-.047-2.003-.905-3.832-2.135-5.172-.787-1.639-2.167-3.113-4.01-3.9.99.132 1.974.473 2.882.987a9.498 9.498 0 012.458 2.012zM178.005 376.239c.003.965-.126 1.897-.37 2.762a9.174 9.174 0 00-1.173-2.31 9.18 9.18 0 00-.26-2.577 10.082 10.082 0 011.803 2.125zM165.639 375.15c-.842.866-1.45 2.112-1.444 3.511a5.26 5.26 0 01-.382-2.114 6.416 6.416 0 01.456-2.235 6.416 6.416 0 011.778-1.426 5.295 5.295 0 012.055-.624c-1.247.634-2.076 1.743-2.463 2.888z"
        fill="#9F6338"
      />
    </Svg>
  );
};
