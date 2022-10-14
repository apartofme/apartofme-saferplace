import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

interface IGroundingTimerScreenStyles {
  container: ViewStyle;
  image: ImageStyle;
  button: ViewStyle;
}

export const styles = StyleSheet.create<IGroundingTimerScreenStyles>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  image: {
    height: 350,
    width: 200,
    marginBottom: 40,
  },
  button: {
    marginVertical: 24,
  },
});
