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
    paddingTop: 16,
    paddingBottom: 56,
  },
  inputContainer: {
    height: 160,
  },
});
