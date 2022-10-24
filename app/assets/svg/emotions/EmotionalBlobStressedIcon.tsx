import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

import { WINDOW_WIDTH } from '../../../constants/window';
import { ISvgProps } from '../../../utils/types';

export const EmotionalBlobStressedIcon = ({
  width = 375,
  height = 495,
}: ISvgProps) => {
  return (
    <Svg
      width={WINDOW_WIDTH}
      height={(height * WINDOW_WIDTH) / width}
      viewBox="0 0 375 495"
      fill="none">
      <G clipPath="url(#clip0_2913_366066)">
        <Path
          d="M190.3 0C140.438 0 52.837 40.395 0 98.324v396.079h375V95.826C324.355 39.236 241.675 0 190.3 0z"
          fill="#6C8289"
        />
        <Path
          d="M266.688 106.562s1.051 11.863-3.6 17.287c-4.651 5.423-11.519 10.221-16.855 10.277-5.336.059-19.338-5.487-20.497-12.661-4.347-26.911 10.882-24.39 14.698-25.463 3.816-1.071 24.673 10.798 26.254 10.56zM108.312 106.562s-1.051 11.863 3.6 17.287c4.651 5.423 11.519 10.221 16.855 10.277 5.335.059 19.337-5.487 20.496-12.661 4.347-26.911-10.882-24.39-14.698-25.463-3.815-1.071-24.673 10.798-26.253 10.56z"
          fill="#fff"
        />
        <Path
          d="M244.099 130.904c8.061 0 14.596-6.535 14.596-14.596s-6.535-14.595-14.596-14.595-14.595 6.534-14.595 14.595 6.534 14.596 14.595 14.596z"
          fill="#D578FF"
        />
        <Path
          d="M229.506 116.541l.027.236c.022.155.035.388.088.688.086.603.262 1.487.623 2.571.19.538.414 1.132.725 1.747.306.617.672 1.269 1.135 1.919a14.456 14.456 0 003.814 3.717 13.678 13.678 0 002.719 1.399c.989.377 2.057.664 3.177.8 1.119.141 2.293.157 3.476.004a13.819 13.819 0 001.774-.339 14.403 14.403 0 001.75-.59 13.501 13.501 0 005.942-4.823 13.367 13.367 0 002.342-7.769 13.365 13.365 0 00-2.587-7.69 13.501 13.501 0 00-6.092-4.633 14.708 14.708 0 00-1.767-.533 13.466 13.466 0 00-1.784-.282 13.59 13.59 0 00-3.473.116 13.466 13.466 0 00-3.15.901c-.977.41-1.875.913-2.673 1.485a14.39 14.39 0 00-4.768 5.789 14.888 14.888 0 00-.67 1.769 14.892 14.892 0 00-.54 2.589c-.042.302-.05.535-.066.692l-.02.237-.017-.237c-.005-.157-.035-.39-.035-.697a14.266 14.266 0 01.656-4.616c.218-.691.5-1.434.89-2.194a15.05 15.05 0 016.43-6.526 14.99 14.99 0 013.529-1.329 15.312 15.312 0 014.047-.423 15.338 15.338 0 014.29.718 15.773 15.773 0 019.018 7.41c.208.364.388.747.571 1.13.167.39.337.78.474 1.184.284.806.52 1.637.669 2.492.152.854.238 1.723.256 2.601a17.02 17.02 0 01-.174 2.607 15.5 15.5 0 01-.59 2.512c-.126.408-.283.804-.437 1.2-.171.388-.339.774-.535 1.146a15.78 15.78 0 01-8.778 7.694c-.709.245-1.423.441-2.137.584a15.59 15.59 0 01-2.129.269 15.394 15.394 0 01-4.058-.295 14.99 14.99 0 01-3.569-1.216 15.048 15.048 0 01-6.634-6.318 14.375 14.375 0 01-.959-2.165 14.48 14.48 0 01-.524-1.902 14.213 14.213 0 01-.278-2.69c-.009-.308.011-.542.013-.698l.007-.238.002-.003z"
          fill="#32194C"
        />
        <Path
          d="M130.9 130.905c8.061 0 14.595-6.535 14.595-14.596s-6.534-14.595-14.595-14.595-14.595 6.534-14.595 14.595 6.534 14.596 14.595 14.596z"
          fill="#D578FF"
        />
        <Path
          d="M145.494 116.541l.007.238c0 .158.022.392.013.698a14.061 14.061 0 01-.802 4.592c-.24.683-.546 1.417-.96 2.165a15.059 15.059 0 01-6.634 6.318 14.851 14.851 0 01-3.568 1.216 15.404 15.404 0 01-4.058.295 15.282 15.282 0 01-2.129-.269 16.703 16.703 0 01-2.137-.584 15.775 15.775 0 01-8.778-7.694c-.196-.372-.365-.758-.535-1.146-.154-.396-.311-.792-.438-1.2a15.498 15.498 0 01-.589-2.512 16.894 16.894 0 01-.174-2.607c.02-.876.104-1.747.256-2.601.149-.855.385-1.686.669-2.492.139-.404.307-.794.474-1.184.183-.383.362-.764.571-1.13a15.774 15.774 0 019.018-7.41 16.619 16.619 0 012.153-.517c.72-.11 1.432-.192 2.137-.201a15.4 15.4 0 014.047.423c1.278.3 2.461.769 3.528 1.329a14.8 14.8 0 012.848 1.941 15.09 15.09 0 013.583 4.585c.39.76.67 1.503.89 2.194a14.163 14.163 0 01.655 4.616c0 .307-.029.542-.034.697l-.017.237-.02-.237c-.017-.155-.024-.388-.066-.692a14.987 14.987 0 00-.54-2.589 14.425 14.425 0 00-.67-1.769 14.084 14.084 0 00-1.073-1.953 14.436 14.436 0 00-3.695-3.836 13.638 13.638 0 00-2.674-1.485 13.486 13.486 0 00-3.149-.901 13.694 13.694 0 00-3.474-.116 13.76 13.76 0 00-1.783.282c-.593.138-1.185.317-1.767.533a13.49 13.49 0 00-6.092 4.633 13.353 13.353 0 00-.245 15.459 13.493 13.493 0 005.941 4.823 14.77 14.77 0 001.751.59c.591.146 1.181.275 1.774.339 1.183.153 2.357.137 3.476-.004a13.516 13.516 0 003.176-.8 13.55 13.55 0 002.72-1.399 14.441 14.441 0 003.814-3.717c.463-.65.829-1.302 1.135-1.919.311-.615.535-1.209.725-1.747.361-1.084.536-1.968.623-2.571.053-.3.065-.533.087-.688l.028-.236.002.003zM242.99 126.35c5.542 0 10.034-4.493 10.034-10.035 0-5.541-4.492-10.034-10.034-10.034-5.541 0-10.034 4.493-10.034 10.034 0 5.542 4.493 10.035 10.034 10.035z"
          fill="#32194C"
        />
        <Path
          d="M132.01 126.35c5.541 0 10.034-4.493 10.034-10.035 0-5.541-4.493-10.034-10.034-10.034-5.542 0-10.034 4.493-10.034 10.034 0 5.542 4.492 10.035 10.034 10.035zM268.758 79.102s-2.633-.052-6.524-.797a52.056 52.056 0 01-6.608-1.72 47.52 47.52 0 01-3.69-1.4 67.1 67.1 0 01-3.624-1.71c-1.14-.566-2.171-1.108-3.103-1.542-.934-.438-1.776-.811-2.582-1.071-.101-.033-.203-.066-.302-.1-.103-.037-.2-.056-.3-.085-.101-.03-.202-.057-.303-.086-.102-.024-.205-.05-.318-.07-.441-.088-.978-.14-1.547-.194-1.154-.102-2.463-.209-3.734-.582-1.289-.377-2.314-1.018-3.06-1.765a4.902 4.902 0 01-.831-1.123 4.09 4.09 0 01-.381-1.069c-.062-.333-.06-.645-.135-.855-.064-.213-.136-.36-.207-.441-.035-.043-.072-.06-.097-.059-.013.002-.024.007-.03.02-.009.01-.007.022-.007.035.002.05.022.08.018.079.004 0 .021-.048.087-.127a.209.209 0 01.064-.058.281.281 0 01.095-.05.65.65 0 01.256-.018c.187.018.392.082.593.174.211.088.365.233.559.359.199.123.432.232.694.307.262.074.555.116.842.112a4.592 4.592 0 001.798-.43c.138-.07.313-.145.487-.23.182-.087.367-.177.553-.268.392-.194.832-.412 1.348-.643a14.283 14.283 0 011.849-.683c.18-.053.374-.1.57-.148.196-.044.397-.08.6-.117.204-.035.411-.08.616-.101.206-.022.415-.044.624-.068 1.685-.16 3.422.017 5.067.403 1.653.386 3.187 1 4.621 1.708a31.911 31.911 0 013.765 2.264 47.585 47.585 0 013.151 2.376 52.082 52.082 0 014.975 4.677c2.703 2.897 4.147 5.097 4.147 5.097l.004-.001zM106.241 79.101s1.445-2.2 4.147-5.097a51.723 51.723 0 014.975-4.677 46.299 46.299 0 013.152-2.377 31.867 31.867 0 013.764-2.263c1.432-.71 2.968-1.322 4.622-1.708 1.644-.387 3.382-.564 5.066-.403.209.022.418.044.625.068.205.022.413.066.615.1.203.039.405.075.6.118.196.047.391.095.57.148.732.209 1.326.454 1.849.683.517.23.956.45 1.348.643l.553.269c.176.086.352.16.487.229a4.594 4.594 0 001.798.43c.288.004.581-.038.842-.112.262-.077.495-.185.694-.307.193-.127.348-.27.559-.36.201-.089.406-.155.593-.173a.646.646 0 01.256.018.277.277 0 01.096.05c.029.016.047.04.064.058.066.079.082.126.086.126-.004 0 .016-.029.018-.078 0-.013 0-.028-.007-.035-.006-.013-.017-.018-.03-.02-.027 0-.064.016-.097.058-.071.08-.142.23-.206.442-.076.208-.074.522-.136.855-.07.33-.187.696-.381 1.07a4.876 4.876 0 01-.831 1.122c-.745.747-1.771 1.388-3.06 1.765-1.271.373-2.578.48-3.733.582-.57.053-1.104.106-1.548.194-.113.02-.216.046-.318.07-.101.029-.202.056-.302.086-.101.03-.198.047-.301.084l-.302.1c-.805.26-1.648.634-2.582 1.072-.93.434-1.962.978-3.103 1.542a65.758 65.758 0 01-3.624 1.71 46.043 46.043 0 01-3.689 1.4 51.705 51.705 0 01-6.609 1.72c-3.891.745-6.524.796-6.524.796l.004.002zM225.191 107.891l-.044.795c-.024.52-.101 1.282-.086 2.267 0 .491-.024 1.034.018 1.63.035.595.041 1.237.128 1.924l.112 1.062c.059.363.117.736.18 1.121.049.384.15.772.232 1.171l.132.605.168.609.172.623c.07.207.14.416.209.626.13.425.304.843.471 1.269.353.844.767 1.705 1.276 2.503.062.101.126.2.194.293.066.095.132.191.198.273.154.192.309.385.467.579.161.207.333.386.502.58.164.194.347.375.527.56.723.74 1.529 1.44 2.408 2.082a21.382 21.382 0 006.061 3.073 21.764 21.764 0 007.177 1.04 19.097 19.097 0 007.021-1.511 22.046 22.046 0 005.762-3.633c.102-.091.209-.179.307-.272l.295-.282.586-.557c.192-.187.366-.39.55-.581.177-.195.364-.382.534-.582.167-.201.332-.403.496-.602.163-.2.335-.394.478-.604.15-.206.301-.411.447-.614.075-.101.148-.203.222-.304l.201-.313a25.29 25.29 0 002.532-4.929c.141-.403.295-.793.422-1.181.117-.39.23-.773.342-1.143.102-.373.181-.741.269-1.098.095-.356.152-.705.213-1.044.265-1.353.34-2.545.399-3.523.02-.978.022-1.745-.022-2.263l-.042-.795.181.775c.132.507.26 1.269.394 2.261.097.994.201 2.225.12 3.658-.014.359-.025.731-.073 1.112-.042.381-.075.778-.132 1.183-.067.404-.139.82-.21 1.245-.084.425-.194.855-.295 1.3a24.765 24.765 0 01-2.172 5.586c-.062.121-.126.242-.19.363-.072.117-.141.236-.213.353-.142.238-.287.476-.432.718-.139.246-.309.474-.47.711-.165.236-.33.472-.495.712-.17.236-.36.461-.543.694-.187.229-.365.47-.566.694l-.612.672c-.102.113-.207.225-.311.339-.104.111-.216.218-.324.327a22.895 22.895 0 01-6.359 4.47 20.6 20.6 0 01-8.218 1.926 22.717 22.717 0 01-8.28-1.347 22.357 22.357 0 01-6.757-3.868 20.493 20.493 0 01-3.114-3.255c-.173-.233-.354-.462-.504-.692-.077-.116-.156-.229-.233-.345l-.115-.17a3.687 3.687 0 01-.128-.196c-.086-.133-.159-.262-.231-.388a5.647 5.647 0 01-.203-.381c-1.016-2.014-1.503-3.986-1.785-5.793-.035-.226-.068-.449-.103-.669-.022-.221-.042-.439-.062-.655-.037-.432-.09-.85-.092-1.258l-.034-1.187c.005-.382.022-.754.033-1.111.005-.714.095-1.375.148-1.981.044-.608.154-1.156.231-1.646.139-.987.344-1.734.455-2.245.119-.506.184-.775.184-.775l-.004.009z"
          fill="#32194C"
        />
        <Path
          d="M149.81 107.891l.183.775c.112.509.317 1.257.456 2.244.075.493.185 1.04.231 1.647.054.606.142 1.267.148 1.981.011.357.025.728.033 1.111-.011.385-.024.78-.035 1.187-.002.41-.055.825-.092 1.258l-.062.655-.102.668c-.284 1.808-.769 3.78-1.786 5.794a5.899 5.899 0 01-.203.381 7.724 7.724 0 01-.359.584l-.115.17-.233.344c-.148.231-.331.46-.503.693-.17.236-.359.459-.548.684a20.433 20.433 0 01-2.567 2.571 22.35 22.35 0 01-6.756 3.867 22.721 22.721 0 01-8.28 1.348 20.542 20.542 0 01-8.218-1.926 22.88 22.88 0 01-6.359-4.47c-.109-.11-.22-.216-.325-.328-.104-.113-.206-.227-.311-.338l-.611-.672c-.2-.226-.379-.465-.566-.694-.183-.233-.372-.458-.544-.694a92.26 92.26 0 01-.494-.713c-.162-.236-.332-.465-.471-.71l-.432-.718c-.072-.119-.141-.236-.213-.353l-.19-.363a24.693 24.693 0 01-2.172-5.586c-.1-.445-.212-.876-.294-1.3l-.211-1.245c-.059-.405-.09-.802-.132-1.183-.049-.381-.058-.753-.073-1.112-.081-1.433.024-2.664.121-3.658.133-.993.262-1.754.393-2.262l.182-.774-.042.795c-.044.516-.042 1.285-.022 2.263.056.978.133 2.17.399 3.523.06.338.117.688.212 1.043.09.356.167.726.269 1.099l.343 1.143c.126.388.278.778.421 1.181a25.374 25.374 0 002.532 4.929l.202.313c.073.101.148.201.221.304l.447.613c.145.211.315.403.478.605l.496.602c.17.2.357.386.535.582.183.193.355.396.549.581l.586.556.295.282c.099.094.205.182.308.273 1.658 1.439 3.599 2.712 5.762 3.633a19.127 19.127 0 007.02 1.511 21.7 21.7 0 007.178-1.04 21.422 21.422 0 006.061-3.073 19.42 19.42 0 002.407-2.082c.182-.185.363-.368.528-.56.168-.192.34-.372.502-.581.157-.194.313-.386.466-.578.066-.083.132-.178.198-.273.068-.093.13-.192.194-.293.509-.798.923-1.659 1.277-2.503.166-.429.34-.844.47-1.269l.209-.626.172-.623.168-.61.132-.604c.083-.399.183-.787.233-1.172l.179-1.12.112-1.062c.09-.687.093-1.331.128-1.925.044-.595.018-1.139.018-1.629.015-.985-.062-1.747-.086-2.267l-.044-.795-.003-.009zM271.952 119.505s-.156-.189-.443-.542c-.29-.357-.709-.888-1.233-1.578-.523-.694-1.157-1.533-1.884-2.494-.364-.48-.758-.985-1.17-1.516-.425-.52-.853-1.081-1.331-1.628-.459-.566-.98-1.113-1.494-1.692-.546-.549-1.088-1.13-1.694-1.668l-.445-.418a70.14 70.14 0 00-.472-.395c-.158-.132-.315-.266-.474-.401l-.238-.202-.253-.188c-.339-.249-.67-.511-1.016-.762a74.869 74.869 0 01-1.077-.721c-.174-.128-.375-.227-.562-.343l-.571-.338c-.37-.24-.784-.433-1.185-.645l-.604-.319c-.204-.106-.423-.19-.632-.289l-.637-.291c-.214-.097-.416-.2-.659-.295a70.869 70.869 0 00-5.757-2.192c-1.963-.642-3.867-1.142-5.673-1.442-1.805-.299-3.494-.36-5.037-.2-.097.01-.198.01-.291.027l-.28.05-.563.09c-.181.038-.357.09-.538.131l-.269.064-.136.032-.124.042a39.85 39.85 0 01-.502.16c-.174.072-.348.144-.52.213l-.262.106-.263.129a86.53 86.53 0 01-.526.25c-1.401.722-2.728 1.581-3.916 2.408a49.638 49.638 0 00-3.172 2.403l-.34.274c-.108.094-.216.183-.321.273-.21.18-.414.352-.61.518-.377.343-.741.649-1.043.941l-.44.412c-.139.13-.258.257-.377.372-.232.233-.438.429-.588.597-.311.332-.479.509-.479.509s.055-.232.172-.681c.055-.227.144-.496.249-.82.055-.161.108-.339.176-.52l.223-.584c.154-.418.361-.861.579-1.357.113-.246.238-.496.368-.76l.199-.403.22-.408a31.395 31.395 0 012.283-3.659c.947-1.305 2.071-2.69 3.547-4.06.192-.168.388-.336.584-.506.099-.086.2-.17.299-.257l.325-.249c.22-.165.44-.333.672-.498l.755-.478.192-.119.196-.104.396-.205c.265-.136.534-.277.809-.405.28-.113.56-.227.844-.34l.43-.169c.145-.055.291-.093.438-.14 2.347-.748 4.905-1.026 7.423-.878 2.523.148 5.028.67 7.447 1.461 2.421.793 4.642 1.817 6.674 2.946.253.13.52.3.78.456.26.16.518.319.776.476.255.163.515.312.76.486.244.175.486.353.727.527.478.353.958.69 1.392 1.084.22.19.439.38.655.57.215.192.438.367.634.576.401.403.793.804 1.175 1.2.369.41.711.833 1.053 1.241l.253.306c.079.106.156.212.233.318l.454.632c.148.209.296.416.437.623l.392.635c.533.829.954 1.67 1.362 2.466.37.815.727 1.588 1 2.342.299.747.524 1.471.747 2.15.207.681.39 1.324.548 1.924.311 1.203.538 2.24.714 3.089.174.85.302 1.513.386 1.962l.125.69-.002-.002z"
          fill="#32194C"
        />
        <Path
          d="M103.048 119.505l.124-.69c.085-.451.213-1.112.387-1.961.177-.85.403-1.886.714-3.089.157-.601.34-1.243.547-1.925.224-.677.449-1.4.747-2.149.275-.756.63-1.529 1-2.342.408-.797.831-1.637 1.362-2.467l.392-.635c.141-.209.29-.414.438-.623l.454-.631.233-.319.252-.306c.341-.408.685-.831 1.053-1.241a83.76 83.76 0 011.176-1.2c.196-.208.419-.384.633-.576l.656-.57c.434-.393.913-.73 1.391-1.084l.727-.527c.246-.174.504-.322.76-.485l.776-.476c.26-.156.528-.326.781-.456 2.034-1.13 4.255-2.154 6.674-2.946 2.419-.791 4.923-1.313 7.447-1.462 2.517-.146 5.077.13 7.423.88.146.047.293.084.437.139.145.056.288.111.431.168l.844.34c.274.127.544.27.809.405.132.068.264.138.396.205l.195.105.193.119.754.477c.233.165.451.334.672.499l.326.249.299.256c.195.17.39.34.584.507 1.475 1.372 2.598 2.754 3.546 4.06a31.514 31.514 0 012.284 3.658l.219.408.2.403c.128.264.255.515.368.76.218.498.423.939.579 1.357l.223.584c.07.183.123.361.178.52.104.324.196.593.249.82.117.449.172.682.172.682l-.48-.51c-.15-.168-.355-.364-.588-.596-.117-.116-.238-.244-.377-.372-.139-.13-.286-.267-.439-.412-.302-.293-.667-.599-1.044-.941l-.61-.518-.32-.273-.341-.275a51.655 51.655 0 00-3.171-2.402c-1.19-.828-2.518-1.687-3.917-2.408l-.525-.251-.264-.128-.262-.106-.52-.213a17.01 17.01 0 01-.502-.16l-.124-.043-.136-.031-.269-.064c-.181-.042-.355-.094-.538-.132l-.562-.09-.28-.05c-.094-.016-.194-.018-.291-.027-1.544-.16-3.232-.099-5.038.2-1.805.3-3.709.8-5.672 1.443a70.274 70.274 0 00-5.757 2.192c-.244.095-.443.197-.659.294l-.638.291c-.21.099-.43.184-.631.29l-.605.318c-.401.213-.814.405-1.184.645-.191.113-.381.225-.571.339-.187.115-.389.212-.563.342-.358.245-.717.485-1.076.721-.346.251-.678.513-1.017.762l-.252.189-.238.201c-.16.134-.317.268-.474.401l-.473.396-.445.417c-.606.539-1.148 1.119-1.694 1.668-.514.579-1.034 1.126-1.494 1.692-.479.548-.908 1.108-1.331 1.628-.412.531-.804 1.036-1.17 1.516-.727.961-1.36 1.802-1.884 2.494-.524.69-.943 1.221-1.232 1.578l-.443.542-.004.002z"
          fill="#32194C"
        />
        <Path
          d="M245.101 84.728s-5.824 1.174-12.539-.02a35.237 35.237 0 01-4.673-1.175c-.71-.231-1.375-.47-2.008-.711-.647-.245-1.326-.527-1.914-.916a4.637 4.637 0 01-.785-.642 3.259 3.259 0 01-.555-.745c-.267-.502-.366-.976-.359-1.355.004-.378.099-.643.181-.808.037-.084.079-.14.103-.181l.038-.059.009.066c.008.044.011.106.035.187.037.16.121.39.289.617a2.18 2.18 0 001.246.81c.192.047.399.078.622.096.449.039.972.017 1.617.004a38.097 38.097 0 012.122.024c1.491.058 3.113.209 4.792.507 6.715 1.194 11.777 4.303 11.777 4.303l.002-.002zM129.898 84.728s5.063-3.11 11.778-4.303a35.382 35.382 0 014.792-.507c.743-.03 1.461-.035 2.122-.024.644.015 1.17.035 1.617-.004.223-.018.43-.05.622-.097a2.173 2.173 0 001.245-.81c.169-.226.253-.457.29-.616.023-.08.027-.143.034-.187l.009-.066.039.059c.024.038.066.097.102.181.081.165.176.43.182.808.007.379-.092.853-.359 1.355a3.289 3.289 0 01-.555.745 4.756 4.756 0 01-.785.642c-.586.39-1.266.67-1.914.916-.632.242-1.296.482-2.009.71a35.22 35.22 0 01-4.672 1.176c-6.715 1.194-12.54.02-12.54.02l.002.002z"
          fill="#435B60"
        />
        <Path
          d="M156.707 178.654c1.659-1.718 4.565-1.509 6.643-.334 2.078 1.176 3.611 3.095 5.371 4.71 7.459 6.85 19.731 7.714 28.077 1.974 2.704-1.861 5.136-4.373 8.339-5.091 5.407-1.21 10.623 3.131 16.162 3.016-.622-6.449-6.555-11.548-12.947-12.605-6.392-1.056-12.957 1.287-18.312 4.933-2.756 1.877-5.867 4.226-9.068 3.294-2.695-.784-4.186-3.582-6.277-5.453-4.662-4.169-13.068-2.792-16.155 2.648"
          fill="#32194C"
        />
        <Path
          d="M223.438 182.053l-.657-.544-1.868-1.566a85.807 85.807 0 00-2.965-2.382 40.873 40.873 0 00-1.886-1.359 28.893 28.893 0 00-2.162-1.345c-.381-.222-.78-.422-1.183-.63-.205-.097-.41-.194-.619-.291-.207-.103-.419-.178-.63-.271a17.8 17.8 0 00-2.684-.865c-1.866-.445-3.9-.56-5.762-.153a8.652 8.652 0 00-2.602 1.012c-.81.473-1.624 1.137-2.489 1.947-.869.814-1.776 1.77-2.83 2.797a29.524 29.524 0 01-1.736 1.573 18.762 18.762 0 01-2.078 1.498c-.749.465-1.55.884-2.416 1.232-.866.346-1.807.612-2.803.749-.994.138-2.049.138-3.082-.038a9.608 9.608 0 01-2.884-.983 11.726 11.726 0 01-2.237-1.55 17.539 17.539 0 01-1.663-1.671c-.963-1.104-1.721-2.146-2.435-3.056-.709-.912-1.366-1.681-2.001-2.238-.638-.56-1.229-.908-1.89-1.086-.648-.181-1.423-.183-2.234-.033-.813.154-1.646.431-2.448.766-.401.163-.8.348-1.19.525l-.573.273-.555.277c-.727.369-1.406.743-2.034 1.107a40.816 40.816 0 00-3.159 2.047 44.074 44.074 0 00-1.926 1.462c-.432.349-.661.536-.661.536s.144-.254.439-.734c.297-.476.749-1.172 1.394-2.034a30.475 30.475 0 014.365-4.704c.168-.145.339-.292.511-.438l.534-.439c.367-.29.744-.588 1.159-.883.823-.59 1.764-1.176 2.893-1.657a10.178 10.178 0 011.864-.584 8.61 8.61 0 012.179-.171 8.616 8.616 0 012.287.44c.744.253 1.445.599 2.086.992 1.287.793 2.338 1.753 3.283 2.677.945.929 1.798 1.846 2.628 2.615.824.769 1.626 1.359 2.312 1.641.345.143.665.227.984.251.322.027.661.012 1.04-.057a5.89 5.89 0 001.234-.379c.439-.189.899-.43 1.362-.718.463-.289.928-.615 1.381-.978.439-.349.924-.774 1.41-1.212.972-.875 2.006-1.86 3.171-2.811 1.17-.948 2.496-1.876 4.01-2.558a13.849 13.849 0 014.64-1.182 15.784 15.784 0 014.332.276c1.351.271 2.598.687 3.739 1.194a19.945 19.945 0 013.12 1.739c.231.165.471.319.685.487l.641.495c.408.34.806.672 1.172 1.014.738.68 1.395 1.359 1.977 2.024a32.942 32.942 0 011.57 1.917 48.554 48.554 0 012.224 3.208c.573.897.996 1.604 1.284 2.083l.432.737v.009z"
          fill="#98AFAF"
        />
        <Path
          d="M201.641 204.36l-.271.238c-.092.075-.201.185-.355.271-.077.047-.158.099-.246.154a1.804 1.804 0 01-.293.159c-.214.095-.457.216-.737.287-.14.039-.29.096-.445.119l-.491.086a8.95 8.95 0 01-2.318-.036c-.846-.116-1.742-.337-2.657-.626a33.22 33.22 0 01-1.39-.477l-1.397-.518c-1.84-.672-3.858-1.316-5.98-1.776-2.119-.465-4.159-.712-6.021-.694a21.89 21.89 0 00-2.671.183c-.841.114-1.623.277-2.337.462-1.43.368-2.569.858-3.347 1.243-.192.099-.366.187-.518.264l-.374.21c-.203.114-.314.174-.314.174l.195-.302.246-.364.368-.476a12.43 12.43 0 012.904-2.595 14.818 14.818 0 012.43-1.285 16.108 16.108 0 013.048-.914c2.221-.443 4.748-.419 7.259.134 2.514.545 4.737 1.55 6.595 2.653l.346.207.324.203c.209.134.418.265.623.397l1.163.747c.743.471 1.431.881 2.078 1.202a9.547 9.547 0 001.796.699l.403.088c.132.033.254.035.379.053.249.042.472.029.683.033.106.005.203-.006.295-.018l.263-.03c.169-.011.301-.055.414-.078l.35-.083v.006z"
          fill="#32194C"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2913_366066">
          <Path fill="#fff" d="M0 0H375V494.403H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};