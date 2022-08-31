import { StyleSheet, ViewStyle } from 'react-native';

interface ITimerScreenStyles {
  circle: ViewStyle;
}

export const styles = StyleSheet.create<ITimerScreenStyles>({
  // TODO: change to real styles
  circle: {
    width: 174,
    height: 174,
    borderRadius: 100,
    backgroundColor: '#AA82E0',
    opacity: 0.59,
  },
});
