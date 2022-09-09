import { ImageSourcePropType } from 'react-native';

export interface ITimerScreenProps {
  duration: number;
  background: ImageSourcePropType;
  titleKey?: string;
}
