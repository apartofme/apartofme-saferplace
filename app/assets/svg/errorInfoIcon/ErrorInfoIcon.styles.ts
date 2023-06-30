import { StyleSheet, ViewStyle } from 'react-native';

interface IErrorInfoIconStyles {
  icon: ViewStyle;
}

export const styles = StyleSheet.create<IErrorInfoIconStyles>({
  icon: {
    paddingRight: 16,
    justifyContent: 'center',
  },
});
