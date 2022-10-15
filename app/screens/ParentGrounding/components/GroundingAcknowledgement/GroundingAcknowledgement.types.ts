import { ImageSourcePropType } from 'react-native';

export interface IGroundingAcknowledgementProps {
  title: string;
  buttonTitle: string;
  image: ImageSourcePropType;
  backgroundImage: ImageSourcePropType;
  onSubmit: () => void;
}
