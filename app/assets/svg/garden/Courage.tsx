import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { ISvgProps } from '../../../utils/types';

export const CourageIcon = ({
  width = 300,
  height = 300,
  reduceSize = false,
}: ISvgProps) => {
  return (
    <Svg
      width={reduceSize ? width * WINDOW_COEFFICIENT : width}
      height={reduceSize ? height * WINDOW_COEFFICIENT : height}
      viewBox="0 0 120 120"
      fill="none">
      <G clipPath="url(#clip0_2934_414121)">
        <G clipPath="url(#clip1_2934_414121)">
          <Path
            d="M102.877 106.74c0-3.997-20.172-7.237-45.054-7.237-24.883 0-45.054 3.24-45.054 7.237 0 3.632 16.658 6.639 38.37 7.157-.074.412.016.871.269 1.214.417.562 1.095.859 1.754 1.093 5.313 1.884 11.147 1.199 16.739.492l3.668-.464c1.104-.14 2.311-.334 3.041-1.175.405-.468.486-1.189.297-1.76 15.34-1.154 25.97-3.655 25.97-6.555v-.002z"
            fill="#330F59"
            opacity={0.5}
          />
          <Path
            d="M21.738 72.97a1.44 1.44 0 00-.811.249c-.247.162-.455.39-.606.654-.151.264-.248.562-.265.864-.016.303.053.602.204.871.297.54.88.914 1.507 1.038.315.063.645.062.958-.007.313-.069.61-.214.873-.411.262-.197.485-.449.664-.73a3.177 3.177 0 00.469-1.932 3.36 3.36 0 00-.243-.993c-.526-1.276-1.718-2.256-3.077-2.593a4.304 4.304 0 00-2.088-.02 3.76 3.76 0 00-1.807 1.068 5.02 5.02 0 00-1.052 1.82 7.52 7.52 0 00-.377 2.044l-.011.258c-.004.085 0 .17 0 .257-.003.173.008.343.017.514.007.171.032.338.048.507.019.168.03.338.064.503l.085.498c.027.165.073.326.11.49.068.327.172.643.266.96.022.08.05.158.079.235l.085.232c.06.153.108.31.175.46.133.298.253.601.407.886.075.144.145.289.22.43l.242.415.12.206c.042.068.088.133.131.2l.263.394c1.444 2.065 3.402 3.575 5.388 4.41.992.423 1.98.693 2.914.851a14.19 14.19 0 002.62.19c1.606-.05 2.88-.347 3.726-.623.054-.015.106-.031.157-.047l.144-.052.26-.094c.16-.061.297-.106.405-.152l.326-.143s-.02-.163-.066-.397a6.83 6.83 0 00-.22-.834c-.199-.583-.492-1.114-.784-.945l-.169.091c-.09.053-.225.112-.392.186l-.278.124c-.1.047-.215.082-.335.129-.121.043-.248.095-.387.141l-.444.135c-.627.175-1.4.339-2.295.402a11.51 11.51 0 01-2.986-.185 10.692 10.692 0 01-3.284-1.218c-.07-.035-.136-.078-.201-.12-.066-.04-.133-.084-.2-.125-.134-.085-.271-.166-.398-.264l-.392-.284c-.128-.1-.252-.206-.38-.31a10.98 10.98 0 01-1.421-1.428 11.206 11.206 0 01-1.19-1.715 11.24 11.24 0 01-.884-1.947 11.1 11.1 0 01-.505-2.106 7.548 7.548 0 01-.073-1.333c.004-.089.005-.178.01-.266.018-.175.029-.353.058-.526.02-.176.06-.345.095-.516.019-.084.045-.166.066-.25l.034-.125.041-.12c.105-.327.251-.631.423-.912.169-.284.382-.527.618-.739.062-.05.118-.107.184-.152l.195-.134c.132-.087.272-.157.416-.22.581-.25 1.254-.308 1.895-.21.646.099 1.26.35 1.777.724.52.372.945.857 1.213 1.398.135.27.23.552.282.838a2.786 2.786 0 01-.643 2.325 2.285 2.285 0 01-.591.477c-.218.12-.442.195-.68.225a2.29 2.29 0 01-.703-.022c-.057-.014-.115-.02-.169-.037a13.017 13.017 0 00-.163-.049c-.104-.042-.209-.08-.305-.134a1.812 1.812 0 01-.831-.853l-.03-.063c-.01-.021-.014-.043-.022-.064a13.89 13.89 0 00-.04-.127l-.023-.131-.011-.064c-.003-.022-.002-.044-.003-.066a5.274 5.274 0 01-.004-.13c0-.042.007-.085.01-.126.002-.085.025-.166.04-.246.072-.32.225-.59.392-.797.168-.207.357-.344.524-.435.042-.022.082-.044.121-.062l.115-.04c.07-.03.138-.035.194-.048.028-.005.054-.013.078-.015l.064-.002.083-.005c.035-.002.028-.003-.023-.002l.007-.003zM101.595 84.831a.739.739 0 00-.552-.238 1.264 1.264 0 00-.648.187 1.43 1.43 0 00-.5.484.97.97 0 00-.136.663l.028.129c.008.044.03.08.043.123l.024.063c.009.02.021.039.032.06.024.038.042.08.069.116.101.152.238.28.39.392a2.015 2.015 0 001.083.352c.787.04 1.534-.51 1.882-1.243.175-.367.25-.787.2-1.198a2.362 2.362 0 00-.482-1.142 3.287 3.287 0 00-.948-.825 4.013 4.013 0 00-1.176-.464 3.762 3.762 0 00-1.272-.067c-.424.066-.83.175-1.217.337-.775.323-1.46.798-2.068 1.312-.611.515-1.153 1.07-1.669 1.602l-1.496 1.543c-3.863 3.969-6.642 6.722-6.642 6.722s1.538 1.995 1.83 1.59c.056-.08.897-1.122 2.207-2.735l5.012-6.17c.478-.588.957-1.17 1.477-1.692.517-.524 1.078-.981 1.69-1.306.153-.075.309-.153.468-.21.04-.016.079-.033.12-.048l.12-.037c.08-.025.165-.054.238-.07.301-.075.628-.089.953-.057.65.069 1.295.338 1.756.752.467.413.705.97.646 1.53a1.885 1.885 0 01-.847 1.37 1.44 1.44 0 01-.343.165l-.09.028c-.03.008-.062.012-.092.019-.031.006-.062.013-.093.017l-.095.008a1.8 1.8 0 01-.738-.102 1.484 1.484 0 01-.579-.366 11.1 11.1 0 01-.103-.121 13.058 13.058 0 01-.082-.13c-.02-.047-.039-.09-.06-.13l-.038-.137a.853.853 0 01.074-.567c.077-.163.211-.312.347-.422.28-.223.589-.303.804-.289a.705.705 0 01.421.16c.069.06.087.08.052.041v.001z"
            fill="#FF15EE"
            stroke="#FF15EE"
            strokeWidth={0.34}
            strokeMiterlimit={10}
          />
          <Path
            opacity={0.5}
            d="M70.337 59.41c-4.383.437-11.466-1.551-16.524-6.2-5.123-4.704-7.026-11.482-4.963-17.688 1.886-5.678 6.702-9.57 12.57-10.159.28-.028.561-.048.842-.06.239-.152.483-.297.73-.435a14.566 14.566 0 015.706-1.8c4.744-.473 9.512 1.438 12.756 5.112 3.579 4.049 4.913 9.585 3.657 15.188-1.512 6.757-6.52 13.338-11.647 15.31l-.678.26-.696.17a12.58 12.58 0 01-1.752.301v.001z"
            fill="#FC6BCC"
          />
          <Path
            opacity={0.36}
            d="M33.693 69.63c-1.853 0-5.511-.274-9.172-2.117-5.629-2.835-8.956-8.344-8.686-14.379.25-5.539 3.5-10.254 8.513-12.4a13.918 13.918 0 019.631-3.831c7.976 0 14.343 6.304 14.811 14.662.274 4.94-1.599 11.88-6.356 15.448l-.582.441-.661.377c-.782.445-3.158 1.8-7.497 1.8z"
            fill="#FC6BCC"
          />
          <Path
            d="M71.773 82.776a14.768 14.768 0 011.393-6.195c.81-1.723 2.383-3.48 4.257-3.163 1.907.322 2.8 2.538 3.108 4.452 1.04-1.061 2.314-1.952 3.768-2.252 1.454-.3 3.1.081 4.074 1.204.866 1 1.09 2.425.935 3.74-.393 3.363-2.889 6.042-5.256 8.46-2.376 2.426-4.75 4.854-7.125 7.28"
            fill="#EB6BF9"
          />
          <Path
            d="M106.834 64.57a3.388 3.388 0 01-1.144.58c-.412.12-.835.178-1.255.203-.841.05-1.674-.017-2.499-.007-.822.009-1.656.093-2.384.463a4.162 4.162 0 00-.528.312c-.166.12-.33.247-.482.388-.31.277-.586.593-.84.93-.255.336-.485.694-.699 1.064-.214.368-.41.748-.582 1.14-.344.78-.587 1.615-.636 2.472-.023.428 0 .86.087 1.28.088.42.235.828.44 1.208.407.755 1.053 1.408 1.87 1.72.404.159.852.221 1.286.16a3.075 3.075 0 001.228-.445 2.82 2.82 0 00.927-.931.822.822 0 00.08-.148l.072-.152c.043-.104.071-.213.107-.32.018-.112.043-.222.053-.335l.003-.17c0-.056.006-.114-.003-.169l-.018-.169c-.007-.056-.023-.11-.034-.165-.019-.112-.062-.217-.097-.325a2.677 2.677 0 00-.322-.59 3.35 3.35 0 00-.978-.895 3.863 3.863 0 00-1.231-.48 5.133 5.133 0 00-1.306-.064c-.433.046-.858.141-1.266.28a6.971 6.971 0 00-1.16.54 8.043 8.043 0 00-1.036.72c-.166.126-.316.272-.472.408-.146.147-.301.286-.439.44-.568.607-1.034 1.268-1.462 1.931-.426.665-.805 1.337-1.177 1.987-.372.648-.735 1.28-1.12 1.865a13.857 13.857 0 01-1.233 1.621c-.44.496-.904.947-1.383 1.355-.48.407-.977.77-1.477 1.093-.5.325-1.003.609-1.505.852-.502.246-.997.459-1.486.632-.242.093-.487.164-.722.243-.24.066-.472.141-.704.194l-.343.085-.337.07c-.221.05-.442.078-.653.118-.852.133-1.626.172-2.296.166-.167-.004-.33-.003-.483-.012l-.445-.026c-.284-.03-.541-.05-.77-.087-.229-.028-.43-.066-.604-.099-.174-.028-.32-.064-.436-.09l-.266-.06-.088-.024s-.085.14-.202.349c-.117.21-.27.491-.399.776-.258.569-.412 1.156.103 1.248.031.006.127.026.283.05l.279.045.172.028.194.024a15.12 15.12 0 002.282.126c.481-.016 1.01-.037 1.576-.11.285-.028.576-.078.88-.124.3-.057.612-.113.928-.19a17.314 17.314 0 001.98-.584c.68-.25 1.377-.553 2.075-.92a16.321 16.321 0 004.064-3.004 15.2 15.2 0 001.741-2.136c.266-.389.506-.791.736-1.197.229-.405.447-.816.658-1.225.424-.82.831-1.638 1.283-2.416.225-.39.464-.766.72-1.126a8.49 8.49 0 01.83-1.007c.603-.622 1.305-1.162 2.077-1.5.384-.17.782-.296 1.186-.352.1-.013.2-.018.302-.03a.846.846 0 01.152-.005h.15c.102-.005.202.009.302.02l.15.015c.05.005.095.017.142.026.751.147 1.486.635 1.795 1.263.078.155.134.317.153.484l.01.062c.003.02 0 .04.001.06 0 .041.002.082.004.122.004.04-.009.081-.013.122-.006.04-.005.082-.016.122a1.863 1.863 0 01-.526.898c-.541.509-1.354.785-2.04.608a2.672 2.672 0 01-1.011-.49 3.391 3.391 0 01-.776-.864 4.051 4.051 0 01-.596-1.632c-.012-.095-.02-.193-.03-.29l-.01-.292c-.003-.78.174-1.551.438-2.27.266-.719.617-1.398 1-2.012.385-.612.82-1.151 1.312-1.564a3.98 3.98 0 01.775-.513c.269-.135.546-.232.83-.301.566-.135 1.136-.165 1.671-.176.536-.009 1.044.001 1.511-.008a9.033 9.033 0 001.279-.099c.766-.115 1.31-.386 1.597-.583.147-.097.235-.174.275-.208.041-.034.033-.028-.028.018l-.001.006z"
            fill="#FF15EE"
            stroke="#FF15EE"
            strokeWidth={0.34}
            strokeMiterlimit={10}
          />
          <Path
            d="M84.315 77.985l-.145.177a23.541 23.541 0 01-.715.811l-.345.399c-.245.285-.53.581-.823.931-.148.172-.365.237-.595.308-.227.072-.456.166-.631.358-.087.097-.16.221-.224.359a3.117 3.117 0 00-.091.214 23.34 23.34 0 00-.081.23c-.108.31-.217.616-.406.817-.097.098-.264.103-.48.051-.216-.05-.477-.153-.743-.252-.267-.1-.54-.196-.776-.24-.23-.036-.425-.02-.535.098-.11.117-.136.334-.117.598.01.132.03.275.057.423.029.15.066.308.1.464.143.623.3 1.22.076 1.432-.213.226-.43.44-.651.646l-.165.154-.159.158a16.08 16.08 0 01-.321.306c-.108.1-.29.138-.508.147-.214.013-.466-.004-.72-.018a6.027 6.027 0 00-.735-.014c-.222.016-.413.057-.516.16-.213.205-.121.619-.02 1.012l.072.288c.022.094.043.185.054.269.02.166.003.302-.093.388-.188.171-.598.2-.993.24-.394.04-.79.082-.966.24-.175.158-.13.424-.059.684.068.258.143.501.003.624-.14.124-.386.185-.619.243-.229.06-.451.113-.554.207-.204.186.078.519-.035.613l-.176.146s-.008-.078-.017-.226a13.518 13.518 0 01-.021-.644c-.001-.14.092-.255.186-.38.098-.126.206-.26.22-.455.034-.383-.29-1.021-.183-1.504.05-.243.406-.326.763-.409.358-.082.733-.152.812-.415.04-.132.012-.312-.051-.52-.03-.104-.072-.216-.114-.33l-.127-.348c-.172-.472-.324-.964-.185-1.262.066-.15.148-.291.228-.438a19.961 19.961 0 01.515-.885c.096-.145.196-.289.299-.433.102-.144.289-.218.517-.253.113-.018.238-.026.367-.028.13-.002.27.005.406.01.55.026 1.093.07 1.334-.185.252-.242.209-.786.184-1.337-.006-.138-.013-.276-.011-.407.002-.13.01-.253.028-.368.035-.23.109-.416.253-.519a1.75 1.75 0 01.487-.232c.18-.05.372-.083.56-.113.19-.03.377-.057.551-.094.176-.036.335-.088.483-.153.29-.135.494-.374.697-.608.05-.06.1-.117.152-.173.052-.055.108-.103.165-.15a1.13 1.13 0 01.372-.216c.277-.088.68.052 1.074.22.396.17.772.355 1.004.31.233-.042.326-.32.424-.58.096-.263.186-.525.382-.543.196-.016.377-.033.546-.039a13.46 13.46 0 011.333.036h.002z"
            fill="#BE46D3"
          />
          <Path
            d="M36.958 85.925c-3.601-1.753-6.607-4.476-8.51-7.708-.9-1.53-1.53-3.46-.488-4.885.855-1.17 2.656-1.592 4.202-1.263 1.546.33 2.853 1.28 3.88 2.368-.216-1.248-.384-2.663.512-3.623.729-.78 2.017-1.024 3.146-.8 1.128.222 2.118.84 2.97 1.544 2.516 2.075 4.043 4.912 5.317 7.736a70.165 70.165 0 012.669 6.852"
            fill="#EB6BF9"
          />
          <Path
            d="M31.788 73.927s.064-.006.183-.012c.12-.006.295-.013.519-.013.223 0 .494.007.801.034.308.026.658.061 1.032.13.188.032.315.174.445.322.132.147.263.305.474.363.419.112 1.144-.139 1.595.048.225.094.13.628.027 1.158-.052.266-.105.533-.118.747-.016.218.009.383.114.447.212.129.76-.153 1.308-.407.548-.257 1.105-.495 1.315-.318.414.363.793.743 1.124 1.147.085.1.103.269.085.47-.02.204-.073.443-.13.68-.117.474-.244.94-.123 1.141.12.202.497.139.872.078.377-.063.742-.115.834.085.091.201-.004.567-.116.928-.11.361-.231.713-.173.89.117.351.951.032 1.027.335.074.301-.25.881-.22 1.1.033.218.429.084.441.204.013.12.016.183.016.183l-.178-.052a13.34 13.34 0 01-.489-.16c-.206-.074-.143-.429-.427-.538-.284-.11-.9.027-1.234-.113-.167-.07-.082-.38-.006-.7.078-.318.142-.642-.046-.738-.189-.095-.626.04-1.067.183-.44.141-.875.28-1.065.17-.19-.111-.386-.222-.577-.344-.096-.061-.192-.123-.287-.187a14.62 14.62 0 01-.29-.192c-.193-.13-.088-.594.005-1.064.094-.471.182-.958-.01-1.127-.195-.164-.662-.002-1.111.162-.45.163-.892.338-1.05.167a.898.898 0 01-.18-.327 3.488 3.488 0 01-.111-.409c-.066-.282-.125-.573-.266-.746-.284-.349-.86-.246-1.096-.577-.117-.167-.075-.558-.036-.942.04-.384.081-.77-.019-.926-.201-.319-.954.3-1.1.04a40.308 40.308 0 01-.38-.689 13.902 13.902 0 01-.233-.46l-.079-.169v-.002z"
            fill="#BE46D3"
          />
          <Path
            d="M55.046 92.68c-4.182-7.422-4.072-19.165 1.263-25.804 9.676-12.04 11.187-20.542 11.187-20.542s1.857-4.52 2.888-.106c1.575 6.743-7.028 19.511-7.657 25.79-.628 6.278 2.09 13.285 7.821 15.9"
            fill="#D050FF"
          />
          <Path
            d="M59.678 84.681c.235 1.236 2.218 1.247 2.97.239.752-1.008.643-2.393.553-3.648a31.02 31.02 0 01-.071-3.236 18.52 18.52 0 01-.402-6.02c.485-4.837 5.687-13.52 7.337-20.339l-5.024 7.818c-2.159 3.36-4.335 6.751-5.731 10.494-1.397 3.742-1.97 7.915-.846 11.748l1.214 2.943v.001z"
            fill="#A539D8"
          />
          <Path
            d="M50.447 81.196a25.105 25.105 0 00-4.794-12.91c-1.974-2.678-7.563-8.673-10.764-9.566-2.073-.58 2.1-3.481 2.373-2.946.222.434.669.694 1.088.94 8.12 4.78 16.747 17.173 17.809 26.549"
            fill="#D050FF"
          />
          <Path
            d="M58.043 57.73c.224.65.224 1.373.04 2.038a4.349 4.349 0 01-1.007 1.795c-.471.51-1.067.92-1.742 1.14a3.236 3.236 0 01-2.1-.022c-.675-.238-1.25-.704-1.672-1.267a4.354 4.354 0 01-.822-1.922c-.111-.692-.054-1.421.236-2.059.287-.632.78-1.18 1.404-1.462.31-.14.656-.205.986-.15.33.049.64.2.882.426.49.448.756 1.106.799 1.75.02.322-.02.652-.093.968a5.868 5.868 0 01-.307.932c-.251.607-.583 1.182-.867 1.787A26.036 26.036 0 0051.479 69a27.59 27.59 0 00-.195 6.76l.08.757c.015.124.021.25.044.37l.06.361.115.707c.038.232.072.46.127.68l.29 1.278c.112.403.226.787.332 1.156l.079.272c.024.09.051.178.084.263l.178.499.327.911.608 1.417c.183.38.335.667.433.865l.152.3s.628-.142 1.196-.378c.569-.236 1.082-.557.887-.855l-.34-.56c-.096-.167-.227-.359-.343-.6l-.417-.813a24.244 24.244 0 01-1.829-5.206l-.097-.419c-.032-.14-.068-.283-.088-.43l-.149-.887c-.023-.15-.053-.302-.074-.455l-.05-.466-.102-.953-.047-.983-.024-.5c0-.168.004-.337.005-.506l.013-1.027.076-1.043c.015-.175.019-.353.044-.529a594.157 594.157 0 00.141-1.061l.035-.268c.011-.09.033-.177.05-.266l.209-1.07c.03-.18.082-.355.127-.532.046-.177.092-.355.14-.533.045-.178.091-.356.139-.535.055-.176.114-.35.172-.526l.174-.527.086-.265.044-.132.052-.128c.138-.345.278-.69.417-1.034.134-.346.303-.688.46-1.05.157-.36.314-.735.441-1.136a5.57 5.57 0 00.264-1.264c.012-.11.01-.222.015-.332-.003-.116-.003-.236-.017-.35a2.887 2.887 0 00-.051-.344c-.02-.114-.052-.224-.084-.334a3.417 3.417 0 00-.646-1.207 2.728 2.728 0 00-.528-.48c-.097-.074-.208-.129-.316-.187-.054-.03-.115-.049-.171-.074-.058-.02-.115-.047-.176-.06l-.181-.047c-.061-.015-.123-.019-.185-.028a1.928 1.928 0 00-.369-.014 2.32 2.32 0 00-.7.145 3.046 3.046 0 00-1.096.728 3.53 3.53 0 00-.704 1.028 4.02 4.02 0 00-.273 2.319c.127.744.427 1.425.84 1.996.414.571.95 1.034 1.555 1.322.604.289 1.269.39 1.876.316a3.803 3.803 0 001.602-.586c.452-.29.816-.64 1.103-1.003.575-.732.842-1.506.918-2.13a3.43 3.43 0 00-.097-1.369c-.082-.268-.121-.35-.08-.234l.003-.005z"
            fill="#FF15EE"
            stroke="#FF15EE"
            strokeWidth={0.34}
            strokeMiterlimit={10}
          />
          <Path
            d="M63.544 77.656c2.718-8.591 8.418-11.204 14.198-14.248 1.674-.88 3.47-1.592 4.907-2.823.167 2.294-1.988 3.992-3.869 5.31-3.31 2.32-6.093 4.073-8.126 7.57-2.033 3.497-2.26 10.763-.209 14.249"
            fill="#D050FF"
          />
          <Path
            d="M78.78 65.895c.878-.617 1.808-1.32 2.543-2.123-.438.006-.874.148-1.289.306-6.403 2.433-11.662 7.725-14.063 14.153l.311 3.416.212.309c.907.178 1.842-.26 2.524-.934 0-2.829.565-5.714 1.635-7.556 2.034-3.497 4.817-5.25 8.127-7.57v-.001z"
            fill="#A539D8"
          />
          <Path
            opacity={0.57}
            d="M69.957 55.59c-3.497.348-9.525-1.504-13.557-5.208-3.994-3.668-5.495-8.898-3.917-13.647 1.401-4.224 4.972-7.116 9.315-7.55.556-.056 1.112-.07 1.664-.04a11 11 0 011.39-.921 10.78 10.78 0 014.221-1.333c3.522-.351 7.077 1.083 9.509 3.835 2.754 3.115 3.77 7.417 2.788 11.803-1.216 5.429-5.38 11.066-9.283 12.565l-.45.173-.464.113c-.39.097-.801.168-1.218.21h.002z"
            fill="#FCAEC6"
          />
          <Path
            opacity={0.77}
            d="M69.577 51.77c-2.268.226-7.21-1.114-10.587-4.218-2.865-2.632-3.965-6.312-2.873-9.605.92-2.767 3.241-4.66 6.06-4.942a7.183 7.183 0 012.56.201 7.195 7.195 0 011.984-1.63 6.996 6.996 0 012.733-.865c2.3-.23 4.641.728 6.26 2.56 1.93 2.182 2.629 5.25 1.92 8.417-1.005 4.486-4.48 8.886-6.917 9.822l-.222.085-.232.058a4.879 4.879 0 01-.685.117z"
            fill="#F9BDC6"
          />
          <Path
            d="M68.59 34.93c-1.563.872-1.878 2.557-1.903 3.656a.266.266 0 01-.48.15c-.647-.887-1.867-2.089-3.647-1.91-3.114.31-4.414 4.742-.98 7.896 2.767 2.542 6.86 3.427 7.768 3.203.874-.336 3.728-3.407 4.55-7.076 1.02-4.556-2.575-7.447-5.307-5.92h-.001z"
            fill="#fff"
          />
          <Path
            opacity={0.46}
            d="M33.693 65.632c-1.5 0-4.455-.22-7.38-1.693-4.203-2.117-6.691-6.188-6.492-10.626.184-4.08 2.625-7.535 6.372-9.017.129-.051.26-.1.392-.146a9.972 9.972 0 017.393-3.25c5.825 0 10.48 4.68 10.825 10.887.219 3.933-1.375 9.483-4.762 12.023l-.39.296-.436.249c-.559.319-2.24 1.276-5.523 1.276l.001.001z"
            fill="#FFB6CD"
          />
          <Path
            opacity={0.8}
            d="M33.693 61.633c-1.148 0-3.4-.165-5.59-1.267-2.777-1.4-4.424-4.032-4.296-6.873.112-2.485 1.588-4.583 3.85-5.478a6.23 6.23 0 011.23-.346c.232-.355.501-.687.81-.996a6.013 6.013 0 014.281-1.775c3.675 0 6.616 3.056 6.842 7.11.18 3.238-1.27 7.176-3.168 8.6l-.198.15-.215.122c-.325.186-1.313.752-3.546.752v.001z"
            fill="#F9BDC6"
          />
          <Path
            d="M32.517 49.504c-.814.815-.714 1.912-.536 2.596a.17.17 0 01-.27.178c-.556-.436-1.52-.964-2.591-.542-1.87.74-1.901 3.709.776 5.057 2.156 1.086 4.843.914 5.364.615.481-.36 1.709-2.762 1.575-5.176-.166-2.997-2.896-4.154-4.318-2.729v.001z"
            fill="#fff"
          />
          <Path
            opacity={0.3}
            d="M84.753 71.753a10.373 10.373 0 01-1.874-.314c-3.153-.827-6.948-3.417-8.093-6.768l-.14-.412-.088-.427c-.725-3.452 1.212-7.623 3.501-9.954 2.044-2.083 4.807-3.162 7.578-2.959 4.387.323 7.77 3.687 8.047 8 .003.03.004.061.006.091l.044.086c1.417 2.773 1.23 5.992-.502 8.613-1.814 2.744-5.064 4.294-8.477 4.043h-.002z"
            fill="#FC9AB5"
          />
          <Path
            opacity={0.7}
            d="M85.006 68.28c-.412-.03-.832-.1-1.244-.21-2.51-.658-5.061-2.689-5.69-4.527l-.07-.203-.043-.21c-.4-1.901.756-4.956 2.575-6.808 1.329-1.354 3.095-2.056 4.847-1.927 2.635.194 4.667 2.191 4.831 4.748.02.28.014.56-.012.833.163.22.31.457.436.708.838 1.639.724 3.547-.304 5.102-1.122 1.697-3.164 2.651-5.326 2.493z"
            fill="#F9BDC6"
          />
          <Path
            d="M87.543 62.272c-.388-.76-1.183-.939-1.703-.968-.121-.007-.164-.163-.064-.232.433-.293 1.023-.854.969-1.706-.096-1.489-2.177-2.184-3.732-.6-1.253 1.276-1.743 3.212-1.652 3.649.145.421 1.554 1.834 3.282 2.288 2.145.563 3.578-1.102 2.899-2.43l.001-.001z"
            fill="#fff"
          />
          <Path
            d="M61.184 106.826c4.649-9.116 9.62-18.204 18.478-23.305 1.489-.858 3.093-1.607 4.806-1.732 1.712-.124 4.46.557 5.456 1.958 1.715 2.414.269 5.78-1.499 8.156 2.047-1.844 4.675-1.983 7.17-.819 2.219 1.036 3.031 4.757 3.068 5.428.496 9.042-10.435 10.746-13.247 11.314-8.05 1.625-16.451 2-24.444.115M40.304 87.277c.24-2.68-1.79-5.314-4.48-6.143-2.69-.83-5.802.051-7.785 1.97-1.982 1.918-2.86 4.74-2.586 7.416-.724-.78-1.711-1.325-2.77-1.587-3.46-.858-7.223 1.574-8.296 4.816-1.073 3.242.183 6.9 2.552 9.446 2.37 2.546 5.701 4.116 9.108 5.148 9.26 2.809 23.293 1.341 32.921.068"
            fill="#8B22D5"
          />
          <Path
            d="M89.076 88.955l-.093.287c-.063.187-.159.462-.29.812-.066.176-.14.37-.224.582-.087.21-.188.434-.296.676-.22.481-.469 1.035-.792 1.616-.159.293-.416.522-.682.761-.267.24-.556.473-.765.801-.213.324-.342.746-.508 1.157-.162.415-.338.84-.606 1.189-.27.349-.91.334-1.538.32-.316-.007-.633-.016-.908.019-.282.03-.522.102-.684.267-.162.164-.245.42-.292.724a5.626 5.626 0 00-.05.487l-.034.516c-.044.695-.113 1.401-.504 1.726-.4.311-.8.611-1.2.901-.1.072-.199.145-.3.214l-.306.202-.608.391c-.202.127-.453.182-.726.197a6.272 6.272 0 01-.874-.054c-.594-.07-1.167-.147-1.554.036-.388.181-.585.645-.782 1.105-.192.465-.4.898-.765 1.039-.368.135-.833.069-1.289-.024-.456-.094-.893-.2-1.208-.111-.62.185-.795 1.128-1.314 1.242-.26.054-.548.003-.817-.06-.273-.066-.523-.137-.708-.112-.366.05-.47.494-.667.516l-.3.029.222-.206c.146-.133.362-.328.64-.569.14-.121.335-.168.545-.227.209-.061.432-.139.628-.31.394-.344.676-1.046 1.154-1.472.242-.209.645-.144 1.069-.088.423.055.855.086 1.145-.156.288-.248.432-.761.561-1.297.134-.532.27-1.061.584-1.32.315-.261.627-.542.957-.813.165-.135.331-.271.497-.409l.5-.425c.17-.142.4-.202.663-.223a3.89 3.89 0 01.417-.007c.144.003.291.008.44.013.594.023 1.21.039 1.59-.257.37-.307.487-.914.594-1.5.026-.148.054-.292.082-.434.027-.143.058-.28.097-.407.077-.253.185-.465.36-.6.174-.135.37-.243.576-.338.202-.1.415-.187.627-.272.424-.17.858-.326 1.183-.582.325-.256.554-.593.777-.917.227-.32.425-.65.722-.87.292-.225.768-.268 1.23-.318.458-.051.915-.096 1.175-.292.53-.39.224-1.382.638-1.686l.583-.429.487-.368c.296-.22.53-.39.692-.504l.249-.172v.004z"
            fill="#482984"
          />
          <Path
            d="M81.891 84.244l-.137.156-.164.181-.103.113c-.035.041-.071.089-.11.137l-.249.314c-.085.119-.173.252-.267.386a9.554 9.554 0 00-.556.95c-.05.086-.108.166-.176.24-.069.075-.149.144-.23.216-.08.072-.155.154-.227.24a.964.964 0 00-.177.292c-.084.226-.101.494-.1.773-.007.273.003.553-.072.794-.038.121-.15.21-.314.283-.163.073-.37.134-.573.205-.205.07-.417.146-.583.245-.163.099-.286.218-.323.367-.04.149.02.329.117.516.049.094.109.19.174.286.067.097.142.195.215.292.288.386.595.75.535 1.039-.115.594-.23 1.187-.351 1.77-.121.576-1.275 1.046-1.412 1.602-.136.555.747 1.188.595 1.687-.156.501-1 .878-1.165 1.285-.163.407.35.888.19 1.216-.081.162-.24.295-.395.413-.157.119-.31.22-.373.328-.125.214.086.456.011.57l-.117.168-.022-.204c-.016-.134-.027-.326-.056-.575-.014-.124.041-.246.098-.381a.966.966 0 00.087-.46c-.036-.35-.356-.786-.402-1.213-.045-.423.854-.78.813-1.293-.043-.513-1.032-1.15-1.053-1.724-.019-.576-.023-1.184.014-1.827.007-.16.095-.314.22-.461.125-.148.288-.29.457-.432.332-.282.68-.556.74-.884.07-.328-.15-.716-.34-1.116-.049-.1-.098-.2-.14-.301-.041-.1-.076-.198-.102-.295-.05-.193-.069-.379-.002-.538.065-.159.154-.308.254-.45a5.06 5.06 0 01.34-.401c.116-.13.239-.253.354-.377.114-.124.21-.25.295-.38.171-.26.25-.552.357-.834.093-.285.212-.558.404-.768.093-.107.24-.176.393-.231a2.79 2.79 0 01.494-.115c.173-.025.342-.043.49-.071.145-.028.27-.067.367-.126a.5.5 0 00.192-.258 3.992 3.992 0 00.098-.341c.03-.118.057-.234.101-.333a.557.557 0 01.077-.132.343.343 0 01.113-.082c.177-.073.336-.142.488-.195.155-.047.296-.088.422-.123.063-.017.121-.034.177-.046l.161-.028.25-.04c.13-.016.203-.027.203-.027l-.005-.002zM96.403 100.669l-.152.152c-.1.1-.25.243-.447.424l-.333.299c-.125.104-.264.21-.414.327-.302.229-.647.499-1.056.746-.202.128-.445.178-.697.23-.251.051-.518.086-.765.213a2.321 2.321 0 00-.367.242l-.183.148-.188.147c-.254.199-.521.397-.82.511-.148.059-.323.014-.504-.071a4.138 4.138 0 01-.562-.354c-.189-.134-.377-.269-.556-.361-.181-.099-.353-.154-.513-.119-.16.035-.31.159-.456.329-.075.084-.148.18-.222.282-.073.098-.15.2-.226.304-.303.41-.635.817-1.001.85-.368.017-.731.027-1.089.031-.09 0-.178.002-.267 0l-.266-.014-.523-.032a1.068 1.068 0 01-.509-.203 4.297 4.297 0 01-.48-.427c-.157-.155-.308-.309-.456-.432a1.187 1.187 0 00-.445-.249c-.298-.069-.612.115-.928.299a7.024 7.024 0 01-.236.133c-.077.04-.155.072-.23.098-.152.052-.298.07-.432.025-.267-.094-.498-.347-.705-.617-.208-.271-.398-.54-.609-.637-.42-.184-.956.268-1.292.083-.165-.094-.295-.261-.409-.428-.112-.171-.21-.335-.32-.41-.215-.151-.485.048-.6-.036l-.17-.13.217-.007c.141-.004.348-.008.609-.008.13 0 .255.067.393.138.14.067.295.127.48.125.371-.009.847-.272 1.297-.297.224-.008.41.221.613.454.203.232.428.448.695.443.134-.005.279-.068.427-.16.075-.047.15-.098.226-.158.077-.061.153-.124.23-.188.306-.255.608-.508.891-.518.142-.003.286-.018.432-.028l.44-.028.446-.021.454-.037c.153-.012.306.054.463.159.079.051.159.113.238.18l.245.199c.33.273.68.551 1.019.535.338-.031.646-.356.935-.671l.215-.232c.07-.078.14-.15.211-.212.142-.125.285-.211.437-.221.151-.01.308.005.465.033.156.02.314.054.47.089.158.035.316.071.47.096.154.023.307.044.45.024.287-.03.547-.149.796-.263l.187-.084c.062-.028.121-.057.183-.081.123-.049.245-.086.375-.099.256-.028.564.135.865.281.3.144.602.29.832.264.23-.027.39-.218.524-.423.137-.202.26-.398.44-.419l.51-.06.427-.062c.26-.036.464-.061.605-.076l.216-.023v.003z"
            fill="#482984"
          />
          <Path
            d="M95.594 91.084c-.985-.461-1.991-.708-2.974-.736-1.295 1.388-2.254 3.335-3.438 4.876-3.987 5.19-11.31 6.133-17.837 6.489 2.928-3.802 3.796-9.08 2.308-13.64-2.598 2.5-4.798 5.4-6.775 8.504a124.01 124.01 0 01-5.494 10.26 8.852 8.852 0 00-.309.556l-.104.546c7.993 1.885 16.394 1.51 24.444-.115 2.812-.568 13.743-2.271 13.247-11.314-.037-.671-.85-4.391-3.068-5.428v.002z"
            fill="#4D0D84"
            opacity={0.47}
          />
          <Path
            d="M24.225 91.052l.116.35c.039.112.1.247.161.404.08.154.153.33.268.517.214.375.514.8.912 1.239.195.22.424.443.665.67.25.225.515.455.808.685.293.23.52.542.777.864.13.161.269.324.417.48.148.159.315.302.503.427.373.255.845.414 1.315.577.24.077.48.155.71.247.235.088.464.184.675.308.426.241.585.89.79 1.55.1.335.213.665.364.95.075.142.158.274.256.383.099.108.21.197.337.26.127.064.269.102.422.119.155.013.319.008.491-.012a5.01 5.01 0 00.528-.092c.182-.043.366-.093.549-.144.183-.051.364-.101.54-.144a5.57 5.57 0 01.52-.113c.167-.026.326-.038.476-.029.151.005.293.032.422.089 1.036.448 2.061.865 3.065 1.252.25.098.473.278.687.493.212.217.413.48.618.733.406.516.825 1.025 1.317 1.197.246.082.508.081.774.037.267-.049.537-.141.802-.232.264-.09.523-.193.77-.246.246-.053.479-.07.695-.002.432.14.819.492 1.2.848.381.348.754.701 1.139.809.192.055.385.052.577.02.19-.034.38-.1.562-.165.365-.129.704-.271 1.01-.185.304.088.583.274.842.46.26.187.5.362.72.421.44.12.791-.238 1.022-.174l.354.101-.357.092c-.233.059-.578.144-1.027.233-.224.046-.471.003-.74-.046-.269-.047-.56-.089-.879-.046-.32.045-.669.186-1.042.316-.187.066-.38.133-.577.185a3.313 3.313 0 01-.603.103c-.41.03-.804-.274-1.206-.575-.4-.309-.81-.618-1.28-.631-.236-.003-.489.068-.754.173-.266.103-.546.251-.83.386a7.195 7.195 0 01-.867.362c-.289.086-.575.133-.847.098a27.404 27.404 0 01-3.388-.674 1.502 1.502 0 01-.415-.184 2.517 2.517 0 01-.38-.303 4.716 4.716 0 01-.351-.376 10.647 10.647 0 01-.333-.424c-.109-.143-.218-.287-.328-.424a6.3 6.3 0 00-.334-.402 2.86 2.86 0 00-.359-.335 1.727 1.727 0 00-.397-.244c-.14-.061-.29-.1-.45-.122a2.788 2.788 0 00-.488-.033c-.17.001-.344.015-.522.031-.176.013-.355.031-.535.049-.18.018-.36.035-.537.045a5.23 5.23 0 01-.518-.003 2.66 2.66 0 01-.482-.073 1.62 1.62 0 01-.421-.185 4.605 4.605 0 01-.371-.265 5.202 5.202 0 01-.342-.305 8.605 8.605 0 01-.624-.668c-.398-.456-.76-.924-1.174-1.286a5.174 5.174 0 00-.65-.485c-.223-.15-.451-.286-.678-.421-.445-.28-.88-.557-1.199-.94a1.903 1.903 0 01-.357-.677 6.027 6.027 0 01-.188-.795c-.098-.543-.15-1.07-.36-1.415-.209-.347-.576-.534-.94-.733-.357-.2-.712-.412-.821-.748a6.66 6.66 0 01-.35-1.744c-.02-.24-.005-.457-.001-.637.019-.185.031-.336.053-.459.047-.244.075-.366.075-.366l-.002-.001z"
            fill="#482984"
          />
          <Path
            d="M58.49 108.473c.022-.057.061-.106.078-.164.027-.094.043-.189.057-.284l-6-6.795c-.35-.206-.7-.411-1.044-.619a44.641 44.641 0 01-14.002-13.37c-4.388 4.49-4.097 12.68.6 16.843-4.33.389-8.802-1.468-11.588-4.812-2.303-2.762-3.38-6.474-3.045-10.05a6.079 6.079 0 00-.863-.291c-3.46-.858-7.223 1.573-8.296 4.816-1.073 3.243.183 6.9 2.552 9.446 2.37 2.546 5.701 4.116 9.108 5.148 9.112 2.764 22.834 1.387 32.445.129l-.002.003z"
            fill="#4D0D84"
            opacity={0.47}
          />
          <Path
            d="M33.818 85.142l.038.174c.024.113.057.279.094.492.036.212.077.47.122.768.045.298.085.633.13 1.003.042.367-.261.712-.226 1.142.029.43.402.934.415 1.405.006.235-.348.43-.712.633s-.73.417-.734.677c-.005.26.346.562.7.862.353.3.7.597.675.863a22.567 22.567 0 01-.184 1.555c-.039.25-.34.483-.64.714-.3.23-.608.462-.655.697-.093.474.833.945.732 1.357-.107.412-.9.8-1.004 1.161-.107.362.487.68.393.963-.096.285-.515.542-.587.747-.072.205.203.352.16.459l-.066.164-.077-.159c-.05-.104-.12-.259-.206-.458-.087-.201.097-.453-.006-.738-.102-.285-.498-.61-.601-.975-.106-.367.744-.761.654-1.185-.095-.423-1.126-.908-1.19-1.401a17.06 17.06 0 01-.116-1.54c-.006-.266.288-.518.597-.77.307-.25.62-.5.642-.776.026-.276-.24-.574-.502-.874-.262-.3-.508-.598-.457-.86.05-.263.203-.508.364-.744.16-.237.32-.467.391-.702.145-.468-.083-.968.083-1.379.162-.413 1.064-.667 1.23-1.003.161-.337-.399-.773-.25-1.04a13.458 13.458 0 01.687-1.09l.104-.142h.002zM18.75 99.423l.192.065c.125.042.307.107.534.192l.373.142c.138.049.292.094.451.148.323.102.667.24 1.07.346.197.057.356.193.524.336.082.075.176.136.272.195.098.058.202.108.317.14.116.032.242.045.372.05.067.001.132.003.2 0l.21-.017c.28-.023.557-.043.805.021.121.036.218.141.3.299.082.156.152.358.228.562.075.205.156.412.255.579.102.158.222.274.369.303.147.029.32-.028.5-.129.091-.05.183-.111.277-.179.093-.068.189-.148.282-.225.375-.309.727-.615 1.008-.554.286.04.567.089.845.142.07.012.138.028.206.039l.207.028c.137.021.275.041.41.063.134.023.265.112.395.234.13.112.261.259.395.406.132.148.268.297.406.414.137.116.275.207.41.216.272.025.527-.205.76-.431.058-.057.116-.113.173-.165.056-.053.112-.108.168-.151.11-.088.221-.142.338-.131a.898.898 0 01.36.141c.124.075.252.178.376.265.25.18.505.36.719.374.213.011.385-.137.532-.308.151-.165.285-.326.452-.32.168.006.351.097.523.18.171.077.333.156.457.155.248-.002.33-.316.46-.313l.203.007-.152.129c-.101.084-.252.205-.45.357-.1.077-.235.093-.379.116-.145.018-.303.033-.453.125-.297.177-.58.672-.995.846-.206.094-.468-.047-.729-.188-.13-.066-.263-.152-.391-.199a.544.544 0 00-.375-.03c-.12.039-.237.138-.355.266-.06.064-.119.138-.18.21l-.186.221c-.252.298-.53.596-.829.65-.148.031-.3.042-.453.06l-.466.045c-.158.013-.317.026-.48.037h-.487c-.164-.001-.325-.08-.48-.196a2.4 2.4 0 01-.227-.2c-.075-.075-.148-.16-.22-.242-.292-.332-.566-.669-.889-.717-.319-.068-.692.152-1.081.362-.097.052-.195.106-.291.151a2.49 2.49 0 01-.284.107c-.185.055-.363.072-.517.017a2.087 2.087 0 01-.44-.227 5.528 5.528 0 01-.39-.327c-.127-.113-.25-.225-.372-.327a3.546 3.546 0 00-.374-.267c-.254-.152-.536-.215-.813-.279l-.206-.05c-.067-.019-.131-.044-.194-.067a1.493 1.493 0 01-.35-.194.93.93 0 01-.254-.346 2.554 2.554 0 01-.16-.464c-.087-.329-.154-.648-.306-.801-.152-.154-.396-.141-.625-.145-.23 0-.459.003-.571-.137-.11-.139-.215-.267-.303-.392a14.414 14.414 0 01-.228-.352 13.556 13.556 0 01-.299-.493l-.098-.174-.002-.004z"
            fill="#482984"
          />
          <Path
            d="M61.96 109.66c5.24-4.874 8.796-10.596 11.12-17.372.86-2.51 1.498-5.173 1.165-7.806-.333-2.634-2.517-6.176-5.515-7.351-2.673-1.049-5.83-.482-8.33.935-3.146 1.783-4.223 4.863-4.459 8.697.117-3.205-3.871-7.132-6.891-8.195-4.295-1.51-9.368 1.041-11.413 5.117-2.045 4.076-1.36 9.174 1.014 13.066 2.375 3.892 6.23 6.692 10.358 8.615 4.13 1.923 8.57 3.054 12.951 4.296"
            fill="#C726E3"
          />
          <Path
            d="M56.663 85.108l.013.273c.002.089.005.198.01.325a86.78 86.78 0 00.035.979c.01.197.02.41.033.635.007.224.03.465.045.715.013.25.04.515.061.788.017.273-.069.537-.167.814-.096.277-.183.572-.151.889.044.319.194.655.37.993.085.17.166.338.237.506.073.17.13.337.152.506.02.169-.08.337-.253.513-.171.175-.415.358-.648.548-.235.19-.47.391-.643.594-.165.203-.265.409-.234.606.027.198.202.385.43.561.117.088.248.174.386.257.141.083.293.163.441.242.3.158.59.311.825.468.234.156.398.32.43.509l.43 2.2c.038.178-.015.382-.116.605-.093.22-.231.458-.37.701a5.389 5.389 0 00-.361.716c-.09.23-.14.447-.094.623.044.177.173.317.341.434.17.116.387.205.596.291.415.174.839.309.91.615.082.299-.064.716-.195 1.132-.13.412-.266.836-.176 1.107.087.274.373.405.66.504.286.102.553.189.628.4.072.213.038.49.006.753-.029.262-.061.513-.006.671.054.16.199.221.335.262.136.042.264.064.292.148l.087.258s-.085-.04-.243-.12l-.293-.152a6.094 6.094 0 01-.39-.222c-.144-.088-.225-.251-.317-.424-.09-.175-.188-.364-.38-.502-.196-.136-.473-.235-.769-.348-.298-.111-.594-.25-.82-.457-.227-.206-.15-.62-.079-1.025.074-.41.163-.823-.058-1.081-.21-.264-.746-.38-1.268-.543a4.894 4.894 0 01-.756-.278c-.223-.114-.407-.251-.511-.426a15.4 15.4 0 01-1.108-2.3c-.084-.206-.048-.45.036-.703.043-.128.1-.258.163-.389.065-.132.14-.265.216-.397.152-.265.299-.526.411-.773.11-.248.171-.483.128-.698-.038-.216-.178-.412-.371-.603a9.447 9.447 0 00-.664-.572 8.161 8.161 0 01-.345-.291c-.107-.1-.207-.201-.292-.303-.17-.207-.293-.42-.288-.643 0-.222.038-.445.096-.663.063-.22.147-.437.231-.65.082-.21.179-.42.256-.622a3.33 3.33 0 00.172-.598c.034-.196.035-.39.02-.584a8.746 8.746 0 00-.063-.573c-.057-.379-.08-.752.022-1.095.116-.344.495-.637.883-.897.393-.261.772-.492.907-.753.131-.26-.007-.562-.13-.856-.127-.294-.261-.584-.128-.787.132-.203.253-.39.371-.558.122-.167.235-.317.338-.452.1-.134.197-.25.283-.349l.217-.248c.118-.133.183-.2.183-.2l.001-.006z"
            fill="#791E9B"
          />
          <Path
            d="M67.145 80.142a10.523 10.523 0 00.157.56c.015.062.031.13.05.2.015.07.026.147.04.227.029.162.057.344.085.545a10.794 10.794 0 01.008 2.263c-.011.152-.06.291-.126.427-.065.136-.146.269-.23.404-.17.266-.35.537-.429.869-.084.327-.062.727-.067 1.13 0 .407-.022.819-.161 1.176-.143.355-.75.44-1.363.505-.306.034-.613.066-.866.132-.254.064-.454.165-.547.336-.364.683.977 2.562.52 3.243-.453.678-.916 1.31-1.372 1.9-.224.296-.769.383-1.31.475-.55.09-1.09.19-1.315.468-.213.281-.105.729.033 1.156.068.212.133.419.166.602.034.183.027.34-.065.459-.096.117-.235.21-.41.29-.171.082-.377.151-.578.223a5.621 5.621 0 00-.566.235c-.17.087-.312.182-.383.3a.566.566 0 00-.07.385c.008.067.024.137.046.206.024.07.053.138.081.206.058.135.117.265.148.383a.598.598 0 01.02.168.298.298 0 01-.037.149c-.104.183-.327.338-.54.487-.204.151-.406.298-.48.444a.33.33 0 00-.03.214.71.71 0 00.085.196c.07.122.146.222.11.3l-.117.239s-.033-.084-.092-.247a10.32 10.32 0 01-.104-.305l-.064-.197c-.02-.071-.037-.147-.058-.227-.039-.161.022-.331.08-.515.065-.182.137-.377.105-.608a2.623 2.623 0 00-.097-.374c-.045-.133-.102-.274-.157-.421a3.124 3.124 0 01-.142-.454 1.843 1.843 0 01-.048-.461c.003-.154.1-.28.238-.393.137-.114.316-.213.493-.311.183-.096.368-.19.513-.3.145-.11.247-.237.285-.398.033-.16-.01-.36-.088-.584-.079-.224-.184-.467-.29-.719-.214-.506-.391-1.024-.26-1.393.273-.724.6-1.458.978-2.177.19-.357.753-.483 1.323-.591.57-.113 1.148-.213 1.377-.557.46-.686-.504-2.291-.042-2.88.114-.148.26-.275.42-.39.158-.115.33-.219.504-.321.175-.103.345-.204.502-.313a2.02 2.02 0 00.41-.357c.218-.266.315-.591.396-.905.09-.313.155-.615.351-.846.1-.115.246-.202.43-.273.183-.072.402-.13.611-.19.21-.061.42-.124.602-.2.18-.075.329-.163.408-.277.158-.225.073-.528-.049-.811-.058-.14-.118-.277-.147-.398a.581.581 0 01-.018-.171.27.27 0 01.044-.146l.333-.5a188.533 188.533 0 01.386-.628l.096-.17.155-.272.134-.227-.005.005zM42.327 84.031l.163.202.45.572c.196.25.432.548.696.882l.9 1.144c.33.419.225 1.075.599 1.581.373.506 1.218.845 1.607 1.432.194.294-.097.814-.387 1.344-.29.529-.58 1.075-.384 1.403.194.328.866.426 1.524.499.66.075 1.303.12 1.481.419.362.604.705 1.164 1.051 1.68.09.127.1.32.091.54-.01.22-.057.485-.085.745-.067.527-.096 1.077.126 1.338.221.263.679.22 1.108.154.218-.035.43-.074.609-.075.182-.004.335.026.432.135.2.215.262.64.337 1.06.07.422.148.839.34 1.036.192.193.495.162.784.116.29-.045.563-.099.716.056.301.315.35 1.03.566 1.262.216.232.593-.02.703.107l.168.197-.259-.009a17.325 17.325 0 01-.732-.049c-.317-.029-.52-.435-.959-.499-.44-.064-1.13.206-1.686.072-.277-.07-.397-.448-.512-.835-.058-.192-.115-.387-.195-.548-.079-.16-.184-.282-.334-.341-.15-.059-.352-.045-.582-.003-.229.038-.487.108-.752.17-.265.062-.533.111-.783.124-.25.012-.472-.028-.645-.132a10.85 10.85 0 01-2.017-1.622c-.316-.33-.278-.945-.183-1.538.086-.596.225-1.173.009-1.53-.214-.357-.782-.508-1.345-.684-.56-.173-1.112-.367-1.256-.743-.29-.757 0-1.707-.182-2.39-.182-.684-.844-1.124-.966-1.765-.061-.32.132-.738.336-1.14.203-.403.417-.79.391-1.065-.027-.274-.295-.44-.56-.6-.264-.158-.526-.31-.528-.538a14.36 14.36 0 01.028-1.167 10.763 10.763 0 01.113-.995l.004-.002z"
            fill="#791E9B"
          />
          <Path
            d="M103.522 103.348s2.257-3.618 2.935-3.845c.676-.226 2.934-.226 3.61-.451.677-.227 2.935 2.261 2.935 2.261l-1.58 2.714s-6.77-1.357-7.898-.679h-.002zM4 98.374s1.129-3.166 1.805-2.94c.677.226 3.385-.905 3.385-.905l2.032 3.165s-2.482 1.583-3.16 1.81c-.676.226-4.06-1.132-4.06-1.132L4 98.374zM105.878 110.123s-.451-2.714.226-2.714h.676l1.58 2.036s-2.256.227-2.482.678zM39.759 118.159l2.142-4.602 9.2-2.127 2.74 4.888L50.169 120s-7.348-.614-10.41-1.841z"
            fill="#340456"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_2934_414121">
          <Path fill="#fff" d="M0 0H120V120H0z" />
        </ClipPath>
        <ClipPath id="clip1_2934_414121">
          <Path fill="#fff" transform="translate(4 23)" d="M0 0H109V97H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
