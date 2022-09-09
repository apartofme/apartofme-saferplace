import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface ITimerScreenStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<ITimerScreenStyles>({
  container: {
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 68,
  },
  title: {
    marginTop: 106,
    textAlign: 'center',
  },
});
