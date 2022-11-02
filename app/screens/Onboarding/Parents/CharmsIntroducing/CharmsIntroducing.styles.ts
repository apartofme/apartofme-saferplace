import { StyleSheet, ViewStyle } from 'react-native';

interface ICharmsIntroducingScreenStyles {
  container: ViewStyle;
  carousel: ViewStyle;
}

export const styles = StyleSheet.create<ICharmsIntroducingScreenStyles>({
  container: {
    paddingBottom: 50,
  },
  carousel: {
    justifyContent: 'flex-end',
  },
});
