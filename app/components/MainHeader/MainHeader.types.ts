import { ImageSourcePropType } from 'react-native';

export interface IMainHeaderProps {
  title?: string;
  rightIcon?: ImageSourcePropType;
  leftIcon?: ImageSourcePropType;
  onRightIconPress?: () => void;
  onLeftIconPress?: () => void;
}
