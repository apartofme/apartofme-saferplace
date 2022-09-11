import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IAcknowledgementTitleScreenStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IAcknowledgementTitleScreenStyles>({
  container: {
    paddingHorizontal: 24,
    justifyContent: 'flex-end',
  },
  title: {
    marginTop: 55,
    marginBottom: 30,
    textAlign: 'center',
  },
});
