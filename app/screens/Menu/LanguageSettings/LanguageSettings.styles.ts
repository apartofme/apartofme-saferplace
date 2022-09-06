import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IHomeScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<IHomeScreenStyles>({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    marginTop: 48,
  },
  subtitle: {
    marginTop: 24,
  },
});
