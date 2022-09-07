import { ImageStyle, TextInputProps, ViewStyle } from 'react-native';

export interface ISearchBoxProps extends TextInputProps {
  containerStyle?: ViewStyle;
  iconStyle?: ImageStyle;
}
