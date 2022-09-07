import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

export interface IOnlyImageStyles {
  container: ViewStyle;
  image: ImageStyle;
}

export const styles = StyleSheet.create<IOnlyImageStyles>({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    flex: 1,
  },
});
