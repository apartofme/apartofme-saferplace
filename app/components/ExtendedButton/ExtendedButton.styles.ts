import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

interface IExrendedButtonStyles {
  container: ViewStyle;
  image: ImageStyle;
}

export const styles = StyleSheet.create<IExrendedButtonStyles>({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginLeft: 20,
  },
});
