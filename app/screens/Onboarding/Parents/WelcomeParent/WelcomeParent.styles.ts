import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IWelcomeParentScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  button: ViewStyle;
}

export const styles = StyleSheet.create<IWelcomeParentScreenStyles>({
  container: {
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 155,
    marginBottom: 41,
    textAlign: 'center',
  },
  button: {
    marginBottom: 24,
    marginHorizontal: 16,
  },
});
