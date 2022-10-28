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
  roundButton: {
    alignSelf: 'center',
    marginTop: -40,
    marginBottom: 16,
  },
});
