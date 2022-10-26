import { ImageSourcePropType } from 'react-native';

export interface IEmotionModalProps {
  title: string;
  backgroundImage: ImageSourcePropType;
  setModalStatus: () => void;
}
