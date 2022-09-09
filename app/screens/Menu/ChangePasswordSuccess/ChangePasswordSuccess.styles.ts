import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface IChangePasswordSuccessScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<IChangePasswordSuccessScreenStyles>({
  container: {
    alignItems: 'center',
  },
  title: {
    marginTop: 46,
  },
  subtitle: {
    marginTop: 24,
  },
});
