import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface ILoadingScreenStyles {
  container: ViewStyle;
  timer: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<ILoadingScreenStyles>({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  timer: {
    marginTop: 176,
    marginBottom: 74,
  },
  title: {
    textAlign: 'center',
    marginBottom: 25,
  },
  subtitle: {
    textAlign: 'center',
  },
});
