import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { COLORS } from '../../../themes/colors';
import { hexTransparency } from '../../../utils';

interface ISelectDrawBuildScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  listItemContainer: ViewStyle;
  listItemTitle: TextStyle;
  activeItem: ViewStyle;
  button: ViewStyle;
  maw200: ViewStyle;
  bottomButton: ViewStyle;
}

export const styles = StyleSheet.create<ISelectDrawBuildScreenStyles>({
  container: {
    paddingTop: 40 * WINDOW_COEFFICIENT,
    paddingHorizontal: 24,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    paddingBottom: 36 * WINDOW_COEFFICIENT,
  },
  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
    marginBottom: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY_ORANGE,
    backgroundColor: hexTransparency(COLORS.PRIMARY_PURPLE, 90),
  },
  listItemTitle: {
    paddingBottom: 12,
    color: COLORS.PRIMARY_ORANGE,
  },
  activeItem: {
    marginBottom: 20,
    borderWidth: 4,
    backgroundColor: COLORS.PRIMARY_PURPLE,
  },
  button: {
    marginHorizontal: 40,
    marginBottom: 24,
  },
  maw200: {
    maxWidth: 200,
  },
  bottomButton: {
    alignSelf: 'center',
    color: COLORS.BRILLIANT_WHITE,
    marginBottom: 24 * WINDOW_COEFFICIENT,
  },
});
