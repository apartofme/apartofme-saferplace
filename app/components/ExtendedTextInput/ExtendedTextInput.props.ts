import { TextInputProps, TextStyle } from 'react-native';
import { ExtendedTextInputType } from './ExtendedTextInput.data';

export interface IExtendedTextInputProps extends TextInputProps {
  label?: string;
  labelStyle?: TextStyle;

  type?: ExtendedTextInputType;

  error?: string;
  errorStyle?: TextStyle;
}
