import { StyleSheet, ViewStyle } from 'react-native';

interface IEmojiButtonsStyles {
  activeButton: ViewStyle;
  indicator: ViewStyle;
  grayBackground: ViewStyle;
  greenBackground: ViewStyle;
  yellowBackground: ViewStyle;
  orangeBackground: ViewStyle;
  redBackground: ViewStyle;
  purpleBackground: ViewStyle;
}

export const styles = StyleSheet.create<IEmojiButtonsStyles>({
  activeButton: {
    borderWidth: 1,
  },
  // TODO: change to correct styles
  indicator: {
    height: 200,
    width: 200,
  },
  grayBackground: {
    backgroundColor: 'gray',
  },
  greenBackground: {
    backgroundColor: 'green',
  },
  yellowBackground: {
    backgroundColor: 'yellow',
  },
  orangeBackground: {
    backgroundColor: 'orange',
  },
  redBackground: {
    backgroundColor: 'red',
  },
  purpleBackground: {
    backgroundColor: 'purple',
  },
});
