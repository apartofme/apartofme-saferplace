import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

export interface IDialogscreenStyles {
  container: ViewStyle;
  buttonsContainer: ViewStyle;
  button: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<IDialogscreenStyles>({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 60,
    paddingBottom: 24,
  },
  // TODO: change to cerrect styles
  button: {
    height: 80,
    width: 80,
    borderRadius: 99,
    backgroundColor: COLORS.PRIMARY,
  },
  title: {
    textAlign: 'center',
    marginBottom: 60,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 40,
  },
});
