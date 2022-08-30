import { ViewProps } from 'react-native';

export interface IBottomButtonViewProps extends ViewProps {
  title: string;
  onPress: () => void;
}
