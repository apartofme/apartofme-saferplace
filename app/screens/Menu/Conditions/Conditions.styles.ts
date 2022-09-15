import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IConditionsScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<IConditionsScreenStyles>({
  // TODO: change on correct styles
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 48,
  },
  subtitle: {
    marginTop: 20,
    marginBottom: 40,
  },
});
