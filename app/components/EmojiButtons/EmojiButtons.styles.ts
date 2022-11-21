import { StyleSheet, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../constants/window';
import { COLORS } from '../../themes/colors';
import { hexTransparency } from '../../utils';

export interface IEmojiButtonsStyles {
  mainContainer: ViewStyle;
  blobIcon: ViewStyle;
  indicator: ViewStyle;
  container: ViewStyle;
  emojiButton: ViewStyle;
  emojiButtonActive: ViewStyle;
  emojiBorder: ViewStyle;
  emojiButtons: ViewStyle;
}

export const styles = StyleSheet.create<IEmojiButtonsStyles>({
  mainContainer: {
    flex: 1,
    paddingBottom: 16 * WINDOW_COEFFICIENT,
  },
  blobIcon: {
    position: 'absolute',
    bottom: WINDOW_COEFFICIENT * 500 - 500,
    left: 0,
    zIndex: 0,
  },
  indicator: {
    flex: 1,
    maxWidth: 170,
    paddingVertical: 16 * WINDOW_COEFFICIENT,
    paddingHorizontal: 32,
    backgroundColor: COLORS.PRIMARY_PURPLE,
    borderWidth: 2,
    borderColor: COLORS.PRIMARY_ORANGE,
    borderRadius: 40,
  },
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 27 * WINDOW_COEFFICIENT,
  },
  emojiButton: {
    marginVertical: 12,
    marginHorizontal: 8,
    opacity: 0.75,
  },
  emojiButtonActive: {
    opacity: 1,
  },
  emojiBorder: {
    position: 'absolute',
    top: -4 * WINDOW_COEFFICIENT,
    left: -4 * WINDOW_COEFFICIENT,
    width: 56 * WINDOW_COEFFICIENT,
    height: 56 * WINDOW_COEFFICIENT,
    borderWidth: 4,
    borderColor: COLORS.PRIMARY_ORANGE,
    borderRadius: 100,
  },
  emojiButtons: {
    flexGrow: 0,
    paddingHorizontal: 4,
    backgroundColor: hexTransparency(COLORS.PRIMARY_PURPLE, 90),
    borderWidth: 1,
    borderColor: COLORS.PRIMARY_ORANGE,
    borderRadius: 24,
  },
});
