import { ImageSourcePropType } from 'react-native';

export interface IMenuButtonProps {
  title: string;
  icon?: ImageSourcePropType;
  onPress: () => void;
}
