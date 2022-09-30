import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

export interface IDialogscreenStyles {
  container: ViewStyle;
  image: ImageStyle;
  dialogContainer: ViewStyle;
  title: TextStyle;
  roundButton: ViewStyle;
}

export const styles = StyleSheet.create<IDialogscreenStyles>({
  container: {
    flex: 1,
  },
  image: {
    alignSelf: 'center',
    width: 300,
    height: 320,
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
    justifyContent: 'center',
    alignItems: 'center',
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
