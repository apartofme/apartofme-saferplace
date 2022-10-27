import { TextInputProps } from 'react-native';

export interface IMultilineTextInputProps extends TextInputProps {
  setIsInputFocus?: (value: boolean) => void;
}
