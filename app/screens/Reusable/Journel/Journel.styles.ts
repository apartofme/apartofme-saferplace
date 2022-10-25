import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IJournelScreenStyles {
  container: ViewStyle;
  description: TextStyle;
  inputContainer: ViewStyle;
}

export const styles = StyleSheet.create<IJournelScreenStyles>({
  container: {
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  description: {
    marginTop: 16,
  },
  inputContainer: {
    marginTop: 36,
    height: 160,
  },
});
