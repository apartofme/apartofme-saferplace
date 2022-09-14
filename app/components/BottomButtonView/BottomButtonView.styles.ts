import { StyleSheet, ViewStyle } from 'react-native';

export interface IBottomButtonViewStyles {
  container: ViewStyle;
  button: ViewStyle;
}

export const styles = StyleSheet.create<IBottomButtonViewStyles>({
  container: {
    flex: 1,
    paddingBottom: 24,
  },
  button: {
    marginHorizontal: 40,
  },
});
