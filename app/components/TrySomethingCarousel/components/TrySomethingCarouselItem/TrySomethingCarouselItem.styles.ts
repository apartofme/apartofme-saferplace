import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export interface IOnlyImageStyles {
  container: ViewStyle;
  contentContainer: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IOnlyImageStyles>({
  // TODO: change for correct styles
  container: {
    flex: 1,
    padding: 70,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 24,
    paddingHorizontal: 24,
  },
  title: {
    marginBottom: 16,
  },
});
