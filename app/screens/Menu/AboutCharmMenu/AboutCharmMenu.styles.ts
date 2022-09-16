import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IAboutCharmMenuScreenStyles {
  container: ViewStyle;
  subtitle: ViewStyle;
  title: TextStyle;
  list: ViewStyle;
}

export const styles = StyleSheet.create<IAboutCharmMenuScreenStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 48,
  },
  subtitle: {
    marginTop: 13,
  },
  list: {
    paddingTop: 50,
    flex: 1,
  },
});
