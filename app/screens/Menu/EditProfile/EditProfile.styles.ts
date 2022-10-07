import { StyleSheet, ViewStyle } from 'react-native';

interface IEditProfileScreenStyles {
  container: ViewStyle;
  button: ViewStyle;
}

export const styles = StyleSheet.create<IEditProfileScreenStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  button: {
    marginHorizontal: 40,
    marginBottom: 24,
  },
});
