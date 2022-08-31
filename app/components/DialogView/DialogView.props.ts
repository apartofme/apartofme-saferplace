import { ImageSourcePropType } from 'react-native';

export interface IDialogViewProps {
  backgroundImage: ImageSourcePropType;
  text: string;
  onButtonPress: () => void;
}
