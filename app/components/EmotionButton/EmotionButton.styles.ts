import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../themes/colors';
import { hexTransparency } from '../../utils';

interface IEmojiButtonsStyles {
  row: ViewStyle;
  buttonContainer: ViewStyle;
  buttonImage: ImageStyle;
  emptyContainer: ViewStyle;
  activeButton: ViewStyle;
  title: TextStyle;
  image: ImageStyle;
}

export const styles = StyleSheet.create<IEmojiButtonsStyles>({
  row: {
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  title: {
    color: hexTransparency(COLORS.LIGHT_GREY, 90),
    textAlign: 'center',
    marginTop: 12,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 27,
    marginRight: 25,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 27,
    marginRight: 24,
    backgroundColor: hexTransparency(COLORS.PRIMARY_PURPLE, 90),
    borderRadius: 24,
    borderColor: hexTransparency(COLORS.PRIMARY_ORANGE, 90),
    borderWidth: 1,
  },
  buttonImage: {
    width: 64,
    height: 64,
    marginBottom: 12,
  },
  activeButton: {
    borderWidth: 4,
    backgroundColor: COLORS.PRIMARY_PURPLE,
    borderColor: COLORS.PRIMARY_ORANGE,
  },
  image: {
    opacity: 0.9,
  },
});
