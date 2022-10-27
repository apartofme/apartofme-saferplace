import { ImageSourcePropType } from 'react-native';

export interface ITrySomethingModalProps {
  title: string;
  subtitle: string;
  titleHasNickname: boolean;
  backgroundImage: ImageSourcePropType;
  isFirstPart: boolean;
  setModalStatus: () => void;
}
