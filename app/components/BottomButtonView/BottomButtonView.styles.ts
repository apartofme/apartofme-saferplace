import { StyleSheet, ViewStyle } from 'react-native';

export interface IBottomButtonViewStyles {
  container: ViewStyle;
}

export const styles = StyleSheet.create<IBottomButtonViewStyles>({
  container: {
    flex: 1,
  },
});
