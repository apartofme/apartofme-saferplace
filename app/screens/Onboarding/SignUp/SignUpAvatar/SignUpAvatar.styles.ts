import { StyleSheet, ViewStyle } from 'react-native';

interface ISignUpAvatarScreenStyles {
  container: ViewStyle;
  carousel: ViewStyle;
}

export const styles = StyleSheet.create<ISignUpAvatarScreenStyles>({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  carousel: {
    alignSelf: 'center',
  },
});
