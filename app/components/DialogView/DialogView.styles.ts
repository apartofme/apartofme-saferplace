import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../themes/colors';

export interface IDialogViewStyles {
  container: ViewStyle;
  dialogContainer: ViewStyle;
  roundButton: ViewStyle;
  title: TextStyle;
  inactiveIconContainer: ViewStyle;
}

export const styles = StyleSheet.create<IDialogViewStyles>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 40,
    paddingBottom: 5,
  },
  dialogContainer: {
    marginTop: 12,
    minHeight: 304,
    paddingTop: 40,
    paddingBottom: 40,
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
    transform: [
      {
        translateY: -40,
      },
    ],
  },
  inactiveIconContainer: {
    opacity: 0.3,
  },
});
