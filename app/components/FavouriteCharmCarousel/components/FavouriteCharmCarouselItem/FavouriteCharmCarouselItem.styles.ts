import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

export interface IOnlyImageStyles {
  container: ViewStyle;
  contentContainer: ViewStyle;
  image: ImageStyle;
  title: TextStyle;
}

// TODO: change to correct styles
export const styles = StyleSheet.create<IOnlyImageStyles>({
  container: {
    flex: 1,
    padding: 70,
    justifyContent: 'flex-end',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 24,
    maxHeight: 240,
    borderRadius: 24,
  },
  image: {
    height: 120,
    width: 92,
  },
  title: {
    paddingTop: 8,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
