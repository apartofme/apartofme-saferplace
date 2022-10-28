import { StyleSheet, ViewStyle } from 'react-native';

interface IInitialScreenStyles {
  container: ViewStyle;
}

export const styles = StyleSheet.create<IInitialScreenStyles>({
  container: {
    flex: 1,
    marginTop: 151,
    alignItems: 'center',
  },
});
