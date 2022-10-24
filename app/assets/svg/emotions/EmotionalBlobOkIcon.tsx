import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

import { WINDOW_WIDTH } from '../../../constants/window';
import { ISvgProps } from '../../../utils/types';

export const EmotionalBlobOkIcon = ({
  width = 375,
  height = 495,
}: ISvgProps) => {
  return (
    <Svg
      width={WINDOW_WIDTH}
      height={(height * WINDOW_WIDTH) / width}
      viewBox="0 0 375 495"
      fill="none">
      <G clipPath="url(#clip0_2913_366354)">
        <Path
          d="M190.3 0C140.438 0 52.837 40.395 0 98.324v396.079h375V95.826C324.355 39.236 241.675 0 190.3 0z"
          fill="#6C8289"
        />
        <Path
          d="M266.239 106.562s1.666 11.058-2.986 16.482c-4.651 5.423-12.135 11.024-17.471 11.081-5.335.059-18.446-3.964-19.579-11.144-1.895-12.006 13.596-14.551 17.411-15.622 3.816-1.071 21.043-.56 22.623-.798l.002.001z"
          fill="#fff"
        />
        <Path
          d="M158.127 176.888l1.186-.228c.753-.15 1.815-.344 3.064-.622l2.007-.509c.349-.092.71-.183 1.078-.28l.553-.147c.187-.057.374-.113.564-.172 1.514-.472 3.087-.926 4.645-1.509.779-.28 1.546-.542 2.3-.825l2.207-.859c.353-.136.703-.269 1.045-.399l1.005-.411a87.487 87.487 0 011.848-.723c.573-.207 1.11-.425 1.595-.593.483-.172.915-.308 1.289-.403.373-.095.687-.146.932-.152.245-.005.425.028.524.123.792.754 1.898 2.333 2.933 3.753 1.031 1.399 1.981 2.634 2.346 2.749.181.057.571-.326 1.058-.93.487-.605 1.071-1.456 1.652-2.304.58-.849 1.157-1.708 1.642-2.356.487-.652.886-1.106 1.115-1.123.115-.009.52.125 1.144.366.625.242 1.467.597 2.465.997 1.99.818 4.598 1.878 7.207 2.907a783.42 783.42 0 007.163 2.774c1.948.746 3.239 1.238 3.239 1.238-9.241 1.344-18.665 2.628-28.35 2.957-4.839.161-9.743.077-14.679-.415-4.933-.493-9.905-1.401-14.775-2.904h-.002z"
          fill="#95ABAC"
        />
        <Path
          d="M202.689 193.446s-.402.183-1.146.478l-.621.241c-.227.085-.476.169-.745.26-.536.18-1.148.387-1.834.57a60.56 60.56 0 01-1.079.289c-.375.095-.769.18-1.177.269a36.299 36.299 0 01-8.698.804 36.844 36.844 0 01-6.042-.72 37.242 37.242 0 01-2.588-.633c-.401-.115-.789-.225-1.157-.342-.37-.121-.721-.242-1.056-.359a28.733 28.733 0 01-1.795-.689 37.217 37.217 0 01-.727-.307c-.218-.101-.419-.196-.602-.282a28.052 28.052 0 01-1.113-.553s.446-.037 1.239-.068l.658-.02.78-.031c.575-.017 1.21-.033 1.882-.052l2.259-.044c.808-.001 1.669-.027 2.568-.022 1.801-.014 3.766.002 5.824.072 2.058.062 4.019.168 5.817.296.899.054 1.756.13 2.562.187l2.252.189 1.877.174.776.082.654.064a32.06 32.06 0 011.232.149v-.002zM211.037 176.455c-7.833.416-39.238.416-47.071 0-1.37-.073-2.738.823-4.107.749-1.481-.078-2.505 1.075-1.758 2.002 1.179 1.465 3.318 1.649 5.427 2.501 6.9 2.787 41.047 2.787 47.948 0 2.11-.852 4.248-1.038 5.428-2.501.747-.927-.279-2.08-1.758-2.002l-4.107-.749h-.002z"
          fill="#32194C"
        />
        <Path
          d="M241.819 133.967c8.282 0 14.996-6.714 14.996-14.996s-6.714-14.996-14.996-14.996c-8.283 0-14.997 6.714-14.997 14.996s6.714 14.996 14.997 14.996z"
          fill="#D578FF"
        />
        <Path
          d="M226.824 119.209l.029.242c.022.159.037.399.09.708.09.619.269 1.528.639 2.643.196.553.427 1.162.745 1.796.315.633.69 1.304 1.167 1.972a14.837 14.837 0 003.92 3.818c.838.56 1.778 1.049 2.794 1.437a13.78 13.78 0 003.265.822c1.15.145 2.355.163 3.57.004.61-.066 1.216-.198 1.824-.348a14.846 14.846 0 001.798-.606 13.892 13.892 0 006.105-4.955 13.73 13.73 0 00-.253-15.886 13.876 13.876 0 00-6.258-4.759 13.711 13.711 0 00-3.65-.837 14.104 14.104 0 00-3.568.117 13.914 13.914 0 00-3.238.927 14.147 14.147 0 00-2.746 1.525 14.833 14.833 0 00-3.796 3.941 14.39 14.39 0 00-1.102 2.006 14.653 14.653 0 00-.689 1.819 15.42 15.42 0 00-.555 2.66c-.044.311-.049.549-.067.711l-.02.243-.017-.243c-.005-.162-.035-.401-.037-.718a14.54 14.54 0 01.674-4.743c.225-.71.515-1.472.914-2.254a15.47 15.47 0 016.608-6.705 15.362 15.362 0 013.626-1.366 15.848 15.848 0 014.158-.436c.723.009 1.458.094 2.195.207.738.125 1.478.302 2.214.531a16.206 16.206 0 019.265 7.614c.215.375.4.767.586 1.161.171.401.346.802.487 1.217.292.828.535 1.683.687 2.56.156.877.244 1.771.264 2.672.009.9-.052 1.796-.18 2.678-.124.883-.34 1.745-.606 2.58-.13.42-.291.826-.448 1.233-.176.399-.348.796-.55 1.179a16.02 16.02 0 01-1.344 2.182 16.204 16.204 0 01-7.676 5.723c-.728.25-1.461.454-2.195.6-.734.137-1.465.244-2.188.277a15.843 15.843 0 01-4.169-.304 15.402 15.402 0 01-3.668-1.249 15.48 15.48 0 01-6.817-6.493 14.423 14.423 0 01-.985-2.225 14.592 14.592 0 01-.824-4.718c-.009-.315.011-.557.013-.718l.009-.244v.002z"
          fill="#32194C"
        />
        <Path
          d="M241.366 129.621c5.726 0 10.368-4.642 10.368-10.368s-4.642-10.367-10.368-10.367c-5.725 0-10.367 4.641-10.367 10.367 0 5.726 4.642 10.368 10.367 10.368z"
          fill="#32194C"
        />
        <Path
          d="M108.988 106.562s-1.666 11.058 2.987 16.482c4.651 5.423 12.134 11.024 17.47 11.081 5.336.059 18.446-3.964 19.579-11.144 1.896-12.006-13.595-14.551-17.411-15.622-3.816-1.071-21.043-.56-22.623-.798l-.002.001z"
          fill="#fff"
        />
        <Path
          d="M133.407 133.967c8.283 0 14.997-6.714 14.997-14.996s-6.714-14.996-14.997-14.996c-8.282 0-14.996 6.714-14.996 14.996s6.714 14.996 14.996 14.996z"
          fill="#D578FF"
        />
        <Path
          d="M148.402 119.209l.009.244c0 .161.022.403.013.718a14.592 14.592 0 01-.824 4.718c-.247.701-.56 1.456-.985 2.225a15.51 15.51 0 01-3.829 4.592 15.218 15.218 0 01-2.988 1.901c-1.115.54-2.346.983-3.668 1.249-1.32.271-2.724.393-4.169.304a15.946 15.946 0 01-2.188-.277 16.89 16.89 0 01-2.195-.601 16.19 16.19 0 01-7.676-5.722 15.9 15.9 0 01-1.344-2.182 17.56 17.56 0 01-.55-1.179c-.157-.407-.32-.813-.448-1.233a15.79 15.79 0 01-.606-2.58 17.423 17.423 0 01-.18-2.678c.02-.901.108-1.795.264-2.672.154-.877.396-1.732.687-2.56.142-.415.316-.816.487-1.217.186-.394.373-.786.586-1.161a16.206 16.206 0 019.265-7.614 17.025 17.025 0 012.214-.531 16.183 16.183 0 012.195-.207 15.844 15.844 0 014.158.436c1.313.308 2.529.789 3.626 1.366a15.49 15.49 0 016.608 6.705c.399.782.689 1.544.914 2.254a14.54 14.54 0 01.674 4.743c0 .315-.03.556-.037.718l-.017.243-.02-.243c-.018-.162-.023-.4-.067-.711a15.42 15.42 0 00-.555-2.66 14.653 14.653 0 00-.689-1.819 14.23 14.23 0 00-1.102-2.007 14.845 14.845 0 00-3.796-3.94 13.94 13.94 0 00-2.746-1.525 13.935 13.935 0 00-3.238-.927 14.015 14.015 0 00-3.568-.117c-.612.048-1.222.159-1.833.289-.61.141-1.216.326-1.817.548a13.866 13.866 0 00-6.258 4.759 13.74 13.74 0 00-2.659 7.903 13.758 13.758 0 002.406 7.983 13.864 13.864 0 006.105 4.955c.591.24 1.192.445 1.798.606.608.15 1.214.282 1.824.348 1.215.159 2.42.141 3.57-.004a13.903 13.903 0 003.265-.822 14.079 14.079 0 002.794-1.437 14.837 14.837 0 003.92-3.818c.477-.668.852-1.337 1.167-1.972.32-.634.551-1.242.745-1.796.37-1.114.551-2.024.639-2.643.053-.309.068-.547.09-.708.018-.16.029-.242.029-.242v-.002z"
          fill="#32194C"
        />
        <Path
          d="M133.86 129.621c5.725 0 10.367-4.642 10.367-10.368s-4.642-10.367-10.367-10.367c-5.726 0-10.368 4.641-10.368 10.367 0 5.726 4.642 10.368 10.368 10.368zM277.808 108.138s-.203.128-.608.366c-.203.118-.463.24-.774.398-.158.071-.328.141-.513.219a7.95 7.95 0 01-.599.228c-.853.305-1.946.589-3.239.763-.648.093-1.338.147-2.076.185-.733.027-1.511.037-2.315.007-1.613-.047-3.349-.216-5.147-.426-1.798-.209-3.664-.467-5.515-.625a34.224 34.224 0 00-2.743-.135h-.337l-.331.007-.332.007-.324.021-.329.018-.379.029-.764.055c-2.04.152-4.122.381-6.203.705-1.046.152-2.055.352-3.047.548-.982.217-1.947.437-2.862.706-.93.251-1.8.561-2.657.868-.833.335-1.654.667-2.402 1.06-.769.372-1.462.806-2.141 1.236l-.482.345c-.159.115-.327.223-.472.348-.297.245-.615.472-.882.734a16.074 16.074 0 00-2.804 3.259 19.225 19.225 0 00-1.723 3.38c-.108.269-.19.535-.284.791-.088.257-.186.504-.249.749a201.086 201.086 0 00-.3 1.031c-.031.108-.051.214-.077.317l-.265 1.108-.16.827c-.089.451-.139.692-.139.692s-.075-.234-.212-.672a41.871 41.871 0 01-.246-.827c-.077-.33-.164-.714-.26-1.154-.022-.11-.051-.221-.069-.339a25.02 25.02 0 01-.055-.358l-.112-.78c-.046-.275-.055-.561-.079-.861-.018-.3-.047-.615-.051-.941a17.887 17.887 0 01.487-4.508 17.21 17.21 0 012.262-5.259c.271-.454.598-.87.921-1.309.159-.224.34-.425.518-.636.181-.208.362-.419.545-.631.769-.806 1.604-1.61 2.535-2.317.917-.734 1.92-1.371 2.968-1.981 1.054-.575 2.157-1.128 3.303-1.571 1.144-.469 2.329-.842 3.538-1.177a35.366 35.366 0 013.696-.771 40.19 40.19 0 017.286-.447l.872.033.432.018.478.033.478.035.467.053.463.055.452.07c1.2.188 2.316.454 3.368.75 2.1.599 3.931 1.317 5.601 1.987 1.666.672 3.167 1.308 4.543 1.831 1.373.529 2.622.947 3.744 1.242 1.121.296 2.117.47 2.948.554.209.024.407.044.591.052l.528.031c.324 0 .608.011.835.004.456-.017.701-.028.701-.028l-.002-.002z"
          fill="#32194C"
        />
        <Path
          d="M97.418 108.138l.701.028c.227.007.511-.004.835-.004l.528-.031c.184-.007.384-.027.591-.051a19.172 19.172 0 002.948-.555c1.122-.293 2.369-.712 3.745-1.241 1.375-.524 2.874-1.159 4.542-1.831 1.668-.669 3.501-1.388 5.602-1.987a27.863 27.863 0 013.367-.751c.15-.024.3-.046.452-.069l.463-.055c.156-.019.312-.035.467-.054l.478-.034.478-.033.432-.019.872-.033a40.36 40.36 0 017.286.447c1.252.183 2.488.46 3.696.771 1.209.335 2.394.709 3.538 1.177 1.146.445 2.249.997 3.303 1.572 1.046.609 2.051 1.246 2.968 1.981.931.707 1.766 1.51 2.535 2.316l.545.632c.178.21.359.412.518.635.323.44.65.857.921 1.309a17.25 17.25 0 012.262 5.259 17.8 17.8 0 01.487 4.508c-.004.326-.035.641-.051.941-.024.301-.033.586-.079.861l-.112.78c-.018.123-.036.242-.055.359-.018.117-.047.229-.069.339-.096.437-.182.822-.26 1.153a42.229 42.229 0 01-.458 1.5l-.139-.692-.16-.828c-.076-.322-.164-.694-.265-1.108-.026-.102-.046-.209-.077-.317l-.097-.329a73.841 73.841 0 01-.203-.701c-.063-.244-.163-.491-.249-.749-.094-.257-.176-.522-.284-.791a19.165 19.165 0 00-1.723-3.381 15.895 15.895 0 00-2.803-3.259c-.27-.262-.586-.489-.883-.734-.145-.126-.313-.233-.472-.348l-.482-.344c-.679-.43-1.371-.864-2.14-1.236-.749-.394-1.57-.727-2.403-1.06-.855-.306-1.727-.617-2.657-.868-.917-.271-1.88-.489-2.862-.707-.992-.196-2.001-.397-3.047-.547a78.162 78.162 0 00-6.203-.705 196.08 196.08 0 00-.764-.055l-.379-.03-.329-.018-.324-.02-.332-.007-.331-.01h-.337c-.897.006-1.818.059-2.743.138-1.851.157-3.719.415-5.515.624-1.798.211-3.534.379-5.147.427a32.33 32.33 0 01-2.315-.008 22.012 22.012 0 01-2.076-.185 15.98 15.98 0 01-3.24-.763 8.087 8.087 0 01-.598-.227c-.185-.079-.355-.148-.513-.22-.311-.155-.571-.28-.774-.397-.405-.238-.608-.366-.608-.366l-.002.001zM266.255 106.751l.156.591c.049.198.111.439.185.723.069.288.119.623.19 1.002.26 1.512.471 3.768.141 6.561a26.32 26.32 0 01-1.011 4.495 24.456 24.456 0 01-2.234 4.85 23.383 23.383 0 01-3.704 4.675 22.512 22.512 0 01-5.22 3.772c-.985.516-2.003.941-3.043 1.285a18.596 18.596 0 01-3.126.747 21.43 21.43 0 01-3.071.246 22.7 22.7 0 01-2.928-.193 22.566 22.566 0 01-2.72-.541 23.378 23.378 0 01-2.471-.815 22.22 22.22 0 01-4.094-2.155c-2.34-1.586-3.862-3.291-4.772-4.53-.111-.156-.219-.303-.32-.442-.099-.139-.183-.274-.264-.399a10.674 10.674 0 01-.395-.633c-.198-.347-.306-.532-.306-.532l.418.447c.131.149.309.323.516.528.104.1.212.214.335.327a21.629 21.629 0 005.601 3.811 23.85 23.85 0 003.985 1.45 25.08 25.08 0 002.29.48c.793.117 1.612.212 2.45.249a23.98 23.98 0 002.567-.028 21.67 21.67 0 002.63-.36c.88-.174 1.761-.416 2.627-.727.863-.31 1.731-.682 2.575-1.126a23.361 23.361 0 004.605-3.168 24.716 24.716 0 003.525-3.893 26.352 26.352 0 002.457-4.151 29.776 29.776 0 001.489-3.995c.697-2.535.908-4.703.953-6.204.006-.375.028-.712.021-1.003-.01-.29-.017-.537-.022-.738l-.017-.612.002.006z"
          fill="#32194C"
        />
        <Path
          d="M108.97 106.751l-.017.612-.022.737c-.005.292.015.629.02 1.004.046 1.501.257 3.669.954 6.203.374 1.26.852 2.612 1.489 3.996a26.366 26.366 0 002.457 4.151 24.565 24.565 0 003.525 3.893 23.2 23.2 0 004.605 3.167c.846.445 1.712.817 2.575 1.127.866.311 1.746.552 2.627.726.881.176 1.76.295 2.63.361.869.057 1.728.064 2.567.028a24.038 24.038 0 002.45-.249 25.494 25.494 0 002.29-.48 23.94 23.94 0 003.985-1.45 21.688 21.688 0 005.207-3.452c.139-.126.271-.245.394-.359.123-.113.231-.227.335-.328.207-.203.384-.377.516-.527l.418-.447s-.106.187-.306.531a9.508 9.508 0 01-.396.634c-.082.123-.166.26-.263.399l-.321.441c-.91 1.238-2.431 2.945-4.771 4.53a22.139 22.139 0 01-4.095 2.156c-.78.303-1.604.582-2.47.814a22.7 22.7 0 01-2.721.542 23.01 23.01 0 01-2.927.193 21.288 21.288 0 01-3.071-.246 18.717 18.717 0 01-3.126-.747 20.17 20.17 0 01-3.043-1.285 22.47 22.47 0 01-5.22-3.772 23.598 23.598 0 01-3.705-4.675 24.558 24.558 0 01-2.233-4.85 26.329 26.329 0 01-1.011-4.496c-.33-2.792-.119-5.048.141-6.56.071-.379.121-.714.19-1.002l.183-.723.156-.592.004-.005z"
          fill="#32194C"
        />
        <Path
          d="M247.844 95.688s-.348.068-.941.154l-.489.068c-.177.029-.371.07-.576.106-.411.078-.867.135-1.365.256a30.7 30.7 0 01-.77.156c-.266.053-.541.133-.821.194-.562.113-1.15.293-1.761.438-1.22.34-2.518.717-3.875 1.13-1.351.43-2.635.854-3.832 1.266-.586.227-1.172.414-1.699.639-.266.108-.539.198-.788.306-.247.11-.489.213-.723.31-.48.183-.886.395-1.269.562-.189.086-.372.161-.535.24l-.441.221c-.538.266-.862.408-.862.408s.117-.318.377-.882l.223-.469c.088-.166.194-.34.308-.529.231-.374.489-.819.84-1.247.171-.22.356-.45.551-.688.198-.237.425-.454.656-.693.456-.485 1.003-.926 1.593-1.39a15.01 15.01 0 014.31-2.204 15.017 15.017 0 014.801-.628c.747.046 1.451.1 2.101.242.324.066.635.117.932.2.296.084.576.17.844.254.533.154.998.373 1.4.551.202.091.387.174.553.262l.451.26c.535.318.811.513.811.513l-.004-.006zM127.381 95.688s.276-.196.811-.513l.45-.26c.167-.088.354-.17.553-.262.403-.178.868-.397 1.401-.551.266-.084.548-.17.844-.255.297-.082.608-.133.932-.2.65-.14 1.353-.193 2.101-.24a15.014 15.014 0 014.801.627 15.022 15.022 0 014.31 2.205c.589.463 1.137.904 1.593 1.39.231.238.458.457.655.692.196.238.379.467.552.688.351.429.609.874.84 1.247.114.191.22.363.308.529l.223.469c.26.566.377.883.377.883s-.324-.141-.862-.409l-.442-.221c-.162-.077-.346-.154-.534-.24-.383-.167-.789-.379-1.269-.562-.234-.097-.476-.2-.723-.31-.249-.108-.52-.196-.788-.305-.527-.226-1.113-.413-1.699-.64a175.179 175.179 0 00-3.832-1.267 169.969 169.969 0 00-3.875-1.13c-.611-.144-1.199-.323-1.761-.437-.28-.062-.555-.143-.821-.194-.265-.05-.523-.103-.771-.156-.498-.12-.953-.175-1.364-.256-.205-.037-.399-.077-.576-.106l-.489-.068c-.595-.086-.941-.154-.941-.154l-.004.006z"
          fill="#435B60"
        />
        <Path
          d="M263.96 78.615s-.594.055-1.575.093l-.804.026c-.293.015-.613.042-.946.06-.672.048-1.401.052-2.211.13-.401.03-.813.055-1.234.075-.208.004-.428.035-.648.052-.22.018-.439.034-.663.053l-.674.042c-.113.007-.225.01-.34.018l-.348.035c-.467.044-.938.079-1.414.1-1.92.158-3.929.28-6.035.305a85.854 85.854 0 01-6.04-.083 30.279 30.279 0 01-1.418-.05l-.349-.021c-.116-.006-.229-.004-.343-.006l-.675-.016-.665-.03c-.22-.008-.441-.032-.65-.027a45.142 45.142 0 01-1.238-.03c-.813-.049-1.54-.027-2.214-.049-.335-.005-.655-.023-.948-.025-.289 0-.559.003-.804.003-.983-.001-1.577-.036-1.577-.036s.279-.495.872-1.328c.148-.208.317-.44.507-.688.194-.242.416-.487.658-.755.487-.525 1.052-1.148 1.75-1.712.344-.293.714-.593 1.108-.899.194-.159.405-.289.617-.434a36.72 36.72 0 011.351-.855c.119-.07.238-.146.361-.212l.374-.192a36.91 36.91 0 011.58-.753c2.204-.916 4.801-1.564 7.56-1.628 2.761-.038 5.378.515 7.615 1.348a36.09 36.09 0 011.608.694l.381.178c.125.062.247.131.368.197.242.134.478.27.709.403.23.134.454.27.672.403.218.137.432.26.633.412.405.291.786.579 1.141.859.718.538 1.306 1.139 1.811 1.646.251.258.483.494.685.73.199.242.377.466.533.669.624.81.919 1.294.919 1.294v.004zM111.041 78.615s.295-.483.919-1.294c.156-.204.333-.427.533-.669.201-.234.434-.47.685-.73.505-.507 1.093-1.108 1.811-1.646.355-.28.736-.566 1.141-.86.201-.151.415-.274.633-.411a35.638 35.638 0 011.381-.806c.121-.066.243-.137.368-.198.126-.058.252-.119.381-.177a36.04 36.04 0 011.607-.694c2.238-.833 4.854-1.386 7.616-1.348 2.761.064 5.355.712 7.56 1.628.549.245 1.077.498 1.58.752l.374.193c.122.066.241.14.36.212a34.704 34.704 0 011.352.855c.212.145.423.275.617.434.394.306.763.608 1.108.9.697.563 1.263 1.186 1.75 1.711.242.268.465.513.657.755.191.249.359.48.508.688.593.835.871 1.328.871 1.328s-.593.033-1.576.036l-.804-.003c-.293.003-.615.02-.949.025-.673.022-1.402 0-2.213.05-.401.014-.815.025-1.238.03-.209-.005-.43.017-.65.026l-.665.03-.675.016c-.114.004-.228 0-.343.006l-.35.022c-.467.027-.939.044-1.417.05a85.883 85.883 0 01-6.041.082 85.287 85.287 0 01-6.035-.304 29.308 29.308 0 01-1.413-.101l-.348-.035c-.115-.009-.227-.01-.341-.018l-.674-.042c-.223-.019-.444-.037-.662-.053-.218-.017-.44-.05-.649-.052a36.414 36.414 0 01-1.234-.075c-.809-.078-1.538-.084-2.21-.13-.333-.018-.655-.047-.946-.06l-.804-.026c-.982-.038-1.575-.093-1.575-.093v-.004z"
          fill="#32194C"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2913_366354">
          <Path fill="#fff" d="M0 0H375V494.403H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};