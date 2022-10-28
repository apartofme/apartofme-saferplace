import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { WINDOW_COEFFICIENT } from '../../constants/window';

import { COLORS } from '../../themes/colors';

export interface IDialogViewStyles {
  container: ViewStyle;
  dialogContainer: ViewStyle;
  roundButton: ViewStyle;
  title: TextStyle;
  inactiveIconContainer: ViewStyle;
  iconContainer: ViewStyle;
}

export const styles = StyleSheet.create<IDialogViewStyles>({
  container: {
    marginTop: 88,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 40,
  },
  iconContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: -30,
  },
  dialogContainer: {
    flex: 1,
    maxHeight: 304 * WINDOW_COEFFICIENT,
    paddingVertical: 40,
    paddingHorizontal: 24,
    borderRadius: 24,
    borderWidth: 4,
    borderColor: COLORS.PRIMARY_ORANGE,
    backgroundColor: COLORS.PRIMARY_PURPLE,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    width: 240,
  },
  roundButton: {
    alignSelf: 'center',
    marginTop: -40,
    marginBottom: 16,
  },
  inactiveIconContainer: {
    opacity: 0.3,
  },
});
