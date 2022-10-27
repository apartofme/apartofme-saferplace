import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../themes/colors';

interface IEmojiButtonsStyles {
  row: ViewStyle;
  buttonContainer: ViewStyle;
  buttonImage: ImageStyle;
  emptyContainer: ViewStyle;
  activeButton: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IEmojiButtonsStyles>({
  row: {
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  title: {
    color: COLORS.LIGHT_GREY,
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
    backgroundColor: COLORS.PRIMARY_PURPLE,
    borderRadius: 24,
    borderColor: COLORS.PRIMARY_ORANGE,
    borderWidth: 1,
  },
  buttonImage: {
    width: 64,
    height: 64,
    marginBottom: 12,
  },
  activeButton: {
    borderWidth: 4,
  },
});
