import { StyleSheet, ViewStyle } from 'react-native';

interface IExrendedButtonStyles {
  container: ViewStyle;
  imageContainer: ViewStyle;
}

export const styles = StyleSheet.create<IExrendedButtonStyles>({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 66,
  },
  imageContainer: {
    marginLeft: 20,
  },
});
