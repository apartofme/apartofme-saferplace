import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface ICharmTimerButtonScreenStyles {
  container: ViewStyle;
  timer: ViewStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<ICharmTimerButtonScreenStyles>({
  container: {
    paddingTop: 40,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  timer: {
    paddingVertical: 86,
  },
  subtitle: {
    textAlign: 'center',
  },
});
