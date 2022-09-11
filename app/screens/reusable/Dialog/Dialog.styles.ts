import { StyleSheet, ViewStyle } from 'react-native';

export interface IDialogscreenStyles {
  container: ViewStyle;
  dialogContainer: ViewStyle;
  roundButton: ViewStyle;
}

export const styles = StyleSheet.create<IDialogscreenStyles>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 38,
  },
  dialogContainer: {
    width: 299,
    minHeight: 308,
    paddingTop: 40,
    paddingBottom: 48,
    paddingHorizontal: 24,
    borderRadius: 24,
    // TODO: change to real styles
    backgroundColor: '#cecece',
  },
  roundButton: {
    width: 64,
    height: 64,
    borderRadius: 100,
    transform: [
      {
        translateY: -32,
      },
    ],
    // TODO: change to real styles
    backgroundColor: 'purple',
  },
});
