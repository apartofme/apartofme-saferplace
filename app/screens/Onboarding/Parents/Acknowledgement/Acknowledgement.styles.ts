import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IAcknowledgementScreenStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IAcknowledgementScreenStyles>({
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
