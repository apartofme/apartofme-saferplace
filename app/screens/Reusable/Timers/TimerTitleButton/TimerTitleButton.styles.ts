import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface ITimerTitleButtonScreenStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<ITimerTitleButtonScreenStyles>({
  container: {
    paddingTop: 96,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  title: {
    marginTop: 106,
    textAlign: 'center',
  },
});
