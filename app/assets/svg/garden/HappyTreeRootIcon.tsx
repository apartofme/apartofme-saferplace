import * as React from 'react';
import Svg, {
  G,
  Path,
  Defs,
  ClipPath,
  RadialGradient,
  Stop,
} from 'react-native-svg';

import { ISvgProps } from '../../../utils/types';

export const HappyTreeRootIcon = ({ width = 213, height = 279 }: ISvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 213 279" fill="none">
      <G clipPath="url(#clip0_2916_739897)">
        <Path
          d="M164.702 27.272c-4.435 3.533-6.896 8.901-9.724 13.816a83.727 83.727 0 01-18.651 22.286c-4.577 3.849-10.931 7.333-16.247 4.596-6.21-3.196 1.88-11.069-3.18-15.883-5.763-5.486-15.577 15.227-21.153 9.553C92.64 58.48 82.97 45.616 81.88 41.322 78.61 28.447 70.928 27.413 60.944 18.65c-2.838-2.491-10.58-12.468-12.915-9.5-1.752 2.232-.452 8.02 1.019 10.446 6.34 10.454 15.813 12.618 20.757 23.8 4.944 11.182 7.743 15.538-1.883 23.076-2.616 2.048.993 11.996-2.2 12.91-14.331 4.094-28.66-1.365-44.411 7.928 1.32 4.02 6.182 5.807 10.405 5.53 4.223-.278 8.21-2.026 12.392-2.682 12.058-1.893 23.594 5.408 32.75 13.482 9.156 8.072 17.756 14.997 29.294 18.983l33.627-32.228c5.053.544 14.328 9.474 16.019 4.682 1.69-4.792-3.373-23.38-2.544-28.394 2.642-15.998 15.058-28.338 26.824-39.496-3.688-4.308-10.94-3.447-15.375.085h-.001zM138.737 210l-42.92-21.852c-6.498-3.572-4.64 7.395-11.33 10.593-10.641 5.087 2.467-1-8.176 4.086-2.588 1.238-7.744 6.3-6.01 8.586 10.059-5.16-10.01 3.322 1.194 4.83 1.73.233 3.544.311 5.07 1.16 1.1.612 1.959 1.582 3.014 2.268 1.997 1.299 4.5 1.478 6.882 1.541a112.681 112.681 0 0037.065-5.233c2.297-.73 4.858-1.52 7.031-.479 2.462 1.181 3.351 4.174 5.063 6.301 3.605 4.482 6.74 14.123 12.329 12.763 5.589-1.358 14.804-13.332 20.515-12.646 4.841.58 11.166 2.77 13.549-1.485-11.831-6.638-33.108-1.456-43.277-10.435l.001.002z"
          fill="#41B6AB"
        />
        <Path
          d="M155.665 219.514c-8.748-18.561 5.629-30.662 5.053-51.173-.365-13.024-6.777-21.237-9.667-33.942-5.569-24.482.664-34.035 19.721-50.381 8.772-7.524 20.253-13.992 22.575-25.313-18.692.75-32.62 19.909-51.284 21.168-4.943-23.932 4.44-48.215 13.122-71.06.74-1.945 1.356-6.995-.193-8.387-2.129-1.916-5.344 3.118-6.885 5.533-7.946 12.453-12.707 30.19-27.206 33.012-7.293-1.585-10.452-9.977-12.739-17.081-2.287-7.103-6.532-15.353-13.991-15.566-2.257 23.49 23.128 44.583 16.896 67.343-.747 2.73-1.985 5.393-4.015 7.364-4.609 4.478-12.253 4.29-18.02 1.456-5.766-2.834-10.166-7.763-14.686-12.33a170.097 170.097 0 00-21.542-18.41c-1.79-1.287-3.686-2.575-5.863-2.927-2.776-.45-5.538.682-8.125 1.79L12.992 61.678c-2.59 1.11-1.969 4.952.84 5.184 6.948.575 14.138-.21 21.152.22 10.061.614 21.437 5.308 23.812 15.105l5.801 7.667c8.65 12.296 1.516 10.819-1.502 25.547-2.661 12.979.22 25.139 3.63 37.943 3.41 12.803 7.395 15.335 6.947 28.576-.448 13.242-6.302 25.919-18.015 32.11-13.552 7.164-33.031 3.444-42.249 15.692a156.1 156.1 0 0149.146-1.93c1.606.192 3.369.495 4.395 1.746 2.19 2.668-.78 6.412-3.474 8.57a348.237 348.237 0 00-33.78 30.904c6.323 2.601 13.343-.891 19.378-4.104a326.776 326.776 0 0136.142-16.511c3.986-1.536 8.714-2.931 12.306-.62 2.708 1.742 3.851 5.044 5.134 7.997 4.688 10.785 13.646 19.644 24.484 24.212l-.035-19.647c-.006-3.975.06-8.207 2.243-11.528 4.511-6.861 14.693-5.904 22.697-4.073a1383.216 1383.216 0 0140.623 9.942c-9.452-14.348-29.676-19.622-37-35.163l-.002-.003z"
          fill="#54D5CE"
        />
        <Path
          d="M201.199 115.977c-.544-2.142-3.398-2.558-5.594-2.308-5.893.67-10.051 2.71-14.756 6.32-1.161.89-7.045 3.49-8.149 2.529-.792-.691-.673-1.932-.486-2.966.443-2.456 3.568-6.269 4.011-8.724.278-1.538-1.57-2.547-2.708-1.475-4.911 4.629-7.345 11.927-11.674 17.393-5.429 6.856-14.482 10.529-15.649 19.195l5.788 16.698c3.453.346 4.866-1.661 5.635-5.045 2.106-9.271 8.534-17.577 15.924-23.556 7.391-5.979 13.591-10.868 21.918-15.454 1.897-1.045 6.271-.509 5.739-2.607h.001zM69.144 131.635c-4.008-6.843-10.576-11.228-14.584-18.072-1.437-2.454-2.96-4.997-5.502-6.637-6.221-4.014-15.108-.921-22.683-2.32-3.988-.737-7.553-2.73-11.533-3.499-3.98-.769-9.016.262-10.376 3.61l12.378 3.797c1.313.403 2.679.834 3.64 1.712.197.181.367.323.514.438-.531-.118-1.334-.081-2.31.541-2.777 1.77-6.378 2.109-9.763 2.649-3.384.539-7.01 1.514-8.925 4.005 6.09-.9 11.842 5.465 17.597 3.509 1.467-.497 2.634-1.482 3.947-2.238 2.107-1.214 4.58-1.835 7.01-2.438 5.758-1.431 12.385-2.761 17.377.12 4.744 2.738 6.064 14.953 7.647 19.713 4.125 12.41 12.698 19.863 24.22 28.001l-8.654-32.888v-.003z"
          fill="#54D5CE"
        />
        <Path
          d="M8.086 48.857s-.592 12.081 16.197 14.209c0 0-2.105-14.077-16.197-14.21zM201.895 95.784s-18.797 4.53-16.783 22.621c0 0 18.358-5.583 16.783-22.621zM207.573 67.87s-10.844-8.48-20.528 2.065c0 0 11.267 7.68 20.528-2.066zM188.648 63.623s9.001-7.397 4.381-15.858c0 0-8.564 7.801-4.381 15.858zM172.578 26.125s8.638-4.64 4.537-13.977c0 0-8.238 5.144-4.537 13.977zM14.183 115.14s-9.304 3.213-5.828 14.661c0 0 8.457-3.68 5.828-14.661z"
          fill="#FF6700"
        />
        <Path
          d="M179.568 72.338s.881 11.92 13.312 11.99c0 0-1.641-11.728-13.312-11.99zM137.956 29.487s3.915-11.293-7.472-16.281c0 0-3.141 11.416 7.472 16.281zM212.35 125.645s-5.114-13.07-20.033-7.979c0 0 5.959 12.535 20.033 7.979zM26.837 114.536s-.723 10.138 12.316 10.85c0 0-.101-10.013-12.316-10.85zM23.418 106.296s3.816-12.738-13.54-19.435c0 0-1.465 15.579 13.54 19.435zM171.937 29.855s7.993 7.58 17.667-1.756c0 0-8.025-6.502-17.667 1.756z"
          fill="#EF9F39"
        />
        <Path
          d="M109.131 188.548c-.589.23-1.142.465-1.646.712a9.54 9.54 0 00-1.32.77 4.21 4.21 0 00-.836.757c-.192.238-.301.45-.381.724-.068.27-.093.576-.026 1.017.068.441.234.991.457 1.664.11.337.235.706.354 1.125.119.418.235.886.309 1.417.019.131.032.273.044.409.012.141.017.29.022.434.002.151-.004.31-.009.463-.01.155-.027.308-.044.461a5.8 5.8 0 01-.531 1.758 6.49 6.49 0 01-.979 1.454 5.78 5.78 0 01-2.199 1.532c-.133.049-.267.096-.402.142-.133.042-.263.075-.395.11a7.828 7.828 0 01-1.488.208c-.462.018-.898.003-1.315-.027-.41-.034-.806-.079-1.182-.134-.753-.109-1.453-.242-2.115-.355a20.576 20.576 0 00-1.874-.253c-.581-.042-1.115-.037-1.566.051-.118.016-.232.052-.348.078-.057.017-.114.037-.171.055l-.087.026-.084.034a4.38 4.38 0 00-.678.325 5.558 5.558 0 00-.666.457 8.672 8.672 0 00-.644.577c-.847.844-1.613 1.923-2.362 3.066l-1.14 1.76a53.16 53.16 0 01-.596.9l-.584.854a68.506 68.506 0 00-2.164 3.516c-.705 1.205-1.414 2.432-2.199 3.632-.392.6-.808 1.189-1.244 1.764-.445.57-.909 1.127-1.408 1.652-.123.133-.254.259-.381.388a7.778 7.778 0 01-.39.376l-.4.367-.415.348c-.07.057-.138.117-.208.172l-.215.165c-.145.109-.285.219-.431.326l-.445.306c-.075.051-.147.103-.221.152l-.229.142a19.813 19.813 0 01-3.834 1.857c-1.329.48-2.69.84-4.06 1.12a28.828 28.828 0 003.897-1.509 19.143 19.143 0 003.512-2.16l.203-.155c.066-.054.13-.111.195-.165l.389-.331c.127-.114.248-.232.374-.347l.186-.174c.06-.059.12-.121.179-.181l.354-.363.337-.379a7.2 7.2 0 00.327-.387c.105-.131.216-.259.317-.394.413-.534.792-1.094 1.153-1.667.354-.579.687-1.171 1.002-1.777.629-1.213 1.198-2.474 1.78-3.75.582-1.276 1.187-2.567 1.862-3.842l.51-.935c.16-.295.317-.597.476-.902l.959-1.872c.663-1.265 1.382-2.574 2.395-3.825.256-.31.53-.617.83-.912.304-.292.623-.579.98-.839a7.908 7.908 0 012.423-1.225c.9-.275 1.778-.36 2.591-.385a24.08 24.08 0 012.306.069c.727.05 1.412.109 2.05.136.32.014.621.016.91.011.282-.01.546-.031.78-.066.462-.076.775-.211.891-.339a.937.937 0 00.183-.226c.014-.019.025-.053.04-.076l.023-.038.02-.047c.036-.067.041-.106.055-.15a.73.73 0 00.016-.258c-.006-.021-.006-.041-.009-.062-.007-.021-.008-.038-.014-.062-.008-.029-.012-.054-.02-.087l-.029-.109c-.085-.317-.299-.828-.583-1.456-.278-.631-.618-1.39-.878-2.309-.258-.917-.405-2.026-.286-3.143a7.972 7.972 0 011.054-3.183 9.982 9.982 0 011.95-2.353 15.354 15.354 0 012.136-1.595 26.933 26.933 0 012.096-1.181c.356-.143.708-.279 1.052-.406l1.001-.368 1.932-.715 1.92-.739 1.905-.766a106.52 106.52 0 007.452-3.385 73.525 73.525 0 007.064-4.039c2.266-1.479 4.438-3.101 6.443-4.91a41.692 41.692 0 005.481-5.96 37.801 37.801 0 004.169-7.01 41.075 41.075 0 002.61-7.831c.616-2.704.983-5.479 1.152-8.274.112 2.796.027 5.614-.32 8.419a42.304 42.304 0 01-1.87 8.306 39.934 39.934 0 01-3.636 7.803 44.854 44.854 0 01-5.199 6.939c-1.946 2.151-4.089 4.115-6.339 5.929-2.252 1.816-4.615 3.479-7.04 5.028a111.919 111.919 0 01-7.44 4.33l-1.9.998-1.912.966-1.922.941-.929.452a36.64 36.64 0 00-.867.44l-.003-.002zM126.809 208.983c-.254.549-.508 1.107-.793 1.673a22.983 22.983 0 01-.93 1.698c-.165.282-.358.561-.541.839-.202.273-.392.551-.615.814-.11.132-.213.269-.331.396l-.351.382c-.116.128-.247.242-.37.364-.126.117-.247.243-.379.351-1.037.9-2.178 1.603-3.318 2.169-1.142.567-2.285 1.025-3.396 1.461-1.11.436-2.192.855-3.216 1.331a21.795 21.795 0 00-2.907 1.672c-.234.156-.454.332-.682.498l-.34.252-.325.27c-.216.182-.439.356-.649.546l-.623.577-.156.144-.149.152-.297.305c-.199.203-.401.405-.583.624l-.564.642-.532.672c-2.799 3.621-4.598 8.076-5.152 12.711a24.423 24.423 0 00.162 7.006l.165.868c.058.288.137.572.205.86l.105.429.13.424c.088.281.165.567.264.846.384 1.119.87 2.203 1.422 3.256a23.22 23.22 0 01-1.643-3.172c-.118-.275-.216-.558-.325-.837l-.16-.42-.135-.429c-.087-.286-.188-.57-.266-.859l-.227-.871a25.158 25.158 0 01-.644-7.182c.255-4.834 1.805-9.64 4.557-13.743l.527-.762.564-.738c.183-.249.387-.484.589-.72l.301-.354.151-.178.16-.17.642-.677c.218-.223.45-.432.674-.649l.341-.322.358-.304c.24-.2.472-.411.721-.603a24.394 24.394 0 013.138-2.093c1.097-.601 2.202-1.114 3.274-1.621 1.071-.504 2.106-1.005 3.06-1.562.954-.555 1.807-1.181 2.522-1.888.093-.085.169-.184.255-.274.083-.094.173-.18.249-.277l.232-.29c.078-.096.147-.204.22-.305.15-.199.279-.424.417-.638.128-.228.261-.447.379-.687.246-.466.469-.964.685-1.479.217-.511.421-1.05.63-1.596l.75-1.637a36.22 36.22 0 01.839-1.688c.637-1.129 1.324-2.234 2.134-3.223.385-.513.816-.977 1.234-1.452.103-.121.214-.232.323-.344l.329-.335c.221-.222.435-.454.666-.661l.679-.636c.225-.214.461-.408.69-.612.46-.41.932-.792 1.399-1.181 1.877-1.531 3.775-2.942 5.549-4.45.434-.382.885-.753 1.301-1.151l.636-.589.608-.611.306-.306c.101-.102.204-.212.305-.319l.609-.645c.405-.431.809-.863 1.207-1.297 1.595-1.739 3.142-3.511 4.519-5.398 1.378-1.884 2.575-3.895 3.407-6.069.84-2.171 1.294-4.493 1.414-6.847a30.407 30.407 0 00-.021-3.546 47.49 47.49 0 00-.368-3.542c.242 1.164.45 2.336.605 3.519.153 1.184.242 2.378.26 3.577a24.331 24.331 0 01-.21 3.603 21.657 21.657 0 01-.781 3.546c-.716 2.325-1.832 4.516-3.126 6.56-1.295 2.047-2.757 3.966-4.256 5.835-.374.468-.754.93-1.133 1.393l-.571.691c-.097.115-.188.229-.288.346l-.303.347-.606.694-.629.668c-.416.452-.856.868-1.286 1.301-1.744 1.692-3.568 3.247-5.273 4.839-1.696 1.596-3.293 3.231-4.524 5.055-.641.895-1.144 1.858-1.616 2.83a34.6 34.6 0 00-.646 1.554l-.627 1.651-.005-.002zM112.168 103.204a48.766 48.766 0 00-1.077 1.518 24.984 24.984 0 00-.963 1.518c-.074.128-.15.256-.221.385l-.209.388c-.073.131-.128.254-.194.383-.063.128-.129.258-.183.389l-.174.397-.154.405c-.056.137-.099.274-.144.414-.043.138-.097.278-.131.419a11.667 11.667 0 00-.364 1.737 10.602 10.602 0 00-.061 1.804 8.81 8.81 0 00.331 1.825 7.93 7.93 0 00.816 1.759 8.353 8.353 0 01-1.547-1.336 9.988 9.988 0 01-1.214-1.751 12.408 12.408 0 01-.843-2.015c-.213-.7-.387-1.424-.494-2.16-.034-.185-.048-.367-.072-.554a9.49 9.49 0 01-.055-.558l-.038-.563-.012-.565c-.007-.19 0-.379.004-.569.006-.187.006-.386.02-.568l.034-.557c.014-.185.033-.368.05-.553.072-.734.172-1.466.295-2.175.12-.713.257-1.414.399-2.096.4-.573.802-1.121 1.196-1.656l1.161-1.576c.19-.26.372-.517.556-.777l.268-.388.135-.193.137-.207 1.092-1.658c.358-.548.714-1.091 1.006-1.587.078-.128.133-.24.201-.362.055-.12.118-.235.165-.369.104-.253.184-.569.269-.883.163-.643.335-1.3.518-1.944l.284-.963.295-.955.125.99.14.983c.1.655.209 1.296.327 1.955.054.334.118.671.14 1.063.019.19.013.394.013.594-.01.193-.018.402-.038.584l-.028.283-.033.268c-.023.179-.045.359-.071.527l-.152 1.017-.312 1.983-.039.247-.045.258-.094.518c-.066.343-.132.686-.202 1.022l-.419 1.991c-.138.653-.271 1.29-.385 1.912l-.009.002zM158.881 87.006c-2.439 1.889-4.803 3.848-7.017 5.96a56.83 56.83 0 00-1.629 1.613c-.264.277-.53.547-.794.831l-.791.853c-.267.284-.523.572-.784.859-.259.287-.522.573-.775.864l-.767.87-.748.884c-.987 1.184-1.949 2.391-2.836 3.649a44.383 44.383 0 00-2.47 3.906 40.032 40.032 0 00-1.984 4.197c-.575 1.443-1.048 2.929-1.47 4.436.266-1.54.588-3.077 1.02-4.59.44-1.51.965-3.001 1.579-4.46a45.521 45.521 0 012.12-4.253c.778-1.384 1.638-2.717 2.523-4.03l.672-.979.69-.964c.228-.323.464-.639.697-.957.234-.317.466-.637.704-.95l.712-.943c.237-.314.489-.63.734-.944a62.43 62.43 0 011.523-1.85c2.077-2.427 4.317-4.7 6.61-6.884 2.503-1.942 5.039-3.786 7.557-5.634l7.562-5.549 15.125-11.097-13.924 12.57-6.963 6.287c-2.321 2.098-4.645 4.177-6.878 6.306l.002-.001zM81.039 57.088c.535 2.535.87 5.116 1.121 7.666.117 1.27.212 2.523.337 3.758.123 1.235.28 2.454.515 3.65.23 1.195.552 2.372.99 3.492a13.744 13.744 0 001.76 3.164c.045.06.088.124.135.184l.144.176.29.355.31.335c.104.113.207.227.32.329l.332.316c.112.107.233.198.35.298.23.204.484.375.735.556.123.095.26.165.389.249.133.077.26.167.399.234.277.136.549.29.841.394.145.056.288.12.436.17l.449.135c.074.022.15.049.225.066l.23.047.465.094a8.818 8.818 0 01-3.677-.98c-.284-.154-.573-.301-.842-.483-.135-.09-.277-.172-.408-.267l-.393-.288c-.134-.094-.257-.2-.381-.305l-.374-.315-.355-.336-.177-.168c-.058-.057-.113-.118-.168-.178a14.904 14.904 0 01-2.323-3.169 21.484 21.484 0 01-1.54-3.617c-.82-2.482-1.29-5.024-1.83-7.458l-.206-.91c-.07-.301-.15-.6-.223-.898l-.225-.896-.113-.447c-.038-.15-.084-.297-.125-.445l-.512-1.773-.572-1.75a70.176 70.176 0 00-1.84-7.153l-.585-1.762c-.205-.584-.426-1.161-.638-1.744l-.161-.437c-.055-.146-.116-.288-.174-.432l-.351-.863-.352-.864-.38-.852c-.493-1.144-1.048-2.26-1.602-3.38l-.877-1.658c-.142-.278-.305-.546-.458-.818l-.468-.815a70.572 70.572 0 00-4.147-6.3 71.22 71.22 0 014.936 5.77l.574.762c.19.255.39.504.568.768l1.099 1.563c.703 1.062 1.411 2.128 2.061 3.229l.498.82.471.837.472.839c.077.14.16.279.233.42l.222.428c.294.57.596 1.137.884 1.713l.833 1.74a73.364 73.364 0 012.857 7.205l-.004-.001z"
          fill="#297C83"
        />
        <Path
          d="M105.331 176.179c-.151.063-.298.131-.447.197l-.232.1-.24.1c-.32.129-.648.237-.982.323a9.406 9.406 0 01-2.029.291c-.68.026-1.354-.009-2.018-.063-.663-.053-1.319-.127-1.962-.155a7.184 7.184 0 00-.953.015c-.31.031-.617.082-.895.193a2.442 2.442 0 00-.755.465c-.213.21-.396.455-.545.727-.041.065-.068.141-.104.211-.031.071-.068.14-.097.214-.052.149-.113.295-.159.448-.043.155-.09.307-.129.464-.038.159-.077.317-.111.478-.146.637-.237 1.287-.388 1.944a8.508 8.508 0 01-.69 1.894 6.438 6.438 0 01-1.14 1.665 8.38 8.38 0 01-1.556 1.268c-.562.359-1.154.667-1.753.947-1.201.56-2.44 1.02-3.643 1.559-1.201.538-2.378 1.161-3.378 2.029.978-.892 2.148-1.547 3.339-2.115 1.193-.569 2.422-1.059 3.6-1.643.589-.293 1.165-.61 1.708-.975a7.986 7.986 0 001.477-1.262 6.1 6.1 0 001.049-1.615 8.13 8.13 0 00.62-1.834c.13-.633.209-1.295.342-1.948.128-.648.276-1.326.598-1.948.16-.311.366-.605.618-.865.262-.251.573-.453.907-.589a3.76 3.76 0 011.03-.25 7.538 7.538 0 011.024-.042c.675.014 1.336.074 1.99.109.653.037 1.301.055 1.941.015a8.727 8.727 0 001.876-.314c.303-.086.601-.192.89-.317l.215-.096c.071-.03.144-.065.222-.101.152-.071.303-.145.455-.213 1.226-.522 2.458-.994 3.684-1.483a140.85 140.85 0 003.657-1.501c2.42-1.038 4.802-2.167 7.106-3.443a59.223 59.223 0 003.39-2.026c.275-.181.555-.356.827-.542l.816-.558c.535-.382 1.073-.765 1.593-1.168a43.183 43.183 0 003.036-2.533 41.48 41.48 0 002.78-2.815 41.777 41.777 0 01-2.715 2.885c-.95.92-1.954 1.783-2.984 2.613-.513.417-1.044.813-1.572 1.211l-.806.579c-.269.194-.545.376-.817.564a60.97 60.97 0 01-3.361 2.117c-2.286 1.338-4.655 2.531-7.062 3.632a142.957 142.957 0 01-3.636 1.595c-1.215.518-2.437 1.021-3.628 1.562h-.003zM111.426 232.262c1.685-1.061 3.554-1.722 5.404-2.29 1.854-.57 3.719-1.049 5.494-1.756l.665-.267.654-.294.327-.147.321-.16.641-.32.628-.345.315-.174.307-.185.615-.369.602-.392c.203-.128.398-.266.594-.404.195-.138.393-.274.587-.416.38-.291.77-.571 1.139-.878a36.047 36.047 0 002.169-1.893 45.352 45.352 0 003.909-4.239 62.12 62.12 0 001.773-2.282 75.423 75.423 0 001.668-2.362c2.17-3.191 4.116-6.531 6.026-9.885-1.856 3.385-3.746 6.758-5.869 9.99a76.558 76.558 0 01-1.635 2.395 62.134 62.134 0 01-1.744 2.32 45.638 45.638 0 01-3.868 4.334 35.05 35.05 0 01-2.162 1.95c-.369.317-.758.608-1.139.91-.194.147-.393.288-.588.431-.196.144-.393.287-.597.421l-.605.407-.62.388-.31.193-.317.182-.635.363-.649.337-.324.168-.331.156-.662.31-.674.284c-1.805.752-3.681 1.266-5.507 1.86-1.823.592-3.621 1.266-5.195 2.295a12.856 12.856 0 00-2.201 1.749 15.622 15.622 0 00-1.816 2.17 20.277 20.277 0 00-1.457 2.448c-.211.427-.417.857-.604 1.296l-.141.33c-.047.11-.083.221-.125.332-.081.221-.165.442-.244.665-.125.456-.277.905-.361 1.372l-.074.347a3.475 3.475 0 00-.065.35l-.103.704a18.481 18.481 0 00-.121 2.853c.049 1.909.38 3.81.875 5.661.493 1.855 1.186 3.654 2.017 5.387.41.871.877 1.712 1.357 2.545.501.821 1.015 1.635 1.586 2.411.141.194.281.391.425.583l.446.567.223.284.233.275.468.55c.645.715 1.308 1.415 2.029 2.055l.267.244c.089.082.179.16.274.237l.557.458c.183.159.384.292.575.439l.29.215.146.108.151.1.603.399c.099.068.204.128.309.189l.313.181.313.181c.104.062.214.11.322.166l.648.324-.653-.314c-.108-.054-.22-.1-.324-.161l-.316-.177-.317-.177c-.105-.06-.211-.117-.311-.184l-.611-.39-.153-.098-.147-.105-.296-.212c-.193-.143-.397-.275-.584-.429l-.567-.451a4.143 4.143 0 01-.278-.234l-.272-.239c-.734-.631-1.412-1.324-2.071-2.031l-.479-.545-.239-.272-.229-.282-.458-.564c-.149-.191-.291-.386-.437-.579a33.467 33.467 0 01-1.634-2.401 34.753 34.753 0 01-1.409-2.541c-.866-1.735-1.597-3.542-2.127-5.412-.532-1.868-.9-3.792-.983-5.745a18.986 18.986 0 01.077-2.929l.094-.73c.013-.122.036-.242.061-.363l.071-.361c.08-.485.229-.955.352-1.431.078-.234.162-.465.244-.699.041-.115.079-.234.125-.347l.138-.339c.185-.453.388-.897.598-1.338.427-.881.912-1.735 1.462-2.55a16.277 16.277 0 011.859-2.296 13.638 13.638 0 012.295-1.885h-.003zM151.025 231.849c-.323-.36-.623-.74-.929-1.115-.156-.185-.295-.384-.442-.576-.143-.196-.294-.384-.431-.585-.271-.401-.557-.792-.806-1.208l-.382-.617c-.119-.212-.246-.42-.356-.635a19.86 19.86 0 01-1.193-2.65 19.234 19.234 0 01-.794-2.787 17.582 17.582 0 01-.354-2.873c-.024-.481-.014-.964.005-1.445.031-.482.069-.962.145-1.438.137-.953.384-1.89.723-2.788.341-.898.796-1.75 1.337-2.539-.514.807-.938 1.67-1.248 2.571a13.069 13.069 0 00-.625 2.78c-.059.471-.081.946-.096 1.42a17.128 17.128 0 00.482 4.228 19.543 19.543 0 002.11 5.242c.116.207.245.403.367.604l.392.59c.255.397.548.77.824 1.153.139.19.294.37.44.556.149.182.29.372.448.548.311.358.615.719.943 1.06.614.719 1.277 1.397 1.947 2.07.683.66 1.375 1.313 2.095 1.936 1.43 1.258 2.927 2.446 4.436 3.619l9.089 7.016-9.316-6.713c-1.55-1.125-3.09-2.268-4.575-3.49a50.693 50.693 0 01-2.185-1.889c-.702-.66-1.4-1.329-2.054-2.044l.003-.001zM98.966 101.228a23.296 23.296 0 00.18 6.398 21.67 21.67 0 001.994 6.13 21.774 21.774 0 01-2.364-6.057 23.808 23.808 0 01-.563-6.53 23.847 23.847 0 011.592-6.36 21.814 21.814 0 013.295-5.604 21.639 21.639 0 00-2.94 5.736 23.225 23.225 0 00-1.193 6.287h-.001zM118.733 104.152a42.496 42.496 0 01-5.342 9.306 42.1 42.1 0 004.636-9.573 42.025 42.025 0 002.829-10.253 42.473 42.473 0 01-2.123 10.52zM160.429 134.257a30.021 30.021 0 00-3.75 6.042 29.984 29.984 0 00-2.22 6.801 30.18 30.18 0 011.873-6.952 30.478 30.478 0 013.493-6.346 34.232 34.232 0 015.095-5.144 39.542 39.542 0 015.973-4.024 39.342 39.342 0 00-5.726 4.309 33.587 33.587 0 00-4.739 5.314h.001zM137.526 36.137c.063-.78.181-1.598.541-2.358.087-.19.2-.366.31-.544.055-.088.122-.167.182-.25.06-.084.124-.165.192-.239.262-.314.559-.58.853-.843.593-.513 1.207-.966 1.737-1.48.527-.51.958-1.1 1.116-1.785.169-.684.088-1.432-.03-2.177-.06-.375-.128-.753-.183-1.14a8.138 8.138 0 01-.086-1.185c.012-.402.076-.81.207-1.2.137-.387.344-.744.589-1.061.493-.638 1.115-1.124 1.717-1.598l.451-.354.437-.366c.144-.123.293-.243.436-.367l.417-.39c.138-.132.281-.258.414-.393l.395-.412c.131-.14.269-.271.392-.416l.374-.432a21.738 21.738 0 002.583-3.765c1.454-2.685 2.351-5.684 2.553-8.747-.139 3.066-.975 6.097-2.385 8.834a22.033 22.033 0 01-2.533 3.86l-.37.445c-.122.15-.26.287-.388.43l-.393.426c-.133.14-.275.27-.412.407l-.415.404c-.143.13-.29.256-.435.384l-.437.381-.446.365c-.59.483-1.177.97-1.613 1.558a3.414 3.414 0 00-.503.95c-.105.341-.156.698-.158 1.063.003.364.045.734.104 1.106.06.37.135.746.205 1.127.07.382.127.772.153 1.171.028.4.004.814-.082 1.219-.081.41-.261.796-.473 1.148l-.17.257-.188.24c-.061.082-.131.153-.198.228-.069.073-.133.15-.205.219-.563.566-1.176 1.038-1.732 1.54-.553.501-1.05 1.042-1.333 1.677-.288.639-.386 1.368-.43 2.114l-.941 18.368-.469 9.19c-.084 1.532-.186 3.065-.366 4.59-.184 1.524-.449 3.04-.852 4.52.373-1.488.606-3.006.758-4.53.149-1.526.219-3.057.272-4.589l.28-9.197.565-18.406-.007.003zM112.629 39.773c-.601-.299-1.223-.627-1.761-1.114a3.689 3.689 0 01-.702-.837 3.839 3.839 0 01-.415-1.007c-.18-.696-.191-1.388-.206-2.05-.015-.666-.024-1.31-.164-1.926-.261-1.245-.94-2.384-1.787-3.364-.851-.988-1.863-1.839-2.916-2.634-1.054-.799-2.144-1.57-3.152-2.449-1.006-.875-1.934-1.876-2.578-3.06a6.493 6.493 0 01-.693-3.902 4.936 4.936 0 01.652-1.882c.346-.57.842-1.05 1.433-1.357a3.66 3.66 0 00-1.393 1.381 4.83 4.83 0 00-.598 1.87 6.355 6.355 0 00.765 3.797c.655 1.14 1.584 2.098 2.595 2.937 1.014.842 2.114 1.582 3.193 2.36 1.081.778 2.137 1.62 3.045 2.625a9.68 9.68 0 011.211 1.64c.344.593.615 1.237.775 1.912.168.68.192 1.371.223 2.03.03.66.062 1.309.231 1.898.084.294.202.57.359.82.157.25.36.47.589.668.459.396 1.029.688 1.62.964.584.291 1.206.566 1.794.932a9.09 9.09 0 011.624 1.271c.982.966 1.744 2.119 2.331 3.334.59 1.217 1.023 2.493 1.374 3.785.35 1.29.616 2.598.855 3.906.469 2.613.938 5.24 1.095 7.899a25.662 25.662 0 01-.052 3.989 17.703 17.703 0 01-.806 3.896c.39-1.27.616-2.585.712-3.905a25.507 25.507 0 00-.042-3.968c-.219-2.64-.747-5.241-1.277-7.84a47.565 47.565 0 00-.937-3.85c-.375-1.263-.829-2.5-1.426-3.66-.595-1.158-1.347-2.233-2.282-3.11a8.383 8.383 0 00-1.532-1.141c-.546-.323-1.148-.574-1.758-.86l.001.002zM57.298 69.055c-.452-.545-.89-1.1-1.333-1.65-.436-.557-.877-1.108-1.304-1.674-.868-1.114-1.69-2.274-2.536-3.388-.849-1.11-1.752-2.182-2.82-3.06a9.419 9.419 0 00-1.72-1.135 8.892 8.892 0 00-1.942-.698c-1.348-.318-2.76-.33-4.152-.193-1.394.141-2.777.416-4.157.7-1.381.285-2.764.58-4.163.773-1.398.189-2.82.272-4.223.113 1.407.129 2.82.013 4.21-.206 1.39-.223 2.762-.548 4.136-.864 1.375-.314 2.758-.622 4.167-.797 1.406-.17 2.854-.194 4.264.105a9.287 9.287 0 012.045.686c.653.31 1.265.704 1.83 1.148 1.134.89 2.086 1.973 2.971 3.08.884 1.114 1.72 2.238 2.61 3.33.435.551.888 1.09 1.332 1.634.454.539.901 1.08 1.362 1.612 1.778 2.18 3.637 4.3 5.446 6.472 1.803 2.173 3.55 4.431 4.904 6.934a26.525 26.525 0 011.724 3.887c.47 1.337.835 2.708 1.122 4.093.065.347.145.691.201 1.04l.172 1.045c.054.349.095.7.144 1.05l.068.524.054.527c.16 1.403.235 2.813.305 4.22-.102-1.406-.208-2.812-.398-4.209l-.066-.524-.08-.522c-.056-.347-.105-.697-.166-1.043l-.195-1.038c-.064-.346-.15-.688-.224-1.031a31.366 31.366 0 00-1.204-4.036 26.19 26.19 0 00-1.79-3.8c-1.39-2.436-3.162-4.627-5.004-6.75-1.85-2.12-3.758-4.202-5.593-6.352l.003-.003z"
          fill="#297C83"
        />
        <Path
          d="M74.436 84.342c-1.127-2.599-2.475-5.101-3.945-7.531-1.47-2.432-3.083-4.778-4.753-7.084-3.356-4.602-6.98-9.01-10.538-13.466 3.656 4.377 7.374 8.701 10.841 13.24 1.726 2.274 3.396 4.596 4.932 7.01 1.533 2.416 2.952 4.913 4.152 7.522.296.654.556 1.323.823 1.99.069.165.132.334.192.502l.183.506c.12.338.254.671.359 1.015l.334 1.024c.059.17.11.342.158.514l.15.517c.208.687.373 1.386.547 2.082.045.173.083.348.119.524l.11.527.11.528.055.263.044.265.18 1.06.044.265.036.266.068.534c.2 1.42.284 2.852.34 4.282.087 2.869-.22 5.711-.17 8.556.026 1.42.144 2.843.469 4.228.324 1.381.88 2.719 1.708 3.882-.854-1.144-1.444-2.476-1.8-3.859-.358-1.386-.508-2.818-.566-4.246-.114-2.859.13-5.713-.018-8.547-.087-1.416-.201-2.832-.43-4.23l-.08-.526-.04-.263-.051-.26-.2-1.044-.051-.262-.06-.258-.12-.517-.12-.517a8.04 8.04 0 00-.13-.514c-.187-.683-.364-1.369-.585-2.042l-.159-.507a9.743 9.743 0 00-.166-.504l-.352-1.002c-.111-.336-.25-.661-.376-.992l-.193-.494a10.33 10.33 0 00-.2-.492c-.279-.651-.55-1.305-.855-1.944h.004zM48.7 113.093c.72 1.023 1.33 2.111 1.872 3.224a44.775 44.775 0 011.463 3.397c.446 1.146.86 2.297 1.303 3.437.437 1.143.888 2.281 1.346 3.416 1.83 4.543 3.762 9.051 5.463 13.647-1.82-4.552-3.863-9.003-5.812-13.502a226.673 226.673 0 01-1.435-3.387c-.473-1.133-.92-2.277-1.39-3.401a44.428 44.428 0 00-1.53-3.312c-.558-1.075-1.178-2.115-1.894-3.078-.69-.979-1.483-1.884-2.399-2.644a10.474 10.474 0 00-3.073-1.782c-1.12-.422-2.314-.636-3.517-.746-1.205-.111-2.425-.094-3.644-.046-2.438.101-4.884.388-7.346.329-1.23-.026-2.46-.156-3.653-.459a10.29 10.29 0 01-3.339-1.505c1.027.669 2.17 1.15 3.362 1.414 1.19.27 2.413.366 3.634.361 2.443-.003 4.87-.352 7.323-.516 1.227-.08 2.462-.13 3.7-.048 1.236.082 2.481.27 3.67.684a11.084 11.084 0 013.299 1.801c.99.779 1.85 1.711 2.595 2.715l.001.001z"
          fill="#297C83"
        />
        <G opacity={0.35} fill="#06282D">
          <Path d="M151.748 244.668a3.947 3.947 0 00-.38-1.673c-.633-1.319-1.948-2.141-3.122-3.017-5.987-4.463-9.475-12.078-8.945-19.528-3.755 2.147-6.524 5.641-9.065 9.142-2.481 3.42-4.869 6.997-6.118 11.033-2.566 8.285-.021 17.191 2.517 25.484l.479.492-.01-6.268c-.006-3.975.06-8.207 2.243-11.528 4.456-6.778 14.444-5.928 22.403-4.141l-.002.004zM99.647 223.928c-1-.435-2.066.41-2.815 1.203-7.199 7.63-12.707 16.672-19.216 24.899-.562.711-1.136 1.418-1.72 2.117 3.085-1.299 6.19-2.55 9.315-3.754 3.609-1.39 7.825-2.665 11.257-1.18-.127-6.549 2.247-13.393 3.924-19.909.314-1.22.409-2.873-.745-3.377v.001zM62.55 227.79c1.606.193 3.369.496 4.395 1.746.236.287.408.586.53.894 3.395-4.094 5.036-9.994 6.267-15.375-8.905 3.964-18.03 7.985-27.75 8.725-2.428.185-4.896.166-7.253.786-1.88.495-3.606 1.375-5.208 2.474a155.968 155.968 0 0129.017.749l.002.001z" />
        </G>
        <Path
          d="M139.791 126.867c-2.737-7.313-7.38-14.61-14.73-17.251l-5.521.327c-2.52 0-5.72-.613-7.691-.736-8.522-.532-18.012-.755-24.457 4.845-4.561 3.964-6.57 10.036-8.382 15.799-2.191 6.963-4.393 14.431-2.334 21.433 1.433 4.87 4.796 8.94 8.456 12.458 3.954 3.801 8.792 7.297 14.277 7.336 3.5.025 6.842-1.371 10.303-1.889 4.996-.748 10.154.343 15.117-.596 8.284-1.568 14.741-8.821 17.014-16.939 2.275-8.118.901-16.89-2.054-24.787h.002z"
          fill="url(#paint0_radial_2916_739897)"
        />
        <Path
          d="M129.796 129.673l-3.522 1.079s-4.147 3.182-4.602 3.75c-.455.567-.171 2.386.454 3.181.625.796 2.443 1.988 3.58 1.761 1.137-.226 2.5-.738 4.147-.397 1.647.34 3.068.567 3.863.795.796.227 2.784-.114 3.75-.624.965-.512 2.045-1.137 1.079-2.898-.965-1.761-5.171-6.079-5.171-6.079l-3.579-.568h.001z"
          fill="#fff"
        />
        <Path
          d="M136.192 127.547l-.155-.179a12.484 12.484 0 00-.445-.492c-.396-.409-.991-.96-1.788-1.495a14.42 14.42 0 00-2.948-1.49c-1.153-.439-2.461-.803-3.865-1.095-.7-.148-1.393-.267-2.067-.37-.686-.101-1.42-.193-2.144-.363-.724-.165-1.45-.422-2.074-.797-.076-.05-.154-.098-.23-.146-.075-.049-.146-.105-.216-.157-.036-.027-.07-.051-.106-.081l-.107-.091c-.069-.062-.144-.119-.203-.187a3.648 3.648 0 01-1.069-2.359 2.453 2.453 0 01.211-1.177c.029-.075.071-.139.108-.2.039-.06.067-.117.109-.162.081-.092.139-.17.203-.221.124-.102.186-.149.186-.149l-.084.218c-.029.067-.04.163-.066.262-.014.049-.011.109-.017.167a.807.807 0 00-.004.185c.006.259.076.565.235.874.159.31.402.625.715.89.162.125.332.247.517.333.043.027.094.038.139.058l.069.028.08.028c.055.018.107.039.164.055l.171.048c.467.116.992.172 1.599.186.607.018 1.284-.002 2.056.027.781.033 1.591.123 2.407.296 1.633.338 3.139.961 4.378 1.746 1.244.781 2.208 1.731 2.854 2.624a7.97 7.97 0 011.169 2.289c.086.287.142.509.169.664.028.149.045.231.045.231l.004.002zM81.76 127.658s.178-.313.53-.865a21.82 21.82 0 011.662-2.22 20.108 20.108 0 013.01-2.874 16.313 16.313 0 014.577-2.479c.45-.137.89-.286 1.342-.377.224-.049.446-.102.669-.142l.666-.099c.443-.068.872-.091 1.271-.114l1.132-.049c.71-.034 1.335-.084 1.881-.213.071-.013.135-.034.202-.051.067-.016.133-.035.195-.057.06-.021.133-.04.186-.062l.165-.063a3.295 3.295 0 001.486-1.329c.2-.341.3-.682.326-.973.004-.037.009-.074.011-.108l-.002-.101c-.004-.066 0-.131-.008-.189-.022-.113-.03-.219-.056-.298l-.078-.247s.063.061.187.189c.064.063.118.157.198.267.037.056.063.122.1.192.018.035.034.072.053.11.015.039.027.08.042.121.118.337.175.795.094 1.313a4.012 4.012 0 01-.674 1.655c-.19.282-.437.551-.73.808l-.236.184c-.08.062-.157.108-.237.163-.08.055-.162.104-.246.152-.083.049-.168.101-.255.144-.699.37-1.483.605-2.261.784-.78.181-1.556.295-2.273.473l-.55.129c-.184.047-.367.105-.554.154-.373.093-.743.232-1.124.345a32.345 32.345 0 00-4.195 1.803 52.488 52.488 0 00-3.375 1.922c-.963.588-1.734 1.105-2.28 1.452-.537.359-.847.55-.847.55h-.004z"
          fill="#32194C"
        />
        <Path
          d="M119.359 148.679c-5.185-1.901-10.642-1.819-16.021-.572l-4.183.549c.982 3.582 3.429 6.822 6.798 8.385 3.369 1.564 7.632 1.261 10.519-1.075 1.009-.816 1.827-1.839 2.638-2.853 1.089-1.362 2.177-2.722 3.264-4.085-.95.419-2.038.008-3.014-.349h-.001z"
          fill="#1D0E30"
        />
        <Path
          d="M129.42 139.602a4.554 4.554 0 100-9.108 4.554 4.554 0 000 9.108z"
          fill="#1FD4FF"
        />
        <Path
          d="M128.551 139.517l.292.012.158.008c.058 0 .123-.005.191-.009.138-.006.297-.01.472-.043a4.31 4.31 0 001.221-.355c.447-.2.921-.505 1.342-.936a4.242 4.242 0 001.002-1.636c.047-.166.105-.328.131-.504.015-.088.036-.173.048-.261l.024-.269c.004-.044.01-.09.011-.135v-.137c-.003-.092 0-.183-.005-.274-.023-.182-.029-.369-.076-.551-.029-.185-.092-.365-.145-.549-.032-.09-.073-.177-.108-.267-.033-.091-.079-.176-.124-.262-.083-.177-.198-.337-.303-.505-.124-.154-.241-.315-.385-.455l-.103-.11-.114-.099-.114-.1a.918.918 0 00-.119-.095l-.247-.178-.265-.155a4.396 4.396 0 00-1.171-.426 4.377 4.377 0 00-1.244-.044l-.304.044-.297.074a.896.896 0 00-.145.043l-.144.049-.143.05-.137.063c-.186.075-.354.181-.528.277-.16.116-.327.221-.469.354a1.99 1.99 0 00-.214.196c-.066.07-.137.136-.2.208-.118.15-.245.293-.341.454-.111.152-.187.322-.277.483-.04.083-.07.169-.107.253l-.052.125c-.016.042-.026.087-.04.13l-.079.257c-.023.086-.035.173-.053.26-.043.172-.05.346-.069.517a4.251 4.251 0 00.317 1.891 4.38 4.38 0 00.892 1.371c.342.353.689.617 1 .786.151.096.295.158.421.217.063.027.12.058.174.079l.15.052.275.098-.289-.042-.16-.024c-.058-.011-.12-.03-.19-.047-.137-.035-.297-.073-.469-.144a4.356 4.356 0 01-1.191-.662 4.654 4.654 0 01-1.207-1.39l-.128-.23c-.039-.08-.074-.164-.11-.247-.034-.085-.079-.168-.105-.258l-.088-.271-.043-.138-.03-.143-.062-.292c-.018-.098-.025-.2-.037-.301-.009-.103-.028-.205-.024-.31 0-.21-.01-.424.019-.639.011-.108.019-.218.036-.327l.068-.328c.012-.055.021-.112.036-.166l.051-.164c.036-.109.067-.22.108-.329.094-.213.177-.436.303-.641.11-.216.254-.411.397-.613.076-.098.16-.19.241-.286a2.79 2.79 0 01.262-.271c.178-.182.384-.334.59-.493.218-.139.437-.286.678-.397l.178-.089.186-.074.188-.072c.062-.025.125-.048.191-.063l.393-.108.406-.07a5.363 5.363 0 011.666.044 5.356 5.356 0 011.561.584l.349.216.325.247c.054.04.105.084.153.131l.147.138.146.138.132.15c.182.193.329.41.48.622.13.224.265.443.361.678.053.115.105.229.142.349.039.119.082.236.116.355.057.241.118.478.14.717.039.237.034.477.04.709-.002.116-.015.231-.022.345l-.014.172c-.007.057-.019.111-.028.167l-.061.329c-.024.108-.06.213-.089.317-.053.21-.143.407-.221.599-.036.099-.093.187-.139.279-.049.09-.093.181-.147.266-.055.084-.111.166-.167.247l-.082.122-.093.113-.182.219c-.058.073-.131.133-.194.199-.066.063-.129.128-.195.189-.07.055-.138.111-.205.166a4.65 4.65 0 01-1.64.836c-.519.14-.981.187-1.352.166-.185.002-.348-.023-.489-.042-.07-.01-.134-.017-.194-.027l-.157-.038-.284-.069z"
          fill="#32194C"
        />
        <Path
          d="M129.337 138.246a2.99 2.99 0 100-5.979 2.99 2.99 0 000 5.979z"
          fill="#32194C"
        />
        <Path
          d="M138.839 137.347s-.236-.257-.643-.727c-.406-.466-.979-1.154-1.701-1.925-.723-.764-1.601-1.615-2.642-2.226-.133-.07-.261-.152-.397-.218l-.204-.099a1.73 1.73 0 00-.206-.093c-.14-.056-.277-.121-.424-.166l-.216-.078-.224-.064a8.444 8.444 0 00-.932-.209c-.323-.043-.652-.089-.992-.097a9.778 9.778 0 00-2.002.114c-.081.014-.163.023-.243.04l-.24.048c-.16.026-.315.072-.471.107-.156.037-.307.088-.459.127l-.452.148c-1.19.421-2.246 1.01-3.111 1.587a21.619 21.619 0 00-2.013 1.534c-.232.202-.416.359-.536.47-.122.108-.19.166-.19.166l.079-.239c.05-.159.135-.387.254-.681.242-.582.643-1.415 1.322-2.358a10.545 10.545 0 013.048-2.829 9.242 9.242 0 012.366-1.015 8.865 8.865 0 012.789-.315c.486.015.968.09 1.438.185.467.109.925.243 1.356.428l.321.138.311.158c.206.1.4.226.592.344.097.058.187.123.276.189l.265.195c.173.13.329.276.489.411a8.741 8.741 0 011.472 1.771c.376.593.656 1.167.882 1.694.445 1.056.674 1.932.827 2.539.15.607.212.95.212.95l-.001-.004zM139.087 137.963l-.127.148c-.085.097-.204.245-.378.418-.34.35-.861.852-1.658 1.297-.398.22-.871.416-1.41.536-.538.12-1.14.158-1.75.1-.612-.052-1.228-.193-1.834-.344-.603-.15-1.201-.311-1.781-.377l-.216-.018c-.071-.005-.14-.005-.21-.008a5.01 5.01 0 00-.428.017c-.304.021-.61.053-.914.086-.609.066-1.216.138-1.813.157-.597.02-1.176-.007-1.718-.119a4.54 4.54 0 01-1.423-.551 3.688 3.688 0 01-.953-.8 2.83 2.83 0 01-.471-.798c-.041-.12-.077-.224-.093-.32-.019-.094-.036-.173-.038-.239l-.014-.196.066.184c.018.06.055.13.095.212.036.084.095.172.157.27.133.192.318.408.573.607.254.199.575.383.952.524a4.31 4.31 0 001.266.268c.462.028.975-.009 1.515-.083.541-.074 1.119-.188 1.74-.291.31-.05.633-.097.968-.131.159-.018.353-.029.539-.032.093.003.187.003.279.008l.276.022c.731.084 1.374.287 1.966.467.59.182 1.135.352 1.654.449a5.227 5.227 0 002.768-.166 8.396 8.396 0 001.786-.879c.207-.125.359-.236.465-.306l.162-.109.002-.003z"
          fill="#32194C"
        />
        <Path
          d="M90.431 129.673l3.523 1.079s4.147 3.182 4.602 3.75c.455.567.17 2.386-.455 3.181-.625.796-2.443 1.988-3.58 1.761-1.136-.226-2.5-.738-4.147-.397-1.647.34-3.067.567-3.863.795-.796.227-2.784-.114-3.75-.624-.965-.512-2.044-1.137-1.079-2.898.966-1.761 5.171-6.079 5.171-6.079l3.58-.568h-.002z"
          fill="#fff"
        />
        <Path
          d="M90.808 139.602a4.554 4.554 0 100-9.108 4.554 4.554 0 000 9.108z"
          fill="#1FD4FF"
        />
        <Path
          d="M88.813 139.14l-.269-.115-.148-.065c-.053-.026-.109-.06-.171-.095-.123-.069-.269-.147-.416-.261-.309-.206-.65-.52-.98-.946a4.671 4.671 0 01-.807-1.655l-.065-.256c-.016-.087-.028-.177-.042-.267-.011-.091-.032-.183-.035-.276l-.014-.284-.007-.145.008-.145.015-.298c.01-.1.028-.2.043-.302.018-.101.027-.205.057-.305.053-.201.1-.412.184-.612.04-.101.075-.205.12-.307l.15-.299c.026-.049.05-.101.078-.15l.092-.145c.062-.096.121-.196.19-.29.145-.181.284-.375.458-.541.163-.179.353-.331.543-.489.099-.075.203-.142.306-.213a2.74 2.74 0 01.324-.194c.217-.13.457-.224.696-.324.247-.079.496-.164.758-.209l.195-.041.2-.023.2-.021c.066-.009.134-.014.2-.013l.409-.002c.135.012.272.025.409.036a5.386 5.386 0 011.6.472c.503.253.963.581 1.356.968l.281.299.25.323c.043.052.08.109.115.166l.107.171.104.171.088.179c.126.234.213.482.303.724.069.251.142.497.174.749.021.126.041.25.047.375.007.126.019.249.02.373-.008.247-.01.491-.05.728-.024.24-.09.469-.144.696-.033.111-.075.22-.112.328l-.056.161c-.02.053-.047.103-.07.155l-.145.302c-.05.098-.111.19-.167.284-.105.19-.243.356-.369.522-.06.086-.138.156-.205.233-.07.074-.138.151-.212.22l-.225.196-.11.095-.118.085c-.079.054-.156.11-.233.163-.076.056-.161.095-.24.142-.08.045-.157.092-.237.132l-.242.108a4.66 4.66 0 01-1.8.384 4.334 4.334 0 01-1.35-.189c-.18-.046-.33-.113-.46-.167-.065-.028-.128-.051-.18-.076l-.144-.078-.256-.14.279.087.15.048c.058.015.121.027.188.042.136.029.29.067.466.08a4.3 4.3 0 001.271-.027 4.41 4.41 0 001.539-.558 4.246 4.246 0 001.39-1.322c.088-.148.188-.29.257-.454.037-.079.08-.157.114-.239l.092-.254c.016-.043.033-.083.046-.127l.034-.132c.022-.089.048-.176.067-.266.026-.183.067-.364.07-.553.02-.186.005-.376 0-.567-.008-.095-.024-.19-.035-.287-.008-.096-.03-.19-.054-.285-.034-.191-.104-.376-.162-.565-.08-.181-.15-.367-.255-.54l-.07-.133-.085-.125-.084-.126a.74.74 0 00-.09-.121l-.193-.237-.216-.218a4.383 4.383 0 00-1.022-.714 4.381 4.381 0 00-1.19-.363l-.306-.036c-.103-.002-.204-.003-.305-.006a.965.965 0 00-.152.004l-.151.011-.15.01-.15.026c-.2.024-.39.083-.58.131-.186.07-.373.13-.546.221-.088.04-.177.081-.257.134-.082.051-.167.097-.247.148-.153.115-.312.22-.446.351-.147.118-.263.263-.393.396-.06.069-.111.145-.167.216l-.084.108c-.026.037-.048.076-.072.114l-.142.229c-.044.078-.078.16-.119.237-.086.156-.137.322-.199.482a4.244 4.244 0 00-.183 1.909c.076.597.27 1.126.508 1.555.24.428.505.774.762 1.018.12.131.245.229.351.318.054.043.102.087.149.121l.13.09.24.165v.002z"
          fill="#32194C"
        />
        <Path
          d="M90.748 138.253a2.989 2.989 0 100-5.978 2.989 2.989 0 000 5.978z"
          fill="#32194C"
        />
        <Path
          d="M81.14 137.963l.162.109c.107.071.259.181.465.307a8.459 8.459 0 001.787.879c.78.27 1.73.379 2.767.166.52-.098 1.066-.267 1.655-.45.591-.18 1.234-.382 1.965-.466l.276-.023c.093-.005.186-.005.279-.007.186.001.38.013.54.031.334.034.656.081.968.132.62.103 1.198.217 1.74.29a7.79 7.79 0 001.515.084c.46-.024.89-.129 1.266-.269s.698-.323.951-.523a2.75 2.75 0 00.573-.607c.062-.099.122-.186.157-.27.04-.082.077-.152.095-.213l.066-.184-.014.197c-.001.066-.019.143-.038.238-.015.096-.052.2-.093.321-.09.234-.235.517-.47.798a3.726 3.726 0 01-.954.799c-.399.237-.875.443-1.423.552a7.278 7.278 0 01-1.718.119c-.596-.019-1.203-.092-1.813-.157-.304-.033-.61-.065-.913-.087a5.446 5.446 0 00-.429-.016c-.07.004-.14.004-.21.008l-.216.017c-.58.065-1.177.227-1.78.378-.605.152-1.222.291-1.834.343a5.661 5.661 0 01-1.75-.1 5.203 5.203 0 01-1.41-.536 7.076 7.076 0 01-1.659-1.296c-.174-.174-.294-.321-.378-.418-.08-.096-.126-.148-.126-.148v.002z"
          fill="#32194C"
        />
        <Path
          d="M81.001 137.553s.086-.383.277-1.062c.196-.678.484-1.658.993-2.838.255-.59.572-1.229.981-1.893.103-.166.21-.335.326-.501.113-.168.236-.336.365-.504.124-.171.267-.335.407-.504.144-.168.3-.335.46-.501.166-.16.328-.328.51-.481l.27-.235.287-.223c.19-.153.4-.286.605-.428.107-.067.216-.132.325-.198.109-.066.219-.13.334-.189l.346-.18.363-.162.183-.08.189-.07c.127-.046.253-.096.384-.137a8.434 8.434 0 011.65-.346 7.574 7.574 0 011.73.039c.142.018.283.052.424.079a6.751 6.751 0 011.201.365c.51.206.982.468 1.406.765.424.298.799.627 1.128.97a9.332 9.332 0 011.514 2.12c.367.703.632 1.376.829 1.997.394 1.241.545 2.262.63 2.966.041.353.064.628.076.812l.016.284-.55-.942c-.356-.598-.868-1.464-1.561-2.433a16.997 16.997 0 00-1.187-1.486 9.616 9.616 0 00-1.506-1.365c-1.107-.807-2.422-1.229-3.848-1.086-.36.042-.718.105-1.074.198-.089.023-.176.053-.265.078l-.133.038-.13.047-.261.091-.258.106a3.925 3.925 0 00-.254.11l-.253.115c-.162.089-.33.162-.487.257l-.239.135-.23.144c-.157.091-.3.2-.45.298-.144.105-.286.208-.427.317-.138.114-.281.219-.413.337-.134.114-.267.226-.394.346-.13.114-.253.234-.376.351-.49.471-.933.949-1.33 1.401-.797.907-1.428 1.699-1.876 2.238-.447.542-.707.837-.707.837v.003z"
          fill="#32194C"
        />
      </G>
      <Defs>
        <RadialGradient
          id="paint0_radial_2916_739897"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(108.188 134.491) scale(43.4819)">
          <Stop stopColor="#44B9A5" />
          <Stop offset={0.4} stopColor="#43979C" />
          <Stop offset={0.88} stopColor="#00353E" />
        </RadialGradient>
        <ClipPath id="clip0_2916_739897">
          <Path fill="#fff" d="M0 0H212.35V279.983H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};