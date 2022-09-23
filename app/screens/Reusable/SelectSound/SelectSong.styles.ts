import { StyleSheet, ViewStyle } from 'react-native';

interface ISelectSoundScreenStyles {
  container: ViewStyle;
  buttonsContainer: ViewStyle;
}

// TODO: change to correct styles
export const styles = StyleSheet.create<ISelectSoundScreenStyles>({
  container: {
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  buttonsContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 54,
    marginTop: 32,
  },
});
