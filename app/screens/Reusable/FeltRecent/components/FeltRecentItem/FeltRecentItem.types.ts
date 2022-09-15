import { ImageSourcePropType } from 'react-native';

export interface IFeltRecentItemProps {
  titleKey: string;
  isActive: boolean;
  image?: ImageSourcePropType;
  onPress: () => void;
}
