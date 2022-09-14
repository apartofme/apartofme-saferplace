import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface IAboutUsScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<IAboutUsScreenStyles>({
  container: {
    marginHorizontal: 24,
  },
  title: {
    marginTop: 48,
  },
  subtitle: {
    marginTop: 39,
  },
});
