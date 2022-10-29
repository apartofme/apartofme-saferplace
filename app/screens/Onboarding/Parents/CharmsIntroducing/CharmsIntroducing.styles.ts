import { StyleSheet, ViewStyle } from 'react-native';

interface ICharmsIntroducingScreenStyles {
  container: ViewStyle;
}

export const styles = StyleSheet.create<ICharmsIntroducingScreenStyles>({
  container: {
    justifyContent: 'space-evenly',
    paddingHorizontal: 40,
  },
});
