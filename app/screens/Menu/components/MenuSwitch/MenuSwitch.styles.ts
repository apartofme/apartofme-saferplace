import { StyleSheet, ViewStyle } from 'react-native';

interface IMenuSwitchStyles {
  container: ViewStyle;
}

export const styles = StyleSheet.create<IMenuSwitchStyles>({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
