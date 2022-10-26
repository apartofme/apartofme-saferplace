import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';
import { hexTransparency } from '../../../utils';

interface ISelectPlayerScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  playerList: ViewStyle;
  playerContainer: ViewStyle;
  activePlayerContainer: ViewStyle;
}

export const styles = StyleSheet.create<ISelectPlayerScreenStyles>({
  container: {
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  title: {
    paddingBottom: 36,
    color: COLORS.BRILLIANT_WHITE,
  },
  playerList: {
    flexGrow: 0,
  },
  playerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 24,
    marginBottom: 24,
    backgroundColor: hexTransparency(COLORS.PRIMARY_PURPLE, 80),
    borderRadius: 24,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY_ORANGE,
  },
  activePlayerContainer: {
    backgroundColor: COLORS.PRIMARY_PURPLE,
    borderWidth: 4,
    marginBottom: 20,
  },
});
