import { StyleSheet, ViewStyle } from 'react-native';

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
    justifyContent: 'flex-end',
    paddingBottom: 24,
  },
  blobIcon: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 0,
  },
  indicator: {
    flex: 1,
    maxWidth: 170,
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: COLORS.PRIMARY_PURPLE,
    borderWidth: 2,
    borderColor: COLORS.PRIMARY_ORANGE,
    borderRadius: 40,
  },
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 27,
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
    top: -4,
    left: -4,
    width: 56,
    height: 56,
    borderWidth: 4,
    borderColor: COLORS.PRIMARY_ORANGE,
    borderRadius: 100,
  },
  emojiButtons: {
    flexGrow: 0,
    // paddingVertical: 12,
    paddingHorizontal: 4,
    backgroundColor: hexTransparency(COLORS.PRIMARY_PURPLE, 90),
    borderWidth: 1,
    borderColor: COLORS.PRIMARY_ORANGE,
    borderRadius: 24,
  },
});
