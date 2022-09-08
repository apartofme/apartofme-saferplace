import { StyleSheet, ViewStyle } from 'react-native';

interface IMenuSwitchRowStyles {
  container: ViewStyle;
}

export const styles = StyleSheet.create<IMenuSwitchRowStyles>({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
