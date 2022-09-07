import { StyleSheet, ViewStyle } from 'react-native';

export interface IBottomButtonViewStyles {
  container: ViewStyle;
  button: ViewStyle;
}

export const styles = StyleSheet.create<IBottomButtonViewStyles>({
  container: {
    flex: 1,
  },
  button: {
    marginHorizontal: 40,
    marginBottom: 24,
  },
});
