import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

export interface IOnlyImageStyles {
  container: ViewStyle;
  image: ImageStyle;
  title: TextStyle;
}

// TODO: change to correct styles
export const styles = StyleSheet.create<IOnlyImageStyles>({
  container: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 24,
    height: 240,
    backgroundColor: '#1A1A1A',
    borderRadius: 24,
  },
  image: {
    // TODO: change to correct size
    height: 120,
    width: 92,
  },
  title: {
    paddingTop: 8,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
