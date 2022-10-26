import { StyleSheet, ViewStyle } from 'react-native';

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
    //backgroundColor: 'red',
    top: -50,
  },
  dialogContainer: {
    flex: 1,
    maxHeight: 304,
    paddingVertical: 40,
    paddingHorizontal: 24,
    borderRadius: 24,
    borderWidth: 4,
    borderColor: COLORS.PRIMARY_ORANGE,
    backgroundColor: COLORS.PRIMARY_PURPLE,
  },
  roundButton: {
    alignSelf: 'center',
    transform: [
      {
        translateY: -40,
      },
    ],
  },
});
