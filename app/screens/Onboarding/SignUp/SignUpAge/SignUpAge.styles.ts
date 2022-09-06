import { StyleSheet, ViewStyle } from 'react-native';

interface ISignUpAgeScreenStyles {
  container: ViewStyle;
  subtitle: ViewStyle;
}

export const styles = StyleSheet.create<ISignUpAgeScreenStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  subtitle: {
    marginTop: 24,
    marginBottom: 68,
  },
});
