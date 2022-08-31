import { StyleSheet, ViewStyle } from 'react-native';

export interface IEmojiSliderStyles {
  slider: ViewStyle;
  indicator: ViewStyle;
  grayBackground: ViewStyle;
  greenBackground: ViewStyle;
  yellowBackground: ViewStyle;
  orangeBackground: ViewStyle;
  redBackground: ViewStyle;
}

export const styles = StyleSheet.create<IEmojiSliderStyles>({
  // TODO: change for correct styles
  slider: {
    width: 200,
    height: 40,
  },
  // TODO: change for correct styles
  indicator: {
    height: 200,
    width: 200,
  },
  // TODO: change for correct styles
  grayBackground: {
    backgroundColor: 'gray',
  },
  // TODO: change for correct styles
  greenBackground: {
    backgroundColor: 'green',
  },
  // TODO: change for correct styles
  yellowBackground: {
    backgroundColor: 'yellow',
  },
  // TODO: change for correct styles
  orangeBackground: {
    backgroundColor: 'orange',
  },
  // TODO: change for correct styles
  redBackground: {
    backgroundColor: 'red',
  },
});
