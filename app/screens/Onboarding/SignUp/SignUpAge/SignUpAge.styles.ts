import { StyleSheet, ViewStyle } from 'react-native';

interface ISignUpAgeScreenStyles {
  container: ViewStyle;
  vm: ViewStyle;
}

export const styles = StyleSheet.create<ISignUpAgeScreenStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 25,
  },
  vm: {
    marginTop: 24,
    marginBottom: 68,
  },
});
