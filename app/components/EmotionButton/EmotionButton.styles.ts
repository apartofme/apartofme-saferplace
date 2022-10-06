import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

interface IEmojiButtonsStyles {
  row: ViewStyle;
  buttonContainer: ViewStyle;
  buttonImage: ImageStyle;
  activeButton: ViewStyle;
}

export const styles = StyleSheet.create<IEmojiButtonsStyles>({
  row: {
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  // TODO: change to correct styles
  buttonContainer: {
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 40,
    backgroundColor: '#3C415C75',
    borderRadius: 24,
    borderColor: '#00DBC0',
    borderWidth: 1,
  },
  buttonImage: {
    width: 64,
    height: 64,
    marginBottom: 12,
  },
  activeButton: {
    borderWidth: 2,
    backgroundColor: '#3C415C',
  },
});
