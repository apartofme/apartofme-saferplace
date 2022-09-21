import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

interface ISelectPlayerSupportScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  playerList: ViewStyle;
  playerContainer: ViewStyle;
  activeBorder: ViewStyle;
  playerImage: ImageStyle;
  infoImage: ImageStyle;
  footer: TextStyle;
}

// TODO: change to correct styles
export const styles = StyleSheet.create<ISelectPlayerSupportScreenStyles>({
  container: {
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  title: {
    paddingBottom: 36,
  },
  playerList: {
    flexGrow: 0,
  },
  playerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
    marginBottom: 24,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: COLORS.BLACK,
  },
  activeBorder: {
    borderColor: '#AA82E0',
  },
  playerImage: {
    width: 76,
    height: 76,
    borderRadius: 50,
    backgroundColor: '#AA82E0',
  },
  infoImage: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginTop: 11,
    marginBottom: 18,
    backgroundColor: COLORS.BLACK,
  },
  footer: {
    textAlign: 'center',
  },
});
