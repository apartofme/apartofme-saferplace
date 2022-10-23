import { StyleSheet, TextStyle } from 'react-native';

export interface IImageSubtitleStyles {
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<IImageSubtitleStyles>({
  // TODO: change to correct styles
  subtitle: {
    paddingTop: 50,
    marginBottom: 52,
    textAlign: 'center',
  },
});
