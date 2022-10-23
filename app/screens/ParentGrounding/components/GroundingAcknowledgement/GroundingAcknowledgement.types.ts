import { ImageSourcePropType } from 'react-native';

export interface IGroundingAcknowledgementProps {
  title: string;
  buttonTitle: string;
  isButtonArrow?: boolean;
  backgroundImage: ImageSourcePropType;
  onSubmit: () => void;
}
