import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface ILanguageSelectionStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<ILanguageSelectionStyles>({
  container: {
    paddingHorizontal: 24,
  },
  title: {
    marginBottom: 73,
  },
});
