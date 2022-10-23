import { StyleSheet, ViewStyle } from 'react-native';

interface IEditProfileScreenStyles {
  container: ViewStyle;
  button: ViewStyle;
}

export const styles = StyleSheet.create<IEditProfileScreenStyles>({
  container: {
    paddingHorizontal: 40,
  },
  button: {
    marginVertical: 24,
    marginHorizontal: 40,
  },
});
