import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IInstructionScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  instructionContainer: ViewStyle;
  instructionTitle: TextStyle;
  instructionImage: ImageStyle;
}

export const styles = StyleSheet.create<IInstructionScreenStyles>({
  container: {
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  title: {
    marginBottom: 47,
  },
  instructionContainer: {
    alignItems: 'center',
    marginBottom: 38,
  },
  instructionTitle: {
    marginTop: 15,
  },
  // TODO: change to correct styles
  instructionImage: {
    width: 72,
    height: 72,
    backgroundColor: '#036364',
    borderRadius: 50,
  },
});
