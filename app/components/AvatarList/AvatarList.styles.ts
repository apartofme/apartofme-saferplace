import { StyleSheet, ViewStyle } from 'react-native';

interface IAvatarListStyles {
  container: ViewStyle;
  childContainer: ViewStyle;
}

export const styles = StyleSheet.create<IAvatarListStyles>({
  container: {
    flex: 1,
    paddingLeft: 24,
    paddingTop: 30,
  },
  childContainer: {
    flex: 1,
    marginBottom: 48,
    marginRight: 24,
  },
});
