import { StyleSheet, ViewStyle } from 'react-native';

interface ISignUpCredentialsScreenStyles {
  container: ViewStyle;
  subtitle: ViewStyle;
  input: ViewStyle;
  bottomConatainer: ViewStyle;
}

export const styles = StyleSheet.create<ISignUpCredentialsScreenStyles>({
  container: {
    paddingHorizontal: 24,
  },
  subtitle: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 65,
  },
  input: {
    marginBottom: 16,
  },
  bottomConatainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 24,
  },
});
