import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

interface IMenuButtonStyles {
  container: ViewStyle;
  image: ImageStyle;
}

export const styles = StyleSheet.create<IMenuButtonStyles>({
  container: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  image: {
    marginRight: 17,
  },
});
