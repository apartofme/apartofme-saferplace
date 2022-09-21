import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../../themes/colors';

interface ISelectPlayerScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  playerContainer: ViewStyle;
  activeBorder: ViewStyle;
  playerImage: ImageStyle;
}

// TODO: change to correct style
export const styles = StyleSheet.create<ISelectPlayerScreenStyles>({
  container: {
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  title: {
    paddingBottom: 36,
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
});
