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
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginHorizontal: 38,
  },
  image: {
    flex: 1,
    width: '75%',
  },
  dialogContainer: {
    alignSelf: 'stretch',
    marginTop: 12,
    paddingVertical: 40,
    paddingHorizontal: 24,
    borderRadius: 24,
    // TODO: change to real styles
    borderWidth: 4,
    borderColor: '#FFB552',
    backgroundColor: '#3F1670',
  },
  title: {
    minHeight: 220,
    color: '#FFFFFF',
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
