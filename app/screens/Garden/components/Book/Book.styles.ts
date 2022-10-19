import { StyleSheet, ViewStyle } from 'react-native';

export interface IBookStyles {
  bookContainer: ViewStyle;
}

export const styles = StyleSheet.create<IBookStyles>({
  bookContainer: {
    position: 'absolute',
    bottom: 24,
    zIndex: 10,
    left: 24,
  },
});
