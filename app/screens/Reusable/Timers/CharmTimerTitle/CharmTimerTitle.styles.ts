import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface ICharmTimerTitleScreenStyles {
  container: ViewStyle;
  timer: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<ICharmTimerTitleScreenStyles>({
  container: {
    paddingTop: 40,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  timer: {
    paddingTop: 59,
    paddingBottom: 87,
  },
  title: {
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
  },
});
