import { ImageSourcePropType, ViewProps } from 'react-native';

export interface IRadioButtonProps extends ViewProps {
  title: string;
  isActive?: boolean;
  onPress?: () => void;
  imageSource?: ImageSourcePropType;
}
