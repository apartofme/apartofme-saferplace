import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface ISearchBoxStyles {
  container: ViewStyle;
  input: TextStyle;
  icon: ImageStyle;
}

export const styles = StyleSheet.create<ISearchBoxStyles>({
  container: {},
  input: {},
  icon: {},
});
