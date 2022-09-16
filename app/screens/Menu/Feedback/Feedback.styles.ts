import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface IFeedbackScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  inputContainer: ViewStyle;
}

export const styles = StyleSheet.create<IFeedbackScreenStyles>({
  container: {
    marginHorizontal: 24,
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
