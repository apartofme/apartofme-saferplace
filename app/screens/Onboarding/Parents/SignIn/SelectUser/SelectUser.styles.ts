import { StyleSheet, ViewStyle } from 'react-native';

interface ISelectUserScreenStyles {
  container: ViewStyle;
}

export const styles = StyleSheet.create<ISelectUserScreenStyles>({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 24,
  },
});
