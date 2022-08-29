import { StyleSheet, ViewStyle } from 'react-native';

export interface IRadioButtonStyles {
  container: ViewStyle;
}

export const styles = StyleSheet.create<IRadioButtonStyles>({
  container: {
    flex: 1,
  },
});
