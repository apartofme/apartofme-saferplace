import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IGroundingInputScreenStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IGroundingInputScreenStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 48,
    marginBottom: 36,
  },
});
