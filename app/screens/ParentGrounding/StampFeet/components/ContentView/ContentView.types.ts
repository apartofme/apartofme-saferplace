import { ImageSourcePropType } from 'react-native';

export interface IContentViewProps {
  title: string;
  subtitle: string;
  buttonTitle: string;
  isButtonArrow?: boolean;
  backgroundImage: ImageSourcePropType;
  onBackArrowPress: () => void;
  onSubmit: () => void;
}
