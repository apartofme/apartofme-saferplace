import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

export interface IOnlyImageStyles {
  container: ViewStyle;
  image: ImageStyle;
}

export const styles = StyleSheet.create<IOnlyImageStyles>({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 130,
  },
  image: {
    flex: 1,
    // TODO: change to correct size
    maxHeight: 200,
    maxWidth: 200,
    borderRadius: 100,
  },
});
