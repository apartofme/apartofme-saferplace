import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IDancingTimerScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  description: TextStyle;
}

export const styles = StyleSheet.create<IDancingTimerScreenStyles>({
  container: {
    paddingTop: 128,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  title: {
    paddingTop: 132,
    paddingBottom: 24,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
  },
});
