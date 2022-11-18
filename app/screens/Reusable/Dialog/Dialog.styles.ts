import { StyleSheet, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { COLORS } from '../../../themes/colors';

export interface IDialogscreenStyles {
  header: ViewStyle;
  container: ViewStyle;
  iconContainer: ViewStyle;
  dialogContainer: ViewStyle;
  roundButton: ViewStyle;
}

export const styles = StyleSheet.create<IDialogscreenStyles>({
  header: {
    zIndex: 100,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconContainer: {
    position: 'absolute',
    top: WINDOW_COEFFICIENT * 300 - 325,
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
  roundButton: {
    marginTop: -40,
    marginBottom: 16,
  },
});
