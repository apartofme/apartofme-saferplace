import { StyleSheet, ViewStyle } from 'react-native';

interface ITimerScreenStyles {
  container: ViewStyle;
}

export const styles = StyleSheet.create<ITimerScreenStyles>({
  container: {
    flex: 1,
  },
});
