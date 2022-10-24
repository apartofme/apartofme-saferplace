import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

import { ISvgProps } from '../../../utils/types';

export const EmotionOkIcon = ({ width = 48, height = 48 }: ISvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 48 48" fill="none">
      <G>
        <Path
          d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24z"
          fill="#C0F9F2"
        />
        <Path
          d="M42.254 21.35s.457 3.036-.82 4.524c-1.277 1.49-3.33 3.026-4.795 3.043-1.465.015-5.064-1.089-5.375-3.06-.521-3.296 3.732-3.993 4.78-4.287 1.047-.294 5.776-.153 6.21-.219v-.001z"
          fill="#fff"
        />
        <Path
          d="M35.55 28.873a4.116 4.116 0 100-8.233 4.116 4.116 0 000 8.233z"
          fill="#D578FF"
        />
        <Path
          d="M31.435 24.821l.037.26c.006.043.011.091.02.144.01.052.025.107.038.168.029.12.06.262.118.413.096.307.269.664.524 1.033.257.368.612.743 1.076 1.047a3.888 3.888 0 001.661.622c.63.072 1.326.017 1.973-.264.165-.06.32-.151.477-.234.148-.099.306-.19.444-.31.147-.11.274-.244.406-.373.12-.143.245-.281.348-.44a3.62 3.62 0 00.497-1.029c.111-.371.167-.763.167-1.161a4.037 4.037 0 00-.204-1.156 3.676 3.676 0 00-.529-1.011c-.106-.157-.237-.291-.361-.429-.138-.124-.269-.255-.419-.36-.14-.117-.3-.201-.453-.297-.162-.079-.318-.165-.484-.218-.655-.259-1.353-.293-1.98-.2a3.89 3.89 0 00-1.64.674c-.453.319-.796.705-1.04 1.08-.245.376-.406.74-.492 1.048-.053.153-.078.294-.104.417-.012.06-.025.118-.033.17l-.015.143-.029.262-.01-.264c0-.044-.004-.093-.005-.146 0-.054.007-.113.01-.175.008-.128.015-.276.049-.439.047-.33.168-.727.381-1.159a4.281 4.281 0 012.806-2.216c.717-.165 1.544-.182 2.349.086.205.057.398.147.598.235.19.104.388.201.568.334.188.121.355.272.528.42.157.163.322.325.462.513.282.368.529.781.684 1.238.16.455.248.94.263 1.435.002.494-.072.983-.217 1.443a4.39 4.39 0 01-.643 1.259c-.133.191-.29.357-.445.526-.168.152-.331.309-.514.435-.175.14-.37.243-.556.353-.197.094-.389.19-.59.253-.798.293-1.623.301-2.346.16a4.272 4.272 0 01-2.875-2.126 3.922 3.922 0 01-.416-1.145c-.04-.162-.05-.31-.064-.437-.005-.064-.014-.121-.015-.175v-.146l.001-.264-.006.003z"
          fill="#32194C"
        />
        <Path
          d="M35.427 27.68a2.846 2.846 0 100-5.693 2.846 2.846 0 000 5.693z"
          fill="#32194C"
        />
        <Path
          d="M45.43 21.783l-.169.096-.211.114a6.793 6.793 0 01-.306.12c-.464.17-1.208.302-2.094.263-.445-.01-.917-.06-1.413-.116-.494-.057-1.006-.127-1.514-.17-.253-.021-.507-.036-.752-.038-.126-.008-.242.009-.363.01l-.09.003-.105.009-.21.015c-.56.042-1.13.104-1.704.193-.571.088-1.117.2-1.621.345a7.522 7.522 0 00-1.388.529 4.611 4.611 0 00-1.862 1.626c-.408.629-.61 1.27-.722 1.72l-.072.305-.044.227-.039.19-.059-.185-.067-.227c-.022-.094-.045-.2-.07-.316a4.92 4.92 0 01.033-2.137c.111-.459.31-.958.62-1.443.31-.488.733-.951 1.24-1.344a6.906 6.906 0 011.722-.977 8.942 8.942 0 011.986-.534c.688-.108 1.36-.141 2-.123l.238.009.12.005.13.01c.172.018.35.025.51.059.33.05.635.124.924.205.578.163 1.08.361 1.537.544.457.183.87.361 1.247.503.753.297 1.378.445 1.837.492l.307.025c.089 0 .165-.003.228-.003.125 0 .194-.002.194-.002l.001-.002z"
          fill="#32194C"
        />
        <Path
          d="M42.26 21.402l.041.163c.029.108.069.265.103.474.072.415.129 1.035.038 1.801a7.25 7.25 0 01-.277 1.233 6.64 6.64 0 01-.613 1.331 6.465 6.465 0 01-1.017 1.284c-.41.396-.89.752-1.433 1.035a5.534 5.534 0 01-1.694.554c-.142.017-.284.047-.425.05l-.418.02c-.276-.01-.544-.014-.803-.056-.26-.026-.508-.093-.748-.145-.235-.072-.465-.134-.677-.227-.43-.161-.8-.381-1.126-.588a5.216 5.216 0 01-1.307-1.245c-.134-.163-.207-.312-.269-.405l-.087-.143.118.121c.08.076.18.202.34.333.301.28.78.639 1.427.95.33.142.689.295 1.096.394.198.06.411.091.628.135.218.023.442.064.672.065.23.019.465.004.704-.003l.36-.04c.12-.01.24-.044.36-.063a5.42 5.42 0 001.429-.505c.465-.242.889-.54 1.264-.87.37-.333.695-.693.967-1.07.273-.374.494-.76.674-1.139.175-.38.306-.75.408-1.097a7.34 7.34 0 00.263-1.703c.01-.207.003-.368 0-.478a53.08 53.08 0 01-.006-.168l.007.002z"
          fill="#32194C"
        />
        <Path
          d="M37.204 18.364s-.094.015-.257.034c-.08.008-.18.018-.292.038-.113.019-.237.03-.375.06-.136.023-.284.048-.44.085-.156.029-.32.074-.489.11-.338.09-.699.19-1.075.305-.375.12-.73.24-1.059.36-.161.065-.32.119-.465.184-.15.057-.284.121-.41.178-.13.054-.239.115-.343.163a3.082 3.082 0 00-.262.135c-.144.077-.23.117-.23.117s.035-.085.11-.236c.036-.078.085-.168.15-.268.066-.099.138-.218.237-.332a4.157 4.157 0 01.773-.741c.33-.236.728-.45 1.178-.593.45-.138.9-.187 1.305-.18a4.01 4.01 0 011.059.171c.146.039.274.096.383.141.11.044.203.093.276.135.147.082.225.133.225.133l.001.001z"
          fill="#186060"
        />
        <Path
          d="M41.629 13.678s-.163.015-.432.026c-.069.001-.143.005-.22.006-.082.005-.17.01-.26.017-.185.014-.385.014-.607.035-.111.009-.224.015-.34.02-.115.007-.238.022-.359.03-.244.01-.5.041-.763.053-.527.044-1.079.077-1.657.084-.578.015-1.13 0-1.658-.024-.262-.001-.52-.023-.764-.025-.123-.003-.246-.013-.362-.015-.116 0-.228-.003-.339-.008-.224-.014-.423-.007-.608-.014l-.26-.006h-.22c-.271 0-.434-.01-.434-.01s.075-.137.238-.365l.14-.188c.054-.068.114-.133.18-.207.134-.145.288-.314.48-.47.094-.081.197-.164.304-.248.108-.083.227-.156.35-.236.245-.165.524-.3.825-.436a5.807 5.807 0 012.075-.446 5.815 5.815 0 012.09.37c.306.123.59.25.842.404.126.076.247.144.358.223.11.081.215.16.312.236.197.148.358.312.497.452.07.07.133.136.189.2.052.065.1.127.146.183.171.223.252.356.252.356l.005.003z"
          fill="#32194C"
        />
        <Path
          d="M5.815 21.35s-.457 3.036.82 4.524c1.277 1.49 3.33 3.026 4.795 3.043 1.465.015 5.064-1.089 5.375-3.06.52-3.296-3.732-3.993-4.78-4.287-1.047-.294-5.777-.153-6.21-.219v-.001z"
          fill="#fff"
        />
        <Path
          d="M12.517 28.872a4.117 4.117 0 100-8.233 4.117 4.117 0 000 8.233z"
          fill="#D578FF"
        />
        <Path
          d="M16.633 24.82l.002.265v.146c-.002.054-.01.11-.015.175-.012.126-.024.274-.064.437-.057.329-.192.722-.417 1.145a4.253 4.253 0 01-2.875 2.125c-.722.142-1.549.134-2.345-.159-.204-.064-.393-.16-.59-.253-.187-.11-.381-.214-.556-.353-.185-.126-.346-.283-.514-.435-.153-.169-.313-.335-.446-.526a4.306 4.306 0 01-.643-1.259 4.709 4.709 0 01-.217-1.443c.014-.494.104-.981.264-1.435.155-.457.402-.87.684-1.238.138-.189.302-.35.462-.513.173-.148.34-.299.528-.42.178-.133.376-.232.567-.334.199-.088.394-.178.599-.236.806-.267 1.633-.25 2.348-.085.723.168 1.331.524 1.797.924a4.185 4.185 0 011.39 2.451c.036.163.041.311.05.439.003.064.01.122.01.175l-.005.146-.01.264-.029-.262a7.717 7.717 0 01-.015-.143c-.009-.052-.022-.11-.034-.17-.025-.123-.05-.264-.104-.417a3.892 3.892 0 00-.49-1.048 3.984 3.984 0 00-1.042-1.08 3.887 3.887 0 00-1.64-.674c-.627-.093-1.326-.06-1.98.2-.166.055-.322.14-.483.218-.152.094-.313.18-.454.297-.151.105-.28.236-.418.36-.123.14-.254.272-.362.428a3.674 3.674 0 00-.529 1.012 4.032 4.032 0 00-.203 1.156c0 .398.055.79.166 1.161.106.373.287.716.498 1.028.1.16.228.298.347.44.135.128.26.264.407.373.138.121.294.212.444.311.157.084.31.173.477.234.646.28 1.342.334 1.972.264.634-.076 1.2-.32 1.662-.622a4.027 4.027 0 001.075-1.047c.256-.37.429-.726.525-1.033.058-.151.087-.29.117-.413.014-.06.03-.118.039-.169l.02-.142.037-.26-.007-.004z"
          fill="#32194C"
        />
        <Path
          d="M12.641 27.679a2.846 2.846 0 100-5.693 2.846 2.846 0 000 5.693z"
          fill="#32194C"
        />
        <Path
          d="M2.637 21.784l.194.002.228.003c.09-.007.195-.017.308-.025.46-.047 1.083-.194 1.836-.493.376-.14.79-.319 1.247-.502.457-.183.96-.381 1.537-.544.29-.081.595-.155.924-.205.16-.032.338-.04.511-.06l.13-.01.119-.004.238-.009c.64-.018 1.313.017 2 .123s1.357.28 1.986.534c.628.25 1.215.578 1.722.976.507.394.932.857 1.24 1.345.31.485.51.984.62 1.443.22.926.126 1.66.034 2.137l-.071.316c-.027.087-.049.165-.067.227l-.059.185-.039-.19-.043-.227-.073-.304a5.685 5.685 0 00-.722-1.72 4.611 4.611 0 00-1.862-1.627 7.62 7.62 0 00-1.388-.53 12.819 12.819 0 00-1.621-.344 21.468 21.468 0 00-1.704-.193l-.21-.015-.104-.009-.09-.003c-.122 0-.238-.017-.364-.01-.245 0-.499.015-.752.037-.508.042-1.02.114-1.514.171-.496.056-.968.104-1.413.116-.886.039-1.63-.094-2.094-.264l-.306-.119-.211-.114c-.108-.06-.168-.096-.168-.096l.001.002z"
          fill="#32194C"
        />
        <Path
          d="M5.81 21.402s0 .06-.006.168a7.348 7.348 0 00.262 2.18c.103.347.234.717.409 1.098.18.379.401.765.674 1.14.272.376.596.736.967 1.068.375.33.798.629 1.264.87.465.246.946.404 1.428.506.121.02.24.054.361.063l.36.04c.238.006.474.022.704.003.232 0 .454-.04.672-.065.215-.044.428-.074.628-.135.405-.097.767-.25 1.096-.395a5.775 5.775 0 001.426-.949c.162-.131.262-.257.341-.333l.118-.12-.087.142c-.06.09-.135.24-.27.405a5.22 5.22 0 01-1.306 1.245 6.135 6.135 0 01-1.126.588c-.212.093-.442.155-.677.227-.24.052-.488.12-.748.145-.259.042-.528.047-.803.057l-.418-.02c-.142-.004-.283-.034-.426-.05a5.534 5.534 0 01-1.693-.555 6.233 6.233 0 01-1.433-1.035c-.409-.4-.75-.837-1.017-1.284a6.736 6.736 0 01-.613-1.33 7.095 7.095 0 01-.277-1.234 6.308 6.308 0 01.038-1.801 4.67 4.67 0 01.103-.474l.042-.163.006-.002z"
          fill="#32194C"
        />
        <Path
          d="M10.862 18.364s.077-.05.225-.132c.074-.042.167-.091.276-.135.11-.045.238-.102.383-.14a3.985 3.985 0 011.059-.171c.404-.008.855.04 1.305.179.449.142.847.357 1.178.593a4.122 4.122 0 01.773.74c.097.115.171.234.236.333.068.1.115.19.152.267.075.152.109.237.109.237s-.086-.042-.23-.117a4.43 4.43 0 00-.262-.135c-.103-.048-.214-.11-.343-.163-.126-.057-.262-.12-.41-.178-.145-.065-.304-.119-.466-.184-.329-.12-.683-.24-1.058-.36a30.112 30.112 0 00-1.075-.304c-.17-.037-.333-.084-.49-.111a6.907 6.907 0 00-.44-.086c-.137-.03-.262-.04-.374-.059-.113-.02-.212-.03-.293-.038-.163-.019-.257-.034-.257-.034l.002-.002z"
          fill="#186060"
        />
        <Path
          d="M6.377 13.678s.08-.133.252-.356l.146-.183c.056-.064.12-.13.188-.2.14-.14.301-.304.498-.452.097-.078.201-.156.312-.235.111-.08.232-.148.358-.224a5.68 5.68 0 01.842-.405 5.785 5.785 0 012.09-.37c.758.017 1.47.195 2.075.447.301.137.58.271.825.436.123.08.242.153.35.237.107.084.21.166.304.247.191.154.346.325.48.47.066.074.128.141.18.207l.14.188c.163.228.238.365.238.365s-.163.008-.433.01h-.22c-.083.001-.17.005-.26.006-.186.007-.386 0-.61.014l-.338.008c-.116.002-.24.014-.362.015-.243.002-.502.024-.764.025-.528.024-1.08.037-1.659.024a23.33 23.33 0 01-1.656-.084c-.26-.012-.52-.044-.763-.054-.123-.007-.244-.023-.36-.028a10.436 10.436 0 01-.339-.02c-.222-.022-.422-.024-.607-.036l-.26-.017c-.079-.001-.153-.005-.22-.006-.269-.01-.432-.026-.432-.026l.005-.003z"
          fill="#32194C"
        />
        <Path
          d="M15.97 37.046l.327-.062c.206-.042.497-.094.841-.171.347-.09.74-.18 1.155-.304.416-.13.847-.254 1.275-.415.213-.078.425-.15.632-.227l.605-.235c.195-.074.383-.148.563-.222.18-.072.349-.14.507-.198.633-.25 1.08-.384 1.191-.283.219.207.521.64.805 1.03.284.385.544.723.644.755.1.032.426-.419.744-.887.32-.466.63-.943.758-.955.122-.008 1.53.613 2.968 1.173l1.966.761c.535.203.89.34.89.34-2.538.367-5.125.72-7.784.811a30.285 30.285 0 01-4.029-.114 20.851 20.851 0 01-4.056-.797h-.001z"
          fill="#90F2E2"
        />
        <Path
          d="M28.204 41.593s-.11.05-.314.131a10.08 10.08 0 01-3.885.667 10.027 10.027 0 01-2.977-.564 8.447 8.447 0 01-.857-.352c-.198-.094-.306-.15-.306-.15s.123-.011.34-.02c.216-.006.53-.02.91-.028a54.436 54.436 0 012.924.002c1.129.035 2.157.12 2.918.185.38.033.69.065.908.087.216.022.337.04.337.04l.002.002zM30.495 36.929c-2.151.114-10.772.114-12.921 0-.377-.02-.751.225-1.128.205-.406-.022-.687.296-.482.55.324.4.91.453 1.49.687 1.894.764 11.268.764 13.162 0 .58-.234 1.166-.286 1.49-.688.205-.253-.076-.57-.482-.55l-1.128-.204h-.001z"
          fill="#32194C"
        />
        <Path
          d="M24.878 35.846a.824.824 0 01-.25.137c-.22.062-.446-.054-.636-.182a4.24 4.24 0 01-.858-.768l-.147.25c.236.478.572.903.98 1.244.205.171.467.33.727.265a.836.836 0 00.328-.188c.465-.388.802-.929.944-1.519l-1.087.758-.002.003z"
          fill="#92F7E4"
        />
      </G>
    </Svg>
  );
};