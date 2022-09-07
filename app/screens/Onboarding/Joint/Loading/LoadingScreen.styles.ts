import { StyleSheet, ViewStyle } from 'react-native';

interface ILoadingScreenStyles {
  container: ViewStyle;
}

export const styles = StyleSheet.create<ILoadingScreenStyles>({
  container: {
    flex: 1,
  },
});
