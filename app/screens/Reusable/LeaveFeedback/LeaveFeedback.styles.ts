import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface ILeaveFeedbackScreenStyles {
  container: ViewStyle;
  description: TextStyle;
  textCenter: TextStyle;
  bottomButton: ViewStyle;
}

export const styles = StyleSheet.create<ILeaveFeedbackScreenStyles>({
  container: {
    paddingHorizontal: 40,
    justifyContent: 'flex-end',
  },
  description: {
    paddingTop: 24,
    paddingBottom: 64,
  },
  textCenter: {
    textAlign: 'center',
  },
  bottomButton: {
    alignSelf: 'center',
    marginBottom: 24,
  },
});
