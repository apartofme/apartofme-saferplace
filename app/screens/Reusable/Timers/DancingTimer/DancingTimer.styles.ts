import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IDancingTimerScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  description: TextStyle;
  button: ViewStyle;
}

export const styles = StyleSheet.create<IDancingTimerScreenStyles>({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 40,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    paddingBottom: 24,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
  },
  button: {
    marginTop: 122,
  },
});
