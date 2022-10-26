import { StyleSheet, ViewStyle } from 'react-native';

export interface IOnlyImageStyles {
  container: ViewStyle;
}

export const styles = StyleSheet.create<IOnlyImageStyles>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
