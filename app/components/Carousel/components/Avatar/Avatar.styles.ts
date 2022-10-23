import { StyleSheet, ViewStyle } from 'react-native';

export interface IAvatarStyles {
  container: ViewStyle;
  disabled: ViewStyle;
}

export const styles = StyleSheet.create<IAvatarStyles>({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
    opacity: 1,
    paddingBottom: 50,
  },
  disabled: {
    opacity: 0.5,
  },
});
