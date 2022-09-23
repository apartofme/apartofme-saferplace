import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface ICharmCompletedScreenStyles {
  container: ViewStyle;
  image: ImageStyle;
  title: TextStyle;
  description: TextStyle;
}

export const styles = StyleSheet.create<ICharmCompletedScreenStyles>({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 62,
    paddingHorizontal: 40,
  },
  // TODO: change to real styles
  image: {
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
    width: 300,
    height: 450,
    backgroundColor: '#90EE90',
  },
  title: {
    marginTop: 54,
    marginBottom: 24,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
  },
});
