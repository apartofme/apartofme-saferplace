import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { COLORS } from '../../../themes/colors';
import { hexTransparency } from '../../../utils';

interface ISelectPlayerSupportScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  playerList: ViewStyle;
  playerContainer: ViewStyle;
  activePlayerContainer: ViewStyle;
  info: ViewStyle;
}

export const styles = StyleSheet.create<ISelectPlayerSupportScreenStyles>({
  container: {
    paddingTop: 40 * WINDOW_COEFFICIENT,
    paddingHorizontal: 24,
  },
  title: {
    paddingBottom: 36 * WINDOW_COEFFICIENT,
    color: COLORS.BRILLIANT_WHITE,
  },
  playerList: {
    flexGrow: 0,
  },
  playerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20 * WINDOW_COEFFICIENT,
    paddingHorizontal: 24,
    marginBottom: 24 * WINDOW_COEFFICIENT,
    backgroundColor: hexTransparency(COLORS.PRIMARY_PURPLE, 80),
    borderRadius: 24,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY_ORANGE,
  },
  activePlayerContainer: {
    backgroundColor: COLORS.PRIMARY_PURPLE,
    borderWidth: 4,
    marginBottom: 20 * WINDOW_COEFFICIENT,
  },
  info: {
    marginVertical: 20 * WINDOW_COEFFICIENT,
    alignSelf: 'center',
  },
});
