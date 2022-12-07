import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../themes/colors';

interface IEmojiButtonsStyles {
  row: ViewStyle;
  buttonContainer: ViewStyle;
  buttonImage: ImageStyle;
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
    color: COLORS.LIGHT_GREY,
    textAlign: 'center',
    marginLeft: 16,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: COLORS.PRIMARY_PURPLE,
    borderRadius: 24,
    marginBottom: 16,
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
    backgroundColor: COLORS.PRIMARY_PURPLE,
    borderColor: COLORS.PRIMARY_ORANGE,
  },
  image: {
    opacity: 0.9,
  },
});
