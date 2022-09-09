import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IWelcomeChildScreenStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IWelcomeChildScreenStyles>({
  container: {
    paddingHorizontal: 40,
  },
  title: {
    marginTop: 187,
    marginBottom: 28,
    textAlign: 'center',
  },
});
