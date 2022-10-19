import { StyleSheet, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

interface ICircleStyles {
  container: ViewStyle;
  circle: ViewStyle;
}

export const styles = StyleSheet.create<ICircleStyles>({
  container: {
    width: 24,
    height: 24,
    padding: 2,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: COLORS.PRIMARY_ORANGE,
  },
  circle: {
    flex: 1,
    borderRadius: 50,
    backgroundColor: COLORS.PRIMARY_ORANGE,
  },
});
