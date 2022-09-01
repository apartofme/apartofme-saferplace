import { StyleSheet, ViewStyle } from 'react-native';

export interface IDialogViewStyles {
  container: ViewStyle;
  roundButton: ViewStyle;
}

export const styles = StyleSheet.create<IDialogViewStyles>({
  container: {
    flex: 1,
  },
  // TODO: change to real styles
  roundButton: {
    width: 64,
    height: 64,
    backgroundColor: 'purple',
    borderRadius: 100,
  },
});
