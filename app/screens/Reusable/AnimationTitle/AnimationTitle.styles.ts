import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IAnimationTitleStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IAnimationTitleStyles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  title: {
    marginTop: 134,
    textAlign: 'center',
  },
});
