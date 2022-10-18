import { StyleSheet, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

interface ICircleStyles {
  container: ViewStyle;
  activeBackground: ViewStyle;
}

export const styles = StyleSheet.create<ICircleStyles>({
  container: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLORS.PRIMARY_ORANGE,
  },
  activeBackground: {
    backgroundColor: COLORS.PRIMARY_ORANGE,
  },
});
