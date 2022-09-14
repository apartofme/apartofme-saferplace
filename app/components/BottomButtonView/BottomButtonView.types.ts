import { ViewProps } from 'react-native';

export interface IBottomButtonViewProps extends ViewProps {
  buttonTitle: string;
  onSubmit: () => void;
  isDisabledButton?: boolean;
}
