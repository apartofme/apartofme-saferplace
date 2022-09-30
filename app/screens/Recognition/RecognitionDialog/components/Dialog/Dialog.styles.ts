import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export interface IDialogStyles {
  container: ViewStyle;
  dialogContainer: ViewStyle;
  title: TextStyle;
  roundButton: ViewStyle;
}

export const styles = StyleSheet.create<IDialogStyles>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 38,
  },
  dialogContainer: {
    alignSelf: 'stretch',
    paddingTop: 40,
    paddingBottom: 48,
    paddingHorizontal: 24,
    borderRadius: 24,
    // TODO: change to real styles
    backgroundColor: '#cecece',
  },
  title: {
    minHeight: 220,
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
