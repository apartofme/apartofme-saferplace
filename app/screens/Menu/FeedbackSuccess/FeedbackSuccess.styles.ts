import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface IFeedbackSuccessScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<IFeedbackSuccessScreenStyles>({
  container: {
    alignItems: 'center',
  },
  title: {
    marginTop: 46,
  },
  subtitle: {
    marginTop: 24,
  },
});
