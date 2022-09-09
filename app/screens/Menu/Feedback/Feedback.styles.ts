import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface IHomeScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  inputContainer: ViewStyle;
}

export const styles = StyleSheet.create<IHomeScreenStyles>({
  container: {
    marginLeft: 23,
    marginRight: 27,
  },
  title: {
    marginTop: 48,
  },
  subtitle: {
    marginTop: 27,
  },
  inputContainer: {
    marginTop: 30,
    height: 160,
  },
});
