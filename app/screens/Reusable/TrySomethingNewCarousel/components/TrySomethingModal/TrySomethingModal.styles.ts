import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export interface ITrySomethingModalStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<ITrySomethingModalStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 48,
  },
  subtitle: {
    marginTop: 16,
    marginBottom: 24,
  },
});
