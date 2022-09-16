import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IAboutCharmScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<IAboutCharmScreenStyles>({
  // TODO: change on correct styles
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 172,
  },
  subtitle: {
    marginTop: 20,
    marginBottom: 40,
  },
});
