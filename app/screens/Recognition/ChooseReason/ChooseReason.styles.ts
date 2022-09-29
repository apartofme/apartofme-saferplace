import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IChooseReasonScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  submitButton: ViewStyle;
  skipTitle: TextStyle;
}

export const styles = StyleSheet.create<IChooseReasonScreenStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  title: {
    marginTop: 48,
  },
  subtitle: {
    marginTop: 16,
    marginBottom: 36,
  },
  submitButton: {
    marginBottom: 28,
  },
  skipTitle: {
    textAlign: 'center',
  },
});
