import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../constants/window';
import { COLORS } from '../../themes/colors';

export interface IDialogViewStyles {
  header: ViewStyle;
  container: ViewStyle;
  dialogContainer: ViewStyle;
  roundButton: ViewStyle;
  title: TextStyle;
  inactiveIconContainer: ViewStyle;
  iconContainer: ViewStyle;
}

export const styles = StyleSheet.create<IDialogViewStyles>({
  header: {
    position: 'absolute',
    top: 40,
    left: 8,
    zIndex: 100,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconContainer: {
    position: 'absolute',
    top: WINDOW_COEFFICIENT * 400 - 330,
  },
  dialogContainer: {
    height: 304,
    paddingVertical: 40,
    paddingHorizontal: 24,
    borderRadius: 24,
    borderWidth: 4,
    width: 303,
    borderColor: COLORS.PRIMARY_ORANGE,
    backgroundColor: COLORS.PRIMARY_PURPLE,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
  },
  roundButton: {
    marginTop: -40,
    marginBottom: 16,
  },
  inactiveIconContainer: {
    opacity: 0.3,
  },
});
