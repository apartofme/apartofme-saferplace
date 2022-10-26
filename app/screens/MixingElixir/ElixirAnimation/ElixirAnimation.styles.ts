import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IElixirAnimationScreenStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IElixirAnimationScreenStyles>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -142,
  },
  title: {
    marginTop: 83,
  },
});
