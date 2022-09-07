import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IAcknowledgementStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IAcknowledgementStyles>({
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
